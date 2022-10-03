"use strict";
exports.id = 840;
exports.ids = [840];
exports.modules = {

/***/ 840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ProtectedRoute)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6795);




const ProtectedRoute = ({ children , preventRedirect  })=>{
    const { push , route  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { isAuth , status , rol , usuario  } = (0,_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuthContext */ .Eu)();
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!isAuth && !preventRedirect && status === _auth_context__WEBPACK_IMPORTED_MODULE_3__/* .STATUS.resolved */ .Q_.resolved) push('/login');
    }, [
        isAuth,
        preventRedirect,
        push,
        status
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (status === _auth_context__WEBPACK_IMPORTED_MODULE_3__/* .STATUS.resolved */ .Q_.resolved && route.includes('backoffice') && ![
            'ASESOR',
            'ADMINISTRADOR',
            'SUPERADMINISTRADOR'
        ].includes(rol)) {
            push('/');
        }
    }, [
        push,
        rol,
        route,
        status
    ]);
    if (!usuario || !isAuth) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-nowrap flex-row items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-16 flex items-center",
                children: "Cargando ..."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner_cont items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "material spinner"
                })
            })
        ]
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    }));
};


/***/ })

};
;