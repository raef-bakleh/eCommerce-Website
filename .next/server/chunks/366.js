"use strict";
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 3166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(786);




const Product = ({ product: { image , name , price , slug  }  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // This logs the value of `slug` as it changes
        console.log("value of slug:", slug);
    }, [
        slug
    ]);
    if (!slug) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: `/product/${slug.current}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-card",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__/* .urlFor */ .u)(image[0]),
                        width: 250,
                        height: 250,
                        className: "product-image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "product-name",
                        children: name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "product-price",
                        children: [
                            "€",
                            price
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);


/***/ }),

/***/ 786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
    projectId: "kppb82nj",
    dataset: "production",
    apiVersion: "2022-12-25",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = (source)=>builder.image(source)
;


/***/ }),

/***/ 3232:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Context),
/* harmony export */   "A": () => (/* binding */ CartContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    showCart: false,
    setShowCart: ()=>{},
    cartItems: [],
    totalPrice: 0,
    totalQun: 0,
    qun: 0,
    setQun: ()=>{},
    increment: ()=>{},
    decrement: ()=>{},
    onAddHandler: ()=>{},
    onDeleteHandler: ()=>{},
    changeCartItemQuantity: ()=>{}
});
const CartContext = ({ children  })=>{
    const { 0: showCart , 1: setShowCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: cartItems , 1: setCartItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: totalPrice , 1: setTotalPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: totalQun , 1: setTotalQun  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: qun , 1: setQun  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const increment = ()=>{
        setQun((prevQty)=>prevQty + 1
        );
    };
    const decrement = ()=>{
        setQun((prevQun)=>{
            if (prevQun - 1 < 1) return 1;
            return prevQun - 1;
        });
    };
    const onAddHandler = (produkt)=>{
        const ifProduktInCart = cartItems.some((item)=>item._id === produkt._id
        );
        setTotalPrice((prev)=>prev + qun * produkt.price
        );
        setTotalQun((prev)=>prev + qun
        );
        setQun(1);
        console.log(ifProduktInCart);
        if (ifProduktInCart) {
            setCartItems(cartItems.map((item)=>{
                if (item._id === produkt._id) {
                    return {
                        ...item,
                        qun: item.qun + qun
                    };
                }
            }));
        } else {
            produkt.qun = qun;
            setCartItems([
                ...cartItems,
                {
                    ...produkt
                }
            ]);
        }
    };
    const onDeleteHandler = (product)=>{
        const restItemsInCart = cartItems.filter((item)=>{
            return item._id !== product._id;
        });
        setCartItems(restItemsInCart);
        setTotalPrice((prev)=>prev - product.qun * product.price
        );
        setTotalQun((prev)=>prev - product.qun
        );
        setQun(1);
    };
    let foundProdukt;
    let index;
    const changeCartItemQuantity = (id, action)=>{
        const allMeals = cartItems;
        const cartItemsWithoutTheFoundProduct = cartItems.filter((item)=>item._id !== id
        );
        foundProdukt = cartItems.find((item)=>item._id === id
        );
        if (action === "increment") {
            setCartItems(allMeals.map((meal)=>{
                if (meal._id === id) {
                    return {
                        ...meal,
                        qun: meal.qun += 1
                    };
                }
                return meal;
            }));
            console.log(cartItems);
            setTotalPrice((prev)=>prev + foundProdukt.price
            );
            setTotalQun((prev)=>prev + 1
            );
        } else if (action === "decrement") {
            if (foundProdukt.qun > 1) {
                setCartItems(allMeals.map((meal)=>{
                    if (meal._id === id) {
                        return {
                            ...meal,
                            qun: meal.qun -= 1
                        };
                    }
                    return meal;
                }));
                setTotalPrice((prev)=>prev - foundProdukt.price
                );
                setTotalQun((prev)=>prev - 1
                );
            }
        }
    };
    const fincalContext = {
        showCart: showCart,
        setShowCart: setShowCart,
        cartItems: cartItems,
        totalPrice: totalPrice,
        totalQun: totalQun,
        qun: qun,
        setQun: setQun,
        increment: increment,
        decrement: decrement,
        onAddHandler: onAddHandler,
        onDeleteHandler: onDeleteHandler,
        changeCartItemQuantity: changeCartItemQuantity
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: fincalContext,
        children: children
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;