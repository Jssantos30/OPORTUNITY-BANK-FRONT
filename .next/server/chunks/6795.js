"use strict";
exports.id = 6795;
exports.ids = [6795];
exports.modules = {

/***/ 6795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* binding */ AuthProvider),
/* harmony export */   "Eu": () => (/* binding */ useAuthContext),
/* harmony export */   "Q_": () => (/* binding */ STATUS)
/* harmony export */ });
/* unused harmony export ACTION */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_custom_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4986);




const initialConfigFilter = {
    numberRegister: 10,
    numberPage: 0
};
const AuthProvider = ({ children  })=>{
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [{ isAuth , status , mensaje , usuario , rol  }, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(reducer, {
        isAuth: false,
        status: STATUS.idle,
        mensaje: null,
        usuario: null,
        rol: null
    });
    const [openModal, setOpenModal] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [numberRegister, setNumberRegister] = react__WEBPACK_IMPORTED_MODULE_1__.useState(10);
    const [numberPage, setNumberPage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [configFilter, setConfigFilter] = react__WEBPACK_IMPORTED_MODULE_1__.useState(initialConfigFilter);
    const [NotFoundResult, setNotFoundResult] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        async function checkAuth() {
            const res = await (0,_utils_custom_fetch__WEBPACK_IMPORTED_MODULE_3__/* .customFetch */ .rK)('auth/usuario', {
                type: _utils_custom_fetch__WEBPACK_IMPORTED_MODULE_3__/* .RequestTypes.auth */ .lO.auth
            });
            if (res.ok) {
                const data = await res.json();
                dispatch({
                    isAuth: true,
                    status: STATUS.resolved,
                    rol: data.rol,
                    usuario: localStorage ? localStorage.getItem('usuario') : ''
                });
            } else {
                dispatch({
                    isAuth: false,
                    status: STATUS.resolved,
                    rol: 'USUARIO',
                    usuario: localStorage ? localStorage.getItem('usuario') : ''
                });
            }
        }
        checkAuth();
    }, []);
    const logout = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async ()=>{
        dispatch({
            isAuth: false
        });
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('usuario');
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_interno');
        await fetch(`${"/bancopobres"}/api/logout`);
        push('/login');
    }, [
        push
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(authContext.Provider, {
        value: {
            isAuth,
            status,
            mensaje,
            usuario,
            rol,
            dispatch,
            logout,
            openModal,
            setOpenModal,
            numberRegister,
            setNumberRegister,
            numberPage,
            setNumberPage,
            configFilter,
            setConfigFilter,
            NotFoundResult,
            setNotFoundResult
        },
        children: children
    }));
};
const authContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext({});
function useAuthContext() {
    const ctx = react__WEBPACK_IMPORTED_MODULE_1__.useContext(authContext);
    return ctx;
}
const reducer = (curr, updates)=>({
        ...curr,
        ...updates
    })
;
const STATUS = {
    idle: 'idle',
    pending: 'pending',
    resolved: 'resolved',
    rejected: 'rejected'
};
const ACTION = {
    REGISTRO_EXITOSO: 'REGISTRO EXITOSO',
    REGISTRO_ERROR: 'REGISTRO ERROR',
    OBTENER_USUARIO: 'OBTENER USUARIO',
    LOGIN_EXITOSO: 'LOGIN_EXITOSO',
    LOGIN_ERROR: 'LOGIN ERROR',
    ACTUALIZAR_CONTRASENA_EXITOSA: 'ACTUALIZAR CONTRASE\xd1A EXITOSA',
    ACTUALIZAR_CONTRASENA_ERROR: 'ACTUALIZAR CONTRASE\xd1A FALL\xd3',
    CERRAR_SESION: 'CERRAR SESION'
};


/***/ })

};
;