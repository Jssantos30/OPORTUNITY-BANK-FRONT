"use strict";
exports.id = 4780;
exports.ids = [4780];
exports.modules = {

/***/ 6960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getData)
/* harmony export */ });
const getData = async (url)=>{
    try {
        const token = window.localStorage.getItem('access_token');
        if (token === 'null' || token === '') throw Error('Token is missing');
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        });
        return {
            responseComplete: response.ok,
            response,
            error: null
        };
    } catch (error) {
        return {
            error: [
                'Unexpected token < in JSON at position 0',
                'Unexpected end of JSON input', 
            ].includes(error.message) ? 'Hubo un error, por favor intenta nuevamente' : error.message
        };
    }
};


/***/ }),

/***/ 6376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ protectRouteAndRedirect)
/* harmony export */ });
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);

function protectRouteAndRedirect(req, res) {
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res);
    const token = cookies.get('bank-token');
    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: true
            }
        };
    }
    return {
        token
    };
}


/***/ })

};
;