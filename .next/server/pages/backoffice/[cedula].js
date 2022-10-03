"use strict";
(() => {
var exports = {};
exports.id = 3283;
exports.ids = [3283,4820,9792];
exports.modules = {

/***/ 932:
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./utils/processForm.js
function ProcessForm(seccion) {
    switch(seccion){
        case 'FDE_2':
            return {
                paso: 'paso 1 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false,
                numero: 2
            };
        case 'FDE_3':
            return {
                paso: 'paso 2 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false,
                numero: 3
            };
        case 'FDE_4':
            return {
                paso: 'paso 3 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false,
                numero: 4
            };
        case 'FDE_5':
            return {
                paso: 'paso 4 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false,
                numero: 5
            };
        case 'FDE_6':
            return {
                paso: 'paso 5 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false,
                numero: 6
            };
        case 'FDE_7':
            return {
                paso: 'paso 6 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false,
                numero: 7
            };
        case 'FDE_8':
            return {
                paso: 'paso 7 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false,
                numero: 8
            };
        case 'FDE_9':
            return {
                paso: 'paso 8 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false,
                numero: 9
            };
        case 'FCO_1':
            return {
                paso: 'paso 1 de 8',
                showHabeasData: true,
                showPrerrequisitosData: true
            };
        case 'FCO_2':
            return {
                paso: 'paso 2 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false
            };
        case 'FCO_3':
            return {
                paso: 'paso 3 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false
            };
        case 'FCO_4':
            return {
                paso: 'paso 4 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false
            };
        case 'FCO_5':
            return {
                paso: 'paso 5 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false
            };
        case 'FCO_6':
            return {
                paso: 'paso 6 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false
            };
        case 'FCO_7':
            return {
                paso: 'paso 7 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false
            };
        case 'FCO_8':
            return {
                paso: 'paso 7 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false
            };
        case 'FCO_9':
            return {
                paso: 'paso 8 de 8',
                showHabeasData: false,
                showPrerrequisitosData: false
            };
        default:
            return {
                paso: 'paso 1 de 8',
                showHabeasData: true,
                showPrerrequisitosData: true,
                numero: 1
            };
    }
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Asesores/BoxFormInformation.js




const BoxFormInformation = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-4 card-custom",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "header-card-custom",
                children: [
                    " ",
                    props.title,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "body-card-custom",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 font-section",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-semibold",
                                children: "Tipo:"
                            }),
                            props.tipo
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 font-section",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-semibold",
                                children: "Seccion del formulario: "
                            }),
                            ProcessForm(props.usuario.seccion)?.paso
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center my-4 sm:text-left",
                        children: [
                            'FDE_9',
                            'FCO_9'
                        ].includes(props.usuario?.seccion) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                "Formulario Completo",
                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    className: "ml-4 hover:text-color_primary_2_ligth",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/${props.form}/${props.usuario?.persona.num_identificacion}/${props.id}?paso=${props.usuario?.seccion}&rol=${props.rol}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Editar"
                                        })
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "font-section",
                            children: [
                                "Completar formulario",
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `/${props.form}/${props.usuario?.persona?.num_identificacion}/${props.id}?paso=${props.usuario?.seccion}&rol=${props.rol}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "hover:text-color_primary_2_ligth hover:font-bold",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `${"/bancopobres"}/edit_icon.svg`,
                                                    alt: "edit_icon",
                                                    className: "h-6 w-6 m-auto sm:m-0"
                                                })
                                            }),
                                            "Editar"
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Asesores_BoxFormInformation = (BoxFormInformation);

;// CONCATENATED MODULE: ./components/Asesores/BoxDeudorInformation.js


const BoxDeudorInformation = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-4 bg-white card-custom",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "header-card-custom",
                children: [
                    " ",
                    props.title,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "body-card-custom",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 font-section",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-semibold",
                                children: `Nombres:  `
                            }),
                            `${props.usuario?.persona?.primer_nombre} ${props.usuario?.persona?.segundo_nombre || ''} ${props.usuario?.persona?.primer_apellido} ${props.usuario?.persona?.segundo_apellido || ''}`
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 font-section",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-semibold",
                                children: "N\xfamero de identificacion: "
                            }),
                            props.usuario?.persona.num_identificacion
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Asesores_BoxDeudorInformation = (BoxDeudorInformation);

;// CONCATENATED MODULE: ./components/Asesores/BoxPeerToPeer.js



const BoxPeerToPeer = (props)=>{
    return props.usuario?.persona?.num_identificacion ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-4 bg-white border border-gray-200 rounded-lg p-4 card-custom",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "header-card-custom",
                children: [
                    " ",
                    props.title,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "body-card-custom",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 font-section",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                className: "font-semibold",
                                children: [
                                    props.nombre,
                                    " :"
                                ]
                            }),
                            ' ',
                            `${props.usuario?.persona?.primer_nombre || ''} ${props.usuario?.persona?.primer_apellido || 'No tiene codeudor actualmente'} `
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 font-section",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-semibold",
                                children: "N\xfamero de identificaci\xf3n: "
                            }),
                            ` ${props.usuario?.persona?.num_identificacion || 'no aplica'}`
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center sm:text-left my-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "font-section",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/backoffice/${props.usuario?.persona?.num_identificacion}?sid=${props.id}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "hover:text-color_primary_2_ligth hover:font-bold",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: `${"/bancopobres"}/edit_icon.svg`,
                                                alt: "edit_icon",
                                                className: "h-6 w-6 m-auto sm:m-0"
                                            })
                                        }),
                                        "Ir al dashboard del ",
                                        props.nombre
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " card-custom border border-gray-200 rounded-lg p-4 max-w-1/2 w-content",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-card-custom",
                children: [
                    " ",
                    props.title,
                    " "
                ]
            }),
            ' ',
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "body-card-custom",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mensaje-info",
                    children: "No tiene codeudor actualmente"
                })
            }),
            ' '
        ]
    });
};
/* harmony default export */ const Asesores_BoxPeerToPeer = (BoxPeerToPeer);

// EXTERNAL MODULE: ./Layout/LayoutRol.js
var LayoutRol = __webpack_require__(9730);
// EXTERNAL MODULE: ./components/SuperAdmin/Modal.js
var Modal = __webpack_require__(7420);
;// CONCATENATED MODULE: ./components/CheckBoxBackOffice/dataDeudor.js
const documentosDeudor = [
    {
        name: 'C\xe9dula',
        value: 'CEDULA',
        id: 1
    },
    {
        name: 'Servicios p\xfablicos',
        value: 'SERVICIOS_PUBLICOS',
        id: 2
    },
    {
        name: 'Cifin',
        value: 'CIFIN',
        id: 3
    },
    {
        name: 'Modelo de negocio',
        value: 'MODELO_NEGOCIO',
        id: 4
    },
    {
        name: 'Certificado de tradicion',
        value: 'CERTIFICADO_TRADICION',
        id: 5
    },
    {
        name: 'Visita agropecuaria',
        value: 'VISITA_AGROECUARIA',
        id: 6
    }, 
];

;// CONCATENATED MODULE: ./components/CheckBoxBackOffice/index..js


const CheckBoxDocument = ({ name , value , id , getDefaultChecked , handleChange , posicionRol ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "d-f",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "checkbox",
                name: value,
                onChange: (e)=>handleChange(e, posicionRol)
                ,
                defaultChecked: getDefaultChecked(value, posicionRol)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: name,
                className: "ml-2",
                children: name
            })
        ]
    }, id));
};

;// CONCATENATED MODULE: ./components/CheckBoxBackOffice/dataCodeudor.js
const documentosCodeudor = [
    {
        name: 'C\xe9dula',
        value: 'CEDULA',
        id: 1
    },
    {
        name: 'Servicios publicos',
        value: 'SERVICIOS_PUBLICOS',
        id: 2
    },
    {
        name: 'Cifin',
        value: 'CIFIN',
        id: 3
    },
    {
        name: 'Visita agropecuaria',
        value: 'VISITA_AGROECUARIA',
        id: 4
    },
    {
        name: 'Modelo de negocio',
        value: 'MODELO_NEGOCIO',
        id: 5
    },
    {
        name: 'Carta laboral',
        value: 'CARTA_LABORAL',
        id: 6
    },
    {
        name: 'Colillas pago de salario',
        value: 'COLLILLAS_PAGO_SALARIO',
        id: 7
    },
    {
        name: 'Propiedad raiz',
        value: 'PROPIEDAD_RAIZ',
        id: 8
    },
    {
        name: 'Impuesto predial',
        value: 'IMPUESTO_PREDIAL',
        id: 9
    },
    {
        name: 'Certificado tradici\xf3n',
        value: 'CERTIFICADO_TRADICION',
        id: 10
    },
    {
        name: 'Hipotecas',
        value: 'HIPOTECAS',
        id: 11
    },
    {
        name: 'Patrimonio familia',
        value: 'PATRIMONIO_FAMILIA',
        id: 12
    },
    {
        name: 'Hipotecas',
        value: 'HIPOTECAS',
        id: 13
    },
    {
        name: 'Embargos',
        value: 'EMBARGOS',
        id: 14
    },
    {
        name: 'Certificado de afiliacion transporte',
        value: 'CERTIFICADO_AFILIACION_TRANSPORTE',
        id: 15
    },
    {
        name: 'Tarjeta propiedad vehiculo',
        value: 'TARJETA_PROPIEDAD_VEHICULO',
        id: 16
    },
    {
        name: 'Resoluci\xf3n de pensi\xf3n',
        value: 'RESOLUCION_PENSION',
        id: 17
    }, 
];

// EXTERNAL MODULE: ./utils/getData.js
var getData = __webpack_require__(6960);
// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__(6135);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
// EXTERNAL MODULE: ./components/TitleBackoffice.js
var TitleBackoffice = __webpack_require__(1319);
;// CONCATENATED MODULE: ./pages/backoffice/[cedula]/index.js
















const DashBoardBackOffice = ({ sid , cedula  })=>{
    const { rol  } = (0,auth_context/* useAuthContext */.Eu)();
    const [loadinLayout, setLoadingLayout] = external_react_.useState(true);
    const { push  } = (0,router_.useRouter)();
    const [loading, setLoading] = external_react_.useState(true);
    const [onErrGet, setOnErrGet] = external_react_.useState(null);
    const [getSolicitud, setGetSolicitud] = external_react_.useState([]);
    external_react_.useEffect(()=>{
        setLoadingLayout(true);
        if (rol) {
            setLoadingLayout(false);
            return;
        }
        setLoadingLayout(false);
    }, [
        rol
    ]);
    external_react_.useEffect(()=>{
        async function run() {
            const url_get_solicitud = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/usuario/${cedula}`;
            const { response , error  } = await (0,getData/* getData */.Y)(url_get_solicitud);
            if (error) {
                window.localStorage.clear();
                push('/login');
            }
            if (response.status === 404) {
                setLoading(false);
                setOnErrGet(null);
            }
            if (response.status === 401) {
                setLoading(false);
                setOnErrGet('Hubo un error al consultar la informaci\xf3n del cr\xe9dito, por favor intenta nuevamente');
            }
            if (response.status === 200) {
                const dataSolicitud = await response.json();
                if (!dataSolicitud.length) {
                    setGetSolicitud([]);
                } else {
                    const dataSol = dataSolicitud.filter((sol)=>sol.id === sid
                    );
                    setGetSolicitud(dataSol);
                    setLoading(false);
                    setOnErrGet(null);
                }
            }
        }
        run();
    }, [
        cedula,
        push,
        sid
    ]);
    function DashBoard() {
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: getSolicitud.map(({ deudor , tipo , codeudor , id  }, index)=>{
                    if (deudor?.persona?.num_identificacion === Number(cedula)) {
                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(TitleBackoffice/* default */.Z, {
                                    children: "Detalle solicitud"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Asesores_BoxDeudorInformation, {
                                    title: 'Informaci\xf3n Usuario - Deudor ',
                                    usuario: deudor
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Asesores_BoxFormInformation, {
                                    title: 'Informaci\xf3n del formulario - Deudor',
                                    usuario: deudor,
                                    tipo: tipo,
                                    id: id,
                                    rol: rol,
                                    form: 'individual'
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Asesores_BoxPeerToPeer, {
                                    title: 'Informaci\xf3n del Codeudor',
                                    nombre: "Codeudor",
                                    usuario: codeudor,
                                    id: id,
                                    rol: rol
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(VerifyDocuments, {
                                    data: getSolicitud,
                                    cedula: cedula
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(RequestStatus, {
                                    data: getSolicitud
                                })
                            ]
                        }, index));
                    }
                    if (codeudor?.persona?.num_identificacion === Number(cedula)) {
                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Asesores_BoxDeudorInformation, {
                                    title: 'Informaci\xf3n Usuario - Codeudor',
                                    usuario: codeudor
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Asesores_BoxFormInformation, {
                                    title: 'Informaci\xf3n del formulario - Codeudor',
                                    usuario: codeudor,
                                    tipo: tipo,
                                    id: id,
                                    rol: rol,
                                    form: 'codeudor'
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Asesores_BoxPeerToPeer, {
                                    title: "Informaci\xf3n del Deudor",
                                    nombre: "Deudor",
                                    usuario: deudor,
                                    id: id,
                                    rol: rol
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(VerifyDocuments, {
                                    data: getSolicitud,
                                    cedula: cedula
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(RequestStatus, {
                                    data: getSolicitud
                                })
                            ]
                        }, index));
                    }
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
    }) : /*#__PURE__*/ jsx_runtime_.jsx(LayoutRol/* default */.Z, {
        rolUser: rol,
        children: loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
            message: 'No est\xe1s autorizado para hacer esta acci\xf3n'
        }) : DashBoard()
    });
};
/* harmony default export */ const _cedula_ = (DashBoardBackOffice);
async function getServerSideProps(context) {
    const { cedula  } = context.params;
    const { sid  } = context.query;
    return {
        props: {
            sid,
            cedula
        }
    };
}
const RequestStatus = ({ data  })=>{
    const solicitudId = data[0].id;
    const [requestStatus1, setRequestStatus] = external_react_.useState({
        estado: 'COLOCADO',
        observaciones: 'Falta informacion'
    });
    const [isLoading, setIsLoading] = external_react_.useState(true);
    const [isSendingData, setIsSendingData] = external_react_.useState(false);
    const [message, setMessage] = external_react_.useState('');
    external_react_.useEffect(()=>{
        async function getRequestStatus() {
            const { response: res  } = await (0,getData/* getData */.Y)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitudId}?seccion=EST`);
            if (res.status === 200) {
                const requestStatus = await res.json();
                setRequestStatus({
                    estado: requestStatus.estado,
                    observaciones: requestStatus.observaciones
                });
                setIsLoading(false);
            }
        }
        getRequestStatus();
    }, []);
    function handleChange(e) {
        setRequestStatus({
            ...requestStatus1,
            [e.target.name]: e.target.value
        });
    }
    async function sendDocuments(e) {
        e.preventDefault();
        if (isSendingData) return;
        setIsSendingData(true);
        try {
            const token = localStorage.getItem('access_token');
            if (!token) throw new Error('Acci\xf3n inv\xe1lida, intenta m\xe1s tarde .... ');
            const res = await (0,custom_fetch/* customFetch */.rK)('credito/solicitud', {
                method: 'POST',
                body: JSON.stringify({
                    seccion: 'EST',
                    solicitud_id: solicitudId,
                    data: requestStatus1
                }),
                type: custom_fetch/* RequestTypes.credit */.lO.credit
            });
            if (res.status === 201) {
                setMessage('Estado actualizado correctamente');
            } else {
                setMessage('Error al actualizar el estado');
            }
        } catch  {
            setMessage('Error al actualizar el estado, comuniquese con la administraci\xf3n');
        }
        setIsSendingData(false);
        setTimeout(()=>{
            setMessage('');
        }, 3000);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-4 card-custom",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "header-card-custom",
                children: "Estado de la solicitud"
            }),
            message ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: message.includes('Error') ? ERROR_CLASS : SUCCESS_CLASS,
                role: "alert",
                children: message
            }) : null,
            isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "body-card-custom",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: sendDocuments,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block font-medium",
                                    children: "Observaciones:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    name: "observaciones",
                                    id: "observaciones",
                                    defaultValue: requestStatus1.observaciones ?? '',
                                    className: "block border border-gray-400 px-4 w-full form-textarea pt-2 rounded-lg",
                                    rows: "5",
                                    onInput: handleChange,
                                    style: {
                                        resize: 'none'
                                    },
                                    placeholder: "Ingrese las observaciones"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block font-medium",
                                    children: "Estado: "
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                    value: requestStatus1.estado,
                                    onChange: handleChange,
                                    name: "estado",
                                    className: "h-10 border border-gray-400 px-4 w-full rounded-lg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "COMPLETADO",
                                            children: "Completado"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "INCOMPLETO",
                                            children: "Incompleto"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "FALTA_DOCUMENTOS",
                                            children: "Faltan documentos"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "POR_VALIDAR",
                                            children: "Por validar"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "PREPARADO_ENVIO",
                                            children: "Listo para enviar al operador"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "APROBADO",
                                            children: "Aprobado"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "RECHAZADO",
                                            children: "Rechazado"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "COLOCADO",
                                            children: "Colocado"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card-footer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-primario",
                                    children: isSendingData ? 'Enviando...' : 'Guardar cambios'
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
const SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const VerifyDocuments = ({ data , cedula  })=>{
    const solicitudId = data[0].id;
    const [document, setDocument] = external_react_.useState([]);
    const [isLoading, setIsLoading] = external_react_.useState(true);
    const [isSendingData, setIsSendingData] = external_react_.useState(false);
    const [message, setMessage] = external_react_.useState('');
    const [openModalImage, setOpenModalImage] = external_react_.useState(false);
    const [renderImage, setRenderImage] = external_react_.useState('');
    const [documentURL, setDocumentURL] = external_react_.useState([]);
    const [, setImgDeudor] = external_react_.useState([]);
    const [, setImgCodeudor] = external_react_.useState([]);
    const classModal = `fixed inset-0 bg-modal-info  flex justify-center z-50`;
    const handleOpenModal = (urlImage)=>{
        setOpenModalImage(true);
        setRenderImage(urlImage);
    };
    external_react_.useEffect(()=>{
        async function getDocumentsData() {
            const { response: res  } = await (0,getData/* getData */.Y)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitudId}?seccion=DOC`);
            if (res.status === 200) {
                const dt = await res.json();
                setDocument(dt);
                setIsLoading(false);
                if (!Object.keys(dt).length) {
                    setImgDeudor([]);
                    setImgCodeudor([]);
                } else {
                    const { deudor , codeudor  } = dt;
                    if (deudor.length > 0) {
                        deudor.filter(({ referencia  })=>referencia !== null && referencia !== undefined
                        ).map(async ({ referencia , tipo  })=>await getImg(referencia, tipo)
                        );
                    }
                    if (codeudor.length > 0) {
                        codeudor.filter(({ referencia  })=>referencia !== null && referencia !== undefined
                        ).map(async ({ referencia , tipo  })=>await getImg(referencia, tipo)
                        );
                    }
                    setImgDeudor(deudor);
                    setImgCodeudor(codeudor);
                }
            }
            if (res.status === 404) {
                setDocument([]);
                setIsLoading(false);
            }
        }
        getDocumentsData();
    }, []);
    function handleChange(e, posicionRol) {
        let indexObj;
        if (posicionRol === 'deudor') {
            const { deudor  } = document;
            indexObj = deudor.findIndex(({ tipo  })=>tipo === e.target.name
            );
        }
        if (posicionRol === 'codeudor') {
            const { codeudor  } = document;
            indexObj = codeudor.findIndex(({ tipo  })=>tipo === e.target.name
            );
        }
        if (indexObj != -1) {
            setDocument((prev)=>{
                prev[posicionRol][indexObj] = {
                    ...prev[posicionRol][indexObj],
                    tipo: e.target.name,
                    validado: e.target.checked,
                    referencia: null
                };
                return prev;
            });
        } else {
            setDocument((prev)=>{
                return {
                    ...prev,
                    [posicionRol]: [
                        ...prev[posicionRol],
                        {
                            tipo: e.target.name,
                            validado: e.target.checked
                        }, 
                    ]
                };
            });
        }
    }
    async function sendDocuments(e) {
        e.preventDefault();
        if (isSendingData) return;
        setIsSendingData(true);
        try {
            const token = window.localStorage.getItem('access_token');
            if (!token || token === '' || token === 'null') throw new Error('Token is missing');
            const res = await (0,custom_fetch/* customFetch */.rK)('credito/solicitud', {
                method: 'POST',
                body: JSON.stringify({
                    seccion: 'DOC',
                    solicitud_id: solicitudId,
                    data: {
                        ...document
                    }
                }),
                type: custom_fetch/* RequestTypes.credit */.lO.credit,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.status === 201) {
                setMessage('Documentos enviados correctamente');
            } else {
                setMessage('Error al enviar documentos, intentalo mas tarde');
            }
        } catch  {
            setMessage('Error al enviar documentos');
        }
        setIsSendingData(false);
        setTimeout(()=>{
            setMessage('');
        }, 3000);
    }
    const getDefaultChecked = (name, posicionRol)=>{
        let objFound;
        if (posicionRol === 'deudor') {
            const { deudor  } = document;
            objFound = deudor.find(({ tipo  })=>tipo === name
            );
        }
        if (posicionRol === 'codeudor') {
            const { codeudor  } = document;
            objFound = codeudor.find(({ tipo  })=>tipo === name
            );
        }
        if (objFound) {
            const { validado  } = objFound;
            return validado;
        } else {
            return false;
        }
    };
    async function getImg(referencia, tipo) {
        try {
            const responseFetch = await (0,custom_fetch/* customFetch */.rK)(`files/${referencia}`, {
                type: custom_fetch/* RequestTypes.files */.lO.files
            });
            const blob = await responseFetch.blob();
            const imgURL = URL.createObjectURL(blob);
            const extention = responseFetch.url.split(".").pop();
            setDocumentURL((prev)=>{
                return [
                    ...prev,
                    {
                        imgURL,
                        tipo,
                        extention
                    }
                ];
            });
        } catch (err) {}
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card-custom my-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "header-card-custom",
                children: "Verificar documentos"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "body-card-custom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "contenedor-img-documentos my-4",
                        children: documentURL.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "body-card-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4",
                            children: documentURL.map((item, index)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid img-miniatura",
                                    onClick: ()=>handleOpenModal(item)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: item.imgURL,
                                            onError: (e)=>{
                                                e.target.onerror = null;
                                                if (item.extention == 'pdf') {
                                                    e.target.src = "/pdf-file.svg";
                                                } else if (item.extention == 'png' || item.extention == 'jpeg' || item.extention == 'jpg') {
                                                    e.target.src = "/png-file.svg";
                                                } else if (item.extention == 'xls' || item.extention == 'xlsx') {
                                                    e.target.src = "/xls-file.svg";
                                                } else {
                                                    e.target.src = "/doc-file.svg";
                                                }
                                            },
                                            alt: "documentos"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xs p-4",
                                            children: item.tipo
                                        })
                                    ]
                                }, index));
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mensaje-error",
                            children: "No se encontraron im\xe1genes"
                        })
                    }),
                    message ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: message.includes('Error') ? ERROR_CLASS : SUCCESS_CLASS,
                        role: "alert",
                        children: message
                    }) : null,
                    isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Loading..."
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: sendDocuments,
                        className: "font-section",
                        children: [
                            data.map(({ deudor , codeudor  }, index)=>{
                                if (deudor?.persona?.num_identificacion === Number(cedula)) {
                                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                        children: [
                                            documentosDeudor.map(({ name , value , id  })=>{
                                                return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBoxDocument, {
                                                        name: name,
                                                        value: value,
                                                        id: id,
                                                        getDefaultChecked: getDefaultChecked,
                                                        handleChange: handleChange,
                                                        posicionRol: "deudor"
                                                    })
                                                }, id));
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CheckBoxDocument, {
                                                name: 'Firma',
                                                value: 'FIRMA',
                                                id: 'firma-deudior',
                                                getDefaultChecked: getDefaultChecked,
                                                handleChange: handleChange,
                                                posicionRol: "deudor"
                                            })
                                        ]
                                    }, index));
                                }
                                if (codeudor?.persona?.num_identificacion === Number(cedula)) {
                                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                        children: [
                                            documentosCodeudor.map(({ name , value , id  })=>{
                                                return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBoxDocument, {
                                                        name: name,
                                                        value: value,
                                                        id: id,
                                                        getDefaultChecked: getDefaultChecked,
                                                        handleChange: handleChange,
                                                        posicionRol: "codeudor"
                                                    })
                                                }, id));
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CheckBoxDocument, {
                                                name: 'Firma',
                                                value: 'FIRMA',
                                                id: 'firma-codeudior',
                                                getDefaultChecked: getDefaultChecked,
                                                handleChange: handleChange,
                                                posicionRol: "codeudor"
                                            })
                                        ]
                                    }, index));
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-primario",
                                    children: isSendingData ? 'Enviando...' : 'Guardar cambios'
                                })
                            })
                        ]
                    })
                ]
            }),
            openModalImage ? /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
                nodo: "render-image-full",
                className: "h-full w-full md:w-3/5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-card-custom",
                    onClick: ()=>setOpenModalImage(false)
                    ,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-header-card-custom flex justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Filtros de busqueda"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://img.icons8.com/color/48/000000/delete-sign--v1.png",
                                        className: "h-4 flex justify-end hover:cursor-pointer"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "modal-body-card-custom",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full object-contain grid grid-cols-1 iframe-modal",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    src: renderImage.imgURL,
                                    className: "object-contain h-full w-full"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "modal-footer-card-custom",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-texto-gris",
                                    children: "Cerrar"
                                })
                            })
                        })
                    ]
                })
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "render-image-full",
                className: openModalImage && classModal
            })
        ]
    }));
};


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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986,6795,843,840,6135,5912,8908,4780,5681,5114], () => (__webpack_exec__(932)));
module.exports = __webpack_exports__;

})();