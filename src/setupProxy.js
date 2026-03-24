const { createProxyMiddleware } = require("http-proxy-middleware");

// CRA (react-scripts) usa este archivo para reenviar requests durante desarrollo.
// Esto evita el error de CORS del backend desde el navegador.
module.exports = function (app) {
  app.use(
    "/sbfintech",
    createProxyMiddleware({
      target: "https://credlaptest.sbfintech.net",
      changeOrigin: true,
      secure: true,
      // /sbfintech/API/v1/...  =>  /API/v1/...
      pathRewrite: { "^/sbfintech": "" },
    })
  );
};

