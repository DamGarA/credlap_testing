import React, { useEffect, useRef, useState } from "react";
import "./AdobeSignWidget.css";

/**
 * Componente para mostrar el widget de firma electrónica de Adobe Sign
 * Carga el script de Adobe Sign en un iframe para evitar conflictos con document.write()
 * 
 * Props:
 * - widgetId: ID único del widget de Adobe Sign
 * - onSignComplete: Función callback cuando la firma se completa exitosamente
 * - onSignError: Función callback si hay error en la firma
 * - userName: Nombre del usuario (para logs)
 */
export default function AdobeSignWidget({ widgetId, onSignComplete, onSignError, onLoad, userName = "Usuario" }) {
  const iframeRef = useRef(null);
  const completionHandledRef = useRef(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    completionHandledRef.current = false;
  }, [widgetId]);

  // Primer efecto: crear el iframe vacío apenas el componente monta
  useEffect(() => {
    if (!widgetId) {
      console.error('❌ [AdobeSignWidget] Widget ID inválido');
      onSignError?.({ error: "Widget ID inválido" });
      return;
    }
    // Marcar que estamos listos para crear el iframe
    setIframeReady(true);
  }, [widgetId]);

  // Segundo efecto: cargar el widget una vez que el iframe está disponible
  useEffect(() => {
    if (!iframeReady || !iframeRef.current) {
      return;
    }

    try {
      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;

      if (!iframeDoc) {
        console.error('❌ [AdobeSignWidget] No se puede acceder al documento del iframe');
        return;
      }

      // HTML base para el iframe - CSS mínimo para evitar scroll horizontal
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html { width: 100%; height: 100%; }
            body {
              width: 114%;
              height: 100%;
              overflow: hidden;

              -webkit-overflow-scrolling: touch;
            }
            @media (max-width: 768px) {
              html {
                transform: scale(0.70);
                transform-origin: top left;
                width: 130%;
                height: 100%;
              }
              body {
                height: 145%;
                overflow: hidden;
              }
            }
          </style>
        </head>
        <body>
          <script type='text/javascript' language='JavaScript' src='https://na3.documents.adobe.com/public/embeddedWidget?wid=${widgetId}'></script>
          <script>
            // Reenviar mensajes de Adobe Sign al window principal (main window)
            // Adobe Sign envía postMessage a window.parent (este iframe),
            // pero el listener está en el main window, así que reenviamos
            window.addEventListener('message', function(event) {
              try {
                if (window.parent && window.parent !== window) {
                  window.parent.postMessage(event.data, '*');
                }
              } catch(e) {
                // Silenciar errores cross-origin
              }
            });
          </script>
        </body>
        </html>
      `;

      // Escribir el contenido HTML en el iframe
      iframeDoc.open();
      iframeDoc.write(htmlContent);
      iframeDoc.close();

      // Detectar cuando el widget se ha cargado
      let checkAttempts = 0;
      const maxAttempts = 40; // 4 segundos con 100ms de intervalo

      const checkWidgetLoaded = setInterval(() => {
        checkAttempts++;
        try {
          // Verificar si el body tiene contenido real (no solo el script)
          const hasContent = iframeDoc.body.innerHTML.length > 200;

          if (hasContent) {
            clearInterval(checkWidgetLoaded);
            // Pequeño delay para asegurar que el contenido está completamente renderizado
            setTimeout(() => {
              setIframeLoaded(true);
              onLoad?.();
            }, 300);
          } else if (checkAttempts >= maxAttempts) {
            clearInterval(checkWidgetLoaded);
            setIframeLoaded(true);
            onLoad?.();
          }
        } catch (e) {
          // Cross-origin error, pero es esperado
          if (checkAttempts >= maxAttempts) {
            clearInterval(checkWidgetLoaded);
            setIframeLoaded(true);
            onLoad?.();
          }
        }
      }, 100);

      return () => {
        clearInterval(checkWidgetLoaded);
      };
    } catch (error) {
      console.error('❌ [AdobeSignWidget] Error inicializando widget:', error);
      setTimeout(() => setIframeLoaded(true), 1000);
      onSignError?.({ error: error.message });
    }
  }, [iframeReady, widgetId, userName, onSignError]);

  useEffect(() => {
    function isAdobeSignOrigin(origin = "") {
      try {
        const hostname = new URL(origin).hostname;
        return (
          hostname.endsWith(".adobe.com") ||
          hostname.endsWith(".adobesign.com") ||
          hostname.endsWith(".echosign.com")
        );
      } catch (error) {
        return false;
      }
    }

    function handleAdobeMessage(event) {
      if (!isAdobeSignOrigin(event.origin)) {
        return;
      }

      let payload = event.data;

      if (typeof payload === "string") {
        try {
          payload = JSON.parse(payload);
        } catch (error) {
          return;
        }
      }

      if (!payload || typeof payload !== "object") {
        return;
      }

      const eventType = payload.event || payload.type;
      const pageName = payload.pageName || payload.page;

      if (eventType === "ERROR") {
        onSignError?.(payload);
        return;
      }

      const isCompletionEvent =
        eventType === "ESIGN" ||
        eventType === "PREFILL" ||
        (eventType === "PAGE_LOAD" &&
          (pageName === "POST_SIGN" || pageName === "POST_SEND"));

      if (isCompletionEvent && !completionHandledRef.current) {
        completionHandledRef.current = true;
        onSignComplete?.(payload);
      }
    }

    window.addEventListener("message", handleAdobeMessage);

    // También escuchar en el contentWindow del iframe como respaldo
    let iframeWindow = null;
    if (iframeLoaded && iframeRef.current?.contentWindow) {
      try {
        iframeWindow = iframeRef.current.contentWindow;
        iframeWindow.addEventListener("message", handleAdobeMessage);
      } catch (e) {
        console.warn('[AdobeSignWidget] No se pudo agregar listener al iframe (cross-origin):', e.message);
      }
    }

    return () => {
      window.removeEventListener("message", handleAdobeMessage);
      if (iframeWindow) {
        try {
          iframeWindow.removeEventListener("message", handleAdobeMessage);
        } catch (e) {}
      }
    };
  }, [onSignComplete, onSignError, iframeLoaded]);

  if (!widgetId) {
    return (
      <div className="adobe-sign-widget-container">
        <p style={{ color: 'red' }}>Error: Widget ID inválido</p>
      </div>
    );
  }

  return (
    <div className="adobe-sign-widget-container">
      <div className={`adobe-sign-loading ${iframeLoaded ? "hidden" : ""}`}>
        <div className="spinner"></div>
        <p>Cargando formulario de firma digital...</p>
      </div>

      <iframe
        ref={iframeRef}
        title="Adobe Sign Widget"
        className="adobe-sign-iframe"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: iframeLoaded ? 'block' : 'none'
        }}
      />
    </div>
  );
}
