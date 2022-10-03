"use strict";
exports.id = 8908;
exports.ids = [8908];
exports.modules = {

/***/ 8908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(609);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5181);





const LayoutSuperAdmin = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "bg-app",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wrapper-backoffice flex flex-col mx-auto my-4 justify-center md:flex-row",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-1/5 border-menu min-h-full px-0 bg-white",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/backoffice",
                            name: "Solicitudes de cr\xe9dito"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/backoffice/roles",
                            name: "Roles"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/backoffice/configuracion-interes",
                            name: "Configuraci\xf3n inter\xe9s"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/switch",
                            name: "Crear solicitud"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/backoffice/creditos-usuario",
                            name: "Cr\xe9ditos usuario"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/backoffice/documentos",
                            name: "Documentos"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:w-4/5 pr-4 pl-4 bg-app",
                    children: children
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutSuperAdmin);


/***/ })

};
;