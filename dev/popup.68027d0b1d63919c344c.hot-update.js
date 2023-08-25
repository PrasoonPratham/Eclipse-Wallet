"use strict";
globalThis["webpackHotUpdate_coral_xyz_app_extension"]("popup",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../../node_modules/react-dom/client.js");
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");





const App = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_bonfida_name-offers_dist_index_js-node_modules_bonfida_spl-name-service_-f21fe3"), __webpack_require__.e("vendors-node_modules_fontsource_inter_500_css-node_modules_fontsource_inter_600_css-node_modu-880271"), __webpack_require__.e("src_app_App_css-src_components_common_WithTheme_tsx"), __webpack_require__.e("src_app_App_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app/App */ "./src/app/App.tsx")));
_c = App;
const LedgerIframe = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/*! import() */ "src_components_LedgerIframe_tsx-_96271").then(__webpack_require__.bind(__webpack_require__, /*! ./components/LedgerIframe */ "./src/components/LedgerIframe.tsx")));
_c1 = LedgerIframe;
// Tell all existing extension instances that this instance now exists.
// This block ensures a single extension window is open at any given time.
chrome.runtime.sendMessage("new-instance-was-opened").then(()=>{
    // Close all existing extension instances so only the newest is running
    chrome.runtime.onMessage.addListener((msg, sender)=>{
        if ((0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_2__.isValidEventOrigin)(sender) && msg === "new-instance-was-opened") {
            window.close();
        }
    });
}).catch(console.error);
// Connect to the background script so it can detect if the popup is closed
chrome.runtime.connect();
//
// Configure event listeners.
//
document.addEventListener("keydown", async function onKeyDown(event) {
    //
    // Pop open the window.
    //
    if (_coral_xyz_common__WEBPACK_IMPORTED_MODULE_2__.BACKPACK_FEATURE_POP_MODE) {
        if (event.key === "g" && event.ctrlKey) {
            event.preventDefault();
            const currentWindow = await chrome.windows.getCurrent();
            const popupWindow = await (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_2__.openPopupWindow)("popup.html");
            if (currentWindow.id !== popupWindow.id) {
                window.close();
            }
        }
    }
});
// Render the UI.
// TOOD(react) createRoot is required: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const container = document.getElementById("root");
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null,
    __source: {
        fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/index.tsx",
        lineNumber: 56,
        columnNumber: 5
    },
    __self: undefined
}, /*#__PURE__*/ React.createElement(App, {
    __source: {
        fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/index.tsx",
        lineNumber: 57,
        columnNumber: 7
    },
    __self: undefined
})), /*#__PURE__*/ React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null,
    __source: {
        fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/index.tsx",
        lineNumber: 59,
        columnNumber: 5
    },
    __self: undefined
}, /*#__PURE__*/ React.createElement(LedgerIframe, {
    __source: {
        fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/index.tsx",
        lineNumber: 60,
        columnNumber: 7
    },
    __self: undefined
}))));
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "App");
__webpack_require__.$Refresh$.register(_c1, "LedgerIframe");


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

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ec8f12ea66e0219072e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.68027d0b1d63919c344c.hot-update.js.map