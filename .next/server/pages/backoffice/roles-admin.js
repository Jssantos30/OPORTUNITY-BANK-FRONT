"use strict";
(() => {
var exports = {};
exports.id = 31;
exports.ids = [31,4820,9792];
exports.modules = {

/***/ 4311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ roles_admin),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
;// CONCATENATED MODULE: ./components/ADMIN/SearchAdmin.js



const SearchAdmin = ({ IdSearched , dispatch , setLoading  })=>{
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
                        messageRol: `Hubo un error, no ha iniciado sesión en el portal por primera vez :( `
                    });
                    setTimeout(()=>{
                        dispatch({
                            messageRol: ''
                        });
                    }, 5000);
                    setLoading(false);
                }
                if (res.status === 200) {
                    const filterUsers = [
                        dataUser
                    ].filter(({ rolID  })=>rolID === 1 || rolID === 4
                    );
                    dispatch({
                        dataUser: filterUsers || [],
                        messageRol: '',
                        statusRol: filterUsers[0]?.rolID || ''
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
                                            placeholder: "Buscar por c\xe9dula",
                                            name: "userId",
                                            value: IdSearched,
                                            onKeyDown: (e)=>handleEnter(e)
                                            ,
                                            onChange: (event)=>dispatch({
                                                    IdSearched: event.target.value
                                                })
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
/* harmony default export */ const ADMIN_SearchAdmin = (SearchAdmin);

;// CONCATENATED MODULE: ./components/ADMIN/TableAdmin.js

function TableAdmin({ children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "table-responsive",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            className: "w-full mx-auto bg-white rounded-lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    className: "border-b font-bold",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
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
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "p-4 text-center",
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
/* harmony default export */ const ADMIN_TableAdmin = (TableAdmin);

;// CONCATENATED MODULE: ./components/ADMIN/TableRowAdmin.js

function TableRowAdmin(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: "border-b last:border-b-0 font-section",
            children: [
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
                    children: props.correo
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                    className: "text-center p-4",
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
/* harmony default export */ const ADMIN_TableRowAdmin = (TableRowAdmin);
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

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./auth-context.jsx
var auth_context = __webpack_require__(6795);
;// CONCATENATED MODULE: ./components/protected-route-admin.js




const ProtectedRouteAdmin = ({ children , preventRedirect  })=>{
    const { push , route  } = (0,router_.useRouter)();
    const { isAuth , status , rol  } = (0,auth_context/* useAuthContext */.Eu)();
    external_react_.useEffect(()=>{
        if (!isAuth && !preventRedirect && status === auth_context/* STATUS.resolved */.Q_.resolved) push('/login');
    }, [
        isAuth,
        preventRedirect,
        push,
        status
    ]);
    external_react_.useEffect(()=>{
        if (route.includes('backoffice/roles-admin') && ![
            'ADMINISTRADOR'
        ].includes(rol)) {
            push('/backoffice');
        }
    }, [
        rol,
        route,
        isAuth
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    }));
};

// EXTERNAL MODULE: ./components/SuperAdmin/Modal.js
var Modal = __webpack_require__(7420);
// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(5181);
// EXTERNAL MODULE: ./Layout/LayoutAdmin.js
var LayoutAdmin = __webpack_require__(5681);
// EXTERNAL MODULE: ./utils/protect-route.server.js
var protect_route_server = __webpack_require__(6376);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(843);
// EXTERNAL MODULE: ./components/TitleBackoffice.js
var TitleBackoffice = __webpack_require__(1319);
;// CONCATENATED MODULE: ./pages/backoffice/roles-admin.js













const classModal = `fixed inset-5 bg-modal-info  flex items-center justify-center z-50`;
const SUCCESS_CLASS = 'mb-4 bg-modal-success border border-green-400 text-green-700 px-4 py-3 rounded relative';
const ERROR_CLASS = 'mb-4 bg-modal-delete border border-red-400 text-red-700 px-4 py-3 rounded relative';
function RolesAdmin({ asesores , roles  }) {
    const [dataAdminAsesores, setDataAdminAsesores] = external_react_.useState([]);
    const [loading, setLoading] = external_react_.useState(false);
    const reducer = (current, upt)=>({
            ...current,
            ...upt
        })
    ;
    const [{ IdSearched , statusRol , dataUser  }, dispatch] = external_react_.useReducer(reducer, {
        IdSearched: '',
        statusRol: '',
        dataUser: []
    });
    const [message, setMessage] = external_react_.useState('');
    const [rolValueSelected, setRolValueSelected] = external_react_.useState('');
    const [boxConfirmChange, setBoxConfirmChange] = external_react_.useState(false);
    //TODO: TRAERSE LOS USUARIO
    external_react_.useEffect(()=>{
        setLoading(true);
        dispatch({
            dataUser: asesores || []
        });
        setDataAdminAsesores(asesores || []);
        setLoading(false);
    }, [
        IdSearched,
        asesores
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
            const URL = `${"https://www.medellin.gov.co/bancopobres/autenticacionms/"}roles/actualizar-usuario-rol`;
            const { responseComplete  } = await (0,fetchData/* fetchData */.r)(URL, dataToSend);
            if (responseComplete) {
                setBoxConfirmChange(false);
                setMessage('Proceso exitoso, el Usuario ha sido actualizado.');
                setTimeout(()=>{
                    setMessage('');
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
    return(/*#__PURE__*/ jsx_runtime_.jsx(LayoutAdmin/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProtectedRouteAdmin, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TitleBackoffice/* default */.Z, {
                    children: " Configuraci\xf3n de usuarios. "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ADMIN_SearchAdmin, {
                        IdSearched,
                        statusRol,
                        dispatch,
                        dataUser,
                        setLoading,
                        dataAdminAsesores
                    })
                }),
                !IdSearched ? loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Loading .... "
                }) : asesores.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(ADMIN_TableAdmin, {
                    children: asesores.map((user, index)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(ADMIN_TableRowAdmin, {
                            cedula: user.cedula,
                            nombres: user.nombres,
                            apellidos: user.apellidos,
                            correo: user.correo,
                            rol: {
                                rolUser: user.rol || undefined,
                                dataRoles: roles,
                                dispatch,
                                statusRol: user.rolID,
                                setBoxConfirmChange,
                                setRolValueSelected
                            },
                            acciones: 'ACCIONES'
                        }, index));
                    })
                }) : 'No se han encontrado resultados' : loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                }) : dataUser.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(ADMIN_TableAdmin, {
                    children: dataUser.map((user, index)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(ADMIN_TableRowAdmin, {
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
                    id: "confirm-changes-ADMIN",
                    className: boxConfirmChange && classModal
                }),
                boxConfirmChange ? /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
                    nodo: "confirm-changes-ADMIN",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border rounded-lg p-4 flex flex-col bg-white ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Est\xe1s seguro deseas cambiar el rol de este usuario "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: "mr-4 mt-6 p-2 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth",
                                        onClick: handleModifyRol,
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
                message !== '' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: message.includes('error') ? ERROR_CLASS : SUCCESS_CLASS,
                    children: message
                }) : null
            ]
        })
    }));
}
/* harmony default export */ const roles_admin = (RolesAdmin);
async function getServerSideProps(context) {
    const sessionInfo = (0,protect_route_server/* protectRouteAndRedirect */.G)(context.req, context.res);
    if (sessionInfo.redirect) return sessionInfo;
    const [fetchRoles, fetchUserAdminYAsesores] = await Promise.all([
        await (0,custom_fetch/* customFetch */.rK)('roles/listar-roles', {
            type: custom_fetch/* RequestTypes.auth */.lO.auth,
            headers: {
                Authorization: `Bearer ${sessionInfo.token}`
            }
        }),
        await (0,custom_fetch/* customFetch */.rK)('roles/administrador?page=1&limit=10', {
            type: custom_fetch/* RequestTypes.auth */.lO.auth,
            headers: {
                Authorization: `Bearer ${sessionInfo.token}`
            }
        }), 
    ]);
    const roles = await fetchRoles.json();
    if (!roles) {
        return {
            props: {
                asesores: [],
                roles: []
            }
        };
    }
    const responseAdminAsesores = await fetchUserAdminYAsesores.json();
    const filterAsesores = responseAdminAsesores.items.filter((user)=>user.rolID === 4
    );
    const filterRoles = roles.filter((rol)=>rol.id === 1 || rol.id === 4
    );
    return {
        props: {
            asesores: filterAsesores,
            roles: filterRoles
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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4986,6795,843,5912,5681], () => (__webpack_exec__(4311)));
module.exports = __webpack_exports__;

})();