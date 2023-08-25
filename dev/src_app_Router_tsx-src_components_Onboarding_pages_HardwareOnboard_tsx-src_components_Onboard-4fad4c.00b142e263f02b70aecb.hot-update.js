"use strict";
globalThis["webpackHotUpdate_coral_xyz_app_extension"]("src_app_Router_tsx-src_components_Onboarding_pages_HardwareOnboard_tsx-src_components_Onboard-4fad4c",{

/***/ "./src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkmark": () => (/* binding */ Checkmark),
/* harmony export */   "PreferencesSolanaConnection": () => (/* binding */ PreferencesSolanaConnection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Check.js");
/* harmony import */ var _common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/Layout/NavStack */ "./src/components/common/Layout/NavStack.tsx");
/* harmony import */ var _common_Settings_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/Settings/List */ "./src/components/common/Settings/List.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature(), _s1 = __webpack_require__.$Refresh$.signature();








function PreferencesSolanaConnection() {
    _s();
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient)();
    const currentUrl = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useSolanaConnectionUrl)();
    const nav = (0,_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_5__.useNavigation)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        nav.setOptions({
            headerTitle: "Choose Eclipse Chain"
        });
    }, [
        nav
    ]);
    const menuItems = {
        Localnet: {
            onClick: ()=>changeNetwork(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.SolanaCluster.LOCALNET),
            detail: currentUrl === _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.SolanaCluster.LOCALNET ? /*#__PURE__*/ React.createElement(Checkmark, {
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx",
                    lineNumber: 26,
                    columnNumber: 55
                },
                __self: this
            }) : null
        },
        "Eclipse Devnet": {
            onClick: ()=>changeNetwork("https://staging.dev.eclipsenetwork.xyz:8899"),
            detail: currentUrl === "https://staging.dev.eclipsenetwork.xyz:8899" ? /*#__PURE__*/ React.createElement(Checkmark, {
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                },
                __self: this
            }) : null
        },
        Custom: {
            onClick: ()=>{
                nav.push("preferences-solana-edit-rpc-connection");
            },
            detail: currentUrl !== "https://staging.dev.eclipsenetwork.xyz:8899" && currentUrl !== _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.SolanaCluster.LOCALNET ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Checkmark, {
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx",
                    lineNumber: 44,
                    columnNumber: 13
                },
                __self: this
            }), /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.PushDetail, {
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx",
                    lineNumber: 45,
                    columnNumber: 13
                },
                __self: this
            })) : /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.PushDetail, {
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                },
                __self: this
            })
        }
    };
    const changeNetwork = (url)=>{
        try {
            background.request({
                method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_SOLANA_CONNECTION_URL_UPDATE,
                params: [
                    url
                ]
            }).catch(console.error);
        } catch (err) {
            console.error(err);
        }
    };
    return /*#__PURE__*/ React.createElement(_common_Settings_List__WEBPACK_IMPORTED_MODULE_6__.SettingsList, {
        menuItems: menuItems,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx",
            lineNumber: 66,
            columnNumber: 10
        },
        __self: this
    });
}
_s(PreferencesSolanaConnection, "W0y3/cwc64Upmy5ZYI3IYlf01uI=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useSolanaConnectionUrl,
        _common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_5__.useNavigation
    ];
});
_c = PreferencesSolanaConnection;
function Checkmark() {
    _s1();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme)();
    return /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: {
            color: theme.custom.colors.brandColor
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx",
            lineNumber: 72,
            columnNumber: 5
        },
        __self: this
    });
}
_s1(Checkmark, "EUWLPhliQbTzY6cWvepxLA4f8h0=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme
    ];
});
_c1 = Checkmark;
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "PreferencesSolanaConnection");
__webpack_require__.$Refresh$.register(_c1, "Checkmark");


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

});
//# sourceMappingURL=src_app_Router_tsx-src_components_Onboarding_pages_HardwareOnboard_tsx-src_components_Onboard-4fad4c.00b142e263f02b70aecb.hot-update.js.map