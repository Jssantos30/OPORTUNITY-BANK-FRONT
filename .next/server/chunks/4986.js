"use strict";
exports.id = 4986;
exports.ids = [4986];
exports.modules = {

/***/ 4986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lO": () => (/* binding */ RequestTypes),
/* harmony export */   "rK": () => (/* binding */ customFetch),
/* harmony export */   "n0": () => (/* binding */ customFetchPublic)
/* harmony export */ });
var RequestTypes;
(function(RequestTypes) {
    RequestTypes["credit"] = 'NEXT_PUBLIC_CREDITSOLICITATION_V1';
    RequestTypes["auth"] = 'NEXT_PUBLIC_AUTHSERVICE_V1';
    RequestTypes["config"] = 'NEXT_PUBLIC_CONFIG_SERVICES_V1';
    RequestTypes["files"] = 'NEXT_PUBLIC_FILES_SERVICE_V1';
    RequestTypes["report"] = 'NEXT_PUBLIC_REPORT_SERVICES_V1';
    RequestTypes["public"] = 'NEXT_PUBLIC_AUTHSERVICE_V1';
})(RequestTypes || (RequestTypes = {}));
function customFetch(path, { type , ...options } = {}) {
    let URI = '';
    switch(type){
        case RequestTypes.credit:
            URI = "https://www.medellin.gov.co/bancopobres/solicitudescreditosms/";
            break;
        case RequestTypes.auth:
            URI = "https://www.medellin.gov.co/bancopobres/autenticacionms/";
            break;
        case RequestTypes.config:
            URI = "https://www.medellin.gov.co/bancopobres/configuracionms/";
            break;
        case RequestTypes.files:
            URI = "https://www.medellin.gov.co/bancopobres/archivosms/";
            break;
        case RequestTypes.report:
            URI = "https://www.medellin.gov.co/bancopobres/reportesms/";
            break;
        case RequestTypes.public:
            URI = "https://www.medellin.gov.co/bancopobres/autenticacionms/";
            break;
        default:
            URI = "https://www.medellin.gov.co/bancopobres/solicitudescreditosms/";
            break;
    }
    const headers = {
        Authorization: `Bearer ${typeof localStorage !== 'undefined' ? localStorage.getItem('access_token') : ''}`,
        ...options.headers || {}
    };
    if (!options.preventContentType) {
        headers['Content-Type'] = 'application/json';
    }
    return fetch(URI + path, {
        ...options,
        headers
    });
}
function customFetchPublic(path, { type , ...options } = {}) {
    let URI = '';
    switch(type){
        case RequestTypes.auth:
            // URI = 'http://localhost:3001/api/v1/'
            URI = "https://www.medellin.gov.co/bancopobres/autenticacionms/";
            break;
        case RequestTypes.config:
            // URI = 'http://localhost:3002/api/v1/'
            URI = "https://www.medellin.gov.co/bancopobres/configuracionms/";
            break;
        default:
            // URI = 'http://localhost:3002/api/v1/'
            URI = "https://www.medellin.gov.co/bancopobres/autenticacionms/";
            break;
    }
    const headers = {
        Authorization: `Bearer ${typeof localStorage !== 'undefined' ? localStorage.getItem('token_interno') : ''}`,
        ...options.headers || {}
    };
    if (!options.preventContentType) {
        headers['Content-Type'] = 'application/json';
    }
    return fetch(URI + path, {
        ...options,
        headers
    });
}


/***/ })

};
;