import axios from "axios";

export default function enviarSolicitud(formSolicitud, callback) {
  var serviceURL =
    "https://credlap.sbfintech.net/WebHooks.aspx?Origen=WS&Accion=Preaprobado&public_token=193591d2a45162403d1f69f64efefd50&";
  serviceURL +=
    "return_url=" +
    window.location.origin +
    "/solicitud-resultado?resultado=preaprobado&";
  serviceURL +=
    "rechaz_url=" +
    window.location.origin +
    "/solicitud-resultado?resultado=rechazado&";
  serviceURL +=
    "error_url=" +
    window.location.origin +
    "/solicitud-resultado?resultado=error&";
  serviceURL += "Ref=&dni=" + formSolicitud.dni + "&";
  serviceURL += "nombre=" + formSolicitud.nombre + "&";
  serviceURL += "sexo=" + formSolicitud.genero + "&";
  serviceURL += "apellido=" + formSolicitud.apellido + "&";
  serviceURL += "monto=" + formSolicitud.monto + "&";
  serviceURL += "mail=" + formSolicitud.email + "&";
  serviceURL += "celular=" + formSolicitud.telefono + "&";
  serviceURL += "cuenta=0&";
  serviceURL += "telefono=" + formSolicitud.actividad + "&";
  serviceURL +=
    "cuotas=12&cuotaPromedio=0&diaCobro=1&keyword=&matchtype=0&ingreso=0&linea=0";
  // axios
  //   .post(serviceURL, null, {
  //     headers: {
  //       Accept: "text/html",
  //     },
  //   })
  //   .then((res) => {
  //     //callback(res);

  //   });
  // .catch((error) => {
  //   if (
  //     error.response &&
  //     (error.response.status === 403 || error.response.status === 404)
  //   )
  //     callback(error.response);
  //   else callback({ isError: true });
  // });

  return serviceURL;
}
//esta ultima parte usa la funcion que maneja la respuesta. no se usa actualmente
