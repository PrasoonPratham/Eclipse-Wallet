"use strict";
(globalThis["webpackChunk_coral_xyz_app_extension"] = globalThis["webpackChunk_coral_xyz_app_extension"] || []).push([["src_app_App_tsx"],{

/***/ "./src/app/App.tsx":
/*!*************************!*\
  !*** ./src/app/App.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "../../node_modules/@apollo/client/react/context/ApolloProvider.js");
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "../../node_modules/recoil/es/index.js");
/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/inter */ "../../node_modules/@fontsource/inter/index.css");
/* harmony import */ var _components_common_WithTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/WithTheme */ "./src/components/common/WithTheme.tsx");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/app/ErrorBoundary.tsx");
/* harmony import */ var _fontsource_inter_500_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/inter/500.css */ "../../node_modules/@fontsource/inter/500.css");
/* harmony import */ var _fontsource_inter_600_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fontsource/inter/600.css */ "../../node_modules/@fontsource/inter/600.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "../../node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.css */ "./src/app/App.css");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature(), _s1 = __webpack_require__.$Refresh$.signature(), _s2 = __webpack_require__.$Refresh$.signature();










const Router = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_giphy_react-components_dist_index_js-node_modules_ledgerhq_hw-app-eth_li-dc42e4"), __webpack_require__.e("src_app_Router_tsx-src_components_Onboarding_pages_HardwareOnboard_tsx-src_components_Onboard-4fad4c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Router */ "./src/app/Router.tsx")));
_c = Router;




const BACKDROP_STYLE = {
    height: "100vh",
    minHeight: `${_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.EXTENSION_HEIGHT}px`,
    minWidth: `${_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.EXTENSION_WIDTH}px`,
    background: "red"
};
function App() {
    _s();
    //
    // We use an extra copy of preferences in the local storage backend to avoid
    // hitting the service worker for a slightly faster load time.
    //
    const pStr = window.localStorage.getItem("preferences");
    const preferences = pStr ? JSON.parse(pStr) : {};
    const apolloClient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.createApolloClient)(), []);
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            ...BACKDROP_STYLE,
            background: preferences?.darkMode ? _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.BACKGROUND_BACKDROP_COLOR : _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.LIGHT_BACKGROUND_BACKDROP_COLOR
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 48,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.HashRouter, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 56,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 57,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_13__.ApolloProvider, {
        client: apolloClient,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 58,
            columnNumber: 11
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_components_common_WithTheme__WEBPACK_IMPORTED_MODULE_6__.WithTheme, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 59,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_App, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 60,
            columnNumber: 15
        },
        __self: this
    }))))));
}
_s(App, "kooOOyAYKrd6K4LxxBJkBGOJPY4=");
_c1 = App;
function _App() {
    _s1();
    (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useKeyringStoreState)();
    return /*#__PURE__*/ React.createElement(_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.NotificationsProvider, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 72,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__.ErrorBoundary, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 73,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_Router, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 74,
            columnNumber: 9
        },
        __self: this
    })));
}
_s1(_App, "7u655c3EYYQvI6d1Mw/SIWLMxNI=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useKeyringStoreState
    ];
});
function _Router() {
    _s2();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    return /*#__PURE__*/ React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/ React.createElement("div", {
            style: {
                ...BACKDROP_STYLE,
                background: theme.custom.colors.backgroundBackdrop
            }
        }),
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 83,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(Router, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/App.tsx",
            lineNumber: 93,
            columnNumber: 7
        },
        __self: this
    }));
}
_s2(_Router, "EUWLPhliQbTzY6cWvepxLA4f8h0=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme
    ];
});
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "Router");
__webpack_require__.$Refresh$.register(_c1, "App");


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

/***/ "./src/app/ErrorBoundary.tsx":
/*!***********************************!*\
  !*** ./src/app/ErrorBoundary.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorBoundary": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ErrorOutline */ "../../node_modules/@mui/icons-material/ErrorOutline.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();






const useStyles = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.styles)((theme)=>{
    return {
        appContainer: {
            background: theme.custom.colors.backgroundBackdrop,
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        }
    };
});
class ErrorBoundaryWithHooks extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    state = {
        err: false
    };
    static getDerivedStateFromError() {
        return {
            err: true
        };
    }
    componentDidCatch(error, info) {
        //TODO: Post to aggregation service
        console.error("Global error caught", error, info);
    }
    render() {
        if (this.state.err) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: this.props.classes.appContainer,
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/ErrorBoundary.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                },
                __self: this
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.EmptyState, {
                icon: (props)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_5__["default"], props),
                title: "There was an error",
                subtitle: "Hang tight while we work to fix it!",
                buttonText: "Go back",
                onClick: async ()=>{
                    await this.props.background.request({
                        method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_NAVIGATION_TO_DEFAULT,
                        params: []
                    });
                    window.location.hash = "#/balances";
                    window.location.reload();
                },
                __source: {
                    fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/ErrorBoundary.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                },
                __self: this
            }));
        }
        return this.props.children;
    }
}
function ErrorBoundary(props) {
    _s();
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient)();
    const classes = useStyles();
    return(//@ts-ignore
    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorBoundaryWithHooks, {
        classes: classes,
        background: background,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/app/ErrorBoundary.tsx",
            lineNumber: 75,
            columnNumber: 5
        },
        __self: this
    }, props.children));
}
_s(ErrorBoundary, "5e3cGLzKn61rWU+B5eeNRJEt0s4=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient,
        useStyles
    ];
});
_c = ErrorBoundary;
var _c;
__webpack_require__.$Refresh$.register(_c, "ErrorBoundary");


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
//# sourceMappingURL=src_app_App_tsx.js.map