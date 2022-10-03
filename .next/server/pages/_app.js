"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,4820,9792];
exports.modules = {

/***/ 4415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./auth-context.jsx
var auth_context = __webpack_require__(6795);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Footer.js



// import { useRouter } from 'next/router'
const Footer = ({ image  })=>{
    // const [banner, setBanner] = useState(false)
    // const router = useRouter()
    // const currentUrl = router.pathname
    // useEffect(() => {
    //   currentUrl.includes('backoffice') ? setBanner(true) : setBanner(false)
    // }, [router])
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main-wrapper flex flex-col p-12 md:p-20 md:h-96 md:flex-row md:justify-around",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-8 mx-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "t text-xl font-semibold mb-3",
                                    children: "Men\xfa"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-disc list-outside font-semibold",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/creditos",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-2",
                                                    children: "L\xedneas de cr\xe9dito"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/programas",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-2",
                                                    children: "Programas"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/oportunidades",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-2",
                                                    children: "+Oportunidades"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "https://mercurio.medellin.gov.co/mercurio/inicialPqr.jsp",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-2",
                                                    children: "PQRS"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-8 mx-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "text-xl font-semibold mb-3",
                                    children: "Accesos r\xe1pidos"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-disc list-outside font-semibold",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/switch",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-2",
                                                    children: "Solicita un cr\xe9dito"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/simular-credito",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-2",
                                                    children: "Simulador de cr\xe9dito"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-8 mx-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "text-xl font-semibold mb-3",
                                    children: "Cont\xe1ctanos"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-disc list-outside font-semibold",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-2 email",
                                            children: "bancodelospobres@medellindigital.gov.co"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-2",
                                            children: "385 5555 Ext 5098-4046-7353-7352"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex mb-2",
                                                children: [
                                                    "Calle 44 # 52-165 s\xf3tano A",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "Centro administrativo la Alpujarra"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Directorio CEDEZO"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-16 ",
                style: {
                    background: '#0067D0'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main-wrapper flex items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: `${"/bancopobres"}/Logo-Alcadia-y-GOV.svg`,
                        alt: "Logo-Alcadia-y-GOV"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./Hooks/useDetectClickOut.js

function useDetectClickOut(initState) {
    const triggerRef = (0,external_react_.useRef)(null);
    const nodeRef = (0,external_react_.useRef)(null);
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(initState);
    const handleClickOutside = (event)=>{
        if (triggerRef.current && triggerRef.current.contains(event.target)) {
            return setShow(!show);
        }
        if (nodeRef.current && !nodeRef.current.contains(event.target)) {
            return setShow(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        document.addEventListener('click', handleClickOutside, true);
        return ()=>{
            document.removeEventListener('click', handleClickOutside, true);
        };
    });
    return {
        triggerRef,
        nodeRef,
        show,
        setShow
    };
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/custom-fetch.ts
var custom_fetch = __webpack_require__(4986);
// EXTERNAL MODULE: ./components/notification/index.js + 1 modules
var notification = __webpack_require__(8035);
;// CONCATENATED MODULE: ./components/NavBar.js








const Navbar = ()=>{
    const { logout , isAuth , rol , usuario  } = (0,auth_context/* useAuthContext */.Eu)();
    const { show , nodeRef , triggerRef , setShow  } = useDetectClickOut(false);
    const router = (0,router_.useRouter)();
    const [usuarioAuth, setusuarioAuth] = external_react_.useState(null);
    async function getUserInfo() {
        const responseFetch = await (0,custom_fetch/* customFetch */.rK)(`roles/listar-usuario-rol/${usuario}`, {
            type: custom_fetch/* RequestTypes.auth */.lO.auth
        });
        let dataUser = null;
        if (responseFetch.status == 200) {
            dataUser = await responseFetch.json();
        }
        setusuarioAuth(dataUser);
    }
    external_react_.useEffect(()=>{
        if (isAuth && usuario && usuarioAuth == null) {
            getUserInfo();
        }
    }, [
        isAuth,
        usuario,
        usuarioAuth
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `${!(/backoffice/.test(router.route) || /switch/.test(router.route)) ? 'bg-color_primary_2_transparent' : 'bg-white'}  flex flex-col text-sm md:text-xs lg:text-sm fixed w-full z-50`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-16 flex items-center",
                style: {
                    backgroundColor: '#0067D0'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main-wrapper w-full flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: `${"/bancopobres"}/Logo-GOV.svg`,
                            alt: "Logo-Gov"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: `${"/bancopobres"}/Logo-Alcaldia-franja.svg`,
                            alt: "Logo-alcald\xeda",
                            className: "mr-4"
                        })
                    ]
                })
            }),
            ![
                'ASESOR',
                'ADMINISTRADOR',
                'SUPERADMINISTRADOR'
            ].includes(rol) || !(/backoffice/.test(router.route) || /switch/.test(router.route)) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-wrapper h-20 flex items-center justify-between bg-color_primary_2_transparent",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between px-4 w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${"/bancopobres"}/logo-alcaldia.svg`,
                                        alt: "Logo-alcald\xeda"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "flex",
                                ref: triggerRef,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${"/bancopobres"}/menu-icon.svg`,
                                    alt: "menu-icon",
                                    className: "md:hidden"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        ref: nodeRef,
                        className: `${!show && 'hidden'} items-center md:pr-4 md:flex md:w-4/5 md:h-full`,
                        onClick: ()=>setShow(false)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/creditos",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto whitespace-nowrap",
                                    children: "L\xedneas de cr\xe9dito"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/programas",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto",
                                    children: "Programas"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/oportunidades",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto",
                                    children: "+Oportunidades"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/contacto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto",
                                    children: "Cont\xe1ctanos"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "https://mercurio.medellin.gov.co/mercurio/inicialPqr.jsp",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto",
                                    target: "_blank",
                                    children: "PQRS"
                                })
                            }),
                            isAuth ? [
                                'ASESOR',
                                'ADMINISTRADOR',
                                'SUPERADMINISTRADOR'
                            ].includes(rol) ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/backoffice",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "w-full md:w-44 text-center py-4 border-white md:border-color_primary_1 font-semibold md:border md:py-2 md:px-1 md:bg-white md:rounded-full md:mr-4 md:text-color_primary_1 border-t-2",
                                    children: "Backoffice"
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/solicitudes",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "w-full md:w-44 text-center py-4 border-white md:border-color_primary_1 font-semibold md:border md:py-2 md:px-1 md:bg-white md:rounded-full md:mr-4 md:text-color_primary_1 border-t-2",
                                    children: "Mis solicitudes"
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/login",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "w-full md:w-44 text-center py-4 border-white md:border-color_primary_1 font-semibold md:border md:py-2 md:px-1 md:bg-white md:rounded-full md:mr-4 md:text-color_primary_1 border-t-2 whitespace-nowrap",
                                            children: "Ingreso"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/crear-cuenta",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "w-full md:w-44 text-center py-4 md:border border-white bg-color_primary_1 text-white font-semibold md:py-2 md:px-1 md:rounded-full border-t-2 whitespace-nowrap",
                                            children: "Registro"
                                        })
                                    })
                                ]
                            }),
                            isAuth ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "px-2",
                                style: {
                                    cursor: 'pointer'
                                },
                                onClick: ()=>logout()
                                ,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    enableBackground: "new 0 0 24 24",
                                    height: "24px",
                                    viewBox: "0 0 24 24",
                                    width: "24px",
                                    fill: "#000000",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M0,0h24v24H0V0z",
                                                fill: "none"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }) : null
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-wrapper px-4 md:px-2 h-20 flex justify-between items-center bg-white",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        className: "justify-start",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: `${"/bancopobres"}/logo-alcaldia.svg`,
                                alt: "Logo-alcald\xeda",
                                className: ""
                            })
                        })
                    }),
                    isAuth ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-end items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: " mr-4",
                                children: [
                                    "Hola, ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: `${usuarioAuth?.nombres} ${usuarioAuth?.apellidos}`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(notification/* Notification */.P, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "px-2",
                                style: {
                                    cursor: 'pointer'
                                },
                                onClick: ()=>logout()
                                ,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    enableBackground: "new 0 0 24 24",
                                    height: "24px",
                                    viewBox: "0 0 24 24",
                                    width: "24px",
                                    fill: "#000000",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M0,0h24v24H0V0z",
                                                fill: "none"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }) : null
                ]
            })
        ]
    }));
};
/* harmony default export */ const NavBar = (Navbar);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/CallToAction.js




const CallToAction = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "https://api.whatsapp.com/send?phone=573044653088",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed bottom-4 right-4 z-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: `${"/bancopobres"}/whatsapp.png`,
                    width: "45",
                    height: "45"
                })
            })
        })
    }));
};
/* harmony default export */ const components_CallToAction = (CallToAction);

;// CONCATENATED MODULE: ./Layout/index.js







const Layout = ({ children  })=>{
    const { rol  } = (0,auth_context/* useAuthContext */.Eu)();
    const { route  } = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            !route.includes('backoffice/reporte') ? /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}) : null,
            !route.includes('backoffice') ? /*#__PURE__*/ jsx_runtime_.jsx(components_CallToAction, {}) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "container-page",
                children: children
            }),
            !route.includes('backoffice') && ![
                'ASESOR',
                'ADMINISTRADOR',
                'SUPERADMINISTRADOR'
            ].includes(rol) ? /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {}) : null
        ]
    }));
};
/* harmony default export */ const Layout_0 = (Layout);

// EXTERNAL MODULE: ./notification-context.js
var notification_context = __webpack_require__(7024);
;// CONCATENATED MODULE: ./pages/_app.js








function MyApp({ Component , pageProps  }) {
    const getLayout = Component.getLayout || ((page)=>page
    );
    async function fetcher(url) {
        let response = await fetch(url);
        return await response.json();
    }
    external_react_.useEffect(()=>{
        function preventWheelChange() {
            if (document.activeElement.type === 'number') {
                document.activeElement.blur();
            }
        }
        document.addEventListener('wheel', preventWheelChange);
        return ()=>{
            document.removeEventListener('wheel', preventWheelChange);
        };
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Banco de los Pobres - Alcald\xeda de Medell\xedn"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(auth_context/* AuthProvider */.Ho, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(notification_context/* NotificationProvider */.J, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_0, {
                        children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }))
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,5675,4986,6795,843,840,6135,5912,8908,4780,5681,5114], () => (__webpack_exec__(4415)));
module.exports = __webpack_exports__;

})();