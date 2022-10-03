"use strict";
(() => {
var exports = {};
exports.id = 7955;
exports.ids = [7955,4820,9792];
exports.modules = {

/***/ 7684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ roles),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./Layout/LayoutSuperadmin.js
var LayoutSuperadmin = __webpack_require__(8908);
// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(5181);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
;// CONCATENATED MODULE: ./components/SuperAdmin/Search.js



const Search = ({ IdSearched , dispatch , setLoading  })=>{
    const handleSearch = async ()=>{
        if (IdSearched) {
            setLoading(true);
            try {
                const res = await (0,custom_fetch/* customFetch */.rK)(`roles/listar-usuario-rol/${IdSearched}`, {
                    type: custom_fetch/* RequestTypes.auth */.lO.auth
                });
                const dataUser = await res.json();
                if (res.status === 400) {
                    dispatch({
                        messageRol: 'Hubo un error, no ha iniciado sesi\xf3n en el portal por primera vez :('
                    });
                    setTimeout(()=>{
                        dispatch({
                            messageRol: ''
                        });
                    }, 5000);
                    setLoading(false);
                }
                if (res.status === 200) {
                    dispatch({
                        dataUser: [
                            dataUser
                        ],
                        messageRol: '',
                        statusRol: dataUser.rolID
                    });
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
            }
        }
    };
    const handleClean = ()=>{
        dispatch({
            IdSearched: ''
        });
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    };
    const handleEnter = (e)=>{
        if (e.keyCode === 13) {
            handleSearch(e);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "card-custom mb-4 w-full",
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
                                            value: IdSearched,
                                            onChange: (event)=>dispatch({
                                                    IdSearched: event.target.value
                                                })
                                            ,
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
        })
    }));
};
/* harmony default export */ const SuperAdmin_Search = (Search);

;// CONCATENATED MODULE: ./components/SuperAdmin/TableSuperAdmin.js

function TableSuperAdmin({ children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "table-responsive",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            className: "w-full mx-auto bg-white rounded-lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-left",
                                children: "C.C"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-left",
                                children: "Nombres"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-left",
                                children: "Apellidos"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-left",
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-left",
                                children: "Rol"
                            })
                        ]
                    })
                }),
                children
            ]
        })
    }));
}
/* harmony default export */ const SuperAdmin_TableSuperAdmin = (TableSuperAdmin);

// EXTERNAL MODULE: ./components/SuperAdmin/Modal.js
var Modal = __webpack_require__(7420);
;// CONCATENATED MODULE: ./components/SuperAdmin/TableRowSuperAdmin.js

// import Acciones from '../Acciones'
// import BtnEstado from '../BtnEstado'
function TableRowSuperAdmin(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        className: "last:border-b-0 text-sm",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: "border-b font-section",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-left p-4",
                    children: props.cedula
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-left p-4",
                    children: props.nombres
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-left p-4",
                    children: props.apellidos
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "text-left p-4",
                    children: props.correo
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                    className: "text-left p-4",
                    children: [
                        ' ',
                        /*#__PURE__*/ jsx_runtime_.jsx(RenderSelect, {
                            dataRoles: props.rol.dataRoles,
                            currentRolUser: props.rol.rolUser,
                            dipatch: props.rol.dipatch,
                            statusRol: props.rol.statusRol,
                            setBoxConfirmChange: props.rol.setBoxConfirmChange,
                            setRolValueSelected: props.rol.setRolValueSelected,
                            cedula: props.cedula
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const SuperAdmin_TableRowSuperAdmin = (TableRowSuperAdmin);
function RenderSelect({ dataRoles , statusRol , setBoxConfirmChange , setRolValueSelected , cedula ,  }) {
    const handleChangeRol = (e)=>{
        setBoxConfirmChange(true);
        setRolValueSelected({
            [e.target.name]: e.target.value,
            cedula: e.target.name,
            valor: e.target.value
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("select", {
        name: cedula,
        value: statusRol,
        onChange: handleChangeRol,
        children: dataRoles.map((opt)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                value: opt.id,
                children: [
                    ' ',
                    opt.nombre,
                    ' '
                ]
            }, opt.id));
        })
    }));
}

// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(843);
// EXTERNAL MODULE: ./components/protected-route-superadmin.js
var protected_route_superadmin = __webpack_require__(5862);
;// CONCATENATED MODULE: ./components/Filtro/FilterRoles.js


const FilterRoles = (props)=>{
    const [pages, setPages] = external_react_default().useState([]);
    external_react_default().useEffect(()=>{
        const numPages = [];
        for(let i = 1; i <= props.meta.totalPages; i++){
            numPages.push(i);
        }
        setPages(numPages);
    }, [
        props.meta.totalPages
    ]);
    const handleReset = ()=>{
        props.setMeta((prev)=>{
            return {
                ...prev,
                currentPage: 1
            };
        });
    };
    const handlePrev = ()=>{
        props.setMeta((prev)=>{
            return {
                ...prev,
                currentPage: Math.max(prev.currentPage - 1, 1)
            };
        });
    };
    const handleNext = ()=>{
        props.setMeta((prev)=>{
            return {
                ...prev,
                currentPage: Math.min(prev.currentPage + 1, prev.totalPages)
            };
        });
    };
    const handleSelect = (e)=>{
        props.setMeta((prev)=>{
            return {
                ...prev,
                itemsPerPage: e.target.value,
                currentPage: 1
            };
        });
    };
    const handlePage = (pagina)=>{
        props.setMeta((prev)=>{
            return {
                ...prev,
                currentPage: pagina
            };
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between my-4 items-center font-section",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "numero-registros-text font-small",
                        children: "Registros por p\xe1gina"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        name: "registro",
                        id: "registro",
                        value: props.meta.itemsPerPage,
                        onChange: handleSelect,
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                className: "custom-option",
                                value: "1",
                                children: " 1 "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                className: "custom-option",
                                value: "10",
                                children: " 10 "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                className: "custom-option",
                                value: "20",
                                children: " 20 "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                className: "custom-option",
                                value: "50",
                                children: " 50 "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                className: "custom-option",
                                value: "100",
                                children: " 100 "
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: handlePrev,
                        className: "inline-flex items-center paginador-contenedor-ant",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "h-5 w-5",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillrule: "evenodd",
                                    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                    cliprule: "evenodd"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Ant. "
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex",
                        children: pages.map((pag, index)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>handlePage(index + 1)
                                ,
                                className: props.meta.currentPage === index + 1 ? `paginador-numeros-activo  inline-flex items-center` : `paginador-numeros  inline-flex items-center`,
                                children: pag
                            }, index));
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: handleNext,
                        className: "inline-flex items-center paginador-contenedor-sig",
                        disabled: props.meta.currentPage >= props.meta.totalPages ? true : false,
                        children: [
                            props.meta.currentPage >= props.meta.totalPages ? 'Sig.' : ` Siguiente`,
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "h-5 w-5",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
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

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
// EXTERNAL MODULE: ./components/TitleBackoffice.js
var TitleBackoffice = __webpack_require__(1319);
;// CONCATENATED MODULE: ./pages/backoffice/roles.js















const classModal = `fixed inset-0 bg-modal-info  flex justify-center z-50`;
const SUCCESS_CLASS = 'mb-4 mensaje-exito px-4 py-3 relative';
const ERROR_CLASS = 'mb-4 mensaje-error px-4 py-3 relative';
const initialMeta = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 10,
    itemCount: 0,
    totalPages: 5
};
const Roles = ({ roles  })=>{
    const [message, setMessage] = external_react_default().useState('');
    const [rolValueSelected, setRolValueSelected] = external_react_default().useState('');
    const [loading, setLoading] = external_react_default().useState(false);
    const router = (0,router_.useRouter)();
    const [dataAdminAsesores, setDataAdminAsesores] = external_react_default().useState([]);
    const [boxConfirmChange, setBoxConfirmChange] = external_react_default().useState(false);
    const reducer = (current, upt)=>({
            ...current,
            ...upt
        })
    ;
    const [{ IdSearched , statusRol , dataUser , messageRol  }, dispatch] = external_react_default().useReducer(reducer, {
        IdSearched: '',
        statusRol: '',
        dataUser: [],
        messageRol: ''
    });
    const [meta, setMeta] = external_react_default().useState(initialMeta);
    const { currentPage , itemsPerPage  } = meta;
    external_react_default().useEffect(()=>{
        async function run() {
            setLoading(true);
            try {
                const response = await (0,custom_fetch/* customFetch */.rK)(`roles/administrador?page=${meta.currentPage}&limit=${meta.itemsPerPage}`, {
                    type: custom_fetch/* RequestTypes.auth */.lO.auth
                });
                const dataAdminYAsesores = await response.json();
                if (response.status === 200) {
                    setMeta(dataAdminYAsesores?.meta);
                    dispatch({
                        dataUser: dataAdminYAsesores?.items || []
                    });
                    setDataAdminAsesores(dataAdminYAsesores?.items || []);
                    setLoading(false);
                } else {
                    setMeta(initialMeta);
                }
            } catch (error) {
                setMeta(initialMeta);
            }
        }
        run();
    }, [
        currentPage,
        itemsPerPage,
        meta.currentPage,
        meta.itemsPerPage
    ]);
    const handleModifyRol = async ()=>{
        dispatch({
            statusRol: rolValueSelected?.valor
        });
        const ChangeField = dataUser.filter((field)=>Number(field?.cedula) === Number(rolValueSelected?.cedula)
        );
        const { telefono , celular , cedula , ...infoUser } = ChangeField[0];
        const dataToSend = {
            ...infoUser,
            cedula: Number(cedula),
            telefono: Number(telefono),
            celular: Number(celular),
            rolID: Number(rolValueSelected?.valor)
        };
        //TODO: CAMBIAR EL STATUS DEL DROPDOWN
        try {
            // const URL = 'https://oportunitybank-auth.azurewebsites.net/api/v1/roles/actualizar-usuario-rol'
            const URL = `${"https://www.medellin.gov.co/bancopobres/autenticacionms/"}roles/actualizar-usuario-rol`;
            const { responseComplete  } = await (0,fetchData/* fetchData */.r)(URL, dataToSend);
            if (responseComplete) {
                setBoxConfirmChange(false);
                setMessage('Proceso exitoso, el Usuario ha sido actualizado.');
                setTimeout(()=>{
                    setMessage('');
                    router.replace(router.asPath);
                }, 5000);
                setLoading(true);
                setLoading(false);
            } else {
                setBoxConfirmChange(false);
                setMessage('Hubo un error, intentalo m\xe1s tarde o comunicate con server.');
                setTimeout(()=>{
                    setMessage('');
                }, 5000);
            }
        } catch (error) {
            setBoxConfirmChange(false);
            setMessage('Hubo un error, intentalo m\xe1s tarde o comunicate con server.');
            setTimeout(()=>{
                setMessage('');
            }, 5000);
        }
    };
    const handleCancelProcess = ()=>{
        setBoxConfirmChange(false);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(LayoutSuperadmin/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(protected_route_superadmin/* ProtectedRouteSuperAdmin */.c, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TitleBackoffice/* default */.Z, {
                    children: "Configuraci\xf3n de usuarios"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex w-full justify-between flex-col-reverse md:flex-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-row items-center justify-center"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SuperAdmin_Search, {
                            IdSearched,
                            statusRol,
                            dispatch,
                            dataUser,
                            setLoading,
                            dataAdminAsesores
                        })
                    ]
                }),
                messageRol !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: messageRol.includes('error') ? ERROR_CLASS : SUCCESS_CLASS,
                    children: messageRol
                }) : null,
                !IdSearched ? loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                }) : dataAdminAsesores.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card-custom",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "header-card-custom",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Lista de Usuarios"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "body-card-custom",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SuperAdmin_TableSuperAdmin, {
                                        children: dataAdminAsesores.map((user, index)=>{
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(SuperAdmin_TableRowSuperAdmin, {
                                                cedula: user.cedula,
                                                nombres: user.nombres,
                                                apellidos: user.apellidos,
                                                correo: user.correo,
                                                rol: {
                                                    rolUser: user.rol,
                                                    dataRoles: roles,
                                                    dispatch,
                                                    statusRol: user.rolID,
                                                    setBoxConfirmChange,
                                                    setRolValueSelected
                                                },
                                                acciones: 'ACCIONES'
                                            }, index));
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(FilterRoles, {
                                        meta: meta,
                                        setMeta: setMeta
                                    })
                                ]
                            })
                        ]
                    })
                }) : 'No se han encontrado resultados' : loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                }) : dataUser.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(SuperAdmin_TableSuperAdmin, {
                    children: dataUser.map((user, index)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(SuperAdmin_TableRowSuperAdmin, {
                            cedula: user.cedula,
                            nombres: user.nombres,
                            apellidos: user.apellidos,
                            correo: user.correo,
                            rol: {
                                rolUser: user.rol,
                                dataRoles: roles,
                                dispatch,
                                statusRol,
                                setBoxConfirmChange,
                                setRolValueSelected
                            },
                            acciones: 'ACCIONES'
                        }, index));
                    })
                }) : 'No se encontraron resultados',
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "confirm-changes",
                    className: boxConfirmChange && classModal
                }),
                boxConfirmChange ? /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
                    nodo: "confirm-changes",
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
                                        onClick: handleModifyRol,
                                        children: "Si"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: " order-1 btn-texto-gris",
                                        onClick: handleCancelProcess,
                                        children: "Cancelar"
                                    })
                                ]
                            })
                        ]
                    })
                }) : null,
                message !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: message.includes('error') ? ERROR_CLASS : SUCCESS_CLASS,
                    children: message
                }) : null
            ]
        })
    }));
};
/* harmony default export */ const roles = (Roles);
async function getServerSideProps(context) {
    const sessionInfo = (0,protect_route_server/* protectRouteAndRedirect */.G)(context.req, context.res);
    if (sessionInfo.redirect) return sessionInfo;
    const fetchRoles = await (0,custom_fetch/* customFetch */.rK)('roles/listar-roles', {
        type: custom_fetch/* RequestTypes.auth */.lO.auth,
        headers: {
            Authorization: `Bearer ${sessionInfo.token}`
        }
    });
    const roles = await fetchRoles.json();
    return {
        props: {
            roles
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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986,6795,843,5912,8908,5862], () => (__webpack_exec__(7684)));
module.exports = __webpack_exports__;

})();