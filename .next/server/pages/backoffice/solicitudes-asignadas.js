"use strict";
(() => {
var exports = {};
exports.id = 7444;
exports.ids = [7444,4820,9792];
exports.modules = {

/***/ 2421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ solicitudes_asignadas),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./utils/getAdminName.js
var getAdminName = __webpack_require__(9666);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(843);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/notification/RowNotification.js






const RowNotification = ({ ctxDataUsuarios , notification: notification1  })=>{
    const router = (0,router_.useRouter)();
    const checkedNotification = async (notification)=>{
        try {
            const url = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`;
            const dataToSend = {
                seccion: 'ASE',
                solicitud_id: notification.id,
                data: {
                    ...notification.asesor,
                    revisado: true
                }
            };
            const { responseComplete , res  } = await (0,fetchData/* fetchData */.r)(url, dataToSend);
            if (responseComplete) {
                router.push(`/backoffice/${notification.deudor.persona.num_identificacion}?sid=${notification.id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        className: "last:border-b-1 text-sm",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: "border-b-0 font-section",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: `Admin ${(0,getAdminName/* getAdminName */.x)(ctxDataUsuarios, notification1)}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: notification1.id
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: `${notification1.deudor.persona.primer_nombre}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: `${notification1.deudor.persona.primer_apellido}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: notification1.deudor.persona.num_identificacion
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: formatDate(notification1.asesor.fecha_asignacion)
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                    className: "text-center p-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "btn-texto",
                            onClick: ()=>checkedNotification(notification1)
                            ,
                            children: [
                                ' ',
                                "Ver",
                                ' '
                            ]
                        }),
                        ' '
                    ]
                })
            ]
        })
    }));
};
const formatDate = (date)=>new Date(date).toLocaleDateString('es', dateOptions)
;
const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
};

;// CONCATENATED MODULE: ./components/notification/TableHead.js

function TableHead({ children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "table-responsive",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            className: "mx-auto bg-white rounded-lg w-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    className: "border-b font-bold text-xs",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Asign\xf3 solicitud"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Solicitud"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Nombre"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Apellidos"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "C.C"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Fecha"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Acciones"
                            })
                        ]
                    })
                }),
                children
            ]
        })
    }));
}
/* harmony default export */ const notification_TableHead = (TableHead);

// EXTERNAL MODULE: ./components/TitleBackoffice.js
var TitleBackoffice = __webpack_require__(1319);
// EXTERNAL MODULE: ./Layout/LayoutAsesor.js
var LayoutAsesor = __webpack_require__(779);
// EXTERNAL MODULE: ./notification-context.js
var notification_context = __webpack_require__(7024);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
;// CONCATENATED MODULE: ./pages/backoffice/solicitudes-asignadas/index.js









function SolicitudesAsignadas({ usuarios  }) {
    const { getDatabyAsesor  } = (0,notification_context/* useNotificationContext */.n)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutAsesor/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TitleBackoffice/* default */.Z, {
                children: "Solicitudes asignadas"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-custom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-card-custom",
                        children: "Lista de solicitudes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "body-card-custom",
                        children: getDatabyAsesor.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(notification_TableHead, {
                                children: getDatabyAsesor.map((notification, index)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(RowNotification, {
                                            notification: notification,
                                            ctxDataUsuarios: usuarios || []
                                        })
                                    }, index));
                                }).reverse()
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mensaje-error",
                            children: [
                                ' ',
                                "No hay notificaciones para mostrar. Intenta m\xe1s tarde",
                                ' '
                            ]
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const solicitudes_asignadas = (SolicitudesAsignadas);
async function getServerSideProps(context) {
    const sessionInfo = (0,protect_route_server/* protectRouteAndRedirect */.G)(context.req, context.res);
    if (sessionInfo.redirect) return sessionInfo;
    const response = await (0,custom_fetch/* customFetch */.rK)('roles/listar-usuario-rol', {
        type: custom_fetch/* RequestTypes.auth */.lO.auth,
        headers: {
            Authorization: `Bearer ${sessionInfo.token}`
        }
    });
    let usuarios = undefined;
    if (!response) {
        usuarios = undefined;
    } else {
        usuarios = await response.json();
    }
    return {
        props: {
            usuarios
        }
    };
}


/***/ }),

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986,6795,843,840,6135,5912,8908,4780,5681,5114], () => (__webpack_exec__(2421)));
module.exports = __webpack_exports__;

})();