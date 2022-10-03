exports.id = 5114;
exports.ids = [5114];
exports.modules = {

/***/ 4531:
/***/ ((module) => {

// Exports
module.exports = {
	"containerTb": "Tab_containerTb__z_BOt",
	"blocTabs": "Tab_blocTabs__mMNSH",
	"tabs": "Tab_tabs__cGfHI",
	"activeTabs": "Tab_activeTabs__kzvjH",
	"contentTabs": "Tab_contentTabs__qMJzU",
	"content": "Tab_content__KCLAu",
	"activeContent": "Tab_activeContent__MhGe_"
};


/***/ }),

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8035);






const LayoutAsesor = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "bg-app",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wrapper-backoffice flex flex-col mx-auto my-4 justify-center md:flex-row",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-1/5 min-h-full px-0 bg-white",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/backoffice",
                            name: "Solicitudes de cr\xe9dito",
                            icon_url: `${"/bancopobres"}/icon-solicitud-backoffice.svg`,
                            icon_white_url: `${"/bancopobres"}/icon-solicitud-backoffice-white.svg`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/switch",
                            name: "Crear solicitud",
                            icon_url: `${"/bancopobres"}/icon-config-backoffice.svg`,
                            icon_white_url: `${"/bancopobres"}/icon-config-backoffice-white.svg`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/backoffice/solicitudes-asignadas",
                            name: "Solicitudes Asignadas",
                            icon_url: `${"/bancopobres"}/icon-config-backoffice.svg`,
                            icon_white_url: `${"/bancopobres"}/icon-config-backoffice-white.svg`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/backoffice/creditos-usuario",
                            name: "Cr\xe9ditos usuario",
                            icon_url: `${"/bancopobres"}/icon-solicitud-backoffice.svg`,
                            icon_white_url: `${"/bancopobres"}/icon-solicitud-backoffice-white.svg`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Asesores_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/backoffice/documentos",
                            name: "Documentos",
                            icon_url: `${"/bancopobres"}/icon-solicitud-backoffice.svg`,
                            icon_white_url: `${"/bancopobres"}/icon-solicitud-backoffice-white.svg`
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "md:w-4/5 pl-4 pr-4 bg-app",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: "flex justify-end bg-app items-center sr-only"
                        }),
                        children
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutAsesor);


/***/ }),

/***/ 9730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LayoutAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5681);
/* harmony import */ var _LayoutAsesor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(779);
/* harmony import */ var _LayoutSuperadmin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8908);





const LayoutRol = (props)=>{
    if ([
        'ASESOR'
    ].includes(props.rolUser)) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LayoutAsesor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: props.children
        }));
    }
    if ([
        'ADMINISTRADOR'
    ].includes(props.rolUser)) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LayoutAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: props.children
        }));
    }
    if ([
        'SUPERADMINISTRADOR'
    ].includes(props.rolUser)) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LayoutSuperadmin__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: props.children
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            " ",
            props.children,
            " "
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutRol);


/***/ }),

/***/ 3217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function BtnEstado(props) {
    const btn = (name, color)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${color}`,
            children: name
        }));
    };
    const dataFiltered = props.estado.filter(({ actual  })=>actual === true
    );
    const [currentState] = dataFiltered;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            currentState.estado.toLowerCase() === 'completado' && btn('Completado', 'estado-verde'),
            currentState.estado.toLowerCase() === 'incompleto' && btn('Incompleto', 'estado-amarillo'),
            currentState.estado.toLowerCase() === 'falta_documentos' && btn('Faltan documentos', 'estado-rojo'),
            currentState.estado.toLowerCase() === 'por_validar' && btn('Por validar', 'estado-gris'),
            currentState.estado.toLowerCase() === 'preparado_envio' && btn('Listo para enviar al operador', 'estado-verde'),
            currentState.estado.toLowerCase() === 'rechazado' && btn('Rechazado', 'estado-rojo'),
            currentState.estado.toLowerCase() === 'aprobado' && btn('Aprobado', 'estado-verde'),
            currentState.estado.toLowerCase() === 'colocado' && btn('Colocado', 'estado-verde')
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnEstado);


/***/ }),

/***/ 2714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ NumeroRegistro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NumeroRegistro = (props)=>{
    const handleReset = ()=>{
        props.setConfigFilter((prev)=>{
            return {
                ...prev,
                numberRegister: 10,
                numberPage: 0
            };
        });
    };
    const handlePrev = ()=>{
        props.setConfigFilter((prev)=>{
            return {
                ...prev,
                numberPage: Math.max(prev.numberPage - 1, 0)
            };
        });
    };
    const handleNext = ()=>{
        props.setConfigFilter((prev)=>{
            return {
                ...prev,
                numberPage: prev.numberPage + 1
            };
        });
    };
    const handleSelect = (e)=>{
        props.setConfigFilter((prev)=>{
            return {
                ...prev,
                numberRegister: e.target.value,
                numberPage: 0
            };
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between md:flex-row flex-col my-4 items-center font-section",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "numero-registros-text font-small",
                        children: "Registros por p\xe1gina"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        name: "registro",
                        id: "registro",
                        value: props.configFilter.numberRegister,
                        onChange: handleSelect,
                        className: "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "1",
                                children: " 1 "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "10",
                                children: " 10 "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "20",
                                children: " 20 "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "50",
                                children: " 50 "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "100",
                                children: " 100 "
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-inline mt-4 md:mt-0",
                "aria-label": "Pagination",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        onClick: handlePrev,
                        className: "inline-flex items-center paginador-contenedor-ant",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "h-5 w-5",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fillrule: "evenodd",
                                    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                    cliprule: "evenodd"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Ant"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        disabled: props.NotFoundResult.includes('No se encontraron m\xe1s resultados') ? true : false,
                        "aria-current": "page",
                        className: "paginador-numeros inline-flex items-center",
                        children: [
                            " ",
                            ` ${props.configFilter.numberPage + 1}`,
                            ' '
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        onClick: handleNext,
                        className: " inline-flex items-center paginador-contenedor-sig",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Sig. "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "h-5 w-5",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fillrule: "evenodd",
                                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                    cliprule: "evenodd"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 8035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ Notification)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./pages/backoffice.js + 11 modules
var backoffice = __webpack_require__(2583);
// EXTERNAL MODULE: ./notification-context.js
var notification_context = __webpack_require__(7024);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/getAdminName.js
var getAdminName = __webpack_require__(9666);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(843);
;// CONCATENATED MODULE: ./components/notification/CardNotification.js





const CardNotification = ({ notification: notification1 , ctxDataUsuarios =[]  })=>{
    const router = (0,router_.useRouter)();
    const clickNotification = async (notification)=>{
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " bg-white border my-2 p-2 px-4 flex hover:cursor-pointer hover:bg-blue-200",
        onClick: ()=>clickNotification(notification1)
        ,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "font-semibold text-sm",
                        children: [
                            "Admin ",
                            (0,getAdminName/* getAdminName */.x)(ctxDataUsuarios, notification1),
                            " te asign\xf3 una nueva solicitud de cr\xe9dito"
                        ]
                    }),
                    ' ',
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "solicitud:"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        children: notification1.id
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Nombre: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        children: `${notification1.deudor.persona.primer_nombre} ${notification1.deudor.persona.primer_apellido}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "cc:"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        children: notification1.deudor.persona.num_identificacion
                    }),
                    ' ',
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xs font-semibold hover:underline hover:text-blue-500 hover:cursor:pointer",
                        onClick: ()=>clickNotification(notification1)
                        ,
                        children: [
                            ' ',
                            "Haz clic aqu\xed para ir a verlo",
                            ' '
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center",
                children: notification1.asesor.visto ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-4 h-4 rounded-full bg-blue-400",
                    children: " "
                }) : null
            })
        ]
    }));
};

// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
;// CONCATENATED MODULE: ./components/notification/index.js







const Notification = ()=>{
    const { getDatabyAsesor  } = (0,notification_context/* useNotificationContext */.n)();
    const ctxDataUsuarios = (0,backoffice.useUsuarioContext)();
    const [userAsesor, setUserAsesor] = external_react_.useState([]);
    const [openBoxNotification, setOpenBoxNotification] = external_react_.useState(false);
    const ref = external_react_.useRef();
    external_react_.useEffect(()=>{
        async function run() {
            try {
                const response = await (0,custom_fetch/* customFetch */.rK)(`roles/listar-usuario-rol`, {
                    type: custom_fetch/* RequestTypes.auth */.lO.auth
                });
                if (response.status === 200) {
                    const Asesores = await response.json();
                    setUserAsesor(Asesores);
                } else {
                    setUserAsesor([]);
                }
            } catch (err) {
                setUserAsesor([]);
            }
        }
        run();
    }, []);
    external_react_.useEffect(()=>{
        const checkIfClickedOutside = (e)=>{
            if (openBoxNotification && ref.current && !ref.current.contains(e.target)) {
                setOpenBoxNotification(false);
            }
        };
        document.addEventListener('mousedown', checkIfClickedOutside);
        return ()=>{
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [
        openBoxNotification
    ]);
    const handleBoxNotification = ()=>{
        setOpenBoxNotification(!openBoxNotification);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        ref: ref,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: handleBoxNotification,
                children: getDatabyAsesor.length === 0 ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "campanita",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                id: "_001-campana",
                                "data-name": " 001-campana",
                                width: "24.833",
                                height: "29.838",
                                viewBox: "0 0 24.833 29.838",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        id: "Trazado_1587",
                                        "data-name": "Trazado 1587",
                                        d: "M5358.44,109.327a8.316,8.316,0,0,1-2.953-6.364V99.5a8.7,8.7,0,0,0-7.45-8.593V89.568a1.242,1.242,0,1,0-2.483-.073c0,.024,0,.049,0,.073v1.341A8.7,8.7,0,0,0,5338.1,99.5v3.462a8.325,8.325,0,0,1-2.965,6.373,2.172,2.172,0,0,0,1.413,3.823h20.489a2.173,2.173,0,0,0,1.4-3.831Z",
                                        transform: "translate(-5334.377 -88.289)",
                                        fill: "#FF8900"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        id: "Trazado_1588",
                                        "data-name": "Trazado 1588",
                                        d: "M5352.028,135.532a4.664,4.664,0,0,0,4.564-3.725h-9.125A4.663,4.663,0,0,0,5352.028,135.532Z",
                                        transform: "translate(-5339.613 -105.694)",
                                        fill: "#FF8900"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "label-campanita",
                            children: [
                                getDatabyAsesor.filter(({ asesor  })=>asesor.revisado === false
                                ).length,
                                "+"
                            ]
                        })
                    ]
                })
            }),
            openBoxNotification ? getDatabyAsesor.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed inset-0 bg-modal-info justify-center z-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:w-1/2 modal-card-custom",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "header-card-custom",
                                children: "Notificaciones"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "body-card-custom",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "modal-content",
                                    children: getDatabyAsesor.map((notification, index)=>{
                                        return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(CardNotification, {
                                                notification: notification,
                                                ctxDataUsuarios: userAsesor || ctxDataUsuarios
                                            })
                                        }, index));
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-card-modal-sm",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex justify-end",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn-texto-gris",
                                            onClick: handleBoxNotification,
                                            children: "Cerrar"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/backoffice/solicitudes-asignadas",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn-secundario",
                                                children: "Ver todo"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-1/2 rounded-lg max-h-60 text-center absolute right-24 z-30 bg-white border my-2 p-2 px-4",
                children: [
                    ' ',
                    "No hay notificaciones para mostrar. ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " intenta m\xe1s tarde",
                    ' '
                ]
            }) : null
        ]
    }));
};


/***/ }),

/***/ 7024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ NotificationProvider),
/* harmony export */   "n": () => (/* binding */ useNotificationContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6795);
/* harmony import */ var _utils_custom_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4986);




const MINUTES = 60000;
const NotificationProvider = ({ children  })=>{
    const [getDatabyAsesor, setDataByAsesor] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [NumberNotification, setNumberNotification] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const { usuario  } = (0,_auth_context__WEBPACK_IMPORTED_MODULE_2__/* .useAuthContext */ .Eu)();
    const doRequest = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async ()=>{
        if (localStorage.getItem('usuario')) {
            try {
                const response = await (0,_utils_custom_fetch__WEBPACK_IMPORTED_MODULE_3__/* .customFetch */ .rK)(`credito/solicitudes?asesor=${usuario}`, {
                    type: _utils_custom_fetch__WEBPACK_IMPORTED_MODULE_3__/* .RequestTypes.credit */ .lO.credit
                });
                if (response.status === 200) {
                    const data = await response.json();
                    const sortedApplication = data.sort((a, b)=>b.asesor.fecha_asignacion - a.asesor.fecha_asignacion
                    );
                    setDataByAsesor(sortedApplication);
                } else {
                    setDataByAsesor([]);
                }
            } catch (error) {}
        }
    }, [
        usuario
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        doRequest();
        const interval = setInterval(async ()=>{
            await doRequest();
        }, MINUTES);
        return ()=>clearInterval(interval)
        ;
    }, [
        doRequest
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(notificationContext.Provider, {
        value: {
            getDatabyAsesor,
            setDataByAsesor,
            NumberNotification,
            setNumberNotification,
            doRequest
        },
        children: children
    }));
};
const notificationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext([]);
function useNotificationContext() {
    const ctx = react__WEBPACK_IMPORTED_MODULE_1__.useContext(notificationContext);
    return ctx;
}


/***/ }),

/***/ 2583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UsuariosProvider": () => (/* binding */ UsuariosProvider),
  "default": () => (/* binding */ backoffice),
  "getServerSideProps": () => (/* binding */ getServerSideProps),
  "useUsuarioContext": () => (/* binding */ useUsuarioContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./auth-context.jsx
var auth_context = __webpack_require__(6795);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
// EXTERNAL MODULE: ./utils/getData.js
var getData = __webpack_require__(6960);
;// CONCATENATED MODULE: ./components/Asesores/Search/index.js





function Search(props) {
    const { rol  } = (0,auth_context/* useAuthContext */.Eu)();
    const ROLES = [
        'ADMINISTRADOR',
        'SUPERADMINISTRADOR'
    ];
    const initialState = {
        userId: '',
        loading: false,
        data: [],
        error: '',
        token: true
    };
    const handleChange = ({ target  })=>{
        props.setSearch({
            ...props.search,
            [target.name]: target.value
        });
    };
    const handleClean = (event)=>{
        event.preventDefault();
        if (ROLES.includes(rol)) {
            props.setSearch({
                ...initialState,
                data: props.firstCallAPI
            });
            props.setInfoHistoricaUser([]);
        } else {
            props.setSearch(initialState);
            props.setInfoHistoricaUser([]);
        }
    };
    const handleSearch = async (event)=>{
        event.preventDefault();
        props.setSearch({
            ...props.search,
            loading: true
        });
        if (props.search.userId === '') {
            props.setSearch({
                ...initialState,
                data: props.firstCallAPI
            });
            props.setInfoHistoricaUser([]);
            return;
        }
        if (!Number(props.search.userId)) {
            props.setInfoHistoricaUser([]);
            props.setSearch({
                ...initialState,
                data: props.firstCallAPI,
                error: 'Debes ingresar un documento'
            });
            setTimeout(()=>{
                props.setSearch({
                    ...initialState,
                    data: props.firstCallAPI
                });
            }, 3000);
            return;
        }
        try {
            const URL = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/usuario/${props.search.userId}`;
            const { response: res  } = await (0,getData/* getData */.Y)(URL);
            if (res.status === 200) {
                const data = await res.json();
                props.setSearch({
                    ...props.search,
                    loading: false,
                    data: data,
                    error: '',
                    token: true
                });
            }
            if (res.status === 401) {
                const data = await res.json();
                props.setSearch({
                    ...props.search,
                    loading: false,
                    data: [],
                    error: `${data.message}, el usuario no ha empezado con el formulario`,
                    token: false
                });
            }
            if (res.status === 404) {
                const data = await res.json();
                props.setSearch({
                    ...props.search,
                    loading: false,
                    data: [],
                    error: `${data.message}, el usuario no ha empezado con el formulario`,
                    token: true
                });
            }
        } catch (err) {
            props.setSearch({
                ...props.search,
                data: props.firstCallAPI,
                loading: false,
                token: true
            });
        }
        //Consulta para el historial
        try {
            const resFetchDataHistory = await (0,custom_fetch/* customFetch */.rK)(`creditos/solicitudes?usuario=${props.search.userId}&indice=0&limite=10`, {
                type: custom_fetch/* RequestTypes.report */.lO.report
            });
            const data = await resFetchDataHistory.json();
            if (resFetchDataHistory.status === 200) props.setInfoHistoricaUser(data);
            if (resFetchDataHistory.status === 404) props.setInfoHistoricaUser(data);
        } catch (err1) {}
    };
    const handleEnter = (e)=>{
        if (e.keyCode === 13) {
            handleSearch(e);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card-custom mb-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-card-custom",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Buscar"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "body-card-custom",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full my-1 items-center flex flex-col md:flex-row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full mb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                For: "userId",
                                children: "Buscar por c\xe9dula"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex relative items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "w-full border rounded-full px-4 py-2 text-center",
                                        placeholder: "Buscar por c\xe9dula...",
                                        name: "userId",
                                        value: props.search.userId,
                                        onChange: handleChange,
                                        onKeyDown: (e)=>handleEnter(e)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${"/bancopobres"}/Search-Icon.svg`,
                                        alt: "search",
                                        className: "absolute right-4"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-card-custom",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row justify-end mb-8 md:mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                onClick: handleClean,
                                className: "btn-texto ml-2",
                                children: "Limpiar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn-primario ml-2",
                                type: "submit",
                                onClick: handleSearch,
                                children: "Buscar"
                            })
                        ]
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const Asesores_Search = (Search);

// EXTERNAL MODULE: ./components/TitleBackoffice.js
var TitleBackoffice = __webpack_require__(1319);
;// CONCATENATED MODULE: ./components/Asesores/TableUser/index.js


function TableUser({ children  }) {
    const ROLES = [
        'ADMINISTRADOR',
        'SUPERADMINISTRADOR'
    ];
    const { rol  } = (0,auth_context/* useAuthContext */.Eu)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "table-responsive",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            className: "mx-auto bg-white rounded-lg rounded-t-none w-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    className: "border-b font-bold text-xs",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            ROLES.includes(rol) ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                className: "text-center py-4 px-2",
                                children: " Check "
                            }) : null,
                            ROLES.includes(rol) ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                className: "text-center py-4 px-2",
                                children: " Asignado "
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "py-4 px-2 text-center",
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
                                children: "Estado"
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
/* harmony default export */ const Asesores_TableUser = (TableUser);

;// CONCATENATED MODULE: ./components/CheckedSolicitud.js


const CheckedSolicitud = ({ solicitudId , solicitudPorAsesor , setsolicitudPorAsesor ,  })=>{
    const handleCheckBox = (e)=>{
        setsolicitudPorAsesor((prev)=>{
            return {
                ...prev,
                [e.target.name]: {
                    ...prev[e.target.name],
                    isChecked: !solicitudPorAsesor?.[e.target.name]?.isChecked
                }
            };
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
            type: "checkbox",
            name: solicitudId,
            value: solicitudPorAsesor?.[solicitudId]?.isChecked,
            onClick: handleCheckBox
        })
    }));
};

;// CONCATENATED MODULE: ./components/ListAsesores.js


const ListAsesores = (props)=>{
    const ListaDeAsesores = props.usuarios?.filter((usuario)=>usuario.rolID === 4
    );
    const handleChangeAsesor = (e)=>{
        props.setsolicitudPorAsesor((prev)=>{
            return {
                ...prev,
                [e.target.name]: {
                    ...prev[e.target.name],
                    asesor: Number(e.target.value)
                }
            };
        });
    };
    return props.asesor?.nombre ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: "text",
        value: props.asesor?.nombre,
        disabled: true
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
        style: {
            width: `100px`
        },
        name: props.solicitudId,
        value: props.solicitudPorAsesor?.[props.solicitudId]?.asesor,
        onChange: handleChangeAsesor,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: "",
                children: "sin asignar"
            }),
            ListaDeAsesores?.map((asesor, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                    value: asesor.cedula,
                    children: [
                        ' ',
                        `${asesor.nombres}  ${asesor.apellidos}`,
                        ' '
                    ]
                }, index)
            )
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Hooks/useClickOutsideComponent.js

function useClickOutsideComponent(ref, setState) {
    React.useEffect(()=>{
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setState(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        ref
    ]);
}
/* harmony default export */ const Hooks_useClickOutsideComponent = ((/* unused pure expression or super */ null && (useClickOutsideComponent)));

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Asesores/Acciones/index.js





function Acciones(props) {
    const { push  } = (0,router_.useRouter)();
    const [showMenuActions, setShowMenuActions] = external_react_.useState(false);
    const wrapperRef = external_react_.useRef(null);
    const handleActions = ()=>{
        setShowMenuActions(!showMenuActions);
    };
    const openInNewTab = (url)=>{
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative cursor-pointer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: wrapperRef,
                onClick: handleActions,
                className: "text-3xl text-gray-500",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    width: 29,
                    src: `${"/bancopobres"}/puntos.svg`
                })
            }),
            showMenuActions ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu-on-table absolute -right-0 z-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "w-full h-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/backoffice/${props.cedula}?sid=${props.id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: " Ver "
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                rel: "noopener noreferrer",
                                target: "_blank",
                                href: `/backoffice/reporte/${props.id}?cedula=${props.cedula}&rol=${props.rol}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: " Reporte "
                                })
                            })
                        })
                    ]
                })
            }) : null
        ]
    }));
}
/* harmony default export */ const Asesores_Acciones = (Acciones);

// EXTERNAL MODULE: ./components/Asesores/BtnEstado/index.js
var BtnEstado = __webpack_require__(3217);
;// CONCATENATED MODULE: ./components/Asesores/TableUser/TableRow.js







// ESTADOS  completado, faltan documentos, por validar, listo para enviar al operador
function TableRow(props) {
    const ROLES = [
        'ADMINISTRADOR',
        'SUPERADMINISTRADOR'
    ];
    const { rol  } = (0,auth_context/* useAuthContext */.Eu)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        className: "last:border-b-0 text-sm",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: "font-section",
            children: [
                ROLES.includes(rol) ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center py-4 px-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CheckedSolicitud, {
                        solicitudId: props.sid,
                        solicitudPorAsesor: props.solicitudPorAsesor,
                        setsolicitudPorAsesor: props.setsolicitudPorAsesor
                    })
                }) : null,
                ROLES.includes(rol) ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center py-4 px-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ListAsesores, {
                        usuarios: props.usuarios,
                        asesor: props.asesor,
                        solicitudId: props.sid,
                        solicitudPorAsesor: props.solicitudPorAsesor,
                        setsolicitudPorAsesor: props.setsolicitudPorAsesor
                    })
                }) : null,
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
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                    className: "text-center p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(BtnEstado/* default */.Z, {
                            estado: props.estado_solicitud
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Asesores_Acciones, {
                        cedula: props.cedula,
                        id: props.sid,
                        rol: props.rol
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const TableUser_TableRow = (TableRow);

// EXTERNAL MODULE: ./Layout/LayoutRol.js
var LayoutRol = __webpack_require__(9730);
// EXTERNAL MODULE: ./components/SuperAdmin/Modal.js
var Modal = __webpack_require__(7420);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(843);
;// CONCATENATED MODULE: ./utils/dateUtc.js
function dateUtc() {
    return new Date(new Date().toLocaleString('en-US', {
        timeZone: 'America/Bogota'
    }).split('GMT')[0] + ' UTC').toISOString();
}

// EXTERNAL MODULE: ./components/Filtro/NumeroRegistro.js
var NumeroRegistro = __webpack_require__(2714);
// EXTERNAL MODULE: ./components/protected-route.jsx
var protected_route = __webpack_require__(840);
;// CONCATENATED MODULE: ./components/Filtros.js



const initialState = {
    userId: '',
    loading: false,
    data: [],
    error: ''
};
const initialFilter = {
    fecha: '',
    asesor: '',
    estado: 'TODOS'
};
const estado = [
    'COMPLETADO',
    'INCOMPLETO',
    'FALTA_DOCUMENTOS',
    'POR_VALIDAR',
    'PREPARADO_ENVIO',
    'RECHAZADO',
    'APROBADO',
    'COLOCADO',
    'TODOS', 
];
const Filtros = (props)=>{
    const ListaDeAsesores = props.usuarios?.filter((usuario)=>usuario.rolID === 4
    );
    const [valueFilter, setValueFilter] = external_react_.useState(initialFilter);
    const { configFilter  } = props;
    const { numberRegister , numberPage  } = configFilter;
    external_react_.useEffect(()=>{
        requestFilter();
    }, [
        requestFilter
    ]);
    const requestFilter = external_react_.useCallback(async ()=>{
        let dynamicUrl = createDynamicUrl(valueFilter, numberPage, numberRegister);
        try {
            let url = `${dynamicUrl}`;
            const respuestaFetch = await Filtros_getData(url);
            if (respuestaFetch.status === 200) {
                const dt = await respuestaFetch.json();
                if (dt.length > 0) {
                    props.setSearch({
                        ...initialState,
                        loading: true
                    });
                    setTimeout(()=>{
                        props.setSearch({
                            ...initialState,
                            data: [
                                ...dt
                            ],
                            loading: false,
                            error: ''
                        });
                    }, 2000);
                } else {
                    props.setSearch({
                        ...props.search,
                        data: [],
                        loading: false,
                        error: 'No existen resultados'
                    });
                    setTimeout(()=>{
                        props.setSearch({
                            ...props.search,
                            data: [],
                            loading: false,
                            error: ''
                        });
                    }, 5000);
                }
            } else {
                props.setSearch({
                    ...props.search,
                    data: [],
                    loading: false,
                    error: 'Hubo un error, NO se encontraron registros'
                });
                setTimeout(()=>{
                    props.setSearch({
                        ...props.search,
                        data: [],
                        loading: false,
                        error: ''
                    });
                }, 5000);
            }
        } catch (err) {
            props.setSearch({
                ...props.search,
                data: [],
                loading: false,
                error: 'Hubo un error. - Intenta m\xe1s tarde'
            });
            setTimeout(()=>{
                props.setSearch({
                    ...props.search,
                    data: [],
                    loading: false,
                    error: ''
                });
            }, 5000);
        }
    }, [
        numberPage,
        numberRegister,
        props,
        valueFilter
    ]);
    const handleFilter = ({ target  })=>{
        setValueFilter({
            ...valueFilter,
            [target.name]: target.value
        });
    };
    const applyFiltro = async ()=>{
        await requestFilter();
    };
    const deleteFiltro = ()=>{
        props.setSearch({
            ...initialState,
            data: props.firstCallAPI
        });
        setValueFilter(initialFilter);
    };
    const handleCloseFilter = ()=>{
        props.setOpenFilter(false);
        setValueFilter(initialFilter);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full card-custom mb-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-card-custom flex justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Filtros de busqueda"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: handleCloseFilter,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://img.icons8.com/color/48/000000/delete-sign--v1.png",
                            className: "h-4 flex justify-end hover:cursor-pointer"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "body-card-custom",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full grid grid-cols-1 md:grid-cols-4 gap-2 mb-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block",
                                    children: " Solicitudes asignadas "
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                    name: "asesor",
                                    value: valueFilter.asesor,
                                    onChange: handleFilter,
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                            value: "",
                                            children: [
                                                ` Seleccionar...`,
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "NO_ASIGNADO",
                                            children: " sin asignar "
                                        }),
                                        ListaDeAsesores?.map((asesor, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                value: asesor.cedula,
                                                children: [
                                                    ' ',
                                                    `${asesor.nombres}  ${asesor.apellidos}`,
                                                    ' '
                                                ]
                                            }, index)
                                        )
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block",
                                    children: "Por fecha"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "date",
                                    name: "fecha",
                                    value: valueFilter.fecha,
                                    onChange: handleFilter,
                                    className: "text-center"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block",
                                    children: " Por mes "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "month",
                                    name: "fecha",
                                    value: valueFilter.fecha,
                                    onChange: handleFilter,
                                    className: "text-center"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block",
                                    children: "Estado"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                    name: "estado",
                                    value: valueFilter.estado,
                                    onChange: handleFilter,
                                    className: "text-center",
                                    children: estado.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: item,
                                            children: item.toLowerCase()
                                        }, index)
                                    )
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer-card-custom flex justify-end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn-texto-gris",
                        onClick: handleCloseFilter,
                        children: "Ocultar filtros"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn-texto",
                        onClick: deleteFiltro,
                        children: "Limpiar filtros"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn-secundario",
                        onClick: applyFiltro,
                        children: "Aplicar filtro(s)"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {})
        ]
    }));
};
async function Filtros_getData(url) {
    try {
        const fetchCreditos = await (0,custom_fetch/* customFetch */.rK)(url, {
            type: custom_fetch/* RequestTypes.credit */.lO.credit
        });
        return fetchCreditos;
    } catch (error) {}
}
function createDynamicUrl(filters, indice = 0, limite = 10) {
    let base_url = `credito/solicitudes?indice=${indice}&limite=${limite}`;
    for(let key in filters){
        let separador = base_url.indexOf('?') !== -1 ? '&' : '?';
        if (filters[key]) {
            key = key.trim();
            base_url += `${separador}${key}=${filters[key]}`;
        }
    }
    return base_url;
}

// EXTERNAL MODULE: ./styles/Tab.module.css
var Tab_module = __webpack_require__(4531);
var Tab_module_default = /*#__PURE__*/__webpack_require__.n(Tab_module);
;// CONCATENATED MODULE: ./components/Tabs/index.js



const Tabs = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(Tab_module_default()).containerTb}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Tab_module_default()).blocTabs}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>props.setToggleState(1)
                        ,
                        className: props.toggleState === 1 ? `${(Tab_module_default()).tabs} ${(Tab_module_default()).activeTabs}` : 'tabs w-1/2 flex justify-center items-center',
                        children: "Solicitudes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>props.setToggleState(2)
                        ,
                        className: props.toggleState === 2 ? `${(Tab_module_default()).tabs} ${(Tab_module_default()).activeTabs}` : `${(Tab_module_default()).tabs}`,
                        children: "Historico de Solicitudes"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(Tab_module_default()).contentTabs}`,
                children: props.children
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Tabs/ContainerTab.js



const ContainerTab = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: props.toggleState === props.tabNumber ? `${(Tab_module_default()).content} ${(Tab_module_default()).activeContent}` : `${(Tab_module_default()).content}`,
        children: props.children
    }));
};

// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__(6135);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
;// CONCATENATED MODULE: ./pages/backoffice.js





















function getToken() {
    const isToken = Boolean(window.localStorage.getItem('access_token') ? true : false);
    return isToken;
}
const SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const backoffice_initialState = {
    userId: '',
    loading: false,
    data: [],
    error: '',
    token: true
};
const initialConfigFilter = {
    numberRegister: 10,
    numberPage: 0
};
const ROLES = [
    'ADMINISTRADOR',
    'SUPERADMINISTRADOR'
];
const BackOffice = ({ usuarios  })=>{
    const router = (0,router_.useRouter)();
    const { rol: rol1 , usuario  } = (0,auth_context/* useAuthContext */.Eu)();
    const [loadinLayout, setLoadingLayout] = external_react_.useState(true);
    const [openBox, setOpenBox] = external_react_.useState(false);
    const [solicitudPorAsesor, setsolicitudPorAsesor] = external_react_.useState({});
    const [openMod, setOpenMod] = external_react_.useState(false);
    const [applicationToSend, setApplicationToSend] = external_react_.useState([]);
    const [MensajeError, setErrorMensaje] = external_react_.useState('');
    const [firstCallAPI, setFirsCallAPI] = external_react_.useState(backoffice_initialState);
    const [openFilter, setOpenFilter] = external_react_.useState(false);
    const [configFilter, setConfigFilter] = external_react_.useState(initialConfigFilter);
    const { numberRegister , numberPage  } = configFilter;
    const [NotFoundResult, setNotFoundResult] = external_react_.useState('');
    const [NotFoundResultTabTwo, setNotFoundResultTabTwo] = external_react_.useState('');
    external_react_.useEffect(()=>{
        setLoadingLayout(true);
        if (rol1) {
            setLoadingLayout(false);
            return;
        }
        setLoadingLayout(false);
    }, [
        rol1
    ]);
    const [search1, setSearch] = external_react_.useState(backoffice_initialState);
    const [infoHistoricaUser, setInfoHistoricaUser] = external_react_.useState([]);
    external_react_.useEffect(()=>{
        async function run() {
            setSearch((search)=>({
                    ...search,
                    loading: true,
                    data: [],
                    error: ''
                })
            );
            if (rol1 && ROLES.includes(rol1)) {
                try {
                    const { response: fetchCreditos  } = await (0,getData/* getData */.Y)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitudes?indice=${Number(numberPage)}&limite=${Number(numberRegister)}`) //&usuario={3000}&fecha={2021-11-21}
                    ;
                    if (fetchCreditos.status === 200) {
                        setNotFoundResult('');
                        const solicitudes = await fetchCreditos.json();
                        solicitudes.map(({ id , asesor  })=>{
                            setsolicitudPorAsesor((prev)=>{
                                return {
                                    ...prev,
                                    [id]: {
                                        asesor: asesor ? asesor?.num_identificacion : '',
                                        isChecked: false,
                                        solicitud_id: id
                                    }
                                };
                            });
                        });
                        const sortedData = solicitudes.sort((a, b)=>new Date(b.fecha_creacion) - new Date(a.fecha_creacion)
                        );
                        setFirsCallAPI(sortedData);
                        setSearch((search)=>({
                                ...search,
                                data: solicitudes,
                                loading: false,
                                error: '',
                                token: true
                            })
                        );
                    }
                    if (fetchCreditos.status === 404) {
                        setSearch((search)=>({
                                ...search,
                                loading: false,
                                token: getToken()
                            })
                        );
                        setNotFoundResult('No se encontraron m\xe1s resultados');
                    }
                    if (fetchCreditos.status === 401) {
                        setSearch((search)=>({
                                ...search,
                                loading: false,
                                token: false
                            })
                        );
                        setNotFoundResult('');
                    }
                    if (fetchCreditos.status === 400) {
                        setNotFoundResult('');
                        setSearch({
                            ...backoffice_initialState,
                            token: getToken()
                        });
                        setConfigFilter(initialConfigFilter);
                    }
                } catch (error) {
                    setNotFoundResult('');
                    setSearch({
                        ...backoffice_initialState,
                        token: getToken()
                    });
                    setConfigFilter(initialConfigFilter);
                }
            } else {
                setSearch((search)=>({
                        ...search,
                        loading: false,
                        token: getToken()
                    })
                );
            }
        }
        run();
    }, [
        rol1,
        numberRegister,
        numberPage
    ]);
    const handleApplicationSelected = ()=>{
        let arrayFilteredByApplication = [];
        for(const application in solicitudPorAsesor){
            if (solicitudPorAsesor[application].isChecked === true) {
                arrayFilteredByApplication.push({
                    ...solicitudPorAsesor[application],
                    asesor: solicitudPorAsesor[application].asesor ? solicitudPorAsesor[application].asesor : null
                });
            }
        }
        setApplicationToSend([
            ...arrayFilteredByApplication
        ]);
        if (arrayFilteredByApplication.length > 0) setOpenMod(true);
        else {
            setOpenBox(false);
            setErrorMensaje('Hubo un error -  Debes seleccionar una solicitud de proceso');
            setTimeout(()=>{
                setErrorMensaje('');
            }, 5000);
        }
        setOpenBox(false);
    };
    const sendSolicitud = async ()=>{
        try {
            const URL_ASIGNAR_ASESOR = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`;
            const dataToSend = applicationToSend.map(({ asesor , solicitud_id  })=>({
                    seccion: 'ASE',
                    solicitud_id,
                    data: {
                        num_identificacion: Number(asesor),
                        fecha_asignacion: dateUtc(),
                        asignador: Number(usuario)
                    }
                })
            );
            const dataPromise = dataToSend.map((application)=>{
                return (0,fetchData/* fetchData */.r)(URL_ASIGNAR_ASESOR, application);
            });
            const responses = await Promise.all(dataPromise);
            const responseFail = responses.find(({ responseComplete  })=>responseComplete === false
            );
            setOpenMod(false);
            if (responseFail) {
                setOpenBox(false);
                setErrorMensaje('Hubo un error - intenta m\xe1s tarde');
                setTimeout(()=>{
                    setErrorMensaje('');
                }, 5000);
            } else {
                setOpenBox(false);
                setErrorMensaje('Proceso asignado exitosamente');
                setTimeout(()=>{
                    setErrorMensaje('');
                    router.replace(router.asPath);
                }, 5000);
            }
        } catch (error) {
            setOpenMod(false);
            setOpenBox(false);
            setErrorMensaje('Hubo un error - intenta m\xe1s tarde');
            setTimeout(()=>{
                setErrorMensaje('');
            }, 5000);
        }
    };
    const handleCancel = ()=>{
        setOpenMod(false);
    };
    const [toggleState, setToggleState] = external_react_.useState(1);
    function User() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TitleBackoffice/* default */.Z, {
                    children: "Solicitudes de cr\xe9dito"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Asesores_Search, {
                        search: search1,
                        setSearch: setSearch,
                        firstCallAPI: firstCallAPI,
                        infoHistoricaUser: infoHistoricaUser,
                        setInfoHistoricaUser: setInfoHistoricaUser,
                        configFilter: configFilter,
                        setConfigFilter: setConfigFilter,
                        NotFoundResultTabTwo: NotFoundResultTabTwo,
                        setNotFoundResultTabTwo: setNotFoundResultTabTwo
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid",
                    children: openFilter ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Filtros, {
                            usuarios: usuarios,
                            search: search1,
                            setSearch: setSearch,
                            firstCallAPI: firstCallAPI,
                            configFilter: configFilter,
                            openFilter: openFilter,
                            setOpenFilter: setOpenFilter
                        })
                    }) : null
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "handle-solicitud",
                    className: openMod && `fixed inset-0 bg-modal-info  flex justify-center z-50`
                }),
                openMod ? /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
                    nodo: "handle-solicitud",
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border card-modal-sm flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "body-card-modal-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "titulo-modal-info",
                                        children: "Confirmar acci\xf3n"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "\xbfEst\xe1s seguro deseas cambiar el rol de este usuario?"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-center footer-card-modal-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: "btn-primario order-2 ml-4",
                                        onClick: sendSolicitud,
                                        children: "Si"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: " order-1 btn-texto-gris",
                                        onClick: handleCancel,
                                        children: "Cancelar"
                                    })
                                ]
                            })
                        ]
                    })
                }) : null,
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card-custom",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tabs, {
                        toggleState: toggleState,
                        setToggleState: setToggleState,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ContainerTab, {
                                toggleState: toggleState,
                                tabNumber: 1,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "flex flex-row justify-end mb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        className: "btn-texto",
                                                        onClick: ()=>{
                                                            setOpenFilter(true);
                                                            setOpenBox(false);
                                                        },
                                                        children: [
                                                            ' ',
                                                            "Filtrar de datos"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        onClick: handleApplicationSelected,
                                                        className: "btn-secundario",
                                                        children: "Asignar solicitudes seleccionadas"
                                                    })
                                                })
                                            ]
                                        }),
                                        search1.loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                                }),
                                                " "
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                MensajeError !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: MensajeError.includes('error') ? ERROR_CLASS : SUCCESS_CLASS,
                                                    children: MensajeError
                                                }) : null,
                                                search1.error === '' ? search1.data.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "border overflow-x-auto",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Asesores_TableUser, {
                                                                children: search1.data.map(({ deudor , codeudor , estado_solicitud , tipo , id , asesor  })=>{
                                                                    if (deudor?.persona?.num_identificacion === Number(search1.userId)) {
                                                                        return(/*#__PURE__*/ jsx_runtime_.jsx(TableUser_TableRow, {
                                                                            nombres: `${deudor.persona.primer_nombre} ${deudor.persona.seguno_nombre || ''}`,
                                                                            apellidos: `${deudor.persona.primer_apellido} ${deudor.persona.seguno_apellido || ''}`,
                                                                            cedula: deudor.persona.num_identificacion,
                                                                            rol: deudor.tipo,
                                                                            credito: tipo,
                                                                            estado_solicitud: estado_solicitud,
                                                                            sid: id,
                                                                            usuarios: usuarios,
                                                                            asesor: asesor,
                                                                            solicitudPorAsesor: solicitudPorAsesor,
                                                                            setsolicitudPorAsesor: setsolicitudPorAsesor
                                                                        }, id));
                                                                    }
                                                                    if (codeudor?.persona?.num_identificacion === Number(search1.userId)) {
                                                                        return(/*#__PURE__*/ jsx_runtime_.jsx(TableUser_TableRow, {
                                                                            nombres: `${codeudor.persona.primer_nombre} ${codeudor.persona.seguno_nombre || ''}`,
                                                                            apellidos: `${codeudor.persona.primer_apellido} ${codeudor.persona.seguno_apellido || ''}`,
                                                                            cedula: codeudor.persona.num_identificacion,
                                                                            rol: codeudor.tipo,
                                                                            credito: tipo,
                                                                            estado_solicitud: estado_solicitud,
                                                                            sid: id,
                                                                            usuarios: usuarios,
                                                                            asesor: asesor,
                                                                            solicitudPorAsesor: solicitudPorAsesor,
                                                                            setsolicitudPorAsesor: setsolicitudPorAsesor
                                                                        }, `T-${id}`));
                                                                    }
                                                                    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TableUser_TableRow, {
                                                                            nombres: `${deudor?.persona.primer_nombre} ${deudor?.persona.seguno_nombre || ''}`,
                                                                            apellidos: `${deudor?.persona.primer_apellido} ${deudor?.persona.seguno_apellido || ''}`,
                                                                            cedula: deudor?.persona.num_identificacion,
                                                                            rol: deudor?.tipo,
                                                                            credito: tipo,
                                                                            estado_solicitud: estado_solicitud,
                                                                            sid: id,
                                                                            usuarios: usuarios,
                                                                            asesor: asesor,
                                                                            solicitudPorAsesor: solicitudPorAsesor,
                                                                            setsolicitudPorAsesor: setsolicitudPorAsesor
                                                                        })
                                                                    }, id));
                                                                })
                                                            })
                                                        }),
                                                        NotFoundResult !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: NotFoundResult.includes('No se encontraron m\xe1s resultados') ? `${ERROR_CLASS}` : null,
                                                            children: NotFoundResult
                                                        }) : null,
                                                        search1.userId === '' && /*#__PURE__*/ jsx_runtime_.jsx(NumeroRegistro/* NumeroRegistro */.n, {
                                                            configFilter: configFilter,
                                                            setConfigFilter: setConfigFilter,
                                                            NotFoundResult: NotFoundResult
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: "Ingresa la c\xe9dula de un usuario"
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mensaje-error mb-4 px-4 py-3 rounded relative",
                                                    children: [
                                                        ' ',
                                                        search1.error,
                                                        ' '
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ContainerTab, {
                                toggleState: toggleState,
                                tabNumber: 2,
                                children: infoHistoricaUser.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Asesores_TableUser, {
                                            children: infoHistoricaUser.map(({ deudor , codeudor , estado_solicitud , tipo , id , asesor  }, index)=>{
                                                if (Number(deudor?.persona?.num_identificacion) === Number(search1.userId)) {
                                                    return(/*#__PURE__*/ jsx_runtime_.jsx(TableUser_TableRow, {
                                                        nombres: `${deudor.persona.primer_nombre} ${deudor.persona.seguno_nombre || ''}`,
                                                        apellidos: `${deudor.persona.primer_apellido} ${deudor.persona.seguno_apellido || ''}`,
                                                        cedula: deudor.persona.num_identificacion,
                                                        rol: deudor.tipo,
                                                        credito: tipo,
                                                        estado_solicitud: estado_solicitud,
                                                        sid: id,
                                                        usuarios: usuarios,
                                                        asesor: asesor,
                                                        solicitudPorAsesor: solicitudPorAsesor,
                                                        setsolicitudPorAsesor: setsolicitudPorAsesor
                                                    }, id + index));
                                                }
                                                if (Number(codeudor?.persona?.num_identificacion) === Number(search1.userId)) {
                                                    return(/*#__PURE__*/ jsx_runtime_.jsx(TableUser_TableRow, {
                                                        nombres: `${codeudor.persona.primer_nombre} ${codeudor.persona.seguno_nombre || ''}`,
                                                        apellidos: `${codeudor.persona.primer_apellido} ${codeudor.persona.seguno_apellido || ''}`,
                                                        cedula: codeudor.persona.num_identificacion,
                                                        rol: codeudor.tipo,
                                                        credito: tipo,
                                                        estado_solicitud: estado_solicitud,
                                                        sid: id,
                                                        usuarios: usuarios,
                                                        asesor: asesor,
                                                        solicitudPorAsesor: solicitudPorAsesor,
                                                        setsolicitudPorAsesor: setsolicitudPorAsesor
                                                    }, id + index));
                                                }
                                            })
                                        })
                                    })
                                }) : 'No hay info para mostrar'
                            })
                        ]
                    })
                })
            ]
        }));
    }
    function renderLayout(rol) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(UsuariosProvider, {
            usuarios: usuarios,
            children: /*#__PURE__*/ jsx_runtime_.jsx(protected_route/* ProtectedRoute */.i, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutRol/* default */.Z, {
                    rolUser: rol,
                    children: User()
                })
            })
        }));
    }
    return loadinLayout ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
    }) : renderLayout(rol1);
};
/* harmony default export */ const backoffice = (BackOffice);
async function getServerSideProps(context) {
    const sessionInfo = (0,protect_route_server/* protectRouteAndRedirect */.G)(context.req, context.res);
    if (sessionInfo.redirect) return sessionInfo;
    const response = await (0,custom_fetch/* customFetch */.rK)('roles/listar-usuario-rol', {
        type: custom_fetch/* RequestTypes.auth */.lO.auth,
        headers: {
            Authorization: `Bearer ${sessionInfo.token}`
        }
    });
    if (response.ok) {
        return {
            props: {
                usuarios: await response.json()
            }
        };
    } else {
        return {
            props: {}
        };
    }
}
const usuarioContext = /*#__PURE__*/ external_react_.createContext({});
function UsuariosProvider({ children , usuarios  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(usuarioContext.Provider, {
        value: usuarios,
        children: children
    }));
}
function useUsuarioContext() {
    const ctx = external_react_.useContext(usuarioContext);
    return ctx;
}


/***/ }),

/***/ 9666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ getAdminName)
/* harmony export */ });
function getAdminName(ctxDataUsuarios, notification) {
    const boss = ctxDataUsuarios.find((ctxUser)=>ctxUser.cedula === notification.asesor?.asignador
    );
    return `${boss?.nombres || ''} ${boss?.apellidos || ''}`;
}


/***/ })

};
;