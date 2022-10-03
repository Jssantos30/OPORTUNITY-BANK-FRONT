"use strict";
(() => {
var exports = {};
exports.id = 3380;
exports.ids = [3380,4820,9792];
exports.modules = {

/***/ 7224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Individual),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
;// CONCATENATED MODULE: ./components/Forms/FormIndividual/BasicInformation/DataBasicInformationForm.js
const classInput = 'h-10 border border-gray-400 px-4 ';
const DataBasicInformationForm = [
    {
        id: 9,
        name: 'tipo_identificacion',
        fieldName: 'Tipo de identificacion',
        type: 'select',
        className: `${classInput}`,
        options: [
            {
                id: 9.2,
                name: 'C.C',
                fieldName: 'C.C'
            },
            {
                id: 9.3,
                name: 'C.E',
                fieldName: 'C.E',
                className: ''
            }, 
        ]
    },
    {
        id: 10,
        name: 'num_identificacion',
        fieldName: 'No. De identificaci\xf3n',
        type: 'number',
        className: `${classInput}`
    },
    {
        id: 11,
        name: 'seguridad_social',
        fieldName: 'Seguridad Social',
        type: 'select',
        className: `${classInput}`,
        options: [
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
        id: 12,
        name: 'primer_nombre',
        fieldName: 'Primer Nombre',
        type: 'text',
        className: `${classInput}`
    },
    {
        id: 13,
        name: 'segundo_nombre',
        fieldName: 'Segundo Nombre',
        type: 'text',
        className: `${classInput}`
    },
    {
        id: 14,
        name: 'primer_apellido',
        fieldName: 'Primer Apellido',
        type: 'text',
        className: `${classInput}`
    },
    {
        id: 15,
        name: 'segundo_apellido',
        fieldName: 'Segundo Apellido',
        type: 'text',
        className: `${classInput}`
    },
    {
        id: 16,
        name: 'fecha_nacimiento',
        fieldName: 'Fecha de nacimiento',
        type: 'date',
        className: `${classInput}`
    },
    {
        id: 17,
        name: 'razon_social',
        fieldName: `Razón Social`,
        type: 'text',
        className: `${classInput}`
    },
    {
        id: 18,
        name: 'nit',
        fieldName: 'NIT',
        type: 'number',
        className: `${classInput}`
    }, 
];

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: ./components/Forms/SelectionInput.js
var SelectionInput = __webpack_require__(3491);
// EXTERNAL MODULE: ./components/Forms/TextInput.js
var TextInput = __webpack_require__(7576);
// EXTERNAL MODULE: ./components/Forms/DateInput.js
var DateInput = __webpack_require__(2035);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(843);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/getData.js
var getData = __webpack_require__(6960);
// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__(6135);
;// CONCATENATED MODULE: ./components/Forms/FormIndividual/BasicInformation/index.js












const prerrequisitosDefault = {
    terminos_condiciones: true,
    rango_edad: true,
    estrato_valido: true,
    no_central_riesgo: true,
    no_deudas_vigentes: true,
    ubicacion_negocio: true
};
const ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const BasicInformationForm = (props1)=>{
    const { primer_nombre , segundo_nombre , primer_apellido , segundo_apellido , num_identificacion ,  } = props1.userInfo;
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const [disableInput, setDisableInput] = external_react_.useState(false);
    external_react_.useEffect(()=>{
        if (!num_identificacion) {
            setDisableInput(false);
        } else {
            setDisableInput(true);
        }
    }, []);
    const initialValuesForm = {
        razon_social: '',
        nit: '',
        tipo_identificacion: '',
        num_identificacion: num_identificacion || '',
        seguridad_social: '',
        primer_nombre: primer_nombre || '',
        segundo_nombre: segundo_nombre || '',
        primer_apellido: primer_apellido || '',
        segundo_apellido: segundo_apellido || '',
        fecha_nacimiento: '',
        edad: ''
    };
    const [initialValues, setInitialValues] = external_react_.useState(initialValuesForm);
    const [preReq, setpreReq] = external_react_.useState(undefined);
    const [loading, setLoading] = external_react_.useState(false);
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
                        ...info.persona,
                        edad: ''
                    });
                    setpreReq({
                        ...info.prerrequisitos
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
    const [hide, setHide] = external_react_.useState(false);
    function calculateAge1(date) {
        const currentDate = new Date().getFullYear();
        const birthDate = new Date(date);
        const birthYear = birthDate.getFullYear();
        const calculateAge = Math.floor(currentDate - birthYear);
        return Number(calculateAge);
    }
    function InputAge(props) {
        const { fecha_nacimiento , setFieldValue  } = props;
        external_react_.useEffect(()=>{
            if (fecha_nacimiento !== '') {
                const age = calculateAge1(fecha_nacimiento);
                setFieldValue('edad', age);
            }
        }, [
            fecha_nacimiento
        ]);
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    className: "hidden",
                    children: "Edad"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                    type: "text",
                    disabled: true,
                    placeholder: "Edad",
                    name: "edad",
                    className: "hidden"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.ErrorMessage, {
                    name: "edad"
                })
            ]
        }));
    }
    return loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading"
    }) : onErrGet ? /*#__PURE__*/ jsx_runtime_.jsx(_error["default"], {
        message: onErrGet
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${hide && 'hidden'} mb-8`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: external_yup_.object({
                razon_social: external_yup_.string().nullable(true),
                nit: external_yup_.number().typeError('Debe ser un n\xfamero').positive(' Debe ser mayor a 0').nullable(true),
                tipo_identificacion: external_yup_.string().required('requerido').oneOf([
                    'C.C',
                    'C.E'
                ]),
                num_identificacion: external_yup_.number().typeError('Debe ser un n\xfamero').required('requerido').positive('Debe ser mayor a 0'),
                seguridad_social: external_yup_.string().required('requerido').oneOf([
                    'EPS',
                    'Sisb\xe9n',
                    'N/a'
                ]),
                primer_nombre: external_yup_.string().required('requerido').max(20, 'No puede exceder a 20 caract\xe9res').matches('^[a-zA-Z\xd1\xf1\xe0\xe8\xec\xf2\xf9\xc0\xc8\xcc\xd9\xd2\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xda\xd3 ]+$', 'No se permiten n\xfameros ni caracteres especiales.'),
                segundo_nombre: external_yup_.string().notRequired().max(20, 'No puede exceder a 20 caract\xe9res').matches('^[a-zA-Z\xd1\xf1\xe0\xe8\xec\xf2\xf9\xc0\xc8\xcc\xd9\xd2\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xda\xd3 ]+$', 'No se permiten n\xfameros ni caracteres especiales.').nullable(true),
                primer_apellido: external_yup_.string().required('requerido').max(20, 'No puede exceder a 20 caract\xe9res').matches('^[a-zA-Z\xd1\xf1\xe0\xe8\xec\xf2\xf9\xc0\xc8\xcc\xd9\xd2\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xda\xd3 ]+$', 'No se permiten n\xfameros ni caracteres especiales.'),
                segundo_apellido: external_yup_.string().notRequired().max(20, 'No puede exceder a 20 caract\xe9res').matches('^[a-zA-Z\xd1\xf1\xe0\xe8\xec\xf2\xf9\xc0\xc8\xcc\xd9\xd2\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xda\xd3 ]+$', 'No se permiten n\xfameros ni caracteres especiales.').nullable(true),
                fecha_nacimiento: external_yup_.date().required('requerido').test('age', 'Debes tener entre 18 y 75', function validateAge(edad) {
                    const currentDate = new Date().getFullYear();
                    const birthDate = new Date(edad);
                    const birthYear = birthDate.getFullYear();
                    const calculateAge = Math.floor(currentDate - birthYear);
                    return Number(calculateAge) >= 18 && Number(calculateAge) <= 75;
                }),
                edad: external_yup_.number().typeError('Debe ser un n\xfamero').min(18, 'Debes tener 18 a\xf1os').max(75, 'Debes tener menos de 75').positive('\xbfEs en serio?').notRequired()
            }),
            onSubmit: async (value)=>{
                props1.setForm((prevState)=>({
                        ...prevState,
                        formulario_individual: {
                            ...prevState.formulario_individual,
                            informacion_basica: {
                                ...value
                            }
                        }
                    })
                );
                const { nit , razon_social , ...infoBasic } = value;
                const dataToSend = {
                    seccion: 'FDE_2',
                    data: {
                        prerrequisitos: preReq || prerrequisitosDefault || {
                            ...props1.form.formulario_individual.autorizacion_datos_personales,
                            ...props1.form.formulario_individual.datos_prerequisitos
                        }
                    }
                };
                if (solicitud) {
                    dataToSend.solicitud_id = solicitud;
                }
                if (razon_social === '') {
                    dataToSend.data.persona = {
                        razon_social: null,
                        ...infoBasic,
                        nit
                    };
                } else {
                    dataToSend.data.persona = {
                        ...infoBasic,
                        razon_social,
                        nit
                    };
                }
                if (nit === '') {
                    dataToSend.data.persona = {
                        ...infoBasic,
                        razon_social,
                        nit: null
                    };
                } else {
                    dataToSend.data.persona = {
                        ...infoBasic,
                        nit: Number(nit),
                        razon_social
                    };
                }
                dataToSend.data.persona.edad && delete dataToSend.data.persona.edad;
                try {
                    const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (error) {
                        window.localStorage.clear();
                        push('/login');
                        return;
                    }
                    if (responseComplete) {
                        props1.setSolicitud_id(res.solicitud_credito);
                        props1.setIsCompletedBasicInformation(true);
                        props1.setCurrent(props1.current + 1);
                        router.push(`/individual/${value.num_identificacion || cedula}/${res.solicitud_credito || solicitud}?paso=FDE_3&rol=${rol}`);
                    //setHide(true)
                    } else {
                        props1.setIsCompletedBasicInformation(false);
                        setOnErrPost(`Intenta más tarde`);
                        setTimeout(()=>{
                            setOnErrPost(null);
                        }, 5000);
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            children: (values)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        DataBasicInformationForm.map((field)=>{
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
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(DateInput/* default */.Z, {
                                            label: field.fieldName,
                                            name: field.name,
                                            type: field.type
                                        }, field.id),
                                        /*#__PURE__*/ jsx_runtime_.jsx(InputAge, {
                                            fecha_nacimiento: values.values.fecha_nacimiento,
                                            setFieldValue: values.setFieldValue
                                        })
                                    ]
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
                            return(/*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                label: field.fieldName,
                                name: field.name,
                                type: field.type,
                                className: field.className
                            }, field.id));
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
                })
        })
    });
};
/* harmony default export */ const BasicInformation = (BasicInformationForm);

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/ContactCitizenForm/DataContactCitizen.js
const DataContactCitizen_classInput = 'h-10 border border-gray-400 px-4';
const DataContactCitizenForm = [
    {
        id: 34,
        name: 'vivienda',
        fieldName: 'Vivienda',
        type: 'select',
        className: `${DataContactCitizen_classInput}`,
        options: [
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
const Datacontact = [
    {
        id: 35,
        name: 'direccion',
        fieldName: 'Direcci\xf3n',
        type: 'text',
        className: `${DataContactCitizen_classInput}`
    },
    {
        id: 36,
        name: 'estrato',
        fieldName: 'Estrato',
        type: 'select',
        className: `${DataContactCitizen_classInput}`,
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
        className: `${DataContactCitizen_classInput}`
    },
    {
        id: 40,
        name: 'celular',
        fieldName: 'N\xfamero Celular',
        type: 'number',
        className: `${DataContactCitizen_classInput}`
    },
    {
        id: 41,
        name: 'correo',
        fieldName: 'Correo electr\xf3nico',
        type: 'email',
        className: `${DataContactCitizen_classInput}`
    }, 
];

// EXTERNAL MODULE: ./components/Forms/TelInput.js
var TelInput = __webpack_require__(5498);
// EXTERNAL MODULE: ./utils/ListaComunasBarriosMedellin.js
var ListaComunasBarriosMedellin = __webpack_require__(1859);
;// CONCATENATED MODULE: ./components/Forms/FormIndividual/ContactCitizenForm/index.js














const ContactCitizenForm_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const ContactCitizenForm = (props)=>{
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
        setLoading(true);
        try {
            const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitud}?seccion=${paso}&rol=${rol}`;
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
        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_5&rol=${rol}`);
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
        className: `${hide && 'hidden'} mb-8`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: external_yup_.object({
                vivienda: external_yup_.string().required('requerido'),
                direccion: external_yup_.string().required('requerido'),
                estrato: external_yup_.number().required('requerido'),
                barrio_vereda: external_yup_.string().required('requerido'),
                comuna: external_yup_.string().required('requerido'),
                telefono: external_yup_.string().required('requerido').min(7, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').max(20, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.'),
                celular: external_yup_.string().required('requerido').min(10, 'Ingresa un n\xfamero de celular v\xe1lido.').max(20, 'Ingresa un n\xfamero de celular v\xe1lido.'),
                correo: external_yup_.string().email().required('requerido'),
                nombre_arrendador: external_yup_.string().when('vivienda', {
                    is: (vivienda)=>vivienda == 'Arrendada'
                    ,
                    then: external_yup_.string().required('requerido').typeError('Ingresa un nombre v\xe1lido'),
                    otherwise: external_yup_.string().notRequired().nullable(true)
                }),
                telefono_arrendador: external_yup_.string().when('vivienda', {
                    is: (vivienda)=>vivienda == 'Arrendada'
                    ,
                    then: external_yup_.string().required('requerido').min(7, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').max(20, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').typeError('Ingresa un n\xfamero de tel\xe9fono v\xe1lido.'),
                    otherwise: external_yup_.string().notRequired().nullable(true)
                })
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_individual: {
                            ...prevState.formulario_individual,
                            contacto: {
                                ...value,
                                estrato: parseInt(value.estrato)
                            }
                        }
                    })
                );
                const dataToSend = {
                    seccion: 'FDE_6',
                    solicitud_id: props.solicitud_id || solicitud
                };
                if (value.vivienda !== 'Arrendada') {
                    const { estrato , ...dataContant } = value;
                    dataToSend.data = {
                        ...dataContant,
                        estrato: Number(estrato),
                        nombre_arrendador: null,
                        telefono_arrendador: null
                    };
                } else {
                    const { telefono , celular , telefono_arrendador , estrato , ...dataContant } = value;
                    dataToSend.data = {
                        telefono: Number(telefono),
                        celular: Number(celular),
                        nombre_arrendador: nombre_arrendador || '',
                        telefono_arrendador: Number(telefono_arrendador) || '',
                        estrato: Number(estrato),
                        ...dataContant
                    };
                }
                try {
                    const { responseComplete  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (responseComplete) {
                        props.setIsCompletedContactCitizen(true);
                        props.setCurrent(props.current + 1);
                        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_7&rol=${rol}`);
                    //setHide(true)
                    } else {
                        props.setIsCompletedContactCitizen(false);
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
                            className: ContactCitizenForm_ERROR_CLASS,
                            children: onErrPost
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    onClick: ()=>handleBack(values)
                                    ,
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
/* harmony default export */ const FormIndividual_ContactCitizenForm = (ContactCitizenForm);

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/CreditDestination/DataDestinationCreditForm.js
const DataDestinationCreditForm_classInput = 'h-10 border border-gray-400 px-4';
const DataDestinationCreditForm = [
    {
        id: 1,
        name: 'tipo_solicitud',
        fieldName: 'Tipo de Solicitud',
        type: 'select',
        className: `${DataDestinationCreditForm_classInput}`,
        options: [
            // {
            //   id: 1.0,
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 1.1,
                name: 'Creacion',
                fieldName: 'Creaci\xf3n'
            },
            {
                id: 1.2,
                name: 'Fortalecimiento',
                fieldName: 'Fortalecimiento'
            }, 
        ]
    },
    {
        id: 2,
        name: 'linea_credito',
        fieldName: 'L\xednea de cr\xe9dito',
        type: 'select',
        className: `${DataDestinationCreditForm_classInput}`,
        options: [
            // {
            //   id: 2.0,
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 2.1,
                name: 'Microempresarial',
                fieldName: 'Microempresarial'
            },
            {
                id: 2.2,
                name: 'Capital Semilla',
                fieldName: 'Capital Semilla'
            },
            {
                id: 2.3,
                name: 'Agroindustrial',
                fieldName: 'Agroindustrial'
            },
            {
                id: 2.4,
                name: 'Venteros Informales',
                fieldName: 'Venteros Informales'
            }, 
        ]
    },
    {
        id: 3,
        name: 'tipo_credito',
        fieldName: 'Cr\xe9dito',
        type: 'select',
        className: `${DataDestinationCreditForm_classInput}`,
        options: [
            // {
            //   id: 3.0,
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 3.1,
                name: 'Nuevo',
                fieldName: 'Nuevo'
            },
            {
                id: 3.2,
                name: 'Renovaci\xf3n',
                fieldName: 'Renovaci\xf3n'
            }, 
        ]
    }, 
];
const AmountCreditForm = [
    {
        id: 4,
        name: 'monto_solicitado',
        fieldName: 'Monto Solicitado',
        type: 'number',
        className: `${DataDestinationCreditForm_classInput}`
    },
    {
        id: 5,
        name: 'plazo',
        fieldName: 'Plazo (meses)',
        type: 'number',
        className: `${DataDestinationCreditForm_classInput}`
    }, 
];
const DataDescriptionInversion = [
    {
        id: 8,
        name: 'descripcion',
        fieldName: 'Descripci\xf3n de la inversi\xf3n - \xbfC\xf3mo vas a invertir el capital de trabajo?',
        type: 'text-area',
        className: `h-18 border border-gray-400 min-h-18 p-4`
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/RadioButtom.js



const RadioButtom = ({ label , ...props })=>{
    const [field, meta] = useField(props);
    const renderFunc = props.children || props.render;
    return(/*#__PURE__*/ _jsx(React.Fragment, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "my-4 bg-red-600",
            children: [
                /*#__PURE__*/ _jsx("label", {
                    children: label
                }),
                /*#__PURE__*/ _jsx("div", {
                    role: "group",
                    "aria-labelledby": "my-radio-group",
                    children: props.options.map((item)=>/*#__PURE__*/ _jsxs("label", {
                            ...props,
                            ...field,
                            children: [
                                /*#__PURE__*/ _jsx(Field, {
                                    type: item.type,
                                    value: item.name,
                                    name: item.referenceName
                                }),
                                item.fieldName
                            ]
                        }, item.id)
                    )
                }),
                meta.touched && meta.error ? /*#__PURE__*/ _jsx("div", {
                    children: meta.error
                }) : null
            ]
        })
    }, props.key));
};
/* harmony default export */ const Forms_RadioButtom = ((/* unused pure expression or super */ null && (RadioButtom)));

;// CONCATENATED MODULE: ./components/Forms/TextArea.js



const MyTextArea = ({ label , ...props })=>{
    const [field, meta] = (0,external_formik_.useField)(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col mb-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: props.name,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                id: props.name,
                name: props.name,
                ...field,
                ...props,
                className: `${props.className} rounded-lg border border-gray-400`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: meta.touched && meta.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "error",
                    children: meta.error
                }) : null
            })
        ]
    }, props.key));
};

// EXTERNAL MODULE: ./utils/helpers.js
var helpers = __webpack_require__(4108);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
;// CONCATENATED MODULE: ./components/Forms/FormIndividual/CreditDestination/index.js















const CreditDestination_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const CreditDestinationForm = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const initialValuesForm = {
        tipo_solicitud: '',
        linea_credito: '',
        tipo_credito: '',
        monto_solicitado: '',
        plazo: '',
        activos: '',
        capital_trabajo: '',
        descripcion: ''
    };
    const [initialValues, setInitialValues] = external_react_.useState(initialValuesForm);
    const [loading, setLoading] = external_react_.useState(true);
    const [messageError, setMessageError] = external_react_.useState(false);
    const [hide, setHide] = external_react_.useState(false);
    const [onErrGet, setOnErrGet] = external_react_.useState(null);
    const [onErrPost, setOnErrPost] = external_react_.useState(null);
    const [dataV, setDataV] = external_react_.useState([]);
    const [valor_tasaV, setValorTasaV] = external_react_.useState();
    external_react_.useEffect(async ()=>{
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
        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_2&rol=${rol}`);
    };
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
            setDataV(data_lineas_creditos);
        } catch (err) {}
    }
    external_react_.useEffect(()=>{
        getTokenInterno().then(()=>run()
        );
    }, []);
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
        className: `${hide && 'hidden'} mb-8`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: external_yup_.object({
                tipo_solicitud: external_yup_.string().required('requerido').oneOf([
                    'Creacion',
                    'Fortalecimiento'
                ]),
                linea_credito: external_yup_.string().required('requerido').oneOf([
                    'Microempresarial',
                    'Capital Semilla',
                    'Agroindustrial',
                    'Venteros Informales',
                    'Egresados', 
                ]),
                tipo_credito: external_yup_.string().required('requerido').oneOf([
                    'Nuevo',
                    'Renovaci\xf3n'
                ]),
                monto_solicitado: external_yup_.number().typeError('Debe ser un n\xfamero').required('requerido').positive(' Debe ser mayor a 0').test('monto_solicitado', '', function(monto_solicitado, context) {
                    const validarMonto = dataV.filter((item)=>item.nombre === context.parent.linea_credito
                    );
                    const priceSplitter = (number)=>number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    ;
                    if (monto_solicitado >= validarMonto[0]?.monto_minimo && monto_solicitado <= validarMonto[0]?.monto_total) {
                        return true;
                    } else {
                        return this.createError({
                            message: `Para este crédito se permite mínimo ${priceSplitter(validarMonto[0]?.monto_minimo)}  - hasta ${priceSplitter(validarMonto[0]?.monto_total)}`
                        });
                    }
                }).test('monto_sum', 'El monto solicitado debe ser igual a la suma de los activos y el capital de trabajo', function(monto_solicitado, context) {
                    return monto_solicitado == context.parent.activos + context.parent.capital_trabajo;
                }),
                plazo: external_yup_.number().typeError('Debe ser un n\xfamero').required('requerido').positive(' Debe ser mayor a 0').test('plazo', '', function(plazo, context) {
                    const MIN_PLAZO = 1;
                    const validarCantidadPlazo = dataV.filter((item)=>item.nombre === context.parent.linea_credito
                    );
                    if (plazo >= MIN_PLAZO && plazo <= validarCantidadPlazo[0]?.num_cuotas) {
                        return true;
                    } else {
                        return this.createError({
                            message: `Maximo ${validarCantidadPlazo[0]?.num_cuotas} Cuotas`
                        });
                    }
                // const validarCantidadPlazo = plazoCredito(context.parent.linea_credito)
                // if (plazo >= MIN_PLAZO && plazo <= validarCantidadPlazo?.max_prestamo) {
                //   return true
                // } else {
                //   return this.createError({ message: `${validarCantidadPlazo?.label}` })
                // }
                }),
                activos: external_yup_.number().typeError('Debe ser un n\xfamero').required('requerido').min(0, 'Debe ser mayor o igual a 0'),
                capital_trabajo: external_yup_.number().typeError('Debe ser un n\xfamero').required('requerido').min(0, 'Debe ser mayor o igual a 0'),
                descripcion: external_yup_.string().required('requerido').max(100, 'No puede exceder a 100 caract\xe9res')
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_individual: {
                            ...prevState.formulario_individual,
                            destino_credito: {
                                ...value
                            }
                        }
                    })
                );
                const dataToSend = {
                    seccion: 'FDE_3',
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
                        props.setIsCompletedCreditDestination(true);
                        props.setCurrent(props.current + 1);
                        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_4&rol=${rol}`);
                    //setHide(true)
                    } else {
                        props.setIsCompletedCreditDestination(false);
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
                        DataDestinationCreditForm.map((field)=>{
                            if (field.type === 'select') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx(SelectionInput/* default */.Z, {
                                    disabled: values[field.name] != '' && rol == 'USUARIO',
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
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                className: "mb-2",
                                children: [
                                    ' ',
                                    "Monto solicitado",
                                    /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        type: "number",
                                        onWheel: helpers/* preventOnWheelChange */.F,
                                        name: "monto_solicitado",
                                        className: "w-full h-10 border border-gray-400",
                                        min: "0"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                ' ',
                                "Plazo (meses)",
                                /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                    type: "number",
                                    name: "plazo",
                                    onWheel: helpers/* preventOnWheelChange */.F,
                                    className: "w-full block h-10 border border-gray-400 px-4",
                                    min: "2"
                                })
                            ]
                        }),
                        DataDescriptionInversion.map((field)=>{
                            if (field.type === 'text-area') {
                                return(/*#__PURE__*/ jsx_runtime_.jsx(MyTextArea, {
                                    label: field.fieldName,
                                    name: field.name,
                                    className: field.className,
                                    type: field.type
                                }, field.id));
                            }
                            return(/*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                label: field.fieldName,
                                name: field.name,
                                className: field.className,
                                type: field.type
                            }, field.id));
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                className: "mb-2",
                                children: [
                                    ' ',
                                    "Activos - \xbfCu\xe1nto vas a invertir en equipos y m\xe1quinas?",
                                    ' ',
                                    /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        type: "number",
                                        onWheel: helpers/* preventOnWheelChange */.F,
                                        name: "activos",
                                        className: "w-full block h-10 border border-gray-400 px-4",
                                        min: "2"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    className: "mb-2",
                                    children: [
                                        "Capital de trabajo - \xbfCu\xe1nto vas a invertir en insumos o materia prima?",
                                        /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                            type: "number",
                                            onWheel: helpers/* preventOnWheelChange */.F,
                                            name: "capital_trabajo",
                                            className: "w-full block h-10 border border-gray-400 px-4",
                                            min: "2"
                                        })
                                    ]
                                })
                            })
                        }),
                        onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: CreditDestination_ERROR_CLASS,
                            children: onErrPost
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        handleBack(values);
                                        run();
                                    },
                                    className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500",
                                    children: "Anterior"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                    children: "Siguiente"
                                })
                            ]
                        }),
                        messageError ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: `Algo salió mal :(`
                        }) : null
                    ]
                })
        })
    });
};
/* harmony default export */ const CreditDestination = (CreditDestinationForm);
function plazoCredito(creditName) {
    switch(creditName){
        case 'Microempresarial':
            return {
                max_prestamo: 36,
                label: 'hasta 36 cuotas'
            };
        case 'Capital Semilla':
            return {
                max_prestamo: 36,
                label: 'hasta 36 cuotas'
            };
        case 'Agroindustrial':
            return {
                max_prestamo: 48,
                label: 'hasta 48 cuotas'
            };
        case 'Venteros Informales':
            return {
                max_prestamo: 36,
                label: 'hasta  36cuotas'
            };
        case 'Egresados':
            return {
                max_prestamo: 48,
                label: 'hasta 48 cuotas'
            };
    }
}

// EXTERNAL MODULE: ./components/CardUploadDocument.js + 2 modules
var CardUploadDocument = __webpack_require__(4775);
// EXTERNAL MODULE: ./auth-context.jsx
var auth_context = __webpack_require__(6795);
;// CONCATENATED MODULE: ./components/Forms/FormIndividual/FinancialReportApplicant/index.js









const FinancialReportApplicant_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const initialValues = {
    experiencia_crediticia: false,
    tiene_credito_vigente: false,
    entidad: '',
    monto_total: '',
    valor_adeudado: ''
};
const FinancialReportApplicant = (props)=>{
    const { logout  } = (0,auth_context/* useAuthContext */.Eu)();
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const [hide] = external_react_.useState(false);
    const [financialReportvalues, setFinancialReportValues] = external_react_.useState(initialValues);
    const [loading, setLoading] = external_react_.useState(true);
    const [onErrGet, setOnErrGet] = external_react_.useState(null);
    const [onErrPost, setOnErrPost] = external_react_.useState(null);
    const hasExperience = external_react_.useRef(null);
    external_react_.useEffect(()=>{
        async function run() {
            {
                setLoading(true);
                try {
                    const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${solicitud}?seccion=${paso}`;
                    const { response  } = await (0,getData/* getData */.Y)(URL_GET_STEP_FORM);
                    const info = await response.json();
                    if (response.status === 404) {
                        setFinancialReportValues(initialValues);
                        setOnErrGet(null);
                        setLoading(false);
                    }
                    if (response.status === 401) {
                        setLoading(false);
                        setOnErrGet('Hubo un error al consultar la informaci\xf3n del cr\xe9dito, por favor intenta nuevamente');
                    }
                    if (response.status === 200) {
                        setFinancialReportValues({
                            ...info
                        });
                        setOnErrGet(null);
                        setLoading(false);
                    }
                    if (response.status === 400) {
                        setLoading(false);
                        setOnErrGet(null);
                    }
                } catch (err) {}
            }
        }
        run();
    }, [
        logout,
        paso,
        push,
        solicitud
    ]);
    const handleBack = ()=>{
        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_8&rol=${rol}`);
    };
    const handleChange = ({ target  })=>{
        setFinancialReportValues({
            ...financialReportvalues,
            [target.name]: target.value
        });
    };
    external_react_.useEffect(()=>{
        if (financialReportvalues.experiencia_crediticia === false) {
            setFinancialReportValues({
                initialValues
            });
        }
        if (financialReportvalues.experiencia_crediticia === true && financialReportvalues.tiene_credito_vigente === false) {
            setFinancialReportValues({
                ...initialValues,
                experiencia_crediticia: true
            });
        }
    }, [
        financialReportvalues.experiencia_crediticia,
        financialReportvalues.tiene_credito_vigente, 
    ]);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        let { experiencia_crediticia , tiene_credito_vigente , monto_total , entidad  } = financialReportvalues;
        props.setForm((prevState)=>({
                ...prevState,
                formulario_individual: {
                    ...prevState.formulario_individual,
                    informe_financiero_solicitante: {
                        ...financialReportvalues
                    }
                }
            })
        );
        const dataToSend = {
            seccion: 'FDE_9',
            solicitud_id: props.solicitud_id || solicitud,
            data: {
                entidad,
                experiencia_crediticia: experiencia_crediticia || false,
                tiene_credito_vigente: tiene_credito_vigente || false,
                valor_adeudado: Boolean(monto_total) === false ? 0 : Number(monto_total),
                monto_total: Boolean(monto_total) === false ? 0 : Number(monto_total)
            }
        };
        try {
            const { responseComplete  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
            if (responseComplete) {
                props.setIsCompletedFinancialReportApplicant(true);
                props.setCurrent(props.current + 1);
                router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_10&rol=${rol}`);
            } else {
                props.setIsCompletedFinancialReportApplicant(false);
                setOnErrPost(`Intenta más tarde`);
                setTimeout(()=>{
                    setOnErrPost(null);
                }, 5000);
            }
        } catch (error) {}
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
        className: `${hide && 'hidden'} mb-8`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-bold mb-4 text-center md:text-left text-3xl text-color_primary_1",
                children: "Reporte Financiero"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center md:text-left mb-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                children: "\xbfHa tenido experiencia de cr\xe9dito?"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                role: "group",
                                "aria-labelledby": "my-radio-group",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        className: "mr-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "radio",
                                                name: "experiencia_crediticia",
                                                value: true,
                                                onChange: ()=>setFinancialReportValues({
                                                        ...financialReportvalues,
                                                        ['experiencia_crediticia']: true
                                                    })
                                                ,
                                                checked: true === financialReportvalues.experiencia_crediticia
                                            }),
                                            "Si"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                ref: hasExperience,
                                                type: "radio",
                                                name: "experiencia_crediticia",
                                                value: false,
                                                onChange: ()=>{
                                                    hasExperience.current.checked = true;
                                                    setFinancialReportValues({
                                                        ...financialReportvalues,
                                                        ['experiencia_crediticia']: false
                                                    });
                                                }
                                            }),
                                            "No"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    financialReportvalues.experiencia_crediticia === true ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-center md:text-left mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        children: "\xbfTiene un cr\xe9dito vigente?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        role: "group",
                                        "aria-labelledby": "my-radio-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "mr-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "radio",
                                                        value: true,
                                                        name: "tiene_credito_vigente",
                                                        onChange: ()=>setFinancialReportValues({
                                                                ...financialReportvalues,
                                                                ['tiene_credito_vigente']: true
                                                            })
                                                        ,
                                                        checked: true === financialReportvalues.tiene_credito_vigente
                                                    }),
                                                    "Si"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "radio",
                                                        value: false,
                                                        name: "tiene_credito_vigente",
                                                        onChange: ()=>setFinancialReportValues({
                                                                ...financialReportvalues,
                                                                ['tiene_credito_vigente']: false
                                                            })
                                                        ,
                                                        checked: false === financialReportvalues.tiene_credito_vigente
                                                    }),
                                                    "No"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            financialReportvalues.tiene_credito_vigente === true ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "entidad",
                                                children: "Entidad"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: "entidad",
                                                id: "entidad",
                                                onChange: handleChange,
                                                className: "px-4 h-10 rounded-lg border border-gray-400 w-full mb-6",
                                                value: financialReportvalues.entidad
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "monto_total",
                                                children: "Monto total del cr\xe9dito"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "number",
                                                onWheel: helpers/* preventOnWheelChange */.F,
                                                name: "monto_total",
                                                id: "monto_total",
                                                onChange: handleChange,
                                                className: "px-4 h-10 rounded-lg border border-gray-400 w-full mb-6",
                                                value: financialReportvalues.monto_total
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "valor_adeudado",
                                                children: "Valor adeudado a la fecha"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "number",
                                                onWheel: helpers/* preventOnWheelChange */.F,
                                                name: "valor_adeudado",
                                                id: " valor_adeudado",
                                                onChange: handleChange,
                                                className: "px-4 h-10 rounded-lg border border-gray-400 w-full mb-6",
                                                value: financialReportvalues.valor_adeudado
                                            })
                                        ]
                                    })
                                ]
                            }) : null
                        ]
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx(CardUploadDocument/* CardUploadDocument */.V, {
                        solicitud_credito: props.solicitud_id || solicitud,
                        cedula: cedula
                    }),
                    onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: FinancialReportApplicant_ERROR_CLASS,
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
                                onClick: handleSubmit,
                                className: "mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                children: [
                                    ' ',
                                    "Finalizar",
                                    ' '
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const FormIndividual_FinancialReportApplicant = (FinancialReportApplicant);

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/InfoBusiness/DataInfoBusiness.js
const DataInfoBusiness_classInput = 'h-10 border border-gray-400 px-4';
const DataInfoBusiness = [
    {
        id: '42-name',
        name: 'nombre_negocio',
        fieldName: 'Nombre del negocio',
        type: 'text',
        className: `${DataInfoBusiness_classInput}`
    },
    {
        id: 42,
        name: 'direccion',
        fieldName: 'Direcci\xf3n del negocio',
        type: 'text',
        className: `${DataInfoBusiness_classInput}`
    },
    {
        id: '42.a',
        name: 'fecha_creacion',
        fieldName: 'Fecha de creacion del negocio',
        type: 'date',
        className: `${DataInfoBusiness_classInput}`
    },
    {
        id: '42.b',
        name: 'telefono',
        fieldName: 'Tel\xe9fono',
        type: 'number',
        className: `${DataInfoBusiness_classInput}`
    },
    {
        id: 32,
        name: 'macrosector',
        fieldName: 'Macro-Sector',
        type: 'select',
        className: `${DataInfoBusiness_classInput}`,
        options: [
            // {
            //   id: 32.01,
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 32.1,
                name: 'Comercio',
                fieldName: 'Comercio'
            },
            {
                id: 32.2,
                name: 'Producci\xf3n',
                fieldName: 'Producci\xf3n'
            },
            {
                id: 32.3,
                name: 'Servicios',
                fieldName: 'servicios'
            },
            {
                id: 32.4,
                name: 'Agropecuario',
                fieldName: 'Agropecuario'
            }, 
        ]
    },
    {
        id: 33,
        name: 'subsector',
        fieldName: 'Subsector',
        type: 'select',
        className: `${DataInfoBusiness_classInput}`,
        options: [
            // {
            //   id: 33.01,
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 33.0011,
                name: 'Alimentos',
                fieldName: 'Alimentos'
            },
            {
                id: 33.2,
                name: 'Aseo',
                fieldName: 'Aseo'
            },
            {
                id: 33.3,
                name: 'Artesanos',
                fieldName: 'Artesanos'
            },
            {
                id: 33.4,
                name: 'Textil',
                fieldName: 'Textil'
            },
            {
                id: 33.5,
                name: 'Madera',
                fieldName: 'Madera'
            },
            {
                id: 33.6,
                name: 'Belleza',
                fieldName: 'Belleza'
            },
            {
                id: 33.7,
                name: 'Tecnolog\xeda',
                fieldName: 'tecnolog\xeda'
            },
            {
                id: 33.8,
                name: 'Mantenimiento y reparaci\xf3n',
                fieldName: 'Mantenimiento y Reparaci\xf3n'
            },
            {
                id: 33.9,
                name: 'Tiendas',
                fieldName: 'Tiendas'
            },
            {
                id: 33.1,
                name: 'Transporte',
                fieldName: 'Transporte'
            },
            {
                id: 33.11,
                name: 'Miscelaneas',
                fieldName: 'Miscelaneas'
            },
            {
                id: 33.12,
                name: 'Depositos y Ferreter\xeda',
                fieldName: 'depositos y ferreter\xedas'
            },
            {
                id: 33.13,
                name: 'Licores',
                fieldName: 'Licores'
            },
            {
                id: 33.14,
                name: 'Ventas por Catalogo',
                fieldName: 'Ventas por cat\xe1logo'
            },
            {
                id: 33.15,
                name: 'Mensajer\xeda',
                fieldName: 'Mensajer\xeda'
            },
            {
                id: 33.16,
                name: 'Ventas Ambulantes',
                fieldName: 'Ventas Ambulantes'
            },
            {
                id: 33.17,
                name: 'Otros',
                fieldName: 'Otros'
            }, 
        ]
    },
    {
        id: 43,
        name: 'tipo_persona',
        fieldName: 'Tipo de persona',
        type: 'select',
        className: `${DataInfoBusiness_classInput}`,
        options: [
            // {
            //   id: 43.01,
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 43.1,
                name: 'Natural',
                fieldName: 'Natural'
            },
            {
                id: 43.2,
                name: 'Juridica',
                fieldName: 'Jur\xeddica'
            }, 
        ]
    },
    {
        id: 44,
        name: 'num_empl_permanentes',
        fieldName: 'N\xfamero de empleados permanentes',
        type: 'number',
        className: `${DataInfoBusiness_classInput}`
    },
    {
        id: 45,
        name: 'num_empl_eventuales',
        fieldName: 'N\xfamero eventuales de empleados',
        type: 'number',
        className: `${DataInfoBusiness_classInput}`
    },
    {
        id: 46,
        name: 'local',
        fieldName: 'Local',
        type: 'select',
        className: `${DataInfoBusiness_classInput}`,
        options: [
            // {
            //   id: 46.01,
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 46.1,
                name: 'Propio',
                fieldName: 'Propio'
            },
            {
                id: 46.2,
                name: 'Arrendado',
                fieldName: 'Arrendado'
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/InfoBusiness/index.js















const InfoBusiness_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const InfoBusiness = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const [hide, setHide] = external_react_.useState(false);
    const initialValuesForm = {
        nombre_negocio: '',
        comuna: '',
        direccion: '',
        fecha_creacion: '',
        telefono: '',
        macrosector: '',
        subsector: '',
        tipo_persona: '',
        num_empl_permanentes: '',
        num_empl_eventuales: '',
        local: '',
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
        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_6&rol=${rol}`);
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
        className: `${hide && 'hidden'} mb-8`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: external_yup_.object({
                nombre_negocio: external_yup_.string().required('requerido'),
                comuna: external_yup_.string().required('requerido'),
                direccion: external_yup_.string().required('requerido'),
                fecha_creacion: external_yup_.date().required('requerido').max(new Date().toISOString().slice(0, 10), 'Ingresa una fecha v\xe1lida.'),
                telefono: external_yup_.string().required('requerido').min(7, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').max(20, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.'),
                macrosector: external_yup_.string().required('requerido').oneOf([
                    'Comercio',
                    'Producci\xf3n',
                    'Servicios',
                    'Agropecuario'
                ]),
                subsector: external_yup_.string().required('requerido').oneOf([
                    'Alimentos',
                    'Aseo',
                    'Artesanos',
                    'Textil',
                    'Madera',
                    'Belleza',
                    'Tecnolog\xeda',
                    'Mantenimiento y reparaci\xf3n',
                    'Tiendas',
                    'Transporte',
                    'Miscelaneas',
                    'Depositos y Ferreter\xeda',
                    'Licores',
                    'Ventas por Catalogo',
                    'Mensajer\xeda',
                    'Ventas Ambulantes',
                    'Otros', 
                ]),
                tipo_persona: external_yup_.string().required('requerido').oneOf([
                    'Natural',
                    'Juridica'
                ]),
                num_empl_permanentes: external_yup_.number().required('requerido').typeError('Debe ser un numero'),
                num_empl_eventuales: external_yup_.number().nullable(true).typeError('Debe ser un numero'),
                local: external_yup_.string().required('requerido').oneOf([
                    'Propio',
                    'Arrendado'
                ]),
                nombre_arrendador: external_yup_.string().nullable(true),
                numero_arrendador: external_yup_.number().nullable(true).typeError('Debe ser n\xfamero').positive()
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_individual: {
                            ...prevState.formulario_individual,
                            informacion_negocio: {
                                ...value
                            }
                        }
                    })
                );
                const dataToSend = {
                    seccion: 'FDE_7',
                    solicitud_id: props.solicitud_id || solicitud
                };
                if (value.local !== 'Arrendado') {
                    const { nombre_arrendador , telefono_arrendador , telefono , ...dataBusiness } = value;
                    dataToSend.data = {
                        ...dataBusiness,
                        nombre_arrendador: null,
                        telefono_arrendador: null,
                        telefono: Number(telefono)
                    };
                } else {
                    const { telefono_arrendador , telefono , ...dataBusiness } = value;
                    dataToSend.data = {
                        ...dataBusiness,
                        telefono_arrendador: Number(telefono_arrendador),
                        telefono: Number(telefono)
                    };
                }
                try {
                    const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (responseComplete) {
                        props.setIsCompletedInfoBusiness(true);
                        props.setCurrent(props.current + 1);
                        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_8&rol=${rol}`);
                    //setHide(true)
                    } else {
                        props.setIsCompletedInfoBusiness(false);
                        setOnErrPost(`Intenta más tarde`);
                        setTimeout(()=>{
                            setOnErrPost(null);
                        }, 5000);
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            children: ({ values  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectionInput/* default */.Z, {
                            id: 'comuna',
                            label: 'Comuna donde est\xe1 el negocio',
                            name: 'comuna',
                            className: 'h-10 border border-gray-400 px-4',
                            options: Object.values(comunasObj),
                            render: (option, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: `${option}`,
                                    children: `${option}`
                                }, index)
                        }, 'comuna'),
                        DataInfoBusiness.map((field)=>{
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
                            return(/*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                label: field.fieldName,
                                name: field.name,
                                type: field.type,
                                className: field.className
                            }, field.id));
                        }),
                        values.local === 'Arrendado' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                    type: "number",
                                    onWheel: helpers/* preventOnWheelChange */.F,
                                    className: "h-10 border border-gray-400 px-4 w-full"
                                }, 'telefono_arrendador')
                            ]
                        }) : null,
                        onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: InfoBusiness_ERROR_CLASS,
                            children: onErrPost
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    onClick: ()=>handleBack(values)
                                    ,
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
/* harmony default export */ const FormIndividual_InfoBusiness = (InfoBusiness);

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/InfoMate/DataMateForm.js
const DataMateForm_classInput = 'h-10 border border-gray-400 px-4';
const DataMateForm = [
    {
        id: 20,
        name: 'nombre',
        fieldName: 'Nombre del c\xf3nyugue',
        type: 'text',
        className: `${DataMateForm_classInput}`
    },
    {
        id: 21,
        name: 'num_identificacion',
        fieldName: 'No. De identificaci\xf3n',
        type: 'number',
        className: `${DataMateForm_classInput}`
    },
    {
        id: 22,
        name: 'telefono',
        fieldName: 'Tel\xe9fono del c\xf3nyugue o pareja',
        type: 'number',
        className: `${DataMateForm_classInput}`
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/InfoMate/index.js












const InfoMate_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const InfoMate = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const [hide, setHide] = external_react_.useState(false);
    const initialValuesForm = {
        nombre: '',
        num_identificacion: '',
        telefono: ''
    };
    const [initialValues, setInitialValues] = external_react_.useState(initialValuesForm);
    const [loading, setLoading] = external_react_.useState(true);
    const [onErrGet, setOnErrGet] = external_react_.useState(null);
    const [onErrPost, setOnErrPost] = external_react_.useState(null);
    external_react_.useEffect(async ()=>{
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
        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_3&rol=${rol}`);
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
        className: `${hide && 'hidden'} mb-8`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: external_yup_.object({
                nombre: external_yup_.string().matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten n\xfameros ni caracteres especiales.').nullable(true),
                num_identificacion: external_yup_.number().typeError('Debe ser un numero').nullable(true).test('required_if_name', 'Requerido si se especifica nombre de c\xf3nyugue.', function(num, context) {
                    return context.parent.nombre === undefined || context.parent.nombre !== undefined && num !== undefined;
                }),
                telefono: external_yup_.number().typeError('Debe ser un numero').positive().notRequired()
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_individual: {
                            ...prevState.formulario_individual,
                            conyugue: {
                                ...value
                            }
                        }
                    })
                );
                const { telefono , num_identificacion , ...dataConyugue } = value;
                const dataToSend = {
                    seccion: 'FDE_4',
                    solicitud_id: props.solicitud_id || solicitud,
                    data: {
                        telefono: Number(telefono),
                        num_identificacion: Number(num_identificacion),
                        ...dataConyugue
                    }
                };
                try {
                    const { responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (error) {
                        window.localStorage.clear();
                        push('/login');
                        return;
                    }
                    if (responseComplete) {
                        props.setIsCompletedInfoMate(true);
                        props.setCurrent(props.current + 1);
                        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_5&rol=${rol}`);
                    //setHide(true)
                    } else {
                        props.setIsCompletedInfoMate(false);
                        setOnErrPost(`Intenta más tarde`);
                        setTimeout(()=>{
                            setOnErrPost(null);
                        }, 5000);
                    }
                } catch (err) {
                    console.error(err);
                }
            },
            children: ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        DataMateForm.map((field)=>{
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
                            return(/*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                label: field.fieldName,
                                name: field.name,
                                type: field.type,
                                className: field.className
                            }, field.id));
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
/* harmony default export */ const FormIndividual_InfoMate = (InfoMate);

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/PopulationVariables/DataPopulationVariables.js
const DataPopulationVariables_classInput = 'h-10 border border-gray-400 px-4 ';
const dataPopulationVariables = [
    {
        id: 23,
        name: 'sexo',
        fieldName: 'Sexo',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 23.1,
                name: 'Masculino',
                fieldName: 'Masculino'
            },
            {
                id: 23.2,
                name: 'Femenino',
                fieldName: 'Femenino'
            },
            {
                id: 23.3,
                name: 'Intersexual',
                fieldName: 'Intersexual'
            },
            {
                id: 23.4,
                name: 'Indefinido',
                fieldName: 'Indefinido'
            }, 
        ]
    },
    {
        id: 24,
        name: 'orientacion_sexual',
        fieldName: 'Orientaci\xf3n sexual',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 24.3,
                name: 'Heterosexual',
                fieldName: 'Heterosexual'
            },
            {
                id: 24.1,
                name: 'Lesbiana',
                fieldName: 'Lesbiana'
            },
            {
                id: 24.2,
                name: 'Bisexual',
                fieldName: 'Bisexual'
            },
            {
                id: 24.2,
                name: 'Gay',
                fieldName: 'Gay'
            },
            {
                id: 24.2,
                name: 'Asexual',
                fieldName: 'Asexual'
            },
            {
                id: 24.2,
                name: 'Pansexual',
                fieldName: 'Pansexual'
            },
            {
                id: 24.2,
                name: 'Homosexual',
                fieldName: 'Homosexual'
            },
            {
                id: 24.2,
                name: 'Sin Dato',
                fieldName: 'Sin Dato'
            },
            {
                id: 24.2,
                name: 'No sabe No responde',
                fieldName: 'No sabe No responde'
            }, 
        ]
    },
    {
        id: 'identidad-genero-25',
        name: 'identidad_genero',
        fieldName: 'Identidad de genero',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 'identidad-genero-25.1',
                name: 'Mujer Trans',
                fieldName: 'Mujer Trans'
            },
            {
                id: 'identidad-genero-25.2',
                name: 'Hombre Trans',
                fieldName: 'Hombre Trans'
            },
            {
                id: 'identidad-genero-25.3',
                name: 'Fluido-No Binario',
                fieldName: 'Fluido-No Binario'
            },
            {
                id: 'identidad-genero-25.4',
                name: 'Mujer Cis',
                fieldName: 'Mujer Cis'
            },
            {
                id: 'identidad-genero-25.5',
                name: 'Hombre Cis',
                fieldName: 'Hombre Cis'
            },
            {
                id: 'identidad-genero-25.6',
                name: 'Travesti',
                fieldName: 'Travesti'
            },
            {
                id: 'identidad-genero-25.7',
                name: 'Transexual',
                fieldName: 'Transexual'
            },
            {
                id: 'identidad-genero-25.8',
                name: 'Transformista',
                fieldName: 'Transformista'
            },
            {
                id: 'identidad-genero-25.9',
                name: 'Otro',
                fieldName: 'Otro'
            },
            {
                id: 'identidad-genero-25.10',
                name: 'Sin Dato',
                fieldName: 'Sin Dato'
            },
            {
                id: 'identidad-genero-25.10',
                name: 'No sabe No responde',
                fieldName: 'No sabe No responde'
            }, 
        ]
    },
    {
        id: 25,
        name: 'etnia',
        fieldName: 'Etnia',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 25.1,
                name: 'Afrocolombiano',
                fieldName: 'AfroColombiano'
            },
            {
                id: 25.2,
                name: 'Indigena',
                fieldName: 'Ind\xedgena'
            },
            {
                id: 25.3,
                name: 'Palenquero',
                fieldName: 'Palenquero'
            },
            {
                id: 25.4,
                name: 'Raizal',
                fieldName: 'Raizal'
            },
            {
                id: 25.4,
                name: 'ROM-GITANO',
                fieldName: 'ROM-GITANO'
            },
            {
                id: 25.4,
                name: 'Negro',
                fieldName: 'Negro'
            },
            {
                id: 25.4,
                name: 'Ninguno',
                fieldName: 'Ninguno'
            }, 
        ]
    },
    {
        id: 26,
        name: 'discapacidad',
        fieldName: 'Discapacidad',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 26.1,
                name: 'Discapacidad Auditiva',
                fieldName: 'Discapacidad Auditiva'
            },
            {
                id: 26.2,
                name: 'Discapacidad Cognitiva',
                fieldName: 'Discapacidad Cognitiva'
            },
            {
                id: 26.3,
                name: 'Discapacidad Fisica',
                fieldName: 'Discapacidad Fisica'
            },
            {
                id: 26.4,
                name: 'Discapacidad Mental',
                fieldName: 'Discapacidad Mental'
            },
            {
                id: 26.5,
                name: 'Discapacidad Visual',
                fieldName: 'Discapacidad Visual'
            },
            {
                id: 26.6,
                name: 'Discapacidad Multiple',
                fieldName: 'Discapacidad Multiple'
            },
            {
                id: 26.7,
                name: 'No tiene Discapacidad',
                fieldName: 'No tiene Discapacidad'
            }, 
        ]
    },
    {
        id: 27,
        name: 'victima',
        fieldName: 'V\xedctima de conflicto',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 27.1,
                name: 'SI',
                fieldName: 'SI'
            },
            {
                id: 27.2,
                name: 'NO',
                fieldName: 'NO'
            }, 
        ]
    },
    {
        id: 28,
        name: 'poblacion_campesina',
        fieldName: 'Poblaci\xf3n campesina',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 28.1,
                name: 'SI',
                fieldName: 'SI'
            },
            {
                id: 28.2,
                name: 'NO',
                fieldName: 'NO'
            }, 
        ]
    },
    {
        id: 29,
        name: 'estado_civil',
        fieldName: 'Estado Civ\xedl',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 29.1,
                name: 'Soltero',
                fieldName: 'Soltero'
            },
            {
                id: 29.2,
                name: 'Casado',
                fieldName: 'Casado'
            },
            {
                id: 29.3,
                name: 'Viudo',
                fieldName: 'Viudo'
            },
            {
                id: 29.4,
                name: 'Union Libre',
                fieldName: 'Uni\xf3n libre'
            },
            {
                id: 29.5,
                name: 'Divorciado',
                fieldName: 'Divorciado'
            }, 
        ]
    },
    {
        id: 30,
        name: 'nivel_escolaridad',
        fieldName: 'Nivel de escolaridad',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 30.1,
                name: 'Ninguno',
                fieldName: 'Ninguno'
            },
            {
                id: 30.2,
                name: 'Primaria',
                fieldName: 'Primaria'
            },
            {
                id: 30.3,
                name: 'Bachiller',
                fieldName: 'Bachiller'
            },
            {
                id: 30.4,
                name: 'Tecnico',
                fieldName: 'T\xe9cnico'
            },
            {
                id: 30.5,
                name: 'Tecnologo',
                fieldName: 'Tecn\xf3logo'
            },
            {
                id: 30.6,
                name: 'Profesional',
                fieldName: 'Profesional'
            },
            {
                id: 30.7,
                name: 'Especialista',
                fieldName: 'Especialista'
            }, 
        ]
    },
    {
        id: 31,
        name: 'rol_hogar',
        fieldName: 'Rol en el hogar',
        type: 'select',
        className: `${DataPopulationVariables_classInput}`,
        options: [
            {
                id: 31.1,
                name: 'Cabeza Hogar',
                fieldName: 'Cabeza de Hogar'
            },
            {
                id: 31.2,
                name: 'Aporta economicamente',
                fieldName: 'Aporta economicamente'
            },
            {
                id: 31.3,
                name: 'No aporta',
                fieldName: 'No aporta '
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/PopulationVariables/index.js












const PopulationVariables_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const PopulationVariables = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const [hide, setHide] = external_react_.useState(false);
    const initialValuesForm = {
        sexo: '',
        orientacion_sexual: '',
        identidad_genero: '',
        etnia: '',
        discapacidad: '',
        victima: '',
        poblacion_campesina: '',
        estado_civil: '',
        nivel_escolaridad: '',
        rol_hogar: ''
    };
    const [initialValues, setInitialValues] = external_react_.useState(initialValuesForm);
    const [loading, setLoading] = external_react_.useState(true);
    const [onErrGet, setOnErrGet] = external_react_.useState(null);
    const [onErrPost, setOnErrPost] = external_react_.useState(null);
    external_react_.useEffect(async ()=>{
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
        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_4&rol=${rol}`);
    };
    return loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading..."
    }) : onErrGet ? /*#__PURE__*/ jsx_runtime_.jsx(_error["default"], {
        message: onErrGet
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${hide && 'hidden'} mb-8`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: external_yup_.object({
                sexo: external_yup_.string().required('requerido').oneOf([
                    'Masculino',
                    'Femenino',
                    'Intersexual',
                    'Indefinido'
                ]),
                orientacion_sexual: external_yup_.string().required('requerido').oneOf([
                    'Heterosexual',
                    'Lesbiana',
                    'Bisexual',
                    'Gay',
                    'Asexual',
                    'Pansexual',
                    'Homosexual',
                    'Sin Dato',
                    'No sabe No responde', 
                ]),
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
                etnia: external_yup_.string().required('requerido'),
                discapacidad: external_yup_.string().required('requerido').oneOf([
                    'Discapacidad Auditiva',
                    'Discapacidad Cognitiva',
                    'Discapacidad Fisica',
                    'Discapacidad Mental',
                    'Discapacidad Visual',
                    'Discapacidad Multiple',
                    'No tiene Discapacidad', 
                ]),
                victima: external_yup_.string().required('requerido').oneOf([
                    'SI',
                    'NO'
                ]),
                poblacion_campesina: external_yup_.string().required('requerido').oneOf([
                    'SI',
                    'NO'
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
                    'Priimaria',
                    'Bachiller',
                    'Tecnico',
                    'Tecnologo',
                    'Profesional',
                    'Especialista'
                ]),
                rol_hogar: external_yup_.string().required('requerido').oneOf([
                    'Cabeza Hogar',
                    'Aporta economicamente',
                    'No aporta'
                ])
            }),
            onSubmit: async (value)=>{
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_individual: {
                            ...prevState.formulario_individual,
                            variables_poblacionales: {
                                ...value
                            }
                        }
                    })
                );
                const dataToSend = {
                    seccion: 'FDE_5',
                    solicitud_id: props.solicitud_id || solicitud,
                    data: {
                        ...value
                    }
                };
                try {
                    const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (responseComplete) {
                        props.setIsCompletedPopulationVariables(true);
                        props.setCurrent(props.current + 1);
                        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_6&rol=${rol}`);
                    //setHide(true)
                    } else {
                        props.setIsCompletedPopulationVariables(false);
                        setOnErrPost(`Intenta más tarde`);
                        setTimeout(()=>{
                            setOnErrPost(null);
                        }, 5000);
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            children: (values)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-xl text-center font-medium mb-4",
                            children: "Informaci\xf3n personal Adicional"
                        }),
                        dataPopulationVariables.map((field)=>{
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
                            return(/*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                label: field.fieldName,
                                name: field.name,
                                className: field.className
                            }, field.id));
                        }),
                        onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: PopulationVariables_ERROR_CLASS,
                            children: onErrPost
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    onClick: ()=>handleBack(values)
                                    ,
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
/* harmony default export */ const FormIndividual_PopulationVariables = (PopulationVariables);

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/References/DataReferencesTradeAndFamiliar.js
const DataReferencesTradeAndFamiliar_classInput = 'h-10 border border-gray-400 px-4';
const DataReferencesTradeAndFamiliar = [
    {
        id: 51,
        name: 'nombre_referencia_familiar',
        fieldName: 'Nombre completo - referencia familiar',
        type: 'text',
        className: `${DataReferencesTradeAndFamiliar_classInput}`
    },
    {
        id: 52,
        name: 'parentesco',
        fieldName: 'Parentesco',
        type: 'text',
        className: `${DataReferencesTradeAndFamiliar_classInput}`
    },
    {
        id: 53,
        name: 'numero_telefonico',
        fieldName: 'N\xfamero telef\xf3nico',
        type: 'number',
        className: `${DataReferencesTradeAndFamiliar_classInput}`
    },
    {
        id: 54,
        name: 'nombre_referencia_familiar_alt',
        fieldName: 'Nombre completo - referencia familiar',
        type: 'text',
        className: `${DataReferencesTradeAndFamiliar_classInput}`
    },
    {
        id: 58,
        name: 'parentesco_alt',
        fieldName: 'Parentesco',
        type: 'text',
        className: `${DataReferencesTradeAndFamiliar_classInput}`
    },
    {
        id: 59,
        name: 'numero_telefonico_alt',
        fieldName: 'N\xfamero telef\xf3nico o celular',
        type: 'number',
        className: `${DataReferencesTradeAndFamiliar_classInput}`
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/References/index.js










const References_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const ReferencesForm = (props)=>{
    const router = (0,router_.useRouter)();
    const { push  } = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const [hide, setHide] = external_react_.useState(false);
    const reducerRef = (curr, updates)=>({
            ...curr,
            ...updates
        })
    ;
    const [{ ref_personal_1: ref_personal_11 , ref_personal_2: ref_personal_21 , ref_comercial  }, dispatch] = external_react_.useReducer(reducerRef, {
        ref_personal_1: undefined,
        ref_personal_2: undefined,
        ref_comercial: undefined
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
    const [loading, setLoading] = external_react_.useState(true);
    const [message, setMessage] = external_react_.useState(null);
    const [valuesForm, setValuesForm] = external_react_.useState(initialValuesForm);
    const [onErrGet, setOnErrGet] = external_react_.useState(null);
    const [onErrPost, setOnErrPost] = external_react_.useState(null);
    external_react_.useEffect(async ()=>{
        setEditForm(false);
        try {
            const URL_GET_STEP_FORM = `${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud/${props.solicitud_id || solicitud}?seccion=${paso}`;
            const { response , error  } = await (0,getData/* getData */.Y)(URL_GET_STEP_FORM);
            if (!error) {
                const info = await response.json();
                if (response.status === 404) {
                    setOnErrGet(null);
                    setLoading(false);
                    setEditForm(true);
                    setValuesForm(initialValuesForm);
                }
                if (response.status === 401) {
                    setLoading(false);
                    setOnErrGet('Hubo un error al consultar la informaci\xf3n del cr\xe9dito, por favor intenta nuevamente');
                    setEditForm(true);
                }
                if (response.status === 200) {
                    const [ref_personal_1, ref_personal_2] = info;
                    dispatch({
                        ref_personal_1,
                        ref_personal_2
                    });
                    setOnErrGet(null);
                    setLoading(false);
                    const obj = {
                        nombre_referencia_familiar: ref_personal_1.nombre,
                        parentesco: ref_personal_1.parentesco,
                        numero_telefonico: ref_personal_1.telefono,
                        nombre_referencia_familiar_alt: ref_personal_2.nombre,
                        parentesco_alt: ref_personal_2.parentesco,
                        numero_telefonico_alt: ref_personal_2.telefono
                    };
                    setValuesForm(obj);
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
        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_7&rol=${rol}`);
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
                numero_telefonico: external_yup_.string().required('requerido').min(7, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').max(20, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.'),
                nombre_referencia_familiar_alt: external_yup_.string().required('requerido').matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten n\xfameros ni caracteres especiales.'),
                parentesco_alt: external_yup_.string().required('requerido').matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten n\xfameros ni caracteres especiales.'),
                numero_telefonico_alt: external_yup_.string().required('requerido').min(7, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.').max(20, 'Ingresa un n\xfamero de tel\xe9fono v\xe1lido.')
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
                    seccion: 'FDE_8',
                    solicitud_id: props.solicitud_id || solicitud
                };
                if (!ref_personal_11?.id) {
                    dataToSend.data = {
                        referencias: [
                            {
                                tipo: 'personal',
                                nombre: value.nombre_referencia_familiar,
                                telefono: value.numero_telefonico,
                                parentesco: value.parentesco
                            },
                            {
                                tipo: 'personal',
                                nombre: value.nombre_referencia_familiar_alt,
                                telefono: value.numero_telefonico_alt,
                                parentesco: value.parentesco_alt
                            }, 
                        ]
                    };
                } else {
                    dataToSend.data = {
                        referencias: [
                            {
                                id: ref_personal_11?.id || null,
                                tipo: 'personal',
                                nombre: value.nombre_referencia_familiar,
                                telefono: value.numero_telefonico,
                                parentesco: value.parentesco
                            },
                            {
                                id: ref_personal_21?.id || null,
                                tipo: 'personal',
                                nombre: value.nombre_referencia_familiar_alt,
                                telefono: value.numero_telefonico_alt,
                                parentesco: value.parentesco_alt
                            }, 
                        ]
                    };
                }
                try {
                    const { res , responseComplete , error  } = await (0,fetchData/* fetchData */.r)(`${"https://www.medellin.gov.co/bancopobres/solicitudescreditosms/"}credito/solicitud`, dataToSend);
                    if (error) {
                        window.localStorage.clear();
                        push('/login');
                        return;
                    }
                    if (res.status === 422) {
                        setMessage(res.message || 'Ya tienes referencias');
                    }
                    if (responseComplete) {
                        props.setIsCompletedReferenceForm(true);
                        props.setCurrent(props.current + 1);
                        router.push(`/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_9&rol=${rol}`);
                    //setHide(true)
                    } else {
                        props.setIsCompletedReferenceForm(false);
                        setOnErrPost(`Intenta más tarde`);
                        setTimeout(()=>{
                            setOnErrPost(null);
                        }, 5000);
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            children: (values)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        DataReferencesTradeAndFamiliar.map((field)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                label: field.fieldName,
                                name: field.name,
                                type: field.type,
                                className: field.className
                            }, field.id));
                        }),
                        message,
                        onErrPost ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: References_ERROR_CLASS,
                            children: onErrPost
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    onClick: ()=>handleBack(values)
                                    ,
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
/* harmony default export */ const References = (ReferencesForm);

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/HabbeasData/index.js






const HabbeasData = (props)=>{
    const router = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-100 max-w-4xl mx-auto rounded-lg p-8 ",
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
                        formulario_individual: {
                            ...prevState.formulario_individual,
                            autorizacion_datos_personales: {
                                ...value
                            }
                        }
                    })
                );
                props.setShowModal(false);
                router.push(`/individual/${cedula}/${solicitud || ''}?paso=FDE_1&rol=${rol}`);
            },
            children: ({ values , setFieldValue  })=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: "flex flex-col ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-2xl text-center my-8",
                                    children: "Autorizaci\xf3n para el tratamiento de datos personales del Banco"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-justify",
                                    children: "Autorizo al Municipio de Medell\xedn, identificado con NIT N\xba 890.905.211-1, como Responsable para tratar mis datos personales conforme a su Pol\xedtica de Tratamiento de Datos Personales, disponible en www.medellin.gov.co, para que sean incluidos en sus bases de datos, para los siguientes fines: efectuar las gestiones pertinentes para el desarrollo de las funciones legales y cumplimiento del objeto misional del programa Banco de los Pobres adscrito a la Secretar\xeda de Desarrollo Econ\xf3mico, cuyo prop\xf3sito es crear de mecanismos financieros flexibles que permitan promover las actividades productivas, comerciales y de servicios de la ciudad, apoy\xe1ndose en entidades nacionales e internacionales que ejecutan actividades tendientes a desarrollar y operar l\xedneas de cr\xe9ditos encaminadas a financiar proyectos individuales y colectivos. En esa medida, declaro que la informaci\xf3n suministrada es correcta, veraz, verificable y actualizada. Igualmente autorizo al Municipio de Medell\xedn, para contactarme v\xeda WhatsApp, correo electr\xf3nico, mensajes de texto, llamadas telef\xf3nicas a mis n\xfameros fijo y celular, comunicaciones escritas u otros medios de comunicaci\xf3n; para compartir mis datos personales con terceros aliados o contratistas del Municipio de Medell\xedn, as\xed como con otras entidades del orden municipal, departamental y nacional, para garantizar la prestaci\xf3n de sus servicios o para la ejecuci\xf3n de planes, programas, proyectos o estrategias conjuntas. Asimismo, declaro que conozco que no es obligatorio responder preguntas relacionadas con datos sensibles o de menores de edad (en calidad de representante legal) y que, en caso de proporcionarlos, estoy autorizando expresamente su Tratamiento y que tengo derecho a conocer, consultar, actualizar, rectificar y suprimir mi informaci\xf3n, solicitar prueba de esta autorizaci\xf3n y revocarla (cuando ello sea posible y no se requieran los datos en virtud de las funciones legales del Municipio de Medell\xedn), derechos que se me ha informado puedo ejercer a trav\xe9s de los canales: portal web www.medellin.gov.co y presencial en el Centro de Servicio a la Ciudadan\xeda, MasCercas y Casas de Gobierno."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
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
                                    className: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: " mt-4 p-2 w-1/2 text-white rounded-full bg-color_primary_2_ligth",
                                    children: "Siguiente"
                                })
                            ]
                        })
                    ]
                }));
            }
        })
    }));
};
/* harmony default export */ const FormIndividual_HabbeasData = (HabbeasData);

;// CONCATENATED MODULE: ./components/Forms/FormIndividual/index.js










// EXTERNAL MODULE: ./components/MultiStepIndicator.js
var MultiStepIndicator = __webpack_require__(5012);
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(2280);
;// CONCATENATED MODULE: ./components/Forms/FormPrerequisitos/DataPrerequisitos.js
const DataPrerequisitos_classInput = 'h-10 border border-gray-400 px-4';
const DataPrerequisitos = [
    {
        id: 'pr-1',
        name: 'rango_edad',
        fieldName: '\xbfTienes entre 18 y 75 a\xf1os de edad?',
        type: 'select',
        className: `${DataPrerequisitos_classInput}`,
        options: [
            // {
            //   id: 'pr-1.1',
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 'pr-1.2',
                name: true,
                fieldName: 'Si'
            },
            {
                id: 'pr-1.3',
                name: 'no',
                fieldName: 'No'
            }, 
        ]
    },
    {
        id: 'pr-2',
        name: 'estrato_valido',
        fieldName: '\xbfVives en los estratos 1, 2 y 3 de Medell\xedn o sus corregimientos?',
        type: 'select',
        className: `${DataPrerequisitos_classInput}`,
        options: [
            // {
            //   id: 'pr-2.1',
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 'pr-2.2',
                name: true,
                fieldName: 'Si'
            },
            {
                id: 'pr-2.3',
                name: 'no',
                fieldName: 'No'
            }, 
        ]
    },
    {
        id: 'pr-3',
        name: 'no_central_riesgo',
        fieldName: 'Est\xe1 reportado en centrales de riesgo por m\xe1s de 2.5 SMMLV?',
        type: 'select',
        className: `${DataPrerequisitos_classInput}`,
        options: [
            // {
            //   id: 'pr-3.1',
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 'pr-3.2',
                name: 'si',
                fieldName: 'Si'
            },
            {
                id: 'pr-3.3',
                name: true,
                fieldName: 'No'
            }, 
        ]
    },
    {
        id: 'pr-4',
        name: 'no_deudas_vigentes',
        fieldName: 'Tienes cr\xe9ditos vigentes o tarjetas de cr\xe9dito activas con entidades financieras?',
        type: 'select',
        className: `${DataPrerequisitos_classInput}`,
        options: [
            // {
            //   id: 'pr-4.1',
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 'pr-4.2',
                name: 'si',
                fieldName: 'Si'
            },
            {
                id: 'pr-4.3',
                name: true,
                fieldName: 'No'
            }, 
        ]
    },
    {
        id: 'pr-5',
        name: 'ubicacion_negocio',
        fieldName: '\xbfEl negocio que vas a crear o a fortalecer est\xe1 ubicado en Medell\xedn o en sus corregimientos, en cualquier estrato?.',
        type: 'select',
        className: `${DataPrerequisitos_classInput}`,
        options: [
            // {
            //   id: 'p5-1.1',
            //   name: '',
            //   fieldName: '--Selecciona un campo--',
            // },
            {
                id: 'p5-1.2',
                name: true,
                fieldName: 'Si'
            },
            {
                id: 'p5-1.3',
                name: 'no',
                fieldName: 'No'
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./components/Forms/FormPrerequisitos/index.js








const FormPrerequisitos = (props)=>{
    const router = (0,router_.useRouter)();
    const { paso , rol  } = router.query;
    const [cedula, solicitud] = router.query.usuario;
    const initialVal = {
        rango_edad: '',
        estrato_valido: '',
        no_central_riesgo: '',
        no_deudas_vigentes: '',
        ubicacion_negocio: ''
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full md:w-11/12 mx-auto rounded-lg p-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialVal,
            validationSchema: external_yup_.object({
                rango_edad: external_yup_.string().required('requerido').oneOf([
                    'true'
                ], 'Estos son los requisitos m\xednimos'),
                estrato_valido: external_yup_.string().required('requerido').oneOf([
                    'true'
                ], 'Estos son los requisitos m\xednimos'),
                no_central_riesgo: external_yup_.string().required('requerido').oneOf([
                    'true'
                ], 'Estos son los requisitos m\xednimos'),
                no_deudas_vigentes: external_yup_.string().required('requerido').oneOf([
                    'true'
                ], 'Estos son los requisitos m\xednimos'),
                ubicacion_negocio: external_yup_.string().required('requerido').oneOf([
                    'true'
                ], 'Estos son los requisitos m\xednimos')
            }),
            onSubmit: async (value)=>{
                const obj = {};
                for(const prop in value){
                    obj[prop] = Boolean(value[prop]);
                }
                props.setForm((prevState)=>({
                        ...prevState,
                        formulario_individual: {
                            ...prevState.formulario_individual,
                            datos_prerequisitos: {
                                ...obj
                            }
                        }
                    })
                );
                router.push(`/individual/${cedula}/${solicitud || ''}?paso=FDE_2&rol=${rol}`);
                props.setShowPreRequisitos(false);
            },
            children: ({ values  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        DataPrerequisitos.map((field)=>{
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
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex md:block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "mt-8 p-4 w-3/5 mx-auto lg:w-2/5 text-lg text-white font-semibold rounded-full bg-color_primary_2_ligth md:float-right",
                                children: "Solicitar Cr\xe9dito"
                            })
                        })
                    ]
                })
        })
    }));
};
/* harmony default export */ const Forms_FormPrerequisitos = (FormPrerequisitos);

// EXTERNAL MODULE: ./components/protected-route.jsx
var protected_route = __webpack_require__(840);
// EXTERNAL MODULE: ./components/Banner.js
var Banner = __webpack_require__(3865);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
;// CONCATENATED MODULE: ./pages/individual/[...usuario].js













function Individual({ primer_nombre ='' , segundo_nombre ='' , primer_apellido ='' , segundo_apellido ='' , num_identificacion ='' , correo ='' ,  }) {
    const router = (0,router_.useRouter)();
    const { paso , rol , usuario  } = router.query;
    const [, setIsCompletedCreditDestination] = external_react_.useState(false);
    const [, setIsCompletedBasicInformation] = external_react_.useState(false);
    const [, setIsCompletedInfoMate] = external_react_.useState(false);
    const [, setIsCompletedPopulationVariables] = external_react_.useState(false);
    const [, setIsCompletedContactCitizen] = external_react_.useState(false);
    const [, setIsCompletedInfoBusiness] = external_react_.useState(false);
    const [, setIsCompletedReferenceForm] = external_react_.useState(false);
    const [, setIsCompletedFinancialReportApplicant] = external_react_.useState(false);
    const [, setIsCompletedHabbeasData] = external_react_.useState(false);
    const [form, setForm] = external_react_.useState({
        formulario_individual: {}
    });
    const [showModal, setShowModal] = external_react_.useState(true);
    const [, setShowPreRequisitos] = external_react_.useState(true);
    const [solicitud_id, setSolicitud_id] = external_react_.useState('');
    const [current, setCurrent] = external_react_.useState(2);
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
        router.push(`/individual/${usuario[0]}/${solicitud_id || usuario[1]}?paso=FDE_9&rol=${rol}`);
    };
    const handleHome = ()=>{
        router.push("/");
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                        children: "Banco de las oportunidades"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                        rel: "icon",
                                        href: "/favicon.ico"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: " text-3xl font-bold",
                                        children: "Solicitud de cr\xe9dito"
                                    }),
                                    ' '
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-screen md:w-10/12 mx-auto mb-8",
                                children: [
                                    'FDE_0',
                                    'FDE_1'
                                ].includes(paso) ? null : /*#__PURE__*/ jsx_runtime_.jsx(MultiStepIndicator/* default */.Z, {
                                    current: current,
                                    paso: paso,
                                    solicitud_id: solicitud_id,
                                    usuario: usuario,
                                    rol: rol,
                                    form_type: "deudor"
                                })
                            }),
                            paso === 'FDE_0' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "modal-root",
                                className: "absolute inset-y-0 inset-x-0 m-auto h-3/4 backdrop-blur-md"
                            }) : null,
                            paso === 'FDE_0' ? /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
                                Component: ()=>/*#__PURE__*/ jsx_runtime_.jsx(FormIndividual_HabbeasData, {
                                        form,
                                        setForm,
                                        setIsCompletedHabbeasData,
                                        setShowModal
                                    })
                                ,
                                modalProps: {
                                    showModal,
                                    setShowModal
                                }
                            }) : null,
                            [
                                'ASESOR',
                                'ADMINISTRADOR',
                                'SUPERADMINISTRADOR'
                            ].includes(rol) ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-9/12 mx-auto mb-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/backoffice",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "bg-color_primary_2_ligth text-white rounded-lg px-6 py-2 border hover:bg-color_primary_2 font-semibold",
                                        children: "Volver a backoffice"
                                    })
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:w-9/12 mx-auto",
                                children: [
                                    paso === 'FDE_1' ? /*#__PURE__*/ jsx_runtime_.jsx(Forms_FormPrerequisitos, {
                                        setShowPreRequisitos: setShowPreRequisitos,
                                        form: form,
                                        setForm: setForm
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                        children: [
                                            paso === 'FDE_2' ? /*#__PURE__*/ jsx_runtime_.jsx(BasicInformation, {
                                                setIsCompletedBasicInformation: setIsCompletedBasicInformation,
                                                setCurrent: setCurrent,
                                                current: current,
                                                form: form,
                                                setForm: setForm,
                                                setSolicitud_id: setSolicitud_id,
                                                userInfo: {
                                                    primer_nombre,
                                                    segundo_nombre,
                                                    primer_apellido,
                                                    segundo_apellido,
                                                    num_identificacion
                                                }
                                            }) : null,
                                            //isCompletedBasicInformation &&
                                            paso === 'FDE_3' ? /*#__PURE__*/ jsx_runtime_.jsx(CreditDestination, {
                                                setIsCompletedCreditDestination: setIsCompletedCreditDestination,
                                                setCurrent: setCurrent,
                                                current: current,
                                                form: form,
                                                setForm: setForm,
                                                solicitud_id: solicitud_id
                                            }) : null,
                                            //isCompletedCreditDestination &&
                                            paso === 'FDE_4' ? /*#__PURE__*/ jsx_runtime_.jsx(FormIndividual_InfoMate, {
                                                setIsCompletedInfoMate: setIsCompletedInfoMate,
                                                setCurrent: setCurrent,
                                                current: current,
                                                form: form,
                                                setForm: setForm,
                                                solicitud_id: solicitud_id
                                            }) : null,
                                            //isCompletedInfoMate &&
                                            paso === 'FDE_5' ? /*#__PURE__*/ jsx_runtime_.jsx(FormIndividual_PopulationVariables, {
                                                setIsCompletedPopulationVariables: setIsCompletedPopulationVariables,
                                                setCurrent: setCurrent,
                                                current: current,
                                                form: form,
                                                setForm: setForm,
                                                solicitud_id: solicitud_id
                                            }) : null,
                                            //isCompletedPopulationVariables &&
                                            paso === 'FDE_6' ? /*#__PURE__*/ jsx_runtime_.jsx(FormIndividual_ContactCitizenForm, {
                                                setIsCompletedContactCitizen: setIsCompletedContactCitizen,
                                                setCurrent: setCurrent,
                                                current: current,
                                                form: form,
                                                setForm: setForm,
                                                solicitud_id: solicitud_id,
                                                correo: correo
                                            }) : null,
                                            //isCompletedContactCitizen &&
                                            paso === 'FDE_7' ? /*#__PURE__*/ jsx_runtime_.jsx(FormIndividual_InfoBusiness, {
                                                setIsCompletedInfoBusiness: setIsCompletedInfoBusiness,
                                                setCurrent: setCurrent,
                                                current: current,
                                                form: form,
                                                setForm: setForm,
                                                solicitud_id: solicitud_id
                                            }) : null,
                                            //isCompletedInfoBusiness &&
                                            paso === 'FDE_8' ? /*#__PURE__*/ jsx_runtime_.jsx(References, {
                                                setIsCompletedReferenceForm: setIsCompletedReferenceForm,
                                                setCurrent: setCurrent,
                                                current: current,
                                                form: form,
                                                setForm: setForm,
                                                solicitud_id: solicitud_id
                                            }) : null,
                                            //isCompletedReferenceForm &&
                                            paso === 'FDE_9' ? /*#__PURE__*/ jsx_runtime_.jsx(FormIndividual_FinancialReportApplicant, {
                                                setIsCompletedFinancialReportApplicant: setIsCompletedFinancialReportApplicant,
                                                setCurrent: setCurrent,
                                                current: current,
                                                solicitud_id: solicitud_id,
                                                form: form,
                                                setForm: setForm
                                            }) : null,
                                            //isCompletedFinancialReportApplicant &&
                                            paso === 'FDE_10' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "font-bold text-2xl text-gray-700",
                                                        children: "\"Recibimos tu informaci\xf3n, la solicitud est\xe1 en proceso de estudio.\""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        onClick: handleBack,
                                                        className: "mt-6 p-4 w-2/5 text-white rounded-full bg-red-500",
                                                        children: "Anterior"
                                                    }),
                                                    rol === 'USUARIO' && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        onClick: handleHome,
                                                        type: "button",
                                                        className: "mt-6 p-4 w-2/5 text-white rounded-full bg-color_primary_2_ligth",
                                                        children: "Inicio"
                                                    })
                                                ]
                                            }) : null
                                        ]
                                    })
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
        const dataUser = await responseFetch.json();
        if (responseFetch.status == 200) {
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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986,6795,843,840,6135,4780,7576,3491,6613], () => (__webpack_exec__(7224)));
module.exports = __webpack_exports__;

})();