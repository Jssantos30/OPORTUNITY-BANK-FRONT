"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7,4820,9792];
exports.modules = {

/***/ 7108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _cedula_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./auth-context.jsx
var auth_context = __webpack_require__(6795);
;// CONCATENATED MODULE: ./components/HOC/IndicadoresCoutas.js


const ClassBox = ' rounded-lg p-2 m-2 bg-white w-32 text-center flex flex-col items-center justify-center';
const ClassValueCard = 'text-xl font-semibold';
const ClassTitleCard = 'text-sm';
const IndicadoresCoutas = ({ tasa_interes_corriente , numero_cuotas , cuotas_pendientes , cuota_anterior , fecha_ultimo_pago , abono_total , saldo_a_favor , saldo_capital , saldo_favor_terceros , saldo_mayo , saldo_total ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " flex flex-wrap justify-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: ClassValueCard,
                        children: tasa_interes_corriente
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "tasa interes corriente"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: ClassValueCard,
                        children: [
                            " ",
                            numero_cuotas
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "numero cuotas"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: ClassValueCard,
                        children: cuotas_pendientes
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "cuotas pendientes"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: ClassValueCard,
                        children: [
                            " ",
                            cuota_anterior
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "cuota"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: ClassValueCard,
                        children: [
                            " ",
                            formatDate(fecha_ultimo_pago)
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "fecha ultimo pago"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: ClassValueCard,
                        children: [
                            " ",
                            abono_total
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "abono "
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: ClassValueCard,
                        children: saldo_a_favor ?? 0
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "saldo a favor"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: ClassValueCard,
                        children: saldo_capital
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "saldo capital"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: ClassValueCard,
                        children: saldo_favor_terceros ?? 0
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "saldo favor terceros"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: ClassValueCard,
                        children: saldo_mayo
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "saldo mayo"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: ClassValueCard,
                        children: saldo_total
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: ClassTitleCard,
                        children: "saldo total"
                    })
                ]
            })
        ]
    }));
};
const formatDate = (date)=>new Date(date).toLocaleDateString('es', dateOptions)
;
const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
};

;// CONCATENATED MODULE: ./components/HOC/IndicadoresOtros.js


const IndicadoresOtros_ClassBox = ' rounded-lg p-2 m-2 bg-white w-40 text-center flex flex-col items-center justify-center';
const IndicadoresOtros_ClassValueCard = 'text-xl font-semibold';
const IndicadoresOtros_ClassTitleCard = 'text-sm';
const IndicadoresOtros = ({ dias_periodo_gracia , estado_cartera , estado_credito , obligacion , origen_recurso , periodo_gracia , registro_activo ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap justify-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${IndicadoresOtros_ClassBox}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: IndicadoresOtros_ClassValueCard,
                        children: [
                            " ",
                            dias_periodo_gracia ?? 0
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresOtros_ClassTitleCard,
                        children: "dias periodo gracia"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${IndicadoresOtros_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresOtros_ClassValueCard,
                        children: estado_cartera
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresOtros_ClassTitleCard,
                        children: "estado cartera"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${IndicadoresOtros_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresOtros_ClassValueCard,
                        children: estado_credito
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresOtros_ClassTitleCard,
                        children: "estado credito"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${IndicadoresOtros_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresOtros_ClassValueCard,
                        children: obligacion
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresOtros_ClassTitleCard,
                        children: "obligacion"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${IndicadoresOtros_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresOtros_ClassValueCard,
                        children: origen_recurso
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresOtros_ClassTitleCard,
                        children: "origen recurso"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${IndicadoresOtros_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresOtros_ClassValueCard,
                        children: periodo_gracia ?? 0
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresOtros_ClassTitleCard,
                        children: "periodo gracia"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${IndicadoresOtros_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresOtros_ClassValueCard,
                        children: registro_activo
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresOtros_ClassTitleCard,
                        children: "registro activo"
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/HOC/IndicadoresPrincipales.js


const IndicadoresPrincipales_ClassBox = ' rounded-lg p-2  bg-white';
const IndicadoresPrincipales_ClassValueCard = 'text-xl font-semibold';
const IndicadoresPrincipales_ClassTitleCard = 'text-sm';
const IndicadoresPrincipales = ({ cedula , monto_desembolsado , fecha_desembolso , intereses_mora ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:grid md:grid-cols-12 md:gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `md:col-start-1 md:col-span-3 ${IndicadoresPrincipales_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresPrincipales_ClassValueCard,
                        children: cedula
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresPrincipales_ClassTitleCard,
                        children: "c\xe9dula"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `md:col-start-4 md:col-span-3 ${IndicadoresPrincipales_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresPrincipales_ClassValueCard,
                        children: monto_desembolsado
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresPrincipales_ClassTitleCard,
                        children: "Monto desembolsado"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `md:col-start-7 md:col-span-3 ${IndicadoresPrincipales_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresPrincipales_ClassValueCard,
                        children: IndicadoresPrincipales_formatDate(fecha_desembolso)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresPrincipales_ClassTitleCard,
                        children: "fecha desembolso"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `md:col-start-10 md:col-span-3 ${IndicadoresPrincipales_ClassBox}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: IndicadoresPrincipales_ClassValueCard,
                        children: intereses_mora
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: IndicadoresPrincipales_ClassTitleCard,
                        children: "intereses mora"
                    })
                ]
            })
        ]
    }));
};
const IndicadoresPrincipales_formatDate = (date)=>new Date(date).toLocaleDateString('es', IndicadoresPrincipales_dateOptions)
;
const IndicadoresPrincipales_dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
};

;// CONCATENATED MODULE: ./components/HOC/IndicadoresTasas.js


const classCelda = 'border-r  ';
const padding = 'px-6 py-2';
const IndicadoresTasas = ({ tasa_interes_mora , mora_de_1_a_30_dias , mora_de_31_a_60_dias , mora_de_61_a_90_dias , mora_mayor_a_90_dias ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            className: "border rounded-lg bg-white",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    className: "border ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "border py-4",
                                children: " nombre"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: " valor "
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            className: '',
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: `${classCelda} ${padding}`,
                                    children: "tasa interes mora"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: padding,
                                    children: tasa_interes_mora
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            className: '',
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: `${classCelda} ${padding}`,
                                    children: "mora de 1 a 30 dias"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: padding,
                                    children: mora_de_1_a_30_dias
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            className: '',
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: `${classCelda} ${padding}`,
                                    children: "mora de 31 a 60 dias"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: padding,
                                    children: mora_de_31_a_60_dias
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            className: '',
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: `${classCelda} ${padding}`,
                                    children: "mora de 61 a 90 dias"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: padding,
                                    children: mora_de_61_a_90_dias
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            className: '',
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: `${classCelda} ${padding}`,
                                    children: " mora_mayor a 90 dias "
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                    className: padding,
                                    children: [
                                        " ",
                                        mora_mayor_a_90_dias,
                                        " "
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./components/protected-route.jsx
var protected_route = __webpack_require__(840);
// EXTERNAL MODULE: ./Layout/LayoutRol.js
var LayoutRol = __webpack_require__(9730);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
;// CONCATENATED MODULE: ./pages/backoffice/creditos-usuario/[...cedula]/index.js












function DashBoardSol({ data  }) {
    const { rol: rol1  } = (0,auth_context/* useAuthContext */.Eu)();
    const [loadingDashBoard, setLoadingDashBoard] = external_react_.useState(true);
    external_react_.useEffect(()=>{
        setLoadingDashBoard(true);
        if (rol1) {
            setLoadingDashBoard(false);
            return;
        }
        setLoadingDashBoard(false);
    }, [
        rol1
    ]);
    function RenderLayout({ rol , children  }) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(LayoutRol/* default */.Z, {
            rolUser: rol,
            children: children
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(protected_route/* ProtectedRoute */.i, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(RenderLayout, {
            rol: rol1,
            children: loadingDashBoard ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
            }) : data.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/backoffice/creditos-usuario",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn-secundario",
                                children: "volver"
                            })
                        })
                    }),
                    data.map(({ abono_total , cedula , cuota_anterior , cuotas_pendientes , dias_periodo_gracia , estado_cartera , estado_credito , fecha_desembolso , fecha_ultimo_pago , intereses_mora , monto_desembolsado , mora_de_1_a_30_dias , mora_de_31_a_60_dias , mora_de_61_a_90_dias , mora_mayor_a_90_dias , numero_cuotas , obligacion , origen_recurso , periodo_gracia , registro_activo , saldo_a_favor , saldo_capital , saldo_favor_terceros , saldo_mayo , saldo_total , tasa_interes_corriente , tasa_interes_mora ,  })=>{
                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "my-4 card-custom",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-card-custom",
                                    children: "Detalle solicitud cr\xe9dito"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "body-card-custom",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(IndicadoresPrincipales, {
                                            cedula: cedula,
                                            monto_desembolsado: monto_desembolsado,
                                            fecha_desembolso: fecha_desembolso,
                                            intereses_mora: intereses_mora
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                            className: "my-4 border-1"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "md:grid md:grid-cols-3 gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "md:grid md:col-start-1 md:col-span-2 justify-self-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(IndicadoresCoutas, {
                                                        tasa_interes_corriente: tasa_interes_corriente,
                                                        numero_cuotas: numero_cuotas,
                                                        cuotas_pendientes: cuotas_pendientes,
                                                        cuota_anterior: cuota_anterior,
                                                        fecha_ultimo_pago: fecha_ultimo_pago,
                                                        abono_total: abono_total,
                                                        saldo_a_favor: saldo_a_favor,
                                                        saldo_capital: saldo_capital,
                                                        saldo_favor_terceros: saldo_favor_terceros,
                                                        saldo_mayo: saldo_mayo,
                                                        saldo_total: saldo_total
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "md:grid md:col-start-3 md:col-span-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(IndicadoresTasas, {
                                                        tasa_interes_mora: tasa_interes_mora,
                                                        mora_de_1_a_30_dias: mora_de_1_a_30_dias,
                                                        mora_de_31_a_60_dias: mora_de_31_a_60_dias,
                                                        mora_de_61_a_90_dias: mora_de_61_a_90_dias,
                                                        mora_mayor_a_90_dias: mora_mayor_a_90_dias
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                            className: "my-4 border-white"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(IndicadoresOtros, {
                                            dias_periodo_gracia: dias_periodo_gracia,
                                            estado_cartera: estado_cartera,
                                            estado_credito: estado_credito,
                                            obligacion: obligacion,
                                            origen_recurso: origen_recurso,
                                            periodo_gracia: periodo_gracia,
                                            registro_activo: registro_activo
                                        })
                                    ]
                                })
                            ]
                        }, cedula));
                    })
                ]
            }) : 'No hay datos para mostrar'
        })
    }));
}
/* harmony default export */ const _cedula_ = (DashBoardSol);
async function getServerSideProps(context) {
    const sessionInfo = (0,protect_route_server/* protectRouteAndRedirect */.G)(context.req, context.res);
    if (sessionInfo.redirect) return sessionInfo;
    const [cedula] = context.query.cedula;
    const fetchSolicitudesActivas = await (0,custom_fetch/* customFetch */.rK)('creditos?estado=Activo&limite=20&indice=0', {
        type: custom_fetch/* RequestTypes.report */.lO.report,
        headers: {
            Authorization: `Bearer ${sessionInfo.token}`
        }
    });
    const solActivas = await fetchSolicitudesActivas.json();
    let filterSolicitud;
    if (solActivas) {
        filterSolicitud = solActivas.filter((sol)=>sol.cedula === cedula
        );
    } else {
        filterSolicitud = [];
    }
    return {
        props: {
            data: filterSolicitud
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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986,6795,843,840,6135,5912,8908,4780,5681,5114], () => (__webpack_exec__(7108)));
module.exports = __webpack_exports__;

})();