"use strict";
(() => {
var exports = {};
exports.id = 4568;
exports.ids = [4568,4820,9792];
exports.modules = {

/***/ 4989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Codeudor),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/BasicInformation/DataBasicInformation.js
const classInput = 'h-10 border border-gray-400 px-4';
const DataBasicInformation = [
    {
        id: 63,
        name: 'tipo_identificacion',
        fieldName: 'Tipo de identificacion',
        type: 'select',
        className: `${classInput}`,
        options: [
            {
                id: 63.2,
                name: 'C.C',
                fieldName: 'C.C'
            },
            {
                id: 63.3,
                name: 'C.E',
                fieldName: 'C.E'
            }, 
        ]
    },
    {
        id: 64,
        name: 'num_identificacion',
        fieldName: 'No. De identificaci\xf3n',
        type: 'number',
        className: `${classInput}`
    },
    {
        id: 66,
        name: 'primer_nombre',
        fieldName: 'Primer Nombre',
        type: 'text',
        className: `${classInput}`
    },
    {
        id: 67,
        name: 'segundo_nombre',
        fieldName: 'Segundo Nombre',
        type: 'text',
        className: `${classInput}`
    },
    {
        id: 68,
        name: 'primer_apellido',
        fieldName: 'Primer Apellido',
        type: 'text',
        className: `${classInput}`
    },
    {
        id: 69,
        name: 'segundo_apellido',
        fieldName: 'Segundo Apellido',
        type: 'text',
        className: `${classInput}`
    },
    {
        id: 70,
        name: 'fecha_nacimiento',
        fieldName: 'Fecha de nacimiento',
        type: 'date',
        className: `${classInput}`
    },
    {
        id: '70-a',
        name: 'seguridad_social',
        fieldName: 'Seguridad Social',
        type: 'select',
        className: `${classInput}`,
        options: [
            // {
            //   id: 11.1,
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 11.2,
                name: 'EPS',
                fieldName: 'EPS'
            },
            {
                id: 11.3,
                name: 'Sisb\xe9n',
                fieldName: 'Sisb\xe9n'
            },
            {
                id: 11.4,
                name: 'N/a',
                fieldName: 'No Aplica'
            }, 
        ]
    },
    {
        id: '70-b',
        name: 'num_identificacion_deudor',
        fieldName: 'No. De identificaci\xf3n del deudor',
        type: 'number',
        className: `${classInput}`
    }, 
] //   {
 //     id: 65,
 //     name: "genero",
 //     fieldName: "Sexo",
 //     type: "select",
 //     className: `${classInput}`,
 //     options: [
 //       {
 //         id: 65.1,
 //         name: "",
 //         fieldName: "--Selecciona un campo--",
 //         className: `${classInput}`,
 //       },
 //       {
 //         id: 65.2,
 //         name: "Masculino",
 //         fieldName: "Masculino",
 //         className: `${classInput}`,
 //       },
 //       {
 //         id: 65.3,
 //         name: "Femenino",
 //         fieldName: "Femenino",
 //         className: `${classInput}`,
 //       },
 //       {
 //         id: 65.4,
 //         name: "N/a",
 //         fieldName: "No aplica",
 //         className: `${classInput}`,
 //       },
 //     ],
 //   },
 //   {
 //     id: 71,
 //     name: "vivienda",
 //     fieldName: "Vivienda",
 //     type: "select",
 //     className: `${classInput}`,
 //     options: [
 //       {
 //         id: 71.1,
 //         name: "",
 //         fieldName: "--Selecciona un campo--",
 //       },
 //       {
 //         id: 71.2,
 //         name: "propia",
 //         fieldName: "Propia",
 //       },
 //       {
 //         id: 71.3,
 //         name: "familiar",
 //         fieldName: "Familiar",
 //       },
 //       {
 //         id: 71.4,
 //         name: "arrendada",
 //         fieldName: "Arrendada",
 //       }
 //     ],
 //   },
 // ];
 // export const datacodeudor = [
 //   {
 //     id: 75,
 //     name: "direccion",
 //     fieldName: "Dirección",
 //     type: "text",
 //     className: `${classInput}`,
 //   },
 //   {
 //     id: 79,
 //     name: "celular",
 //     fieldName: "Número Celular",
 //     type: "number",
 //     className: `${classInput}`,
 //   },
 //   {
 //     id: 78,
 //     name: "telefono",
 //     fieldName: "Teléfono",
 //     type: "number",
 //     className: `${classInput}`,
 //   },
 //   {
 //     id: 80,
 //     name: "correo",
 //     fieldName: "Correo electrónico",
 //     type: "email",
 //     className: `${classInput}`,
 //   },
 // ];
;

// EXTERNAL MODULE: ./components/Forms/TextInput.js
var TextInput = __webpack_require__(7576);
// EXTERNAL MODULE: ./components/Forms/DateInput.js
var DateInput = __webpack_require__(2035);
// EXTERNAL MODULE: ./components/Forms/SelectionInput.js
var SelectionInput = __webpack_require__(3491);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(843);
// EXTERNAL MODULE: ./utils/getData.js
var getData = __webpack_require__(6960);
// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__(6135);
;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/BasicInformation/index.js












const SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const BasicInformationForm = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const { primer_nombre , segundo_nombre , primer_apellido , segundo_apellido , num_identificacion: num_identificacion1 ,  } = props.userInfo;
    const [disableInput, setDisableInput] = external_react_.useState(false);
    const initialValuesForm = {
        tipo_identificacion: '',
        num_identificacion: num_identificacion1 || '',
        primer_nombre: primer_nombre || '',
        segundo_nombre: segundo_nombre || '',
        primer_apellido: primer_apellido || '',
        segundo_apellido: segundo_apellido || '',
        fecha_nacimiento: '',
        seguridad_social: '',
        num_identificacion_deudor: ''
    };
    // React.useEffect(() => {
    //   if (!num_identificacion) {
    //     setDisableInput(false)
    //   } else {
    //     setDisableInput(true)
    //   }
    // }, [])
    const [initialValues, setInitialValues] = external_react_.useState(initialValuesForm);
    const [loading, setLoading] = external_react_.useState(false);
    const [messageError, setMessageError] = external_react_.useState('');
    const [onErrGet, setOnErrGet] = external_react_.useState(null);
    const [onErrPost, setOnErrPost] = external_react_.useState(null);
    external_react_.useEffect(async ()=>{
        setLoading(true);
        if (!solicitud) {
            setLoading(false);
            return;
        }
        try {
            const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitud}?seccion=${paso}`;
            const { response , error  } = await (0,getData/* getData */.Y)(URL_GET_STEP_FORM);
            if (!error) {
                const info = await response.json();
                if (response.status === 404) {
                    setInitialValues(initialValues);
                    setOnErrGet(null);
                    setLoading(false);
                }
                if (response.status === 401) {
                    setLoading(false);
                    setOnErrGet('Hubo un error al consultar la informaci\xf3n del cr\xe9dito, por favor intenta nuevamente');
                }
                if (response.status === 200) {
                    setInitialValues({
                        ...info
                    });
                    setOnErrGet(null);
                    setLoading(false);
                }
            } else {
                window.localStorage.clear();
                push('/login');
            }
        } catch (err) {
            console.log(err);
            setMessageError('Hubo un error al consultar la informaci\xf3n del cr\xe9dito, por favor intenta nuevamente');
            setTimeout(()=>setMessageError('')
            , 3000);
        }
    }, []);
    return loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading ...."
    }) : onErrGet ? /*#__PURE__*/ jsx_runtime_.jsx(_error["default"], {
        message: onErrGet
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: external_yup_.object({
                tipo_identificacion: external_yup_.string().required('requerido').oneOf([
                    'C.C',
                    'C.E'
                ]),
                num_identificacion: external_yup_.number().typeError('Debe ser un n\xfamero').required('requerido').positive(' Debe ser mayor a 0'),
                primer_nombre: external_yup_.string().required('requerido').matches('^[a-zA-Z\xd1\xf1\xe0\xe8\xec\xf2\xf9\xc0\xc8\xcc\xd9\xd2\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xda\xd3 ]+$', 'No se permiten n\xfameros ni caracteres especiales.'),
                segundo_nombre: external_yup_.string().matches('^[a-zA-Z\xd1\xf1\xe0\xe8\xec\xf2\xf9\xc0\xc8\xcc\xd9\xd2\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xda\xd3 ]+$', 'No se permiten n\xfameros ni caracteres especiales.'),
                primer_apellido: external_yup_.string().required('requerido').matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten n\xfameros ni caracteres especiales.'),
                segundo_apellido: external_yup_.string().notRequired().nullable(true).matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten n\xfameros ni caracteres especiales.'),
                fecha_nacimiento: external_yup_.date().required('requerido').test('fecha_nacimiento', '', function(fecha_nacimiento) {
                    if (!fecha_nacimiento) return true;
                    function getAge(birthday) {
                        const ageDifMs = Date.now() - birthday.getTime();
                        const ageDate = new Date(ageDifMs) // miliseconds from epoch
                        ;
                        return Math.abs(ageDate.getUTCFullYear() - 1970);
                    }
                    const MAX_AGE = 75;
                    if (getAge(fecha_nacimiento) > MAX_AGE) {
                        return this.createError({
                            message: `La máxima edad para el codeudor es de ${MAX_AGE} años`
                        });
                    }
                    return true;
                }),
                seguridad_social: external_yup_.string().required('requerido').oneOf([
                    'EPS',
                    'Sisb\xe9n',
                    'N/a'
                ]),
                num_identificacion_deudor: external_yup_.number().required('requerido').typeError('Deber ser un numero').positive()
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_codeudor: {
                            ...prevState.formulario_codeudor,
                            informacion_basica: {
                                ...value
                            }
                        }
                    })
                );
                const { num_identificacion , num_identificacion_deudor , ...dataValues } = value;
                const dataToSend = {
                    seccion: 'FCO_1',
                    data: {
                        ...dataValues,
                        num_identificacion: Number(num_identificacion),
                        num_identificacion_deudor: Number(num_identificacion_deudor)
                    }
                };
                try {
                    const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (res.statusCode === 404) {
                        setMessageError(res.message);
                        setTimeout(()=>{
                            setMessageError('');
                        }, 3000);
                    }
                    if (responseComplete) {
                        props.dispatch({
                            type: 'update',
                            payload: true,
                            fieldName: 'isCompletedBasicInformation'
                        });
                        props.setSolicitud_id(res.solicitud_credito);
                        props.setCurrent(props.current + 1);
                        router.push(`/codeudor/${value.num_identificacion || cedula}/${res.solicitud_credito || solicitud}?paso=FCO_2&rol=${rol}`);
                    } else {
                        props.dispatch({
                            type: 'update',
                            payload: false,
                            fieldName: 'isCompletedBasicInformation'
                        });
                        setOnErrPost(`No fue posible almacenar estos datos, revisa la información e Intenta más tarde`);
                        setTimeout(()=>{
                            setOnErrPost(null);
                        }, 5000);
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            children: ({ values  })=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        DataBasicInformation.map((field)=>{
                            if (field.type === 'select') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx(SelectionInput/* default */.Z, {
                                    id: field.id,
                                    label: field.fieldName,
                                    name: field.name,
                                    className: field.className,
                                    options: field.options,
                                    render: (option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: option.name,
                                            children: option.fieldName
                                        }, option.id)
                                }, field.id));
                            }
                            if (field.type === 'date') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DateInput/* default */.Z, {
                                        label: field.fieldName,
                                        name: field.name,
                                        type: field.type,
                                        className: field.className
                                    }, field.id)
                                }, field.id));
                            }
                            if (field.name === 'num_identificacion') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                    label: field.fieldName,
                                    name: field.name,
                                    type: field.type,
                                    className: field.className,
                                    disabled: disableInput
                                }, field.id));
                            }
                            return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                    label: field.fieldName,
                                    name: field.name,
                                    type: field.type,
                                    className: field.className
                                }, field.id)
                            }));
                        }),
                        messageError !== '' && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: ERROR_CLASS,
                            children: messageError
                        }),
                        onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: ERROR_CLASS,
                            children: onErrPost
                        }) : null,
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-center md:justify-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                children: "Siguiente"
                            })
                        })
                    ]
                }));
            }
        })
    });
};
/* harmony default export */ const BasicInformation = (BasicInformationForm);

// EXTERNAL MODULE: ./components/Forms/TelInput.js
var TelInput = __webpack_require__(5498);
;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/InfoMate/DataInfoMate.js
const DataInfoMate_classInput = 'h-10 border border-gray-400 px-4';
const DataInfoMate = [
    {
        id: 81,
        name: 'nombre',
        fieldName: 'Nombre completo del c\xf3nyugue',
        type: 'text',
        className: `${DataInfoMate_classInput}`
    },
    {
        id: '81-a',
        name: 'num_identificacion',
        fieldName: 'No. De identificaci\xf3n',
        type: 'number',
        className: `${DataInfoMate_classInput}`
    },
    {
        id: 83,
        name: 'sexo',
        fieldName: 'Sexo',
        type: 'select',
        className: `${DataInfoMate_classInput}`,
        options: [
            {
                id: 83.2,
                name: 'Masculino',
                fieldName: 'Masculino'
            },
            {
                id: 83.3,
                name: 'Femenino',
                fieldName: 'Femenino'
            },
            {
                id: 83.4,
                name: 'Intersexual',
                fieldName: 'Intersexual'
            },
            {
                id: 83.5,
                name: 'Indefinido',
                fieldName: 'Indefinido'
            }, 
        ]
    },
    {
        id: 84,
        name: 'telefono',
        fieldName: 'Tel\xe9fono del c\xf3nyugue o pareja',
        type: 'number',
        className: `${DataInfoMate_classInput}`
    },
    {
        id: '84-a',
        name: 'lugar_trabajo',
        fieldName: 'Lugar de trabajo',
        type: 'text',
        className: `${DataInfoMate_classInput}`
    },
    {
        id: 85,
        name: 'telefono_trabajo',
        fieldName: 'Telefono de lugar de trabajo',
        type: 'number',
        className: `${DataInfoMate_classInput}`
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/InfoMate/index.js













const InfoMate_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const InfoMate = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const initialValuesForm = {
        nombre: '',
        num_identificacion: '',
        sexo: '',
        telefono: '',
        lugar_trabajo: '',
        telefono_trabajo: ''
    };
    const [initialValues, setInitialValues] = external_react_default().useState(initialValuesForm);
    const [loading, setLoading] = external_react_default().useState(true);
    const [onErrGet, setOnErrGet] = external_react_default().useState(null);
    const [onErrPost, setOnErrPost] = external_react_default().useState(null);
    external_react_default().useEffect(async ()=>{
        try {
            const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitud}?seccion=${paso}`;
            const { response , error  } = await (0,getData/* getData */.Y)(URL_GET_STEP_FORM);
            if (!error) {
                const info = await response.json();
                if (response.status === 404) {
                    setInitialValues(initialValues);
                    setOnErrGet(null);
                    setLoading(false);
                }
                if (response.status === 401) {
                    setLoading(false);
                    setOnErrGet('Hubo un error al consultar la informaci\xf3n del cr\xe9dito, por favor intenta nuevamente');
                }
                if (response.status === 200) {
                    setInitialValues({
                        ...info
                    });
                    setLoading(false);
                    setOnErrGet(null);
                }
            } else {
                window.localStorage.clear();
                push('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }, []);
    const handleBack = ()=>{
        router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_1&rol=${rol}`);
    };
    return loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: external_yup_.object({
                nombre: external_yup_.string().required('requerido'),
                num_identificacion: external_yup_.number().required('requerido'),
                sexo: external_yup_.string().required('requerido').typeError('Ingresa un sexo v\xe1lido').oneOf([
                    'Masculino',
                    'Femenino',
                    'Intersexual',
                    'Indefinido'
                ]),
                telefono: external_yup_.number().typeError('Debe ser un n\xfamero').required('requerido').positive(' Debe ser mayor a 0'),
                lugar_trabajo: external_yup_.string().required('requerido'),
                telefono_trabajo: external_yup_.number().typeError('Debe ser un n\xfamero').required('requerido').positive(' Debe ser mayor a 0')
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_codeudor: {
                            ...prevState.formulario_codeudor,
                            conyugue: {
                                ...value
                            }
                        }
                    })
                );
                const dataToSend = {
                    seccion: 'FCO_2',
                    solicitud_id: props.solicitud_id || solicitud,
                    data: {
                        ...value
                    }
                };
                try {
                    const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (responseComplete) {
                        props.dispatch({
                            type: 'update',
                            payload: true,
                            fieldName: 'isCompletedInfoMate'
                        });
                        props.setCurrent(props.current + 1);
                        router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_3&rol=${rol}`);
                    } else {
                        props.dispatch({
                            type: 'update',
                            payload: false,
                            fieldName: 'isCompletedInfoMate'
                        });
                        setOnErrPost(`No fue posible almacenar estos datos, revisa la información e Intenta más tarde`);
                        setTimeout(()=>{
                            setOnErrPost(null);
                        }, 5000);
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            children: ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        DataInfoMate.map((field)=>{
                            if (field.type === 'select') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx(SelectionInput/* default */.Z, {
                                    id: field.id,
                                    label: field.fieldName,
                                    name: field.name,
                                    className: field.className,
                                    options: field.options,
                                    render: (option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: option.name,
                                            children: option.fieldName
                                        }, option.id)
                                }, field.id));
                            }
                            return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                    label: field.fieldName,
                                    name: field.name,
                                    type: field.type,
                                    className: field.className
                                }, field.id)
                            }));
                        }),
                        onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: InfoMate_ERROR_CLASS,
                            children: onErrPost
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    onClick: handleBack,
                                    className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500",
                                    children: "Anterior"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "submit",
                                    className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                    children: [
                                        ' ',
                                        "Siguiente",
                                        ' '
                                    ]
                                })
                            ]
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const FormCodeudor_InfoMate = (InfoMate);

// EXTERNAL MODULE: ./utils/helpers.js
var helpers = __webpack_require__(4108);
;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/populationVariables/DataPopulationVariables.js
const DataPopulationVariables_classInput = 'h-10 border border-gray-400 px-4';
const DataPopulationVariables = [
    {
        id: '83-a.b',
        name: 'sexo',
        fieldName: 'Sexo',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 83.2,
                name: 'Masculino',
                fieldName: 'Masculino'
            },
            {
                id: 83.3,
                name: 'Femenino',
                fieldName: 'Femenino'
            },
            {
                id: 83.4,
                name: 'Intersexual',
                fieldName: 'Intersexual'
            },
            {
                id: 83.5,
                name: 'Indefinido',
                fieldName: 'Indefinido'
            }, 
        ]
    },
    // {
    //   id: 524,
    //   name: 'orientacion_sexual',
    //   fieldName: 'Orientación sexual',
    //   type: 'select',
    //   className: `${classInput}`,
    //   options: [
    //     {
    //       id: 524.3,
    //       name: 'Heterosexual',
    //       fieldName: 'Heterosexual',
    //     },
    //     {
    //       id: 524.1,
    //       name: 'Lesbiana',
    //       fieldName: 'Lesbiana',
    //     },
    //     {
    //       id: 524.2,
    //       name: 'Bisexual',
    //       fieldName: 'Bisexual',
    //     },
    //     {
    //       id: 524.2,
    //       name: 'Gay',
    //       fieldName: 'Gay',
    //     },
    //     {
    //       id: 524.2,
    //       name: 'Asexual',
    //       fieldName: 'Asexual',
    //     },
    //     {
    //       id: 524.2,
    //       name: 'Pansexual',
    //       fieldName: 'Pansexual',
    //     },
    //     {
    //       id: 524.2,
    //       name: 'Homosexual',
    //       fieldName: 'Homosexual',
    //     },
    //     {
    //       id: 524.2,
    //       name: 'Sin Dato',
    //       fieldName: 'Sin Dato',
    //     },
    //     {
    //       id: 524.2,
    //       name: 'No sabe No responde',
    //       fieldName: 'No sabe No responde',
    //     },
    //   ],
    // },
    {
        id: 'identidad-genero-525',
        name: 'identidad_genero',
        fieldName: 'Identidad de genero',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 'identidad-genero-525.1',
                name: 'Mujer Trans',
                fieldName: 'Mujer Trans'
            },
            {
                id: 'identidad-genero-525.2',
                name: 'Hombre Trans',
                fieldName: 'Hombre Trans'
            },
            {
                id: 'identidad-genero-525.3',
                name: 'Fluido-No Binario',
                fieldName: 'Fluido-No Binario'
            },
            {
                id: 'identidad-genero-525.4',
                name: 'Mujer Cis',
                fieldName: 'Mujer Cis'
            },
            {
                id: 'identidad-genero-525.5',
                name: 'Hombre Cis',
                fieldName: 'Hombre Cis'
            },
            {
                id: 'identidad-genero-525.6',
                name: 'Travesti',
                fieldName: 'Travesti'
            },
            {
                id: 'identidad-genero-525.7',
                name: 'Transexual',
                fieldName: 'Transexual'
            },
            {
                id: 'identidad-genero-525.8',
                name: 'Transformista',
                fieldName: 'Transformista'
            },
            {
                id: 'identidad-genero-525.9',
                name: 'Otro',
                fieldName: 'Otro'
            },
            {
                id: 'identidad-genero-525.10',
                name: 'Sin Dato',
                fieldName: 'Sin Dato'
            },
            {
                id: 'identidad-genero-525.10',
                name: 'No sabe No responde',
                fieldName: 'No sabe No responde'
            }, 
        ]
    },
    {
        id: 86,
        name: 'estado_civil',
        fieldName: 'Estado Civ\xedl',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 86.1,
                name: 'Soltero',
                fieldName: 'Soltero'
            },
            {
                id: 86.2,
                name: 'Casado',
                fieldName: 'Casado'
            },
            {
                id: 86.3,
                name: 'Viudo',
                fieldName: 'Viudo'
            },
            {
                id: 86.4,
                name: 'Union Libre',
                fieldName: 'Uni\xf3n libre'
            },
            {
                id: 86.5,
                name: 'Divorciado',
                fieldName: 'Divorciado'
            }, 
        ]
    },
    {
        id: 88,
        name: 'nivel_escolaridad',
        fieldName: 'Nivel de escolaridad',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 88.1,
                name: 'Ninguno',
                fieldName: 'Ninguno'
            },
            {
                id: 88.2,
                name: 'Primaria',
                fieldName: 'Primaria'
            },
            {
                id: 88.3,
                name: 'Bachiller',
                fieldName: 'Bachiller'
            },
            {
                id: 88.4,
                name: 'Tecnico',
                fieldName: 'T\xe9cnico'
            },
            {
                id: 88.5,
                name: 'Tecnologo',
                fieldName: 'Tecn\xf3logo'
            },
            {
                id: 88.6,
                name: 'Profesional',
                fieldName: 'Profesional'
            },
            {
                id: 88.7,
                name: 'Especialista',
                fieldName: 'Especialista'
            },
            {
                id: 88.8,
                name: 'Magister',
                fieldName: 'Magister'
            },
            {
                id: 88.9,
                name: 'Doctorado',
                fieldName: 'Doctorado'
            }, 
        ]
    },
    {
        id: 87,
        name: 'personas_a_cargo',
        fieldName: 'Numero de personas a cargo',
        type: 'number',
        className: `${DataPopulationVariables_classInput}`
    },
    {
        id: 89,
        name: 'estado_laboral',
        fieldName: 'Estado Laboral',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 89.1,
                name: 'Empleado',
                fieldName: 'Empleado'
            },
            {
                id: 89.2,
                name: 'Desempleado',
                fieldName: 'Desempleado'
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/populationVariables/index.js














const populationVariables_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const PopulationVariables = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const initialValuesForm = {
        sexo: '',
        // orientacion_sexual: '',
        identidad_genero: '',
        estado_civil: '',
        nivel_escolaridad: '',
        personas_a_cargo: '',
        estado_laboral: '',
        poblacion_campesina: 'NO',
        nombre_empresa: '',
        direccion_empresa: '',
        telefono_empresa: ''
    };
    const [initialValues, setInitialValues] = external_react_default().useState(initialValuesForm);
    const [loading, setLoading] = external_react_default().useState(true);
    const [onErrGet, setOnErrGet] = external_react_default().useState(null);
    const [onErrPost, setOnErrPost] = external_react_default().useState(null);
    external_react_default().useEffect(async ()=>{
        try {
            const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitud}?seccion=${paso}`;
            const { response , error  } = await (0,getData/* getData */.Y)(URL_GET_STEP_FORM);
            if (!error) {
                const info = await response.json();
                if (response.status === 404) {
                    setInitialValues(initialValues);
                    setOnErrGet(null);
                    setLoading(false);
                }
                if (response.status === 401) {
                    setLoading(false);
                    setOnErrGet('Hubo un error al consultar los datos del cr\xe9dito, por favor intenta nuevamente');
                }
                if (response.status === 200) {
                    setInitialValues({
                        ...info
                    });
                    setOnErrGet(null);
                    setLoading(false);
                }
            } else {
                window.localStorage.clear();
                push('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }, []);
    const handleBack = ()=>{
        router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_2&rol=${rol}`);
    };
    const classInput = 'h-10 border border-gray-400 px-4';
    return loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading ... "
    }) : onErrGet ? /*#__PURE__*/ jsx_runtime_.jsx(_error["default"], {
        message: onErrGet
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Variables poblacionales"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: initialValues,
                validationSchema: external_yup_.object({
                    sexo: external_yup_.string().required('requerido').oneOf([
                        'Masculino',
                        'Femenino',
                        'Intersexual',
                        'Indefinido'
                    ]),
                    // orientacion_sexual: Yup.string()
                    //   .required('requerido')
                    //   .oneOf([
                    //     'Heterosexual',
                    //     'Lesbiana',
                    //     'Bisexual',
                    //     'Gay',
                    //     'Asexual',
                    //     'Pansexual',
                    //     'Homosexual',
                    //     'Sin Dato',
                    //     'No sabe No responde',
                    //   ]),
                    identidad_genero: external_yup_.string().required('requerido').oneOf([
                        'Mujer Trans',
                        'Hombre Trans',
                        'Fluido-No Binario',
                        'Mujer Cis',
                        'Hombre Cis',
                        'Travesti',
                        'Transexual',
                        'Transformista',
                        'Otro',
                        'Sin Dato',
                        'No sabe No responde', 
                    ]),
                    estado_civil: external_yup_.string().required('requerido').oneOf([
                        'Soltero',
                        'Casado',
                        'Viudo',
                        'Union Libre',
                        'Divorciado'
                    ]),
                    nivel_escolaridad: external_yup_.string().required('requerido').oneOf([
                        'Ninguno',
                        'Primaria',
                        'Bachiller',
                        'Tecnico',
                        'Tecnologo',
                        'Profesional',
                        'Especialista',
                        'Magister',
                        'Doctorado', 
                    ]),
                    personas_a_cargo: external_yup_.number().required('requerido'),
                    estado_laboral: external_yup_.string().required('requerido').oneOf([
                        'Empleado',
                        'Desempleado'
                    ]),
                    nombre_empresa: external_yup_.string().when('estado_laboral', {
                        is: (estado_laboral)=>estado_laboral == 'Empleado'
                        ,
                        then: external_yup_.string().required('requerido').typeError('Ingresa un nombre v\xe1lido para la empresa'),
                        otherwise: external_yup_.string().notRequired().nullable(true)
                    }),
                    telefono_empresa: external_yup_.string().when('estado_laboral', {
                        is: (estado_laboral)=>estado_laboral == 'Empleado'
                        ,
                        then: external_yup_.string().required('requerido').min(7, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').max(20, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').typeError('Ingresa un n\xfamero de tel\xe9fono v\xe1lido.'),
                        otherwise: external_yup_.string().notRequired().nullable(true)
                    }),
                    direccion_empresa: external_yup_.string().when('estado_laboral', {
                        is: (estado_laboral)=>estado_laboral == 'Empleado'
                        ,
                        then: external_yup_.string().required('requerido').typeError('Ingresa una direcci\xf3n v\xe1lida para la empresa'),
                        otherwise: external_yup_.string().notRequired().nullable(true)
                    })
                }),
                onSubmit: async (value)=>{
                    props.setForm((prevState)=>({
                            ...prevState,
                            formulario_codeudor: {
                                ...prevState.formulario_codeudor,
                                variables_poblacionales: {
                                    ...value
                                }
                            }
                        })
                    );
                    let dataToSend = {
                        seccion: 'FCO_3',
                        solicitud_id: props.solicitud_id || solicitud
                    };
                    if (value.estado_laboral === 'Desempleado') {
                        const { nombre_empresa , direccion_empresa , telefono_empresa , ...data } = value;
                        dataToSend.data = {
                            ...data
                        };
                    } else {
                        dataToSend.data = {
                            ...value
                        };
                    }
                    try {
                        const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                        if (responseComplete) {
                            props.dispatch({
                                type: 'update',
                                payload: true,
                                fieldName: 'isCompletedPopulationVariables'
                            });
                            props.setCurrent(props.current + 1);
                            router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_4&rol=${rol}`);
                        } else {
                            props.dispatch({
                                type: 'update',
                                payload: false,
                                fieldName: 'isCompletedPopulationVariables'
                            });
                            setOnErrPost(`Intenta más tarde`);
                            setTimeout(()=>{
                                setOnErrPost(null);
                            }, 5000);
                        }
                    } catch (err) {
                        console.log(err);
                    }
                },
                children: ({ values  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        children: [
                            DataPopulationVariables.map((field)=>{
                                if (field.type === 'select') {
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(SelectionInput/* default */.Z, {
                                        id: field.id,
                                        label: field.fieldName,
                                        name: field.name,
                                        className: field.className,
                                        options: field.options,
                                        render: (option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: option.name,
                                                children: option.fieldName
                                            }, option.id)
                                    }, field.id));
                                }
                                if (field.type === 'tel') {
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(TelInput/* default */.Z, {
                                        label: field.fieldName,
                                        name: field.name,
                                        type: field.type,
                                        className: field.className
                                    }, field.id));
                                }
                                if (field.type === 'date') {
                                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DateInput/* default */.Z, {
                                            label: field.fieldName,
                                            name: field.name,
                                            type: field.type,
                                            className: field.className
                                        }, field.id)
                                    }, field.id));
                                }
                                return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        label: field.fieldName,
                                        name: field.name,
                                        type: field.type,
                                        className: field.className
                                    }, field.id)
                                }));
                            }),
                            values.estado_laboral === 'Empleado' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        label: 'Nombre de la empresa',
                                        name: "nombre_empresa",
                                        type: "text",
                                        className: classInput,
                                        placeholder: "Nombre de la empresa en la que trabajas"
                                    }, 'nombre_empresa'),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        label: 'Direcci\xf3n de la empresa',
                                        type: "text",
                                        name: "direccion_empresa",
                                        placeholder: "Direcci\xf3n",
                                        className: classInput
                                    }, 'direccion_empresa'),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        label: 'Tel\xe9fono de la empresa',
                                        type: "number",
                                        onWheel: helpers/* preventOnWheelChange */.F,
                                        name: "telefono_empresa",
                                        placeholder: "Tel\xe9fono de la empresa",
                                        className: classInput
                                    }, 'telefono_empresa')
                                ]
                            }) : null,
                            onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: populationVariables_ERROR_CLASS,
                                children: onErrPost
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-around",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: handleBack,
                                        className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500",
                                        children: "Anterior"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        type: "submit",
                                        className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                        children: [
                                            ' ',
                                            "Siguiente",
                                            ' '
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
            })
        ]
    });
};
/* harmony default export */ const populationVariables = (PopulationVariables);

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/IncomeAndExpense/DataExpenses.js
const DataExpenses_classInput = 'h-10 border border-gray-400 px-4';
const DataExpenses = [
    {
        id: 92,
        name: 'cuota_arrendamiento',
        fieldName: 'Cuota de arrendamiento',
        type: 'number',
        className: `${DataExpenses_classInput}`
    },
    {
        id: 93,
        name: 'gastos_familiares',
        fieldName: 'Gastos Familiares',
        type: 'number',
        className: `${DataExpenses_classInput}`
    },
    {
        id: 94,
        name: 'otros_gastos',
        fieldName: 'Otros gastos',
        type: 'number',
        className: `${DataExpenses_classInput}`
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/IncomeAndExpense/DataIncome.js
const DataIncome_classInput = 'h-10 border border-gray-400 px-4';
const DataIncome = [
    {
        id: 90,
        name: 'salario',
        fieldName: 'Ingreso o Salario',
        type: 'number',
        className: `${DataIncome_classInput}`
    },
    {
        id: 91,
        name: 'otros_ingresos',
        fieldName: 'Otros Ingresos',
        type: 'number',
        className: `${DataIncome_classInput}`
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/IncomeAndExpense/index.js












const IncomeAndExpense_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const IncomeAndExpense = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const initialValuesForm = {
        salario: '',
        otros_ingresos: '',
        ingresos_mensuales: '',
        cuota_arrendamiento: '',
        gastos_familiares: '',
        otros_gastos: '',
        gastos_mensuales: ''
    };
    const [initialValues, setInitialValues] = external_react_default().useState(initialValuesForm);
    const [loading, setLoading] = external_react_default().useState(true);
    const [onErrGet, setOnErrGet] = external_react_default().useState(null);
    const [onErrPost, setOnErrPost] = external_react_default().useState(null);
    external_react_default().useEffect(async ()=>{
        setLoading(true);
        try {
            const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitud}?seccion=${paso}`;
            const { response , error  } = await (0,getData/* getData */.Y)(URL_GET_STEP_FORM);
            if (!error) {
                const info = await response.json();
                if (response.status === 404) {
                    setInitialValues(initialValues);
                    setOnErrGet(null);
                    setLoading(false);
                }
                if (response.status === 401) {
                    setLoading(false);
                    setOnErrGet('Hubo un error, por favor intenta nuevamente');
                }
                if (response.status === 200) {
                    const valuesIncomes = {
                        salario: info.ingresos.salario,
                        otros_ingresos: info.ingresos.otros_ingresos,
                        ingresos_mensuales: info.ingresos.ingresos_mensuales,
                        cuota_arrendamiento: info.egresos.cuota_arrendamiento,
                        gastos_familiares: info.egresos.gastos_familiares,
                        otros_gastos: info.egresos.otros_gastos,
                        gastos_mensuales: info.egresos.gastos_mensuales
                    };
                    setInitialValues({
                        ...valuesIncomes
                    });
                    setOnErrGet(null);
                    setLoading(false);
                }
            } else {
                window.localStorage.clear();
                push('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }, []);
    const handleBack = ()=>{
        router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_4&rol=${rol}`);
    };
    return loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-xl font-bold mb-4",
                children: " Ingresos y Egresos"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: initialValues,
                validationSchema: external_yup_.object({
                    salario: external_yup_.number().typeError('Debe ser numero').required('requerido').moreThan(-1),
                    otros_ingresos: external_yup_.number().typeError('Debe ser numero').notRequired().moreThan(-1),
                    cuota_arrendamiento: external_yup_.number().typeError('Debe ser numero').required('requerido').positive(),
                    gastos_familiares: external_yup_.number().typeError('Debe ser numero').required('requerido').positive(),
                    otros_gastos: external_yup_.number().typeError('Debe ser numero').required('requerido').moreThan(-1),
                    gastos_mensuales: external_yup_.number().typeError('Debe ser numero').required('requerido').positive(),
                    ingresos_mensuales: external_yup_.number().typeError('Debe ser numero').required('requerido').positive()
                }),
                onSubmit: async (value)=>{
                    props.setForm((prevState)=>({
                            ...prevState,
                            formulario_codeudor: {
                                ...prevState.formulario_codeudor,
                                ingresos_egresos: {
                                    ...value
                                }
                            }
                        })
                    );
                    const { salario , otros_ingresos , ingresos_mensuales , cuota_arrendamiento , gastos_familiares , otros_gastos , gastos_mensuales ,  } = value;
                    const dataToSend = {
                        seccion: 'FCO_5',
                        solicitud_id: props.solicitud_id || solicitud,
                        data: {
                            ingresos: {
                                salario,
                                otros_ingresos,
                                ingresos_mensuales: salario + otros_ingresos
                            },
                            egresos: {
                                cuota_arrendamiento,
                                gastos_familiares,
                                otros_gastos,
                                gastos_mensuales: cuota_arrendamiento + gastos_familiares + otros_gastos
                            }
                        }
                    };
                    try {
                        const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                        if (error) {
                            window.localStorage.clear();
                            push('/login');
                            return;
                        }
                        if (responseComplete) {
                            props.dispatch({
                                type: 'update',
                                payload: true,
                                fieldName: 'isCompletedIncomeAndExpense'
                            });
                            props.setCurrent(props.current + 1);
                            router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_6&rol=${rol}`);
                        } else {
                            props.dispatch({
                                type: 'update',
                                payload: false,
                                fieldName: 'isCompletedIncomeAndExpense'
                            });
                            setOnErrPost(`No fue posible almacenar estos datos, revisa la información e Intenta más tarde`);
                            setTimeout(()=>{
                                setOnErrPost(null);
                            }, 5000);
                        }
                    } catch (err) {
                        console.log(err);
                    }
                },
                children: ({ values  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        children: [
                            DataIncome.map((field)=>{
                                return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        label: field.fieldName,
                                        name: field.name,
                                        type: field.type,
                                        className: field.className
                                    }, field.id)
                                }, field.id));
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        children: "Ingresos mensuales"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                        type: "number",
                                        onWheel: helpers/* preventOnWheelChange */.F,
                                        disabled: true,
                                        placeholder: "Ingresos Mensuales",
                                        name: "ingresos_mensuales",
                                        value: values.salario + values.otros_ingresos
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.ErrorMessage, {
                                        name: "ingresos_mensuales"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            DataExpenses.map((field)=>{
                                return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        label: field.fieldName,
                                        name: field.name,
                                        type: field.type,
                                        className: field.className
                                    }, field.id)
                                }));
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-baseline",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "text-lg font-bold",
                                        children: "Gastos Mensuales: "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                        type: "number",
                                        onWheel: helpers/* preventOnWheelChange */.F,
                                        disabled: true,
                                        placeholder: "Gastos Mensuales",
                                        name: "gastos_mensuales",
                                        className: "rounded-lg border-color_gray_2",
                                        value: values.cuota_arrendamiento + values.gastos_familiares + values.otros_gastos
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.ErrorMessage, {
                                        name: "gastos_mensuales"
                                    })
                                ]
                            }),
                            onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: IncomeAndExpense_ERROR_CLASS,
                                children: onErrPost
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-around",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: handleBack,
                                        className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500",
                                        children: "Anterior"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        type: "submit",
                                        className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                        children: [
                                            ' ',
                                            "Siguiente",
                                            ' '
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
            })
        ]
    });
};
/* harmony default export */ const FormCodeudor_IncomeAndExpense = (IncomeAndExpense);

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/BienesRaices/DataBienesRaices.js
const DataBienesRaices_classInput = 'h-10 border border-gray-400 px-4';
const DataBienesRaices = [
    {
        id: 95,
        name: 'activos_propios',
        fieldName: 'Activos Propios',
        type: 'number',
        className: `${DataBienesRaices_classInput}`
    },
    {
        id: 96,
        name: 'num_escritura',
        fieldName: 'N\xfamero de escritura',
        type: 'number',
        className: `${DataBienesRaices_classInput}`
    },
    {
        id: 97,
        name: 'matricula',
        fieldName: 'Matr\xedcula',
        type: 'number',
        className: `${DataBienesRaices_classInput}`
    },
    {
        id: 98,
        name: 'avaluo_catastral',
        fieldName: 'Avaluo catastral',
        type: 'number',
        className: `${DataBienesRaices_classInput}`
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/BienesRaices/index.js










const BienesRaices_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const INFO_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const BienesRaices = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const initialValuesForm = {
        activos_propios: null,
        avaluo_catastral: null,
        matricula: null,
        num_escritura: null
    };
    const [initialValues, setInitialValues] = external_react_default().useState(initialValuesForm);
    const [housingType, setHousingType] = external_react_default().useState('');
    const [loading, setLoading] = external_react_default().useState(true);
    const [onErrGet, setOnErrGet] = external_react_default().useState(null);
    const [onErrPost, setOnErrPost] = external_react_default().useState(null);
    external_react_default().useEffect(()=>{
        async function run() {
            {
                try {
                    const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitud}?seccion=${paso}`;
                    const URL_GET_INFO = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitud}?seccion=FCO_4`;
                    const { response , error  } = await (0,getData/* getData */.Y)(URL_GET_STEP_FORM);
                    const { response: _response  } = await (0,getData/* getData */.Y)(URL_GET_INFO);
                    if (_response) {
                        const info = await _response.json();
                        if (_response.status === 200) {
                            setHousingType(info.vivienda);
                        }
                    }
                    if (!error) {
                        const info = await response.json();
                        if (response.status === 404) {
                            setInitialValues(initialValues);
                            setOnErrGet(null);
                            setLoading(false);
                        }
                        if (response.status === 401) {
                            setLoading(false);
                            setOnErrGet(null);
                            setOnErrGet('Hubo un error al consultar la informaci\xf3n del cr\xe9dito, por favor intenta nuevamente');
                        }
                        if (response.status === 200) {
                            setInitialValues({
                                ...info
                            });
                            setLoading(false);
                        }
                    } else {
                        window.localStorage.clear();
                        push('/login');
                    }
                } catch (err) {}
            }
        }
        run();
    }, []);
    const handleBack = ()=>{
        router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_5&rol=${rol}`);
    };
    function getIsRequiredField(field) {
        if (housingType === 'Familiar' || housingType === 'Arrendada') {
            return true;
        }
        if (field === undefined || field === null || field === '') {
            return this.createError({
                message: 'Este campo es requerido'
            });
        }
        return true;
    }
    return loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading ...."
    }) : onErrGet ? /*#__PURE__*/ jsx_runtime_.jsx(_error["default"], {
        message: onErrGet
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Info Bienes raices"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: initialValues,
                validationSchema: external_yup_.object({
                    activos_propios: external_yup_.number().typeError('Debe ser el n\xfamero de Activos propios').test('activos_propios', '', getIsRequiredField).positive(),
                    num_escritura: external_yup_.number().typeError('Debe ser el n\xfamero de la escritural del bien ra\xedz').test('num_escritura', '', getIsRequiredField).positive(),
                    matricula: external_yup_.number().typeError('Debe ser un numero, correspondiente a la matr\xedcula del bien ra\xedz').test('matricula', '', getIsRequiredField).positive(),
                    avaluo_catastral: external_yup_.number().typeError('Debe ser un numero, correpsondiente al valor del avaluo catastral').test('avaluo_catastral', '', getIsRequiredField)
                }),
                onSubmit: async (value)=>{
                    // console.log(value)
                    props.setForm((prevState)=>({
                            ...prevState,
                            formulario_codeudor: {
                                ...prevState.formulario_codeudor,
                                bienes_raices: {
                                    ...value
                                }
                            }
                        })
                    );
                    const dataToSend = {
                        seccion: 'FCO_6',
                        solicitud_id: props.solicitud_id || solicitud,
                        data: {
                            ...value
                        }
                    };
                    try {
                        const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                        if (error) {
                            window.localStorage.clear();
                            push('/login');
                            return;
                        }
                        if (responseComplete) {
                            props.dispatch({
                                type: 'update',
                                payload: true,
                                fieldName: 'isCompletedBienesRaices'
                            });
                            props.setCurrent(props.current + 1);
                            router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_7&rol=${rol}`);
                        } else {
                            props.dispatch({
                                type: 'update',
                                payload: false,
                                fieldName: 'isCompletedBienesRaices'
                            });
                            setOnErrPost(`No fue posible almacenar estos datos, revisa la información e Intenta más tarde`);
                            setTimeout(()=>{
                                setOnErrPost(null);
                            }, 5000);
                        }
                    } catch (err) {
                    // console.log(err)
                    }
                },
                children: ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        children: [
                            DataBienesRaices.map((field)=>{
                                return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        label: field.fieldName,
                                        name: field.name,
                                        type: field.type,
                                        className: field.className
                                    }, field.id)
                                }));
                            }),
                            onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: BienesRaices_ERROR_CLASS,
                                children: onErrPost
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-around",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: handleBack,
                                        className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500",
                                        children: "Anterior"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        type: "submit",
                                        className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                        children: [
                                            ' ',
                                            "Siguiente",
                                            ' '
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
            })
        ]
    });
};
/* harmony default export */ const FormCodeudor_BienesRaices = (BienesRaices);

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/PersonalReferences/DataPersonalReferences.js
const DataPersonalReferences_classInput = 'h-10 border border-gray-400 px-4';
const DataPersonalReferences = [
    {
        id: 99,
        name: 'nombre_referencia_familiar',
        fieldName: 'Nombre referencia familiar',
        type: 'text',
        className: `${DataPersonalReferences_classInput}`
    },
    {
        id: 100,
        name: 'parentesco',
        fieldName: 'Parentesco',
        type: 'text',
        className: `${DataPersonalReferences_classInput}`
    },
    {
        id: 101,
        name: 'numero_telefonico',
        fieldName: 'N\xfamero telef\xf3nico',
        type: 'number',
        className: `${DataPersonalReferences_classInput}`
    },
    {
        id: 99,
        name: 'nombre_referencia_familiar_alt',
        fieldName: 'Nombre referencia familiar',
        type: 'text',
        className: `${DataPersonalReferences_classInput}`
    },
    {
        id: 100,
        name: 'parentesco_alt',
        fieldName: 'Parentesco',
        type: 'text',
        className: `${DataPersonalReferences_classInput}`
    },
    {
        id: 101,
        name: 'numero_telefonico_alt',
        fieldName: 'N\xfamero telef\xf3nico',
        type: 'number',
        className: `${DataPersonalReferences_classInput}`
    }, 
];

// EXTERNAL MODULE: ./components/CardUploadDocument.js + 2 modules
var CardUploadDocument = __webpack_require__(4775);
;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/PersonalReferences/index.js











const PersonalReferences_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const PersonalReferences_INFO_CLASS = 'mensaje-info mb-4 px-4 py-3 rounded relative';
const ReferencesForm = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const [hide] = external_react_.useState(false);
    const reducerRef = (curr, updates)=>({
            ...curr,
            ...updates
        })
    ;
    const [{ ref_personal: ref_personal1 , ref_personal_alt: ref_personal_alt1  }, dispatch] = external_react_.useReducer(reducerRef, {
        ref_personal: undefined,
        ref_personal_alt: undefined
    });
    const initialValuesForm = {
        nombre_referencia_familiar: '',
        parentesco: '',
        numero_telefonico: '',
        nombre_referencia_familiar_alt: '',
        parentesco_alt: '',
        numero_telefonico_alt: ''
    };
    const [editForm, setEditForm] = external_react_.useState(false);
    const [message, setMessage] = external_react_.useState(null);
    const [valuesForm, setValuesForm] = external_react_.useState(initialValuesForm);
    const [onErrGet, setOnErrGet] = external_react_.useState(null);
    const [onErrPost, setOnErrPost] = external_react_.useState(null);
    const [onWarnPost, setWarnPost] = external_react_.useState(null);
    external_react_.useEffect(async ()=>{
        setEditForm(false);
        try {
            const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${props.solicitud_id || solicitud}?seccion=${paso}`;
            const { response , error  } = await (0,getData/* getData */.Y)(URL_GET_STEP_FORM);
            if (!error) {
                const info = await response.json();
                if (response.status === 404) {
                    setEditForm(true);
                    setOnErrGet(null);
                }
                if (response.status === 401) {
                    setEditForm(true);
                    setOnErrGet('Hubo un error al consultar los datos del cr\xe9dito, por favor intenta nuevamente');
                }
                if (response.status === 200) {
                    const [ref_personal, ref_personal_alt] = info;
                    dispatch({
                        ref_personal,
                        ref_personal_alt
                    });
                    const obj = {
                        nombre_referencia_familiar: ref_personal.nombre,
                        parentesco: ref_personal.parentesco,
                        numero_telefonico: ref_personal.telefono,
                        nombre_referencia_familiar_alt: ref_personal_alt.nombre,
                        parentesco_alt: ref_personal_alt.parentesco,
                        numero_telefonico_alt: ref_personal_alt.telefono
                    };
                    setValuesForm(obj);
                    setOnErrGet(null);
                    setEditForm(true);
                }
            } else {
                window.localStorage.clear();
                push('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }, []);
    const handleBack = ()=>{
        router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_6&rol=${rol}`);
    };
    return editForm ? onErrGet ? /*#__PURE__*/ jsx_runtime_.jsx(_error["default"], {
        message: onErrGet
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${hide && 'hidden'} mb-8`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: valuesForm,
            validationSchema: external_yup_.object({
                nombre_referencia_familiar: external_yup_.string().required('requerido').matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten n\xfameros ni caracteres especiales.'),
                parentesco: external_yup_.string().required('requerido').matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten n\xfameros ni caracteres especiales.'),
                numero_telefonico: external_yup_.string().min(7, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').max(20, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.'),
                nombre_referencia_familiar_alt: external_yup_.string().required('requerido').matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten n\xfameros ni caracteres especiales.'),
                parentesco_alt: external_yup_.string().required('requerido').matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten n\xfameros ni caracteres especiales.'),
                numero_telefonico_alt: external_yup_.string().min(7, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').max(20, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.')
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_individual: {
                            ...prevState.formulario_individual,
                            informacion_referencias_comerciales_familiares: {
                                ...value
                            }
                        }
                    })
                );
                const dataToSend = {
                    seccion: 'FCO_7',
                    solicitud_id: props.solicitud_id || solicitud
                };
                dataToSend.data = {
                    referencias: [
                        {
                            tipo: 'personal',
                            nombre: value.nombre_referencia_familiar,
                            telefono: Number(value.numero_telefonico),
                            parentesco: value.parentesco
                        },
                        {
                            tipo: 'personal',
                            nombre: value.nombre_referencia_familiar_alt,
                            telefono: Number(value.numero_telefonico_alt),
                            parentesco: value.parentesco_alt
                        }, 
                    ]
                };
                try {
                    const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (error) {
                        window.localStorage.clear();
                        push('/login');
                        return;
                    }
                    if (responseComplete) {
                        props.dispatch({
                            type: 'update',
                            payload: true,
                            fieldName: 'isCompletedPersonalReference'
                        });
                        props.setCurrent(props.current + 1);
                        // props.setCurrent(props.current + 1)
                        router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_8&rol=${rol}`);
                    //setHide(true)
                    } else {
                        if (res.statusCode !== 422) {
                            props.dispatch({
                                type: 'update',
                                payload: false,
                                fieldName: 'isCompletedPersonalReference'
                            });
                            setOnErrPost(`No fue posible almacenar estos datos, revisa la información e Intenta más tarde`);
                            setTimeout(()=>{
                                setOnErrPost(null);
                            }, 5000);
                        } else {
                            setWarnPost(res.message || 'Ya tienes referencias registradas, continua en el siguiente paso.');
                            setTimeout(()=>{
                                setWarnPost(null);
                                props.dispatch({
                                    type: 'update',
                                    payload: true,
                                    fieldName: 'isCompletedPersonalReference'
                                });
                                props.setCurrent(props.current + 1);
                                // props.setCurrent(props.current + 1)
                                router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_8&rol=${rol}`);
                            }, 5000);
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            children: (values)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        DataPersonalReferences.map((field)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                label: field.fieldName,
                                name: field.name,
                                type: field.type,
                                className: field.className
                            }, field.id));
                        }),
                        message,
                        /*#__PURE__*/ jsx_runtime_.jsx(CardUploadDocument/* CardUploadDocument */.V, {
                            solicitud_credito: props.solicitud_id || solicitud,
                            cedula: cedula
                        }),
                        onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: PersonalReferences_ERROR_CLASS,
                            children: onErrPost
                        }) : null,
                        onWarnPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: PersonalReferences_INFO_CLASS,
                            children: onWarnPost
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    onClick: handleBack,
                                    className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500",
                                    children: "Anterior"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                    children: "Siguiente"
                                })
                            ]
                        })
                    ]
                })
        })
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
    });
};
/* harmony default export */ const PersonalReferences = (ReferencesForm);

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/HabbeasData/index.js




const HabbeasData = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-100 max-w-4xl mx-auto rounded-lg p-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: {
                terminos_condiciones: false
            },
            validationSchema: external_yup_.object({
                terminos_condiciones: external_yup_.boolean().oneOf([
                    true
                ], 'Debes aceptar los terminos y condiciones')
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_codeudor: {
                            ...prevState.formulario_codeudor,
                            autorizacion_datos_personales: {
                                ...value
                            }
                        }
                    })
                );
                props.setShowModal(false);
            },
            children: ({ values  })=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-2xl text-center my-4",
                                    children: "Autorizaci\xf3n para el tratamiento de datos personales"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xs text-justify",
                                    children: "Por medio de la presente, manifiesto que autorizo al Municipio de Medell\xedn para el tratamiento de mis datos personales, bajo las condiciones que me son informadas en los siguientes t\xe9rminos: EL Municipio de Medell\xedn, identificado con NIT No. 890.905.211-1, actuar\xe1 como Responsable del tratamiento de los datos, los que podr\xe1 recolectar, usar y tratar conforme a su Pol\xedtica de Tratamiento de Datos Personales, que est\xe1 disponible en www.medellin.gov.co, la que se reserva el derecho de modificar en cualquier momento, de lo cual informar\xe1 a trav\xe9s de dicho sitio web. Entiendo que es de car\xe1cter facultativo responder preguntas que versen sobre datos sensibles (aquellos que afectan mi intimidad) o de menores de edad. No obstante, de proporcionarlos, estoy autorizando expresamente su Tratamiento. Declaro que conozco mis derechos como titular, especialmente los de conocer, actualizar, rectificar y suprimir mi informaci\xf3n personal, consultar mi informaci\xf3n, solicitar prueba de esta autorizaci\xf3n, as\xed como el derecho a revocar el consentimiento otorgado y que puedo ejercer mis derechos a trav\xe9s de los canales dispuestos por el Municipio de Medell\xedn, a saber, el portal web www.medellin.gov.co, la L\xednea de Atenci\xf3n 4444144, en el Centro de Servicios a la Ciudadan\xeda, ubicado en la Calle 44 N 52 – 165 Centro Administrativo la Alpujarra, o en una de sus sedes externas, es decir, Casas de Gobierno, Mas cerca y Centros de Servicios al Ciudadano (pueden consultarse en la L\xednea de Atenci\xf3n). As\xed, autorizo de manera voluntaria, previa, expl\xedcita, informada e inequ\xedvoca al Municipio de Medell\xedn para tratar mis datos y para que la informaci\xf3n por mi suministrada sea incluida en las bases de datos de esta entidad, para llevar a cabo acciones tendientes al cumplimiento de su objeto misional y, espec\xedficamente, para el desarrollo del objetivo del Programa Social Banco de los Pobres, fundamentalmente contribuir al mejoramiento de la calidad de vida de los habitantes del Municipio de Medell\xedn a trav\xe9s de la concesi\xf3n de microcr\xe9ditos por medio de los cuales se financien proyectos rentables y sostenibles en el tiempo, que permitan el desarrollo de microempresas y la generaci\xf3n de empleo productivo, fortalecer la cultura de la legalidad, brindar acompa\xf1amiento financiero y contribuir con el desarrollo de los dem\xe1s programas y proyectos de la Administraci\xf3n Municipal. Igualmente autorizo para compartir mis datos personales con terceros aliados o contratistas del Municipio de Medell\xedn, con el objeto de que le presten servicios a \xe9ste o en nombre de \xe9ste, o para la ejecuci\xf3n de estrategias o programas conjuntos, as\xed como con otras entidades del orden departamental y nacional y, concretamente, con los operadores que ofrezcan, administren y gestionen las l\xedneas de cr\xe9dito del Banco de los Pobres, o a quien represente sus derechos u ostente la calidad de acreedor, a quienes conjuntamente autorizo para que consulten, reporten, modifiquen, actualicen y rectifiquen, mi informaci\xf3n comercial, financiera y crediticia ante las centrales de riesgo crediticio, o ante cualquier otra entidad que administre bases de datos con los fines legalmente definidos para este tipo de servicios. Declaro que la informaci\xf3n suministrada es correcta, veraz, verificable y actualizada, a la fecha de suscripci\xf3n de la presente autorizaci\xf3n, y me comprometo a actualizarla inmediatamente en caso de alguna modificaci\xf3n. Igualmente que esta solicitud es exacta en todas sus partes y en caso de comprobarse alguna inexactitud ser\xe1 causal de rechazo; as\xed mismo declaro que he sido informado sobre las caracter\xedsti- cas, tarifas, garant\xedas, seguros y dem\xe1s condiciones de los productos y/o servicios que solicito y que podr\xe9 consultarlas directamente ante la entidad que ofrece el producto."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            className: "font-semibold flex justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                    type: "checkbox",
                                    name: "terminos_condiciones",
                                    className: "mr-4"
                                }),
                                "\xbfEstoy de acuerdo con los t\xe9rminos y condiciones?"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.ErrorMessage, {
                            name: "terminos_condiciones",
                            component: "div",
                            className: "text-xs text-red-500 flex justify-center"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "mt-4 text-xs text-justify",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "Codeudor:"
                                }),
                                " El cual debe estar entre los 18 y 75 a\xf1os y que resida en el territorio nacional. Este codeudor no podr\xe1 presentar ning\xfan tipo de mora o reporte en las centrales de riesgo. El codeudor no podr\xe1 se codeudor de dos o m\xe1s personas en el Banco de los Pobres y tampoco pordr\xe1 solicitar cr\xe9dito como titular con el mismo. 1. Codeudor con contrato laboral: Se aceptar\xe1n codeudores que est\xe9n vinculados mediante contratos t\xe9rmino indefinido, con un ingreso m\xednimo de dos (2) SMLMV. Para acreditar lo anterior deber\xe1 presentar los siguientes documentos: a. Fotocopia ampliada de la c\xe9dula de ciudadan\xeda al 200%. b. Certificaci\xf3n laboral expedida por la empresa o entidad en donde labora, especificando el tipo de vinculaci\xf3n y salario, no superior a (30) d\xedas de expedici\xf3n. c. Copia de las dos \xfaltimas colillas de pago. 2. Codeudor con propiedad ra\xedz: a. Certificado de tradici\xf3n y libertad del inmueble. Este certificado no debe tener m\xe1s de (30) d\xedas de expedici\xf3n. La propiedad ra\xedz deber\xe1 estar ubicada en el Departamento de Antioquia. b. Fotocopia ampliada de la c\xe9dula de ciudadan\xeda al 200%. c. Fotocopia del recibo del impuesto predial. d. El inmueble no podr\xe1 tener Afectaci\xf3n a Vivienda Familiar, Patrimonio de Familia o presentar Embargos. PAR\xc1GRAFO: Cuando el cr\xe9dito sea superior a 10 (diez) SMLMV, se requiere un codeudor que posea una propiedad ra\xedz y su aval\xfao catastral tenga un valor superior de diecisiete (17) SMLMV."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "mt-4 p-2 w-1/3 text-white rounded-full bg-color_primary_2_ligth flex justify-center mx-auto ",
                            children: "Siguiente"
                        })
                    ]
                }));
            }
        })
    }));
};
/* harmony default export */ const FormCodeudor_HabbeasData = (HabbeasData);

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/Contact/DataCodeudorContact.js
const DataCodeudorContact_classInput = 'h-10 border border-gray-400 px-4';
const DataContactCitizenForm = [
    {
        id: 34,
        name: 'vivienda',
        fieldName: 'Vivienda',
        type: 'select',
        className: `${DataCodeudorContact_classInput}`,
        options: [
            // {
            //   id: 34.01,
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 34.1,
                name: 'Propia',
                fieldName: 'Propia'
            },
            {
                id: 34.2,
                name: 'Familiar',
                fieldName: 'Familiar'
            },
            {
                id: 34.3,
                name: 'Arrendada',
                fieldName: 'Arrendada'
            }, 
        ]
    }, 
];
//
//   {
//     id: 38,
//     name: "comuna",
//     fieldName: "Comuna",
//     type: "text",
//     className: `${classInput}`,
//   },
//   {
//     id: 37,
//     name: "barrio_vereda",
//     fieldName: "Barrio o vereda",
//     type: "text",
//     className: `${classInput}`,
//   },
const Datacontact = [
    {
        id: 35,
        name: 'direccion',
        fieldName: 'Direcci\xf3n',
        type: 'text',
        className: `${DataCodeudorContact_classInput}`
    },
    {
        id: 36,
        name: 'estrato',
        fieldName: 'Estrato',
        type: 'select',
        className: `${DataCodeudorContact_classInput}`,
        options: [
            {
                id: 1,
                name: 1,
                fieldName: 'Estrato 1'
            },
            {
                id: 2,
                name: 2,
                fieldName: 'Estrato 2'
            },
            {
                id: 3,
                name: 3,
                fieldName: 'Estrato 3'
            }, 
        ]
    },
    {
        id: 39,
        name: 'telefono',
        fieldName: 'Tel\xe9fono',
        type: 'number',
        className: `${DataCodeudorContact_classInput}`
    },
    {
        id: 40,
        name: 'celular',
        fieldName: 'N\xfamero Celular',
        type: 'number',
        className: `${DataCodeudorContact_classInput}`
    },
    {
        id: 41,
        name: 'correo',
        fieldName: 'Correo electr\xf3nico',
        type: 'email',
        className: `${DataCodeudorContact_classInput}`
    }, 
];

// EXTERNAL MODULE: ./utils/ListaComunasBarriosMedellin.js
var ListaComunasBarriosMedellin = __webpack_require__(1859);
;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/Contact/index.js














const Contact_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const Contact = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const [hide, setHide] = external_react_.useState(false);
    const initialValuesForm = {
        vivienda: '',
        direccion: '',
        estrato: '',
        barrio_vereda: '',
        comuna: '',
        telefono: '',
        celular: '',
        correo: props.correo || '',
        nombre_arrendador: '',
        telefono_arrendador: ''
    };
    const comunasObj = {};
    ListaComunasBarriosMedellin/* ListaComunasBarriosMedellin.forEach */.u.forEach((el)=>{
        comunasObj[el.COMUNA] = el.NOMBRE_COMUNA;
    });
    const [initialValues, setInitialValues] = external_react_.useState(initialValuesForm);
    const [loading, setLoading] = external_react_.useState(true);
    const [onErrGet, setOnErrGet] = external_react_.useState(null);
    const [onErrPost, setOnErrPost] = external_react_.useState(null);
    external_react_.useEffect(async ()=>{
        try {
            const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitud}?seccion=${paso}`;
            const { response , error  } = await (0,getData/* getData */.Y)(URL_GET_STEP_FORM);
            if (!error) {
                const info = await response.json();
                if (response.status === 404) {
                    setInitialValues(initialValues);
                    setOnErrGet(null);
                    setLoading(false);
                }
                if (response.status === 401) {
                    setLoading(false);
                    setOnErrGet('Hubo un error al consultar la informaci\xf3n del cr\xe9dito, por favor intenta nuevamente');
                }
                if (response.status === 200) {
                    setInitialValues({
                        ...info
                    });
                    setOnErrGet(null);
                    setLoading(false);
                }
            } else {
                window.localStorage.clear();
                push('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }, []);
    const handleBack = ()=>{
        router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_3&rol=${rol}`);
    };
    return loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading ...."
    }) : onErrGet ? /*#__PURE__*/ jsx_runtime_.jsx(_error["default"], {
        message: onErrGet
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: ` mb-8`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: external_yup_.object({
                vivienda: external_yup_.string().required('requerido'),
                direccion: external_yup_.string().required('requerido'),
                estrato: external_yup_.number().typeError('Debe ser numero').required('requerido').positive(),
                barrio_vereda: external_yup_.string().required('requerido'),
                comuna: external_yup_.string().required('requerido'),
                telefono: external_yup_.number().typeError('Debe ser numero').notRequired().positive(),
                celular: external_yup_.number().typeError('Debe ser numero').required('requerido').positive(),
                correo: external_yup_.string().email().notRequired(),
                nombre_arrendador: external_yup_.string().notRequired().nullable(true),
                telefono_arrendador: external_yup_.number().notRequired().nullable(true)
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_codeudor: {
                            ...prevState.formulario_individual,
                            contacto: {
                                ...value
                            }
                        }
                    })
                );
                const dataToSend = {
                    seccion: 'FCO_4',
                    solicitud_id: props.solicitud_id || solicitud
                };
                if (value.vivienda !== 'Arrendada') {
                    const { estrato , ...dataContant } = value;
                    dataToSend.data = {
                        ...dataContant,
                        nombre_arrendador: null,
                        telefono_arrendador: null,
                        estrato: Number(estrato)
                    };
                } else {
                    const { telefono , celular , telefono_arrendador , estrato , ...dataContant } = value;
                    dataToSend.data = {
                        telefono: Number(telefono),
                        celular: Number(celular),
                        estrato: Number(estrato),
                        telefono_arrendador: Number(telefono_arrendador),
                        ...dataContant
                    };
                }
                try {
                    const { responseComplete  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (responseComplete) {
                        props.setIsCompletedContactCitizen(true);
                        props.setCurrent(props.current + 1);
                        router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_5&rol=${rol}`);
                    //   props.setCurrent(props.current + 1)
                    //   setHide(true)
                    } else {
                        props.setIsCompletedContactCitizen(false);
                        setOnErrPost(`No fue posible almacenar estos datos, revisa la información e Intenta más tarde`);
                        setTimeout(()=>{
                            setOnErrPost(null);
                        }, 5000);
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            children: ({ values  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        DataContactCitizenForm.map((field)=>{
                            if (field.type === 'select') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx(SelectionInput/* default */.Z, {
                                    id: field.id,
                                    label: field.fieldName,
                                    name: field.name,
                                    className: field.className,
                                    options: field.options,
                                    render: (option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: option.name,
                                            children: option.fieldName
                                        }, option.id)
                                }, field.id));
                            }
                        }),
                        values.vivienda === 'Arrendada' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                    label: 'Nombre del arrendador',
                                    name: 'nombre_arrendador',
                                    type: "text",
                                    className: "h-10 border border-gray-400 px-4 w-full"
                                }, "nombre_arrendador"),
                                /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                    label: 'Telefono',
                                    name: 'telefono_arrendador',
                                    type: 'number',
                                    className: "h-10 border border-gray-400 px-4 w-full"
                                }, 'telefono_arrendador')
                            ]
                        }) : null,
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectionInput/* default */.Z, {
                            id: 'comuna',
                            label: 'Comuna',
                            name: 'comuna',
                            className: 'h-10 border border-gray-400 px-4',
                            options: Object.values(comunasObj),
                            render: (option, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: `${option}`,
                                    children: `${option}`
                                }, index)
                        }, 'comuna'),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectionInput/* default */.Z, {
                            id: 'barrio_vereda',
                            label: 'Barrio o Vereda',
                            name: 'barrio_vereda',
                            className: 'h-10 border border-gray-400 px-4',
                            options: ListaComunasBarriosMedellin/* ListaComunasBarriosMedellin.filter */.u.filter((barrio)=>barrio.NOMBRE_COMUNA === values.comuna
                            ),
                            render: (option, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: `${option.BARRIO}-${option.NOMBRE_BARRIO}`,
                                    children: `${option.NOMBRE_BARRIO}`
                                }, index)
                        }, 'barrio_vereda'),
                        Datacontact.map((field)=>{
                            if (field.type === 'select') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx(SelectionInput/* default */.Z, {
                                    id: field.id,
                                    label: field.fieldName,
                                    name: field.name,
                                    className: field.className,
                                    options: field.options,
                                    render: (option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: option.name,
                                            children: option.fieldName
                                        }, option.id)
                                }, field.id));
                            }
                            if (field.type === 'tel') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx(TelInput/* default */.Z, {
                                    label: field.fieldName,
                                    name: field.name,
                                    type: field.type,
                                    className: field.className
                                }, field.id));
                            }
                            if (field.type === 'date') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DateInput/* default */.Z, {
                                        label: field.fieldName,
                                        name: field.name,
                                        type: field.type,
                                        className: field.className
                                    }, field.id)
                                }, field.id));
                            }
                            return(/*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                label: field.fieldName,
                                name: field.name,
                                type: field.type,
                                className: field.className
                            }, field.id));
                        }),
                        onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: Contact_ERROR_CLASS,
                            children: onErrPost
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    onClick: handleBack,
                                    className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500",
                                    children: "Anterior"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                    children: "Siguiente"
                                })
                            ]
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const FormCodeudor_Contact = (Contact);

;// CONCATENATED MODULE: ./components/Forms/FormCodeudor/index.js









// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(2280);
// EXTERNAL MODULE: ./components/protected-route.jsx
var protected_route = __webpack_require__(840);
// EXTERNAL MODULE: ./components/Banner.js
var Banner = __webpack_require__(3865);
// EXTERNAL MODULE: ./components/MultiStepIndicator.js
var MultiStepIndicator = __webpack_require__(5012);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
;// CONCATENATED MODULE: ./pages/codeudor/[...usuario].js











function Codeudor({ primer_nombre ='' , segundo_nombre ='' , primer_apellido ='' , segundo_apellido ='' , correo ='' , num_identificacion ='' ,  }) {
    const router = (0,router_.useRouter)();
    const { paso , rol , usuario  } = router.query;
    const [current, setCurrent] = external_react_.useState(0);
    const sectionForm = {
        isCompletedBasicInformation: false,
        isCompletedInfoMate: false,
        isCompletedPopulationVariables: false,
        isCompletedIncomeAndExpense: false,
        isCompletedBienesRaices: false,
        isCompletedPersonalReference: false,
        isCompletedHabbeasData: false
    };
    const [, setIsCompletedContactCitizen] = external_react_.useState(false);
    const reducer = (state, action)=>{
        switch(action.type){
            case 'update':
                return {
                    ...state,
                    [action.fieldName]: action.payload
                };
            default:
                return state;
        }
    };
    const [, dispatch] = external_react_.useReducer(reducer, sectionForm);
    const [form, setForm] = external_react_.useState({
        formulario_codeudor: {}
    });
    const [solicitud_id, setSolicitud_id] = external_react_.useState('');
    const [showModal, setShowModal] = external_react_.useState(false);
    const [, setShowPreRequisitos] = external_react_.useState(true);
    external_react_.useEffect(()=>{
        if ([
            'ASESOR',
            'ADMINISTRADOR',
            'SUPERADMINISTRADOR'
        ].includes(rol)) {
            setShowModal(false);
            setShowPreRequisitos(false);
        }
    }, [
        rol
    ]);
    const handleBack = ()=>{
        router.push(`/codeudor/${usuario[0]}/${solicitud_id || usuario[1]}?paso=FCO_7&rol=${rol}`);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(protected_route/* ProtectedRoute */.i, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Banner/* default */.Z, {
                    title: "Est\xe1s a un paso de cumplir tus sue\xf1os",
                    image_url: `${"/bancopobres"}/solicitud-banner.png`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "bg-color_gray_2 pb-24",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-wrapper pt-14 px-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center mb-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-3xl font-bold",
                                    children: "Formulario de Codeudor"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-screen md:w-10/12 mx-auto mb-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(MultiStepIndicator/* default */.Z, {
                                    current: current,
                                    paso: paso,
                                    solicitud_id: solicitud_id,
                                    usuario: usuario,
                                    rol: rol,
                                    form_type: "codeudor"
                                })
                            }),
                            showModal && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "modal-root",
                                className: "absolute inset-y-0 inset-x-0 m-auto h-3/4 backdrop-blur-md"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
                                Component: ()=>/*#__PURE__*/ jsx_runtime_.jsx(FormCodeudor_HabbeasData, {
                                        form,
                                        setForm,
                                        setShowModal
                                    })
                                ,
                                modalProps: {
                                    showModal,
                                    setShowModal
                                }
                            }),
                            [
                                'ASESOR',
                                'ADMINISTRADOR',
                                'SUPERADMINISTRADOR'
                            ].includes(rol) ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-9/12 mx-auto mb-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/backoffice",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "btn-secundario",
                                        children: "Volver a backoffice"
                                    })
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:w-9/12 mx-auto",
                                children: [
                                    paso === 'FCO_1' ? /*#__PURE__*/ jsx_runtime_.jsx(BasicInformation, {
                                        dispatch: dispatch,
                                        form: form,
                                        setForm: setForm,
                                        setSolicitud_id: setSolicitud_id,
                                        setCurrent: setCurrent,
                                        current: current,
                                        userInfo: {
                                            primer_nombre,
                                            segundo_nombre,
                                            primer_apellido,
                                            segundo_apellido,
                                            num_identificacion
                                        }
                                    }) : null,
                                    paso === 'FCO_2' ? /*#__PURE__*/ jsx_runtime_.jsx(FormCodeudor_InfoMate, {
                                        dispatch: dispatch,
                                        form: form,
                                        setForm: setForm,
                                        solicitud_id: solicitud_id,
                                        setCurrent: setCurrent,
                                        current: current
                                    }) : null,
                                    paso === 'FCO_3' ? /*#__PURE__*/ jsx_runtime_.jsx(populationVariables, {
                                        dispatch: dispatch,
                                        form: form,
                                        setForm: setForm,
                                        solicitud_id: solicitud_id,
                                        setCurrent: setCurrent,
                                        current: current
                                    }) : null,
                                    paso === 'FCO_4' ? /*#__PURE__*/ jsx_runtime_.jsx(FormCodeudor_Contact, {
                                        correo: correo,
                                        setIsCompletedContactCitizen: setIsCompletedContactCitizen,
                                        form: form,
                                        setForm: setForm,
                                        solicitud_id: solicitud_id,
                                        setCurrent: setCurrent,
                                        current: current
                                    }) : null,
                                    paso === 'FCO_5' ? /*#__PURE__*/ jsx_runtime_.jsx(FormCodeudor_IncomeAndExpense, {
                                        dispatch: dispatch,
                                        form: form,
                                        setForm: setForm,
                                        solicitud_id: solicitud_id,
                                        setCurrent: setCurrent,
                                        current: current
                                    }) : null,
                                    paso === 'FCO_6' ? /*#__PURE__*/ jsx_runtime_.jsx(FormCodeudor_BienesRaices, {
                                        dispatch: dispatch,
                                        form: form,
                                        setForm: setForm,
                                        solicitud_id: solicitud_id,
                                        setCurrent: setCurrent,
                                        current: current
                                    }) : null,
                                    paso === 'FCO_7' ? /*#__PURE__*/ jsx_runtime_.jsx(PersonalReferences, {
                                        dispatch: dispatch,
                                        form: form,
                                        setForm: setForm,
                                        solicitud_id: solicitud_id,
                                        setCurrent: setCurrent,
                                        current: current
                                    }) : null,
                                    paso === 'FCO_8' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-center text-lg font-semibold",
                                                children: "Felicidades. Formulario completado"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-around",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        onClick: handleBack,
                                                        className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500",
                                                        children: "Anterior"
                                                    }),
                                                    rol === 'USUARIO' && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "button",
                                                            className: "mt-6 p-4 w-2/5 text-white rounded-full bg-color_primary_2_ligth",
                                                            value: "home",
                                                            children: " Inicio"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : null
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
async function getServerSideProps(context) {
    const sessionInfo = (0,protect_route_server/* protectRouteAndRedirect */.G)(context.req, context.res);
    if (sessionInfo.redirect) return sessionInfo;
    const { params , query  } = context;
    const { rol  } = query;
    const [cedula] = params.usuario;
    if (rol === 'USUARIO') {
        const responseFetch = await (0,custom_fetch/* customFetch */.rK)(`roles/listar-usuario-rol/${cedula}`, {
            type: custom_fetch/* RequestTypes.auth */.lO.auth,
            headers: {
                Authorization: `Bearer ${sessionInfo.token}`
            }
        });
        if (responseFetch.status == 200) {
            const dataUser = await responseFetch.json();
            var { nombres , apellidos , cedula: num_identificacion , correo  } = dataUser;
            var [primer_nombre, segundo_nombre] = nombres.split(' ') || [
                null,
                null
            ];
            var [primer_apellido, segundo_apellido] = apellidos.split(' ') || null;
            if (!primer_nombre) {
                primer_nombre = null;
            }
            if (!segundo_nombre) {
                segundo_nombre = null;
            }
            if (!primer_apellido) {
                primer_apellido = null;
            }
            if (!segundo_apellido) {
                segundo_apellido = null;
            }
            if (!num_identificacion) {
                num_identificacion = null;
            }
            if (!correo) {
                correo = null;
            }
        } else {
            primer_nombre = null;
            segundo_nombre = null;
            primer_apellido = null;
            segundo_apellido = null;
            num_identificacion = null;
            correo = null;
        }
    } else {
        primer_nombre = null;
        segundo_nombre = null;
        primer_apellido = null;
        segundo_apellido = null;
        num_identificacion = null;
        correo = null;
    }
    return {
        props: {
            primer_nombre,
            segundo_nombre,
            primer_apellido,
            segundo_apellido,
            num_identificacion,
            correo
        }
    };
}


/***/ }),

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

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

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986,6795,843,840,6135,4780,7576,3491,6613], () => (__webpack_exec__(4989)));
module.exports = __webpack_exports__;

})();