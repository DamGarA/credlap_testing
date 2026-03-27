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
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);

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

    console.log(`📋 [AdobeSignWidget] Cargando script de Adobe Sign para ${userName}`);

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
              width: 100%; 
              height: 100%; 
              overflow-x: hidden; 
              overflow-y: auto;
              -webkit-overflow-scrolling: touch;
            }
          </style>
        </head>
        <body>
          <script type='text/javascript' language='JavaScript' src='https://na3.documents.adobe.com/public/embeddedWidget?wid=${widgetId}'></script>
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
            console.log("✓ [AdobeSignWidget] Widget de Adobe Sign cargado exitosamente");
            // Pequeño delay para asegurar que el contenido está completamente renderizado
            setTimeout(() => {
              setIframeLoaded(true);
              onLoad?.();
            }, 300);
          } else if (checkAttempts >= maxAttempts) {
            clearInterval(checkWidgetLoaded);
            console.log("✓ [AdobeSignWidget] Widget de Adobe Sign renderizado (timeout)");
            setIframeLoaded(true);
            onLoad?.();
          }
        } catch (e) {
          // Cross-origin error, pero es esperado
          if (checkAttempts >= maxAttempts) {
            clearInterval(checkWidgetLoaded);
            console.log("✓ [AdobeSignWidget] Widget de Adobe Sign cargado (cross-origin)");
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
