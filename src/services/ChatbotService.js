// urls:
//Home: https://go.botmaker.com/rest/webchat/p/GJ2BGG62Q0/init.js
//Prestamo/PagarCuota: https://go.botmaker.com/rest/webchat/p/S1VILUNVZ5/init.js
//Reclamos/Ayuda: https://go.botmaker.com/rest/webchat/p/6PGD8XS6ER/init.js

function insertChatBot(url) {
  let js = document.createElement("script");
  js.type = "text/javascript";
  js.async = 1;
  js.src = url;
  document.body.appendChild(js);
}

function deleteChatBot() {
  const divToDelete = document.querySelector(
    'div[style*="z-index: 2147483647"]'
  );
  if (divToDelete) {
    const divParent = divToDelete.parentNode;
    divParent.removeChild(divToDelete);
  }
}

module.exports = {
  insertChatBot,
  deleteChatBot,
};
