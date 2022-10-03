"use strict";
(() => {
var exports = {};
exports.id = 7903;
exports.ids = [7903];
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

/***/ 5181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Title = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: `text-center text-3xl font-semibold my-4`,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 9837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ simular_credito),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./utils/PMT.js
/**
 * Copy of Excel's PMT function.
 * Credit: http://stackoverflow.com/questions/2094967/excel-pmt-function-in-js
 *
 * @param rate_per_period       The interest rate for the loan.
 * @param number_of_payments    The total number of payments for the loan in months.
 * @param present_value         The present value, or the total amount that a series of future payments is worth now;
 *                              Also known as the principal.
 * @param future_value          The future value, or a cash balance you want to attain after the last payment is made.
 *                              If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param type                  Optional, defaults to 0. The number 0 (zero) or 1 and indicates when payments are due.
 *                              0 = At the end of period
 *                              1 = At the beginning of the period
 * @returns {number}
 */ function pmt(rate_per_period, number_of_payments, present_value, future_value, type) {
    future_value = typeof future_value !== 'undefined' ? future_value : 0;
    type = typeof type !== 'undefined' ? type : 0;
    if (rate_per_period != 0) {
        // Interest rate exists
        var q = Math.pow(1 + rate_per_period, number_of_payments);
        return (-(rate_per_period * (future_value + q * present_value)) / ((-1 + q) * (1 + rate_per_period * type))).toFixed(2);
    } else if (number_of_payments != 0) {
        // No interest rate, but number of payments exists
        return (-(future_value + present_value) / number_of_payments).toFixed(2);
    }
    return 0;
}

// EXTERNAL MODULE: ./components/Banner.js
var Banner = __webpack_require__(3865);
// EXTERNAL MODULE: ./utils/separadorMillares.js
var separadorMillares = __webpack_require__(1003);
;// CONCATENATED MODULE: ./components/SimularCredito.js/CantidadYCuotasDePrestamos.js



const CantidadYCuotasDePrestamos = ({ lineaCreditoInfo  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "text-center text-2xl font-semibold text-color_primary_2_ligth my-4",
                children: [
                    ' ',
                    "Las condiciones para esta l\xednea son:",
                    ' '
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-evenly mt-4 border-b-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-11/12 mx-auto flex flex-col items-center text-center md:flex-row md:text-left",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-semibold w-1/2",
                                    children: "Un plazo de:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: " font-semibold w-1/2",
                                    children: [
                                        "Entre 1 hasta ",
                                        lineaCreditoInfo.num_cuotas,
                                        " meses"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-evenly mt-4 border-b-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-11/12 mx-auto flex flex-col items-center text-center md:flex-row md:text-left",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-lg font-semibold w-1/2",
                                    children: "Un monto m\xe1ximo de:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-lg font-semibold w-1/2",
                                    children: `$ ${(0,separadorMillares/* separadorMillares */.q)(lineaCreditoInfo.monto_total)}`
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const SimularCredito_js_CantidadYCuotasDePrestamos = (CantidadYCuotasDePrestamos);

;// CONCATENATED MODULE: ./components/SimularCredito.js/Row.js



function Row(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: "border",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: props.periodo
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: (0,separadorMillares/* separadorMillares */.q)(props.cuota)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: (0,separadorMillares/* separadorMillares */.q)(props.interes)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: (0,separadorMillares/* separadorMillares */.q)(props.capital)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-center p-4",
                    children: (0,separadorMillares/* separadorMillares */.q)(props.saldo)
                })
            ]
        })
    }));
}
function createRows(arr) {
    return arr.map(({ cuota , interes , capital , saldo  }, index)=>{
        if (saldo <= 0) {
            return(/*#__PURE__*/ jsx_runtime_.jsx(Row, {
                periodo: index,
                cuota: cuota,
                interes: interes,
                capital: capital,
                saldo: 0
            }, index));
        }
        return(/*#__PURE__*/ jsx_runtime_.jsx(Row, {
            periodo: index,
            cuota: cuota,
            interes: interes,
            capital: capital,
            saldo: saldo
        }, index));
    });
}

;// CONCATENATED MODULE: ./components/SimularCredito.js/InputCredito.js



const InputCredito = ({ lineaCreditoInfo , valoresSimulacion , setValoresSimulacion , selected , refMonto ,  })=>{
    const handleChange = ({ target  })=>{
        setValoresSimulacion({
            ...valoresSimulacion,
            linea_credito: lineaCreditoInfo.nombre,
            [target.name]: target.value
        });
    };
    function numeroCuotas(max_cuota) {
        const arr = [];
        for(let i = 1; i <= max_cuota; i++){
            arr.push(i);
        }
        return arr;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "border bg-white rounded-lg p-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col md:flex-row justify-between items-center mt-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "pb-4 text-center md:text-left md:pb-0 font-semibold text-color_primary_2_ligth text-xl w-3/5",
                            children: "\xbfEn cu\xe1ntas cuotas desear\xeda pagar?"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            onChange: handleChange,
                            label: "",
                            name: "cuotas",
                            className: "h-10 border w-full pl-4 border-color_gray_4 rounded-lg md:w-2/6",
                            value: valoresSimulacion.cuotas,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                    value: "",
                                    className: "font-light",
                                    children: [
                                        ' ',
                                        `---Seleccione cuota ---`,
                                        ' '
                                    ]
                                }),
                                numeroCuotas(lineaCreditoInfo.num_cuotas).map((option, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: option,
                                        children: option
                                    }, index)
                                )
                            ]
                        }, 'cuotas')
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col md:flex-row justify-between items-center mt-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center md:text-left font-semibold text-color_primary_2_ligth text-xl mb-4 md:mb-0 w-3/5",
                            children: "\xbfCu\xe1nto dinero desea solicitar?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            onChange: handleChange,
                            ref: refMonto,
                            label: '',
                            name: 'monto',
                            type: 'number',
                            className: 'text-center w-full font-semibold h-10 border border-color_gray_5 rounded-lg md:w-2/6',
                            min: 0,
                            max: Number(lineaCreditoInfo.monto_total),
                            placeholder: "$",
                            value: valoresSimulacion.monto
                        }, 'monto')
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const SimularCredito_js_InputCredito = (InputCredito);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/SimularCredito.js/bannerCredits.js



const BannerCredits = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row border-2 p-6 items-center justify-between rounded-lg my-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "pb-4 md:pb-0 text-lg font-semibold",
                children: [
                    "Si no conoces nuestras l\xedneas de cr\xe9ditos...",
                    ' '
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/creditos",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-color_primary_2_ligth px-4 py-2 border border-color_primary_2_ligth rounded-full font-semibold",
                    children: "Con\xf3celas aqu\xed"
                })
            })
        ]
    }));
};
/* harmony default export */ const bannerCredits = (BannerCredits);

;// CONCATENATED MODULE: ./components/SimularCredito.js/getTableValues.js

function getTableValues(valoresSimulacion, arrayWithValues1, corriente) {
    const OBJETO_INICIAL = {
        periodo: 0,
        cuota: 0,
        interes: 0,
        capital: 0,
        saldo: valoresSimulacion.monto
    };
    arrayWithValues1.push(OBJETO_INICIAL);
    function recursion(arrayWithValues) {
        const length = arrayWithValues.length;
        //base case
        if (arrayWithValues[length - 1].saldo <= 0) return;
        const TASA_INTERES = corriente;
        const lastElemet = arrayWithValues[length - 1];
        const cuota = Math.ceil(pmt(TASA_INTERES, Number(valoresSimulacion.cuotas), -Number(valoresSimulacion.monto)));
        const interes = (TASA_INTERES * Number(lastElemet.saldo)).toFixed(2);
        const capital = (cuota - interes).toFixed(2);
        const saldo = (lastElemet.saldo - capital).toFixed(2);
        const obj = {
            cuota,
            interes,
            capital,
            saldo
        };
        arrayWithValues.push(obj);
        recursion(arrayWithValues);
    }
    recursion(arrayWithValues1);
    return arrayWithValues1;
}
/* harmony default export */ const SimularCredito_js_getTableValues = (getTableValues);

// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(5181);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
;// CONCATENATED MODULE: ./pages/simular-credito.js












const SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const initialValuesSimulation = {
    monto: '',
    cuotas: '',
    linea_credito: ''
};
function SimularCredito() {
    // const { valor_tasa } = corriente
    const [data, setData] = external_react_.useState([]);
    const [valor_tasa1, setValorTasa] = external_react_.useState();
    const [token_interno, setToken_interno] = external_react_.useState(null);
    const [lineaCreditoSelected, setLineaCreditoSelected] = external_react_.useState('');
    const [lineaCreditoInfo, setLineaCreditoInfo] = external_react_.useState([]);
    const [message, setMessage] = external_react_.useState('');
    const [loadingTable, setLoadingTable] = external_react_.useState(false);
    const [valoresSimulacion, setValoresSimulacion] = external_react_.useState(initialValuesSimulation);
    const [simulationTable, setSimulationTable] = external_react_.useState(null);
    const [valorCuota, setValorCuota] = external_react_.useState('');
    const [selected, setSelected] = external_react_.useState('');
    async function fetcher(url) {
        let response = await fetch(url);
        return await response.json();
    }
    async function getTokenInterno() {
        try {
            const URL_TOKEN = `${"https://www.medellin.gov.co/bancopobres/autenticacionms/"}auth/obtener-token-interno`;
            //const URL_TOKEN = `http://localhost:3001/api/v1/auth/obtener-token-interno`
            const { access_token  } = await fetcher(URL_TOKEN);
            localStorage.setItem('token_interno', access_token);
            return access_token;
        } catch (err) {}
    }
    async function run() {
        try {
            const res_linea_creditos = await (0,custom_fetch/* customFetchPublic */.n0)('config/credito/portafolio', {
                type: custom_fetch/* RequestTypes.config */.lO.config
            });
            const data_lineas_creditos = await res_linea_creditos.json();
            const response_mora = await (0,custom_fetch/* customFetchPublic */.n0)('config/credito/tasas', {
                type: custom_fetch/* RequestTypes.config */.lO.config
            });
            const { corriente  } = await response_mora.json();
            if (res_linea_creditos.ok && response_mora.ok) {
                const data_response = data_lineas_creditos || [];
                const { valor_tasa  } = corriente || {};
                setData(data_response);
                setValorTasa(valor_tasa);
            }
        } catch (err) {}
    }
    external_react_.useEffect(()=>{
        getTokenInterno().then(()=>run()
        );
    }, []);
    external_react_.useEffect(()=>{
        setValoresSimulacion(initialValuesSimulation);
        setSelected('');
        const filterCredit = data?.filter((linea_credito)=>linea_credito.nombre === lineaCreditoSelected
        );
        setLineaCreditoInfo({
            ...filterCredit[0]
        });
    }, [
        data,
        lineaCreditoSelected
    ]);
    external_react_.useEffect(()=>{
        if ([
            valoresSimulacion.monto,
            valoresSimulacion.cuotas
        ].includes('')) {
            setSimulationTable(null);
        }
    }, [
        valoresSimulacion
    ]);
    const refMonto = external_react_.useRef('');
    const handleSimulator = (event)=>{
        event.preventDefault();
        if (refMonto?.current?.value && (refMonto?.current?.value > lineaCreditoInfo.monto_total || refMonto?.current?.value < 0)) {
            setMessage(`Hubo un error, Valor del prestamos sobrepasa el valor máximo de prestamo ${(0,separadorMillares/* separadorMillares */.q)(lineaCreditoInfo.monto_total)}`);
            setSimulationTable(null);
            setTimeout(()=>{
                setMessage('');
            }, 5000);
            return;
        }
        if (valoresSimulacion.monto === '' || valoresSimulacion.cuotas === '') {
            setMessage('Hubo un error, Ingrese los campos de cuota y monto para simular el prestamo');
            setTimeout(()=>{
                setMessage('');
            }, 5000);
            return;
        }
        setLoadingTable(true);
        if (valoresSimulacion.monto !== '' && valoresSimulacion.cuotas !== '') {
            const arrayWithValues = [];
            let cuotaMensual = calculateCuota(valoresSimulacion, valor_tasa1);
            cuotaMensual = (0,separadorMillares/* separadorMillares */.q)(cuotaMensual);
            setValorCuota(cuotaMensual);
            const getDynamicTable = SimularCredito_js_getTableValues(valoresSimulacion, arrayWithValues, valor_tasa1);
            setSimulationTable(getDynamicTable);
        }
        setLoadingTable(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Banner/* default */.Z, {
                title: "Simula tu cr\xe9dito",
                image_url: `${"/bancopobres"}/simulador-banner.png`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "bg-color_gray_2 h-full py-24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main-wrapper",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-11/12 md:w-3/5 mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                                children: "Elige una l\xednea de cr\xe9dito "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Creditos, {
                                lineaCreditos: data,
                                lineaCreditoSelected: lineaCreditoSelected,
                                setLineaCreditoSelected: setLineaCreditoSelected
                            }),
                            lineaCreditoSelected !== '' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SimularCredito_js_CantidadYCuotasDePrestamos, {
                                        lineaCreditoInfo: lineaCreditoInfo
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SimularCredito_js_InputCredito, {
                                        lineaCreditoInfo: lineaCreditoInfo,
                                        valoresSimulacion: valoresSimulacion,
                                        setValoresSimulacion: setValoresSimulacion,
                                        selected: selected,
                                        refMonto: refMonto
                                    }),
                                    message !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: message.includes('error') ? ERROR_CLASS : SUCCESS_CLASS,
                                        children: message
                                    }) : null,
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        onClick: handleSimulator,
                                        className: "flex mx-auto py-2 mt-6 px-6 text-white text-sm font-semibold rounded-full bg-color_primary_2_ligth",
                                        children: "SIMULAR MI CR\xc9DITO"
                                    })
                                ]
                            }) : null,
                            loadingTable ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                            }) : simulationTable ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-center mt-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-lg font-semibold",
                                            children: [
                                                "Cuotas de: ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "text-color_primary_1",
                                                    children: [
                                                        "$",
                                                        valorCuota
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Table, {
                                        children: createRows(simulationTable)
                                    })
                                ]
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx(bannerCredits, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                        ]
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const simular_credito = (SimularCredito);
function Table({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-center my-8 text-xl font-semibold text-color_primary_2_ligth",
                children: "As\xed ser\xeda el pago mensual de tu cr\xe9dito"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "table-responsive",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: "mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                className: "bg-color_primary_2_ligth",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "p-4 text-center text-white",
                                        children: "periodo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "p-4 text-center text-white",
                                        children: "cuota"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "p-4 text-center text-white",
                                        children: "inter\xe9s"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "p-4 text-center text-white",
                                        children: "capital"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "p-4 text-center text-white",
                                        children: "saldo"
                                    })
                                ]
                            })
                        }),
                        children
                    ]
                })
            })
        ]
    }));
}
async function getServerSideProps() {
    try {
        // const res_linea_creditos = await customFetch('config/credito/portafolio', {
        //   type: RequestTypes.config,
        // })
        // const data_lineas_creditos = await res_linea_creditos.json()
        // console.log(data_lineas_creditos);
        const res_linea_creditos = await (0,custom_fetch/* customFetchPublic */.n0)('config/credito/portafolio', {
            type: custom_fetch/* RequestTypes.config */.lO.config
        });
        const data_lineas_creditos = await res_linea_creditos.json();
        const response_mora = await (0,custom_fetch/* customFetchPublic */.n0)('config/credito/tasas', {
            type: custom_fetch/* RequestTypes.config */.lO.config
        });
        const { corriente , mora  } = await response_mora.json();
        if (res_linea_creditos.ok && response_mora.ok) {
            return {
                props: {
                    data: data_lineas_creditos || [],
                    mora: mora || {},
                    corriente: corriente || {}
                }
            };
        }
        return {
            props: {
                data: [],
                mora: {},
                corriente: {}
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                data: [],
                mora: {},
                corriente: {}
            }
        };
    }
}
const classInput = 'w-full h-12 px-4 py-2 my-1 text-base border border-color_gray_5 placeholder-color_gray_5 rounded-2xl mt-8';
function Creditos({ lineaCreditos , setLineaCreditoSelected  }) {
    const handleSelected = (e)=>setLineaCreditoSelected(e.target.value)
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
            id: "linea_creditos",
            name: "linea_credito",
            onChange: handleSelected,
            className: classInput,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: "",
                    children: " ---- Elige una linea de credito ---- "
                }),
                lineaCreditos.map((linea_credito)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: linea_credito.nombre,
                        children: linea_credito.nombre
                    }, linea_credito.portafolio_id)
                )
            ]
        })
    }));
}
function calculateCuota(valoresSimulacion, interesCorriente) {
    const cuota = Math.ceil(pmt(interesCorriente, Number(valoresSimulacion.cuotas), -Number(valoresSimulacion.monto)));
    return cuota;
}


/***/ }),

/***/ 1003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ separadorMillares)
/* harmony export */ });
function separadorMillares(number) {
    const numero = Number(number).toLocaleString('en-US');
    return numero;
}


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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986], () => (__webpack_exec__(9837)));
module.exports = __webpack_exports__;

})();