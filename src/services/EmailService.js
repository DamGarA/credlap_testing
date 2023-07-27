import axios from "axios";
import { ZOHO_WRAPPER_HOST } from "../Config";

export function sendMailWithAttachments(
  fromMail,
  toEmail,
  data,
  pageTitle,
  urlPage,
  callback,
  attachments
) {
  if (!attachments)
    sendMail(fromMail, toEmail, data, pageTitle, urlPage, callback);
  else {
    let promises = [];
    let zoho_attachments = [];
    let isError = false;
    for (var i = 0; i < attachments.length; i++) {
      var formData = new FormData();
      var file = attachments[i];
      var uploadFileURL =
        ZOHO_WRAPPER_HOST + "upload?fileName=" + attachments[i].name;
      formData.append("file", file);
      promises.push(
        axios
          .post(uploadFileURL, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            console.log(res);
            zoho_attachments.push(res.data);
          })
          .catch((error) => {
            isError = true;
          })
      );
    }
    Promise.all(promises)
      .then((res) => {
        if (isError)
          callback({
            isError: true,
            result: "Ocurrió un error al intentar enviar los archivos adjuntos",
          });
        else {
          data.attachments = zoho_attachments;
          sendMail(fromMail, toEmail, data, pageTitle, urlPage, callback);
        }
      })
      .catch((error) => {
        callback({
          isError: true,
          result: error,
        });
      });
  }
}

export function uploadFileToZoho(file, fileName, callbackUpload) {
  var uploadFileURL = ZOHO_WRAPPER_HOST + "upload?fileName=" + fileName;
  var formData = new FormData();
  formData.append("file", file);
  axios
    .post(uploadFileURL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      callbackUpload(res);
    })
    .catch((error) => {
      callbackUpload({
        isError: true,
        result: error,
      });
    });
}

export function sendMailWithAttachment(
  fromMail,
  toEmail,
  data,
  pageTitle,
  urlPage,
  callback,
  file,
  fileName
) {
  if (file && fileName) {
    uploadFileToZoho(file, fileName, (res) => {
      console.log(res);
      if (!res || res.isError)
        callback({
          isError: true,
          result: res.result,
        });
      else {
        data.attachments = [res.data];
        return sendMail(fromMail, toEmail, data, pageTitle, urlPage, callback);
      }
    });
  }
}

export function sendMail(
  fromMail,
  toEmail,
  data,
  pageTitle,
  urlPage,
  callback
) {
  var sendMailURL = ZOHO_WRAPPER_HOST + "send_mail";
  var contenido =
    '<div style="font-family:arial;font-size:12px;background-color:#eceff4;text-align:center;padding:20px"><div style="width:600px;background-color:#FFF;margin-left:auto;margin-right:auto;text-align:left;padding:20px;word-wrap:break-word;"><a href="https://credlap.com/"><img src="https://credlap.com/static/media/logo.6ef4334f5c317a4d791d.png" width="200" height="45"></a><div style="margin-top:15px"><b>MENSAJE DESDE EL FORMULARIO</b><br>';
  contenido +=
    pageTitle +
    ' - <a href="' +
    urlPage +
    '">' +
    urlPage +
    '</a></div><hr/><p><span style="color:#999">';
  Object.entries(data).forEach(([k, v]) => {
    if (k != "attachments")
      contenido +=
        '<p><span style="color:#999">' + k + ":</span> " + v + "</p>";
  });
  contenido +=
    '<div style="text-align:center;margin-top:25px;color:#333">Respondé haciendo click aquí<br><br><a href="mailto:' +
    fromMail +
    '" style="color:#FFF;text-decoration:none;background-color:#60b350;padding:10px;border-radius:8px"><b>RESPONDER</b></a></div></div><br><div style="font-size:12px"><b>Por favor no respondas a la dirección del remitente.</b><br>Puedes responder desde el botón de RESPONDER dentro del cuerpo este correo o escribirle directamente.</div></div>';
  axios
    .post(
      sendMailURL,
      {
        to_mail: toEmail,
        subject: "Mensaje de sitio web Credlap",
        content: contenido,
        attachments: data.attachments,
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      callback({
        isError: true,
        result: error,
      });
    });
}
