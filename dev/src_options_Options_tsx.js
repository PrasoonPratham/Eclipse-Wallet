"use strict";
(globalThis["webpackChunk_coral_xyz_app_extension"] = globalThis["webpackChunk_coral_xyz_app_extension"] || []).push([["src_options_Options_tsx"],{

/***/ "./src/components/Onboarding/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Onboarding/index.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Onboarding": () => (/* binding */ Onboarding),
/* harmony export */   "OnboardingMenu": () => (/* binding */ OnboardingMenu),
/* harmony export */   "OptionsContainer": () => (/* binding */ OptionsContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Menu.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Lock.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Twitter.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/CallMade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Layout/Drawer */ "./src/components/common/Layout/Drawer.tsx");
/* harmony import */ var _common_Layout_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Layout/Nav */ "./src/components/common/Layout/Nav.tsx");
/* harmony import */ var _pages_OnboardAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/OnboardAccount */ "./src/components/Onboarding/pages/OnboardAccount.tsx");
/* harmony import */ var _pages_RecoverAccount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/RecoverAccount */ "./src/components/Onboarding/pages/RecoverAccount.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature(), _s1 = __webpack_require__.$Refresh$.signature(), _s2 = __webpack_require__.$Refresh$.signature(), _s3 = __webpack_require__.$Refresh$.signature();











const Onboarding = ({ isAddingAccount  })=>{
    _s();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("onboard");
    const _ks = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useKeyringStoreState)();
    const isOnboarded = !isAddingAccount && _ks !== _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.KeyringStoreStateEnum.NeedsOnboarding;
    const defaultProps = {
        containerRef,
        // Props for the WithNav component
        navProps: {
            navButtonRight: /*#__PURE__*/ React.createElement(OnboardingMenu, {
                containerRef: containerRef,
                menuOpen: menuOpen,
                setMenuOpen: setMenuOpen,
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                },
                __self: undefined
            }),
            navbarStyle: {
                borderRadius: "12px"
            },
            navContentStyle: {
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex"
            }
        },
        isAddingAccount,
        isOnboarded
    };
    return /*#__PURE__*/ React.createElement(OptionsContainer, {
        innerRef: containerRef,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 64,
            columnNumber: 5
        },
        __self: undefined
    }, action === "onboard" ? /*#__PURE__*/ React.createElement(_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.OnboardingProvider, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 66,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_pages_OnboardAccount__WEBPACK_IMPORTED_MODULE_7__.OnboardAccount, {
        onRecover: ()=>setAction("recover"),
        ...defaultProps,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 67,
            columnNumber: 11
        },
        __self: undefined
    })) : null, action === "recover" ? /*#__PURE__*/ React.createElement(_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.OnboardingProvider, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 74,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_pages_RecoverAccount__WEBPACK_IMPORTED_MODULE_8__.RecoverAccount, {
        onClose: ()=>setAction("onboard"),
        ...defaultProps,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 75,
            columnNumber: 11
        },
        __self: undefined
    })) : null);
};
_s(Onboarding, "2KLFEIrolZOwePgEgmPLy2bLlBM=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useKeyringStoreState
    ];
});
_c = Onboarding;
function OptionsContainer({ innerRef , children  }) {
    _s1();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme)();
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            backgroundColor: "white"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 94,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "0 auto",
            overflow: "hidden",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
            width: "100vw",
            height: "100vh",
            background: `
            radial-gradient(farthest-side at 0 0, #6360FF, rgba(255,255,255,0) 100%),
            radial-gradient(farthest-side at 100% 0, #C061F7, rgba(255,255,255,0) 100%),
            radial-gradient(farthest-side at 0 100%, #28DBD1 25%, rgba(255,255,255,0) 100%),
            radial-gradient(farthest-side at 100% 100%, #FE6F5C 25%, rgba(255,255,255,0) 100%)`
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 99,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        ref: innerRef,
        style: {
            width: `${_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.EXTENSION_WIDTH}px`,
            height: `${_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.EXTENSION_HEIGHT}px`,
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
            background: theme.custom.colors.backgroundBackdrop,
            position: "relative"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 116,
            columnNumber: 9
        },
        __self: this
    }, children)));
}
_s1(OptionsContainer, "EUWLPhliQbTzY6cWvepxLA4f8h0=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme
    ];
});
_c1 = OptionsContainer;
function OnboardingMenu({ containerRef , menuOpen , setMenuOpen  }) {
    _s2();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme)();
    return /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
        sx: {
            display: "flex",
            flexDirection: "row-reverse",
            padding: "0 !important",
            minHeight: "0 !important",
            height: _common_Layout_Nav__WEBPACK_IMPORTED_MODULE_6__.NAV_BAR_HEIGHT
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 149,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        disableRipple: true,
        onClick: ()=>setMenuOpen(true),
        sx: {
            padding: 0
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 158,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
        sx: {
            color: theme.custom.colors.icon
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 163,
            columnNumber: 9
        },
        __self: this
    })), /*#__PURE__*/ React.createElement(_common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_5__.WithContaineredDrawer, {
        containerRef: containerRef,
        openDrawer: menuOpen,
        setOpenDrawer: setMenuOpen,
        paperStyles: {
            borderRadius: "12px",
            background: theme.custom.colors.backgroundBackdrop
        },
        backdropStyles: {
            borderRadius: "12px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 165,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(OnboardingMenuList, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 175,
            columnNumber: 9
        },
        __self: this
    })));
}
_s2(OnboardingMenu, "EUWLPhliQbTzY6cWvepxLA4f8h0=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme
    ];
});
_c2 = OnboardingMenu;
const useStyles = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.styles)(()=>({
        listItemRoot: {
            backgroundColor: "transparent !important"
        }
    }));
function OnboardingMenuList() {
    _s3();
    const classes = useStyles();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme)();
    const options = [
        {
            icon: /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
                style: {
                    color: theme.custom.colors.secondary
                },
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
                    lineNumber: 192,
                    columnNumber: 13
                },
                __self: this
            }),
            text: "Backpack.app",
            onClick: ()=>window.open(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_LINK, "_blank")
        },
        {
            icon: /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
                style: {
                    color: theme.custom.colors.secondary
                },
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
                    lineNumber: 197,
                    columnNumber: 13
                },
                __self: this
            }),
            text: "Twitter",
            onClick: ()=>window.open(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.TWITTER_LINK, "_blank")
        },
        {
            icon: /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.DiscordIcon, {
                fill: theme.custom.colors.secondary,
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
                    lineNumber: 202,
                    columnNumber: 13
                },
                __self: this
            }),
            text: "Need help? Hop into Discord",
            onClick: ()=>window.open(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DISCORD_INVITE_LINK, "_blank")
        }
    ];
    return /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
        sx: {
            color: theme.custom.colors.fontColor
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 209,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.List, {
        style: {
            marginLeft: "16px",
            marginRight: "16px",
            marginTop: "40px",
            marginBottom: "40px",
            background: theme.custom.colors.nav,
            border: theme.custom.colors.borderFull
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
            lineNumber: 210,
            columnNumber: 7
        },
        __self: this
    }, options.map((o, idx)=>/*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
            onClick: o.onClick,
            key: o.text,
            style: {
                height: "44px",
                display: "flex"
            },
            isLast: idx === options.length - 1,
            borderColor: theme.custom.colors.nav,
            classes: {
                root: classes.listItemRoot
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
                lineNumber: 221,
                columnNumber: 11
            },
            __self: this
        }, /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
                lineNumber: 234,
                columnNumber: 13
            },
            __self: this
        }, o.icon), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
            sx: {
                marginLeft: "8px",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 500
            },
            primary: o.text,
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
                lineNumber: 243,
                columnNumber: 13
            },
            __self: this
        }), /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
            style: {
                flexShrink: 1,
                alignSelf: "center",
                color: theme.custom.colors.secondary
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/index.tsx",
                lineNumber: 253,
                columnNumber: 13
            },
            __self: this
        })))));
}
_s3(OnboardingMenuList, "DXp67oO476M1i1Tb7iIOeGd3UzI=", false, function() {
    return [
        useStyles,
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme
    ];
});
_c3 = OnboardingMenuList;
var _c, _c1, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "Onboarding");
__webpack_require__.$Refresh$.register(_c1, "OptionsContainer");
__webpack_require__.$Refresh$.register(_c2, "OnboardingMenu");
__webpack_require__.$Refresh$.register(_c3, "OnboardingMenuList");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/AlreadyOnboarded.tsx":
/*!**************************************************************!*\
  !*** ./src/components/Onboarding/pages/AlreadyOnboarded.tsx ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlreadyOnboarded": () => (/* binding */ AlreadyOnboarded)
/* harmony export */ });
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/ErrorOutline */ "../../node_modules/@mui/icons-material/ErrorOutline.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



const AlreadyOnboarded = ()=>{
    return /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__.EmptyState, {
        icon: (props)=>/*#__PURE__*/ React.createElement(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_1__["default"], props),
        title: "Already setup",
        subtitle: "Your Backpack has already been setup. If you want to set it up again, reset it first.",
        buttonText: "Close",
        onClick: window.close,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/AlreadyOnboarded.tsx",
            lineNumber: 6,
            columnNumber: 5
        },
        __self: undefined
    });
};
_c = AlreadyOnboarded;
var _c;
__webpack_require__.$Refresh$.register(_c, "AlreadyOnboarded");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/BlockchainSelector.tsx":
/*!****************************************************************!*\
  !*** ./src/components/Onboarding/pages/BlockchainSelector.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockchainSelector": () => (/* binding */ BlockchainSelector)
/* harmony export */ });
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Icon */ "./src/components/common/Icon/index.tsx");
/* harmony import */ var _common_Layout_ActionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Layout/ActionCard */ "./src/components/common/Layout/ActionCard.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");







const BlockchainSelector = ({ selectedBlockchains , onClick , onNext , isRecovery =false  })=>{
    return /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 26,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 34,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            marginLeft: "24px",
            marginRight: "24px",
            marginTop: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 35,
            columnNumber: 9
        },
        __self: undefined
    }, isRecovery ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_2__.Header, {
        text: "Which network would you like to use to recover your username?",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 44,
            columnNumber: 15
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_2__.SubtextParagraph, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 45,
            columnNumber: 15
        },
        __self: undefined
    }, "Select one. You can add more networks after you've recovered your username.")) : /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_2__.Header, {
        text: "Which networks would you like Backpack to use?",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 52,
            columnNumber: 15
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_2__.SubtextParagraph, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 53,
            columnNumber: 15
        },
        __self: undefined
    }, "Select one or more. You can change this later in the settings menu."))), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
            padding: "0 16px 16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 60,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        container: true,
        spacing: 1.5,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 61,
            columnNumber: 11
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        xs: 6,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 62,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_common_Layout_ActionCard__WEBPACK_IMPORTED_MODULE_4__.ActionCard, {
        icon: /*#__PURE__*/ React.createElement(_common_Icon__WEBPACK_IMPORTED_MODULE_3__.EthereumIconOnboarding, null),
        checked: selectedBlockchains.includes(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.Blockchain.ETHEREUM),
        text: "Ethereum",
        onClick: ()=>onClick(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.Blockchain.ETHEREUM),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 63,
            columnNumber: 15
        },
        __self: undefined
    })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        xs: 6,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 70,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_common_Layout_ActionCard__WEBPACK_IMPORTED_MODULE_4__.ActionCard, {
        icon: /*#__PURE__*/ React.createElement(_common_Icon__WEBPACK_IMPORTED_MODULE_3__.SolanaIconOnboarding, null),
        checked: selectedBlockchains.includes(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.Blockchain.SOLANA),
        text: "Eclipse",
        onClick: ()=>onClick(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.Blockchain.SOLANA),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 71,
            columnNumber: 15
        },
        __self: undefined
    }))))), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
            padding: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 81,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__.PrimaryButton, {
        label: "Next",
        onClick: onNext,
        disabled: selectedBlockchains.length === 0,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 82,
            columnNumber: 9
        },
        __self: undefined
    })));
};
_c = BlockchainSelector;
function SoonBadge() {
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingTop: "2px",
            paddingBottom: "2px",
            backgroundColor: "rgb(206, 121, 7, 0.15)",
            height: "20px",
            borderRadius: "10px",
            display: "inline-block",
            marginLeft: "4px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 94,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: {
            color: "#EFA411",
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: 600
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/BlockchainSelector.tsx",
            lineNumber: 107,
            columnNumber: 7
        },
        __self: this
    }, "soon"));
}
_c1 = SoonBadge;
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "BlockchainSelector");
__webpack_require__.$Refresh$.register(_c1, "SoonBadge");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/CreateOrImportWallet.tsx":
/*!******************************************************************!*\
  !*** ./src/components/Onboarding/pages/CreateOrImportWallet.tsx ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateOrImportWallet": () => (/* binding */ CreateOrImportWallet)
/* harmony export */ });
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* harmony import */ var _Locked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Locked */ "./src/components/Locked/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");





const CreateOrImportWallet = ({ onNext  })=>{
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/CreateOrImportWallet.tsx",
            lineNumber: 13,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
            flex: 1,
            textAlign: "center",
            padding: "32px 16px 0px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/CreateOrImportWallet.tsx",
            lineNumber: 21,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_Locked__WEBPACK_IMPORTED_MODULE_2__.BackpackHeader, {
        disableUsername: true,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/CreateOrImportWallet.tsx",
            lineNumber: 22,
            columnNumber: 9
        },
        __self: undefined
    })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
            padding: "0 16px 16px",
            textAlign: "center",
            cursor: "pointer"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/CreateOrImportWallet.tsx",
            lineNumber: 24,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        sx: {
            mt: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/CreateOrImportWallet.tsx",
            lineNumber: 31,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__.PrimaryButton, {
        label: "Create a new wallet",
        onClick: ()=>onNext({
                action: "create",
                keyringType: "mnemonic"
            }),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/CreateOrImportWallet.tsx",
            lineNumber: 32,
            columnNumber: 11
        },
        __self: undefined
    })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        sx: {
            mt: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/CreateOrImportWallet.tsx",
            lineNumber: 39,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_1__.SubtextParagraph, {
        onClick: ()=>onNext({
                action: "import"
            }),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/CreateOrImportWallet.tsx",
            lineNumber: 40,
            columnNumber: 11
        },
        __self: undefined
    }, "I already have a wallet"))));
};
_c = CreateOrImportWallet;
var _c;
__webpack_require__.$Refresh$.register(_c, "CreateOrImportWallet");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/Finish.tsx":
/*!****************************************************!*\
  !*** ./src/components/Onboarding/pages/Finish.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Finish": () => (/* binding */ Finish)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _permissions_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../permissions/utils */ "./src/permissions/utils.ts");
/* harmony import */ var _common_Account_SetupComplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Account/SetupComplete */ "./src/components/common/Account/SetupComplete.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();






const Finish = ({ isAddingAccount  })=>{
    _s();
    // This is a mitigation to ensure the keyring store doesn't lock before
    // creating the user on the server.
    //
    // Would be better (though probably not a priority atm) to ensure atomicity.
    // E.g. we could generate the UUID here on the client, create the keyring store,
    // and only then create the user on the server. If the server fails, then
    // rollback on the client.
    //
    // An improvement for the future!
    (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useKeyringStoreState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const { onboardingData , maybeCreateUser  } = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useOnboarding)();
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient)();
    const registerSubscription = async ()=>{
        try {
            const sub = await (0,_permissions_utils__WEBPACK_IMPORTED_MODULE_4__.registerNotificationServiceWorker)();
            if (!sub) {
                // Set appropriate app states
                return;
            }
            await (0,_permissions_utils__WEBPACK_IMPORTED_MODULE_4__.saveSubscription)(sub);
        } catch (err) {
            console.error(err);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (async ()=>{
            const res = await maybeCreateUser({
                ...onboardingData,
                isAddingAccount
            });
            if (!res.ok) {
                if (confirm("There was an issue setting up your account. Please try again.")) {
                    window.location.reload();
                }
            }
            registerSubscription();
            setLoading(false);
        })();
    }, [
        background,
        isAddingAccount,
        onboardingData,
        maybeCreateUser
    ]);
    return !loading ? /*#__PURE__*/ React.createElement(_common_Account_SetupComplete__WEBPACK_IMPORTED_MODULE_5__.SetupComplete, {
        onClose: ()=>{
            _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.BrowserRuntimeExtension.closeActiveTab();
            window.open(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.XNFT_GG_LINK, "_blank");
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/Finish.tsx",
            lineNumber: 62,
            columnNumber: 5
        },
        __self: undefined
    }) : /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.Loading, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/Finish.tsx",
            lineNumber: 69,
            columnNumber: 5
        },
        __self: undefined
    });
};
_s(Finish, "k7/Va348LVDHpHLMK51Evk+48uU=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useKeyringStoreState,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useOnboarding,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient
    ];
});
_c = Finish;
var _c;
__webpack_require__.$Refresh$.register(_c, "Finish");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/InviteCodeForm.tsx":
/*!************************************************************!*\
  !*** ./src/components/Onboarding/pages/InviteCodeForm.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InviteCodeForm": () => (/* binding */ InviteCodeForm),
/* harmony export */   "getWaitlistId": () => (/* binding */ getWaitlistId),
/* harmony export */   "setWaitlistId": () => (/* binding */ setWaitlistId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* harmony import */ var _Locked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Locked */ "./src/components/Locked/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





const WAITLIST_RES_ID_KEY = "waitlist-form-res-id";
const setWaitlistId = (responseId)=>window.localStorage.setItem(WAITLIST_RES_ID_KEY, responseId);
const getWaitlistId = ()=>window.localStorage.getItem(WAITLIST_RES_ID_KEY) ?? undefined;
const InviteCodeForm = ({ onClickRecover , onSubmit  })=>{
    _s();
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (e)=>{
        e.preventDefault();
        const inviteCode = "c841a546-4898-4c63-8075-01273be0fad4";
        onSubmit(inviteCode);
    }, []);
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/InviteCodeForm.tsx",
            lineNumber: 30,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            flex: 1,
            textAlign: "center",
            padding: "32px 16px 0"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/InviteCodeForm.tsx",
            lineNumber: 38,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_Locked__WEBPACK_IMPORTED_MODULE_3__.BackpackHeader, {
        disableUsername: true,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/InviteCodeForm.tsx",
            lineNumber: 45,
            columnNumber: 9
        },
        __self: undefined
    })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            padding: "0 16px 36px",
            paddingBottom: 0,
            marginTop: 0
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/InviteCodeForm.tsx",
            lineNumber: 48,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            textAlign: "center",
            cursor: "pointer"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/InviteCodeForm.tsx",
            lineNumber: 55,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            marginTop: 24
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/InviteCodeForm.tsx",
            lineNumber: 56,
            columnNumber: 11
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__.PrimaryButton, {
        label: "Create account",
        type: "submit",
        onClick: handleSubmit,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/InviteCodeForm.tsx",
            lineNumber: 57,
            columnNumber: 13
        },
        __self: undefined
    })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            marginTop: 24,
            marginBottom: 36
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/InviteCodeForm.tsx",
            lineNumber: 63,
            columnNumber: 11
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_2__.SubtextParagraph, {
        onClick: onClickRecover,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/InviteCodeForm.tsx",
            lineNumber: 69,
            columnNumber: 13
        },
        __self: undefined
    }, "I already have an account")))));
};
_s(InviteCodeForm, "tzNB2ES70+wfA7yeR5/qpxBoorU=");
_c = InviteCodeForm;
var _c;
__webpack_require__.$Refresh$.register(_c, "InviteCodeForm");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/KeyringTypeSelector.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/Onboarding/pages/KeyringTypeSelector.tsx ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyringTypeSelector": () => (/* binding */ KeyringTypeSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





const KeyringTypeSelector = ({ action , onNext  })=>{
    _s();
    const [showAdvancedOptions, setShowAdvancedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 22,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        sx: {
            margin: "56px 24px 0 24px",
            textAlign: "center"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 30,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.HeaderIcon, {
        icon: /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.HardwareWalletIcon, null),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 31,
            columnNumber: 9
        },
        __self: undefined
    }), action === "create" ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Header, {
        text: "Create a new wallet",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 34,
            columnNumber: 13
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.SubtextParagraph, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 35,
            columnNumber: 13
        },
        __self: undefined
    }, "Choose a wallet type. If you're not sure, using a recovery phrase is the most common option.")) : null, action === "import" ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Header, {
        text: "Import an existing wallet",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 43,
            columnNumber: 13
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.SubtextParagraph, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 44,
            columnNumber: 13
        },
        __self: undefined
    }, "Choose a method to import your wallet.")) : null, action === "recover" ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Header, {
        text: "Recover a username",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 51,
            columnNumber: 13
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.SubtextParagraph, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 52,
            columnNumber: 13
        },
        __self: undefined
    }, "Choose a method to recover your username.")) : null), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            padding: "0 16px 16px",
            textAlign: "center",
            cursor: "pointer"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 58,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            marginBottom: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 65,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.PrimaryButton, {
        label: `${(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.toTitleCase)(action)} with secret phrase`,
        onClick: ()=>onNext("mnemonic"),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 66,
            columnNumber: 11
        },
        __self: undefined
    })), showAdvancedOptions ? /*#__PURE__*/ React.createElement(React.Fragment, null, action === "import" || action === "recover" ? /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            marginBottom: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 74,
            columnNumber: 15
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.SecondaryButton, {
        label: `${(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.toTitleCase)(action)} with private key`,
        onClick: ()=>onNext("private-key"),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 75,
            columnNumber: 17
        },
        __self: undefined
    })) : null, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            marginBottom: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 81,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.SecondaryButton, {
        label: action === "recover" ? "Recover with hardware wallet" : "I have a hardware wallet",
        onClick: ()=>onNext("ledger"),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 82,
            columnNumber: 15
        },
        __self: undefined
    })), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.SubtextParagraph, {
        onClick: ()=>setShowAdvancedOptions(false),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 91,
            columnNumber: 13
        },
        __self: undefined
    }, "Hide advanced options")) : /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.SubtextParagraph, {
        onClick: ()=>setShowAdvancedOptions(true),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/KeyringTypeSelector.tsx",
            lineNumber: 96,
            columnNumber: 11
        },
        __self: undefined
    }, "Show advanced options")));
};
_s(KeyringTypeSelector, "VeP6r7GsBaNBELvlg5eH18nG3qQ=");
_c = KeyringTypeSelector;
var _c;
__webpack_require__.$Refresh$.register(_c, "KeyringTypeSelector");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/MnemonicSearch.tsx":
/*!************************************************************!*\
  !*** ./src/components/Onboarding/pages/MnemonicSearch.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnemonicSearch": () => (/* binding */ MnemonicSearch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

// This component searches a given mnemonic for a public key and displays
// a loading indicator until it is found (or an error if it not found).
var _s = __webpack_require__.$Refresh$.signature();






const MnemonicSearch = ({ serverPublicKeys , mnemonic , onNext , onRetry  })=>{
    _s();
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (async ()=>{
            const walletDescriptors = [];
            const blockchains = [
                ...new Set(serverPublicKeys.map((x)=>x.blockchain))
            ];
            for (const blockchain of blockchains){
                const recoveryPaths = (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.getRecoveryPaths)(blockchain);
                const publicKeys = await background.request({
                    method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_PREVIEW_PUBKEYS,
                    params: [
                        blockchain,
                        mnemonic,
                        recoveryPaths
                    ]
                });
                const searchPublicKeys = serverPublicKeys.filter((b)=>b.blockchain === blockchain).map((p)=>p.publicKey);
                for (const publicKey of searchPublicKeys){
                    const index = publicKeys.findIndex((p)=>p === publicKey);
                    if (index !== -1) {
                        walletDescriptors.push({
                            blockchain,
                            derivationPath: recoveryPaths[index],
                            publicKey
                        });
                    }
                }
            }
            if (walletDescriptors.length > 0) {
                onNext(walletDescriptors);
            } else {
                setError(true);
            }
        })();
    }, [
        background,
        serverPublicKeys,
        mnemonic,
        onNext
    ]);
    if (!error) {
        return /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.Loading, {
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/MnemonicSearch.tsx",
                lineNumber: 66,
                columnNumber: 12
            },
            __self: undefined
        });
    }
    return /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/MnemonicSearch.tsx",
            lineNumber: 70,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            margin: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/MnemonicSearch.tsx",
            lineNumber: 78,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.Header, {
        text: "Unable to recover wallet",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/MnemonicSearch.tsx",
            lineNumber: 79,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.SubtextParagraph, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/MnemonicSearch.tsx",
            lineNumber: 80,
            columnNumber: 9
        },
        __self: undefined
    }, serverPublicKeys.length === 1 ? /*#__PURE__*/ React.createElement(React.Fragment, null, "We couldn't find the public key", " ", (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.walletAddressDisplay)(serverPublicKeys[0].publicKey), " using your recovery phrase.") : /*#__PURE__*/ React.createElement(React.Fragment, null, "We couldn't find any wallets using your recovery phrase."))), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            marginLeft: "16px",
            marginRight: "16px",
            marginBottom: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/MnemonicSearch.tsx",
            lineNumber: 92,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.PrimaryButton, {
        label: "Retry",
        onClick: onRetry,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/MnemonicSearch.tsx",
            lineNumber: 99,
            columnNumber: 9
        },
        __self: undefined
    })));
};
_s(MnemonicSearch, "e/RKCDUKiYSsVQaYL00DYJzOE4E=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient
    ];
});
_c = MnemonicSearch;
var _c;
__webpack_require__.$Refresh$.register(_c, "MnemonicSearch");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/NotificationsPermission.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/Onboarding/pages/NotificationsPermission.tsx ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPermission": () => (/* binding */ NotificationsPermission)
/* harmony export */ });
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();




const NotificationsPermission = ({ onNext  })=>{
    _s();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_1__.useCustomTheme)();
    const requestNotificationPermission = async ()=>{
        const permission = await window.Notification.requestPermission();
        return permission === "granted";
    };
    const handleAllow = async ()=>{
        await requestNotificationPermission();
        onNext();
    };
    const handleDisable = ()=>{
        onNext();
    };
    return /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            color: theme.custom.colors.nav
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 31,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 40,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        sx: {
            mt: "24px",
            mx: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 41,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_2__.Header, {
        text: "Allow notifications?",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 42,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_2__.SubtextParagraph, {
        style: {
            marginBottom: "20px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 43,
            columnNumber: 11
        },
        __self: undefined
    }, "These appear for messages and friend requests.")), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        sx: {
            mx: "20px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 47,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(SkeletonNotifications, {
        style: {
            width: "100%"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 48,
            columnNumber: 11
        },
        __self: undefined
    }))), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        sx: {
            mx: "16px",
            mb: "16px",
            display: "flex",
            gap: "10px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 51,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__.SecondaryButton, {
        label: "Disable",
        style: {
            background: "transparent"
        },
        buttonLabelStyle: {
            fontWeight: 600
        },
        onClick: handleDisable,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 52,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__.PrimaryButton, {
        label: "Allow",
        buttonLabelStyle: {
            fontWeight: 600
        },
        onClick: handleAllow,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 58,
            columnNumber: 9
        },
        __self: undefined
    })));
};
_s(NotificationsPermission, "EUWLPhliQbTzY6cWvepxLA4f8h0=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_1__.useCustomTheme
    ];
});
_c = NotificationsPermission;
const SkeletonNotifications = ({ style  })=>/*#__PURE__*/ React.createElement("svg", {
        style: {
            height: "inherit",
            width: "inherit",
            ...style
        },
        width: "343",
        height: "194",
        viewBox: "0 0 343 194",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 69,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement("g", {
        clipPath: "url(#clip0_18596_144803)",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 77,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement("rect", {
        width: "343",
        height: "64",
        fill: "white",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 78,
            columnNumber: 7
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("circle", {
        cx: "28",
        cy: "32",
        r: "16",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 79,
            columnNumber: 7
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("rect", {
        x: "52",
        y: "20",
        width: "72",
        height: "8",
        rx: "4",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 80,
            columnNumber: 7
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("rect", {
        x: "52",
        y: "36",
        width: "176",
        height: "8",
        rx: "4",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 81,
            columnNumber: 7
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("rect", {
        x: "291",
        y: "20",
        width: "40",
        height: "8",
        rx: "4",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 82,
            columnNumber: 7
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("g", {
        opacity: "0.5",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 83,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement("rect", {
        width: "343",
        height: "64",
        transform: "translate(0 65)",
        fill: "white",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 84,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("circle", {
        cx: "28",
        cy: "97",
        r: "16",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 90,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("rect", {
        x: "52",
        y: "85",
        width: "72",
        height: "8",
        rx: "4",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 91,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("rect", {
        x: "52",
        y: "101",
        width: "176",
        height: "8",
        rx: "4",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 92,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("rect", {
        x: "291",
        y: "85",
        width: "40",
        height: "8",
        rx: "4",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 93,
            columnNumber: 9
        },
        __self: undefined
    })), /*#__PURE__*/ React.createElement("g", {
        opacity: "0.5",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 95,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement("rect", {
        width: "343",
        height: "64",
        transform: "translate(0 130)",
        fill: "white",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 96,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("circle", {
        cx: "28",
        cy: "162",
        r: "16",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 102,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("rect", {
        x: "52",
        y: "150",
        width: "72",
        height: "8",
        rx: "4",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 103,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("rect", {
        x: "52",
        y: "166",
        width: "176",
        height: "8",
        rx: "4",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 104,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("rect", {
        x: "291",
        y: "150",
        width: "40",
        height: "8",
        rx: "4",
        fill: "#DFE0E6",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 105,
            columnNumber: 9
        },
        __self: undefined
    }))), /*#__PURE__*/ React.createElement("rect", {
        x: "1",
        y: "1",
        width: "341",
        height: "192",
        rx: "11",
        stroke: "#F0F0F2",
        strokeWidth: "2",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 108,
            columnNumber: 5
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("defs", {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 117,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement("clipPath", {
        id: "clip0_18596_144803",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 118,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement("rect", {
        width: "343",
        height: "194",
        rx: "12",
        fill: "white",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/NotificationsPermission.tsx",
            lineNumber: 119,
            columnNumber: 9
        },
        __self: undefined
    }))));
_c1 = SkeletonNotifications;
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "NotificationsPermission");
__webpack_require__.$Refresh$.register(_c1, "SkeletonNotifications");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/OnboardAccount.tsx":
/*!************************************************************!*\
  !*** ./src/components/Onboarding/pages/OnboardAccount.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardAccount": () => (/* binding */ OnboardAccount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _hooks_useSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useSteps */ "./src/hooks/useSteps.tsx");
/* harmony import */ var _common_Account_CreatePassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Account/CreatePassword */ "./src/components/common/Account/CreatePassword.tsx");
/* harmony import */ var _common_Account_ImportWallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Account/ImportWallets */ "./src/components/common/Account/ImportWallets.tsx");
/* harmony import */ var _common_Account_MnemonicInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Account/MnemonicInput */ "./src/components/common/Account/MnemonicInput.tsx");
/* harmony import */ var _common_Account_PrivateKeyInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Account/PrivateKeyInput */ "./src/components/common/Account/PrivateKeyInput.tsx");
/* harmony import */ var _common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Layout/Drawer */ "./src/components/common/Layout/Drawer.tsx");
/* harmony import */ var _common_Layout_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Layout/Nav */ "./src/components/common/Layout/Nav.tsx");
/* harmony import */ var _AlreadyOnboarded__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AlreadyOnboarded */ "./src/components/Onboarding/pages/AlreadyOnboarded.tsx");
/* harmony import */ var _BlockchainSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BlockchainSelector */ "./src/components/Onboarding/pages/BlockchainSelector.tsx");
/* harmony import */ var _CreateOrImportWallet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CreateOrImportWallet */ "./src/components/Onboarding/pages/CreateOrImportWallet.tsx");
/* harmony import */ var _Finish__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Finish */ "./src/components/Onboarding/pages/Finish.tsx");
/* harmony import */ var _HardwareOnboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HardwareOnboard */ "./src/components/Onboarding/pages/HardwareOnboard.tsx");
/* harmony import */ var _InviteCodeForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InviteCodeForm */ "./src/components/Onboarding/pages/InviteCodeForm.tsx");
/* harmony import */ var _KeyringTypeSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./KeyringTypeSelector */ "./src/components/Onboarding/pages/KeyringTypeSelector.tsx");
/* harmony import */ var _NotificationsPermission__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NotificationsPermission */ "./src/components/Onboarding/pages/NotificationsPermission.tsx");
/* harmony import */ var _UsernameForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./UsernameForm */ "./src/components/Onboarding/pages/UsernameForm.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();



















const OnboardAccount = ({ onRecover , containerRef , navProps , isAddingAccount , isOnboarded  })=>{
    _s();
    const { step , nextStep , prevStep  } = (0,_hooks_useSteps__WEBPACK_IMPORTED_MODULE_3__.useSteps)();
    const [openDrawer, setOpenDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { onboardingData , setOnboardingData , handleSelectBlockchain , handlePrivateKeyInput  } = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useOnboarding)();
    const { signMessageForWallet  } = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useRpcRequests)();
    const { inviteCode , action , keyringType , mnemonic , blockchain , signedWalletDescriptors , selectedBlockchains  } = onboardingData;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Reset blockchain keyrings on certain changes that invalidate the addresses
        setOnboardingData({
            signedWalletDescriptors: []
        });
    }, [
        action,
        keyringType,
        mnemonic,
        setOnboardingData
    ]);
    const steps = [
        /*#__PURE__*/ React.createElement(_InviteCodeForm__WEBPACK_IMPORTED_MODULE_15__.InviteCodeForm, {
            key: "InviteCodeForm",
            onClickRecover: onRecover,
            onSubmit: (inviteCode)=>{
                setOnboardingData({
                    inviteCode
                });
                nextStep();
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                lineNumber: 69,
                columnNumber: 5
            },
            __self: undefined
        }),
        /*#__PURE__*/ React.createElement(_UsernameForm__WEBPACK_IMPORTED_MODULE_18__.UsernameForm, {
            key: "UsernameForm",
            inviteCode: inviteCode,
            onNext: (username)=>{
                setOnboardingData({
                    username
                });
                nextStep();
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                lineNumber: 77,
                columnNumber: 5
            },
            __self: undefined
        }),
        /*#__PURE__*/ React.createElement(_CreateOrImportWallet__WEBPACK_IMPORTED_MODULE_12__.CreateOrImportWallet, {
            key: "CreateOrImportWallet",
            onNext: (data)=>{
                setOnboardingData({
                    ...data
                });
                nextStep();
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                lineNumber: 85,
                columnNumber: 5
            },
            __self: undefined
        }),
        ...action === "import" ? [
            /*#__PURE__*/ React.createElement(_KeyringTypeSelector__WEBPACK_IMPORTED_MODULE_16__.KeyringTypeSelector, {
                key: "KeyringTypeSelector",
                action: action,
                onNext: (keyringType)=>{
                    setOnboardingData({
                        keyringType
                    });
                    nextStep();
                },
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                },
                __self: undefined
            })
        ] : [],
        // Show the seed phrase if we are creating based on a mnemonic
        ...keyringType === "mnemonic" ? [
            /*#__PURE__*/ React.createElement(_common_Account_MnemonicInput__WEBPACK_IMPORTED_MODULE_6__.MnemonicInput, {
                key: "MnemonicInput",
                readOnly: action === "create",
                buttonLabel: action === "create" ? "Next" : "Import",
                onNext: async (mnemonic)=>{
                    setOnboardingData({
                        mnemonic
                    });
                    nextStep();
                },
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                },
                __self: undefined
            })
        ] : [],
        ...keyringType === "private-key" ? // selector
        [
            /*#__PURE__*/ React.createElement(_common_Account_PrivateKeyInput__WEBPACK_IMPORTED_MODULE_7__.PrivateKeyInput, {
                key: "PrivateKeyInput",
                onNext: (result)=>{
                    handlePrivateKeyInput(result);
                    nextStep();
                },
                onboarding: true,
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                },
                __self: undefined
            })
        ] : [
            /*#__PURE__*/ React.createElement(_BlockchainSelector__WEBPACK_IMPORTED_MODULE_11__.BlockchainSelector, {
                key: "BlockchainSelector",
                selectedBlockchains: selectedBlockchains,
                onClick: async (blockchain)=>{
                    await handleSelectBlockchain({
                        blockchain
                    });
                    // If wallet is a ledger, step through the ledger onboarding flow
                    // OR if action is an import then open the drawer with the import accounts
                    // component
                    if (keyringType === "ledger" || action === "import") {
                        setOpenDrawer(true);
                    }
                },
                onNext: nextStep,
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                },
                __self: undefined
            })
        ],
        ...!isAddingAccount ? [
            /*#__PURE__*/ React.createElement(_common_Account_CreatePassword__WEBPACK_IMPORTED_MODULE_4__.CreatePassword, {
                key: "CreatePassword",
                onNext: async (password)=>{
                    setOnboardingData({
                        password
                    });
                    nextStep();
                },
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                },
                __self: undefined
            })
        ] : [],
        /*#__PURE__*/ React.createElement(_NotificationsPermission__WEBPACK_IMPORTED_MODULE_17__.NotificationsPermission, {
            key: "NotificationsPermission",
            onNext: nextStep,
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                lineNumber: 160,
                columnNumber: 5
            },
            __self: undefined
        }),
        /*#__PURE__*/ React.createElement(_Finish__WEBPACK_IMPORTED_MODULE_13__.Finish, {
            key: "Finish",
            isAddingAccount: isAddingAccount,
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                lineNumber: 161,
                columnNumber: 5
            },
            __self: undefined
        })
    ];
    if (isOnboarded && step !== steps.length - 1) {
        return /*#__PURE__*/ React.createElement(_AlreadyOnboarded__WEBPACK_IMPORTED_MODULE_10__.AlreadyOnboarded, {
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
                lineNumber: 165,
                columnNumber: 12
            },
            __self: undefined
        });
    }
    return /*#__PURE__*/ React.createElement(_common_Layout_Nav__WEBPACK_IMPORTED_MODULE_9__.WithNav, {
        navButtonLeft: step > 0 && step !== steps.length - 1 ? /*#__PURE__*/ React.createElement(_common_Layout_Nav__WEBPACK_IMPORTED_MODULE_9__.NavBackButton, {
            onClick: prevStep
        }) : undefined,
        ...navProps,
        // Only display the onboarding menu on the first step
        navButtonRight: step === 0 ? navProps.navButtonRight : undefined,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
            lineNumber: 169,
            columnNumber: 5
        },
        __self: undefined
    }, steps[step], /*#__PURE__*/ React.createElement(_common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_8__.WithContaineredDrawer, {
        containerRef: containerRef,
        openDrawer: openDrawer,
        setOpenDrawer: setOpenDrawer,
        paperStyles: {
            height: "calc(100% - 56px)",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
            lineNumber: 181,
            columnNumber: 7
        },
        __self: undefined
    }, keyringType === "ledger" ? /*#__PURE__*/ React.createElement(_HardwareOnboard__WEBPACK_IMPORTED_MODULE_14__.HardwareOnboard, {
        blockchain: blockchain,
        // @ts-expect-error not assignable to type string ...
        action: action,
        signMessage: (publicKey)=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.getCreateMessage)(publicKey),
        signText: "Sign the message to authenticate with Backpack.",
        onClose: ()=>setOpenDrawer(false),
        onComplete: (signedWalletDescriptor)=>{
            setOnboardingData({
                signedWalletDescriptors: [
                    ...signedWalletDescriptors,
                    signedWalletDescriptor
                ]
            });
            setOpenDrawer(false);
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
            lineNumber: 192,
            columnNumber: 11
        },
        __self: undefined
    }) : /*#__PURE__*/ React.createElement(_common_Account_ImportWallets__WEBPACK_IMPORTED_MODULE_5__.ImportWallets, {
        blockchain: blockchain,
        mnemonic: mnemonic,
        allowMultiple: false,
        onNext: async (walletDescriptors)=>{
            // Should only be one public key path
            const walletDescriptor = walletDescriptors[0];
            const signature = await signMessageForWallet(walletDescriptor.blockchain, walletDescriptor.publicKey, (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.getCreateMessage)(walletDescriptor.publicKey), {
                mnemonic: mnemonic,
                signedWalletDescriptors: [
                    {
                        ...walletDescriptor,
                        signature: ""
                    }
                ]
            });
            setOnboardingData({
                signedWalletDescriptors: [
                    ...signedWalletDescriptors,
                    {
                        ...walletDescriptor,
                        signature
                    }
                ]
            });
            setOpenDrawer(false);
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/OnboardAccount.tsx",
            lineNumber: 210,
            columnNumber: 11
        },
        __self: undefined
    })));
};
_s(OnboardAccount, "6lgIXk2n50SvrVVi2FtvW6l6rL4=", false, function() {
    return [
        _hooks_useSteps__WEBPACK_IMPORTED_MODULE_3__.useSteps,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useOnboarding,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useRpcRequests
    ];
});
_c = OnboardAccount;
var _c;
__webpack_require__.$Refresh$.register(_c, "OnboardAccount");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/RecoverAccount.tsx":
/*!************************************************************!*\
  !*** ./src/components/Onboarding/pages/RecoverAccount.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverAccount": () => (/* binding */ RecoverAccount)
/* harmony export */ });
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _hooks_useSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useSteps */ "./src/hooks/useSteps.tsx");
/* harmony import */ var _common_Account_CreatePassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Account/CreatePassword */ "./src/components/common/Account/CreatePassword.tsx");
/* harmony import */ var _common_Account_MnemonicInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Account/MnemonicInput */ "./src/components/common/Account/MnemonicInput.tsx");
/* harmony import */ var _common_Account_PrivateKeyInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Account/PrivateKeyInput */ "./src/components/common/Account/PrivateKeyInput.tsx");
/* harmony import */ var _common_Layout_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Layout/Nav */ "./src/components/common/Layout/Nav.tsx");
/* harmony import */ var _Onboarding_pages_HardwareOnboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Onboarding/pages/HardwareOnboard */ "./src/components/Onboarding/pages/HardwareOnboard.tsx");
/* harmony import */ var _AlreadyOnboarded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AlreadyOnboarded */ "./src/components/Onboarding/pages/AlreadyOnboarded.tsx");
/* harmony import */ var _Finish__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Finish */ "./src/components/Onboarding/pages/Finish.tsx");
/* harmony import */ var _KeyringTypeSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./KeyringTypeSelector */ "./src/components/Onboarding/pages/KeyringTypeSelector.tsx");
/* harmony import */ var _MnemonicSearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MnemonicSearch */ "./src/components/Onboarding/pages/MnemonicSearch.tsx");
/* harmony import */ var _NotificationsPermission__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NotificationsPermission */ "./src/components/Onboarding/pages/NotificationsPermission.tsx");
/* harmony import */ var _RecoverAccountUsernameForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RecoverAccountUsernameForm */ "./src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();














const RecoverAccount = ({ onClose , navProps , isAddingAccount , isOnboarded  })=>{
    _s();
    const { step , nextStep , prevStep  } = (0,_hooks_useSteps__WEBPACK_IMPORTED_MODULE_2__.useSteps)();
    const { signMessageForWallet  } = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useRpcRequests)();
    const { onboardingData , setOnboardingData , handlePrivateKeyInput  } = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useOnboarding)();
    const { userId , keyringType , mnemonic , signedWalletDescriptors , serverPublicKeys  } = onboardingData;
    const authMessage = userId ? (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.getAuthMessage)(userId) : "";
    const hardwareOnboardSteps = (0,_Onboarding_pages_HardwareOnboard__WEBPACK_IMPORTED_MODULE_7__.useHardwareOnboardSteps)({
        blockchain: serverPublicKeys.length > 0 ? serverPublicKeys[0].blockchain : _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.Blockchain.SOLANA,
        action: "search",
        searchPublicKey: serverPublicKeys.length > 0 ? serverPublicKeys[0].publicKey : undefined,
        signMessage: authMessage,
        signText: "Sign the message to authenticate with Backpack",
        onComplete: (signedWalletDescriptor)=>{
            setOnboardingData({
                signedWalletDescriptors: [
                    ...signedWalletDescriptors,
                    signedWalletDescriptor
                ]
            });
            nextStep();
        },
        nextStep,
        prevStep
    });
    const steps = [
        // <TwitterConnect key="TwitterConnect" />,
        /*#__PURE__*/ React.createElement(_RecoverAccountUsernameForm__WEBPACK_IMPORTED_MODULE_13__.RecoverAccountUsernameForm, {
            key: "RecoverAccountUsernameForm",
            onNext: (userId, username, serverPublicKeys)=>{
                setOnboardingData({
                    userId,
                    username,
                    serverPublicKeys
                });
                nextStep();
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
                lineNumber: 74,
                columnNumber: 5
            },
            __self: undefined
        }),
        /*#__PURE__*/ React.createElement(_KeyringTypeSelector__WEBPACK_IMPORTED_MODULE_10__.KeyringTypeSelector, {
            key: "KeyringTypeSelector",
            action: "recover",
            onNext: (keyringType)=>{
                setOnboardingData({
                    keyringType
                });
                nextStep();
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
                lineNumber: 85,
                columnNumber: 5
            },
            __self: undefined
        }),
        ...keyringType === "mnemonic" ? [
            // Using a mnemonic
            /*#__PURE__*/ React.createElement(_common_Account_MnemonicInput__WEBPACK_IMPORTED_MODULE_4__.MnemonicInput, {
                key: "MnemonicInput",
                buttonLabel: "Next",
                onNext: async (mnemonic)=>{
                    setOnboardingData({
                        mnemonic
                    });
                    nextStep();
                },
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                },
                __self: undefined
            }),
            /*#__PURE__*/ React.createElement(_MnemonicSearch__WEBPACK_IMPORTED_MODULE_11__.MnemonicSearch, {
                key: "MnemonicSearch",
                serverPublicKeys: serverPublicKeys,
                mnemonic: mnemonic,
                onRetry: prevStep,
                onNext: async (walletDescriptors)=>{
                    const signedWalletDescriptors = await Promise.all(walletDescriptors.map(async (w)=>({
                            ...w,
                            signature: await signMessageForWallet(w.blockchain, w.publicKey, authMessage, {
                                mnemonic,
                                signedWalletDescriptors: [
                                    {
                                        ...w,
                                        signature: ""
                                    }
                                ]
                            })
                        })));
                    setOnboardingData({
                        signedWalletDescriptors
                    });
                    nextStep();
                },
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                },
                __self: undefined
            })
        ] : [],
        ...keyringType === "ledger" ? hardwareOnboardSteps : [],
        ...keyringType === "private-key" ? [
            /*#__PURE__*/ React.createElement(_common_Account_PrivateKeyInput__WEBPACK_IMPORTED_MODULE_5__.PrivateKeyInput, {
                key: "PrivateKeyInput",
                serverPublicKeys: serverPublicKeys,
                onNext: async (result)=>{
                    await handlePrivateKeyInput(result);
                    nextStep();
                },
                onboarding: true,
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                },
                __self: undefined
            })
        ] : [],
        ...!isAddingAccount ? [
            /*#__PURE__*/ React.createElement(_common_Account_CreatePassword__WEBPACK_IMPORTED_MODULE_3__.CreatePassword, {
                key: "CreatePassword",
                onNext: async (password)=>{
                    setOnboardingData({
                        password
                    });
                    nextStep();
                },
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                },
                __self: undefined
            })
        ] : [],
        /*#__PURE__*/ React.createElement(_NotificationsPermission__WEBPACK_IMPORTED_MODULE_12__.NotificationsPermission, {
            key: "NotificationsPermission",
            onNext: nextStep,
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
                lineNumber: 155,
                columnNumber: 5
            },
            __self: undefined
        }),
        /*#__PURE__*/ React.createElement(_Finish__WEBPACK_IMPORTED_MODULE_9__.Finish, {
            key: "Finish",
            isAddingAccount: isAddingAccount,
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
                lineNumber: 156,
                columnNumber: 5
            },
            __self: undefined
        })
    ];
    // Cant go backwards from the last step as the keyring is already created
    const isLastStep = step === steps.length - 1;
    // Cant go backwards from the password step as can hit mnemonic search which
    // auto progresses. This could be handled by jumping to a step.
    const isPasswordStep = steps[step].type.name === "CreatePassword";
    // Display message if already onboarded and not on last step
    if (isOnboarded && !isLastStep) {
        return /*#__PURE__*/ React.createElement(_AlreadyOnboarded__WEBPACK_IMPORTED_MODULE_8__.AlreadyOnboarded, {
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
                lineNumber: 166,
                columnNumber: 12
            },
            __self: undefined
        });
    }
    return /*#__PURE__*/ React.createElement(_common_Layout_Nav__WEBPACK_IMPORTED_MODULE_6__.WithNav, {
        navButtonLeft: !isLastStep && !isPasswordStep ? /*#__PURE__*/ React.createElement(_common_Layout_Nav__WEBPACK_IMPORTED_MODULE_6__.NavBackButton, {
            onClick: step > 0 ? prevStep : onClose
        }) : undefined,
        ...navProps,
        // Only display the onboarding menu on the first step
        navButtonRight: undefined,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccount.tsx",
            lineNumber: 170,
            columnNumber: 5
        },
        __self: undefined
    }, steps[step]);
};
_s(RecoverAccount, "+RflRQYBoHY2rpbf1O9DTLJyt80=", false, function() {
    return [
        _hooks_useSteps__WEBPACK_IMPORTED_MODULE_2__.useSteps,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useRpcRequests,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useOnboarding,
        _Onboarding_pages_HardwareOnboard__WEBPACK_IMPORTED_MODULE_7__.useHardwareOnboardSteps
    ];
});
_c = RecoverAccount;
var _c;
__webpack_require__.$Refresh$.register(_c, "RecoverAccount");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx":
/*!************************************************************************!*\
  !*** ./src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverAccountUsernameForm": () => (/* binding */ RecoverAccountUsernameForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/AlternateEmail.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();







const RecoverAccountUsernameForm = ({ onNext  })=>{
    _s();
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Clear error on username changes
        setError("");
    }, [
        username
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`${_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.BACKEND_API_URL}/users/${username}`);
            const json = await response.json();
            if (!response.ok) throw new Error(json.msg);
            // Use the first found public key
            onNext(json.id, username, json.publicKeys);
        } catch (err) {
            setError(err.message || "Something went wrong");
        }
    }, [
        username
    ]);
    return /*#__PURE__*/ React.createElement("form", {
        noValidate: true,
        onSubmit: handleSubmit,
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx",
            lineNumber: 46,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
            margin: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx",
            lineNumber: 56,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.Header, {
        text: "Username recovery",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx",
            lineNumber: 57,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.SubtextParagraph, {
        style: {
            margin: "16px 0"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx",
            lineNumber: 58,
            columnNumber: 9
        },
        __self: undefined
    }, "Enter your username below, you will then be asked for your secret recovery phrase to verify that you own the public key that was initially associated with it.")), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
            marginLeft: "16px",
            marginRight: "16px",
            marginBottom: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx",
            lineNumber: 64,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
        inputProps: {
            name: "username",
            autoComplete: "off",
            spellCheck: "false",
            autoFocus: true
        },
        placeholder: "Username",
        type: "text",
        value: username,
        setValue: (e)=>{
            setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""));
        },
        error: error ? true : false,
        errorMessage: error,
        startAdornment: /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            position: "start"
        }, /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            style: {
                color: theme.custom.colors.secondary,
                fontSize: 18,
                marginRight: -2,
                userSelect: "none"
            }
        })),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx",
            lineNumber: 71,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.PrimaryButton, {
        label: "Continue",
        type: "submit",
        style: {
            marginTop: 8
        },
        disabled: username.length < 3,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/RecoverAccountUsernameForm.tsx",
            lineNumber: 101,
            columnNumber: 9
        },
        __self: undefined
    })));
};
_s(RecoverAccountUsernameForm, "OEBYa3ZtxD3ROW14t4YLBrKseSQ=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme
    ];
});
_c = RecoverAccountUsernameForm;
var _c;
__webpack_require__.$Refresh$.register(_c, "RecoverAccountUsernameForm");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Onboarding/pages/UsernameForm.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Onboarding/pages/UsernameForm.tsx ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsernameForm": () => (/* binding */ UsernameForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/AlternateEmail.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();






const UsernameForm = ({ inviteCode , onNext  })=>{
    _s();
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setError("");
    }, [
        username
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch(`https://auth.xnfts.dev/users/${username}`, {
                headers: {
                    "x-backpack-invite-code": String(inviteCode)
                }
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json.message || "There was an error");
            onNext(username);
        } catch (err) {
            setError(err.message);
        }
    }, [
        username
    ]);
    return /*#__PURE__*/ React.createElement("form", {
        noValidate: true,
        onSubmit: handleSubmit,
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 46,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            margin: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 56,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Header, {
        text: "Claim your username",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 57,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.SubtextParagraph, {
        style: {
            margin: "16px 0"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 58,
            columnNumber: 9
        },
        __self: undefined
    }, "Others can see and find you by this username, and it will be associated with your primary wallet address.", /*#__PURE__*/ React.createElement("br", {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 61,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("br", {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 62,
            columnNumber: 11
        },
        __self: undefined
    }), "Choose wisely if you'd like to remain anonymous.", /*#__PURE__*/ React.createElement("br", {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 64,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ React.createElement("br", {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 65,
            columnNumber: 11
        },
        __self: undefined
    }), "Have fun!")), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            marginLeft: "16px",
            marginRight: "16px",
            marginBottom: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 69,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            marginBottom: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 76,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
        inputProps: {
            name: "username",
            autoComplete: "off",
            spellCheck: "false",
            autoFocus: true
        },
        placeholder: "Username",
        type: "text",
        value: username,
        setValue: (e)=>{
            setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""));
        },
        error: error ? true : false,
        errorMessage: error,
        startAdornment: /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "start"
        }, /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            style: {
                color: theme.custom.colors.secondary,
                fontSize: 18,
                marginRight: -2,
                userSelect: "none"
            }
        })),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 77,
            columnNumber: 11
        },
        __self: undefined
    })), /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__.PrimaryButton, {
        label: "Continue",
        type: "submit",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Onboarding/pages/UsernameForm.tsx",
            lineNumber: 108,
            columnNumber: 9
        },
        __self: undefined
    })));
};
_s(UsernameForm, "OEBYa3ZtxD3ROW14t4YLBrKseSQ=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme
    ];
});
_c = UsernameForm;
var _c;
__webpack_require__.$Refresh$.register(_c, "UsernameForm");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectHardwareSuccess": () => (/* binding */ ConnectHardwareSuccess)
/* harmony export */ });
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common */ "./src/components/common/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");




function ConnectHardwareSuccess({ onNext  }) {
    return /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx",
            lineNumber: 8,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
            margin: "0 24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx",
            lineNumber: 16,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_1__.HeaderIcon, {
        icon: /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__.SuccessIcon, null),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx",
            lineNumber: 17,
            columnNumber: 9
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_1__.Header, {
        text: "Hardware wallet connected",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx",
            lineNumber: 18,
            columnNumber: 9
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_1__.SubtextParagraph, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx",
            lineNumber: 19,
            columnNumber: 9
        },
        __self: this
    }, "You can now access your hardware wallet with Backpack.")), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
            marginLeft: "16px",
            marginRight: "16px",
            marginBottom: "16px",
            display: "flex",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx",
            lineNumber: 23,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_0__.PrimaryButton, {
        label: "All done!",
        onClick: onNext,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx",
            lineNumber: 32,
            columnNumber: 9
        },
        __self: this
    })));
}
_c = ConnectHardwareSuccess;
var _c;
__webpack_require__.$Refresh$.register(_c, "ConnectHardwareSuccess");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/index.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/index.tsx ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectHardware": () => (/* binding */ ConnectHardware)
/* harmony export */ });
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _Onboarding_pages_HardwareOnboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Onboarding/pages/HardwareOnboard */ "./src/components/Onboarding/pages/HardwareOnboard.tsx");
/* harmony import */ var _ConnectHardwareSuccess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConnectHardwareSuccess */ "./src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/ConnectHardwareSuccess.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();




function ConnectHardware({ blockchain , action , publicKey , onComplete  }) {
    _s();
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useBackgroundClient)();
    const enabledBlockchains = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useEnabledBlockchains)();
    const keyringExists = enabledBlockchains.includes(blockchain);
    const handleHardwareOnboardComplete = async (signedWalletDescriptor)=>{
        if (keyringExists) {
            // Just import the wallet because the keyring already exists
            await background.request({
                method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_LEDGER_IMPORT,
                params: [
                    signedWalletDescriptor
                ]
            });
        } else {
            await background.request({
                method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_BLOCKCHAIN_KEYRINGS_ADD,
                params: [
                    {
                        signedWalletDescriptors: [
                            signedWalletDescriptor
                        ]
                    }
                ]
            });
        }
    };
    return /*#__PURE__*/ React.createElement(_Onboarding_pages_HardwareOnboard__WEBPACK_IMPORTED_MODULE_2__.HardwareOnboard, {
        blockchain: blockchain,
        action: action,
        signMessage: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.getAddMessage,
        signText: "Sign the message to add the wallet to your Backpack account.",
        successComponent: /*#__PURE__*/ React.createElement(_ConnectHardwareSuccess__WEBPACK_IMPORTED_MODULE_3__.ConnectHardwareSuccess, {
            onNext: onComplete
        }),
        searchPublicKey: publicKey,
        onComplete: handleHardwareOnboardComplete,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/index.tsx",
            lineNumber: 47,
            columnNumber: 5
        },
        __self: this
    });
}
_s(ConnectHardware, "YRIwlWd9UIdn05SNt1y8iCILXdo=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useBackgroundClient,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useEnabledBlockchains
    ];
});
_c = ConnectHardware;
var _c;
__webpack_require__.$Refresh$.register(_c, "ConnectHardware");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/common/Account/CreatePassword.tsx":
/*!**********************************************************!*\
  !*** ./src/components/common/Account/CreatePassword.tsx ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePassword": () => (/* binding */ CreatePassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/VisibilityOff.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Visibility.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();







var PasswordError;
(function(PasswordError) {
    PasswordError[PasswordError["TOO_SHORT"] = 0] = "TOO_SHORT";
    PasswordError[PasswordError["NO_MATCH"] = 1] = "NO_MATCH";
})(PasswordError || (PasswordError = {}));
function CreatePassword({ onNext  }) {
    _s();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [passwordConfirm, setPasswordConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setError(null);
    }, [
        password,
        passwordConfirm
    ]);
    const next = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (e)=>{
        e.preventDefault();
        if (password.length < 8) {
            setError(PasswordError.TOO_SHORT);
            return;
        } else if (password !== passwordConfirm) {
            setError(PasswordError.NO_MATCH);
            return;
        }
        onNext(password);
    }, [
        onNext,
        password,
        passwordConfirm
    ]);
    const isNextDisabled = !checked;
    return /*#__PURE__*/ React.createElement("form", {
        noValidate: true,
        onSubmit: next,
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 49,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            marginTop: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 59,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            marginLeft: "24px",
            marginRight: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 64,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.Header, {
        text: "Create a password",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 70,
            columnNumber: 11
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.SubtextParagraph, {
        style: {
            marginTop: "8px",
            marginBottom: "40px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 71,
            columnNumber: 11
        },
        __self: this
    }, "It should be at least 8 characters.", /*#__PURE__*/ React.createElement("br", {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 73,
            columnNumber: 13
        },
        __self: this
    }), "You’ll need this to unlock Backpack.")), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            marginLeft: "16px",
            marginRight: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 77,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
        autoFocus: !passwordConfirm,
        inputProps: {
            name: "password"
        },
        placeholder: "Password",
        type: showPassword ? "text" : "password",
        value: password,
        setValue: (e)=>setPassword(e.target.value),
        error: error === PasswordError.TOO_SHORT,
        endAdornment: /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            position: "end"
        }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            disableRipple: true,
            sx: {
                color: theme.custom.colors.icon
            },
            onClick: ()=>setShowPassword(!showPassword),
            onMouseDown: ()=>setShowPassword(!showPassword),
            tabIndex: -1
        }, showPassword ? /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__["default"], null) : /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__["default"], null))),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 83,
            columnNumber: 11
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
        inputProps: {
            name: "password-confirmation"
        },
        placeholder: "Confirm Password",
        type: showPassword ? "text" : "password",
        value: passwordConfirm,
        setValue: (e)=>setPasswordConfirm(e.target.value),
        error: error === PasswordError.NO_MATCH,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 105,
            columnNumber: 11
        },
        __self: this
    }), error !== null ? /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sx: {
            color: theme.custom.colors.negative
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 114,
            columnNumber: 13
        },
        __self: this
    }, {
        [PasswordError.TOO_SHORT]: "Your password must be at least 8 characters.",
        [PasswordError.NO_MATCH]: "Your passwords do not match."
    }[error]) : null)), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            marginLeft: "16px",
            marginRight: "16px",
            marginBottom: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 126,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 133,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.CheckboxForm, {
        checked: checked,
        setChecked: setChecked,
        label: /*#__PURE__*/ React.createElement(React.Fragment, null, "I agree to the", " ", /*#__PURE__*/ React.createElement("span", {
            onClick: ()=>window.open(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_TERMS_OF_SERVICE),
            style: {
                color: theme.custom.colors.brandColor
            }
        }, "terms of service")),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 140,
            columnNumber: 11
        },
        __self: this
    })), /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.PrimaryButton, {
        disabled: isNextDisabled,
        label: "Next",
        type: "submit",
        buttonLabelStyle: {
            fontWeight: 600
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/CreatePassword.tsx",
            lineNumber: 156,
            columnNumber: 9
        },
        __self: this
    })));
}
_s(CreatePassword, "eCFQuMTdglNS34KipCZTKRlnTWU=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme
    ];
});
_c = CreatePassword;
var _c;
__webpack_require__.$Refresh$.register(_c, "CreatePassword");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/common/Account/SetupComplete.tsx":
/*!*********************************************************!*\
  !*** ./src/components/common/Account/SetupComplete.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupComplete": () => (/* binding */ SetupComplete)
/* harmony export */ });
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon */ "./src/components/common/Icon/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature(), _s1 = __webpack_require__.$Refresh$.signature(), _s2 = __webpack_require__.$Refresh$.signature();






function SetupComplete({ onClose  }) {
    _s();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme)();
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        style: {
            position: "fixed",
            top: "16px",
            right: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 33,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(PinNotification, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 40,
            columnNumber: 9
        },
        __self: this
    })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            color: theme.custom.colors.nav
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 42,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 51,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            mt: "24px",
            ml: "24px",
            mr: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 52,
            columnNumber: 11
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Header, {
        text: "You've set up Backpack!",
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 59,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.SubtextParagraph, {
        style: {
            marginBottom: "25px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 60,
            columnNumber: 13
        },
        __self: this
    }, "We recommend downloading a few xNFTs to get started.")), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            ml: "16px",
            mr: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 68,
            columnNumber: 11
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        container: true,
        spacing: 1,
        columns: 1,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 74,
            columnNumber: 13
        },
        __self: this
    }, _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.BACKPACK_FEATURE_XNFT ? /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        xs: 6,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 76,
            columnNumber: 17
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(CallToAction, {
        icon: /*#__PURE__*/ React.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__.AppStoreIcon, null),
        title: "Browse the xNFT library",
        onClick: ()=>window.open(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.XNFT_GG_LINK, "_blank"),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 77,
            columnNumber: 19
        },
        __self: this
    })) : null, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        xs: 6,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 84,
            columnNumber: 15
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(CallToAction, {
        icon: /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__.TwitterIcon, {
            fill: "#1D9BF0"
        }),
        title: "Follow us on Twitter",
        onClick: ()=>window.open(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.TWITTER_LINK, "_blank"),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 85,
            columnNumber: 17
        },
        __self: this
    })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        xs: 6,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 91,
            columnNumber: 15
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(CallToAction, {
        icon: /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__.DiscordIcon, {
            fill: "#5865F2"
        }),
        title: "Join Discord",
        onClick: ()=>window.open(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.DISCORD_INVITE_LINK, "_blank"),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 92,
            columnNumber: 17
        },
        __self: this
    }))))), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            ml: "16px",
            mr: "16px",
            mb: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 101,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__.PrimaryButton, {
        label: "Visit xnft.gg",
        onClick: onClose,
        buttonLabelStyle: {
            fontWeight: 600
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 108,
            columnNumber: 11
        },
        __self: this
    }))));
}
_s(SetupComplete, "EUWLPhliQbTzY6cWvepxLA4f8h0=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme
    ];
});
_c = SetupComplete;
function CallToAction({ icon , title , onClick  }) {
    _s1();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme)();
    return /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        disableRipple: true,
        onClick: onClick,
        style: {
            padding: 0,
            textTransform: "none",
            border: `${theme.custom.colors.borderFull}`,
            borderRadius: "12px",
            background: theme.custom.colors.nav,
            width: "100%"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 132,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sx: {
            p: 1,
            color: theme.custom.colors.fontColor,
            cursor: "pointer",
            padding: "16px",
            boxShadow: "none",
            backgroundColor: "transparent",
            width: "100%"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 144,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: 12
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 155,
            columnNumber: 9
        },
        __self: this
    }, icon, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "left"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 159,
            columnNumber: 11
        },
        __self: this
    }, title))));
}
_s1(CallToAction, "EUWLPhliQbTzY6cWvepxLA4f8h0=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme
    ];
});
_c1 = CallToAction;
function PinNotification() {
    _s2();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme)();
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            background: theme.custom.colors.brandColor,
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "16px",
            paddingBottom: "16px",
            color: theme.custom.colors.nav,
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 178,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
            fontWeight: 700
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 190,
            columnNumber: 7
        },
        __self: this
    }, "Pin the Backpack Extension"), /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            marginTop: "4px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 197,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginRight: "4px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 198,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
            fontSize: "16px",
            fontWeight: 500
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 206,
            columnNumber: 11
        },
        __self: this
    }, "Click")), /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 215,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__.ExtensionIcon, {
        fill: theme.custom.colors.nav,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 222,
            columnNumber: 11
        },
        __self: this
    })), /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginLeft: "4px",
            marginRight: "4px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 224,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
            fontSize: "16px",
            fontWeight: 500
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 233,
            columnNumber: 11
        },
        __self: this
    }, "and")), /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 242,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_1__.PinIcon, {
        fill: theme.custom.colors.nav,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/SetupComplete.tsx",
            lineNumber: 249,
            columnNumber: 11
        },
        __self: this
    }))));
}
_s2(PinNotification, "EUWLPhliQbTzY6cWvepxLA4f8h0=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme
    ];
});
_c2 = PinNotification;
var _c, _c1, _c2;
__webpack_require__.$Refresh$.register(_c, "SetupComplete");
__webpack_require__.$Refresh$.register(_c1, "CallToAction");
__webpack_require__.$Refresh$.register(_c2, "PinNotification");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/options/Options.tsx":
/*!*********************************!*\
  !*** ./src/options/Options.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "../../node_modules/recoil/es/index.js");
/* harmony import */ var _app_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/Router */ "./src/app/Router.tsx");
/* harmony import */ var _components_common_WithTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/WithTheme */ "./src/components/common/WithTheme.tsx");
/* harmony import */ var _components_Onboarding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Onboarding */ "./src/components/Onboarding/index.tsx");
/* harmony import */ var _components_Unlocked_Settings_AddConnectWallet_ConnectHardware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Unlocked/Settings/AddConnectWallet/ConnectHardware */ "./src/components/Unlocked/Settings/AddConnectWallet/ConnectHardware/index.tsx");
/* harmony import */ var _app_App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/App.css */ "./src/app/App.css");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();









//
// Options provides the "expanded" extension app flows. Namely,
//
// - Onboarding
// - Connect to hardware
//
function Options() {
    return /*#__PURE__*/ React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.MemoryRouter, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
            lineNumber: 26,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
            lineNumber: 27,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_Options, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
            lineNumber: 28,
            columnNumber: 9
        },
        __self: this
    })));
}
_c = Options;
function _Options() {
    _s();
    (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useKeyringStoreState)(); // starts polling to keep worker alive
    return /*#__PURE__*/ React.createElement(_components_common_WithTheme__WEBPACK_IMPORTED_MODULE_4__.WithTheme, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
            lineNumber: 37,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.NotificationsProvider, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
            lineNumber: 38,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_app_Router__WEBPACK_IMPORTED_MODULE_3__.WithSuspense, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
            lineNumber: 39,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(Router, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
            lineNumber: 40,
            columnNumber: 11
        },
        __self: this
    }))));
}
_s(_Options, "7u655c3EYYQvI6d1Mw/SIWLMxNI=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useKeyringStoreState
    ];
});
function Router() {
    //
    // Extract the url query parameters for routing dispatch.
    //
    const search = window.location.search.length > 0 ? window.location.search.substring(1) : "";
    const query = search.split("&")[0];
    const params = new URLSearchParams(window.location.search);
    const blockchain = params.get("blockchain") || _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.Blockchain.SOLANA;
    const action = params.get("action") || "create";
    const createKeyring = params.get("create") === "true";
    const publicKey = params.get("publicKey") || undefined;
    switch(query){
        case _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.QUERY_CONNECT_HARDWARE:
            return /*#__PURE__*/ React.createElement(_components_Onboarding__WEBPACK_IMPORTED_MODULE_5__.OptionsContainer, {
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                },
                __self: this
            }, /*#__PURE__*/ React.createElement(_components_Unlocked_Settings_AddConnectWallet_ConnectHardware__WEBPACK_IMPORTED_MODULE_6__.ConnectHardware, {
                blockchain: blockchain,
                action: action,
                createKeyring: createKeyring,
                publicKey: publicKey,
                onComplete: window.close,
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                },
                __self: this
            }));
        case _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.QUERY_ONBOARDING:
            return /*#__PURE__*/ React.createElement(_components_Onboarding__WEBPACK_IMPORTED_MODULE_5__.Onboarding, {
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
                    lineNumber: 80,
                    columnNumber: 14
                },
                __self: this
            });
        case _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.QUERY_ADD_USER_ACCOUNT:
            return /*#__PURE__*/ React.createElement(_components_Onboarding__WEBPACK_IMPORTED_MODULE_5__.Onboarding, {
                isAddingAccount: true,
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/options/Options.tsx",
                    lineNumber: 82,
                    columnNumber: 14
                },
                __self: this
            });
        default:
            throw new Error("invalid query param");
    }
}
_c1 = Router;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Options);
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "Options");
__webpack_require__.$Refresh$.register(_c1, "Router");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=src_options_Options_tsx.js.map