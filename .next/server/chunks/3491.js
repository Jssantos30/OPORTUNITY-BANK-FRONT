"use strict";
exports.id = 3491;
exports.ids = [3491];
exports.modules = {

/***/ 3491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);



const SelectionInput = ({ label , ...props })=>{
    const [field, meta] = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useField)(props);
    const renderFunc = props.children || props.render;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col mb-6 h-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "font-medium mb-2",
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        ...field,
                        disabled: props.disabled,
                        className: `${props.className} rounded-lg border border-gray-400 w-full`,
                        style: {
                            borderRadius: '6px',
                            border: `${meta.touched && meta.error ? '0.5px solid #AD0808' : '0.5px solid #707070'}`
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                className: "text-center",
                                value: props.value || '',
                                children: `<---- Selecciona un campo ---->`
                            }),
                            props.options.map(renderFunc)
                        ]
                    }),
                    meta.touched && meta.error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            marginTop: '0px'
                        },
                        className: "error",
                        children: meta.error
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: " "
                    })
                ]
            })
        ]
    }, props.id));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionInput);


/***/ })

};
;