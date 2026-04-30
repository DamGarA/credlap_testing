import axios from "axios";

// Servicio para Carga SUBE, Recarga de Saldo y Pago de Facturas
// En desarrollo (npm start): usa proxy local (/sbfintech) para evitar CORS
// En producción (npm run build): usa URL absoluta (https://credlap.sbfintech.net)
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? '/sbfintech' 
  : 'https://credlap.sbfintech.net';
const BASE_URL = `${API_BASE_URL}/API/v1`;
const API_LOGIN = {
  Username: "DAMIAN",
  Password: "Damian2026**",
};

let cachedToken = null;
let cachedTokenExpiresAtMs = 0;

function esRespuestaApiOk(data) {
  if (!data) {
    console.warn('⚠️  [esRespuestaApiOk] Data es null/undefined');
    return false;
  }
  if (Object.prototype.hasOwnProperty.call(data, "errorCode")) {
    const isOk = data.errorCode === 0;
    return isOk;
  }
  if (Object.prototype.hasOwnProperty.call(data, "status")) {
    const isOk = String(data.status).toUpperCase() === "OK";
    return isOk;
  }
  return true;
}

function limpiarBase64(dataUrl) {
  if (!dataUrl) {
    console.warn('⚠️  [limpiarBase64] Data URL vacía');
    return null;
  }
  const partes = dataUrl.split(",");
  const base64Limpio = partes.length > 1 ? partes[1] : dataUrl;
  return base64Limpio;
}

async function obtenerTokenApi() {
  const ahora = Date.now();
  // Le damos margen para evitar usar tokens ya expirados.
  if (cachedToken && ahora < cachedTokenExpiresAtMs - 3000) {
    return cachedToken;
  }

  try {
    const loginResponse = await axios.post(
      `${BASE_URL}/login/authenticate`,
      API_LOGIN,
      { headers: { "Content-Type": "application/json" } }
    );

    const token = loginResponse?.data?.token;
    const expiresInSeconds =
      loginResponse?.data?.expires_in ?? loginResponse?.data?.expiresIn ?? 30;

    cachedToken = token;
    cachedTokenExpiresAtMs = ahora + expiresInSeconds * 1000;
    return token;
  } catch (error) {
    console.error('❌ [SBFintechService] Error obteniendo token:', error.message);
    console.error('📋 [SBFintechService] Response:', error.response?.data);
    throw error;
  }
}

function headersConToken(token) {
  // Para que coincida con el Postman que enviaste: usar Authorization Bearer.
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  
  // En producción, agregar headers para CORS si es necesario
  if (process.env.NODE_ENV === 'production') {
    headers['Access-Control-Allow-Credentials'] = 'true';
  }
  
  return headers;
}

function construirPayloadScore(formSolicitud) {  
  const tieneSube = Object.prototype.hasOwnProperty.call(
    formSolicitud,
    "numeroTarjetaSube"
  );
  const tieneConfirmarTelefono = Object.prototype.hasOwnProperty.call(
    formSolicitud,
    "confirmarTelefono"
  );
  const tieneCodigoFactura = Object.prototype.hasOwnProperty.call(
    formSolicitud,
    "codigoFactura"
  );

  let lineaCredito = 0;
  let origen = "";
  let auxiliar001 = "";
  let auxiliar002 = "";
  let auxiliar003 = "";

  if (tieneSube) {
    // Carga SUBE
    lineaCredito = 84;
    origen = "Recarga de SUBE";
    auxiliar001 = formSolicitud.numeroTarjetaSube || "";
    auxiliar002 = formSolicitud.provincia || "";
    auxiliar003 = "";
  } else if (tieneConfirmarTelefono) {
    // Recarga de saldo de celular
    lineaCredito = 86;
    origen = formSolicitud.empresa || "Recarga de saldo";
    auxiliar001 = formSolicitud.telefono || "";
    auxiliar002 = formSolicitud.empresa || "";
    auxiliar003 = formSolicitud.provincia || "";
  } else if (tieneCodigoFactura) {
    // Pago de servicios / factura
    lineaCredito = 85;
    origen = formSolicitud.empresa || "Pago de servicios";
    auxiliar001 = formSolicitud.codigoFactura || "";
    auxiliar002 = formSolicitud.empresa || "";
    auxiliar003 = formSolicitud.provincia || "";
  }

  const monto = 25000;

  const payload = {
    nombre: formSolicitud.nombre,
    apellido: formSolicitud.apellido,
    celular: formSolicitud.telefono,
    genero: formSolicitud.genero,
    nroDocumento: formSolicitud.dni,
    email: formSolicitud.email,
    ingresos: 0,
    monto: monto,
    cuotas: 1,
    lineaCredito: lineaCredito,
    diaPago: 1,
    importeCuota: monto,
    comercializadora_sucursal: 0,
    origen: origen,
    enviarMailOnboarding: false,
    Auxiliar001: auxiliar001,
    Auxiliar002: auxiliar002,
    Auxiliar003: auxiliar003,
  };  
  return payload;
}

function construirDocumentos(formSolicitud, idReferencia) {
  const documentos = [];

  if (formSolicitud.imagenDniFrente) {
    documentos.push({
      idReferencia,
      nombreArchivo: "dni_frente.jpeg",
      descripcion: "Frente del DNI",
      base64: limpiarBase64(formSolicitud.imagenDniFrente),
    });
  }

  if (formSolicitud.imagenDniDorso) {
    documentos.push({
      idReferencia,
      nombreArchivo: "dni_dorso.jpeg",
      descripcion: "Dorso del DNI",
      base64: limpiarBase64(formSolicitud.imagenDniDorso),
    });
  }

  if (formSolicitud.imagenSelfie) {
    documentos.push({
      idReferencia,
      nombreArchivo: "selfie.jpeg",
      descripcion: "Selfie con DNI",
      base64: limpiarBase64(formSolicitud.imagenSelfie),
    });
  }

  if (formSolicitud.imagenFactura) {
    documentos.push({
      idReferencia,
      nombreArchivo: "factura.jpeg",
      descripcion: "Factura",
      base64: limpiarBase64(formSolicitud.imagenFactura),
    });
  }

  documentos.forEach((doc, idx) => {
  });
  return documentos;
}

export default async function enviarSolicitud(formSolicitud, callback) {
  try {
    const token = await obtenerTokenApi();
    const payloadScore = construirPayloadScore(formSolicitud);    
    const scoreResponse = await axios.post(
      `${BASE_URL}/lending/score`,
      payloadScore,
      { headers: headersConToken(token) }
    );
    const data = scoreResponse.data || {};
    if (!esRespuestaApiOk(data)) {
      console.error('❌ [enviarSolicitud] Respuesta API no OK:', data);
      throw new Error(data.errorDescription || "Error en respuesta de score");
    }

    const idReferencia =
      data.idReferencia || data.idPreaprobado || data.id || data.preaprobado;

    if (idReferencia) {
      const documentos = construirDocumentos(formSolicitud, idReferencia);
      
      for (let i = 0; i < documentos.length; i++) {
        const doc = documentos[i];        
        try {
          const uploadResp = await axios.post(
            `${BASE_URL}/lending/uploadDoc`,
            doc,
            {
              headers: headersConToken(token),
            }
          );

          if (!esRespuestaApiOk(uploadResp?.data)) {
            console.error(`❌ [enviarSolicitud] Respuesta no OK para ${doc.nombreArchivo}:`, uploadResp?.data);
            throw new Error(
              uploadResp?.data?.errorDescription ||
                `Error subiendo documento ${doc.nombreArchivo}`
            );
          }
        } catch (docError) {
          console.error(`❌ [enviarSolicitud] Error subiendo ${doc.nombreArchivo}:`, docError.message);
          console.error(`   Detalles:`, docError.response?.data || docError);
          throw docError;
        }
      }
    } else {
      console.warn('⚠️  [enviarSolicitud] Sin ID de referencia, saltando upload de documentos');
    }

    const resultado = data.preaprobado ? "preaprobado" : "rechazado";
    callback({
      request: {
        responseURL: `/solicitud-resultado?resultado=${resultado}`,
      },
      data: scoreResponse.data,
    });
  } catch (error) {
    console.error('\n========== ❌ ERROR EN ENVIO SOLICITUD ==========');
    console.error('Error message:', error.message);
    console.error('Error details:', error);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
      console.error('Response headers:', error.response.headers);
    }
    console.error('========== FIN ERROR ==========\n');
    
    callback({
      isError: true,
      request: {
        responseURL: "/solicitud-resultado?resultado=error",
      },
      error,
    });
  }
}
