"use strict";
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 26540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82647);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45425);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55074);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55590);


// 1. Get projectId
const projectId = "85105765a0ea5fc7fe8263dace38cea9";
// 2. Create wagmiConfig
const w3meta = {
    name: "Web3Modal",
    description: "Web3Modal ARK",
    url: "https://web3modal.com",
    icons: [
        ""
    ]
};
const chains = [
    wagmi_chains__WEBPACK_IMPORTED_MODULE_1__/* .mainnet */ .R,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_2__/* .polygon */ .y,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__/* .bsc */ .e
];
const wagmiConfig = (0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_0__/* .defaultWagmiConfig */ .o1)({
    chains,
    projectId,
    metadata: w3meta
});
// 3. Create modal
(0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_0__/* .createWeb3Modal */ .OY)({
    wagmiConfig,
    projectId,
    chains,
    themeMode: "dark",
    themeVariables: {
        "--w3m-font-family": "Montserrat, sans-serif",
        "--w3m-accent": "#756aec"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wagmiConfig);


/***/ }),

/***/ 50188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* reexport */ Modal_Modal)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./src/components/Layout/Modal/Modal.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
const Modal = ({ id, title, closeEvent, video, customcss })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "modal-overlay",
        id: id + "overlay",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "modal",
            id: id,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row justify-between lg:items-start items-center w-100 lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "text-white",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "text-white font-semibold text-2xl x-btn",
                            onClick: closeEvent,
                            children: "X"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("video", {
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            className: "2xl:max-w-[240x] xl:max-w-[200px] lg:max-w-[160px] max-w-[45vw] mx-auto mt-10 mbb-l " + customcss,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                src: video,
                                type: "video/mp4"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col rotate-90 h-[0px] mt-[200px] -mx-[50px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row items-center mb-[8.5px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("progress", {
                                            className: "rotate-180 h-[5px] lg:w-[150px] w-[100px]",
                                            value: 100,
                                            max: "100"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "rotate-180 text-white-30 text-sm ml-3",
                                            children: "Boost"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("progress", {
                                            className: "rotate-180 h-[5px] lg:w-[150px] w-[100px]",
                                            value: 100,
                                            max: "100"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "rotate-180 text-white-30 text-sm ml-3",
                                            children: "Shares"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./src/components/Layout/Modal/index.ts



/***/ }),

/***/ 45435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* reexport */ Web3Button_Web3Button)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@web3modal/wagmi/dist/esm/exports/react.js + 65 modules
var react = __webpack_require__(82647);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ScrollVisibility/index.ts + 1 modules
var ScrollVisibility = __webpack_require__(260);
;// CONCATENATED MODULE: ./src/components/Layout/Web3Button/Web3Button.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Web3Button = ({})=>{
    const { open } = (0,react/* useWeb3Modal */.k_)();
    function UseButton() {
        open();
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(ScrollVisibility/* ScrollVisibility */.V, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container h-100 w-100 mx-auto pb-10",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-center items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-white",
                        children: "Welcome"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white my-3 text-lg text-center max-w-[400px]",
                        children: "In order to use the ArkFi app, you need to connect your wallet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "w-100 h-100 object-fit-contain mt-10 pt-5 cp",
                        src: "/images/pulse.gif",
                        width: 105,
                        height: 105,
                        alt: "ARK connect",
                        onClick: ()=>UseButton()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "w-100 h-100 object-fit-contain mt-10 pt-5",
                        src: "/images/arc_main.png",
                        width: 1600,
                        height: 1000,
                        alt: "ARC ARK"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn-white px-5 md:text-xl text-base pt-1 pb-2 2xl:-mt-[150px] md:-mt-[100px] -mt-[10px]",
                        onClick: ()=>UseButton(),
                        children: "Connect"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Web3Button_Web3Button = (Web3Button);

;// CONCATENATED MODULE: ./src/components/Layout/Web3Button/index.ts



/***/ }),

/***/ 260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* reexport */ ScrollVisibility_ScrollVisibility)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-scroll/modules/index.js
var modules = __webpack_require__(7089);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 202 modules
var motion = __webpack_require__(38000);
;// CONCATENATED MODULE: ./src/components/ScrollVisibility/ScrollVisibility.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ScrollVisibility = ({ children })=>{
    const [isVisible, setIsVisible] = (0,react_.useState)(false);
    const elementRef = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        const handleScroll = ()=>{
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                setIsVisible(rect.top <= window.innerHeight);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(modules/* Element */.W_, {
        name: "fade-in-section",
        className: "mbb-l",
        children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
            initial: {
                opacity: 0,
                y: 200
            },
            animate: {
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 150
            },
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
            ref: elementRef,
            children: children
        })
    });
};
/* harmony default export */ const ScrollVisibility_ScrollVisibility = (ScrollVisibility);

;// CONCATENATED MODULE: ./src/components/ScrollVisibility/index.ts



/***/ }),

/***/ 67293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lo: () => (/* binding */ OpenModal),
/* harmony export */   ZB: () => (/* binding */ CloseModal),
/* harmony export */   af: () => (/* binding */ ScrollToNft),
/* harmony export */   lb: () => (/* binding */ formatterNoDec),
/* harmony export */   zW: () => (/* binding */ formatter)
/* harmony export */ });
/* unused harmony exports sleep, FadeOut, FadeIn, RollIn */
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54773);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var activeTab = 1;
const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
const formatterNoDec = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
function ScrollToNft(id) {
    var scrollVal = id < 7 ? id + 1 : id;
    if (window.innerWidth < 1250) {
        scrollVal = id;
    }
    document.getElementById("nft" + scrollVal).scrollIntoView({
        behavior: "smooth",
        block: "end"
    });
    if (id == activeTab) {
        return;
    }
    document.getElementById("nfttab" + activeTab).classList.remove("active");
    document.getElementById("nfttab" + id).classList.add("active");
    activeTab = id;
}
function OpenModal(id) {
    try {
        document.body.style.overflow = "hidden";
        document.getElementById(`${id}overlay`).style.display = "block";
        if (window.innerWidth < 1250) {
            document.getElementById(`${id}`).style.top = "100%";
            document.getElementById(`${id}`).style.display = "block";
            var amount = 100;
            var interval = setInterval(function() {
                document.getElementById(`${id}`).style.top = `${amount}%`;
                amount -= 1.5;
                amount = amount <= 10 ? 10 : amount;
                if (amount <= 10) {
                    clearInterval(interval);
                }
            }, 6);
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${id}`).fadeIn(500);
        }
    } catch (error) {
        console.log(error);
    }
}
function CloseModal(id) {
    document.body.style.overflow = "visible";
    if (window.innerWidth < 1250) {
        document.getElementById(`${id}`).style.top = "10%";
        var amount = 10;
        var interval = setInterval(function() {
            document.getElementById(`${id}`).style.top = `${amount}%`;
            amount += 1.5;
            amount = amount >= 100 ? 100 : amount;
            if (amount >= 100) {
                clearInterval(interval);
                document.getElementById(`${id}`).style.display = "none";
            }
        }, 6);
    } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${id}`).fadeOut(500);
    }
    setTimeout(function() {
        document.getElementById(`${id}overlay`).style.display = "none";
    }, 500);
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function FadeOut(id) {
    document.getElementById(id).style.opacity = 0.9;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.8;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.7;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.6;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.5;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.4;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.2;
    await sleep(50);
    document.getElementById(id).style.display = "none";
}
async function FadeIn(id) {
    document.getElementById(id).style.opacity = 0.2;
    document.getElementById(id).style.display = "block";
    await sleep(50);
    document.getElementById(id).style.opacity = 0.4;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.5;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.6;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.7;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.8;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.9;
    await sleep(50);
    document.getElementById(id).style.opacity = 1.0;
}
async function RollIn(id) {
    document.getElementById(id).style.height = "20%";
    document.getElementById(id).style.display = "block";
    await sleep(50);
    document.getElementById(id).style.height = "40%";
    await sleep(50);
    document.getElementById(id).style.height = "50%";
    await sleep(50);
    document.getElementById(id).style.height = "60%";
    await sleep(50);
    document.getElementById(id).style.height = "70%";
    await sleep(50);
    document.getElementById(id).style.height = "80%";
    await sleep(50);
    document.getElementById(id).style.height = "90%";
    await sleep(50);
    document.getElementById(id).style.height = "100%";
}


/***/ })

};
;