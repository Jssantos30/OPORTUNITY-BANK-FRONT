"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);\n\nconst secure = \"development\" === 'production';\nasync function handler(req, res) {\n    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res, {\n        secure\n    });\n    try {\n        cookies.set('bank-token', req.body.token, {\n            secure: false,\n            httpOnly: true,\n            sameSite: 'lax'\n        });\n        return res.status(200).json({\n            ok: true\n        });\n    } catch (error) {\n        return res.status(400).json(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBRTdCLEtBQUssQ0FBQ0MsTUFBTSxHQUZaLENBQWEsaUJBRTJCLENBQVk7QUFFckMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEdBQUcsQ0FBQ0wsZ0RBQU8sQ0FBQ0csR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUFDSCxNQUFNO0lBQUMsQ0FBQztJQUVoRCxHQUFHLENBQUMsQ0FBQztRQUNISSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFZLGFBQUVILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUN6Q1AsTUFBTSxFQUFDLEtBQUs7WUFDWlEsUUFBUSxFQUFFLElBQUk7WUFDZEMsUUFBUSxFQUFFLENBQUs7UUFDakIsQ0FBQztRQUlELE1BQU0sQ0FBQ04sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxFQUFFLEVBQUUsSUFBSTtRQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUNWLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRSxLQUFLO0lBQ25DLENBQUM7QUFHSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnY29va2llcydcclxuXHJcbmNvbnN0IHNlY3VyZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLCByZXMsIHsgc2VjdXJlIH0pXHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb29raWVzLnNldCgnYmFuay10b2tlbicsIHJlcS5ib2R5LnRva2VuLCB7XHJcbiAgICAgIHNlY3VyZTpmYWxzZSxcclxuICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgIHNhbWVTaXRlOiAnbGF4JyxcclxuICAgIH0pXHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb2s6IHRydWUgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKVxyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvb2tpZXMiLCJzZWN1cmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29va2llcyIsInNldCIsImJvZHkiLCJ0b2tlbiIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJzdGF0dXMiLCJqc29uIiwib2siLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();