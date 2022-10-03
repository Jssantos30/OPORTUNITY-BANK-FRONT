"use strict";
(() => {
var exports = {};
exports.id = 4994;
exports.ids = [4994];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 7202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);

const secure = "production" === 'production';
async function handler(req, res) {
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res, {
        secure
    });
    try {
        cookies.set('bank-token', req.body.token, {
            secure: false,
            httpOnly: true,
            sameSite: 'lax'
        });
        return res.status(200).json({
            ok: true
        });
    } catch (error) {
        return res.status(400).json(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7202));
module.exports = __webpack_exports__;

})();