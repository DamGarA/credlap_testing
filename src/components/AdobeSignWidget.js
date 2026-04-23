import React, { useEffect, useRef, useState } from "react";
import "./AdobeSignWidget.css";

/**
 * Componente para mostrar el widget de firma electrónica de Adobe Sign
 * Usa un iframe directo con src para que el prefill via hash fragment funcione.
 *
 * Props:
 * - widgetId: ID único del widget de Adobe Sign
 * - onSignComplete: Función callback cuando la firma se completa exitosamente
 * - onSignError: Función callback si hay error en la firma
 * - onLoad: Callback cuando el iframe terminó de cargar
 * - userName: Nombre del usuario (para logs)
 * - prefillData: Objeto con campos a pre-completar. Las claves deben coincidir
 *                con los nombres de los form fields definidos en Adobe Sign, Y cada
 *                campo debe tener activado "Es posible que el valor predeterminado
 *                proceda de una dirección URL" en el editor de Adobe Sign.
 *                Ej: { nombreCompleto: "Juan Perez", dni: "12345678", email: "..." }
 *                Ref: https://helpx.adobe.com/sign/adv-user/web-form/url-parameters.html
 */
export default function AdobeSignWidget({ widgetId, onSignComplete, onSignError, onLoad, userName = "Usuario", prefillData = null }) {
  const iframeRef = useRef(null);
  const completionHandledRef = useRef(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Resetear al cambiar widgetId
  useEffect(() => {
    completionHandledRef.current = false;
    setIframeLoaded(false);
  }, [widgetId]);

  // Construir URL del widget con prefill como hash fragments (#campo=valor).
  // Adobe Sign lee los valores de los campos desde el hash de la URL, NO desde
  // query params. Ref: https://helpx.adobe.com/sign/adv-user/web-form/url-parameters.html
  function buildWidgetUrl() {
    const base = `https://na3.documents.adobe.com/public/esignWidget?wid=${widgetId}`;
    if (!prefillData || typeof prefillData !== 'object') return base;

    const params = Object.entries(prefillData)
      .filter(([, value]) => value != null && value !== '')
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);

    return params.length > 0 ? `${base}#${params.join('&')}` : base;
  }

  // Escuchar eventos de Adobe Sign via postMessage
  useEffect(() => {
    function isAdobeSignOrigin(origin = "") {
      try {
        const hostname = new URL(origin).hostname;
        return (
          hostname.endsWith(".adobe.com") ||
          hostname.endsWith(".adobesign.com") ||
          hostname.endsWith(".echosign.com")
        );
      } catch {
        return false;
      }
    }

    function handleAdobeMessage(event) {
      if (!isAdobeSignOrigin(event.origin)) return;

      let payload = event.data;
      if (typeof payload === "string") {
        try { payload = JSON.parse(payload); } catch { return; }
      }
      if (!payload || typeof payload !== "object") return;

      const eventType = payload.event || payload.type;
      const pageName  = payload.pageName || payload.page;

      console.log("📨 [AdobeSignWidget] Evento recibido:", { eventType, pageName });

      if (eventType === "ERROR") {
        onSignError?.(payload);
        return;
      }

      const isCompletion =
        eventType === "ESIGN" ||
        eventType === "PREFILL" ||
        (eventType === "PAGE_LOAD" && (pageName === "POST_SIGN" || pageName === "POST_SEND"));

      if (isCompletion && !completionHandledRef.current) {
        completionHandledRef.current = true;
        console.log("✓ [AdobeSignWidget] Firma completada");
        onSignComplete?.(payload);
      }
    }

    window.addEventListener("message", handleAdobeMessage);
    return () => window.removeEventListener("message", handleAdobeMessage);
  }, [onSignComplete, onSignError]);

  function handleIframeLoad() {
    console.log("✓ [AdobeSignWidget] Iframe cargado");
    setIframeLoaded(true);
    onLoad?.();
  }

  if (!widgetId) {
    return (
      <div className="adobe-sign-widget-container">
        <p style={{ color: 'red' }}>Error: Widget ID inválido</p>
      </div>
    );
  }

  return (
    <div className="adobe-sign-widget-container">
      {!iframeLoaded && (
        <div className="adobe-sign-loading">
          <div className="spinner"></div>
          <p>Cargando formulario de firma digital...</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={buildWidgetUrl()}
        title="Adobe Sign Widget"
        className="adobe-sign-iframe"
        onLoad={handleIframeLoad}
        style={{
          border: 'none',
          display: iframeLoaded ? 'block' : 'none',
        }}
      />
    </div>
  );
}
