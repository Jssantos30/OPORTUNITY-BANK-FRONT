"use strict";
exports.id = 5862;
exports.ids = [5862];
exports.modules = {

/***/ 5862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ ProtectedRouteSuperAdmin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6795);




const ProtectedRouteSuperAdmin = ({ children , preventRedirect  })=>{
    const { push , route  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { isAuth , status , rol  } = (0,_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuthContext */ .Eu)();
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!isAuth && !preventRedirect && status === _auth_context__WEBPACK_IMPORTED_MODULE_3__/* .STATUS.resolved */ .Q_.resolved) push('/login');
    }, [
        isAuth,
        preventRedirect,
        push,
        status
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (route.includes('backoffice/roles') && ![
            'SUPERADMINISTRADOR'
        ].includes(rol)) {
            push('/backoffice');
        }
    }, [
        rol,
        route,
        isAuth
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (route.includes('backoffice/configuracion-interes') && ![
            'SUPERADMINISTRADOR'
        ].includes(rol)) {
            push('/backoffice');
        }
    }, [
        rol,
        route,
        isAuth
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    }));
};


/***/ })

};
;