"use strict";
(() => {
var exports = {};
exports.id = 4449;
exports.ids = [4449,4820,9792];
exports.modules = {

/***/ 3897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ documentos),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./auth-context.jsx
var auth_context = __webpack_require__(6795);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
// EXTERNAL MODULE: ./components/Forms/SelectionInput.js
var Forms_SelectionInput = __webpack_require__(3491);
;// CONCATENATED MODULE: ./components/DocumentUpload/Cartera.js





const ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const Cartera = (props)=>{
    const btn = external_react_.useRef();
    const [error, setError] = external_react_.useState('');
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: props.carteraCastigadaData.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: {
                cartera: ''
            },
            onSubmit: async (values)=>{
                const { cartera  } = values;
                try {
                    const fetchDocument = await (0,custom_fetch/* customFetch */.rK)(`files/${cartera}`, {
                        type: custom_fetch/* RequestTypes.files */.lO.files
                    });
                    if (fetchDocument.status === 200) {
                        const doc = await fetchDocument.blob();
                        const create_url = window.URL.createObjectURL(doc);
                        const a = document.createElement('a');
                        a.href = create_url;
                        a.download = cartera;
                        a.click();
                        window.URL.revokeObjectURL(create_url);
                    } else {
                        setError('Hubo un error');
                        setTimeout(()=>{
                            setError('');
                        }, 5000);
                    }
                } catch (err) {
                    setError('Hubo un error');
                    setTimeout(()=>{
                        setError('');
                    }, 5000);
                }
            },
            children: ()=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex pb-4 md:pb-0 flex-col md:flex-row items-center justify-between w-full border-b border-color_gray_8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-8/12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Forms_SelectionInput/* default */.Z, {
                                    name: "cartera",
                                    className: 'h-10 border border-gray-400 px-4  mt-6',
                                    options: props.carteraCastigadaData,
                                    render: (option, index)=>{
                                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                            value: option.filename,
                                            children: [
                                                option.name,
                                                ' '
                                            ]
                                        }, index));
                                    }
                                }, "cartera")
                            }),
                            error !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: error.includes('error') && ERROR_CLASS,
                                children: error
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    id: 'btn-download',
                                    ref: btn,
                                    type: "submit",
                                    className: "btn-primario m-2 w-3/5",
                                    children: "Descargar"
                                })
                            })
                        ]
                    })
                }));
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "border-b border-color_gray_8 pb-4",
            children: "No hay datos para mostrar"
        })
    }));
};

;// CONCATENATED MODULE: ./components/DocumentUpload/Cofinet.js





const Cofinet_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const Cofinet = (props)=>{
    const btn = external_react_.useRef();
    const [error, setError] = external_react_.useState('');
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: props.cofinetData.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: {
                cofinet: ''
            },
            onSubmit: async (values)=>{
                const { cofinet  } = values;
                try {
                    const fetchDocument = await (0,custom_fetch/* customFetch */.rK)(`files/${cofinet}`, {
                        type: custom_fetch/* RequestTypes.files */.lO.files
                    });
                    if (fetchDocument.status === 200) {
                        const doc = await fetchDocument.blob();
                        const create_url = window.URL.createObjectURL(doc);
                        const a = document.createElement('a');
                        a.href = create_url;
                        a.download = cofinet;
                        a.click();
                        window.URL.revokeObjectURL(create_url);
                    } else {
                        setError('Hubo un error');
                        setTimeout(()=>{
                            setError('');
                        }, 5000);
                    }
                } catch (err) {
                    setError('Hubo un error');
                    setTimeout(()=>{
                        setError('');
                    }, 5000);
                }
            },
            children: ()=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex pb-4 md:pb-0 flex-col md:flex-row items-center justify-between w-full border-b border-color_gray_8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-8/12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Forms_SelectionInput/* default */.Z, {
                                    name: "cofinet",
                                    className: 'h-10 border border-gray-400 px-4  mt-6',
                                    options: props.cofinetData,
                                    render: (option, index)=>{
                                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                            value: option.filename,
                                            children: [
                                                option.name,
                                                ' '
                                            ]
                                        }, index));
                                    }
                                }, "cofinet")
                            }),
                            error !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: error.includes('error') && Cofinet_ERROR_CLASS,
                                children: error
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    id: 'btn-download',
                                    ref: btn,
                                    type: "submit",
                                    className: "btn-primario m-2 w-3/5",
                                    children: "Descargar"
                                })
                            })
                        ]
                    })
                }));
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "border-b border-color_gray_8 pb-4",
            children: "No hay datos para mostrar"
        })
    }));
};

;// CONCATENATED MODULE: ./components/DocumentUpload/Recaudo.js





const Recaudo_ERROR_CLASS = 'mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative';
const Recaudo = (props)=>{
    const btn = React.useRef();
    const [error, setError] = React.useState('');
    return(/*#__PURE__*/ _jsx("div", {
        className: "",
        children: props.recaudoData.length > 0 ? /*#__PURE__*/ _jsx(Formik, {
            initialValues: {
                Recaudo: ''
            },
            onSubmit: async (values)=>{
                const { Recaudo: Recaudo1  } = values;
                try {
                    const fetchDocument = await customFetch(`files/${Recaudo1}`, {
                        type: RequestTypes.files
                    });
                    if (fetchDocument.status === 200) {
                        const doc = await fetchDocument.blob();
                        const create_url = window.URL.createObjectURL(doc);
                        const a = document.createElement('a');
                        a.href = create_url;
                        a.download = Recaudo1;
                        a.click();
                        window.URL.revokeObjectURL(create_url);
                    } else {
                        setError('Hubo un error');
                        setTimeout(()=>{
                            setError('');
                        }, 5000);
                    }
                } catch (err) {
                    setError('Hubo un error');
                    setTimeout(()=>{
                        setError('');
                    }, 5000);
                }
            },
            children: ()=>{
                return(/*#__PURE__*/ _jsx("div", {
                    children: /*#__PURE__*/ _jsxs(Form, {
                        className: "flex pb-4 md:pb-0 flex-col md:flex-row items-center justify-between w-full border-b border-color_gray_8",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "w-full md:w-8/12",
                                children: /*#__PURE__*/ _jsx(SelectionInput, {
                                    name: "Recaudo",
                                    className: 'h-10 border border-gray-400 px-4  mt-6',
                                    options: props.recaudoData,
                                    render: (option, index)=>{
                                        return(/*#__PURE__*/ _jsxs("option", {
                                            value: option.filename,
                                            children: [
                                                option.name,
                                                ' '
                                            ]
                                        }, index));
                                    }
                                }, "Recaudo")
                            }),
                            error !== '' ? /*#__PURE__*/ _jsx("div", {
                                className: error.includes('error') && Recaudo_ERROR_CLASS,
                                children: error
                            }) : null,
                            /*#__PURE__*/ _jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ _jsx("button", {
                                    id: 'btn-download',
                                    ref: btn,
                                    type: "submit",
                                    className: "btn-primario m-2 w-3/5",
                                    children: "Descargar"
                                })
                            })
                        ]
                    })
                }));
            }
        }) : /*#__PURE__*/ _jsx("div", {
            className: "border-b border-color_gray_8 pb-4",
            children: "No hay datos para mostrar"
        })
    }));
};

;// CONCATENATED MODULE: ./components/DocumentUpload/Extractos.js





const Extractos_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const Extractos = (props)=>{
    const btn1 = external_react_.useRef();
    const [error, setError] = external_react_.useState('');
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: props.extractData.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: {
                extractos: ''
            },
            onSubmit: async (values)=>{
                const { extractos  } = values;
                try {
                    const fetchDocument = await (0,custom_fetch/* customFetch */.rK)(`files/${extractos}`, {
                        type: custom_fetch/* RequestTypes.files */.lO.files
                    });
                    if (fetchDocument.status === 200) {
                        const doc = await fetchDocument.blob();
                        const create_url = window.URL.createObjectURL(doc);
                        const a = document.createElement('a');
                        a.href = create_url;
                        a.download = extractos;
                        const btn = document.getElementById('btn-download');
                        btn.append(a);
                        a.click();
                        window.URL.revokeObjectURL(create_url);
                    } else {
                        setError('Hubo un error');
                        setTimeout(()=>{
                            setError('');
                        }, 5000);
                    }
                } catch (err) {
                    setError('Hubo un error');
                    setTimeout(()=>{
                        setError('');
                    }, 5000);
                }
            },
            children: ()=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex pb-4 md:pb-0 flex-col md:flex-row items-center justify-between w-full border-b border-color_gray_8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-8/12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Forms_SelectionInput/* default */.Z, {
                                    name: "extractos",
                                    className: 'h-10 border border-gray-400 px-4  mt-6',
                                    options: props.extractData,
                                    render: (option, index)=>{
                                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                            value: option.filename,
                                            children: [
                                                option.name,
                                                ' '
                                            ]
                                        }, index));
                                    }
                                }, "extractos")
                            }),
                            error !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: error.includes('error') && Extractos_ERROR_CLASS,
                                children: error
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    id: 'btn-download',
                                    ref: btn1,
                                    type: "submit",
                                    className: "btn-primario m-2 w-3/5",
                                    children: "Descargar"
                                })
                            })
                        ]
                    })
                }));
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "border-b border-color_gray_8 pb-4",
            children: "No hay datos para mostrar actualmente."
        })
    }));
};

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ./utils/updateSendDocument.js

const updateSendDocument_updateSendDocument = (file, setMesg)=>{
    setMesg('Archivo cargado exitosamente');
    (0,custom_fetch/* customFetch */.rK)(`files/${file}`, {
        type: custom_fetch/* RequestTypes.files */.lO.files
    }).then((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.log(err);
    });
};

;// CONCATENATED MODULE: ./components/DocumentUpload/Upload209Consolidado.js






const SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const Upload209Consolidado_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const CustomField = /*#__PURE__*/ external_react_default().forwardRef(({ label , ...props }, ref)=>{
    const [field, meta] = (0,external_formik_.useField)(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "w-full md:w-8/12 px-0",
                children: [
                    label,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...field,
                        ...props,
                        ref: ref
                    })
                ]
            }),
            meta.touched && meta.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "error",
                children: meta.error
            }) : null
        ]
    }));
});
CustomField.displayName = '';
const Upload209Consolidado = ()=>{
    const ref = external_react_default().useRef();
    const [msg, setMsg] = external_react_default().useState('');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: {
                    uploadCartera: ''
                },
                validationSchema: external_yup_.object({
                    uploadCartera: external_yup_.string().matches(/209_consolidado.(xlsx|xlsm)$/, 'El archivo debe llamarse 209_consolidado y formato .xlsm ejemplo: 209_consolidado.xlsm')
                }),
                onSubmit: async (_, actions)=>{
                    try {
                        const file = new FormData();
                        file.append('file', ref.current.files[0]);
                        const fetchDoc = await (0,custom_fetch/* customFetch */.rK)(`files/upload?mantenerNombre=true`, {
                            method: 'POST',
                            body: file,
                            type: custom_fetch/* RequestTypes.files */.lO.files,
                            preventContentType: true
                        });
                        if (fetchDoc.status === 201) {
                            setMsg('Archivo cargado exitosamente');
                            const docName = ref.current.files[0].name;
                            updateSendDocument_updateSendDocument(docName, setMsg);
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                            actions.resetForm();
                        }
                        if (fetchDoc.status === 400 || fetchDoc.status === 404) {
                            setMsg('Hubo un error, intente m\xe1s tarde');
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                        }
                    } catch (err) {
                        setMsg('Hubo un error, intente m\xe1s tarde');
                        setTimeout(()=>{
                            setMsg('');
                        }, 5000);
                    }
                },
                children: ()=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex flex-col md:flex-row items-center justify-between w-full pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CustomField, {
                                ref: ref,
                                name: "uploadCartera",
                                type: "file",
                                accept: ".xlsx, .xlsb, .xlsm",
                                className: "h-10 w-full border-gray-400 md:px-0 mt-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "btn-secundario m-2 w-3/5",
                                    children: "Subir"
                                })
                            })
                        ]
                    }));
                }
            }),
            msg !== '' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: msg.includes('error') ? Upload209Consolidado_ERROR_CLASS : SUCCESS_CLASS,
                children: [
                    " ",
                    msg,
                    " "
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const DocumentUpload_Upload209Consolidado = (Upload209Consolidado);

;// CONCATENATED MODULE: ./components/DocumentUpload/UploadCartera.js






const UploadCartera_SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const UploadCartera_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const UploadCartera_CustomField = /*#__PURE__*/ external_react_default().forwardRef(({ label , ...props }, ref)=>{
    const [field, meta] = (0,external_formik_.useField)(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "w-full md:w-8/12 px-0",
                children: [
                    label,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...field,
                        ...props,
                        ref: ref
                    })
                ]
            }),
            meta.touched && meta.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "error",
                children: meta.error
            }) : null
        ]
    }));
});
UploadCartera_CustomField.displayName = '';
const UploadCartera = ()=>{
    const ref = external_react_default().useRef();
    const [msg, setMsg] = external_react_default().useState('');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: {
                    uploadCartera: ''
                },
                validationSchema: external_yup_.object({
                    uploadCartera: external_yup_.string().matches(/cartera_castigada_\d{6}.(xlsx|xlsb)$/, 'El archivo debe llamarse cartera_castigada__a\xf1o-mes y formato .xlsx o .xlsb ejemplo: cartera_castigada_202112.xlsx')
                }),
                onSubmit: async (_, actions)=>{
                    try {
                        const file = new FormData();
                        file.append('file', ref.current.files[0]);
                        const fetchDoc = await (0,custom_fetch/* customFetch */.rK)(`files/upload?mantenerNombre=true`, {
                            method: 'POST',
                            body: file,
                            type: custom_fetch/* RequestTypes.files */.lO.files,
                            preventContentType: true
                        });
                        if (fetchDoc.status === 201) {
                            setMsg('Archivo cargado exitosamente');
                            const docName = ref.current.files[0].name;
                            updateSendDocument_updateSendDocument(docName, setMsg);
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                            actions.resetForm();
                        }
                        if (fetchDoc.status === 400 || fetchDoc.status === 404) {
                            setMsg('Hubo un error, intente m\xe1s tarde');
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                        }
                    } catch (err) {
                        setMsg('Hubo un error, intente m\xe1s tarde');
                        setTimeout(()=>{
                            setMsg('');
                        }, 5000);
                    }
                },
                children: ()=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex flex-col md:flex-row items-center justify-between w-full pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(UploadCartera_CustomField, {
                                ref: ref,
                                name: "uploadCartera",
                                type: "file",
                                accept: ".xlsx, .xlsb",
                                className: "h-10 w-full border-gray-400 md:px-0 mt-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "btn-secundario m-2 w-3/5",
                                    children: "Subir"
                                })
                            })
                        ]
                    }));
                }
            }),
            msg !== '' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: msg.includes('error') ? UploadCartera_ERROR_CLASS : UploadCartera_SUCCESS_CLASS,
                children: [
                    " ",
                    msg,
                    " "
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const DocumentUpload_UploadCartera = (UploadCartera);

;// CONCATENATED MODULE: ./components/DocumentUpload/UploadCofinet.js






const UploadCofinet_SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const UploadCofinet_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const UploadCofinet_CustomField = /*#__PURE__*/ external_react_.forwardRef(({ label , ...props }, ref)=>{
    const [field, meta] = (0,external_formik_.useField)(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "w-full md:w-8/12 px-0",
                children: [
                    label,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...field,
                        ...props,
                        ref: ref
                    })
                ]
            }),
            meta.touched && meta.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "error",
                children: meta.error
            }) : null
        ]
    }));
});
UploadCofinet_CustomField.displayName = '';
const UploadCofinet = ()=>{
    const ref = external_react_.useRef();
    const [msg, setMsg] = external_react_.useState('');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: {
                    uploadCofinet: ''
                },
                validationSchema: external_yup_.object({
                    uploadCofinet: external_yup_.string().matches(/coofinep_\d{6}.(xlsx|xlsb)$/, 'El archivo debe llamarse coofinep_a\xf1o-mes y formato .xlsx o .xlsb ejemplo: coofinep_202112.xlsx ')
                }),
                onSubmit: async (_, actions)=>{
                    try {
                        const file = new FormData();
                        file.append('file', ref.current.files[0]);
                        const fetchDoc = await (0,custom_fetch/* customFetch */.rK)('files/upload?mantenerNombre=true', {
                            method: 'POST',
                            body: file,
                            type: custom_fetch/* RequestTypes.files */.lO.files,
                            preventContentType: true
                        });
                        if (fetchDoc.status === 201) {
                            setMsg('Archivo cargado exitosamente');
                            const docName = ref.current.files[0].name;
                            updateSendDocument_updateSendDocument(docName, setMsg);
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                            actions.resetForm();
                        }
                        if (fetchDoc.status === 400 || fetchDoc.status === 404) {
                            setMsg('Hubo un error, intente m\xe1s tarde');
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                        }
                    } catch (err) {
                        setMsg('Hubo un error, intente m\xe1s tarde');
                        setTimeout(()=>{
                            setMsg('');
                        }, 5000);
                    }
                },
                children: ()=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex flex-col md:flex-row items-center justify-between w-full pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(UploadCofinet_CustomField, {
                                ref: ref,
                                name: "uploadCofinet",
                                type: "file",
                                accept: ".xlsx, .xlsb",
                                className: "h-10 w-full border-gray-400 md:px-0 mt-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "btn-secundario m-2 w-3/5",
                                    children: "Subir"
                                })
                            })
                        ]
                    }));
                }
            }),
            msg !== '' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: msg.includes('error') ? UploadCofinet_ERROR_CLASS : UploadCofinet_SUCCESS_CLASS,
                children: [
                    " ",
                    msg,
                    " "
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const DocumentUpload_UploadCofinet = (UploadCofinet);

;// CONCATENATED MODULE: ./components/DocumentUpload/UploadConsolidado.js






const UploadConsolidado_SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const UploadConsolidado_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const UploadConsolidado_CustomField = /*#__PURE__*/ external_react_default().forwardRef(({ label , ...props }, ref)=>{
    const [field, meta] = (0,external_formik_.useField)(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "w-full md:w-8/12 px-0",
                children: [
                    label,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...field,
                        ...props,
                        ref: ref
                    })
                ]
            }),
            meta.touched && meta.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "error",
                children: meta.error
            }) : null
        ]
    }));
});
UploadConsolidado_CustomField.displayName = '';
const UploadConsolidados = ()=>{
    const ref = React.useRef();
    const [msg, setMsg] = React.useState('');
    return(/*#__PURE__*/ _jsxs("div", {
        className: "w-full border-b border-color_gray_8 pb-4",
        children: [
            /*#__PURE__*/ _jsx(Formik, {
                initialValues: {
                    uploadConsolidado: ''
                },
                validationSchema: Yup.object({
                    uploadConsolidado: Yup.string()
                }),
                onSubmit: async (value, actions)=>{
                    try {
                        const file = new FormData();
                        file.append('file', ref.current.files[0]);
                        const fetchDoc = await customFetch('files/upload?mantenerNombre=true', {
                            method: 'POST',
                            body: file,
                            type: RequestTypes.files,
                            preventContentType: true
                        });
                        if (fetchDoc.status === 201) {
                            setMsg('Archivo cargado exitosamente');
                            const docName = ref.current.files[0].name;
                            updateSendDocument(docName, setMsg);
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                            actions.resetForm();
                        }
                        if (fetchDoc.status === 400 || fetchDoc.status === 404) {
                            setMsg('Hubo un error, intente m\xe1s tarde');
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                        }
                    } catch (err) {
                        setMsg('Hubo un error, intente m\xe1s tarde');
                        setTimeout(()=>{
                            setMsg('');
                        }, 5000);
                    }
                },
                children: ()=>{
                    return(/*#__PURE__*/ _jsxs(Form, {
                        className: "flex flex-col md:flex-row items-center justify-between w-full pt-4",
                        children: [
                            /*#__PURE__*/ _jsx(UploadConsolidado_CustomField, {
                                ref: ref,
                                name: "uploadConsolidado",
                                type: "file",
                                accept: ".xlsx, .xlsb",
                                className: "h-10 w-full border-gray-400 md:px-0 mt-4"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ _jsx("button", {
                                    type: "submit",
                                    className: "btn-secundario m-2 w-3/5",
                                    children: "subir"
                                })
                            })
                        ]
                    }));
                }
            }),
            msg !== '' ? /*#__PURE__*/ _jsxs("div", {
                className: msg.includes('error') ? UploadConsolidado_ERROR_CLASS : UploadConsolidado_SUCCESS_CLASS,
                children: [
                    " ",
                    msg,
                    " "
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const UploadConsolidado = ((/* unused pure expression or super */ null && (UploadConsolidados)));

;// CONCATENATED MODULE: ./components/DocumentUpload/UploadExtract.js






const UploadExtract_SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const UploadExtract_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const UploadExtract_CustomField = /*#__PURE__*/ external_react_default().forwardRef(({ label , ...props }, ref)=>{
    const [field, meta] = (0,external_formik_.useField)(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "w-full md:w-8/12 px-0",
                children: [
                    label,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...field,
                        ...props,
                        ref: ref
                    })
                ]
            }),
            meta.touched && meta.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "error",
                children: meta.error
            }) : null
        ]
    }));
});
UploadExtract_CustomField.displayName = 'CustomField';
const UploadExtract = ()=>{
    const ref = external_react_default().useRef();
    const [msg, setMsg] = external_react_default().useState('');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: {
                    uploadExtract: ''
                },
                validationSchema: external_yup_.object({
                    uploadExtract: external_yup_.string().matches(/Extracto_\d{6}.(xlsx|xlsb)$/, 'El archivo debe llamarse Extracto_a\xf1o-mes y formato .xlsx o .xlsb ejemplo: Extracto_202112.xlsb')
                }),
                onSubmit: async (_, actions)=>{
                    try {
                        const url = `files/upload?mantenerNombre=true`;
                        const file = new FormData();
                        file.append('file', ref.current.files[0]);
                        const fetchDoc = await (0,custom_fetch/* customFetch */.rK)(url, {
                            method: 'POST',
                            body: file,
                            type: custom_fetch/* RequestTypes.files */.lO.files,
                            preventContentType: true
                        });
                        if (fetchDoc.status === 201) {
                            setMsg('Archivo cargado exitosamente');
                            const docName = ref.current.files[0].name;
                            updateSendDocument_updateSendDocument(docName, setMsg);
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                            actions.resetForm();
                        }
                        if (fetchDoc.status === 400 || fetchDoc.status === 404) {
                            setMsg('Hubo un error, intente m\xe1s tarde');
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                        }
                    } catch (err) {
                        setMsg('Hubo un error, intente m\xe1s tarde');
                        setTimeout(()=>{
                            setMsg('');
                        }, 5000);
                    }
                },
                children: ()=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex flex-col md:flex-row items-center justify-between w-full pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(UploadExtract_CustomField, {
                                ref: ref,
                                name: "uploadExtract",
                                type: "file",
                                accept: ".xlsx, .xlsb",
                                className: "h-10 w-full border-gray-400 md:px-0 mt-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "btn-secundario m-2 w-3/5",
                                    children: "Subir"
                                })
                            })
                        ]
                    }));
                }
            }),
            msg !== '' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: msg.includes('error') ? UploadExtract_ERROR_CLASS : UploadExtract_SUCCESS_CLASS,
                children: [
                    " ",
                    msg,
                    " "
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const DocumentUpload_UploadExtract = (UploadExtract);

;// CONCATENATED MODULE: ./components/DocumentUpload/UploadPlanPago.js






const UploadPlanPago_SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const UploadPlanPago_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const UploadPlanPago_CustomField = /*#__PURE__*/ external_react_default().forwardRef(({ label , ...props }, ref)=>{
    const [field, meta] = (0,external_formik_.useField)(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "w-full md:w-8/12 px-0",
                children: [
                    label,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...field,
                        ...props,
                        ref: ref
                    })
                ]
            }),
            meta.touched && meta.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "error",
                children: meta.error
            }) : null
        ]
    }));
});
UploadPlanPago_CustomField.displayName = 'CustomField';
const UploadPlanPago = ()=>{
    const ref = external_react_default().useRef();
    const [msg, setMsg] = external_react_default().useState('');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: {
                    planPagos: ''
                },
                validationSchema: external_yup_.object({
                    planPagos: external_yup_.string().matches(/PLAN DE PAGOS.(xlsx|xlsb)$/, 'El archivo debe llamarse PLAN DE PAGOS y formato .xlsx o .xlsb ejemplo: PLAN DE PAGOS.xlsx ')
                }),
                onSubmit: async (_, actions)=>{
                    try {
                        const file = new FormData();
                        file.append('file', ref.current.files[0]);
                        const fetchDoc = await (0,custom_fetch/* customFetch */.rK)('files/upload?mantenerNombre=true', {
                            method: 'POST',
                            body: file,
                            type: custom_fetch/* RequestTypes.files */.lO.files,
                            preventContentType: true
                        });
                        if (fetchDoc.status === 201) {
                            setMsg('Archivo cargado exitosamente');
                            const docName = ref.current.files[0].name;
                            updateSendDocument_updateSendDocument(docName, setMsg);
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                            actions.resetForm();
                        }
                        if (fetchDoc.status === 400 || fetchDoc.status === 404) {
                            setMsg('Hubo un error, intente m\xe1s tarde');
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                        }
                    } catch (err) {
                        setMsg('Hubo un error, intente m\xe1s tarde');
                        setTimeout(()=>{
                            setMsg('');
                        }, 5000);
                    }
                },
                children: ()=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex flex-col md:flex-row items-center justify-between w-full pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(UploadPlanPago_CustomField, {
                                ref: ref,
                                name: "planPagos",
                                type: "file",
                                accept: ".xlsx, .xlsb",
                                className: "h-10 w-full border-gray-400 md:px-0 mt-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "btn-secundario m-2 w-3/5",
                                    children: "Subir"
                                })
                            })
                        ]
                    }));
                }
            }),
            msg !== '' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: msg.includes('error') ? UploadPlanPago_ERROR_CLASS : UploadPlanPago_SUCCESS_CLASS,
                children: [
                    " ",
                    msg,
                    " "
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const DocumentUpload_UploadPlanPago = (UploadPlanPago);

;// CONCATENATED MODULE: ./components/DocumentUpload/UploadRecaudoCofinep.js






const UploadRecaudoCofinep_SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const UploadRecaudoCofinep_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const UploadRecaudoCofinep_CustomField = /*#__PURE__*/ external_react_default().forwardRef(({ label , ...props }, ref)=>{
    const [field, meta] = (0,external_formik_.useField)(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "w-full md:w-8/12 px-0",
                children: [
                    label,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...field,
                        ...props,
                        ref: ref
                    })
                ]
            }),
            meta.touched && meta.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "error",
                children: meta.error
            }) : null
        ]
    }));
});
UploadRecaudoCofinep_CustomField.displayName = '';
const UploadRecaudoCofinep = ()=>{
    const ref = external_react_default().useRef();
    const [msg, setMsg] = external_react_default().useState('');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: {
                    uploadCartera: ''
                },
                validationSchema: external_yup_.object({
                    uploadCartera: external_yup_.string().matches(/recaudo_coofinep_\d{6}.(xlsx|xlsb)$/, 'El archivo debe llamarse recaudo_coofinep_a\xf1omes y formato .xlsx o xlsb ejemplo: recaudo_coofinep_202110.xlsx')
                }),
                onSubmit: async (_, actions)=>{
                    try {
                        const file = new FormData();
                        file.append('file', ref.current.files[0]);
                        const fetchDoc = await (0,custom_fetch/* customFetch */.rK)(`files/upload?mantenerNombre=true`, {
                            method: 'POST',
                            body: file,
                            type: custom_fetch/* RequestTypes.files */.lO.files,
                            preventContentType: true
                        });
                        if (fetchDoc.status === 201) {
                            setMsg('Archivo cargado exitosamente');
                            const docName = ref.current.files[0].name;
                            updateSendDocument_updateSendDocument(docName, setMsg);
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                            actions.resetForm();
                        }
                        if (fetchDoc.status === 400 || fetchDoc.status === 404) {
                            setMsg('Hubo un error, intente m\xe1s tarde');
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                        }
                    } catch (err) {
                        setMsg('Hubo un error, intente m\xe1s tarde');
                        setTimeout(()=>{
                            setMsg('');
                        }, 5000);
                    }
                },
                children: ()=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex flex-col md:flex-row items-center justify-between w-full pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(UploadRecaudoCofinep_CustomField, {
                                ref: ref,
                                name: "uploadCartera",
                                type: "file",
                                accept: ".xlsx, .xlsb",
                                className: "h-10 w-full border-gray-400 md:px-0 mt-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "btn-secundario m-2 w-3/5",
                                    children: "Subir"
                                })
                            })
                        ]
                    }));
                }
            }),
            msg !== '' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: msg.includes('error') ? UploadRecaudoCofinep_ERROR_CLASS : UploadRecaudoCofinep_SUCCESS_CLASS,
                children: [
                    " ",
                    msg,
                    " "
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const DocumentUpload_UploadRecaudoCofinep = (UploadRecaudoCofinep);

;// CONCATENATED MODULE: ./components/DocumentUpload/UploadSolicitudCreditoConsolidado.js






const UploadSolicitudCreditoConsolidado_SUCCESS_CLASS = 'mensaje-exito mb-4 px-4 py-3 rounded relative';
const UploadSolicitudCreditoConsolidado_ERROR_CLASS = 'mensaje-error mb-4 px-4 py-3 rounded relative';
const UploadSolicitudCreditoConsolidado_CustomField = /*#__PURE__*/ external_react_default().forwardRef(({ label , ...props }, ref)=>{
    const [field, meta] = (0,external_formik_.useField)(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "w-full md:w-8/12 px-0",
                children: [
                    label,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...field,
                        ...props,
                        ref: ref
                    })
                ]
            }),
            meta.touched && meta.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "error",
                children: meta.error
            }) : null
        ]
    }));
});
UploadSolicitudCreditoConsolidado_CustomField.displayName = 'CustomField';
const UploadSolicitudCreditoConsolidado = ()=>{
    const ref = external_react_default().useRef();
    const [msg, setMsg] = external_react_default().useState('');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: {
                    uploadSolicitudCreditoConsolidado: ''
                },
                validationSchema: external_yup_.object({
                    uploadSolicitudCreditoConsolidado: external_yup_.string().matches(/SOLICITUDES DE CREDITO CONSOLIDADO Coofinep.(xlsx|xlsb)$/, 'El archivo debe llamarse SOLICITUDES DE CREDITO CONSOLIDADO Coofinep.xlsx y el formato .xlsx ejemplo: SOLICITUDES DE CREDITO CONSOLIDADO Coofinep.xlsx ')
                }),
                onSubmit: async (_, actions)=>{
                    try {
                        const file = new FormData();
                        file.append('file', ref.current.files[0]);
                        const fetchDoc = await (0,custom_fetch/* customFetch */.rK)('files/upload?mantenerNombre=true', {
                            method: 'POST',
                            body: file,
                            type: custom_fetch/* RequestTypes.files */.lO.files,
                            preventContentType: true
                        });
                        if (fetchDoc.status === 201) {
                            setMsg('Archivo cargado exitosamente');
                            const docName = ref.current.files[0].name;
                            updateSendDocument_updateSendDocument(docName, setMsg);
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                            actions.resetForm();
                        }
                        if (fetchDoc.status === 400 || fetchDoc.status === 404) {
                            setMsg('Hubo un error, intente m\xe1s tarde');
                            setTimeout(()=>{
                                setMsg('');
                            }, 5000);
                        }
                    } catch (err) {
                        setMsg('Hubo un error, intente m\xe1s tarde');
                        setTimeout(()=>{
                            setMsg('');
                        }, 5000);
                    }
                },
                children: ()=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                        className: "flex flex-col md:flex-row items-center justify-between w-full pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(UploadSolicitudCreditoConsolidado_CustomField, {
                                ref: ref,
                                name: "uploadSolicitudCreditoConsolidado",
                                type: "file",
                                accept: ".xlsx, .xlsb",
                                className: "h-10 w-full border-gray-400 md:px-0 mt-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:w-1/4 w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "btn-secundario m-2 w-3/5",
                                    children: "Subir"
                                })
                            })
                        ]
                    }));
                }
            }),
            msg !== '' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: msg.includes('error') ? UploadSolicitudCreditoConsolidado_ERROR_CLASS : UploadSolicitudCreditoConsolidado_SUCCESS_CLASS,
                children: [
                    " ",
                    msg,
                    " "
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const DocumentUpload_UploadSolicitudCreditoConsolidado = (UploadSolicitudCreditoConsolidado);

// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(5181);
// EXTERNAL MODULE: ./components/TitleBackoffice.js
var TitleBackoffice = __webpack_require__(1319);
// EXTERNAL MODULE: ./Layout/LayoutRol.js
var LayoutRol = __webpack_require__(9730);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
;// CONCATENATED MODULE: ./pages/backoffice/documentos.js




















const classSection = `flex flex-col border my-2 rounded-lg bg-white w-full card-custom`;
const documentos_ERROR_CLASS = 'mensaje-error grid';
const Documentos = ({ extractData , cofinetData , recaudoData , carteraCastigadaData  })=>{
    const [error, setError] = external_react_default().useState('');
    const [errorSolCreditoConsolidada, setErrorSolCreditoConsolidada] = external_react_default().useState('');
    const { rol: rol1  } = (0,auth_context/* useAuthContext */.Eu)();
    async function assignURL(data, fileName) {
        const doc = await data.blob();
        const create_url = window.URL.createObjectURL(doc);
        const a = document.createElement('a');
        a.href = create_url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(create_url);
    }
    const handleDownloadConsolidado = async (e)=>{
        e.preventDefault();
        try {
            const consolidado = '209_consolidado.xlsm';
            const fetchData = await (0,custom_fetch/* customFetch */.rK)(`files/${consolidado}`, {
                type: custom_fetch/* RequestTypes.files */.lO.files
            });
            if (fetchData.status === 200) {
                await assignURL(fetchData, consolidado, 'consolidado');
                setError('');
            } else {
                setError('Hubo un error, intenta m\xe1s tarde');
                setTimeout(()=>{
                    setError('');
                }, 5000);
            }
        } catch (error) {
            setError('Hubo un error, intenta m\xe1s tarde');
            setTimeout(()=>{
                setError('');
            }, 5000);
        }
    };
    const handleDownloadPlanPago = async (e)=>{
        e.preventDefault();
        const planPago = 'PLAN DE PAGOS.xlsx';
        try {
            const data = await (0,custom_fetch/* customFetch */.rK)(`files/${planPago}`, {
                type: custom_fetch/* RequestTypes.files */.lO.files
            });
            if (data.status === 200) {
                await assignURL(data, planPago, 'planPago');
                setError('');
            } else {
                setError('Hubo un error, intenta m\xe1s tarde');
                setTimeout(()=>{
                    setError('');
                }, 5000);
            }
        } catch (error) {
            setError('Hubo un error, intenta m\xe1s tarde');
            setTimeout(()=>{
                setError('');
            }, 5000);
        }
    };
    const handleDownloadSolicitudesDeCreditoConsolidado = async (e)=>{
        e.preventDefault();
        const SolicitudesDeCreditoConsolidado = 'SOLICITUDES DE CREDITO CONSOLIDADO Coofinep.xlsx';
        try {
            const data = await (0,custom_fetch/* customFetch */.rK)(`files/${SolicitudesDeCreditoConsolidado}`, {
                type: custom_fetch/* RequestTypes.files */.lO.files
            });
            if (data.status === 200) {
                await assignURL(data, SolicitudesDeCreditoConsolidado, 'solCreditos');
                setErrorSolCreditoConsolidada('');
            } else {
                setErrorSolCreditoConsolidada('Hubo un error, intenta m\xe1s tarde');
                setTimeout(()=>{
                    setErrorSolCreditoConsolidada('');
                }, 5000);
            }
        } catch (error) {
            setErrorSolCreditoConsolidada('Hubo un error, intenta m\xe1s tarde');
            setTimeout(()=>{
                setErrorSolCreditoConsolidada('');
            }, 5000);
        }
    };
    const RenderDoc = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TitleBackoffice/* default */.Z, {
                    children: "Documentos"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: `${classSection}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-card-custom",
                                    children: "Extractos"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "body-card-custom",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Extractos, {
                                            extractData: extractData
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(DocumentUpload_UploadExtract, {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: `${classSection}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-card-custom",
                                    children: "Coofinep"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "body-card-custom",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Cofinet, {
                                            cofinetData: cofinetData
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(DocumentUpload_UploadCofinet, {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: `${classSection}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-card-custom",
                                    children: "Recaudo Coofinep"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "body-card-custom",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DocumentUpload_UploadRecaudoCofinep, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: `${classSection}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-card-custom",
                                    children: "209 Consolidado"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "body-card-custom",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DocumentUpload_Upload209Consolidado, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-card-custom flex justify-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            id: "consolidado",
                                            type: "button",
                                            onClick: (e)=>handleDownloadConsolidado(e)
                                            ,
                                            className: "btn-primario",
                                            children: "Descargar consolidado"
                                        }),
                                        error !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: error.includes('error') ? documentos_ERROR_CLASS : null,
                                            children: error
                                        }) : null
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: `${classSection}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-card-custom",
                                    children: "Cartera"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "body-card-custom",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Cartera, {
                                            carteraCastigadaData: carteraCastigadaData
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(DocumentUpload_UploadCartera, {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: `${classSection}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-card-custom",
                                    children: "Solicitudes cr\xe9dito consolidado"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "body-card-custom",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Cartera, {
                                            carteraCastigadaData: carteraCastigadaData
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(DocumentUpload_UploadSolicitudCreditoConsolidado, {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-card-custom flex justify-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "solCreditos",
                                                type: "button",
                                                onClick: (e)=>handleDownloadSolicitudesDeCreditoConsolidado(e)
                                                ,
                                                className: "btn-primario",
                                                children: "Descargar Solicitudes credito consolidado"
                                            })
                                        }),
                                        errorSolCreditoConsolidada !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: errorSolCreditoConsolidada.includes('error') ? documentos_ERROR_CLASS : null,
                                            children: errorSolCreditoConsolidada
                                        }) : null
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: `${classSection}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-card-custom",
                                    children: "Plan de pago"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "body-card-custom",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DocumentUpload_UploadPlanPago, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-card-custom flex justify-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            id: "planPago",
                                            type: "button",
                                            onClick: (e)=>handleDownloadPlanPago(e)
                                            ,
                                            className: "btn-primario",
                                            children: "Descargar Plan de pago"
                                        }),
                                        error !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: error.includes('error') ? documentos_ERROR_CLASS : null,
                                            children: error
                                        }) : null
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    ;
    function renderLayout(rol) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(LayoutRol/* default */.Z, {
            rolUser: rol,
            children: /*#__PURE__*/ jsx_runtime_.jsx(RenderDoc, {})
        }));
    }
    return renderLayout(rol1);
};
/* harmony default export */ const documentos = (Documentos);
async function getServerSideProps(context) {
    const sessionInfo = (0,protect_route_server/* protectRouteAndRedirect */.G)(context.req, context.res);
    if (sessionInfo.redirect) return sessionInfo;
    const [fetchExtract, fetchCofinet, fetchCarteraCastigada] = await Promise.all([
        await (0,custom_fetch/* customFetch */.rK)('files/list/extracto', {
            type: custom_fetch/* RequestTypes.files */.lO.files,
            headers: {
                Authorization: `Bearer ${sessionInfo.token}`
            }
        }),
        await (0,custom_fetch/* customFetch */.rK)('files/list/coofinep', {
            type: custom_fetch/* RequestTypes.files */.lO.files,
            headers: {
                Authorization: `Bearer ${sessionInfo.token}`
            }
        }),
        await (0,custom_fetch/* customFetch */.rK)('files/list/cartera-castigada', {
            type: custom_fetch/* RequestTypes.files */.lO.files,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${sessionInfo.token}`
            }
        }), 
    ]);
    let extractData = await fetchExtract.json();
    let carteraCastigadaData = await fetchCarteraCastigada.json();
    let cofinetData = await fetchCofinet.json();
    let recaudoData = cofinetData.filter((line)=>line.name.includes('recaudo')
    );
    cofinetData = cofinetData.filter((line)=>!line.name.includes('recaudo')
    );
    if (!extractData) {
        extractData = [];
    }
    if (!cofinetData) {
        cofinetData = [];
    }
    if (!recaudoData) {
        recaudoData = [];
    }
    if (!carteraCastigadaData) {
        carteraCastigadaData = [];
    }
    return {
        props: {
            extractData,
            cofinetData,
            recaudoData,
            carteraCastigadaData
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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986,6795,843,840,6135,5912,8908,4780,5681,5114,3491], () => (__webpack_exec__(3897)));
module.exports = __webpack_exports__;

})();