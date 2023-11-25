"use strict";
exports.id = 35;
exports.ids = [35];
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
// EXTERNAL MODULE: ./src/components/ScrollVisibility/index.ts
var ScrollVisibility = __webpack_require__(58682);
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 25 modules
var dist = __webpack_require__(40965);
;// CONCATENATED MODULE: ./src/components/Layout/Web3Button/Web3Button.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Web3Button = ({ connected, chainid })=>{
    const { open } = (0,react/* useWeb3Modal */.k_)();
    const { switchNetwork } = (0,dist/* useSwitchNetwork */.g0)();
    function UseButton() {
        open();
    }
    var name = localStorage.getItem("profileName");
    if (connected && chainid !== 137) {
        return /*#__PURE__*/ jsx_runtime_.jsx(ScrollVisibility/* ScrollVisibility */.V, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container h-100 w-100 mx-auto pb-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-white",
                            children: "Switch Chain"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-white my-3 text-lg text-center max-w-[400px]",
                            children: "Please Connect to Polygon to use the ArkFi app."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "w-100 h-100 object-fit-contain mt-10 pt-5 cp",
                            src: "/images/polygon.png",
                            width: 55,
                            height: 55,
                            alt: "ARK connect",
                            onClick: ()=>switchNetwork?.(137)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "w-100 h-100 object-fit-contain mt-10 pt-5",
                            src: "/images/arc_main.png",
                            width: 1600,
                            height: 1000,
                            alt: "ARC ARK"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn-white px-5 md:text-xl text-base pt-1 pb-2 2xl:-mt-[150px] md:-mt-[100px] -mt-[10px] mb-[75px]",
                            onClick: ()=>switchNetwork?.(137),
                            children: "Switch"
                        })
                    ]
                })
            })
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(ScrollVisibility/* ScrollVisibility */.V, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container h-100 w-100 mx-auto pb-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "text-white",
                            children: [
                                "Welcome ",
                                name
                            ]
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
                            className: "btn-white px-5 md:text-xl text-base pt-1 pb-2 2xl:-mt-[150px] md:-mt-[100px] -mt-[10px] mb-[75px]",
                            onClick: ()=>UseButton(),
                            children: "Connect"
                        })
                    ]
                })
            })
        });
    }
};
/* harmony default export */ const Web3Button_Web3Button = (Web3Button);

;// CONCATENATED MODULE: ./src/components/Layout/Web3Button/index.ts



/***/ }),

/***/ 58682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* reexport safe */ _ScrollVisibility__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ScrollVisibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80478);



/***/ }),

/***/ 30446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ct: () => (/* binding */ openDropDown),
/* harmony export */   HC: () => (/* binding */ getInitValues),
/* harmony export */   Kf: () => (/* binding */ calculate),
/* harmony export */   Lo: () => (/* binding */ OpenModal),
/* harmony export */   UG: () => (/* binding */ setMintNFT),
/* harmony export */   ZB: () => (/* binding */ CloseModal),
/* harmony export */   af: () => (/* binding */ ScrollToNft),
/* harmony export */   c1: () => (/* binding */ calculateNoSetter),
/* harmony export */   lb: () => (/* binding */ formatterNoDec),
/* harmony export */   rk: () => (/* binding */ setNewNFT),
/* harmony export */   zW: () => (/* binding */ formatter)
/* harmony export */ });
/* unused harmony exports onInput, sleep, FadeOut, FadeIn, RollIn, RollOut */
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54773);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39757);


var activeTab = 1;
const maxValue = 10000000;
const minValue = 100000;
const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
const formatterNoDec = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
function getInitValues(value, shares, totalShares = 1000000) {
    var ownership = shares / (totalShares + shares);
    var amount = ownership * Number(value);
    if (window.innerWidth < 750) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#daily").text("$" + formatterNoDec.format(amount / 30));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#weekly").text("$" + formatterNoDec.format(amount / 4));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#monthly").text("$" + formatterNoDec.format(amount));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#yearly").text("$" + formatterNoDec.format(amount * 12));
    } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#daily").text("$" + formatter.format(amount / 30));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#weekly").text("$" + formatter.format(amount / 4));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#monthly").text("$" + formatter.format(amount));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#yearly").text("$" + formatter.format(amount * 12));
    }
    return {
        daily: amount / 30,
        weekly: amount / 4,
        monthly: amount,
        yearly: amount * 12
    };
}
function onInput(event, callback, callback2, shares = 100, totalShares = 1000000) {
    var value = event.target.value;
    value = value > maxValue ? maxValue : value;
    var ownership = shares / (totalShares + shares);
    var amount = ownership * Number(value);
    if (window.innerWidth < 750) {
        $("#daily").text("$" + formatterNoDec.format(amount / 30));
        $("#weekly").text("$" + formatterNoDec.format(amount / 4));
        $("#monthly").text("$" + formatterNoDec.format(amount));
        $("#yearly").text("$" + formatterNoDec.format(amount * 12));
    } else {
        $("#daily").text("$" + formatter.format(amount / 30));
        $("#weekly").text("$" + formatter.format(amount / 4));
        $("#monthly").text("$" + formatter.format(amount));
        $("#yearly").text("$" + formatter.format(amount * 12));
    }
    callback(value);
    callback2(value);
}
function calculate(event, callback, callback2, shares = 100, totalShares = 1000000) {
    var value = event.target.value;
    value = value > maxValue ? maxValue : value;
    var ownership = shares / (totalShares + shares);
    var amount = ownership * Number(value);
    if (window.innerWidth < 750) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#daily").text("$" + formatterNoDec.format(amount / 30));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#weekly").text("$" + formatterNoDec.format(amount / 4));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#monthly").text("$" + formatterNoDec.format(amount));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#yearly").text("$" + formatterNoDec.format(amount * 12));
    } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#daily").text("$" + formatter.format(amount / 30));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#weekly").text("$" + formatter.format(amount / 4));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#monthly").text("$" + formatter.format(amount));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#yearly").text("$" + formatter.format(amount * 12));
    }
    callback(value);
    callback2(value);
}
function setNewNFT(id) {
    switch(id){
        case 1:
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#nft-text").text("COPPER");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#selected-nft").attr("src", "/images/copper.png");
            break;
        case 2:
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#nft-text").text("TIN");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#selected-nft").attr("src", "/images/tin.png");
            break;
        case 3:
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#nft-text").text("BRONZE");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#selected-nft").attr("src", "/images/bronze.png");
            break;
        case 4:
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#nft-text").text("SILVER");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#selected-nft").attr("src", "/images/silver.png");
            break;
        case 5:
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#nft-text").text("GOLD");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#selected-nft").attr("src", "/images/gold.png");
            break;
        case 6:
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#nft-text").text("PLATINUM");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#selected-nft").attr("src", "/images/platinum.png");
            break;
        case 7:
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#nft-text").text("DIAMOND");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#selected-nft").attr("src", "/images/platinum.png");
            break;
    }
    if (window.innerWidth < 1024) {
        RollOut("dropdown-1");
    } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#dropdown-1`).slideToggle(500);
    }
}
function openDropDown(id) {
    if (window.innerWidth < 1024) {
        RollIn(id);
    } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${id}`).slideToggle(400);
    }
}
function calculateNoSetter(value, shares, totalShares = 1000000) {
    var ownership = shares / (totalShares + shares);
    var amount = ownership * Number(value);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#daily").text("$" + formatter.format(amount / 30));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#weekly").text("$" + formatter.format(amount / 4));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#monthly").text("$" + formatter.format(amount));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#yearly").text("$" + formatter.format(amount * 52));
}
function ScrollToNft(id) {
    var scrollVal = id < 7 ? id + 1 : id;
    if (window.innerWidth <= 1024) {
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
        document.getElementById(`mobilebar`).style.display = "none";
        if (window.innerWidth <= 1024) {
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
            document.getElementById(`${id}`).style.top = "50%";
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${id}`).fadeIn(500);
        }
    } catch (error) {
        console.log(error);
    }
}
function CloseModal(id) {
    document.body.style.overflow = "visible";
    document.getElementById(`mobilebar`).style.display = "block";
    if (window.innerWidth <= 1024) {
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
        document.getElementById(`${id}`).style.top = "50%";
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
}
async function RollOut(id) {
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
}
function setMintNFT(id, callback) {
    var name = (0,_legacy__WEBPACK_IMPORTED_MODULE_1__/* .GetNFTNameByLevel */ .p0)(id);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#mint-text").text(name.toUpperCase());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#mint-selection").attr("src", `/images/${name.toLowerCase()}.png`);
    if (window.innerWidth < 1024) {
        RollOut("dropdown-mint");
    } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#dropdown-mint`).slideToggle(300);
    }
    callback(id);
}


/***/ }),

/***/ 39757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ij: () => (/* binding */ getPriceOfLevel),
/* harmony export */   K4: () => (/* binding */ getCurrentTier),
/* harmony export */   Mt: () => (/* binding */ abi),
/* harmony export */   UT: () => (/* binding */ getClaimableRewards),
/* harmony export */   Xt: () => (/* binding */ getTotalShares),
/* harmony export */   _L: () => (/* binding */ getMintCredit),
/* harmony export */   _j: () => (/* binding */ GetBoostPercentageByLevelAndTier),
/* harmony export */   c6: () => (/* binding */ getContributions),
/* harmony export */   ca: () => (/* binding */ ca),
/* harmony export */   dH: () => (/* binding */ getLifetimeRewards),
/* harmony export */   ob: () => (/* binding */ getMaxSupply),
/* harmony export */   p0: () => (/* binding */ GetNFTNameByLevel),
/* harmony export */   t2: () => (/* binding */ getNFTBalance),
/* harmony export */   w0: () => (/* binding */ getCurrentBoostOfLevel),
/* harmony export */   z: () => (/* binding */ getShares)
/* harmony export */ });
/* unused harmony exports getSharesOfNft, getNFTLevel, getNFTData, ClaimRewards */
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40965);

const ca = "0x374581111042E96e129D512FC39d023947f93a50";
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "arkWallet",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "ArkWalletSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldLevel",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newLevel",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "priceOfLevelUp",
                "type": "uint256"
            }
        ],
        "name": "NftLevelledUp",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "level",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "NftMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "rewardsToBeAdded",
                "type": "uint256"
            }
        ],
        "name": "RewardsAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "investor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "claimableNow",
                "type": "uint256"
            }
        ],
        "name": "RewardsClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "rewardsToBeAdded",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "rewardsPerShareToday",
                "type": "uint256"
            }
        ],
        "name": "RewardsDistributed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "ExcludeNft",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "ReviveNFT",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "level",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "penalty",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "decay",
                "type": "uint256"
            }
        ],
        "name": "SetBoostValuesOfLevel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "supply",
                "type": "uint256"
            }
        ],
        "name": "SetMaxSupply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "timeInSeconds",
                "type": "uint256"
            }
        ],
        "name": "SetRewardsCooldown",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "boost",
                "type": "uint256"
            }
        ],
        "name": "SetTierBoost",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endsAt",
                "type": "uint256"
            }
        ],
        "name": "SetTierEnding",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "passed",
                "type": "uint256"
            }
        ],
        "name": "SetTierPasser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDT",
        "outputs": [
            {
                "internalType": "contract IBEP20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "addMintCredit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "addMintCreditFree",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "usdtAmount",
                "type": "uint256"
            }
        ],
        "name": "addToRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "boostDecayOfLevel",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "boostPenalyOfLevel",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "circMintCredits",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "investor",
                "type": "address"
            }
        ],
        "name": "claimRewardsFor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "claimedRewards",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "level",
                "type": "uint256"
            }
        ],
        "name": "consolidateNFTs",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "level",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "levels",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "share",
                "type": "uint256"
            }
        ],
        "name": "createNewLevel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dailyRewardPercent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "distributeRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "distributeRewardsManuallyCEO",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "excluded",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "investor",
                "type": "address"
            }
        ],
        "name": "getClaimableRewards",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCurrentTier",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "investor",
                "type": "address"
            }
        ],
        "name": "getLifetimeRewards",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getPriceForLevelUp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "investor",
                "type": "address"
            }
        ],
        "name": "getShares",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isArk",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastDistribution",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "levelOfNft",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "levelUp",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "level",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "mintCredit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "mintTierOfNft",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "level",
                "type": "uint256"
            }
        ],
        "name": "mintToWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "level",
                "type": "uint256"
            }
        ],
        "name": "mintToWalletPaid",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "nftPriceOfLevel",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "openingHour",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "pricePaidForId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenToRescue",
                "type": "address"
            }
        ],
        "name": "rescueAnyToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "resetDistributionTimer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardsPool",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "arkWallet",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "setArkWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "uri",
                "type": "string"
            }
        ],
        "name": "setBaseUri",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ext",
                "type": "string"
            }
        ],
        "name": "setFileExtension",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            }
        ],
        "name": "setRewardPercentagePerDay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "shares",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "sharesOfLevel",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tierEnd",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tiersPassed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalContributions",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalMintCredits",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalRewardsPerShare",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalShares",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
function getClaimableRewards(address) {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "getClaimableRewards",
            args: [
                address
            ],
            watch: true
        });
        return Number(data) / Math.pow(10, 6);
    } catch (error) {
        console.log(error);
        return 0;
    }
}
function getCurrentTier() {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "getCurrentTier",
            watch: true
        });
        return Number(data);
    } catch (error) {
        console.log(error);
        return 0;
    }
}
function getPriceOfLevel(level) {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "nftPriceOfLevel",
            args: [
                level
            ],
            watch: true
        });
        if (data === undefined) {
            return 0;
        }
        return Number(data) / Math.pow(10, 6);
    } catch (error) {
        console.log(error);
        return 0;
    }
}
function getCurrentBoostOfLevel(level, tier) {
    try {
        var decay = 0;
        var penalty = 0;
        var boost = 25;
        switch(level){
            case 1:
            case 2:
            case 3:
                return 0;
            case 4:
                decay = 1;
                penalty = 20;
                break;
            case 5:
                decay = 2;
                penalty = 15;
                break;
            case 6:
                decay = 3;
                penalty = 10;
                break;
            case 7:
                decay = 4;
                penalty = 5;
                break;
            case 8:
                decay = 5;
                penalty = 0;
                break;
        }
        switch(tier){
            case 1:
                return boost - penalty - 0 * decay;
            case 2:
                return boost - penalty - 1 * decay;
            case 3:
                return boost - penalty - 2 * decay;
            case 4:
                return boost - penalty - 3 * decay;
            case 5:
                return boost - penalty - 4 * decay;
            case 6:
                return boost - penalty - 5 * decay;
        }
    } catch (error) {
        console.log(error);
        return 0;
    }
}
function getMintCredit(address) {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "mintCredit",
            args: [
                address
            ],
            watch: true
        });
        return Number(data) / Math.pow(10, 6);
    } catch (error) {
        console.log(error);
        return 0;
    }
}
function getLifetimeRewards(address) {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "getLifetimeRewards",
            args: [
                address
            ],
            watch: true
        });
        return Number(data) / Math.pow(10, 6);
    } catch (error) {
        console.log(error);
        return 0;
    }
}
function getNFTBalance(address) {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "balanceOf",
            args: [
                address
            ],
            watch: true
        });
        return Number(data);
    } catch (error) {
        console.log("getNFTBalance() " + error.message);
        return 0;
    }
}
function getMaxSupply() {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "maxSupply"
        });
        return Number(data) / Math.pow(10, 6);
    } catch (error) {
        console.log(error);
        return 0;
    }
}
function getContributions() {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "totalContributions"
        });
        return Number(data) / Math.pow(10, 6);
    } catch  {
        return 0;
    }
}
function getTotalShares() {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 56,
            address: "0x6733a95654fF739e6058247Dd7556BF9Ce2dEdf6",
            abi: abi,
            functionName: "totalShares"
        });
        return Number(data) * 1000;
    } catch  {
        return 0;
    }
}
function getSharesOfNft(id) {
    try {
        const { data, isError, isLoading } = readContracts({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "shares",
            args: [
                id
            ]
        });
        return Number(data) / Math.pow(10, 2);
    } catch (error) {
        console.log(error);
        return 0;
    }
}
function getShares(address) {
    try {
        const { data, isError, isLoading } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useContractRead */ ["do"])({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "getShares",
            args: [
                address
            ],
            watch: true
        });
        return Number(data) / Math.pow(10, 2);
    } catch (error) {
        console.log(error);
        return 0;
    }
}
function getNFTLevel(id) {
    try {
        const { data, isError, isLoading } = readContracts({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: "levelOfNft",
            args: [
                id
            ]
        });
        return Number(data);
    } catch (error) {
        console.log(error);
        return -1;
    }
}
function getNFTData(address, balance, callback) {
    try {
        var nftData = [];
        for(let i = 0; i < balance; i++){
            const { data, isError, isLoading } = useContractRead({
                chainId: 137,
                address: ca,
                abi: abi,
                functionName: "tokenOfOwnerByIndex",
                args: [
                    address,
                    i
                ],
                watch: true
            });
            nftData.push(Number(data));
        }
        return nftData;
    } catch (error) {
        console.log(error);
        return [];
    }
}
function ClaimRewards() {
    const config = usePrepareContractWrite({
        address: ca,
        abi: abi,
        functionName: "claimRewards"
    });
    const contractWrite = useContractWrite(config.config);
    contractWrite.write();
}
function GetNFTNameByLevel(level) {
    switch(level){
        case 1:
            return "Copper";
        case 2:
            return "Tin";
        case 3:
            return "Bronze";
        case 4:
            return "Silver";
        case 5:
            return "Gold";
        case 6:
            return "Platinum";
        case 7:
            return "Iridium";
        case 8:
            return "Diamond";
        case 9:
            return "Unobtainium";
        default:
            return "Unknown";
    }
}
function GetBoostPercentageByLevelAndTier(level, tier) {
    var boost = 25;
    var decayRate = 0;
    var decayAmount = 0;
    switch(level){
        case 1:
        case 2:
        case 3:
            decayRate = 0;
            boost -= 25;
            break;
        case 4:
            decayRate = 1;
            boost -= 20;
            break;
        case 5:
            decayRate = 2;
            boost -= 15;
            break;
        case 6:
            decayRate = 3;
            boost -= 10;
            break;
        case 7:
            decayRate = 4;
            boost -= 5;
            break;
        case 8:
            decayRate = 5;
            boost -= 0;
            break;
    }
    var tiersPassed = 0;
    switch(tier){
        case 1:
            tiersPassed = 0;
            break;
        case 2:
            tiersPassed = 1;
            break;
        case 3:
            tiersPassed = 2;
            break;
        case 4:
            tiersPassed = 3;
            break;
        case 5:
            tiersPassed = 4;
            break;
        case 6:
            tiersPassed = 5;
            break;
    }
    decayAmount = tiersPassed * decayRate;
    return boost - decayAmount;
}


/***/ })

};
;