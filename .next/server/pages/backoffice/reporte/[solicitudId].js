"use strict";
(() => {
var exports = {};
exports.id = 2690;
exports.ids = [2690,4820];
exports.modules = {

/***/ 3267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SeccionFormulario = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: `text-center text-white ${props?.bg || 'bg-color_primary_1'}`,
                children: props.seccion
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: props.children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeccionFormulario);


/***/ }),

/***/ 140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _solicitudId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/separadorMillares.js
var separadorMillares = __webpack_require__(1003);
;// CONCATENATED MODULE: ./components/Print/CustomField.js


const CustomField = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex flex-col items-center my-2 border py-2 px-2 text-sm ${props.width}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: props.type,
                name: props.name,
                value: props.value,
                className: `border border-black text-center w-full text-xs  ${props.cName || ''}`,
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "font-semibold text-xs",
                children: props.label
            })
        ]
    }));
};
/* harmony default export */ const Print_CustomField = (CustomField);

// EXTERNAL MODULE: ./components/Print/SeccionFormulario.js
var SeccionFormulario = __webpack_require__(3267);
;// CONCATENATED MODULE: ./components/Print/TextArea.js


const TextArea = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-center m-4",
        name: props.name,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: props.label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                className: `border border-black   ${props.cName || ''}`,
                children: props.value
            })
        ]
    }));
};
/* harmony default export */ const Print_TextArea = (TextArea);

// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
;// CONCATENATED MODULE: ./components/Print/FormularioDeudor/index.js







function ReporteDeudor({ estadoCompletoSolicitud , setEstadoCompletoSolicitud , query , personal ,  }) {
    external_react_default().useEffect(()=>{
        async function run() {
            if (!query.solicitudId) return;
            try {
                const url = `credito/solicitudes?vista=TOTAL&solicitud_id=${query.solicitudId}`;
                const dataFetch = await (0,custom_fetch/* customFetch */.rK)(url, {
                    type: custom_fetch/* RequestTypes.credit */.lO.credit
                });
                if (dataFetch.status === 200) {
                    const informacionSolicitud = await dataFetch.json();
                    setEstadoCompletoSolicitud({
                        data: [
                            informacionSolicitud
                        ],
                        loading: false
                    });
                }
            } catch (err) {}
        }
        run();
    }, [
        query,
        setEstadoCompletoSolicitud
    ]);
    function getAsesor(numero_identificacion) {
        const asesor1 = personal.filter((asesor)=>Number(asesor.cedula) === Number(numero_identificacion)
        );
        return `${asesor1[0].nombres} ${asesor1[0].apellidos}`;
    }
    return estadoCompletoSolicitud.loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Cargando"
    }) : estadoCompletoSolicitud.data.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `max-w-2xl `,
            "mx-auto": true,
            id: "capture",
            children: estadoCompletoSolicitud.data.map(({ id , tipo , asesor , credito , deudor , prerrequisito  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "paginaUno",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "flex justify-end text-color_primary_1 ",
                                                children: `Número de Solicitud : ${id}`
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-color_primary_1 flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `${"/bancopobres"}/LogoBanco.svg`,
                                                    alt: "logo-banco",
                                                    className: "border rounded-r-[10px] bg-white py-6 w-36"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-white font-semibold flex flex-col w-full justify-center items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-3xl",
                                                            children: "Solicitudes de Cr\xe9dito "
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "text-base",
                                                            children: "Este formulario es gratuito"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "FO-DESE-206"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex my-2 border items-center justify-center mx-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "font-semibold mr-4",
                                                    children: "L\xednea de cr\xe9dito"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'lineaCredito',
                                                    value: tipo,
                                                    cName: "w-full bg-gray-200 "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'nombre_funcionario',
                                                    value: asesor?.num_identificacion ? getAsesor(asesor?.num_identificacion) : '',
                                                    label: 'Nombre del funcionario que entrega',
                                                    width: 'w-1/2'
                                                }),
                                                asesor?.fecha_entrega ? /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'date',
                                                    name: 'fecha_entrega',
                                                    value: asesor?.fecha_entrega ?? '',
                                                    label: 'Fecha de entrega',
                                                    width: 'w-1/2'
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                        type: 'date',
                                                        name: 'fecha_entrega',
                                                        value: asesor?.fecha_entrega ?? '',
                                                        label: 'Fecha de entrega (pendiente)',
                                                        disabled: true,
                                                        cName: "bg-gray-200",
                                                        width: 'w-1/2'
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'central_riesgos',
                                                    value: prerrequisito?.no_central_riesgo ? 'No' : 'Si',
                                                    label: 'Central de riesgos',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'Linea_de_solicitud',
                                                    value: credito?.tipo_solicitud ?? '',
                                                    label: 'Linea de solicitud',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'tipo_de_cr\xe9dito',
                                                    value: credito?.tipo_credito ?? '',
                                                    label: 'Tipo de cr\xe9dito',
                                                    width: 'w-1/2'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SeccionFormulario/* default */.Z, {
                                    seccion: "Instrucciones para diligenciar la solicitud",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "text-xs",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: " Lea cuidadosamente el presente formulario antes de diligenciarlo"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Llene toda la informaci\xf3n solicitada"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Escriba en letra imprenta o a m\xe1quina"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "La solicitud no debe presentar borrones ni enmendaduras"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Su diligenciamiento no compromete al EL BANCO DE LAS OPORTUNIDADES, al otorgamiento del cr\xe9dito\""
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "paginaDos",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Destino de cr\xe9dito",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'monto_solicitado',
                                                    value: (0,separadorMillares/* separadorMillares */.q)(credito?.monto_solicitado) == 'NaN' ? '' : (0,separadorMillares/* separadorMillares */.q)(credito?.monto_solicitado),
                                                    label: 'Monto Solicitado',
                                                    width: 'w-1/4'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'palzo',
                                                    value: credito?.plazo ?? '',
                                                    label: 'Plazo',
                                                    width: 'w-1/4'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'activos',
                                                    value: (0,separadorMillares/* separadorMillares */.q)(credito?.activos) == 'NaN' ? '' : (0,separadorMillares/* separadorMillares */.q)(credito?.activos),
                                                    label: 'activos',
                                                    width: 'w-1/4'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'capital_trabajo',
                                                    value: (0,separadorMillares/* separadorMillares */.q)(credito?.capital_trabajo) == 'NaN' ? '' : (0,separadorMillares/* separadorMillares */.q)(credito?.capital_trabajo),
                                                    label: 'Capital trabajo',
                                                    width: 'w-1/4'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_TextArea, {
                                            name: 'descripcion',
                                            value: credito?.descripcion,
                                            label: 'Descripcion de la inversi\xf3n',
                                            cName: `h-fit ml-4 w-2/3 `
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Informacion b\xe1sica",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'razon_social',
                                                    value: deudor?.persona?.razon_social ?? 'No aplica',
                                                    label: 'Raz\xf3n social',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'NIT',
                                                    value: deudor?.persona?.nit ?? 'No aplica',
                                                    label: 'NIT',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'tipo_identificacion',
                                                    value: deudor?.persona?.tipo_identificacion ?? 'No aplica',
                                                    label: 'Tipo de Identificacion',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'numero_identificacion',
                                                    value: deudor?.persona?.num_identificacion ?? 'No aplica',
                                                    label: 'N\xfamero de Identificacion',
                                                    width: 'w-1/2'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-1/2 flex flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'primer_nombre',
                                                            value: deudor?.persona?.primer_nombre ?? '',
                                                            label: 'Primer Nombre',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'segundo_nombre',
                                                            value: deudor?.persona?.segundo_nombre ?? '',
                                                            label: 'Segundo Nombre',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'primer_apellido',
                                                            value: deudor?.persona?.primer_apellido ?? '',
                                                            label: 'Primer apellido',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'segundo_apellido',
                                                            value: deudor?.persona?.segundo_apellido ?? '',
                                                            label: 'Segundo apellido',
                                                            width: 'w-1/2'
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex items-center justify-center w-1/2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                        type: 'date',
                                                        name: 'fecha_nacimiento',
                                                        value: deudor?.persona?.fecha_nacimiento ?? '',
                                                        label: 'Fecha Nacimiento (mm-dd-yyyy)',
                                                        cName: "border-none"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                            className: "p-2 border",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'Sexo',
                                                            value: deudor?.var_poblacional?.sexo ?? '',
                                                            label: 'Sexo',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'orientacion_sexual',
                                                            value: deudor?.var_poblacional?.orientacion_sexual ?? '',
                                                            label: 'Orientacion sexual',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'etnia',
                                                            value: deudor?.var_poblacional?.etnia ?? '',
                                                            label: 'Etnia',
                                                            width: 'w-1/3'
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'discapacidad',
                                                            value: deudor?.var_poblacional?.discapacidad ?? '',
                                                            label: 'Discapacidad F\xedsica',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'victima',
                                                            value: deudor?.var_poblacional?.victima ?? '',
                                                            label: 'Victima del conflicto',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'poblacion_campesina',
                                                            value: deudor?.var_poblacional?.poblacion_campesina ?? '',
                                                            label: 'Poblacion campesina',
                                                            width: 'w-1/3'
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'estado_civil',
                                                            value: deudor?.var_poblacional?.estado_civil ?? '',
                                                            label: 'Estado Civ\xedl',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'nivel_escolaridad',
                                                            value: deudor?.var_poblacional?.nivel_escolaridad ?? '',
                                                            label: 'Nivel de escolaridad',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'rol_hogar',
                                                            value: deudor?.var_poblacional?.rol_hogar ?? '',
                                                            label: 'Rol en el hogar',
                                                            width: 'w-1/3'
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "paginaTres",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Informaci\xf3n de contacto del ciudadano",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'vivienda',
                                                    value: deudor?.contacto?.vivienda ?? '',
                                                    label: 'Vivienda',
                                                    width: 'w-1/3'
                                                }),
                                                deudor?.contacto?.nombre_arrendador ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'nombre_arrendador',
                                                            value: deudor?.contacto?.nombre_arrendador ?? '',
                                                            label: 'Nombre Arrendador',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'telefono_arrendador',
                                                            value: deudor?.contacto?.telefono_arrendador ?? '',
                                                            label: 'Tel\xe9fono Arrendador',
                                                            width: 'w-1/3'
                                                        })
                                                    ]
                                                }) : null
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'direccion',
                                                    value: deudor?.contacto?.direccion ?? '',
                                                    label: 'Direcci\xf3n',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'estrato',
                                                    value: deudor?.contacto?.estrato ?? '',
                                                    label: 'Estrato',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'barrio_vereda',
                                                    value: deudor?.contacto?.barrio_vereda ?? '',
                                                    label: 'Barrio o vereda',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'comuna',
                                                    value: deudor?.contacto?.comuna ?? '',
                                                    label: 'Comuna',
                                                    width: 'w-1/2'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'telefono',
                                                    value: deudor?.contacto?.telefono ?? '',
                                                    label: 'Tel\xe9fono',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'celular',
                                                    value: deudor?.contacto?.celular ?? '',
                                                    label: 'Celular',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'correo',
                                                    value: deudor?.contacto?.correo ?? '',
                                                    label: 'Correo',
                                                    width: 'w-1/3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Informacion del negocio",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'nombre_negocio',
                                                    value: deudor?.negocio?.nombre_negocio ?? '',
                                                    label: 'Nombre del negocio',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'date',
                                                    name: 'fecha_creacion',
                                                    value: deudor?.negocio?.fecha_creacion ?? '',
                                                    label: 'Fecha de creaci\xf3n mm-dd-yyyy',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'direccion',
                                                    value: deudor?.negocio?.direccion ?? '',
                                                    label: 'Direcci\xf3n',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'comuna',
                                                    value: deudor?.negocio?.comuna ?? '',
                                                    label: 'Comuna',
                                                    width: 'w-1/2'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'telefono',
                                                    value: deudor?.negocio?.telefono ?? '',
                                                    label: 'Tel\xe9fono',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'tipo_persona',
                                                    value: deudor?.negocio?.tipo_persona ?? '',
                                                    label: 'Tipo persona',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'numero_empleados permanentes',
                                                    value: deudor?.negocio?.num_empl_permanentes ?? '',
                                                    label: 'Numero de empleados permanentes',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'numero_empleados eventuales',
                                                    value: deudor?.negocio?.num_empl_eventuales ?? '',
                                                    label: 'Numero de empleados eventuales',
                                                    width: 'w-1/2'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'local',
                                                    value: deudor?.negocio?.local ?? '',
                                                    label: 'Local',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'macrosector',
                                                    value: deudor?.negocio?.macrosector ?? '',
                                                    label: 'Macrosector',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'subsector',
                                                    value: deudor?.negocio?.subsector ?? '',
                                                    label: 'Subsector',
                                                    width: 'w-1/3'
                                                })
                                            ]
                                        }),
                                        deudor?.negocio?.nombre_arrendador ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'nombre_arrendador',
                                                    value: deudor?.negocio?.nombre_arrendador ?? '',
                                                    label: 'Nombre Arrendador'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'telefono_arrendador',
                                                    value: deudor?.negocio?.telefono_arrendador ?? '',
                                                    label: 'Tel\xe9fono Arrendador'
                                                })
                                            ]
                                        }) : null
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "paginaCuatro",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SeccionFormulario/* default */.Z, {
                                    seccion: "Referencias comerciales y familiares",
                                    children: deudor.referencias.map((ref, index)=>{
                                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "text-center my-2 border max-w-max mx-auto px-4 py-2",
                                                    children: ` Referencia ${index + 1} `
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'tipo',
                                                            value: ref.tipo,
                                                            label: 'Tipo',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'nombre',
                                                            value: ref.nombre,
                                                            label: 'Nombres',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'telefono',
                                                            value: ref.telefono,
                                                            label: 'Tel\xe9fono',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'parentesco',
                                                            value: ref.parentesco,
                                                            label: 'Parentesco',
                                                            width: 'w-1/2'
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, index));
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Informe financiero del solicitante",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'experiencia_crediticia',
                                                    value: deudor?.informe_financiero?.experiencia_crediticia ? 'Si' : 'No',
                                                    label: 'Experiencia crediticia',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'tiene_credito_vigente',
                                                    value: deudor?.informe_financiero?.tiene_credito_vigente ? 'Si' : 'No',
                                                    label: '\xbfUsted tiene cr\xe9ditos actualmente?',
                                                    width: 'w-1/2'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'entidad',
                                                    value: deudor?.informe_financiero?.entidad ?? '',
                                                    label: 'Entidad',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'monto_total',
                                                    value: (0,separadorMillares/* separadorMillares */.q)(deudor?.informe_financiero?.monto_total) ?? '',
                                                    label: 'Monto total',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'valor_adeudado',
                                                    value: (0,separadorMillares/* separadorMillares */.q)(deudor?.informe_financiero?.valor_adeudado) ?? '',
                                                    label: 'Valor adeudado',
                                                    width: 'w-1/3'
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "paginaCinco",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Aprobaci\xf3n final",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'monto_sugerido',
                                                    label: 'Monto Sugerido',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'monto_aprobado',
                                                    label: 'Monto aprobado',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'tasa',
                                                    label: 'Tasa',
                                                    width: 'w-1/3'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'firma_analista',
                                                    label: 'Firma Analista',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'firma_coordinador',
                                                    label: 'Firma Coordinador',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'firma_director',
                                                    label: 'Firma Director',
                                                    width: 'w-1/3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xs",
                                            children: "Certifico bajo la gravedad de juramento que los anteriores datos son ciertos y autorizo de manera permanente e irrevocable a los operadores y al municipio de Medell\xedn obtener, consultar y reportar a las centrales de informaci\xf3n, a la Asociaci\xf3n Bancaria de Colombia, Datacr\xe9dito y dem\xe1s entidades autorizadas para tales efectos la informaci\xf3n relacionada con mi comportamiento crediticio, resultado de toda clase de operaciones que efect\xfae o haya efectuado con entidades del sector financiero y otros sectores y que en general sirvan para determinar el an\xe1lisis del cr\xe9dito solicitado. Declaro que esta solicitud es exacta en todas sus partes y en caso de comprobarse alguna inexactitud, ser\xe1 causal de rechazo. As\xed mismo autorizo a los operadores y al municipio de Medell\xedn para destruir mi informaci\xf3n financiera y comercial en un plazo de 6O d\xedas en caso que no sea aprobada la presente solicitud de cr\xe9dito"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap my-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'firma_solicitante',
                                                    label: 'Firma Solicitante',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'cedula_solicitante',
                                                    label: 'C\xe9dula Solicitante',
                                                    width: 'w-1/2'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "my-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "text-justify text-xs",
                                                children: [
                                                    "El beneficiario de un microcr\xe9dito estar\xe1 obligado a destinar los recursos recibidos en mutuo, para el financiamiento de inventario, capital de trabajo y activos fijos de nuevos proyectos econ\xf3micos productivos, comerciales o de prestaci\xf3n de servicios, o para el fortalecimiento de negocios existentes y que la actividad productiva cumpla con los requisitos legales establecidos para su desarrollo; as\xed como para el financiamiento para gastos propios y/o familiares derivados de la ejecuci\xf3n de proyectos con destinaci\xf3n espec\xedfica. ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "Lo anterior se except\xfaa, si los recursos recibidos obedecen a la ejecuci\xf3n de un proyecto espec\xedfico adelantado por el programa “Banco de los Pobres”."
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "border rounded-lg text-sm p-4",
                                            children: [
                                                "Se exigir\xe1 el pago total de la obligaci\xf3n en cualquiera de los siguientes eventos, seg\xfan lo establece el reglamento de funcio namiento del Banco.",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "Cuando se compruebe el cambio total o parcial de la destinaci\xf3n del microcr\xe9dito.",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "Cuando se considere que se ha desmejorado la garant\xeda otorgada.",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "Cuando se incumplan cualquiera de las obligaciones contenidas en el reglamento de funcionamiento del Banco.",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "Cu ando se compruebe que el titular del cr\xe9dito ya no reside en el municipio de Medell\xedn."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-color_primary_1 flex pagina-cinco",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `${"/bancopobres"}/LogoBanco.svg`,
                                            alt: "logo-banco",
                                            className: "border rounded-r-[10px] bg-white py-6 w-36"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-white font-semibold flex flex-col w-full justify-center items-center"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, id)
            )
        })
    }) : 'No hay datos para mostrar, intentalo m\xe1s tarde';
}
/* harmony default export */ const FormularioDeudor = (ReporteDeudor);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/Print/TableIncome.js




const TableIncome = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1925bd7272f1247e",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                className: "jsx-1925bd7272f1247e" + " " + "border border-black my-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                        className: "jsx-1925bd7272f1247e",
                        /*#__PURE__*/ children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            className: "jsx-1925bd7272f1247e",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    colSpan: 2,
                                    className: "jsx-1925bd7272f1247e" + " " + "text-center border border-black bg-gray-400 text-white",
                                    children: "Ingresos Mensuales"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                    colSpan: 2,
                                    className: "jsx-1925bd7272f1247e" + " " + "text-center border border-black bg-gray-400 text-white",
                                    children: [
                                        ' ',
                                        "Egresos Mensuales"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                        className: "jsx-1925bd7272f1247e",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                className: "jsx-1925bd7272f1247e",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: "Ingresos salario"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: [
                                            ' ',
                                            (0,separadorMillares/* separadorMillares */.q)(props.ingresos?.salario) == 'NaN' ? 0 : (0,separadorMillares/* separadorMillares */.q)(props.ingresos?.salario),
                                            ' '
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: "Cuotas de arrendamiento"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: (0,separadorMillares/* separadorMillares */.q)(props.egresos?.cuota_arrendamiento) == 'NaN' ? 0 : (0,separadorMillares/* separadorMillares */.q)(props.egresos?.cuota_arrendamiento)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                className: "jsx-1925bd7272f1247e",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: "Otros ingresos"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: (0,separadorMillares/* separadorMillares */.q)(props.ingresos?.otros_ingresos) == 'NaN' ? 0 : (0,separadorMillares/* separadorMillares */.q)(props.ingresos?.otros_ingresos)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: "Gastos familiares"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: (0,separadorMillares/* separadorMillares */.q)(props.egresos?.gastos_familiares) == 'NaN' ? 0 : (0,separadorMillares/* separadorMillares */.q)(props.egresos?.gastos_familiares)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                className: "jsx-1925bd7272f1247e",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: "Otros gastos"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: (0,separadorMillares/* separadorMillares */.q)(props.egresos?.otros_gastos) == 'NaN' ? 0 : (0,separadorMillares/* separadorMillares */.q)(props.egresos?.otros_gastos)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                className: "jsx-1925bd7272f1247e",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: "Total ingresos mensuales "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: (0,separadorMillares/* separadorMillares */.q)(props.ingresos?.ingresos_mensuales) == 'NaN' ? 0 : (0,separadorMillares/* separadorMillares */.q)(props.ingresos?.ingresos_mensuales)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: "Total gastos mensuales"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "jsx-1925bd7272f1247e" + " " + "border border-black",
                                        children: (0,separadorMillares/* separadorMillares */.q)(props.egresos?.gastos_mensuales) == 'NaN' ? 0 : (0,separadorMillares/* separadorMillares */.q)(props.egresos?.gastos_mensuales)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "1925bd7272f1247e",
                children: "td.jsx-1925bd7272f1247e{padding:0.5rem 1rem}"
            })
        ]
    }));
};
/* harmony default export */ const Print_TableIncome = (TableIncome);

;// CONCATENATED MODULE: ./components/Print/FormularioCodeudor/index.js






function ReporteCodeudor({ estadoCompletoSolicitud , setEstadoCompletoSolicitud , query  }) {
    external_react_.useEffect(()=>{
        async function run() {
            if (!query.solicitudId) return;
            try {
                const url = `credito/solicitudes?vista=TOTAL&solicitud_id=${query.solicitudId}`;
                const dataFetch = await (0,custom_fetch/* customFetch */.rK)(url, {
                    type: custom_fetch/* RequestTypes.credit */.lO.credit
                });
                if (dataFetch.status === 200) {
                    const informacionSolicitud = await dataFetch.json();
                    setEstadoCompletoSolicitud({
                        data: [
                            informacionSolicitud
                        ],
                        loading: false
                    });
                }
            } catch (err) {}
        }
        run();
    }, [
        query
    ]);
    return estadoCompletoSolicitud.loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Cargando"
    }) : estadoCompletoSolicitud.data.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `max-w-2xl `,
            "mx-auto": true,
            id: "capture",
            children: estadoCompletoSolicitud.data.map(({ id , codeudor  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "paginaUno",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                    className: "my-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "flex justify-end text-color_primary_1 ",
                                                children: `Número de Solicitud : ${id}`
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-color_primary_2_dark flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `${"/bancopobres"}/LogoBanco.svg`,
                                                    alt: "logo-banco",
                                                    className: "border rounded-r-[10px] bg-white py-6 w-36"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-white font-semibold flex flex-col w-full justify-center items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-3xl",
                                                            children: "Solicitudes de Cr\xe9dito Codeudor"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "text-base",
                                                            children: "Este formulario es gratuito"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "FO-DESE-316 v1"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Informaci\xf3n b\xe1sica",
                                    bg: 'bg-color_primary_2_dark',
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'tipo_identificacion',
                                                    value: codeudor?.persona?.tipo_identificacion ?? 'No aplica',
                                                    label: 'Tipo de Identificacion',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'numero_identificacion',
                                                    value: codeudor?.persona?.num_identificacion ?? 'No aplica',
                                                    label: 'N\xfamero de Identificacion',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'genero',
                                                    value: codeudor?.var_poblacional?.sexo ?? '',
                                                    label: 'Sexo',
                                                    width: 'w-1/3'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'primer_nombre',
                                                            value: codeudor?.persona?.primer_nombre ?? '',
                                                            label: 'Primer Nombre',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'segundo_nombre',
                                                            value: codeudor?.persona?.segundo_nombre ?? '',
                                                            label: 'Segundo Nombre',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'primer_apellido',
                                                            value: codeudor?.persona?.primer_apellido ?? '',
                                                            label: 'Primer apellido',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'segundo_apellido',
                                                            value: codeudor?.persona?.segundo_apellido ?? '',
                                                            label: 'Segundo apellido',
                                                            width: 'w-1/2'
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex items-center justify-center w-1/2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                        type: 'date',
                                                        name: 'fecha_nacimiento',
                                                        value: codeudor?.persona?.fecha_nacimiento ?? '',
                                                        label: 'Fecha Nacimiento (mm-dd-yyyy)',
                                                        cName: "border-none"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'vivienda',
                                                    value: codeudor?.contacto?.vivienda ?? '',
                                                    label: 'Vivienda',
                                                    width: 'w-1/3'
                                                }),
                                                codeudor?.contacto?.nombre_arrendador ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'nombre_arrendador',
                                                            value: codeudor?.contacto?.nombre_arrendador ?? '',
                                                            label: 'Nombre Arrendador',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'telefono_arrendador',
                                                            value: codeudor?.contacto?.telefono_arrendador ?? '',
                                                            label: 'Tel\xe9fono Arrendador',
                                                            width: 'w-1/3'
                                                        })
                                                    ]
                                                }) : null
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'direccion',
                                                    value: codeudor?.contacto?.direccion ?? '',
                                                    label: 'Direcci\xf3n',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'estrato',
                                                    value: codeudor?.contacto?.estrato ?? '',
                                                    label: 'Estrato',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'barrio_vereda',
                                                    value: codeudor?.contacto?.barrio_vereda ?? '',
                                                    label: 'Barrio o vereda',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'comuna',
                                                    value: codeudor?.contacto?.comuna ?? '',
                                                    label: 'Comuna',
                                                    width: 'w-1/2'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'telefono',
                                                    value: codeudor?.contacto?.telefono ?? '',
                                                    label: 'Tel\xe9fono',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'celular',
                                                    value: codeudor?.contacto?.celular ?? '',
                                                    label: 'Celular',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'correo',
                                                    value: codeudor?.contacto?.correo ?? '',
                                                    label: 'Correo',
                                                    width: 'w-1/3'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "font-semibold",
                                                    children: "Datos del conyugue"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'numero_identificacion_conyugue',
                                                            value: codeudor?.conyugue?.num_identificacion ?? '',
                                                            label: 'Numero de identificaci\xf3n',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'nombre_conyugue',
                                                            value: codeudor?.conyugue?.nombre ?? '',
                                                            label: 'Nombre de conyugue',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'telefono_conyugue',
                                                            value: codeudor?.conyugue?.telefono ?? '',
                                                            label: 'Tel\xe9fono conyugue',
                                                            width: 'w-1/3'
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'sexo_conyugue',
                                                    value: codeudor?.conyugue?.sexo ?? '',
                                                    label: 'Sexo conyugue',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'lugar_trabajo_conyugue',
                                                            value: codeudor?.conyugue?.lugar_trabajo ?? '',
                                                            label: 'Lugar de trabajo',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'telefono_trabajo',
                                                            value: codeudor?.conyugue?.telefono_trabajo ?? '',
                                                            label: 'Tel\xe9fono trabajo conyugue',
                                                            width: 'w-1/3'
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Variables poblacionales",
                                    bg: 'bg-color_primary_2_dark',
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'estado_civil',
                                                    value: codeudor?.var_poblacional?.estado_civil ?? '',
                                                    label: 'Estado Civ\xedl',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'personas_a_cargo',
                                                    value: codeudor?.var_poblacional?.personas_a_cargo ?? '',
                                                    label: 'Personas a cargo',
                                                    width: 'w-1/3'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'nivel_escolaridad',
                                                    value: codeudor?.var_poblacional?.nivel_escolaridad ?? '',
                                                    label: 'Nivel de escolaridad',
                                                    width: 'w-1/3'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'estado_laboral',
                                                    value: codeudor?.var_poblacional?.estado_laboral ?? '',
                                                    label: 'Estado laboral',
                                                    width: 'w-1/3'
                                                }),
                                                codeudor?.var_poblacional?.estado_laboral === 'Empleado' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'nombre_empresa',
                                                            value: codeudor?.var_poblacional?.nombre_empresa ?? '',
                                                            label: 'Nombre empresa',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'direccion_empresa',
                                                            value: codeudor?.var_poblacional?.direccion_empresa ?? '',
                                                            label: 'Direcci\xf3n empresa',
                                                            width: 'w-1/3'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'telefono_empresa',
                                                            value: codeudor?.var_poblacional?.telefono_empresa ?? '',
                                                            label: 'Tel\xe9fono empresa',
                                                            width: 'w-1/3'
                                                        })
                                                    ]
                                                }) : null
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SeccionFormulario/* default */.Z, {
                                    seccion: "Ingresos mensuales personales",
                                    bg: 'bg-color_primary_2_dark',
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Print_TableIncome, {
                                        ingresos: codeudor.ingresos,
                                        egresos: codeudor.egresos
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SeccionFormulario/* default */.Z, {
                                    seccion: "Informacion bienes ra\xedces",
                                    bg: 'bg-color_primary_2_dark',
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                type: 'text',
                                                name: 'nivel_escolaridad',
                                                value: codeudor?.bien_raiz?.activos_propios ?? '',
                                                label: 'Acivo casa',
                                                width: 'w-1/4'
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                type: 'text',
                                                name: 'nivel_escolaridad',
                                                value: codeudor?.bien_raiz?.num_escritura ?? '',
                                                label: 'No. escritura',
                                                width: 'w-1/4'
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                type: 'text',
                                                name: 'nivel_escolaridad',
                                                value: codeudor?.bien_raiz?.matricula ?? '',
                                                label: 'Matriculas',
                                                width: 'w-1/4'
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                type: 'text',
                                                name: 'nivel_escolaridad',
                                                value: codeudor?.bien_raiz?.avaluo_catastral ?? '',
                                                label: 'Aval\xfao catastral',
                                                width: 'w-1/4'
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "pag-dos",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SeccionFormulario/* default */.Z, {
                                    seccion: "Referencias personales",
                                    bg: 'bg-color_primary_2_dark',
                                    children: codeudor.referencias ? codeudor?.referencias.map((ref, index)=>{
                                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "text-center my-2 border max-w-max mx-auto px-4 py-2",
                                                    children: ` Referencia ${index + 1} `
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'tipo',
                                                            value: ref.tipo,
                                                            label: 'Tipo',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'nombre',
                                                            value: ref.nombre,
                                                            label: 'Nombres',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'telefono',
                                                            value: ref.telefono,
                                                            label: 'Tel\xe9fono',
                                                            width: 'w-1/2'
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                            type: 'text',
                                                            name: 'parentesco',
                                                            value: ref.parentesco,
                                                            label: 'Parentesco',
                                                            width: 'w-1/2'
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, index));
                                    }) : null
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Autorizaci\xf3n para el tratamiento de datos personales",
                                    bg: 'bg-color_primary_2_dark',
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "text-xs text-justify",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Por medio de la presente, manifiesto que autorizo al Municipio de Medell\xedn para el tratamiento de mis datos personales, bajo las condiciones que me son informadas en los siguientes t\xe9rminos:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "EL Municipio de Medell\xedn, identificado con NIT No. 890.905.211-1, actuar\xe1 como Responsable del tratamiento de los datos, los que podr\xe1 recolectar, usar y tratar conforme a su Pol\xedtica de Tratamiento de Datos Personales, que est\xe1 disponible en www.medellin.gov.co, la que se reserva el derecho de modificar en cualquier momento, de lo cual informar\xe1 a trav\xe9s de dicho sitio web."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Entiendo que es de car\xe1cter facultativo responder preguntas que versen sobre datos sensibles (aquellos que afectan mi intimidad) o de menores de edad. No obstante, de proporcionarlos, estoy autorizando expresamente su Tratamiento."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Declaro que conozco mis derechos como titular, especialmente los de conocer, actualizar, rectificar y suprimir mi informaci\xf3n personal, consultar mi informaci\xf3n, solicitar prueba de esta autorizaci\xf3n, as\xed como el derecho a revocar el consentimiento otorgado y que puedo ejercer mis derechos a trav\xe9s de los canales dispuestos por el Municipio de Medell\xedn, a saber, el portal web www.medellin.gov.co, la L\xednea de Atenci\xf3n 4444144, en el Centro de Servicios a la Ciudadan\xeda, ubicado en la Calle 44 N 52 – 165 Centro Administrativo la Alpujarra, o en una de sus sedes externas, es decir, Casas de Gobierno, Mas cerca y Centros de Servicios al Ciudadano (pueden consultarse en la L\xednea de Atenci\xf3n)."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "As\xed, autorizo de manera voluntaria, previa, expl\xedcita, informada e inequ\xedvoca al Municipio de Medell\xedn para tratar mis datos y para que la informaci\xf3n por mi suministrada sea incluida en las bases de datos de esta entidad, para llevar a cabo acciones tendientes al cumplimiento de su objeto misional y, espec\xedficamente, para el desarrollo del objetivo del Programa Social Banco de los Pobres, fundamentalmente contribuir al mejoramiento de la calidad de vida de los habitantes del Municipio de Medell\xedn a trav\xe9s de la concesi\xf3n de microcr\xe9ditos por medio de los cuales se financien proyectos rentables y sostenibles en el tiempo, que permitan el desarrollo de microempresas y la generaci\xf3n de empleo productivo, fortalecer la cultura de la legalidad, brindar acompa\xf1amiento financiero y contribuir con el desarrollo de los dem\xe1s programas y proyectos de la Administraci\xf3n Municipal. Igualmente autorizo para compartir mis datos personales con terceros aliados o contratistas del Municipio de Medell\xedn, con el objeto de que le presten servicios a \xe9ste o en nombre de \xe9ste, o para la ejecuci\xf3n de estrategias o programas conjuntos, as\xed como con otras entidades del orden departamental y nacional y, concretamente, con los operadores que ofrezcan, administren y gestionen las l\xedneas de cr\xe9dito del Banco de los Pobres, o a quien represente sus derechos u ostente la calidad de acreedor, a quienes conjuntamente autorizo para que consulten, reporten, modifiquen, actualicen y rectifiquen, mi informaci\xf3n comercial, financiera y crediticia ante las centrales de riesgo crediticio, o ante cualquier otra entidad que administre bases de datos con los fines legalmente definidos para este tipo de servicios. Declaro que la informaci\xf3n suministrada es correcta, veraz, verificable y actualizada, a la fecha de suscripci\xf3n de la presente autorizaci\xf3n, y me comprometo a actualizarla inmediatamente en caso de alguna modificaci\xf3n. Igualmente que esta solicitud es exacta en todas sus partes y en caso de comprobarse alguna inexactitud ser\xe1 causal de rechazo; as\xed mismo declaro que he sido informado sobre las caracter\xedsti- cas, tarifas, garant\xedas, seguros y dem\xe1s condiciones de los productos y/o servicios que solicito y que podr\xe9 consultarlas directamente ante la entidad que ofrece el producto"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'firma_analista',
                                                    label: 'Firma Solicitante',
                                                    width: 'w-1/2'
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Print_CustomField, {
                                                    type: 'text',
                                                    name: 'firma_coordinador',
                                                    label: 'C\xe9dula de ciudadan\xeda',
                                                    width: 'w-1/2'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SeccionFormulario/* default */.Z, {
                                    seccion: "Requisitos codeudor",
                                    bg: 'bg-color_primary_2_dark',
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                                            className: "text-xs text-justify",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "font-semibold",
                                                    children: "codeudor:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "El cual debe estar entre los 18 y 75 a\xf1os y que resida en el territorio nacional. Este codeudor no podr\xe1 presentar ning\xfan tipo de mora o reporte en las centrales de riesgo. El codeudor no podr\xe1 se codeudor de dos o m\xe1s personas en el Banco de los Pobres y tampoco pordr\xe1 solicitar cr\xe9dito como titular con el mismo."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        ' ',
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Codeudor con contrato laboral:"
                                                        }),
                                                        " Se aceptar\xe1n codeudores que est\xe9n vinculados mediante contratos t\xe9rmino indefinido, con un ingreso m\xednimo de dos (2) SMLMV. Para acreditar lo anterior deber\xe1 presentar los siguientes documentos:",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Fotocopia ampliada de la c\xe9dula de ciudadan\xeda al 200%"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Certificaci\xf3n laboral expedida por la empresa o entidad en donde labora, especificando el tipo de vinculaci\xf3n y salario, no superior a (30) d\xedas de expedici\xf3n"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Copia de las dos \xfaltimas colillas de pago"
                                                                }),
                                                                "Fotocopia ampliada de la c\xe9dula de ciudadan\xeda al 200%."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: " Codeudor con propiedad ra\xedz:"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Certificado de tradici\xf3n y libertad del inmueble. Este certificado no debe tener m\xe1s de (30) d\xedas de expedici\xf3n. La propiedad ra\xedz deber\xe1 estar ubicada en el Departamento de Antioquia"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Fotocopia ampliada de la c\xe9dula de ciudadan\xeda al 200%."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Fotocopia del recibo del impuesto predial."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "El inmueble no podr\xe1 tener Afectaci\xf3n a Vivienda Familiar, Patrimonio de Familia o presentar Embargos."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "border px-2 py-4 border-black rounded-lg my-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("bold", {
                                                    className: "font-semibold",
                                                    children: "P\xc1RRAFO:"
                                                }),
                                                " Cuando el cr\xe9dito sea superior a 10 (diez) SMLMV, se requiere un codeudor que posea una propiedad ra\xedz y su aval\xfao catastral tenga un valor superior de diecisiete (17) SMLMV."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-center font-semibold",
                                            children: "S\xf3tano del Centro Administrativo Municipal Calle 44 # 52-165"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-center font-semibold",
                                            children: "Tel\xe9fono: 385 55 55 ext. 5071 - 7353 - 5098 - 7349"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, id)
            )
        })
    }) : 'No hay datos para mostrar, intentalo m\xe1s tarde';
}
/* harmony default export */ const FormularioCodeudor = (ReporteCodeudor);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
;// CONCATENATED MODULE: ./pages/backoffice/reporte/[solicitudId].js








const SolicitudID = ({ personal  })=>{
    const { query  } = (0,router_.useRouter)();
    const { rol  } = query;
    const [estadoCompletoSolicitud, setEstadoCompletoSolicitud] = external_react_.useState({
        data: [],
        error: '',
        loading: true
    });
    const handleDownload = async ()=>{
        window.print();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-xl mx-auto md:-mt-24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/backoffice",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "hover:text-blue-500",
                    children: `>Volver a Backoffice`
                })
            }),
            rol.includes('DEUDOR') ? /*#__PURE__*/ jsx_runtime_.jsx(FormularioDeudor, {
                estadoCompletoSolicitud: estadoCompletoSolicitud,
                setEstadoCompletoSolicitud: setEstadoCompletoSolicitud,
                query: query,
                personal: personal
            }) : null,
            rol.includes('CODEUDOR') ? /*#__PURE__*/ jsx_runtime_.jsx(FormularioCodeudor, {
                estadoCompletoSolicitud: estadoCompletoSolicitud,
                setEstadoCompletoSolicitud: setEstadoCompletoSolicitud,
                query: query,
                personal: personal
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: handleDownload,
                    className: "border rounded-lg p-4 my-4 bg-color_primary_2 text-white",
                    children: "Descargar Informe"
                })
            })
        ]
    }));
};
/* harmony default export */ const _solicitudId_ = (SolicitudID);
async function getServerSideProps(context) {
    const sessionInfo = (0,protect_route_server/* protectRouteAndRedirect */.G)(context.req, context.res);
    if (sessionInfo.redirect) return sessionInfo;
    const fetchData = await (0,custom_fetch/* customFetch */.rK)('roles/listar-usuario-rol', {
        type: custom_fetch/* RequestTypes.auth */.lO.auth,
        headers: {
            Authorization: `Bearer ${sessionInfo.token}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await fetchData.json();
    if (!data) {
        return {
            props: {}
        };
    }
    const personal = data.filter((USER)=>USER.rolID !== 1
    );
    return {
        props: {
            personal
        }
    };
}


/***/ }),

/***/ 6376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ protectRouteAndRedirect)
/* harmony export */ });
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);

function protectRouteAndRedirect(req, res) {
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res);
    const token = cookies.get('bank-token');
    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: true
            }
        };
    }
    return {
        token
    };
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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986], () => (__webpack_exec__(140)));
module.exports = __webpack_exports__;

})();