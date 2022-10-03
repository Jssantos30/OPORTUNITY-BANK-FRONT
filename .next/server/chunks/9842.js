"use strict";
exports.id = 9842;
exports.ids = [9842];
exports.modules = {

/***/ 9842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ configuracion_tasa_interes)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./auth-context.jsx
var auth_context = __webpack_require__(6795);
// EXTERNAL MODULE: ./components/protected-route.jsx
var protected_route = __webpack_require__(840);
// EXTERNAL MODULE: ./utils/helpers.js
var helpers = __webpack_require__(4108);
;// CONCATENATED MODULE: ./utils/validateFields.js
const validForm = (values)=>{
    const errors = {};
    for (var key of Object.keys(values)){
        if (values[key]) {} else {
            errors[key] = 'Requerido';
        }
    }
    return errors;
};
/* harmony default export */ const validateFields = (validForm);

;// CONCATENATED MODULE: ./components/SuperAdmin/AddCredit.js





const AddCredit = (props)=>{
    const { setOpenModal  } = (0,auth_context/* useAuthContext */.Eu)();
    const [messageError, setMessageError] = external_react_default().useState('');
    const [err, setErr] = external_react_default().useState({});
    const [editMontoMinSalarios, setEditMontoMinSalarios] = external_react_default().useState(false);
    const [editMontoMin, setEditMontoMin] = external_react_default().useState(true);
    const [editMontoMax, setEditMontoMax] = external_react_default().useState(true);
    const [editMontoMaxSalarios, setEditMontoMaxSalarios] = external_react_default().useState(false);
    const handleChange = ({ target  })=>{
        if (target.name === 'num_salarios_minimo') {
            props.setValueMontoMinimo(target.value);
        }
        if (target.name === 'num_salarios') {
            props.setValueMontoMaximo(target.value);
        }
        props.setValuesAddLineaCredito({
            ...props.valuesAddLineaCredito,
            [target.name]: target.value
        });
    };
    const refNodes = {
        linea_credito: external_react_default().useRef(null),
        num_cuotas: external_react_default().useRef(null),
        num_salarios_minimo: external_react_default().useRef(null),
        num_salarios: external_react_default().useRef(null),
        monto_minimo: external_react_default().useRef(refNodes?.num_salarios_minimo?.current?.value * props.salarioMinimo || 0),
        monto_total: external_react_default().useRef(refNodes?.num_salarios?.current?.value * props.salarioMinimo || 0)
    };
    //Efecto para guardar el monto minimo si agregas el # de salarios minimos
    external_react_default().useEffect(()=>{
        props.setValuesAddLineaCredito({
            ...props.valuesAddLineaCredito,
            monto_minimo: refNodes?.num_salarios_minimo?.current?.value * props.salarioMinimo || 0
        });
    }, [
        refNodes?.num_salarios_minimo?.current?.value
    ]);
    external_react_default().useEffect(()=>{
        props.setValuesAddLineaCredito({
            ...props.valuesAddLineaCredito,
            monto_total: refNodes?.num_salarios?.current?.value * props.salarioMinimo || 0
        });
    }, [
        refNodes?.num_salarios?.current?.value
    ]);
    const handleEditarMontoMin = ()=>{
        setEditMontoMinSalarios(true);
        setEditMontoMin(false);
    };
    const handleGuardarMontoMin = ()=>{
        setEditMontoMin(true);
        const nuevoValor = (props.valuesAddLineaCredito.monto_minimo / props.salarioMinimo).toFixed(1);
        props.setValuesAddLineaCredito({
            ...props.valuesAddLineaCredito,
            num_salarios_minimo: nuevoValor
        });
        refNodes.num_salarios_minimo.current.value = nuevoValor;
        setEditMontoMinSalarios(false);
    };
    const handleEditarMontoMax = ()=>{
        setEditMontoMaxSalarios(true);
        setEditMontoMax(false);
    };
    const handleGuardarMontoMax = ()=>{
        setEditMontoMax(true);
        const nuevoValor = (props.valuesAddLineaCredito.monto_total / props.salarioMinimo).toFixed(1);
        props.setValuesAddLineaCredito({
            ...props.valuesAddLineaCredito,
            num_salarios: nuevoValor
        });
        refNodes.num_salarios.current.value = nuevoValor;
        setEditMontoMaxSalarios(false);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        const resultValidate = validateFields(props.valuesAddLineaCredito);
        setErr(resultValidate);
        const isMissingFields = Object.keys(resultValidate).length;
        const missingFields = Object.keys(resultValidate);
        if (!isMissingFields) {
            setOpenModal(true);
        } else {
            for (let key of missingFields){
                refNodes[key].current.focus({
                    preventScroll: false
                });
            }
        }
    };
    const handleCloseBox = (event)=>{
        event.preventDefault();
        props.setValuesAddLineaCredito({
            linea_credito: '',
            num_cuotas: '',
            num_salarios: '',
            monto_total: '',
            num_salarios_minimo: '',
            monto_minimo: ''
        });
        props.setValueMontoMinimo('');
        props.setValueMontoMaximo('');
        props.setShowCreditLineBox(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "body-card-custom",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onSubmit: handleSubmit,
                    className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "font-bold",
                                    children: "Nombre de l\xednea de cr\xe9dito:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    name: "linea_credito",
                                    value: props.valuesAddLineaCredito.linea_credito,
                                    onChange: handleChange,
                                    ref: refNodes.linea_credito,
                                    className: "h-10 border border-gray-400 px-4 rounded-lg"
                                }),
                                err.linea_credito ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "texto-error",
                                    children: err.linea_credito
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "font-bold",
                                    children: "N\xfamero de cuotas permitidas:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    onWheel: helpers/* preventOnWheelChange */.F,
                                    min: 1,
                                    name: "num_cuotas",
                                    value: props.valuesAddLineaCredito.num_cuotas,
                                    onChange: handleChange,
                                    ref: refNodes.num_cuotas,
                                    className: "h-10 border border-gray-400 px-4 rounded-lg"
                                }),
                                err.num_cuotas ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "texto-error",
                                    children: err.num_cuotas
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "font-bold",
                                    children: "Numero de salarios - monto m\xednimo:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    onWheel: helpers/* preventOnWheelChange */.F,
                                    name: "num_salarios_minimo",
                                    disabled: editMontoMinSalarios,
                                    value: !editMontoMinSalarios ? props.valuesAddLineaCredito.num_salarios_minimo : '',
                                    onChange: handleChange,
                                    ref: refNodes.num_salarios_minimo,
                                    className: "h-10 border border-gray-400 px-4 rounded-lg"
                                }),
                                err.num_salarios_minimo ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "texto-error",
                                    children: err.num_salarios_minimo
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "Monto m\xednimo:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "number",
                                            onWheel: helpers/* preventOnWheelChange */.F,
                                            name: "monto_minimo",
                                            ref: refNodes.monto_minimo,
                                            disabled: editMontoMin,
                                            value: editMontoMin && !refNodes?.num_salarios_minimo?.current?.value ? refNodes?.num_salarios_minimo?.current?.value * props.salarioMinimo || 0 : props.valuesAddLineaCredito.monto_minimo,
                                            onChange: handleChange,
                                            className: "grid col-span-2"
                                        }),
                                        editMontoMin ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "grid col-span-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn-secundario",
                                                type: "button",
                                                onClick: handleEditarMontoMin,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Editar"
                                                })
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "grid col-span-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn-primario",
                                                type: "button",
                                                onClick: handleGuardarMontoMin,
                                                children: 'Guardar'
                                            })
                                        }),
                                        err.monto_minimo ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "texto-error",
                                            children: err.monto_minimo
                                        }) : null
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "font-bold",
                                    children: "N\xfamero de salarios - monto m\xe1ximo:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    onWheel: helpers/* preventOnWheelChange */.F,
                                    name: "num_salarios",
                                    disabled: editMontoMaxSalarios,
                                    value: !editMontoMaxSalarios ? props.valuesAddLineaCredito.num_salarios : '',
                                    onChange: handleChange,
                                    ref: refNodes.num_salarios,
                                    className: "h-10 border border-gray-400 px-4 rounded-lg"
                                }),
                                err.num_salarios ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "texto-error",
                                    children: err.num_salarios
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "Monto M\xe1ximo:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "number",
                                            onWheel: helpers/* preventOnWheelChange */.F,
                                            name: "monto_total",
                                            ref: refNodes.monto_total,
                                            disabled: editMontoMax,
                                            value: editMontoMax && !refNodes?.num_salarios?.current?.value ? refNodes?.num_salarios?.current?.value * props.salarioMinimo || 0 : props.valuesAddLineaCredito.monto_total,
                                            onChange: handleChange,
                                            className: "grid col-span-2"
                                        }),
                                        editMontoMax ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "grid col-span-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn-secundario",
                                                type: "button",
                                                onClick: handleEditarMontoMax,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Editar"
                                                })
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "grid col-span-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn-primario",
                                                type: "button",
                                                onClick: handleGuardarMontoMax,
                                                children: 'Guardar'
                                            })
                                        }),
                                        err.monto_total ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "texto-error block",
                                            children: err.monto_total
                                        }) : null
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-end md:items-end footer-card-custom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "btn-primario order-1 md:order-1",
                        children: "Enviar"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: handleCloseBox,
                        type: "submit",
                        className: "btn-texto-gris order-0 md:order-0",
                        children: "Cancelar"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const SuperAdmin_AddCredit = (AddCredit);

// EXTERNAL MODULE: ./components/SuperAdmin/Modal.js
var Modal = __webpack_require__(7420);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(843);
;// CONCATENATED MODULE: ./pages/backoffice/configuracion-tasa-interes.js







const classModal = `fixed inset-5 backdrop-blur-sm  flex items-center justify-center`;
const SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
function ConfigurarInteres(props) {
    const initialValues = {
        linea_credito: '',
        num_cuotas: '',
        num_salarios_minimo: '',
        num_salarios: '',
        monto_minimo: '',
        monto_total: ''
    };
    const { openModal , setOpenModal  } = (0,auth_context/* useAuthContext */.Eu)();
    const [showCreditLineBox, setShowCreditLineBox] = external_react_.useState(false);
    const [valuesAddLineaCredito, setValuesAddLineaCredito] = external_react_.useState(initialValues);
    const [message, setMessage] = external_react_.useState('');
    const [valueMontoMinimo, setValueMontoMinimo] = external_react_.useState('');
    const [valueMontoMaximo, setValueMontoMaximo] = external_react_.useState('');
    const handleCancelProcess = ()=>{
        setValueMontoMinimo('');
        setValueMontoMaximo('');
        setOpenModal(false);
    };
    const handleAddLineaCredito = ()=>{
        setShowCreditLineBox(true);
    };
    const handleCreateLineaCredito = async ()=>{
        setOpenModal(false);
        setMessage('Procesando...');
        const URL_CREATE_CREDITO = `${"https://www.medellin.gov.co/bancopobres/configuracionms/"}config/credito/portafolio`;
        const dataToSend = {
            nombre: valuesAddLineaCredito.linea_credito,
            num_cuotas: Number(valuesAddLineaCredito.num_cuotas)
        };
        if (valuesAddLineaCredito.num_salarios_minimo === Number(valueMontoMinimo)) {
            ;
            dataToSend.num_salarios_minimo = Number(valuesAddLineaCredito.num_salarios_minimo), dataToSend.monto_minimo = null;
        } else {
            ;
            dataToSend.num_salarios_minimo = null, dataToSend.monto_minimo = Number(valuesAddLineaCredito.monto_minimo);
        }
        if (valuesAddLineaCredito.num_salarios === Number(valueMontoMaximo)) {
            ;
            dataToSend.num_salarios = Number(valuesAddLineaCredito.num_salarios), dataToSend.monto_total = null;
        } else {
            ;
            dataToSend.num_salarios = null, dataToSend.monto_total = Number(valuesAddLineaCredito.monto_total);
        }
        try {
            const { res , responseComplete  } = await (0,fetchData/* fetchData */.r)(URL_CREATE_CREDITO, dataToSend);
            if (responseComplete) {
                setOpenModal(false);
                setShowCreditLineBox(false);
                setValuesAddLineaCredito(initialValues);
                setMessage(res.message);
                setTimeout(()=>{
                    setMessage('');
                }, 5000);
            } else {
                setOpenModal(false);
                setMessage(`Hubo un error, ${res.message}`);
                setTimeout(()=>{
                    setMessage('');
                }, 5000);
            }
        } catch (err) {
            setOpenModal(false);
            setMessage(`Hubo un error, ${err.message}`);
            setTimeout(()=>{
                setMessage('');
            }, 5000);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(protected_route/* ProtectedRoute */.i, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "my-8 w-full",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-center w-11/12 mx-auto mb-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                type: "submit",
                                onClick: handleAddLineaCredito,
                                className: "mx-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${"/bancopobres"}/agregar-icono.svg`,
                                        className: "mx-auto"
                                    }),
                                    "Agregar L\xednea de cr\xe9dito"
                                ]
                            })
                        }),
                        showCreditLineBox ? /*#__PURE__*/ jsx_runtime_.jsx(SuperAdmin_AddCredit, {
                            valuesAddLineaCredito: valuesAddLineaCredito,
                            setValuesAddLineaCredito: setValuesAddLineaCredito,
                            showCreditLineBox: showCreditLineBox,
                            setShowCreditLineBox: setShowCreditLineBox,
                            salarioMinimo: props.salarioMinimo,
                            valueMontoMinimo: valueMontoMinimo,
                            setValueMontoMinimo: setValueMontoMinimo,
                            valueMontoMaximo: valueMontoMaximo,
                            setValueMontoMaximo: setValueMontoMaximo
                        }) : null,
                        message !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: message.includes('error') ? ERROR_CLASS : SUCCESS_CLASS,
                            children: message
                        }) : null,
                        openModal ? /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
                            nodo: "create-credit",
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "border rounded-lg p-4 flex flex-col bg-white ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Est\xe1s seguro de crear una l\xednea de cr\xe9dito"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex justify-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                className: "mr-4 mt-6 p-2 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                                onClick: handleCreateLineaCredito,
                                                children: "Si"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                className: "mt-6 p-2 w-2/5 font-bold text-white rounded-full bg-red-500",
                                                onClick: handleCancelProcess,
                                                children: "No"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : null,
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "create-credit",
                            className: openModal && classModal,
                            children: ' '
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {})
            ]
        })
    }));
}
/* harmony default export */ const configuracion_tasa_interes = (ConfigurarInteres);


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