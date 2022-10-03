"use strict";
exports.id = 6613;
exports.ids = [6613];
exports.modules = {

/***/ 3865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Banner = ({ title , image_url  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "flex md:h-60 flex-col md:flex-row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:w-1/2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: image_url,
                    alt: "img-capital-semilla",
                    className: "w-full h-full object-cover"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center md:justify-start items-center w-11/12 mx-auto md:w-1/2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-4xl lg:text-5xl p-6 font-semibold",
                    children: title
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 4775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ CardUploadDocument)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
;// CONCATENATED MODULE: ./Hooks/useDocuments.js

const useDocuments = (props)=>{
    const initialValues = {
        cedula: '',
        servicios_publicos: '',
        cifin: '',
        modelo_de_negocio: '',
        certificado_tradicion: '',
        vista_agropecuaria: '',
        firma: '',
        otros: ''
    };
    const [valueDocument, setValueDocument] = external_react_default().useState(initialValues);
    const [currentDocument, setCurrentDocument] = external_react_default().useState('');
    const handleSelect = (e)=>{
        setCurrentDocument(e.target.value);
        setValueDocument({
            ...valueDocument,
            [e.target.value]: e.target.value
        });
    };
    external_react_default().useEffect(()=>{
        if (props.loading) {
            setCurrentDocument('');
        }
    }, [
        props.loading
    ]);
    return {
        currentDocument,
        setCurrentDocument,
        handleSelect,
        valueDocument
    };
};

;// CONCATENATED MODULE: ./components/UploadDocuments.js




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
    {
        name: 'otros',
        value: 'OTROS',
        id: 7
    }, 
];
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
const UploadDocuments = (props)=>{
    const { route  } = (0,router_.useRouter)();
    const { currentDocument , handleSelect , valueDocument  } = useDocuments(props);
    const [documentos, setDocumentos] = external_react_default().useState([]);
    external_react_default().useEffect(()=>{
        if (route.includes('individual')) {
            setDocumentos(documentosDeudor);
        }
        if (route.includes('codeudor')) {
            setDocumentos(documentosCodeudor);
        }
    }, []);
    const LoadDocument = (e)=>{
        //si el documento es mayor a 5Mb sacar error
        if (e.target.files[0].size > 5242880) {
            props.setMessageLoadDocument('error, El archivo supera el tama\xf1o m\xe1ximo permitido');
            setTimeout(()=>{
                props.setMessageLoadDocument('');
            }, 5000);
            return;
        } else {
            const data = new FormData();
            data.append('file', e.target.files[0]);
            props.setDocuments({
                ...props.documents,
                [e.target.name]: data
            });
        }
    };
    const fileRef = external_react_default().useRef();
    external_react_default().useEffect(()=>{
        props.setDocuments({});
        if (fileRef.current) {
            fileRef.current.value = '';
        }
    }, [
        currentDocument
    ]);
    return props.loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading ...."
    }) : documentos.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-center rounded-lg mt-4 ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    name: currentDocument || '',
                    value: valueDocument[currentDocument],
                    onChange: handleSelect,
                    className: "border border-gray-300 rounded-lg mx-auto py-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: ` <--- Selecciona un tipo de documento ---> `
                        }),
                        documentos.map((opt)=>{
                            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                name: opt.name,
                                value: opt.value,
                                children: [
                                    ' ',
                                    opt.name,
                                    ' '
                                ]
                            }, opt.id));
                        })
                    ]
                }),
                currentDocument ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    ref: fileRef,
                    type: "file",
                    name: currentDocument,
                    onChange: (e)=>LoadDocument(e)
                    ,
                    accept: ".jpg, .jpeg, .png, .pdf"
                }) : null,
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: " Solo se permiten archivos de tipo [.jpg, .jpeg, .png, .pdf] y de tama\xf1o m\xe1ximo de 5 Mb"
                })
            ]
        })
    }) : null;
};

;// CONCATENATED MODULE: ./components/CardUploadDocument.js





const SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const CardUploadDocument = (props)=>{
    const { route  } = (0,router_.useRouter)();
    const [documents, setDocuments] = external_react_.useState({});
    const [messageLoadDocument, setMessageLoadDocument] = external_react_.useState('');
    const [loading, setLoading] = external_react_.useState(false);
    async function fetchFile(data) {
        const responseFetch = await (0,custom_fetch/* customFetch */.rK)('files/upload', {
            method: 'POST',
            body: data,
            type: custom_fetch/* RequestTypes.files */.lO.files,
            preventContentType: true
        });
        return responseFetch;
    }
    async function fetchDataBase(url, data) {
        const response = await (0,custom_fetch/* customFetch */.rK)(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            type: custom_fetch/* RequestTypes.credit */.lO.credit
        });
        const res = await response.json();
        return {
            responseComplete: response.ok,
            res
        };
    }
    const uploadDocument = async (e)=>{
        e.preventDefault();
        let keyDocument;
        const arrayObj = Object.keys(documents);
        let rolUser;
        if (route.includes('individual')) rolUser = 'deudor';
        else rolUser = 'codeudor';
        if (!arrayObj.length) {
            setMessageLoadDocument('Hubo un error, debes de elegir un documento');
            setTimeout(()=>{
                setMessageLoadDocument('');
            }, 5000);
        } else {
            for(let iterador in documents){
                if (documents[iterador] !== '') {
                    keyDocument = iterador;
                    try {
                        const res = await fetchFile(documents[iterador]);
                        if (res.status === 201) {
                            const responseData = await res.json();
                            const { filename  } = responseData;
                            const documentToSend = {
                                seccion: 'DOC',
                                solicitud_id: props.solicitud_credito,
                                data: {
                                    [rolUser]: [
                                        {
                                            tipo: keyDocument,
                                            referencia: filename
                                        }, 
                                    ]
                                }
                            };
                            try {
                                const { res , responseComplete  } = await fetchDataBase('credito/solicitud', documentToSend);
                                if (responseComplete) {
                                    setMessageLoadDocument(res.message);
                                    setTimeout(()=>{
                                        setMessageLoadDocument('');
                                        setLoading(true);
                                        setTimeout(()=>{
                                            setLoading(false);
                                        }, 2000);
                                    }, 5000);
                                } else {
                                    setMessageLoadDocument('Hubo un error, Intenta m\xe1s tarde');
                                    setTimeout(()=>{
                                        setMessageLoadDocument('');
                                    }, 5000);
                                }
                            } catch (err) {
                                setMessageLoadDocument('Hubo un error, Intenta m\xe1s tarde');
                            }
                        }
                    } catch (err) {
                        setMessageLoadDocument(`Hubo un error, Intenta más tarde ${err.message}`);
                        setTimeout(()=>{
                            setMessageLoadDocument('');
                        }, 5000);
                    }
                }
            }
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col px-4 border rounded-lg bg-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(UploadDocuments, {
                            documents: documents,
                            setDocuments: setDocuments,
                            setMessageLoadDocument: setMessageLoadDocument,
                            loading: loading
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto flex flex-col"
                    })
                ]
            }),
            messageLoadDocument !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: messageLoadDocument.includes('error') ? ERROR_CLASS : SUCCESS_CLASS,
                children: messageLoadDocument
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                onClick: uploadDocument,
                className: " px-4 py-2 my-4 rounded-full mx-auto bg-color_primary_1 text-white font-semibold",
                children: [
                    ' ',
                    "Subir",
                    ' '
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 2035:
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



const DateInput = ({ label , ...props })=>{
    const [field, meta] = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useField)(props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: props.name,
                children: [
                    " ",
                    label,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:flex h-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: props.name,
                        name: props.name,
                        ...field,
                        ...props,
                        className: "border rounded-lg border-gray-400 h-10 w-full sm:w-1/3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: meta.touched && meta.error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "error",
                            children: `${meta.error}`
                        }) : null
                    })
                ]
            })
        ]
    }, props.key));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateInput);


/***/ }),

/***/ 5498:
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



const TelInput = ({ label , ...props })=>{
    const [field, meta] = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useField)(props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: props.name,
                children: [
                    " ",
                    label,
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                // pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
                id: props.name,
                name: props.name,
                ...field,
                ...props,
                className: `${props.className} rounded-lg border-color_gray_2`
            }),
            meta.touched && meta.error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: `${meta.error}`
            }) : null
        ]
    }, props.key));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TelInput);


/***/ }),

/***/ 2280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const Modal = ({ Component , modalProps  })=>{
    const [isBrowser, setIsBrowser] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        setIsBrowser(true);
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!modalProps.showModal) {
            setIsBrowser(false);
        }
    }, [
        modalProps,
        modalProps.showModal
    ]);
    if (isBrowser) {
        return(/*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {}), document.getElementById('modal-root')));
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ 5012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const MultiStepIndicator = ({ paso , solicitud_id , usuario , rol , current , form_type  })=>{
    const arrayStep = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ];
    const { 0: screenWidth , 1: setScreenWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setScreenWidth(window.matchMedia('(min-width: 760px)').matches);
        const handleResize = ()=>setScreenWidth(window.matchMedia('(min-width: 760px)').matches)
        ;
        window.addEventListener('resize', handleResize);
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-steps w-full h-14",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "flex h-full relative w-full",
                children: arrayStep.map((step, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Step, {
                        step: step,
                        current: current,
                        paso: paso,
                        solicitud_id: solicitud_id,
                        usuario: usuario,
                        rol: rol,
                        screenWidth: screenWidth,
                        form_type: form_type
                    }, index)
                )
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiStepIndicator);
function Step({ step , current , paso , solicitud_id , usuario , rol , screenWidth , form_type  }) {
    var zindex = 10 - step;
    var res = paso?.replace(/\D/g, '');
    return usuario ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: form_type === 'deudor' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: `/individual/${usuario[0]}/${solicitud_id || usuario[1]}?paso=FDE_${step + 1}&rol=${rol}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `step z-card-${zindex} ${step == res - 1 && '-current'}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "icon"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "step-text text-lg md:text-xs lg:text-sm z-card-2 font-semibold ml-5 sm:ml-6 md:ml-2",
                        children: [
                            ' ',
                            !screenWidth ? step : 'Paso ' + step
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "arrow z-card-1"
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: `/codeudor/${usuario[0]}/${solicitud_id || usuario[1]}?paso=FCO_${step}&rol=${rol}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `step z-card-${zindex} ${step == res && '-current'}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "icon"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "step-text text-lg md:text-xs lg:text-sm z-card-2 font-semibold ml-5 sm:ml-6 md:ml-2",
                        children: [
                            ' ',
                            !screenWidth ? step : 'Paso ' + step
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "arrow z-card-1"
                    })
                ]
            })
        })
    }) : null;
}


/***/ }),

/***/ 1859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ListaComunasBarriosMedellin)
/* harmony export */ });
const ListaComunasBarriosMedellin = [
    {
        COMUNA: 1,
        BARRIO: 8,
        NOMBRE_BARRIO: 'El Compromiso',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 12,
        NOMBRE_BARRIO: 'Carpinelo',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Granizal',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Santo Domingo Savio No. 1',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 10,
        NOMBRE_BARRIO: 'La Esperanza No. 2',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Aldea Pablo VI',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 7,
        NOMBRE_BARRIO: 'San Pablo',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Mosc\xfa No. 2',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Villa Guadalupe',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 11,
        NOMBRE_BARRIO: 'La Avanzada',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Santo Domingo Savio No. 2',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: 1,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Popular',
        NOMBRE_COMUNA: 'POPULAR'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 2,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Pablo VI',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 1,
        NOMBRE_BARRIO: 'La Isla',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 5,
        NOMBRE_BARRIO: 'La Francia',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Mosc\xfa No. 1',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 4,
        NOMBRE_BARRIO: 'La Frontera',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Villa del Socorro',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Santa Cruz',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Andaluc\xeda',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Villa Niza',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Play\xf3n de Los Comuneros',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: 2,
        BARRIO: 11,
        NOMBRE_BARRIO: 'La Rosa',
        NOMBRE_COMUNA: 'SANTA CRUZ'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 3,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Manrique Oriental',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 15,
        NOMBRE_BARRIO: 'San Jos\xe9 la Cima No.2',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Versalles No. 2',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 14,
        NOMBRE_BARRIO: 'San Jos\xe9 la Cima No. 1',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 6,
        NOMBRE_BARRIO: 'El Pomar',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Santa In\xe9s',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 5,
        NOMBRE_BARRIO: 'El Raizal',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Mar\xeda Cano Carambolas',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 12,
        NOMBRE_BARRIO: 'Oriente',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Versalles No. 1',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 11,
        NOMBRE_BARRIO: 'La Cruz',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Campo Vald\xe9s No. 2',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Las Granjas',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Manrique Central No. 2',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: 3,
        BARRIO: 1,
        NOMBRE_BARRIO: 'La Salle',
        NOMBRE_COMUNA: 'MANRIQUE'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 4,
        BARRIO: 8,
        NOMBRE_BARRIO: 'San Pedro',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Bermejal-Los Alamos',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Berlin',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 2,
        NOMBRE_BARRIO: 'San Isidro',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 16,
        NOMBRE_BARRIO: 'Jard\xedn Bot\xe1nico',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Moravia',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 12,
        NOMBRE_BARRIO: 'La Pi\xf1uela',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Campo Vald\xe9s No. 1',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Sevilla',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Universidad de Antioquia',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Miranda',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Manrique Central No. 1',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 17,
        NOMBRE_BARRIO: 'Parque Norte',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Aranjuez',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Las Esmeraldas',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Palermo',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: 4,
        BARRIO: 14,
        NOMBRE_BARRIO: 'Brasilia',
        NOMBRE_COMUNA: 'ARANJUEZ'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 5,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Tejelo',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Toscana',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Girardot',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Florencia',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Plaza de Ferias',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Cementerio Universal',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Las Brisas',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Castilla',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 17,
        NOMBRE_BARRIO: 'Caribe',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 16,
        NOMBRE_BARRIO: 'Terminal de Transporte',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 7,
        NOMBRE_BARRIO: 'H\xe9ctor Abad G\xf3mez',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Boyac\xe1',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 12,
        NOMBRE_BARRIO: 'Oleoducto',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Tricentenario',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Belalc\xe1zar',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Francisco Antonio Zea',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 19,
        NOMBRE_BARRIO: 'El Progreso',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: 5,
        BARRIO: 14,
        NOMBRE_BARRIO: 'Alfonso L\xf3pez',
        NOMBRE_COMUNA: 'CASTILLA'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 6,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Santander',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Picacho',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Mirador del Doce',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Kennedy',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Pedregal',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 11,
        NOMBRE_BARRIO: 'El Progreso No.2',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Doce de Octubre No.2',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 5,
        NOMBRE_BARRIO: 'La Esperanza',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 12,
        NOMBRE_BARRIO: 'El Triunfo',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 6,
        NOMBRE_BARRIO: 'San Mart\xedn de Porres',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Doce de Octubre No.1',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: 6,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Picachito',
        NOMBRE_COMUNA: 'DOCE DE OCTUBRE'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 7,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Bosques de San Pablo',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 3,
        NOMBRE_BARRIO: 'San Germ\xe1n',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 17,
        NOMBRE_BARRIO: 'Robledo',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 18,
        NOMBRE_BARRIO: 'Cucaracho',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 20,
        NOMBRE_BARRIO: 'Santa Margarita',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 23,
        NOMBRE_BARRIO: 'Pajarito',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Aures No.1',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 12,
        NOMBRE_BARRIO: 'Aures No. 2',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 10,
        NOMBRE_BARRIO: 'L\xf3pez de Mesa',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Villa Flora',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 2,
        NOMBRE_BARRIO: 'B. Cerro  El Volador',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 14,
        NOMBRE_BARRIO: 'Bello Horizonte',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Facultad de Minas U. Nacional',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 22,
        NOMBRE_BARRIO: 'Olaya Herrera',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 6,
        NOMBRE_BARRIO: 'La Pilarica',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Altamira',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 19,
        NOMBRE_BARRIO: 'Fuente Clara',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 25,
        NOMBRE_BARRIO: 'Nueva Villa de la Iguan\xe1',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 9,
        NOMBRE_BARRIO: 'C\xf3rdoba',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 24,
        NOMBRE_BARRIO: 'Monteclaro',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 11,
        NOMBRE_BARRIO: 'El Diamante',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Universidad Nacional',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 16,
        NOMBRE_BARRIO: 'Palenque',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: 7,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Facultad Veterinaria y Zootecnia U.de.A.',
        NOMBRE_COMUNA: 'ROBLEDO'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 8,
        BARRIO: 17,
        NOMBRE_BARRIO: 'La Sierra',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Sucre',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 10,
        NOMBRE_BARRIO: 'El Pinal',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 19,
        NOMBRE_BARRIO: 'Villa Liliam',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 14,
        NOMBRE_BARRIO: 'San Antonio',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Los Mangos',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 12,
        NOMBRE_BARRIO: 'La Libertad',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Llanaditas',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Las Estancias',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Villa Hermosa',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Villatina',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Batall\xf3n Girardot',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 16,
        NOMBRE_BARRIO: 'Villa Turbay',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Enciso',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 2,
        NOMBRE_BARRIO: 'La Mansi\xf3n',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Trece de Noviembre',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 3,
        NOMBRE_BARRIO: 'San Miguel',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: 8,
        BARRIO: 4,
        NOMBRE_BARRIO: 'La Ladera',
        NOMBRE_COMUNA: 'VILLA HERMOSA'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 9,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Gerona',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Barrio de Jes\xfas',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Bombon\xe1 No. 2',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Catalu\xf1a',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Juan Pablo II',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 12,
        NOMBRE_BARRIO: 'El Salvador',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Asomadera No. 2',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Miraflores',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Barrio Caicedo',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 14,
        NOMBRE_BARRIO: 'Asomadera No. 1',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 10,
        NOMBRE_BARRIO: 'La Milagrosa',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Loreto',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Buenos Aires',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Alejandro Echavarr\xeda',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Los Cerros El Vergel',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 16,
        NOMBRE_BARRIO: 'Asomadera No. 3',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: 9,
        BARRIO: 17,
        NOMBRE_BARRIO: 'Ocho de Marzo',
        NOMBRE_COMUNA: 'BUENOS AIRES'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 10,
        BARRIO: 16,
        NOMBRE_BARRIO: 'Boston',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 14,
        NOMBRE_BARRIO: 'Las Palmas',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Estaci\xf3n Villa',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 9,
        NOMBRE_BARRIO: 'La Alpujarra',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Centro Administrativo',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 4,
        NOMBRE_BARRIO: 'El Chagualo',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Guayaquil',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 19,
        NOMBRE_BARRIO: 'La Candelaria',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 20,
        NOMBRE_BARRIO: 'San Diego',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 6,
        NOMBRE_BARRIO: 'San Benito',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Barrio Col\xf3n',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Prado',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Jes\xfas Nazareno',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Hospital San Vicente de Pa\xfal',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Coraz\xf3n de Jes\xfas',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 17,
        NOMBRE_BARRIO: 'Los \xc1ngeles',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Calle Nueva',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 12,
        NOMBRE_BARRIO: 'Perpetuo Socorro',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 18,
        NOMBRE_BARRIO: 'Villa Nueva',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: 10,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Bombon\xe1 No. 1',
        NOMBRE_COMUNA: 'LA CANDELARIA'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 11,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Los Conquistadores',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Bolivariana',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 4,
        NOMBRE_BARRIO: 'San Joaqu\xedn',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Suramericana',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 16,
        NOMBRE_BARRIO: 'U.D. Atanasio Girardot',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Las Acacias',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Carlos E. Restrepo',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 17,
        NOMBRE_BARRIO: 'Florida Nueva',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Naranjal',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Laureles',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Cuarta Brigada',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Lorena',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 12,
        NOMBRE_BARRIO: 'El Vel\xf3dromo',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 10,
        NOMBRE_BARRIO: 'La Castellana',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 13,
        NOMBRE_BARRIO: 'El Estadio',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 14,
        NOMBRE_BARRIO: 'Los Colores',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: 11,
        BARRIO: 6,
        NOMBRE_BARRIO: 'U.P.B.',
        NOMBRE_COMUNA: 'LAURELES'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 12,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Los Pinos',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Barrio Crist\xf3bal',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Sim\xf3n Bol\xedvar',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 4,
        NOMBRE_BARRIO: 'La Am\xe9rica',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Calasanz Parte Alta',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Calasanz',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Santa M\xf3nica',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 7,
        NOMBRE_BARRIO: 'El Danubio',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Ferrini',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Santa Luc\xeda',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Campo Alegre',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 5,
        NOMBRE_BARRIO: 'La Floresta',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: 12,
        BARRIO: 12,
        NOMBRE_BARRIO: 'Santa Teresita',
        NOMBRE_COMUNA: 'LA AMERICA'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 13,
        BARRIO: 13,
        NOMBRE_BARRIO: 'El Coraz\xf3n',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 9,
        NOMBRE_BARRIO: 'San Javier No.1',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 17,
        NOMBRE_BARRIO: 'Eduardo Santos',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 19,
        NOMBRE_BARRIO: 'El Socorro',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 12,
        NOMBRE_BARRIO: 'Betania',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 8,
        NOMBRE_BARRIO: 'San Javier No.2',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Belencito',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 14,
        NOMBRE_BARRIO: 'Las Independencias',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 16,
        NOMBRE_BARRIO: 'El Salado',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Nuevos Conquistadores',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Santa Rosa de Lima',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Juan XXIII La Quiebra',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 18,
        NOMBRE_BARRIO: 'Antonio Nari\xf1o',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Los Alc\xe1zares',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 6,
        NOMBRE_BARRIO: 'La Pradera',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Blanquizal',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Veinte de Julio',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 1,
        NOMBRE_BARRIO: 'El Pesebre',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: 13,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Metropolitano',
        NOMBRE_COMUNA: 'SAN JAVIER'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 14,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Villa Carlota',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 23,
        NOMBRE_BARRIO: 'Santa Mar\xeda de los \xc1ngeles',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Las Lomas No.2',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 12,
        NOMBRE_BARRIO: 'San Lucas',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Los Naranjos',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 13,
        NOMBRE_BARRIO: 'El Diamante No. 2',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 17,
        NOMBRE_BARRIO: 'La Florida',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 18,
        NOMBRE_BARRIO: 'El Poblado',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 16,
        NOMBRE_BARRIO: 'Alejandr\xeda',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 22,
        NOMBRE_BARRIO: 'La Aguacatala',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Lalinde',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Barrio Colombia',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Altos del Poblado',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 21,
        NOMBRE_BARRIO: 'Patio Bonito',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Castropol',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 9,
        NOMBRE_BARRIO: 'El Tesoro',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 14,
        NOMBRE_BARRIO: 'El Castillo',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Las Lomas No.1',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 20,
        NOMBRE_BARRIO: 'Astorga',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Los Balsos No.1',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Los Balsos No.2',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: 14,
        BARRIO: 19,
        NOMBRE_BARRIO: 'Manila',
        NOMBRE_COMUNA: 'EL POBLADO'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 15,
        BARRIO: 1,
        NOMBRE_BARRIO: 'El Rodeo',
        NOMBRE_COMUNA: 'GUAYABAL'
    },
    {
        COMUNA: 15,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Trinidad',
        NOMBRE_COMUNA: 'GUAYABAL'
    },
    {
        COMUNA: 15,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Parque Juan Pablo II',
        NOMBRE_COMUNA: 'GUAYABAL'
    },
    {
        COMUNA: 15,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Santa F\xe9',
        NOMBRE_COMUNA: 'GUAYABAL'
    },
    {
        COMUNA: 15,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Guayabal',
        NOMBRE_COMUNA: 'GUAYABAL'
    },
    {
        COMUNA: 15,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Cristo Rey',
        NOMBRE_COMUNA: 'GUAYABAL'
    },
    {
        COMUNA: 15,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Tenche',
        NOMBRE_COMUNA: 'GUAYABAL'
    },
    {
        COMUNA: 15,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Campo Amor',
        NOMBRE_COMUNA: 'GUAYABAL'
    },
    {
        COMUNA: 15,
        BARRIO: 11,
        NOMBRE_BARRIO: 'La Colina',
        NOMBRE_COMUNA: 'GUAYABAL'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 16,
        BARRIO: 18,
        NOMBRE_BARRIO: 'Nueva Villa de Aburr\xe1',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 9,
        NOMBRE_BARRIO: 'La Hondonada',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 7,
        NOMBRE_BARRIO: 'Diego Echavarr\xeda',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 5,
        NOMBRE_BARRIO: 'San Bernardo',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Loma de los Bernal',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Altavista',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Granada',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Bel\xe9n',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 14,
        NOMBRE_BARRIO: 'La Palma',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 16,
        NOMBRE_BARRIO: 'Las Violetas',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 15,
        NOMBRE_BARRIO: 'Los Alpes',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 10,
        NOMBRE_BARRIO: 'El Rinc\xf3n',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 12,
        NOMBRE_BARRIO: 'La Gloria',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 17,
        NOMBRE_BARRIO: 'Las Mercedes',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Las Playas',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 1,
        NOMBRE_BARRIO: 'F\xe1tima',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 8,
        NOMBRE_BARRIO: 'La mota',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 19,
        NOMBRE_BARRIO: 'Miravalle',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Rosales',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 20,
        NOMBRE_BARRIO: 'El Nogal-Los Almendros',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: 16,
        BARRIO: 21,
        NOMBRE_BARRIO: 'Cerro Nutibara',
        NOMBRE_COMUNA: 'BELEN'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 50,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Potrera Miserenga',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 1,
        NOMBRE_BARRIO: 'La Suiza',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 2,
        NOMBRE_BARRIO: 'La Frisola',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Volcana Guayabal',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 4,
        NOMBRE_BARRIO: 'Palmitas Sector Central',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 7,
        NOMBRE_BARRIO: 'La Urquita',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 87,
        NOMBRE_BARRIO: 'Suburbano Potrera Miserenga',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 88,
        NOMBRE_BARRIO: 'Suburbano La Aldea',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 5,
        NOMBRE_BARRIO: 'La Aldea',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 89,
        NOMBRE_BARRIO: 'Suburbano Palmitas',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: 50,
        BARRIO: 86,
        NOMBRE_BARRIO: 'Suburbano Urquita',
        NOMBRE_COMUNA: 'PALMITAS'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 60,
        BARRIO: 16,
        NOMBRE_BARRIO: 'Boqueron',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 0,
        NOMBRE_BARRIO: 'Cabecera Urbana San Cristobal',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 88,
        NOMBRE_BARRIO: 'Suburbano El Llano',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 97,
        NOMBRE_BARRIO: 'Area de Expansion Altos de Calasanz',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 85,
        NOMBRE_BARRIO: 'Suburbano La Palma-El Patio',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 1,
        NOMBRE_BARRIO: 'La Loma',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Pajarito',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 89,
        NOMBRE_BARRIO: 'Suburbano Pedregal alto',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Traves\xedas',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 9,
        NOMBRE_BARRIO: 'Pedregal Alto',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 7,
        NOMBRE_BARRIO: 'El Llano',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 6,
        NOMBRE_BARRIO: 'La Cuchilla',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 2,
        NOMBRE_BARRIO: 'La Palma-El Patio',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 98,
        NOMBRE_BARRIO: '\xc1rea de Expansi\xf3n Pajarito',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 86,
        NOMBRE_BARRIO: 'Suburbano La Cuchilla',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 13,
        NOMBRE_BARRIO: 'El Carmelo',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 14,
        NOMBRE_BARRIO: 'Yolombo',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 15,
        NOMBRE_BARRIO: 'San Jos\xe9 de la Monta\xf1a',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 12,
        NOMBRE_BARRIO: 'El Picacho',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 84,
        NOMBRE_BARRIO: 'Suburbano La Loma',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 10,
        NOMBRE_BARRIO: 'Pedregal Bajo',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 17,
        NOMBRE_BARRIO: 'La Loma Oriental',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Naranjal',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 4,
        NOMBRE_BARRIO: 'El Uvito',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Las Playas',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: 60,
        BARRIO: 87,
        NOMBRE_BARRIO: 'Suburbano Travesias',
        NOMBRE_COMUNA: 'SAN CRISTOBAL'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 70,
        BARRIO: 96,
        NOMBRE_BARRIO: 'Area De Expansion Altavista',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 2,
        NOMBRE_BARRIO: 'Aguas Frias',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 97,
        NOMBRE_BARRIO: 'Area De Expansion Belen Rincon',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 98,
        NOMBRE_BARRIO: 'Area De Expansion El Noral',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 85,
        NOMBRE_BARRIO: 'San Pablo',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 88,
        NOMBRE_BARRIO: 'El Corazon El Morro',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 1,
        NOMBRE_BARRIO: 'Altavista Sector Central',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 89,
        NOMBRE_BARRIO: 'San Jose Del Manzanillo',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 86,
        NOMBRE_BARRIO: 'Suburbano Aguas Frias',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 84,
        NOMBRE_BARRIO: 'Buga Patio Bonito',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 87,
        NOMBRE_BARRIO: 'Suburbano Altavista',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: 70,
        BARRIO: 83,
        NOMBRE_BARRIO: 'La Esperanza',
        NOMBRE_COMUNA: 'ALTAVISTA'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 80,
        BARRIO: 6,
        NOMBRE_BARRIO: 'El Salado',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 7,
        NOMBRE_BARRIO: 'El Astillero',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 1,
        NOMBRE_BARRIO: 'El Vergel',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 4,
        NOMBRE_BARRIO: 'La Oculta',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 0,
        NOMBRE_BARRIO: 'Cabecera San Antonio de Prado',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 3,
        NOMBRE_BARRIO: 'Potrerito',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Yarumalito',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 89,
        NOMBRE_BARRIO: 'Suburbano Potrerito',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 5,
        NOMBRE_BARRIO: 'La Verde',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 2,
        NOMBRE_BARRIO: 'La Florida',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: 80,
        BARRIO: 98,
        NOMBRE_BARRIO: '\xc1rea de Expansi\xf3n San Antonio de Prado',
        NOMBRE_COMUNA: 'SAN ANTONIO DE PRADO'
    },
    {
        COMUNA: '',
        BARRIO: '',
        NOMBRE_BARRIO: '',
        NOMBRE_COMUNA: ''
    },
    {
        COMUNA: 90,
        BARRIO: 12,
        NOMBRE_BARRIO: 'Piedra Gorda',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 6,
        NOMBRE_BARRIO: 'Santa Elena Sector Central',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 89,
        NOMBRE_BARRIO: 'Suburbano Matasano 1',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 79,
        NOMBRE_BARRIO: 'Suburbano Piedra Gorda',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 11,
        NOMBRE_BARRIO: 'Piedras Blancas Represa',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 13,
        NOMBRE_BARRIO: 'Barro Blanco',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 81,
        NOMBRE_BARRIO: 'Suburbano El Placer',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 7,
        NOMBRE_BARRIO: 'El Placer',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 84,
        NOMBRE_BARRIO: 'Suburbano Santa Elena Central',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 78,
        NOMBRE_BARRIO: 'Suburbano El Cerro',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 3,
        NOMBRE_BARRIO: 'El Plan',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 85,
        NOMBRE_BARRIO: 'Suburbano El Llano',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 82,
        NOMBRE_BARRIO: 'Suburbano Chacaltaya',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 88,
        NOMBRE_BARRIO: 'Suburbano Matasano 2',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 8,
        NOMBRE_BARRIO: 'Piedras Blancas',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 86,
        NOMBRE_BARRIO: 'SUBURB El Plan',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 77,
        NOMBRE_BARRIO: 'Suburbano el Tesoro',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 87,
        NOMBRE_BARRIO: 'Suburbano Matasano 3',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 2,
        NOMBRE_BARRIO: 'El Llano SE',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 83,
        NOMBRE_BARRIO: 'Suburbano Mirador del Poblado',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 1,
        NOMBRE_BARRIO: 'El Cerro',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 80,
        NOMBRE_BARRIO: 'Suburbano Barro Blanco',
        NOMBRE_COMUNA: 'SANTA ELENA'
    },
    {
        COMUNA: 90,
        BARRIO: 5,
        NOMBRE_BARRIO: 'Media Luna',
        NOMBRE_COMUNA: 'SANTA ELENA'
    }, 
];


/***/ }),

/***/ 4108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ preventOnWheelChange)
/* harmony export */ });
function preventOnWheelChange(e) {
    e.target.blur();
}


/***/ })

};
;