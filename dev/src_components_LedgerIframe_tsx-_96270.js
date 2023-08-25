"use strict";
(globalThis["webpackChunk_coral_xyz_app_extension"] = globalThis["webpackChunk_coral_xyz_app_extension"] || []).push([["src_components_LedgerIframe_tsx-_96270"],{

/***/ "./src/components/LedgerIframe.tsx":
/*!*****************************************!*\
  !*** ./src/components/LedgerIframe.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();


const logger = (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.getLogger)("app-extension/ledger-iframe");
/**
 * A hidden iframe that's used to communicate (as a proxy) with a Ledger
 */ const LedgerIframe = ()=>{
    _s();
    const iframe = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let handleMessage;
        navigator.serviceWorker.ready.then(()=>{
            logger.debug("ledger iframe ready");
            //
            // Response: relays message from the injected ledger iframe to the
            //           background script.
            //
            handleMessage = (event)=>{
                if (!(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.isValidEventOrigin)(event)) {
                    logger.error("invalid event origin");
                    return;
                }
                const data = event.data;
                if (data.type !== _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.LEDGER_INJECTED_CHANNEL_RESPONSE) {
                    return;
                }
                logger.debug("handleMessage", data);
                navigator.serviceWorker.controller?.postMessage(data);
            };
            window.addEventListener("message", handleMessage);
            //
            // Request: relays the message from the background script to the
            //          iframe so that it has permissions to communicate with
            //          the ledger.
            navigator.serviceWorker.onmessage = (msg)=>{
                if (!(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.isValidEventOrigin)(msg)) {
                    return;
                }
                const data = msg.data;
                logger.debug("onmessage", data);
                iframe.current?.contentWindow?.postMessage(data, "*");
            };
        }).catch((err)=>logger.error("service worker not ready", err));
        return ()=>{
            // TODO: check if this cleanup is adequate
            navigator.serviceWorker.onmessage = null;
            window.removeEventListener("message", handleMessage);
        };
    }, []);
    logger.debug("rendering hidden iframe for ledger", _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.LEDGER_IFRAME_URL);
    // allow="hid 'src'" is why this component is necessary, because it allows
    // us to communicate with a ledger using the Human Interface Device API.
    return /*#__PURE__*/ React.createElement("iframe", {
        ref: iframe,
        src: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.LEDGER_IFRAME_URL,
        allow: "hid 'src'",
        tabIndex: -1,
        style: {
            display: "none"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/LedgerIframe.tsx",
            lineNumber: 69,
            columnNumber: 5
        },
        __self: undefined
    });
};
_s(LedgerIframe, "GAFleWBZ6O+8Op7dBuDH6PzOglQ=");
_c = LedgerIframe;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LedgerIframe);
var _c;
__webpack_require__.$Refresh$.register(_c, "LedgerIframe");


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
//# sourceMappingURL=src_components_LedgerIframe_tsx-_96270.js.map