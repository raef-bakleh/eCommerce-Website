"use strict";
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LE": () => (/* reexport */ components_FooterBanner),
  "yo": () => (/* reexport */ components_HeroBanner),
  "Ar": () => (/* reexport */ components_Layout),
  "xs": () => (/* reexport */ Product/* default */.Z)
});

// UNUSED EXPORTS: Cart, Footer, Navbar

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(847);
;// CONCATENATED MODULE: ./components/Footer.jsx




const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: " Copyright \xa9 2022. All rights reserved."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Developed by",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "https://github.com/raef-bakleh",
                        target: "_blank",
                        children: "Raef Bakleh"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "icons",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillInstagram, {})
            })
        ]
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(786);
;// CONCATENATED MODULE: ./components/HeroBanner.jsx




const HeroBanner = ({ heroBanner  })=>{
    console.log(heroBanner);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hero-banner-container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "beats-solo",
                    children: heroBanner.smallText
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: heroBanner.midText
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: heroBanner.largeText1
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: (0,client/* urlFor */.u)(heroBanner.image),
                    alt: "headphones",
                    className: "hero-banner-image "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/product/${heroBanner.product}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                children: heroBanner.buttonText
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "desc",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "Description"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: heroBanner.desc
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_HeroBanner = (HeroBanner);

;// CONCATENATED MODULE: ./components/Cart.jsx


const Cart = ()=>{
    return(/*#__PURE__*/ _jsx("div", {}));
};
/* harmony default export */ const components_Cart = ((/* unused pure expression or super */ null && (Cart)));

;// CONCATENATED MODULE: ./components/FooterBanner.jsx


const FooterBanner = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {}));
};
/* harmony default export */ const components_FooterBanner = (FooterBanner);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Navbar.jsx




const Navbar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "navbar-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "logo",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: "Headphones"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: "cart-icon",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineShopping, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "cart-item-qty",
                        children: "1"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.jsx





const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: " Raef's Store"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "main-container",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./components/Product.jsx
var Product = __webpack_require__(166);
;// CONCATENATED MODULE: ./components/index.js









/***/ })

};
;