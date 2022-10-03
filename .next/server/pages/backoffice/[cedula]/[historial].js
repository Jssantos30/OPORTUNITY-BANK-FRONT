"use strict";
(() => {
var exports = {};
exports.id = 770;
exports.ids = [770,4820,9792];
exports.modules = {

/***/ 8274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _historial_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Asesores/TableHistory/index.js

function TableHistory({ children  }) {
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
                                children: "C.C"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Nombres"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Apellidos"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Rol"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Tipo de cr\xe9dito"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Fecha"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
                                children: "Estado"
                            })
                        ]
                    })
                }),
                children
            ]
        })
    }));
}
/* harmony default export */ const Asesores_TableHistory = (TableHistory);

// EXTERNAL MODULE: ./components/Asesores/BtnEstado/index.js
var BtnEstado = __webpack_require__(3217);
;// CONCATENATED MODULE: ./components/Asesores/TableHistory/BtnHistory.js


function BtnHistory(props) {
    const btn = (name, color)=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `text-xs font-semibold px-4 rounded-full py-2 ${color}`,
            children: name
        }));
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mr-4",
                    children: [
                        " ",
                        props.estado.actual ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "🟢"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "❌"
                        })
                    ]
                }),
                props.estado.estado.toLowerCase() === 'completado' && btn('Completado', 'estado-verde-full'),
                props.estado.estado.toLowerCase() === 'incompleto' && btn('incompleto', 'estado-amarillo'),
                props.estado.estado.toLowerCase() === 'falta_documentos' && btn('Faltan documentos', 'estado-rojo'),
                props.estado.estado.toLowerCase() === 'por_validar' && btn('Por validar', 'estado-amarillo'),
                props.estado.estado.toLowerCase() === 'preparado_envio' && btn('Listo para enviar al operador', 'color_primary_1'),
                props.estado.estado.toLowerCase() === 'rechazado' && btn('Rechazado', 'estado-rojo-full'),
                props.estado.estado.toLowerCase() === 'aprobado' && btn('aprobado', 'color_primary_1'),
                props.estado.estado.toLowerCase() === 'colocado' && btn('colocado', 'color_primary_1')
            ]
        })
    }));
}
/* harmony default export */ const TableHistory_BtnHistory = (BtnHistory);

;// CONCATENATED MODULE: ./components/Asesores/TableHistory/TableRowHistory.js



// ESTADOS  completado, faltan documentos, por validar, listo para enviar al operador
const formatDate = (date)=>new Date(date).toLocaleDateString('es', dateOptions)
;
const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
};
function TableRowHistory(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        className: "last:border-b-0 text-sm",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: "border-b font-section",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: props.cedula
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: props.nombres
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: props.apellidos
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: props.rol
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: props.credito
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: formatDate(props.fecha)
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                    className: "text-center p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHistory_BtnHistory, {
                            estado: props.estado_solicitud
                        }),
                        " "
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const TableHistory_TableRowHistory = (TableRowHistory);

// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(5181);
// EXTERNAL MODULE: ./Layout/LayoutAsesor.js
var LayoutAsesor = __webpack_require__(779);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
// EXTERNAL MODULE: ./utils/getData.js
var getData = __webpack_require__(6960);
// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__(6135);
// EXTERNAL MODULE: ./components/TitleBackoffice.js
var TitleBackoffice = __webpack_require__(1319);
;// CONCATENATED MODULE: ./pages/backoffice/[cedula]/[historial].js











const Historial = ({ sid , cedula  })=>{
    const [loading, setLoading] = external_react_default().useState(true);
    const [onErrGet, setOnErrGet] = external_react_default().useState(null);
    const [getHistorialSolicitudes, setGetHistorialSolicitudes] = external_react_default().useState([]);
    const [attr, setAttr] = external_react_default().useState({
        nombres: '',
        apellidos: '',
        rol: '',
        credito: ''
    });
    const { push  } = (0,router_.useRouter)();
    external_react_default().useEffect(()=>{
        async function run() {
            setLoading(true);
            const url_get_solicitud = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/usuario/${cedula}`;
            const { response  } = await (0,getData/* getData */.Y)(url_get_solicitud);
            let dataSolicitud = await response.json();
            if (response.status === 401) {
                setLoading(false);
                setOnErrGet('Hubo un error al consultar la informaci\xf3n del cr\xe9dito, por favor intenta nuevamente');
            }
            if (response.status === 404) {
                setOnErrGet(null);
                setLoading(false);
            }
            if (response.status === 200) {
                if (!dataSolicitud.length) setGetHistorialSolicitudes([]);
                else {
                    const data = dataSolicitud.filter((sol)=>sol.id === sid
                    );
                    let nombres = data[0]?.codeudor?.persona.num_identificacion === Number(cedula) ? `${data[0]?.codeudor?.persona.primer_nombre} ${data[0]?.codeudor?.persona.segundo_nombre || ''}` : data[0]?.deudor?.persona.num_identificacion === Number(cedula) ? `${data[0]?.deudor?.persona.primer_nombre} ${data[0]?.deudor?.persona.segundo_nombre || ''}` : '';
                    let apellidos = data[0]?.codeudor?.persona.num_identificacion === Number(cedula) ? `${data[0]?.codeudor?.persona.primer_apellido} ${data[0]?.codeudor?.persona.segundo_apellido || ''}` : data[0]?.deudor?.persona.num_identificacion === Number(cedula) ? `${data[0]?.deudor?.persona.primer_apellido} ${data[0]?.deudor?.persona.segundo_apellido || ''}` : '';
                    let rol = data[0]?.codeudor?.persona.num_identificacion === Number(cedula) ? `${data[0]?.codeudor?.tipo}` : data[0]?.deudor?.persona.num_identificacion === Number(cedula) ? `${data[0]?.deudor?.tipo}` : '';
                    let credito = data[0]?.tipo;
                    setAttr((prev)=>({
                            ...prev,
                            nombres,
                            apellidos,
                            rol,
                            credito
                        })
                    );
                    setGetHistorialSolicitudes(data);
                }
                setLoading(false);
                setOnErrGet(null);
            }
        }
        run();
    }, [
        cedula,
        push,
        sid
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(LayoutAsesor/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TitleBackoffice/* default */.Z, {
                    children: "Historial"
                }),
                loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-nowrap flex-row items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-16 flex items-center",
                            children: "Cargando ..."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "spinner_cont items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "material spinner"
                            })
                        })
                    ]
                }) : onErrGet ? /*#__PURE__*/ jsx_runtime_.jsx(_error["default"], {
                    message: onErrGet
                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                    children: getHistorialSolicitudes.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card-custom",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Asesores_TableHistory, {
                                children: getHistorialSolicitudes[0]?.estado_solicitud.map((sol, index)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(TableHistory_TableRowHistory, {
                                        cedula: cedula,
                                        nombres: attr?.nombres,
                                        apellidos: attr?.apellidos,
                                        rol: attr?.rol,
                                        credito: attr?.credito,
                                        fecha: sol.fecha_actualizacion,
                                        estado_solicitud: sol
                                    }, index));
                                }).reverse()
                            })
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mensaje-error",
                        children: "No hay historial para mostrar, intenta m\xe1s tarde"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const _historial_ = (Historial);
async function getServerSideProps(context) {
    const sessionInfo = (0,protect_route_server/* protectRouteAndRedirect */.G)(context.req, context.res);
    if (sessionInfo.redirect) return sessionInfo;
    const { cedula  } = context.params;
    const { sid  } = context.query;
    return {
        props: {
            sid,
            cedula
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986,6795,843,840,6135,5912,8908,4780,5681,5114], () => (__webpack_exec__(8274)));
module.exports = __webpack_exports__;

})();