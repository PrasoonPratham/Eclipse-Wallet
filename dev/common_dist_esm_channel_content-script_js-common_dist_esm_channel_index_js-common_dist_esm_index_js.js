(globalThis["webpackChunk_coral_xyz_app_extension"] = globalThis["webpackChunk_coral_xyz_app_extension"] || []).push([["common_dist_esm_channel_content-script_js-common_dist_esm_channel_index_js-common_dist_esm_index_js"],{

/***/ "../common/dist/esm/api/friendship.js":
/*!********************************************!*\
  !*** ../common/dist/esm/api/friendship.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchFriendship": () => (/* binding */ fetchFriendship),
/* harmony export */   "markSpam": () => (/* binding */ markSpam),
/* harmony export */   "searchUsersByBlockchain": () => (/* binding */ searchUsersByBlockchain),
/* harmony export */   "sendFriendRequest": () => (/* binding */ sendFriendRequest),
/* harmony export */   "unFriend": () => (/* binding */ unFriend)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


const sendFriendRequest = async ({ sendRequest , to  })=>{
    await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.BACKEND_API_URL}/friends/request`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            to,
            sendRequest
        })
    });
};
const unFriend = async ({ to  })=>{
    await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.BACKEND_API_URL}/friends/unfriend`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            to
        })
    });
};
const fetchFriendship = async ({ userId  })=>{
    const res = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.BACKEND_API_URL}/inbox`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            to: userId
        })
    });
    const json = await res.json();
    return json;
};
const markSpam = async ({ remoteUserId , spam  })=>{
    return fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.BACKEND_API_URL}/friends/spam`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            to: remoteUserId,
            spam
        })
    });
};
const searchUsersByBlockchain = async ({ blockchain , address  })=>{
    // TODO(types)
    try {
        const params = [
            `usernamePrefix=${address}`,
            `blockchain=${blockchain}`,
            `limit=6`
        ].join("&");
        const users = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.BACKEND_API_URL}/users?${params}`).then((r)=>r.json());
        return (users !== null && users !== void 0 ? users : []).sort((a, b)=>a.username.length < b.username.length ? -1 : 1);
    } catch (e) {
        console.error(e);
        return [];
    }
}; //# sourceMappingURL=friendship.js.map


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

/***/ "../common/dist/esm/api/index.js":
/*!***************************************!*\
  !*** ../common/dist/esm/api/index.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchFriendship": () => (/* reexport safe */ _friendship__WEBPACK_IMPORTED_MODULE_0__.fetchFriendship),
/* harmony export */   "markSpam": () => (/* reexport safe */ _friendship__WEBPACK_IMPORTED_MODULE_0__.markSpam),
/* harmony export */   "searchUsersByBlockchain": () => (/* reexport safe */ _friendship__WEBPACK_IMPORTED_MODULE_0__.searchUsersByBlockchain),
/* harmony export */   "sendFriendRequest": () => (/* reexport safe */ _friendship__WEBPACK_IMPORTED_MODULE_0__.sendFriendRequest),
/* harmony export */   "unFriend": () => (/* reexport safe */ _friendship__WEBPACK_IMPORTED_MODULE_0__.unFriend)
/* harmony export */ });
/* harmony import */ var _friendship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friendship */ "../common/dist/esm/api/friendship.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

 //# sourceMappingURL=index.js.map


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

/***/ "../common/dist/esm/apollo/index.js":
/*!******************************************!*\
  !*** ../common/dist/esm/apollo/index.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApolloClient": () => (/* binding */ createApolloClient)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "../../node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "../../node_modules/@apollo/client/link/http/createHttpLink.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "../../node_modules/@apollo/client/core/ApolloClient.js");
/* harmony import */ var apollo3_cache_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo3-cache-persist */ "../../node_modules/apollo3-cache-persist/lib/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");




const cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache();
const httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.createHttpLink)({
    uri: `${_constants__WEBPACK_IMPORTED_MODULE_1__.BACKEND_API_URL}/v2/graphql`
});
/**
 * Synchronously persist any cache wrapper and return a configured Apollo client instance.
 * @export
 * @returns {ApolloClient<NormalizedCacheObject>}
 */ function createApolloClient() {
    (0,apollo3_cache_persist__WEBPACK_IMPORTED_MODULE_0__.persistCacheSync)({
        cache,
        storage: new apollo3_cache_persist__WEBPACK_IMPORTED_MODULE_0__.LocalStorageWrapper(window.localStorage)
    });
    return new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloClient({
        cache,
        link: httpLink
    });
} //# sourceMappingURL=index.js.map


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

/***/ "../common/dist/esm/browser/common.js":
/*!********************************************!*\
  !*** ../common/dist/esm/browser/common.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRuntimeCommon": () => (/* binding */ BrowserRuntimeCommon)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

//
// Browser apis that can be used in a mobile web view as well as the extension.
//
class BrowserRuntimeCommon {
    static sendMessageToBackground(msg, cb) {
        return BrowserRuntimeCommon.sendMessageToAnywhere(msg, cb);
    }
    static sendMessageToAppUi(msg, cb) {
        return BrowserRuntimeCommon.sendMessageToAnywhere(msg, cb);
    }
    static sendMessageToAnywhere(msg, cb) {
        chrome.runtime.sendMessage(msg, cb);
    }
    static addEventListenerFromBackground(listener) {
        return BrowserRuntimeCommon.addEventListenerFromAnywhere(listener);
    }
    static addEventListenerFromAppUi(listener) {
        return BrowserRuntimeCommon.addEventListenerFromAnywhere(listener);
    }
    static addEventListenerFromAnywhere(listener) {
        return chrome.runtime.onMessage.addListener(listener);
    }
    static async getLocalStorage(key) {
        return new Promise((resolve, reject)=>{
            return chrome === null || chrome === void 0 ? void 0 : chrome.storage.local.get(key, (result)=>{
                const err = BrowserRuntimeCommon.checkForError();
                if (err) {
                    reject(err);
                } else {
                    resolve(result[key]);
                }
            });
        });
    }
    static async setLocalStorage(key, value) {
        return new Promise((resolve, reject)=>{
            const obj = {};
            obj[key] = value;
            chrome === null || chrome === void 0 ? void 0 : chrome.storage.local.set(obj, ()=>{
                const err = BrowserRuntimeCommon.checkForError();
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
    static async clearLocalStorage() {
        return new Promise((resolve, reject)=>{
            chrome === null || chrome === void 0 ? void 0 : chrome.storage.local.clear(()=>{
                const err = BrowserRuntimeCommon.checkForError();
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
    static checkForError() {
        const { lastError  } = chrome.runtime;
        return lastError ? new Error(lastError.message) : undefined;
    }
} //# sourceMappingURL=common.js.map


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

/***/ "../common/dist/esm/browser/extension.js":
/*!***********************************************!*\
  !*** ../common/dist/esm/browser/extension.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRuntimeExtension": () => (/* binding */ BrowserRuntimeExtension),
/* harmony export */   "openAddUserAccount": () => (/* binding */ openAddUserAccount),
/* harmony export */   "openApprovalPopupWindow": () => (/* binding */ openApprovalPopupWindow),
/* harmony export */   "openApproveAllTransactionsPopupWindow": () => (/* binding */ openApproveAllTransactionsPopupWindow),
/* harmony export */   "openApproveMessagePopupWindow": () => (/* binding */ openApproveMessagePopupWindow),
/* harmony export */   "openApproveTransactionPopupWindow": () => (/* binding */ openApproveTransactionPopupWindow),
/* harmony export */   "openConnectHardware": () => (/* binding */ openConnectHardware),
/* harmony export */   "openLockedApprovalPopupWindow": () => (/* binding */ openLockedApprovalPopupWindow),
/* harmony export */   "openLockedPopupWindow": () => (/* binding */ openLockedPopupWindow),
/* harmony export */   "openOnboarding": () => (/* binding */ openOnboarding),
/* harmony export */   "openPopupWindow": () => (/* binding */ openPopupWindow),
/* harmony export */   "resizeExtensionWindow": () => (/* binding */ resizeExtensionWindow)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../common/dist/esm/browser/common.js");
/* harmony import */ var _uiActionRequestManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiActionRequestManager */ "../common/dist/esm/browser/uiActionRequestManager.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");




//
// Browser apis that can be used on extension only.
//
class BrowserRuntimeExtension {
    static getUrl(scriptName) {
        return chrome.runtime.getURL(scriptName);
    }
    static sendMessageActiveTab(msg) {
        return chrome.tabs.query({
            active: true,
            currentWindow: true
        }, ([tab])=>{
            if (tab === null || tab === void 0 ? void 0 : tab.id) chrome.tabs.sendMessage(tab.id, msg);
        });
    }
    static sendMessageTab(tabId, msg) {
        chrome.tabs.sendMessage(tabId, msg);
    }
    static async openTab(options) {
        return new Promise((resolve, reject)=>{
            chrome === null || chrome === void 0 ? void 0 : chrome.tabs.create(options, (newWindow)=>{
                const error = _common__WEBPACK_IMPORTED_MODULE_1__.BrowserRuntimeCommon.checkForError();
                if (error) {
                    return reject(error);
                }
                return resolve(newWindow);
            });
        });
    }
    static async _openWindow(options) {
        //
        // Whenever a new window is opened, we reject all outstanding ui action
        // requests--e.g., for tx signing--as a way to deal with stale state so
        // that those promises can properly resolve with the right state,
        // i.e. user denied the request.
        //
        await _uiActionRequestManager__WEBPACK_IMPORTED_MODULE_2__.UiActionRequestManager.cancelAllRequests();
        const newPopupWindow = await (chrome === null || chrome === void 0 ? void 0 : chrome.windows.create(options));
        return newPopupWindow;
    }
    static async getLastFocusedWindow() {
        return new Promise((resolve)=>{
            chrome.windows.getLastFocused(resolve);
        });
    }
    static activeTab() {
        return new Promise((resolve)=>{
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, ([tab])=>{
                resolve(tab);
            });
        });
    }
    static closeActiveTab() {
        chrome.tabs.getCurrent((tab)=>{
            if (tab === null || tab === void 0 ? void 0 : tab.id) chrome.tabs.remove(tab.id, function() {});
        });
    }
    static closeWindow(id) {
        chrome.windows.remove(id);
    }
}
////////////////////////////////////////////////////////////////////////////////
// Open window APIs.
////////////////////////////////////////////////////////////////////////////////
const POPUP_HTML = "popup.html";
const EXPANDED_HTML = "options.html";
async function openLockedPopupWindow(origin, title, requestId, blockchain) {
    const encodedTitle = encodeURIComponent(title);
    const url = `${POPUP_HTML}?${_constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_LOCKED}&origin=${origin}&title=${encodedTitle}&requestId=${requestId}&blockchain=${blockchain}`;
    return openPopupWindow(url);
}
function openLockedApprovalPopupWindow(origin, title, requestId, blockchain) {
    const encodedTitle = encodeURIComponent(title);
    const url = `${POPUP_HTML}?${_constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_LOCKED_APPROVAL}&origin=${origin}&title=${encodedTitle}&requestId=${requestId}&blockchain=${blockchain}`;
    return openPopupWindow(url);
}
async function openApprovalPopupWindow(origin, title, requestId, blockchain) {
    const encodedTitle = encodeURIComponent(title);
    const url = `${POPUP_HTML}?${_constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_APPROVAL}&origin=${origin}&title=${encodedTitle}&requestId=${requestId}&blockchain=${blockchain}`;
    return openPopupWindow(url);
}
async function openApproveTransactionPopupWindow(origin, title, requestId, tx, walletAddress, blockchain) {
    const encodedTitle = encodeURIComponent(title);
    const url = `${POPUP_HTML}?${_constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_APPROVE_TRANSACTION}&origin=${origin}&title=${encodedTitle}&requestId=${requestId}&tx=${tx}&wallet=${walletAddress}&blockchain=${blockchain}`;
    return await openPopupWindow(url);
}
async function openApproveAllTransactionsPopupWindow(origin, title, requestId, txs, walletAddress, blockchain) {
    const encodedTitle = encodeURIComponent(title);
    const txsStr = encodeURIComponent(JSON.stringify(txs));
    const url = `${POPUP_HTML}?${_constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_APPROVE_ALL_TRANSACTIONS}&origin=${origin}&title=${encodedTitle}&requestId=${requestId}&txs=${txsStr}&wallet=${walletAddress}&blockchain=${blockchain}`;
    return await openPopupWindow(url);
}
async function openApproveMessagePopupWindow(origin, title, requestId, message, walletAddress, blockchain) {
    const encodedTitle = encodeURIComponent(title);
    const url = `${POPUP_HTML}?${_constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_APPROVE_MESSAGE}&origin=${origin}&title=${encodedTitle}&requestId=${requestId}&message=${message}&wallet=${walletAddress}&blockchain=${blockchain}`;
    return await openPopupWindow(url);
}
async function openPopupWindow(url, options) {
    var _a, _b, _c, _d;
    const lastWindow = await BrowserRuntimeExtension.getLastFocusedWindow();
    const fullscreen = options === null || options === void 0 ? void 0 : options.fullscreen;
    let width = isNaN((_a = options === null || options === void 0 ? void 0 : options.width) !== null && _a !== void 0 ? _a : NaN) ? _constants__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_WIDTH : options.width;
    let height = isNaN((_b = options === null || options === void 0 ? void 0 : options.height) !== null && _b !== void 0 ? _b : NaN) ? _constants__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_HEIGHT : options.height;
    if (fullscreen) {
        height = screen.availHeight;
        width = screen.availWidth;
    }
    const [EXTRA_HEIGHT, EXTRA_WIDTH] = navigator.userAgentData.platform === "Windows" ? [
        36,
        12
    ] : [
        28,
        0
    ];
    const popupWindow = await BrowserRuntimeExtension._openWindow({
        url: `${url}`,
        type: "popup",
        width: width + EXTRA_WIDTH,
        height: height + EXTRA_HEIGHT,
        top: fullscreen ? 0 : lastWindow.top,
        left: fullscreen ? 0 : ((_c = lastWindow.left) !== null && _c !== void 0 ? _c : 0) + (((_d = lastWindow.width) !== null && _d !== void 0 ? _d : 0) - width - EXTRA_WIDTH),
        focused: true
    });
    return popupWindow;
}
function resizeExtensionWindow(options) {
    var _a, _b;
    const extensionWindows = chrome.extension.getViews();
    if (!extensionWindows || extensionWindows.length == 0) {
        return undefined;
    }
    const extensionWindow = extensionWindows[0];
    let width = isNaN((_a = options === null || options === void 0 ? void 0 : options.width) !== null && _a !== void 0 ? _a : NaN) ? _constants__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_WIDTH : options.width;
    let height = isNaN((_b = options === null || options === void 0 ? void 0 : options.height) !== null && _b !== void 0 ? _b : NaN) ? _constants__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_HEIGHT : options.height;
    //Please note that there is a maximum size of 800x600
    //https://developer.chrome.com/docs/extensions/reference/browserAction/#popup
    //If bigger than that, scrollbars will appear
    extensionWindow.document.documentElement.style.width = `${width}px`;
    extensionWindow.document.documentElement.style.height = `${height}px`;
    extensionWindow.document.documentElement.style.minHeight = 'unset';
    extensionWindow.document.documentElement.style.minWidth = 'unset';
    extensionWindow.document.body.style.width = `${width}px`;
    extensionWindow.document.body.style.height = `${height}px`;
    extensionWindow.document.body.style.minHeight = 'unset';
    extensionWindow.document.body.style.minWidth = 'unset';
    //this is an element created by backpack,
    //whose minHeight value is preventing the set height to work
    const rootElement = extensionWindow.document.getElementById('root');
    if (rootElement) {
        rootElement.style.minHeight = 'unset';
        rootElement.style.minWidth = 'unset';
    }
    //Do it also on the window in case we are popped out
    extensionWindow.resizeTo(width, height);
    //Use a timeout to set this listener to avoid a race condition with the first time it opens
    setTimeout(()=>{
        extensionWindow.addEventListener('resize', (event)=>{
            //If it gets resized to something other than what we set, means that we are in a popup.
            //Remove the previously set values and the listener.
            extensionWindow.document.documentElement.style.width = 'unset';
            extensionWindow.document.documentElement.style.height = 'unset';
            extensionWindow.document.body.style.width = 'unset';
            extensionWindow.document.body.style.height = 'unset';
            extensionWindow.removeEventListener('resize', this);
        });
    }, 1000);
    return extensionWindow;
}
function openOnboarding() {
    const url = `${EXPANDED_HTML}?${_constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_ONBOARDING}`;
    BrowserRuntimeExtension.openTab({
        url: chrome.runtime.getURL(url)
    });
}
function openAddUserAccount() {
    const url = `${EXPANDED_HTML}?${_constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_ADD_USER_ACCOUNT}`;
    BrowserRuntimeExtension.openTab({
        url: chrome.runtime.getURL(url)
    });
}
function openConnectHardware(blockchain, action, publicKey) {
    const url = `${EXPANDED_HTML}?${_constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_CONNECT_HARDWARE}&blockchain=${blockchain}&action=${action}${publicKey ? "&publicKey=" + publicKey : ""}`;
    BrowserRuntimeExtension.openTab({
        url: chrome.runtime.getURL(url)
    });
} //# sourceMappingURL=extension.js.map


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

/***/ "../common/dist/esm/browser/index.js":
/*!*******************************************!*\
  !*** ../common/dist/esm/browser/index.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRuntimeCommon": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.BrowserRuntimeCommon),
/* harmony export */   "BrowserRuntimeExtension": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.BrowserRuntimeExtension),
/* harmony export */   "UiActionRequestManager": () => (/* reexport safe */ _uiActionRequestManager__WEBPACK_IMPORTED_MODULE_3__.UiActionRequestManager),
/* harmony export */   "WEB_VIEW_EVENTS": () => (/* reexport safe */ _mobile__WEBPACK_IMPORTED_MODULE_0__.WEB_VIEW_EVENTS),
/* harmony export */   "openAddUserAccount": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openAddUserAccount),
/* harmony export */   "openApprovalPopupWindow": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openApprovalPopupWindow),
/* harmony export */   "openApproveAllTransactionsPopupWindow": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openApproveAllTransactionsPopupWindow),
/* harmony export */   "openApproveMessagePopupWindow": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openApproveMessagePopupWindow),
/* harmony export */   "openApproveTransactionPopupWindow": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openApproveTransactionPopupWindow),
/* harmony export */   "openConnectHardware": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openConnectHardware),
/* harmony export */   "openLockedApprovalPopupWindow": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openLockedApprovalPopupWindow),
/* harmony export */   "openLockedPopupWindow": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openLockedPopupWindow),
/* harmony export */   "openOnboarding": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openOnboarding),
/* harmony export */   "openPopupWindow": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.openPopupWindow),
/* harmony export */   "resizeExtensionWindow": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_2__.resizeExtensionWindow),
/* harmony export */   "startMobileIfNeeded": () => (/* reexport safe */ _mobile__WEBPACK_IMPORTED_MODULE_0__.startMobileIfNeeded)
/* harmony export */ });
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile */ "../common/dist/esm/browser/mobile.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../common/dist/esm/browser/common.js");
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extension */ "../common/dist/esm/browser/extension.js");
/* harmony import */ var _uiActionRequestManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiActionRequestManager */ "../common/dist/esm/browser/uiActionRequestManager.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");






(0,_mobile__WEBPACK_IMPORTED_MODULE_0__.startMobileIfNeeded)(); //# sourceMappingURL=index.js.map


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

/***/ "../common/dist/esm/browser/mobile.js":
/*!********************************************!*\
  !*** ../common/dist/esm/browser/mobile.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WEB_VIEW_EVENTS": () => (/* binding */ WEB_VIEW_EVENTS),
/* harmony export */   "startMobileIfNeeded": () => (/* binding */ startMobileIfNeeded)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "../../node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_expo_secure_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fake-expo-secure-store */ "../common/dist/esm/fake-expo-secure-store.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logging */ "../common/dist/esm/logging.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "../common/dist/esm/utils.js");
/* harmony import */ var _zustand_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zustand-store */ "../common/dist/esm/zustand-store.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "../common/dist/esm/browser/common.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


// use expo-secure-store if in react-native, otherwise fake-expo-secure-store.ts






const logger = (0,_logging__WEBPACK_IMPORTED_MODULE_3__.getLogger)("common/mobile");
/**
 * Event emitter for *all* events on the web view component.
 */ const WEB_VIEW_EVENTS = new (eventemitter3__WEBPACK_IMPORTED_MODULE_0___default())();
/**
 * Holds all closure callbacks to fire when events happen.
 */ const EVENT_LISTENERS = [];
/**
 * Start the mobile WebView messaging subsystem.
 *
 * Here, we patch the BrowserRuntimeCommon api so that it works on mobile,
 * passing all messages through an intermediate webview before it hits the
 * background service worker.
 */ function startMobileIfNeeded() {
    if (!_utils__WEBPACK_IMPORTED_MODULE_4__.IS_MOBILE) {
        return;
    }
    //////////////////////////////////////////////////////////////////////////////
    //
    // Handle all events here. We have a single entrypoint for both the
    // service worker and the app ui code, respectively, which then dispatches
    // to all the listener handlers.
    //
    //////////////////////////////////////////////////////////////////////////////
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isServiceWorker)()) {
        self.addEventListener("message", (event)=>{
            logger.debug("service-worker-event: ", JSON.stringify(event.data));
            EVENT_LISTENERS.forEach((handler)=>handler(event.data));
        });
    } else {
        WEB_VIEW_EVENTS.on("message", (event)=>{
            logger._log("web-view-event:", JSON.stringify(event));
            EVENT_LISTENERS.forEach((handler)=>handler(event));
        });
    }
    //////////////////////////////////////////////////////////////////////////////
    //
    // Monkey patch the BrowserRuntimeCommon apis for mobile.
    //
    //////////////////////////////////////////////////////////////////////////////
    // the actual app -> service worker
    // on the client this is powered by chrome.runtime.sendMessage, so we try to recreate that here
    // See FrontendRequestManager.request
    _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.sendMessageToBackground = (msg, cb)=>{
        return FrontendRequestManager.request(msg).then(cb).catch((error)=>{
            cb({
                error
            });
        });
    };
    // from the service worker -> app
    // on the client this is powered by chrome.runtime.sendMessage, so we try to recreate that here
    // See BackendRequestManager.request
    _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.sendMessageToAppUi = (msg, cb)=>{
        return BackendRequestManager.request(msg).then(cb).catch((error)=>{
            cb({
                error
            });
        });
    };
    _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.addEventListenerFromBackground = (cb)=>{
        const handler = (event)=>{
            if (event && event.data && event.data.wrappedEvent) {
                cb(event.data.wrappedEvent, {}, (result)=>{
                    postMsgFromWorker({
                        channel: _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_FE_RESPONSE,
                        data: {
                            wrappedEvent: {
                                channel: _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_FE_RESPONSE_INNER,
                                data: result
                            }
                        }
                    });
                });
            }
        };
        EVENT_LISTENERS.push(handler);
        return handler;
    };
    _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.addEventListenerFromAppUi = (cb)=>{
        const handler = (event)=>{
            if (event && event.data && event.data.wrappedEvent) {
                cb(event.data.wrappedEvent, {}, (result)=>{
                    postMsgFromAppUi({
                        channel: _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_BG_RESPONSE,
                        data: {
                            wrappedEvent: {
                                channel: _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_BG_RESPONSE_INNER,
                                data: result
                            }
                        }
                    });
                });
            }
        };
        EVENT_LISTENERS.push(handler);
        return handler;
    };
    _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.sendMessageToAnywhere = (_msg, _cb)=>{
        throw new Error("sendMessageToAnywhere not implemented on mobile");
    };
    _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.addEventListenerFromAnywhere = (_cb)=>{
        throw new Error("addEventListenerFromAnywhere not implemented on mobile");
    };
    //
    // Assumes this is only called from the background service worker.
    //
    _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.getLocalStorage = async (key)=>{
        const { id , result , error  } = await BackendRequestManager.request({
            channel: _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_HOST_RPC_REQUEST,
            data: {
                id: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.generateUniqueId)(),
                method: "getLocalStorage",
                params: [
                    key
                ]
            }
        });
        return result;
    };
    //
    // Assumes this is only called from the background service worker.
    //
    _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.setLocalStorage = async (key, value)=>{
        const { id , result , error  } = await BackendRequestManager.request({
            channel: _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_HOST_RPC_REQUEST,
            data: {
                id: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.generateUniqueId)(),
                method: "setLocalStorage",
                params: [
                    key,
                    value
                ]
            }
        });
    };
    _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.checkForError = ()=>{
        return undefined;
    };
    //////////////////////////////////////////////////////////////////////////////
    //
    // Wrapped response channels.
    //
    //////////////////////////////////////////////////////////////////////////////
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isServiceWorker)()) {
        _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.addEventListenerFromBackground((msg, _sender, sendResponse)=>{
            if (msg.channel !== _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_BG_RESPONSE_INNER) {
                return;
            }
            BackendRequestManager.response(msg);
        });
    } else {
        _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.addEventListenerFromAppUi((msg, _sender, sendResponse)=>{
            if (msg.channel !== _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_FE_RESPONSE_INNER) {
                return;
            }
            FrontendRequestManager.response(msg);
        });
    }
    //////////////////////////////////////////////////////////////////////////////
    //
    // RPC "server" APIs.
    //
    // These APIs run in the context of the frontend react-native app code and
    // give the service worker access to resources provided by the host mobile
    // app.
    //
    //////////////////////////////////////////////////////////////////////////////
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__.isServiceWorker)()) {
        _common__WEBPACK_IMPORTED_MODULE_6__.BrowserRuntimeCommon.addEventListenerFromAppUi(async (msg, _sender, sendResponse)=>{
            if (msg.channel !== _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_HOST_RPC_REQUEST) {
                return;
            }
            const [result, error] = await handleHostRpcRequest(msg);
            sendResponse({
                id: msg.data.id,
                result,
                error
            });
        });
    }
    const handleHostRpcRequest = async ({ data  })=>{
        const { id , method , params  } = data;
        switch(method){
            case "getLocalStorage":
                return await handleGetLocalStorage(params[0]);
            case "setLocalStorage":
                return await handleSetLocalStorage(params[0], params[1]);
            default:
                return [];
        }
    };
    // Expo's mobile SecureStore has specific requirements for the way the key is stored:
    // Keys may contain alphanumeric characters ., -, and _.
    // Read more here: https://docs.expo.dev/versions/latest/sdk/securestore/
    // const parseKeyForMobile = (str: string): string =>
    //   str.replace(/[^a-zA-Z0-9._-]/g, "_").toString();
    // like localStorage, expo-secure-store can only save and return strings,
    // so we must JSON.parse and JSON.stringify values when needed
    // https://docs.expo.dev/versions/latest/sdk/securestore
    const handleGetLocalStorage = async (key)=>{
        // const stores = [
        //   "keyring-store",
        //   "keyname-store",
        //   "wallet-data",
        //   "nav-store7",
        // ];
        // for (const store of stores) {
        //   try {
        //     await deleteItemAsync(store);
        //   } catch (err) {
        //     // ignore
        //   }
        // }
        return [
            JSON.parse(String(await (0,_fake_expo_secure_store__WEBPACK_IMPORTED_MODULE_1__.getItemAsync)(key))),
            undefined
        ];
    };
    const handleSetLocalStorage = async (key, value)=>{
        await (0,_fake_expo_secure_store__WEBPACK_IMPORTED_MODULE_1__.setItemAsync)(key, JSON.stringify(value));
        return [
            "success",
            undefined
        ];
    };
}
class CommonRequestManager {
    /**
     * Resolves a given response associated with a request.
     */ static response(msg) {
        const { channel: _ , data: { id , result , error  }  } = msg;
        const resolver = CommonRequestManager._resolvers[id];
        if (resolver === undefined) {
            logger.debug("isServiceWorker", (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isServiceWorker)().toString());
            logger.error("unable to find resolver for data", {
                id,
                result,
                error
            });
            return;
        }
        delete CommonRequestManager._resolvers[id];
        if (error) {
            resolver.reject(error);
        }
        resolver.resolve({
            id,
            result,
            error
        });
    }
}
CommonRequestManager._resolvers = {};
class FrontendRequestManager extends CommonRequestManager {
    static request(msg) {
        return new Promise((resolve, reject)=>{
            CommonRequestManager._resolvers[msg.data.id] = {
                resolve,
                reject
            };
            postMsgFromAppUi({
                channel: _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_FE_REQUEST,
                data: {
                    wrappedEvent: msg
                }
            });
        });
    }
}
class BackendRequestManager extends CommonRequestManager {
    static request(msg) {
        return new Promise((resolve, reject)=>{
            CommonRequestManager._resolvers[msg.data.id] = {
                resolve,
                reject
            };
            postMsgFromWorker({
                channel: _constants__WEBPACK_IMPORTED_MODULE_2__.MOBILE_CHANNEL_BG_REQUEST,
                data: {
                    wrappedEvent: msg
                }
            });
        });
    }
}
async function postMsgFromWorker(msg) {
    // @ts-ignore
    const clients = await self.clients.matchAll({
        includeUncontrolled: true,
        type: "window"
    });
    clients.forEach((client)=>{
        client.postMessage(msg);
    });
}
async function postMsgFromAppUi(msg) {
    var _a, _b;
    (_b = (_a = _zustand_store__WEBPACK_IMPORTED_MODULE_5__.useStore.getState()) === null || _a === void 0 ? void 0 : _a.injectJavaScript) === null || _b === void 0 ? void 0 : _b.call(_a, `window.postMessageToBackgroundViaWebview(${JSON.stringify(msg)}); true;`);
} //# sourceMappingURL=mobile.js.map


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

/***/ "../common/dist/esm/browser/uiActionRequestManager.js":
/*!************************************************************!*\
  !*** ../common/dist/esm/browser/uiActionRequestManager.js ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiActionRequestManager": () => (/* binding */ UiActionRequestManager)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/dist/esm-browser/v1.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


class UiActionRequestManager {
    // Initiate a request. The given popupFn should relay the given requestmanagerId to
    // the UI, which will send it back with a response.
    //
    // Note that there are two ways we can receive a response.
    //
    // 1) The user can explicit perform a UI action via our components.
    // 2) The user can close the window.
    //
    static requestUiAction(popupFn) {
        return new Promise(async (resolve, reject)=>{
            const requestId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
            const window = await popupFn(requestId);
            UiActionRequestManager.addResponseResolver(window, requestId, resolve, reject);
        });
    }
    // Resolve a response initiated via `requestUiAction`.
    static resolveResponse(id, result, error) {
        const resolver = UiActionRequestManager._responseResolvers[id];
        if (!resolver) {
            throw new Error(`unable to find response resolver for: ${id}`);
        }
        const [resolve, _reject] = resolver;
        UiActionRequestManager.removeResponseResolver(id);
        resolve({
            id,
            result,
            error,
            windowClosed: undefined
        });
    }
    static async cancelAllRequests() {
        // Copy the array to aviod mutating it during iteration.
        const routines = [
            ...UiActionRequestManager._routines
        ];
        routines.forEach(({ cancelRoutine  })=>{
            cancelRoutine();
        });
    }
    static addResponseResolver(window, requestId, resolve, reject) {
        UiActionRequestManager._responseResolvers[requestId] = [
            (input)=>resolve({
                    ...input,
                    window
                }),
            reject
        ];
        const cancelRoutine = ()=>{
            UiActionRequestManager.removeResponseResolver(requestId);
            resolve({
                // @ts-ignore
                id: requestId,
                result: undefined,
                error: undefined,
                // Treat a cancel the same as a closed window, i.e., an effective
                // rejection.
                windowClosed: true,
                window
            });
        };
        const windowRemovedRoutine = (windowId)=>{
            if (windowId === window.id) {
                UiActionRequestManager.removeResponseResolver(requestId);
                resolve({
                    // @ts-ignore
                    id: requestId,
                    result: undefined,
                    error: undefined,
                    windowClosed: true,
                    window
                });
            }
        };
        chrome.windows.onRemoved.addListener(windowRemovedRoutine);
        UiActionRequestManager._routines.push({
            requestId,
            cancelRoutine,
            windowRemovedRoutine
        });
        return requestId;
    }
    static removeResponseResolver(requestId) {
        const routine = this._routines.find((r)=>r.requestId === requestId);
        if (!routine) {
            throw new Error("invariant violation: routine not found");
        }
        delete UiActionRequestManager._responseResolvers[requestId];
        chrome.windows.onRemoved.removeListener(routine === null || routine === void 0 ? void 0 : routine.windowRemovedRoutine);
        UiActionRequestManager._routines = UiActionRequestManager._routines.filter((r)=>r.requestId !== requestId);
    }
}
UiActionRequestManager._requestId = 0;
UiActionRequestManager._responseResolvers = {};
UiActionRequestManager._routines = []; //# sourceMappingURL=uiActionRequestManager.js.map


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

/***/ "../common/dist/esm/channel/app-ui.js":
/*!********************************************!*\
  !*** ../common/dist/esm/channel/app-ui.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelAppUi": () => (/* binding */ ChannelAppUi),
/* harmony export */   "ChannelAppUiClient": () => (/* binding */ ChannelAppUiClient),
/* harmony export */   "ChannelAppUiNotifications": () => (/* binding */ ChannelAppUiNotifications),
/* harmony export */   "ChannelAppUiResponder": () => (/* binding */ ChannelAppUiResponder),
/* harmony export */   "ChannelAppUiServer": () => (/* binding */ ChannelAppUiServer)
/* harmony export */ });
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser */ "../common/dist/esm/browser/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../common/dist/esm/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

//
// Communication channels for the main application UI (extension or mobile) and
// the background script.
//


class ChannelAppUi {
    static client(name) {
        return new ChannelAppUiClient(name);
    }
    static responder(name) {
        return new ChannelAppUiResponder(name);
    }
    static server(name) {
        return new ChannelAppUiServer(name);
    }
    static notifications(name) {
        return new ChannelAppUiNotifications(name);
    }
}
class ChannelAppUiServer {
    constructor(name){
        this.name = name;
    }
    handler(handlerFn) {
        _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeCommon.addEventListenerFromBackground((msg, sender, sendResponse)=>{
            var _a;
            if (msg.channel !== this.name) {
                return;
            }
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
                //
                // Message must come from the extension UI -> service worker.
                //
                if (chrome && ((_a = chrome === null || chrome === void 0 ? void 0 : chrome.runtime) === null || _a === void 0 ? void 0 : _a.id)) {
                    if (sender.id !== chrome.runtime.id) {
                        return;
                    }
                }
            }
            const id = msg.data.id;
            handlerFn(msg.data, sender).then((resp)=>{
                const [result, error] = resp;
                sendResponse({
                    id,
                    result,
                    error
                });
            }).catch((err)=>{
                sendResponse({
                    id,
                    error: err.toString()
                });
            });
            return true;
        });
    }
}
class ChannelAppUiNotifications {
    constructor(name){
        this.name = name;
    }
    onNotification(handlerFn) {
        _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeCommon.addEventListenerFromAppUi((msg, sender, sendResponse)=>{
            var _a;
            if (msg.channel !== this.name) {
                return;
            }
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
                //
                // Message must come from the extension UI -> service worker.
                //
                if (chrome && ((_a = chrome === null || chrome === void 0 ? void 0 : chrome.runtime) === null || _a === void 0 ? void 0 : _a.id)) {
                    if (sender.id !== chrome.runtime.id) {
                        return;
                    }
                }
            }
            handlerFn(msg.data);
            sendResponse({
                result: "success"
            });
        });
    }
    pushNotification(notif) {
        _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeCommon.sendMessageToAppUi({
            channel: this.name,
            data: notif
        });
    }
}
class ChannelAppUiClient {
    constructor(name){
        this.name = name;
    }
    async request({ method , params  }) {
        const id = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.generateUniqueId)();
        return new Promise((resolve, reject)=>{
            _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeCommon.sendMessageToBackground({
                channel: this.name,
                data: {
                    id,
                    method,
                    params
                }
            }, ({ result , error  })=>{
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            });
        });
    }
}
// Must be used from the frontend app code.
class ChannelAppUiResponder {
    constructor(name){
        this.name = name;
    }
    async response({ id , result  }) {
        return new Promise((resolve)=>{
            _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeCommon.sendMessageToBackground({
                channel: this.name,
                data: {
                    id,
                    result
                }
            }, (response)=>{
                resolve(response);
            });
        });
    }
} //# sourceMappingURL=app-ui.js.map


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

/***/ "../common/dist/esm/channel/content-script.js":
/*!****************************************************!*\
  !*** ../common/dist/esm/channel/content-script.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelClient": () => (/* binding */ ChannelClient),
/* harmony export */   "ChannelContentScript": () => (/* binding */ ChannelContentScript),
/* harmony export */   "ChannelServer": () => (/* binding */ ChannelServer)
/* harmony export */ });
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser */ "../common/dist/esm/browser/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../common/dist/esm/utils.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "../common/dist/esm/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

//
// Communication channels for the injected provider (content-script) and
// the background script.
//




// Channel is a class that establishes communication channel from a
// content/injected script to a background script.
class ChannelContentScript {
    // Forwards all messages from the client to the background script.
    static proxy(reqChannel, respChannel) {
        window.addEventListener("message", (event)=>{
            if (!(0,___WEBPACK_IMPORTED_MODULE_3__.isValidEventOrigin)(event)) {
                return;
            }
            if (event.data.type !== reqChannel) return;
            // @ts-ignore
            _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeCommon.sendMessageToAnywhere({
                channel: reqChannel,
                data: event.data.detail
            }, (response)=>{
                if (!response) {
                    return;
                }
                window.postMessage({
                    type: respChannel,
                    detail: response
                }, _constants__WEBPACK_IMPORTED_MODULE_1__.POST_MESSAGE_ORIGIN);
            });
        });
    }
    // Forwards all messages from the background script to the client.
    static proxyReverse(reqChannel) {
        _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeCommon.addEventListenerFromAnywhere((message, sender, sendResponse)=>{
            var _a;
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)()) {
                //
                // Message must come from this extension's context.
                //
                if (chrome && ((_a = chrome === null || chrome === void 0 ? void 0 : chrome.runtime) === null || _a === void 0 ? void 0 : _a.id)) {
                    if (sender.id !== chrome.runtime.id) {
                        return;
                    }
                }
            }
            if (message.channel === reqChannel) {
                sendResponse({
                    result: "success"
                });
                window.postMessage({
                    type: reqChannel,
                    detail: message.data
                }, _constants__WEBPACK_IMPORTED_MODULE_1__.POST_MESSAGE_ORIGIN);
            }
        });
    }
    static client(name) {
        return new ChannelClient(name);
    }
    static server(name) {
        return new ChannelServer(name);
    }
}
class ChannelClient {
    constructor(name){
        this.name = name;
    }
    // Sends a message to the active tab, ignoring any response.
    sendMessageActiveTab(data) {
        const event = {
            channel: this.name,
            data
        };
        _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeExtension.sendMessageActiveTab(event);
    }
    sendMessageTab(tabId, data) {
        const event = {
            channel: this.name,
            data
        };
        _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeExtension.sendMessageTab(tabId, event);
    }
}
class ChannelServer {
    constructor(name){
        this.name = name;
    }
    handler(handlerFn) {
        _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserRuntimeCommon.addEventListenerFromAnywhere(// @ts-ignore
        (msg, sender, sendResponse)=>{
            var _a;
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)()) {
                //
                // Message must come from this extension's context.
                //
                if (chrome && ((_a = chrome === null || chrome === void 0 ? void 0 : chrome.runtime) === null || _a === void 0 ? void 0 : _a.id)) {
                    if (sender.id !== chrome.runtime.id) {
                        return;
                    }
                }
            }
            if (msg.channel === this.name) {
                const id = msg.data.id;
                handlerFn(msg, sender).then(([result, error])=>{
                    sendResponse({
                        id,
                        result,
                        error
                    });
                }).catch((err)=>{
                    sendResponse({
                        id,
                        error: err.toString()
                    });
                });
                return true;
            }
        });
    }
} //# sourceMappingURL=content-script.js.map


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

/***/ "../common/dist/esm/channel/index.js":
/*!*******************************************!*\
  !*** ../common/dist/esm/channel/index.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelAppUi": () => (/* reexport safe */ _app_ui__WEBPACK_IMPORTED_MODULE_0__.ChannelAppUi),
/* harmony export */   "ChannelAppUiClient": () => (/* reexport safe */ _app_ui__WEBPACK_IMPORTED_MODULE_0__.ChannelAppUiClient),
/* harmony export */   "ChannelAppUiNotifications": () => (/* reexport safe */ _app_ui__WEBPACK_IMPORTED_MODULE_0__.ChannelAppUiNotifications),
/* harmony export */   "ChannelAppUiResponder": () => (/* reexport safe */ _app_ui__WEBPACK_IMPORTED_MODULE_0__.ChannelAppUiResponder),
/* harmony export */   "ChannelAppUiServer": () => (/* reexport safe */ _app_ui__WEBPACK_IMPORTED_MODULE_0__.ChannelAppUiServer),
/* harmony export */   "ChannelClient": () => (/* reexport safe */ _content_script__WEBPACK_IMPORTED_MODULE_1__.ChannelClient),
/* harmony export */   "ChannelContentScript": () => (/* reexport safe */ _content_script__WEBPACK_IMPORTED_MODULE_1__.ChannelContentScript),
/* harmony export */   "ChannelServer": () => (/* reexport safe */ _content_script__WEBPACK_IMPORTED_MODULE_1__.ChannelServer),
/* harmony export */   "PluginServer": () => (/* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_2__.PluginServer)
/* harmony export */ });
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-ui */ "../common/dist/esm/channel/app-ui.js");
/* harmony import */ var _content_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-script */ "../common/dist/esm/channel/content-script.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugin */ "../common/dist/esm/channel/plugin.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



 //# sourceMappingURL=index.js.map


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

/***/ "../common/dist/esm/channel/plugin.js":
/*!********************************************!*\
  !*** ../common/dist/esm/channel/plugin.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginServer": () => (/* binding */ PluginServer)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

//
// Communication channels for xNFT plugins and the host.
//
class PluginServer {
    constructor(url, requestChannel, responseChannel){
        this.url = url;
        this.requestChannel = requestChannel;
        this.responseChannel = responseChannel;
        this.destroy = ()=>{};
    }
    setWindow(window1, url, handlerFn) {
        this.window = window1;
        this.destroy = this.handler(handlerFn);
        if (url) {
            this.url = url;
        }
    }
    destroyWindow() {
        this.destroy();
        this.window = undefined;
    }
    handler(handlerFn) {
        const handle = async (event)=>{
            const url = new URL(this.url);
            const eventUrl = new URL(event.data.href);
            if (// TODO: hardcode allowed origin(s)
            !url.origin.startsWith("http://localhost:9933") && (eventUrl.origin !== url.origin || eventUrl.pathname !== url.pathname) || event.data.type !== this.requestChannel) {
                throw new Error("Unknown Origin or channel");
            }
            const id = event.data.detail.id;
            const iframeIdentifiers = event.data.iframeIdentifiers;
            const [result, error] = await handlerFn(event);
            if (this.responseChannel) {
                const msg = {
                    type: this.responseChannel,
                    iframeIdentifiers,
                    detail: {
                        id,
                        result,
                        error
                    }
                };
                if (!this.window) {
                    throw new Error("post message window not found");
                }
                this.window.postMessage(msg, "*");
            }
        };
        window.addEventListener("message", handle);
        return ()=>window.removeEventListener("message", handle);
    }
} //# sourceMappingURL=plugin.js.map


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

/***/ "../common/dist/esm/constants.js":
/*!***************************************!*\
  !*** ../common/dist/esm/constants.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AVATAR_BASE_URL": () => (/* binding */ AVATAR_BASE_URL),
/* harmony export */   "BACKEND_API_URL": () => (/* binding */ BACKEND_API_URL),
/* harmony export */   "BACKEND_EVENT": () => (/* binding */ BACKEND_EVENT),
/* harmony export */   "BACKGROUND_SERVICE_WORKER_READY": () => (/* binding */ BACKGROUND_SERVICE_WORKER_READY),
/* harmony export */   "BACKPACK_GITHUB_LINK": () => (/* binding */ BACKPACK_GITHUB_LINK),
/* harmony export */   "BACKPACK_LINK": () => (/* binding */ BACKPACK_LINK),
/* harmony export */   "BACKPACK_TEAM": () => (/* binding */ BACKPACK_TEAM),
/* harmony export */   "BACKPACK_TERMS_OF_SERVICE": () => (/* binding */ BACKPACK_TERMS_OF_SERVICE),
/* harmony export */   "CHANNEL_ETHEREUM_CONNECTION_INJECTED_REQUEST": () => (/* binding */ CHANNEL_ETHEREUM_CONNECTION_INJECTED_REQUEST),
/* harmony export */   "CHANNEL_ETHEREUM_CONNECTION_INJECTED_RESPONSE": () => (/* binding */ CHANNEL_ETHEREUM_CONNECTION_INJECTED_RESPONSE),
/* harmony export */   "CHANNEL_ETHEREUM_CONNECTION_RPC_UI": () => (/* binding */ CHANNEL_ETHEREUM_CONNECTION_RPC_UI),
/* harmony export */   "CHANNEL_ETHEREUM_NOTIFICATION": () => (/* binding */ CHANNEL_ETHEREUM_NOTIFICATION),
/* harmony export */   "CHANNEL_ETHEREUM_RPC_REQUEST": () => (/* binding */ CHANNEL_ETHEREUM_RPC_REQUEST),
/* harmony export */   "CHANNEL_ETHEREUM_RPC_RESPONSE": () => (/* binding */ CHANNEL_ETHEREUM_RPC_RESPONSE),
/* harmony export */   "CHANNEL_PLUGIN_CONNECTION_BRIDGE": () => (/* binding */ CHANNEL_PLUGIN_CONNECTION_BRIDGE),
/* harmony export */   "CHANNEL_PLUGIN_LAUNCH_REQUEST": () => (/* binding */ CHANNEL_PLUGIN_LAUNCH_REQUEST),
/* harmony export */   "CHANNEL_PLUGIN_NOTIFICATION": () => (/* binding */ CHANNEL_PLUGIN_NOTIFICATION),
/* harmony export */   "CHANNEL_PLUGIN_RENDER_REQUEST": () => (/* binding */ CHANNEL_PLUGIN_RENDER_REQUEST),
/* harmony export */   "CHANNEL_PLUGIN_RPC_REQUEST": () => (/* binding */ CHANNEL_PLUGIN_RPC_REQUEST),
/* harmony export */   "CHANNEL_PLUGIN_RPC_RESPONSE": () => (/* binding */ CHANNEL_PLUGIN_RPC_RESPONSE),
/* harmony export */   "CHANNEL_POPUP_NOTIFICATIONS": () => (/* binding */ CHANNEL_POPUP_NOTIFICATIONS),
/* harmony export */   "CHANNEL_POPUP_RESPONSE": () => (/* binding */ CHANNEL_POPUP_RESPONSE),
/* harmony export */   "CHANNEL_POPUP_RPC": () => (/* binding */ CHANNEL_POPUP_RPC),
/* harmony export */   "CHANNEL_SOLANA_CONNECTION_INJECTED_REQUEST": () => (/* binding */ CHANNEL_SOLANA_CONNECTION_INJECTED_REQUEST),
/* harmony export */   "CHANNEL_SOLANA_CONNECTION_INJECTED_RESPONSE": () => (/* binding */ CHANNEL_SOLANA_CONNECTION_INJECTED_RESPONSE),
/* harmony export */   "CHANNEL_SOLANA_CONNECTION_RPC_UI": () => (/* binding */ CHANNEL_SOLANA_CONNECTION_RPC_UI),
/* harmony export */   "CHANNEL_SOLANA_NOTIFICATION": () => (/* binding */ CHANNEL_SOLANA_NOTIFICATION),
/* harmony export */   "CHANNEL_SOLANA_RPC_REQUEST": () => (/* binding */ CHANNEL_SOLANA_RPC_REQUEST),
/* harmony export */   "CHANNEL_SOLANA_RPC_RESPONSE": () => (/* binding */ CHANNEL_SOLANA_RPC_RESPONSE),
/* harmony export */   "DEFAULT_GROUP_CHATS": () => (/* binding */ DEFAULT_GROUP_CHATS),
/* harmony export */   "DEFAULT_PUBKEY_STR": () => (/* binding */ DEFAULT_PUBKEY_STR),
/* harmony export */   "DISCORD_INVITE_LINK": () => (/* binding */ DISCORD_INVITE_LINK),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_CALL": () => (/* binding */ ETHEREUM_PROVIDER_RPC_CALL),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_ESTIMATE_GAS": () => (/* binding */ ETHEREUM_PROVIDER_RPC_ESTIMATE_GAS),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_AVATAR": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_AVATAR),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_BALANCE": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_BALANCE),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_BLOCK": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_BLOCK),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_BLOCK_NUMBER": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_BLOCK_NUMBER),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_BLOCK_WITH_TRANSACTIONS": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_BLOCK_WITH_TRANSACTIONS),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_CODE": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_CODE),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_FEE_DATA": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_FEE_DATA),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_GAS_PRICE": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_GAS_PRICE),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_NETWORK": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_NETWORK),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_RESOLVER": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_RESOLVER),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_STORAGE_AT": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_STORAGE_AT),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_TRANSACTION": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_TRANSACTION),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_COUNT": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_COUNT),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_RECEIPT": () => (/* binding */ ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_RECEIPT),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_LOOKUP_ADDRESS": () => (/* binding */ ETHEREUM_PROVIDER_RPC_LOOKUP_ADDRESS),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_RESOLVE_NAME": () => (/* binding */ ETHEREUM_PROVIDER_RPC_RESOLVE_NAME),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_WAIT_FOR_TRANSACTION": () => (/* binding */ ETHEREUM_PROVIDER_RPC_WAIT_FOR_TRANSACTION),
/* harmony export */   "ETHEREUM_RPC_METHOD_CONNECT": () => (/* binding */ ETHEREUM_RPC_METHOD_CONNECT),
/* harmony export */   "ETHEREUM_RPC_METHOD_DISCONNECT": () => (/* binding */ ETHEREUM_RPC_METHOD_DISCONNECT),
/* harmony export */   "ETHEREUM_RPC_METHOD_SIGN_AND_SEND_TX": () => (/* binding */ ETHEREUM_RPC_METHOD_SIGN_AND_SEND_TX),
/* harmony export */   "ETHEREUM_RPC_METHOD_SIGN_MESSAGE": () => (/* binding */ ETHEREUM_RPC_METHOD_SIGN_MESSAGE),
/* harmony export */   "ETHEREUM_RPC_METHOD_SIGN_TX": () => (/* binding */ ETHEREUM_RPC_METHOD_SIGN_TX),
/* harmony export */   "ETHEREUM_RPC_METHOD_SWITCH_CHAIN": () => (/* binding */ ETHEREUM_RPC_METHOD_SWITCH_CHAIN),
/* harmony export */   "EXTENSION_HEIGHT": () => (/* binding */ EXTENSION_HEIGHT),
/* harmony export */   "EXTENSION_WIDTH": () => (/* binding */ EXTENSION_WIDTH),
/* harmony export */   "LEDGER_IFRAME_URL": () => (/* binding */ LEDGER_IFRAME_URL),
/* harmony export */   "LEDGER_INJECTED_CHANNEL_REQUEST": () => (/* binding */ LEDGER_INJECTED_CHANNEL_REQUEST),
/* harmony export */   "LEDGER_INJECTED_CHANNEL_RESPONSE": () => (/* binding */ LEDGER_INJECTED_CHANNEL_RESPONSE),
/* harmony export */   "LEDGER_METHOD_ETHEREUM_SIGN_EIP712_HASHED_MESSAGE": () => (/* binding */ LEDGER_METHOD_ETHEREUM_SIGN_EIP712_HASHED_MESSAGE),
/* harmony export */   "LEDGER_METHOD_ETHEREUM_SIGN_EIP712_MESSAGE": () => (/* binding */ LEDGER_METHOD_ETHEREUM_SIGN_EIP712_MESSAGE),
/* harmony export */   "LEDGER_METHOD_ETHEREUM_SIGN_MESSAGE": () => (/* binding */ LEDGER_METHOD_ETHEREUM_SIGN_MESSAGE),
/* harmony export */   "LEDGER_METHOD_ETHEREUM_SIGN_TRANSACTION": () => (/* binding */ LEDGER_METHOD_ETHEREUM_SIGN_TRANSACTION),
/* harmony export */   "LEDGER_METHOD_SOLANA_SIGN_MESSAGE": () => (/* binding */ LEDGER_METHOD_SOLANA_SIGN_MESSAGE),
/* harmony export */   "LEDGER_METHOD_SOLANA_SIGN_TRANSACTION": () => (/* binding */ LEDGER_METHOD_SOLANA_SIGN_TRANSACTION),
/* harmony export */   "LEDGER_METHOD_UNLOCK": () => (/* binding */ LEDGER_METHOD_UNLOCK),
/* harmony export */   "LOAD_PUBLIC_KEY_AMOUNT": () => (/* binding */ LOAD_PUBLIC_KEY_AMOUNT),
/* harmony export */   "MESSAGING_COMMUNICATION_FETCH": () => (/* binding */ MESSAGING_COMMUNICATION_FETCH),
/* harmony export */   "MESSAGING_COMMUNICATION_FETCH_RESPONSE": () => (/* binding */ MESSAGING_COMMUNICATION_FETCH_RESPONSE),
/* harmony export */   "MESSAGING_COMMUNICATION_PUSH": () => (/* binding */ MESSAGING_COMMUNICATION_PUSH),
/* harmony export */   "MOBILE_CHANNEL_BG_REQUEST": () => (/* binding */ MOBILE_CHANNEL_BG_REQUEST),
/* harmony export */   "MOBILE_CHANNEL_BG_RESPONSE": () => (/* binding */ MOBILE_CHANNEL_BG_RESPONSE),
/* harmony export */   "MOBILE_CHANNEL_BG_RESPONSE_INNER": () => (/* binding */ MOBILE_CHANNEL_BG_RESPONSE_INNER),
/* harmony export */   "MOBILE_CHANNEL_FE_REQUEST": () => (/* binding */ MOBILE_CHANNEL_FE_REQUEST),
/* harmony export */   "MOBILE_CHANNEL_FE_RESPONSE": () => (/* binding */ MOBILE_CHANNEL_FE_RESPONSE),
/* harmony export */   "MOBILE_CHANNEL_FE_RESPONSE_INNER": () => (/* binding */ MOBILE_CHANNEL_FE_RESPONSE_INNER),
/* harmony export */   "MOBILE_CHANNEL_HOST_RPC_REQUEST": () => (/* binding */ MOBILE_CHANNEL_HOST_RPC_REQUEST),
/* harmony export */   "MOBILE_CHANNEL_HOST_RPC_RESPONSE": () => (/* binding */ MOBILE_CHANNEL_HOST_RPC_RESPONSE),
/* harmony export */   "MOBILE_CHANNEL_LOGS": () => (/* binding */ MOBILE_CHANNEL_LOGS),
/* harmony export */   "NATIVE_ACCOUNT_RENT_EXEMPTION_LAMPORTS": () => (/* binding */ NATIVE_ACCOUNT_RENT_EXEMPTION_LAMPORTS),
/* harmony export */   "NAV_COMPONENT_CONTACTS": () => (/* binding */ NAV_COMPONENT_CONTACTS),
/* harmony export */   "NAV_COMPONENT_MESSAGE_CHAT": () => (/* binding */ NAV_COMPONENT_MESSAGE_CHAT),
/* harmony export */   "NAV_COMPONENT_MESSAGE_GROUP_CHAT": () => (/* binding */ NAV_COMPONENT_MESSAGE_GROUP_CHAT),
/* harmony export */   "NAV_COMPONENT_MESSAGE_PROFILE": () => (/* binding */ NAV_COMPONENT_MESSAGE_PROFILE),
/* harmony export */   "NAV_COMPONENT_MESSAGE_REQUESTS": () => (/* binding */ NAV_COMPONENT_MESSAGE_REQUESTS),
/* harmony export */   "NAV_COMPONENT_NFT_CHAT": () => (/* binding */ NAV_COMPONENT_NFT_CHAT),
/* harmony export */   "NAV_COMPONENT_NFT_COLLECTION": () => (/* binding */ NAV_COMPONENT_NFT_COLLECTION),
/* harmony export */   "NAV_COMPONENT_NFT_DETAIL": () => (/* binding */ NAV_COMPONENT_NFT_DETAIL),
/* harmony export */   "NAV_COMPONENT_NFT_EXPERIENCE": () => (/* binding */ NAV_COMPONENT_NFT_EXPERIENCE),
/* harmony export */   "NAV_COMPONENT_TOKEN": () => (/* binding */ NAV_COMPONENT_TOKEN),
/* harmony export */   "NAV_COMPONENT_XNFT": () => (/* binding */ NAV_COMPONENT_XNFT),
/* harmony export */   "NOTIFICATION_ACTIVE_BLOCKCHAIN_UPDATED": () => (/* binding */ NOTIFICATION_ACTIVE_BLOCKCHAIN_UPDATED),
/* harmony export */   "NOTIFICATION_AGGREGATE_WALLETS_UPDATED": () => (/* binding */ NOTIFICATION_AGGREGATE_WALLETS_UPDATED),
/* harmony export */   "NOTIFICATION_APPROVED_ORIGINS_UPDATE": () => (/* binding */ NOTIFICATION_APPROVED_ORIGINS_UPDATE),
/* harmony export */   "NOTIFICATION_AUTO_LOCK_SETTINGS_UPDATED": () => (/* binding */ NOTIFICATION_AUTO_LOCK_SETTINGS_UPDATED),
/* harmony export */   "NOTIFICATION_BLOCKCHAIN_KEYRING_CREATED": () => (/* binding */ NOTIFICATION_BLOCKCHAIN_KEYRING_CREATED),
/* harmony export */   "NOTIFICATION_BLOCKCHAIN_KEYRING_DELETED": () => (/* binding */ NOTIFICATION_BLOCKCHAIN_KEYRING_DELETED),
/* harmony export */   "NOTIFICATION_DARK_MODE_UPDATED": () => (/* binding */ NOTIFICATION_DARK_MODE_UPDATED),
/* harmony export */   "NOTIFICATION_DEVELOPER_MODE_UPDATED": () => (/* binding */ NOTIFICATION_DEVELOPER_MODE_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_ACTIVE_WALLET_UPDATED": () => (/* binding */ NOTIFICATION_ETHEREUM_ACTIVE_WALLET_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_CHAIN_ID_UPDATED": () => (/* binding */ NOTIFICATION_ETHEREUM_CHAIN_ID_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_CONNECTED": () => (/* binding */ NOTIFICATION_ETHEREUM_CONNECTED),
/* harmony export */   "NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED": () => (/* binding */ NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_DISCONNECTED": () => (/* binding */ NOTIFICATION_ETHEREUM_DISCONNECTED),
/* harmony export */   "NOTIFICATION_ETHEREUM_EXPLORER_UPDATED": () => (/* binding */ NOTIFICATION_ETHEREUM_EXPLORER_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_FEE_DATA_DID_UPDATE": () => (/* binding */ NOTIFICATION_ETHEREUM_FEE_DATA_DID_UPDATE),
/* harmony export */   "NOTIFICATION_ETHEREUM_TOKENS_DID_UPDATE": () => (/* binding */ NOTIFICATION_ETHEREUM_TOKENS_DID_UPDATE),
/* harmony export */   "NOTIFICATION_FEATURE_GATES_UPDATED": () => (/* binding */ NOTIFICATION_FEATURE_GATES_UPDATED),
/* harmony export */   "NOTIFICATION_KEYNAME_UPDATE": () => (/* binding */ NOTIFICATION_KEYNAME_UPDATE),
/* harmony export */   "NOTIFICATION_KEYRING_ACTIVE_BLOCKCHAIN_UPDATED": () => (/* binding */ NOTIFICATION_KEYRING_ACTIVE_BLOCKCHAIN_UPDATED),
/* harmony export */   "NOTIFICATION_KEYRING_CREATED": () => (/* binding */ NOTIFICATION_KEYRING_CREATED),
/* harmony export */   "NOTIFICATION_KEYRING_DERIVED_WALLET": () => (/* binding */ NOTIFICATION_KEYRING_DERIVED_WALLET),
/* harmony export */   "NOTIFICATION_KEYRING_IMPORTED_SECRET_KEY": () => (/* binding */ NOTIFICATION_KEYRING_IMPORTED_SECRET_KEY),
/* harmony export */   "NOTIFICATION_KEYRING_IMPORTED_WALLET": () => (/* binding */ NOTIFICATION_KEYRING_IMPORTED_WALLET),
/* harmony export */   "NOTIFICATION_KEYRING_KEY_DELETE": () => (/* binding */ NOTIFICATION_KEYRING_KEY_DELETE),
/* harmony export */   "NOTIFICATION_KEYRING_RESET_MNEMONIC": () => (/* binding */ NOTIFICATION_KEYRING_RESET_MNEMONIC),
/* harmony export */   "NOTIFICATION_KEYRING_SET_MNEMONIC": () => (/* binding */ NOTIFICATION_KEYRING_SET_MNEMONIC),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_ACTIVE_USER_UPDATED": () => (/* binding */ NOTIFICATION_KEYRING_STORE_ACTIVE_USER_UPDATED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_CREATED": () => (/* binding */ NOTIFICATION_KEYRING_STORE_CREATED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_LOCKED": () => (/* binding */ NOTIFICATION_KEYRING_STORE_LOCKED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_REMOVED_USER": () => (/* binding */ NOTIFICATION_KEYRING_STORE_REMOVED_USER),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_RESET": () => (/* binding */ NOTIFICATION_KEYRING_STORE_RESET),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_UNLOCKED": () => (/* binding */ NOTIFICATION_KEYRING_STORE_UNLOCKED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_USERNAME_ACCOUNT_CREATED": () => (/* binding */ NOTIFICATION_KEYRING_STORE_USERNAME_ACCOUNT_CREATED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_USER_AVATAR_UPDATED": () => (/* binding */ NOTIFICATION_KEYRING_STORE_USER_AVATAR_UPDATED),
/* harmony export */   "NOTIFICATION_KEY_IS_COLD_UPDATE": () => (/* binding */ NOTIFICATION_KEY_IS_COLD_UPDATE),
/* harmony export */   "NOTIFICATION_NAVIGATION_URL_DID_CHANGE": () => (/* binding */ NOTIFICATION_NAVIGATION_URL_DID_CHANGE),
/* harmony export */   "NOTIFICATION_SOLANA_ACTIVE_WALLET_UPDATED": () => (/* binding */ NOTIFICATION_SOLANA_ACTIVE_WALLET_UPDATED),
/* harmony export */   "NOTIFICATION_SOLANA_COMMITMENT_UPDATED": () => (/* binding */ NOTIFICATION_SOLANA_COMMITMENT_UPDATED),
/* harmony export */   "NOTIFICATION_SOLANA_CONNECTED": () => (/* binding */ NOTIFICATION_SOLANA_CONNECTED),
/* harmony export */   "NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED": () => (/* binding */ NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED),
/* harmony export */   "NOTIFICATION_SOLANA_DISCONNECTED": () => (/* binding */ NOTIFICATION_SOLANA_DISCONNECTED),
/* harmony export */   "NOTIFICATION_SOLANA_EXPLORER_UPDATED": () => (/* binding */ NOTIFICATION_SOLANA_EXPLORER_UPDATED),
/* harmony export */   "NOTIFICATION_SOLANA_SPL_TOKENS_DID_UPDATE": () => (/* binding */ NOTIFICATION_SOLANA_SPL_TOKENS_DID_UPDATE),
/* harmony export */   "NOTIFICATION_USER_ACCOUNT_AUTHENTICATED": () => (/* binding */ NOTIFICATION_USER_ACCOUNT_AUTHENTICATED),
/* harmony export */   "NOTIFICATION_USER_ACCOUNT_PUBLIC_KEYS_UPDATED": () => (/* binding */ NOTIFICATION_USER_ACCOUNT_PUBLIC_KEYS_UPDATED),
/* harmony export */   "NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_CREATED": () => (/* binding */ NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_CREATED),
/* harmony export */   "NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_DELETED": () => (/* binding */ NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_DELETED),
/* harmony export */   "NOTIFICATION_XNFT_PREFERENCE_UPDATED": () => (/* binding */ NOTIFICATION_XNFT_PREFERENCE_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_CONNECT": () => (/* binding */ PLUGIN_NOTIFICATION_CONNECT),
/* harmony export */   "PLUGIN_NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED": () => (/* binding */ PLUGIN_NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_ETHEREUM_PUBLIC_KEY_UPDATED": () => (/* binding */ PLUGIN_NOTIFICATION_ETHEREUM_PUBLIC_KEY_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_MOUNT": () => (/* binding */ PLUGIN_NOTIFICATION_MOUNT),
/* harmony export */   "PLUGIN_NOTIFICATION_RENDER": () => (/* binding */ PLUGIN_NOTIFICATION_RENDER),
/* harmony export */   "PLUGIN_NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED": () => (/* binding */ PLUGIN_NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_SOLANA_PUBLIC_KEY_UPDATED": () => (/* binding */ PLUGIN_NOTIFICATION_SOLANA_PUBLIC_KEY_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_UNMOUNT": () => (/* binding */ PLUGIN_NOTIFICATION_UNMOUNT),
/* harmony export */   "PLUGIN_NOTIFICATION_UPDATE_METADATA": () => (/* binding */ PLUGIN_NOTIFICATION_UPDATE_METADATA),
/* harmony export */   "PLUGIN_REQUEST_ETHEREUM_SIGN_AND_SEND_TRANSACTION": () => (/* binding */ PLUGIN_REQUEST_ETHEREUM_SIGN_AND_SEND_TRANSACTION),
/* harmony export */   "PLUGIN_REQUEST_ETHEREUM_SIGN_MESSAGE": () => (/* binding */ PLUGIN_REQUEST_ETHEREUM_SIGN_MESSAGE),
/* harmony export */   "PLUGIN_REQUEST_ETHEREUM_SIGN_TRANSACTION": () => (/* binding */ PLUGIN_REQUEST_ETHEREUM_SIGN_TRANSACTION),
/* harmony export */   "PLUGIN_REQUEST_SOLANA_SIGN_ALL_TRANSACTIONS": () => (/* binding */ PLUGIN_REQUEST_SOLANA_SIGN_ALL_TRANSACTIONS),
/* harmony export */   "PLUGIN_REQUEST_SOLANA_SIGN_AND_SEND_TRANSACTION": () => (/* binding */ PLUGIN_REQUEST_SOLANA_SIGN_AND_SEND_TRANSACTION),
/* harmony export */   "PLUGIN_REQUEST_SOLANA_SIGN_MESSAGE": () => (/* binding */ PLUGIN_REQUEST_SOLANA_SIGN_MESSAGE),
/* harmony export */   "PLUGIN_REQUEST_SOLANA_SIGN_TRANSACTION": () => (/* binding */ PLUGIN_REQUEST_SOLANA_SIGN_TRANSACTION),
/* harmony export */   "PLUGIN_RPC_METHOD_CHAT_OPEN": () => (/* binding */ PLUGIN_RPC_METHOD_CHAT_OPEN),
/* harmony export */   "PLUGIN_RPC_METHOD_CLOSE_TO": () => (/* binding */ PLUGIN_RPC_METHOD_CLOSE_TO),
/* harmony export */   "PLUGIN_RPC_METHOD_LOCAL_STORAGE_GET": () => (/* binding */ PLUGIN_RPC_METHOD_LOCAL_STORAGE_GET),
/* harmony export */   "PLUGIN_RPC_METHOD_LOCAL_STORAGE_PUT": () => (/* binding */ PLUGIN_RPC_METHOD_LOCAL_STORAGE_PUT),
/* harmony export */   "PLUGIN_RPC_METHOD_PLUGIN_OPEN": () => (/* binding */ PLUGIN_RPC_METHOD_PLUGIN_OPEN),
/* harmony export */   "PLUGIN_RPC_METHOD_POP_OUT": () => (/* binding */ PLUGIN_RPC_METHOD_POP_OUT),
/* harmony export */   "PLUGIN_RPC_METHOD_RESIZE_EXTENSION_WINDOW": () => (/* binding */ PLUGIN_RPC_METHOD_RESIZE_EXTENSION_WINDOW),
/* harmony export */   "PLUGIN_RPC_METHOD_WINDOW_OPEN": () => (/* binding */ PLUGIN_RPC_METHOD_WINDOW_OPEN),
/* harmony export */   "POST_MESSAGE_ORIGIN": () => (/* binding */ POST_MESSAGE_ORIGIN),
/* harmony export */   "QUERY_ADD_USER_ACCOUNT": () => (/* binding */ QUERY_ADD_USER_ACCOUNT),
/* harmony export */   "QUERY_APPROVAL": () => (/* binding */ QUERY_APPROVAL),
/* harmony export */   "QUERY_APPROVE_ALL_TRANSACTIONS": () => (/* binding */ QUERY_APPROVE_ALL_TRANSACTIONS),
/* harmony export */   "QUERY_APPROVE_MESSAGE": () => (/* binding */ QUERY_APPROVE_MESSAGE),
/* harmony export */   "QUERY_APPROVE_TRANSACTION": () => (/* binding */ QUERY_APPROVE_TRANSACTION),
/* harmony export */   "QUERY_CONNECT_HARDWARE": () => (/* binding */ QUERY_CONNECT_HARDWARE),
/* harmony export */   "QUERY_LOCKED": () => (/* binding */ QUERY_LOCKED),
/* harmony export */   "QUERY_LOCKED_APPROVAL": () => (/* binding */ QUERY_LOCKED_APPROVAL),
/* harmony export */   "QUERY_ONBOARDING": () => (/* binding */ QUERY_ONBOARDING),
/* harmony export */   "REALTIME_API_URL": () => (/* binding */ REALTIME_API_URL),
/* harmony export */   "REALTIME_WS_URL": () => (/* binding */ REALTIME_WS_URL),
/* harmony export */   "SIMULATOR_PORT": () => (/* binding */ SIMULATOR_PORT),
/* harmony export */   "SOLANA_CONNECTION_GET_MULTIPLE_ACCOUNTS_INFO": () => (/* binding */ SOLANA_CONNECTION_GET_MULTIPLE_ACCOUNTS_INFO),
/* harmony export */   "SOLANA_CONNECTION_RPC_CONFIRM_TRANSACTION": () => (/* binding */ SOLANA_CONNECTION_RPC_CONFIRM_TRANSACTION),
/* harmony export */   "SOLANA_CONNECTION_RPC_CUSTOM_SPL_METADATA_URI": () => (/* binding */ SOLANA_CONNECTION_RPC_CUSTOM_SPL_METADATA_URI),
/* harmony export */   "SOLANA_CONNECTION_RPC_CUSTOM_SPL_TOKEN_ACCOUNTS": () => (/* binding */ SOLANA_CONNECTION_RPC_CUSTOM_SPL_TOKEN_ACCOUNTS),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO_AND_CONTEXT": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO_AND_CONTEXT),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_ADDRESS_LOOKUP_TABLE": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_ADDRESS_LOOKUP_TABLE),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_BALANCE": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_BALANCE),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_BLOCK_TIME": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_BLOCK_TIME),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_CONFIRMED_SIGNATURES_FOR_ADDRESS_2": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_CONFIRMED_SIGNATURES_FOR_ADDRESS_2),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_FEE_FOR_MESSAGE": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_FEE_FOR_MESSAGE),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH_AND_CONTEXT": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH_AND_CONTEXT),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_ACCOUNT_INFO": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_PARSED_ACCOUNT_INFO),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_PROGRAM_ACCOUNTS": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_PARSED_PROGRAM_ACCOUNTS),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_TOKEN_ACCOUNTS_BY_OWNER": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_PARSED_TOKEN_ACCOUNTS_BY_OWNER),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTION": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTION),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTIONS": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTIONS),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PROGRAM_ACCOUNTS": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_PROGRAM_ACCOUNTS),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_SLOT": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_SLOT),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNTS_BY_OWNER": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNTS_BY_OWNER),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNT_BALANCE": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNT_BALANCE),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_TOKEN_LARGEST_ACCOUNTS": () => (/* binding */ SOLANA_CONNECTION_RPC_GET_TOKEN_LARGEST_ACCOUNTS),
/* harmony export */   "SOLANA_CONNECTION_RPC_SEND_RAW_TRANSACTION": () => (/* binding */ SOLANA_CONNECTION_RPC_SEND_RAW_TRANSACTION),
/* harmony export */   "SOLANA_RPC_METHOD_CONNECT": () => (/* binding */ SOLANA_RPC_METHOD_CONNECT),
/* harmony export */   "SOLANA_RPC_METHOD_DISCONNECT": () => (/* binding */ SOLANA_RPC_METHOD_DISCONNECT),
/* harmony export */   "SOLANA_RPC_METHOD_OPEN_XNFT": () => (/* binding */ SOLANA_RPC_METHOD_OPEN_XNFT),
/* harmony export */   "SOLANA_RPC_METHOD_SIGN_ALL_TXS": () => (/* binding */ SOLANA_RPC_METHOD_SIGN_ALL_TXS),
/* harmony export */   "SOLANA_RPC_METHOD_SIGN_AND_SEND_TX": () => (/* binding */ SOLANA_RPC_METHOD_SIGN_AND_SEND_TX),
/* harmony export */   "SOLANA_RPC_METHOD_SIGN_MESSAGE": () => (/* binding */ SOLANA_RPC_METHOD_SIGN_MESSAGE),
/* harmony export */   "SOLANA_RPC_METHOD_SIGN_TX": () => (/* binding */ SOLANA_RPC_METHOD_SIGN_TX),
/* harmony export */   "SOLANA_RPC_METHOD_SIMULATE": () => (/* binding */ SOLANA_RPC_METHOD_SIMULATE),
/* harmony export */   "TAB_APPS": () => (/* binding */ TAB_APPS),
/* harmony export */   "TAB_BALANCES": () => (/* binding */ TAB_BALANCES),
/* harmony export */   "TAB_MESSAGES": () => (/* binding */ TAB_MESSAGES),
/* harmony export */   "TAB_NFTS": () => (/* binding */ TAB_NFTS),
/* harmony export */   "TAB_NOTIFICATIONS": () => (/* binding */ TAB_NOTIFICATIONS),
/* harmony export */   "TAB_RECENT_ACTIVITY": () => (/* binding */ TAB_RECENT_ACTIVITY),
/* harmony export */   "TAB_SET": () => (/* binding */ TAB_SET),
/* harmony export */   "TAB_SWAP": () => (/* binding */ TAB_SWAP),
/* harmony export */   "TAB_XNFT": () => (/* binding */ TAB_XNFT),
/* harmony export */   "TOKEN_ACCOUNT_RENT_EXEMPTION_LAMPORTS": () => (/* binding */ TOKEN_ACCOUNT_RENT_EXEMPTION_LAMPORTS),
/* harmony export */   "TWITTER_LINK": () => (/* binding */ TWITTER_LINK),
/* harmony export */   "UI_RPC_METHOD_ACTIVE_USER_UPDATE": () => (/* binding */ UI_RPC_METHOD_ACTIVE_USER_UPDATE),
/* harmony export */   "UI_RPC_METHOD_ALL_USERS_READ": () => (/* binding */ UI_RPC_METHOD_ALL_USERS_READ),
/* harmony export */   "UI_RPC_METHOD_APPROVED_ORIGINS_DELETE": () => (/* binding */ UI_RPC_METHOD_APPROVED_ORIGINS_DELETE),
/* harmony export */   "UI_RPC_METHOD_APPROVED_ORIGINS_READ": () => (/* binding */ UI_RPC_METHOD_APPROVED_ORIGINS_READ),
/* harmony export */   "UI_RPC_METHOD_APPROVED_ORIGINS_UPDATE": () => (/* binding */ UI_RPC_METHOD_APPROVED_ORIGINS_UPDATE),
/* harmony export */   "UI_RPC_METHOD_BLOCKCHAINS_ENABLED_ADD": () => (/* binding */ UI_RPC_METHOD_BLOCKCHAINS_ENABLED_ADD),
/* harmony export */   "UI_RPC_METHOD_BLOCKCHAINS_ENABLED_DELETE": () => (/* binding */ UI_RPC_METHOD_BLOCKCHAINS_ENABLED_DELETE),
/* harmony export */   "UI_RPC_METHOD_BLOCKCHAINS_ENABLED_READ": () => (/* binding */ UI_RPC_METHOD_BLOCKCHAINS_ENABLED_READ),
/* harmony export */   "UI_RPC_METHOD_BLOCKCHAIN_KEYRINGS_ADD": () => (/* binding */ UI_RPC_METHOD_BLOCKCHAIN_KEYRINGS_ADD),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_CHAIN_ID_READ": () => (/* binding */ UI_RPC_METHOD_ETHEREUM_CHAIN_ID_READ),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_CHAIN_ID_UPDATE": () => (/* binding */ UI_RPC_METHOD_ETHEREUM_CHAIN_ID_UPDATE),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_READ": () => (/* binding */ UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_READ),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_UPDATE": () => (/* binding */ UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_UPDATE),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_EXPLORER_READ": () => (/* binding */ UI_RPC_METHOD_ETHEREUM_EXPLORER_READ),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_EXPLORER_UPDATE": () => (/* binding */ UI_RPC_METHOD_ETHEREUM_EXPLORER_UPDATE),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_SIGN_AND_SEND_TRANSACTION": () => (/* binding */ UI_RPC_METHOD_ETHEREUM_SIGN_AND_SEND_TRANSACTION),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_SIGN_MESSAGE": () => (/* binding */ UI_RPC_METHOD_ETHEREUM_SIGN_MESSAGE),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_SIGN_TRANSACTION": () => (/* binding */ UI_RPC_METHOD_ETHEREUM_SIGN_TRANSACTION),
/* harmony export */   "UI_RPC_METHOD_FIND_SERVER_PUBLIC_KEY_CONFLICTS": () => (/* binding */ UI_RPC_METHOD_FIND_SERVER_PUBLIC_KEY_CONFLICTS),
/* harmony export */   "UI_RPC_METHOD_FIND_WALLET_DESCRIPTOR": () => (/* binding */ UI_RPC_METHOD_FIND_WALLET_DESCRIPTOR),
/* harmony export */   "UI_RPC_METHOD_GET_FEATURE_GATES": () => (/* binding */ UI_RPC_METHOD_GET_FEATURE_GATES),
/* harmony export */   "UI_RPC_METHOD_GET_XNFT_PREFERENCES": () => (/* binding */ UI_RPC_METHOD_GET_XNFT_PREFERENCES),
/* harmony export */   "UI_RPC_METHOD_KEYNAME_READ": () => (/* binding */ UI_RPC_METHOD_KEYNAME_READ),
/* harmony export */   "UI_RPC_METHOD_KEYNAME_UPDATE": () => (/* binding */ UI_RPC_METHOD_KEYNAME_UPDATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_ACTIVE_WALLET_UPDATE": () => (/* binding */ UI_RPC_METHOD_KEYRING_ACTIVE_WALLET_UPDATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_READ": () => (/* binding */ UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_READ),
/* harmony export */   "UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_UPDATE": () => (/* binding */ UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_UPDATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_DERIVE_WALLET": () => (/* binding */ UI_RPC_METHOD_KEYRING_DERIVE_WALLET),
/* harmony export */   "UI_RPC_METHOD_KEYRING_EXPORT_MNEMONIC": () => (/* binding */ UI_RPC_METHOD_KEYRING_EXPORT_MNEMONIC),
/* harmony export */   "UI_RPC_METHOD_KEYRING_EXPORT_SECRET_KEY": () => (/* binding */ UI_RPC_METHOD_KEYRING_EXPORT_SECRET_KEY),
/* harmony export */   "UI_RPC_METHOD_KEYRING_HAS_MNEMONIC": () => (/* binding */ UI_RPC_METHOD_KEYRING_HAS_MNEMONIC),
/* harmony export */   "UI_RPC_METHOD_KEYRING_IMPORT_SECRET_KEY": () => (/* binding */ UI_RPC_METHOD_KEYRING_IMPORT_SECRET_KEY),
/* harmony export */   "UI_RPC_METHOD_KEYRING_IMPORT_WALLET": () => (/* binding */ UI_RPC_METHOD_KEYRING_IMPORT_WALLET),
/* harmony export */   "UI_RPC_METHOD_KEYRING_KEY_DELETE": () => (/* binding */ UI_RPC_METHOD_KEYRING_KEY_DELETE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_READ_NEXT_DERIVATION_PATH": () => (/* binding */ UI_RPC_METHOD_KEYRING_READ_NEXT_DERIVATION_PATH),
/* harmony export */   "UI_RPC_METHOD_KEYRING_RESET": () => (/* binding */ UI_RPC_METHOD_KEYRING_RESET),
/* harmony export */   "UI_RPC_METHOD_KEYRING_SET_MNEMONIC": () => (/* binding */ UI_RPC_METHOD_KEYRING_SET_MNEMONIC),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_CHECK_PASSWORD": () => (/* binding */ UI_RPC_METHOD_KEYRING_STORE_CHECK_PASSWORD),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_CREATE": () => (/* binding */ UI_RPC_METHOD_KEYRING_STORE_CREATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_LOCK": () => (/* binding */ UI_RPC_METHOD_KEYRING_STORE_LOCK),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_CREATE": () => (/* binding */ UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_CREATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_SYNC": () => (/* binding */ UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_SYNC),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEYS": () => (/* binding */ UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEYS),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEY_DATA": () => (/* binding */ UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEY_DATA),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_STATE": () => (/* binding */ UI_RPC_METHOD_KEYRING_STORE_STATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_UNLOCK": () => (/* binding */ UI_RPC_METHOD_KEYRING_STORE_UNLOCK),
/* harmony export */   "UI_RPC_METHOD_KEYRING_VALIDATE_MNEMONIC": () => (/* binding */ UI_RPC_METHOD_KEYRING_VALIDATE_MNEMONIC),
/* harmony export */   "UI_RPC_METHOD_KEY_IS_COLD_UPDATE": () => (/* binding */ UI_RPC_METHOD_KEY_IS_COLD_UPDATE),
/* harmony export */   "UI_RPC_METHOD_LEDGER_CONNECT": () => (/* binding */ UI_RPC_METHOD_LEDGER_CONNECT),
/* harmony export */   "UI_RPC_METHOD_LEDGER_IMPORT": () => (/* binding */ UI_RPC_METHOD_LEDGER_IMPORT),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_ACTIVE_TAB_UPDATE": () => (/* binding */ UI_RPC_METHOD_NAVIGATION_ACTIVE_TAB_UPDATE),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_CURRENT_URL_UPDATE": () => (/* binding */ UI_RPC_METHOD_NAVIGATION_CURRENT_URL_UPDATE),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_OPEN_CHAT": () => (/* binding */ UI_RPC_METHOD_NAVIGATION_OPEN_CHAT),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_POP": () => (/* binding */ UI_RPC_METHOD_NAVIGATION_POP),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_PUSH": () => (/* binding */ UI_RPC_METHOD_NAVIGATION_PUSH),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_READ": () => (/* binding */ UI_RPC_METHOD_NAVIGATION_READ),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_READ_URL": () => (/* binding */ UI_RPC_METHOD_NAVIGATION_READ_URL),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_TO_DEFAULT": () => (/* binding */ UI_RPC_METHOD_NAVIGATION_TO_DEFAULT),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_TO_ROOT": () => (/* binding */ UI_RPC_METHOD_NAVIGATION_TO_ROOT),
/* harmony export */   "UI_RPC_METHOD_PASSWORD_UPDATE": () => (/* binding */ UI_RPC_METHOD_PASSWORD_UPDATE),
/* harmony export */   "UI_RPC_METHOD_PREFERENCES_READ": () => (/* binding */ UI_RPC_METHOD_PREFERENCES_READ),
/* harmony export */   "UI_RPC_METHOD_PREVIEW_PUBKEYS": () => (/* binding */ UI_RPC_METHOD_PREVIEW_PUBKEYS),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_AGGREGATE_WALLETS_UPDATE": () => (/* binding */ UI_RPC_METHOD_SETTINGS_AGGREGATE_WALLETS_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_DARK_MODE_READ": () => (/* binding */ UI_RPC_METHOD_SETTINGS_DARK_MODE_READ),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_DARK_MODE_UPDATE": () => (/* binding */ UI_RPC_METHOD_SETTINGS_DARK_MODE_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_READ": () => (/* binding */ UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_READ),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_UPDATE": () => (/* binding */ UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SET_FEATURE_GATES": () => (/* binding */ UI_RPC_METHOD_SET_FEATURE_GATES),
/* harmony export */   "UI_RPC_METHOD_SET_XNFT_PREFERENCES": () => (/* binding */ UI_RPC_METHOD_SET_XNFT_PREFERENCES),
/* harmony export */   "UI_RPC_METHOD_SIGN_MESSAGE_FOR_PUBLIC_KEY": () => (/* binding */ UI_RPC_METHOD_SIGN_MESSAGE_FOR_PUBLIC_KEY),
/* harmony export */   "UI_RPC_METHOD_SOLANA_COMMITMENT_READ": () => (/* binding */ UI_RPC_METHOD_SOLANA_COMMITMENT_READ),
/* harmony export */   "UI_RPC_METHOD_SOLANA_COMMITMENT_UPDATE": () => (/* binding */ UI_RPC_METHOD_SOLANA_COMMITMENT_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SOLANA_CONNECTION_URL_READ": () => (/* binding */ UI_RPC_METHOD_SOLANA_CONNECTION_URL_READ),
/* harmony export */   "UI_RPC_METHOD_SOLANA_CONNECTION_URL_UPDATE": () => (/* binding */ UI_RPC_METHOD_SOLANA_CONNECTION_URL_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SOLANA_EXPLORER_READ": () => (/* binding */ UI_RPC_METHOD_SOLANA_EXPLORER_READ),
/* harmony export */   "UI_RPC_METHOD_SOLANA_EXPLORER_UPDATE": () => (/* binding */ UI_RPC_METHOD_SOLANA_EXPLORER_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIGN_ALL_TRANSACTIONS": () => (/* binding */ UI_RPC_METHOD_SOLANA_SIGN_ALL_TRANSACTIONS),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIGN_AND_SEND_TRANSACTION": () => (/* binding */ UI_RPC_METHOD_SOLANA_SIGN_AND_SEND_TRANSACTION),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIGN_MESSAGE": () => (/* binding */ UI_RPC_METHOD_SOLANA_SIGN_MESSAGE),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIGN_TRANSACTION": () => (/* binding */ UI_RPC_METHOD_SOLANA_SIGN_TRANSACTION),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIMULATE": () => (/* binding */ UI_RPC_METHOD_SOLANA_SIMULATE),
/* harmony export */   "UI_RPC_METHOD_TRY_TO_SIGN_MESSAGE": () => (/* binding */ UI_RPC_METHOD_TRY_TO_SIGN_MESSAGE),
/* harmony export */   "UI_RPC_METHOD_USERNAME_ACCOUNT_CREATE": () => (/* binding */ UI_RPC_METHOD_USERNAME_ACCOUNT_CREATE),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_AUTH": () => (/* binding */ UI_RPC_METHOD_USER_ACCOUNT_AUTH),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_LOGOUT": () => (/* binding */ UI_RPC_METHOD_USER_ACCOUNT_LOGOUT),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_CREATE": () => (/* binding */ UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_CREATE),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_DELETE": () => (/* binding */ UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_DELETE),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_READ": () => (/* binding */ UI_RPC_METHOD_USER_ACCOUNT_READ),
/* harmony export */   "UI_RPC_METHOD_USER_JWT_UPDATE": () => (/* binding */ UI_RPC_METHOD_USER_JWT_UPDATE),
/* harmony export */   "UI_RPC_METHOD_USER_READ": () => (/* binding */ UI_RPC_METHOD_USER_READ),
/* harmony export */   "UNKNOWN_NFT_ICON_SRC": () => (/* binding */ UNKNOWN_NFT_ICON_SRC),
/* harmony export */   "WHITELISTED_CHAT_COLLECTIONS": () => (/* binding */ WHITELISTED_CHAT_COLLECTIONS),
/* harmony export */   "XNFT_GG_LINK": () => (/* binding */ XNFT_GG_LINK)
/* harmony export */ });
/* harmony import */ var _generated_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generated-config */ "../common/dist/esm/generated-config.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


//
// Messaging communication channel topics.
//
const CHANNEL_PLUGIN_RPC_REQUEST = "channel-plugin-request";
const CHANNEL_PLUGIN_RPC_RESPONSE = "channel-plugin-response";
const CHANNEL_PLUGIN_RENDER_REQUEST = "channel-channel-plugin-render-request";
const CHANNEL_PLUGIN_LAUNCH_REQUEST = "channel-channel-plugin-launch-request";
const CHANNEL_PLUGIN_NOTIFICATION = "channel-channel-plugin-notification";
const CHANNEL_PLUGIN_CONNECTION_BRIDGE = "channel-channel-plugin-connection-bridge";
const CHANNEL_POPUP_RPC = "channel-popup-rpc";
const CHANNEL_POPUP_RESPONSE = "channel-popup-response";
const CHANNEL_POPUP_NOTIFICATIONS = "channel-popup-notifications";
const CHANNEL_SOLANA_RPC_REQUEST = "channel-solana-rpc-request";
const CHANNEL_SOLANA_RPC_RESPONSE = "channel-solana-rpc-response";
const CHANNEL_SOLANA_NOTIFICATION = "channel-solana-notification";
const CHANNEL_SOLANA_CONNECTION_RPC_UI = "channel-solana-connection-rpc-ui";
const CHANNEL_SOLANA_CONNECTION_INJECTED_REQUEST = "channel-solana-connection-injected-request";
const CHANNEL_SOLANA_CONNECTION_INJECTED_RESPONSE = "channel-solana-connection-injected-response";
const CHANNEL_ETHEREUM_RPC_REQUEST = "channel-ethereum-rpc-request";
const CHANNEL_ETHEREUM_RPC_RESPONSE = "channel-ethereum-rpc-response";
const CHANNEL_ETHEREUM_NOTIFICATION = "channel-ethereum-rpc-notification";
const CHANNEL_ETHEREUM_CONNECTION_RPC_UI = "channel-ethereum-connection-rpc-ui";
const CHANNEL_ETHEREUM_CONNECTION_INJECTED_REQUEST = "channel-ethereum-connection-injected-request";
const CHANNEL_ETHEREUM_CONNECTION_INJECTED_RESPONSE = "channel-ethereum-connection-injected-response";
//
// Mobile specific webview messaging subsystem channels.
//
const MOBILE_CHANNEL_HOST_RPC_REQUEST = "mobile-host-rpc-request";
const MOBILE_CHANNEL_HOST_RPC_RESPONSE = "mobile-host-rpc-response";
const MOBILE_CHANNEL_BG_REQUEST = "mobile-bg-request";
const MOBILE_CHANNEL_BG_RESPONSE = "mobile-bg-response";
const MOBILE_CHANNEL_BG_RESPONSE_INNER = "mobile-bg-response-inner";
const MOBILE_CHANNEL_FE_REQUEST = "mobile-fe-request";
const MOBILE_CHANNEL_FE_RESPONSE = "mobile-fe-response";
const MOBILE_CHANNEL_FE_RESPONSE_INNER = "mobile-fe-response-inner";
//
// xNFT notifications sent from the host to the xNFT.
//
const PLUGIN_NOTIFICATION_RENDER = "plugin-notification-render";
const PLUGIN_NOTIFICATION_CONNECT = "plugin-notification-connect";
const PLUGIN_NOTIFICATION_MOUNT = "plugin-notification-mount";
const PLUGIN_NOTIFICATION_UPDATE_METADATA = "plugin-notification-update-metadata";
const PLUGIN_NOTIFICATION_UNMOUNT = "plugin-notification-unmount";
const PLUGIN_NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED = "plugin-notification-solana-connection-url-updated";
const PLUGIN_NOTIFICATION_SOLANA_PUBLIC_KEY_UPDATED = "plugin-notification-solana-public-key-updated";
const PLUGIN_NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED = "plugin-notification-ethereum-connection-url-updated";
const PLUGIN_NOTIFICATION_ETHEREUM_PUBLIC_KEY_UPDATED = "plugin-notification-ethereum-public-key-updated";
const PLUGIN_REQUEST_SOLANA_SIGN_TRANSACTION = "plugin-request-solana-sign-tx";
const PLUGIN_REQUEST_SOLANA_SIGN_ALL_TRANSACTIONS = "plugin-request-solana-sign-all-txs";
const PLUGIN_REQUEST_SOLANA_SIGN_AND_SEND_TRANSACTION = "plugin-request-solana-sign-and-send-tx";
const PLUGIN_REQUEST_SOLANA_SIGN_MESSAGE = "plugin-request-solana-sign-message";
const PLUGIN_REQUEST_ETHEREUM_SIGN_TRANSACTION = "plugin-request-ethereum-sign-tx";
const PLUGIN_REQUEST_ETHEREUM_SIGN_AND_SEND_TRANSACTION = "plugin-request-ethereum-sign-and-send-tx";
const PLUGIN_REQUEST_ETHEREUM_SIGN_MESSAGE = "plugin-request-ethereum-sign-message";
//
// xNFT host API.
//
const PLUGIN_RPC_METHOD_LOCAL_STORAGE_GET = "store-get";
const PLUGIN_RPC_METHOD_LOCAL_STORAGE_PUT = "store-put";
//
// Trusted app API.
//
const UI_RPC_METHOD_APPROVED_ORIGINS_DELETE = "ui-rpc-method-approved-origins-delete";
const UI_RPC_METHOD_APPROVED_ORIGINS_READ = "ui-rpc-method-approved-origins-read";
const UI_RPC_METHOD_APPROVED_ORIGINS_UPDATE = "ui-rpc-method-approved-origins-update";
const UI_RPC_METHOD_BLOCKCHAINS_ENABLED_READ = "ui-rpc-method-blockchains-enabled-read";
const UI_RPC_METHOD_BLOCKCHAINS_ENABLED_ADD = "ui-rpc-method-blockchains-enabled-add";
const UI_RPC_METHOD_BLOCKCHAINS_ENABLED_DELETE = "ui-rpc-method-blockchains-enabled-delete";
const UI_RPC_METHOD_BLOCKCHAIN_KEYRINGS_ADD = "ui-rpc-method-blockchain-keyrings-add";
const UI_RPC_METHOD_FIND_SERVER_PUBLIC_KEY_CONFLICTS = "ui-rpc-method-find-server-public-key-conflicts";
const UI_RPC_METHOD_FIND_WALLET_DESCRIPTOR = "ui-rpc-method-find-wallet-descriptor";
const UI_RPC_METHOD_KEY_IS_COLD_UPDATE = "ui-rpc-method-key-is-cold-update";
const UI_RPC_METHOD_KEYNAME_READ = "ui-rpc-method-keyname-read";
const UI_RPC_METHOD_KEYNAME_UPDATE = "ui-rpc-method-keyname-update";
const UI_RPC_METHOD_KEYRING_ACTIVE_WALLET_UPDATE = "ui-rpc-method-keyring-active-wallet-update";
const UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_READ = "ui-rpc-method-auto-lock-settings-read";
const UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_UPDATE = "ui-rpc-method-auto-lock-settings-update";
const UI_RPC_METHOD_KEYRING_READ_NEXT_DERIVATION_PATH = "ui-rpc-method-keyring-read-next-derivation-path";
const UI_RPC_METHOD_KEYRING_IMPORT_WALLET = "ui-rpc-method-keyring-import-wallet";
const UI_RPC_METHOD_KEYRING_SET_MNEMONIC = "ui-rpc-method-keyring-set-mnemonic";
const UI_RPC_METHOD_KEYRING_DERIVE_WALLET = "ui-rpc-method-keyring-derive";
const UI_RPC_METHOD_KEYRING_EXPORT_MNEMONIC = "ui-rpc-method-export-mnemonic";
const UI_RPC_METHOD_KEYRING_EXPORT_SECRET_KEY = "ui-rpc-method-export-secret-key";
const UI_RPC_METHOD_KEYRING_IMPORT_SECRET_KEY = "ui-rpc-method-keyring-import-secret-key";
const UI_RPC_METHOD_KEYRING_HAS_MNEMONIC = "ui-rpc-method-keyring-has-mnemonic";
const UI_RPC_METHOD_KEYRING_KEY_DELETE = "ui-rpc-method-keyring-delete";
const UI_RPC_METHOD_KEYRING_RESET = "ui-rpc-method-keyring-reset";
const UI_RPC_METHOD_KEYRING_STORE_CHECK_PASSWORD = "ui-rpc-method-keyring-store-check-password";
const UI_RPC_METHOD_KEYRING_STORE_CREATE = "ui-rpc-method-keyring-store-create";
const UI_RPC_METHOD_KEYRING_STORE_LOCK = "ui-rpc-method-keyring-store-lock";
const UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_CREATE = "ui-rpc-method-keyring-mnemonic-create";
const UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_SYNC = "ui-rpc-method-keyring-mnemonic-sync";
const UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEYS = "ui-rpc-method-keyring-read-all-pubkeys";
const UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEY_DATA = "ui-rpc-method-keyring-read-all-pubkey-data";
const UI_RPC_METHOD_KEYRING_STORE_STATE = "ui-rpc-method-keyring-store-state";
const UI_RPC_METHOD_KEYRING_STORE_UNLOCK = "ui-rpc-method-keyring-store-unlock";
const UI_RPC_METHOD_KEYRING_VALIDATE_MNEMONIC = "ui-rpc-method-validate-mnemonic";
const UI_RPC_METHOD_LEDGER_CONNECT = "ui-rpc-method-ledger-connect";
const UI_RPC_METHOD_LEDGER_IMPORT = "ui-rpc-method-ledger-import";
const UI_RPC_METHOD_NAVIGATION_ACTIVE_TAB_UPDATE = "ui-rpc-method-navigation-active-tab-update";
const UI_RPC_METHOD_NAVIGATION_OPEN_CHAT = "ui-rpc-method-navigation-open-chat";
const UI_RPC_METHOD_NAVIGATION_CURRENT_URL_UPDATE = "ui-rpc-method-navigation-current-url-update";
const UI_RPC_METHOD_NAVIGATION_POP = "ui-rpc-method-navigation-pop";
const UI_RPC_METHOD_NAVIGATION_PUSH = "ui-rpc-method-navigation-push";
const UI_RPC_METHOD_NAVIGATION_READ = "ui-rpc-method-navigation-read";
const UI_RPC_METHOD_NAVIGATION_READ_URL = "ui-rpc-method-navigation-read-url";
const UI_RPC_METHOD_NAVIGATION_TO_ROOT = "ui-rpc-method-navigation-to-root";
const UI_RPC_METHOD_NAVIGATION_TO_DEFAULT = "ui-rpc-method-navigation-to-default";
const UI_RPC_METHOD_PASSWORD_UPDATE = "ui-rpc-method-password-update";
const UI_RPC_METHOD_SET_FEATURE_GATES = "ui-rpc-method-set-feature-gates";
const UI_RPC_METHOD_GET_FEATURE_GATES = "ui-rpc-method-get-feature-gates";
const UI_RPC_METHOD_GET_XNFT_PREFERENCES = "ui-rpc-method-get-xnft-preference";
const UI_RPC_METHOD_SET_XNFT_PREFERENCES = "ui-rpc-method-set-xnft-preference";
const UI_RPC_METHOD_PREVIEW_PUBKEYS = "ui-rpc-method-keyring-preview-pubkeys";
const UI_RPC_METHOD_SETTINGS_DARK_MODE_READ = "ui-rpc-method-settings-dark-mode-read";
const UI_RPC_METHOD_SETTINGS_DARK_MODE_UPDATE = "ui-rpc-method-settings-dark-mode-update";
const UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_READ = "ui-rpc-method-settings-developer-mode-read";
const UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_UPDATE = "ui-rpc-method-settings-developer-mode-update";
const UI_RPC_METHOD_SETTINGS_AGGREGATE_WALLETS_UPDATE = "ui-rpc-method-settings-aggregate-wallet-update";
const UI_RPC_METHOD_SIGN_MESSAGE_FOR_PUBLIC_KEY = "ui-rpc-method-sign-message-for-public-key";
const UI_RPC_METHOD_TRY_TO_SIGN_MESSAGE = "ui-rpc-method-try-to-sign-message";
const UI_RPC_METHOD_USER_READ = "ui-rpc-method-user-read";
const UI_RPC_METHOD_ALL_USERS_READ = "ui-rpc-method-all-users-read";
const UI_RPC_METHOD_USERNAME_ACCOUNT_CREATE = "ui-rpc-method-username-account-create";
const UI_RPC_METHOD_ACTIVE_USER_UPDATE = "ui-rpc-method-active-user-update";
const UI_RPC_METHOD_USER_JWT_UPDATE = "ui-rpc-method-user-jwt-update";
const UI_RPC_METHOD_PREFERENCES_READ = "ui-rpc-method-references-read";
// User account methods that interact with the API
const UI_RPC_METHOD_USER_ACCOUNT_AUTH = "ui-rpc-method-user-account-auth";
const UI_RPC_METHOD_USER_ACCOUNT_LOGOUT = "ui-rpc-method-user-logout";
const UI_RPC_METHOD_USER_ACCOUNT_READ = "ui-rpc-method-user-account-read";
const UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_CREATE = "ui-rpc-method-user-account-add-public-create";
const UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_DELETE = "ui-rpc-method-user-account-remove-public-delete";
// Solana
const UI_RPC_METHOD_SOLANA_COMMITMENT_READ = "ui-rpc-method-solana-commitment-read";
const UI_RPC_METHOD_SOLANA_COMMITMENT_UPDATE = "ui-rpc-method-solana-commitment-update";
const UI_RPC_METHOD_SOLANA_CONNECTION_URL_READ = "ui-rpc-method-solana-connection-url-read";
const UI_RPC_METHOD_SOLANA_CONNECTION_URL_UPDATE = "ui-rpc-method-solana-connection-url-update";
const UI_RPC_METHOD_SOLANA_EXPLORER_READ = "ui-rpc-method-solana-explorer-read";
const UI_RPC_METHOD_SOLANA_EXPLORER_UPDATE = "ui-rpc-method-solana-explorer-update";
const UI_RPC_METHOD_SOLANA_SIGN_ALL_TRANSACTIONS = "ui-rpc-method-solana-sign-all-txs";
const UI_RPC_METHOD_SOLANA_SIGN_AND_SEND_TRANSACTION = "ui-rpc-method-solana-sign-and-send-tx";
const UI_RPC_METHOD_SOLANA_SIGN_MESSAGE = "ui-rpc-method-solana-sign-message";
const UI_RPC_METHOD_SOLANA_SIGN_TRANSACTION = "ui-rpc-method-solana-sign-tx";
const UI_RPC_METHOD_SOLANA_SIMULATE = "ui-rpc-method-solana-simulate";
// Ethereum
const UI_RPC_METHOD_ETHEREUM_CHAIN_ID_READ = "ui-rpc-method-ethereum-chain-id-read";
const UI_RPC_METHOD_ETHEREUM_CHAIN_ID_UPDATE = "ui-rpc-method-ethereum-chain-id-update";
const UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_READ = "ui-rpc-method-ethereum-connection-url-read";
const UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_UPDATE = "ui-rpc-method-ethereum-connection-url-update";
const UI_RPC_METHOD_ETHEREUM_EXPLORER_READ = "ui-rpc-method-ethereum-explorer-read";
const UI_RPC_METHOD_ETHEREUM_EXPLORER_UPDATE = "ui-rpc-method-ethereum-explorer-update";
const UI_RPC_METHOD_ETHEREUM_SIGN_AND_SEND_TRANSACTION = "ui-rpc-method-ethereum-sign-and-send-tx";
const UI_RPC_METHOD_ETHEREUM_SIGN_MESSAGE = "ui-rpc-method-ethereum-sign-message";
const UI_RPC_METHOD_ETHEREUM_SIGN_TRANSACTION = "ui-rpc-method-ethereum-sign-tx";
//
// Notifications sent from the background script to observers.
//
const NOTIFICATION_KEY_IS_COLD_UPDATE = "notification-key-is-cold-update";
const NOTIFICATION_APPROVED_ORIGINS_UPDATE = "notification-approved-origins-update";
const NOTIFICATION_AUTO_LOCK_SETTINGS_UPDATED = "notification-auto-lock-settings-updated";
const NOTIFICATION_BLOCKCHAIN_KEYRING_CREATED = "notification-blockchain-keyring-created";
const NOTIFICATION_BLOCKCHAIN_KEYRING_DELETED = "notification-blockchain-keyring-deleted";
const NOTIFICATION_AGGREGATE_WALLETS_UPDATED = "notification-aggregate-wallets-updated";
const NOTIFICATION_DARK_MODE_UPDATED = "notification-dark-mode-updated";
const NOTIFICATION_DEVELOPER_MODE_UPDATED = "notification-developer-mode-updated";
const NOTIFICATION_FEATURE_GATES_UPDATED = "notification-feature-gates-updated";
const NOTIFICATION_KEYNAME_UPDATE = "notification-keyname-update";
const NOTIFICATION_KEYRING_ACTIVE_BLOCKCHAIN_UPDATED = "notification-keyring-active-blockchain-updated";
const NOTIFICATION_KEYRING_CREATED = "notification-keyring-created";
const NOTIFICATION_KEYRING_IMPORTED_WALLET = "notification-keyring-imported-wallet";
const NOTIFICATION_KEYRING_DERIVED_WALLET = "notification-keyring-derived-wallet";
const NOTIFICATION_KEYRING_IMPORTED_SECRET_KEY = "notification-keyring-imported-secret-key";
const NOTIFICATION_KEYRING_KEY_DELETE = "notification-keyring-key-delete";
const NOTIFICATION_KEYRING_SET_MNEMONIC = "notification-keyring-set-mnemonic";
const NOTIFICATION_KEYRING_RESET_MNEMONIC = "notification-keyring-reset-mnemonic";
const NOTIFICATION_KEYRING_STORE_CREATED = "notification-keyring-store-created";
const NOTIFICATION_KEYRING_STORE_LOCKED = "notification-keyring-store-locked";
const NOTIFICATION_KEYRING_STORE_RESET = "notification-keyring-store-reset";
const NOTIFICATION_KEYRING_STORE_UNLOCKED = "notification-keyring-store-unlocked";
const NOTIFICATION_NAVIGATION_URL_DID_CHANGE = "notification-navigation-url-did-change";
const NOTIFICATION_KEYRING_STORE_USERNAME_ACCOUNT_CREATED = "notification-username-account-created";
const NOTIFICATION_KEYRING_STORE_USER_AVATAR_UPDATED = "notification-user-avatar-updated";
const NOTIFICATION_KEYRING_STORE_ACTIVE_USER_UPDATED = "notification-active-user-updated";
const NOTIFICATION_KEYRING_STORE_REMOVED_USER = "notification-keyring-store-removed-user";
const NOTIFICATION_ACTIVE_BLOCKCHAIN_UPDATED = "notification-keyring-active-blockchain-updated";
const NOTIFICATION_XNFT_PREFERENCE_UPDATED = "notification-xnft-preference-updated";
// Ethereum specific notifications
const NOTIFICATION_ETHEREUM_ACTIVE_WALLET_UPDATED = "notification-keyring-ethereum-active-wallet-updated";
const NOTIFICATION_ETHEREUM_CHAIN_ID_UPDATED = "notification-ethereum-chain-id-updated";
const NOTIFICATION_ETHEREUM_CONNECTED = "notification-ethereum-connected";
const NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED = "notification-ethereum-connection-url-updated";
const NOTIFICATION_ETHEREUM_DISCONNECTED = "notification-ethereum-disconnected";
const NOTIFICATION_ETHEREUM_EXPLORER_UPDATED = "notification-ethereum-explorer-updated";
const NOTIFICATION_ETHEREUM_FEE_DATA_DID_UPDATE = "notification-ethereum-fee-data-did-update";
const NOTIFICATION_ETHEREUM_TOKENS_DID_UPDATE = "notification-ethereum-tokens-did-update";
// Solana specific notifications
const NOTIFICATION_SOLANA_ACTIVE_WALLET_UPDATED = "notification-keyring-solana-active-wallet-updated";
const NOTIFICATION_SOLANA_COMMITMENT_UPDATED = "notification-solana-commitment-updated";
const NOTIFICATION_SOLANA_CONNECTED = "notification-solana-connected";
const NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED = "notification-solana-connection-url-updated";
const NOTIFICATION_SOLANA_DISCONNECTED = "notification-solana-disconnected";
const NOTIFICATION_SOLANA_EXPLORER_UPDATED = "notification-solana-explorer-updated";
const NOTIFICATION_SOLANA_SPL_TOKENS_DID_UPDATE = "notification-solana-spl-tokens-did-update";
const NOTIFICATION_USER_ACCOUNT_AUTHENTICATED = "notification-user-account-authenticated";
const NOTIFICATION_USER_ACCOUNT_PUBLIC_KEYS_UPDATED = "notification-user-account-public-keys-updated";
const NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_CREATED = "notification-user-account-public-key-created";
const NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_DELETED = "notification-user-account-public-key-deleted";
//
// Ethereum web injected provider API.
//
const ETHEREUM_RPC_METHOD_CONNECT = "ethereum-connect";
const ETHEREUM_RPC_METHOD_SWITCH_CHAIN = "ethereum-switch-chain";
const ETHEREUM_RPC_METHOD_DISCONNECT = "ethereum-disconnect";
const ETHEREUM_RPC_METHOD_SIGN_TX = "ethereum-sign-tx";
const ETHEREUM_RPC_METHOD_SIGN_AND_SEND_TX = "ethereum-sign-and-send-tx";
const ETHEREUM_RPC_METHOD_SIGN_MESSAGE = "ethereum-sign-message";
//
// Solana web injected provider API.
//
const SOLANA_RPC_METHOD_CONNECT = "solana-connect";
const SOLANA_RPC_METHOD_DISCONNECT = "solana-disconnect";
const SOLANA_RPC_METHOD_SIGN_AND_SEND_TX = "solana-sign-and-send-tx";
const SOLANA_RPC_METHOD_SIGN_TX = "solana-sign-tx";
const SOLANA_RPC_METHOD_SIGN_ALL_TXS = "solana-sign-all-txs";
const SOLANA_RPC_METHOD_SIGN_MESSAGE = "solana-sign-message";
const SOLANA_RPC_METHOD_SIMULATE = "solana-simulate";
const SOLANA_RPC_METHOD_OPEN_XNFT = "solana-open-xnft";
//
// Ethereum connection api. These are the methods available for the background
// connection implementation (which the frontends use via message passing).
//
const ETHEREUM_PROVIDER_RPC_GET_BALANCE = "ethereum-provider-rpc-get-balance";
const ETHEREUM_PROVIDER_RPC_GET_CODE = "ethereum-provider-rpc-get-code";
const ETHEREUM_PROVIDER_RPC_GET_STORAGE_AT = "ethereum-provider-rpc-get-storage-at";
const ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_COUNT = "ethereum-provider-rpc-get-transaction-count";
const ETHEREUM_PROVIDER_RPC_GET_BLOCK = "ethereum-provider-rpc-get-block";
const ETHEREUM_PROVIDER_RPC_GET_BLOCK_WITH_TRANSACTIONS = "ethereum-provider-rpc-get-block-with-transactions";
const ETHEREUM_PROVIDER_RPC_GET_AVATAR = "ethereum-provider-rpc-get-avatar";
const ETHEREUM_PROVIDER_RPC_GET_RESOLVER = "ethereum-provider-rpc-get-resolver";
const ETHEREUM_PROVIDER_RPC_LOOKUP_ADDRESS = "ethereum-provider-rpc-lookup-address";
const ETHEREUM_PROVIDER_RPC_RESOLVE_NAME = "ethereum-provider-rpc-resolve-name";
const ETHEREUM_PROVIDER_RPC_GET_NETWORK = "ethereum-provider-rpc-get-network";
const ETHEREUM_PROVIDER_RPC_GET_BLOCK_NUMBER = "ethereum-provider-rpc-get-block-number";
const ETHEREUM_PROVIDER_RPC_GET_GAS_PRICE = "ethereum-provider-rpc-get-gas-price";
const ETHEREUM_PROVIDER_RPC_GET_FEE_DATA = "ethereum-provider-rpc-get-fee-data";
const ETHEREUM_PROVIDER_RPC_CALL = "ethereum-provider-rpc-call";
const ETHEREUM_PROVIDER_RPC_ESTIMATE_GAS = "ethereum-provider-rpc-estimate-gas";
const ETHEREUM_PROVIDER_RPC_GET_TRANSACTION = "ethereum-provider-rpc-get-transaction";
const ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_RECEIPT = "ethereum-provider-rpc-get-transaction-receipt";
const ETHEREUM_PROVIDER_RPC_WAIT_FOR_TRANSACTION = "ethereum-provider-rpc-wait-for-transaction";
//
// Solana connection api. These are the methods available for the background
// connection implementation (which the frontends use via message passing).
//
const SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO = "solana-get-account-info";
const SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO_AND_CONTEXT = "solana-get-account-info-and-context";
const SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH = "solana-get-latest-blockhash";
const SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH_AND_CONTEXT = "solana-get-latest-blockhash-and-context";
const SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNTS_BY_OWNER = "solana-get-token-accounts-by-owner";
const SOLANA_CONNECTION_RPC_SEND_RAW_TRANSACTION = "solana-send-raw-transaction";
const SOLANA_CONNECTION_RPC_CONFIRM_TRANSACTION = "solana-confirm-transaction";
const SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTIONS = "solana-get-parsed-transactions";
const SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTION = "solana-get-parsed-transaction";
const SOLANA_CONNECTION_GET_MULTIPLE_ACCOUNTS_INFO = "solana-get-multiple-accounts-info";
const SOLANA_CONNECTION_RPC_GET_CONFIRMED_SIGNATURES_FOR_ADDRESS_2 = "solana-get-confirmed-signatures-for-address-2";
const SOLANA_CONNECTION_RPC_CUSTOM_SPL_TOKEN_ACCOUNTS = "solana-custom-spl-token-accounts";
const SOLANA_CONNECTION_RPC_CUSTOM_SPL_METADATA_URI = "solana-custom-spl-metadata-uri";
const SOLANA_CONNECTION_RPC_GET_PROGRAM_ACCOUNTS = "solana-get-program-accounts";
const SOLANA_CONNECTION_RPC_GET_FEE_FOR_MESSAGE = "solana-get-fee-for-message";
const SOLANA_CONNECTION_RPC_GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION = "solana-get-minimum-balance-for-rent-exemption";
const SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNT_BALANCE = "get-token-account-balance";
const SOLANA_CONNECTION_RPC_GET_BALANCE = "solana-get-balance";
const SOLANA_CONNECTION_RPC_GET_SLOT = "solana-get-slot";
const SOLANA_CONNECTION_RPC_GET_BLOCK_TIME = "solana-get-block-time";
const SOLANA_CONNECTION_RPC_GET_PARSED_TOKEN_ACCOUNTS_BY_OWNER = "solana-get-parsed-token-accounts-by-owner";
const SOLANA_CONNECTION_RPC_GET_TOKEN_LARGEST_ACCOUNTS = "solana-get-token-largest-accounts";
const SOLANA_CONNECTION_RPC_GET_ADDRESS_LOOKUP_TABLE = "solana-get-address-lookup-table";
const SOLANA_CONNECTION_RPC_GET_PARSED_ACCOUNT_INFO = "solana-get-parsed-account-info";
const SOLANA_CONNECTION_RPC_GET_PARSED_PROGRAM_ACCOUNTS = "solana-get-parsed-program-accounts";
//
// Ledger API.
//
const LEDGER_IFRAME_URL = _generated_config__WEBPACK_IMPORTED_MODULE_0__.BACKPACK_CONFIG_VERSION === "development" ? "https://localhost:4443/dist" : "https://coral-xyz.github.io/ledger-injection/";
const LEDGER_INJECTED_CHANNEL_REQUEST = "ledger-injected-request";
const LEDGER_INJECTED_CHANNEL_RESPONSE = "ledger-injected-response";
const LEDGER_METHOD_UNLOCK = "ledger-method-unlock";
const LEDGER_METHOD_SOLANA_SIGN_TRANSACTION = "ledger-method-solana-sign-transaction";
const LEDGER_METHOD_SOLANA_SIGN_MESSAGE = "ledger-method-solana-sign-message";
const LEDGER_METHOD_ETHEREUM_SIGN_TRANSACTION = "ledger-method-ethereum-sign-transaction";
const LEDGER_METHOD_ETHEREUM_SIGN_MESSAGE = "ledger-method-ethereum-sign-message";
const LEDGER_METHOD_ETHEREUM_SIGN_EIP712_MESSAGE = "ledger-method-ethereum-sign-eip712-message";
const LEDGER_METHOD_ETHEREUM_SIGN_EIP712_HASHED_MESSAGE = "ledger-method-ethereum-sign-eip712-hashed-message";
const PLUGIN_RPC_METHOD_WINDOW_OPEN = "rpc-method-window-open";
const PLUGIN_RPC_METHOD_PLUGIN_OPEN = "rpc-method-plugin-open";
const PLUGIN_RPC_METHOD_CHAT_OPEN = "rpc-method-plugin-close-to";
const PLUGIN_RPC_METHOD_CLOSE_TO = "rpc-method-chat-open";
const PLUGIN_RPC_METHOD_POP_OUT = "rpc-method-pop-out";
const PLUGIN_RPC_METHOD_RESIZE_EXTENSION_WINDOW = "rpc-method-resize-extension-window";
const BACKGROUND_SERVICE_WORKER_READY = "service-worker-ready";
const POST_MESSAGE_ORIGIN = "*";
const EXTENSION_WIDTH = 375;
const EXTENSION_HEIGHT = 600;
//
// UI View Model Constants.
//
const TAB_BALANCES = "balances";
const TAB_SWAP = "swap";
const TAB_NFTS = "nfts";
const TAB_MESSAGES = "messages";
const TAB_APPS = "apps";
const TAB_XNFT = "xnft";
const TAB_RECENT_ACTIVITY = "recent-activity";
const TAB_NOTIFICATIONS = "notifications";
const TAB_SET = new Set([
    TAB_BALANCES,
    TAB_SWAP,
    TAB_NFTS,
    TAB_APPS,
    TAB_MESSAGES,
    TAB_XNFT,
    TAB_RECENT_ACTIVITY,
    TAB_NOTIFICATIONS
]);
const NAV_COMPONENT_TOKEN = "balances/token";
const NAV_COMPONENT_NFT_DETAIL = "nfts/detail";
const NAV_COMPONENT_NFT_COLLECTION = "nfts/collection";
const NAV_COMPONENT_NFT_EXPERIENCE = "nfts/experience";
const NAV_COMPONENT_NFT_CHAT = "nfts/chat";
const NAV_COMPONENT_CONTACTS = "contacts";
const NAV_COMPONENT_MESSAGE_CHAT = "messages/chat";
const NAV_COMPONENT_MESSAGE_GROUP_CHAT = "messages/groupchat";
const NAV_COMPONENT_MESSAGE_PROFILE = "messages/profile";
const NAV_COMPONENT_MESSAGE_REQUESTS = "messages/requests";
const NAV_COMPONENT_XNFT = "xnft/*";
const BACKEND_EVENT = "backend-event";
//
// Popup query routes.
//
const QUERY_LOCKED = "locked=true";
const QUERY_LOCKED_APPROVAL = "locked-approval=true";
const QUERY_APPROVAL = "approve-origin=true";
const QUERY_APPROVE_TRANSACTION = "approve-tx=true";
const QUERY_APPROVE_ALL_TRANSACTIONS = "approve-all-txs=true";
const QUERY_APPROVE_MESSAGE = "approve-message=true";
const QUERY_CONNECT_HARDWARE = "connect-hardware=true";
const QUERY_ONBOARDING = "onboarding=true";
const QUERY_ADD_USER_ACCOUNT = "add-user-account=true";
const SIMULATOR_PORT = 9933;
const NATIVE_ACCOUNT_RENT_EXEMPTION_LAMPORTS = 890880;
const TOKEN_ACCOUNT_RENT_EXEMPTION_LAMPORTS = 2039280;
const DISCORD_INVITE_LINK = "https://discord.gg/RhKxgS8SaD";
const TWITTER_LINK = "https://twitter.com/xNFT_Backpack";
const XNFT_GG_LINK = "https://xnft.gg";
const BACKPACK_LINK = "https://backpack.app";
const BACKPACK_TERMS_OF_SERVICE = "https://backpack.app/terms";
const BACKPACK_GITHUB_LINK = "https://github.com/coral-xyz/backpack";
const AVATAR_BASE_URL = "https://swr.xnfts.dev/avatars";
const BACKEND_API_URL = "https://backpack-api.xnfts.dev";
const REALTIME_API_URL = "https://backend-ws.xnfts.dev";
const REALTIME_WS_URL = "wss://backend-ws.xnfts.dev";
const MESSAGING_COMMUNICATION_PUSH = "MESSAGING_COMMUNICATION_PUSH";
const MESSAGING_COMMUNICATION_FETCH = "MESSAGING_COMMUNICATION_FETCH";
const MESSAGING_COMMUNICATION_FETCH_RESPONSE = "MESSAGING_COMMUNICATION_FETCH_RESPONSE";
// Image displayed in the event of a broken NFT.
const UNKNOWN_NFT_ICON_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAn/SURBVHgB7d1BbhRnGgbg7y+3rWhWnht4bkBOEGcZBRJYAwIvBsaaRcIJYp8gZoUgiwYBazIDTJYhJwg5wfgG4+XI7q5/ugxEo6gxVdVtXFV+Hgk17sZYokW9/f5f/VURAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKclBZyi8fjZ+tHa2kbE9ELOxXrkvB6crpQOUioPUpn2R5PJ662tKwcBp0CAsHRVaEzW1r7JOW/miM3gTM3+k7+KVD6aHq6+2t76Yj9gSQQIS/MuOMqcv519qWl0UIr0cHpU7AoSlkGAsBQPHv/rm5zKnRAc3ZfTfiqmu7eufvUwYAEChIXdf/Li+9nDt0GvFCnt/PXql7sBLQkQFvLg6YtxznEz6KWU4uGtqxe3AlooAlr64enL74RHv1Xv39sGCY1pILRy7+k/bxa5GAdDcef2tYt7AQ0IEBq7N/5poxiVP0fKG8FQHKwdHf3FnhGasIRFY8VosiM8Bmf9cDRyIgSNaCA0ctw+Vqf/DoZIC6ERDYRm1o42g6HSQmhEgNDISi5uBIOVUvosoCZLWNRWXarkcHX1P8GgzZax/mwZizo0EGqbjEYXgsF7c/Vk+DABQm2TwplX58PUBwVqESDUVkwLF0o8B47v2wI1CBDqS24GdS646Rc1CRAAWhEgALQiQABoRYAA0IoAAaAVAQJAKwIEgFYECACtCBAAWhEgALQyChiug5Tzo2mRX0eZ9qsnipQupIivc8RmAAsRIAzRQUrlnVtXv3o457VXs197x7fmHZU/u7c7tGcJi2HJab88Wvn0PeHxu+2tL/ZvX//yL2XkRwG0IkAYjio8JsXnVTjU/Zbta5dupjetBGhIgDAYqZjuNgmPd6ZHK1uzB7dwhYYECMMwax8fWrZ6n+PQyfkfATQiQBiElBZehvoxgEYECIOQI/8WCygno9cBNCJAGISUyoVmGG1mJ3DeCRCYqfaFBNCIAGEg0oVYwGg02QigEQHCIOScbsQCyoibATQiQBiK9XuPn29GC8fLVyl9HUAjAoTBKKIYj8fP1qOhYjTZmT00/j447wQIw5HyxtHq6s9NQuSHpy+/m7WPhZa/4LwSIAxKjrhwOFr79cHTlycO1atlq/uPXz4rc94JoBWXc2d4Zk0k5/j1wZMXryKVj1KZ9keT0X710tHa0Wbklc9yTC/Hx1m2erc/xRIZgyNAGKzjm0blYjOniMPV6dsnizevfBx3bl+7uFf95v7j55dnS2XjECQMiCUsOAWzpbHdd+FRuX390o9lKu8EDIgAgWXL+bft65d2/vj0dnW14Pzm1rowBAIElun4plajy+97uSymuwEDIUBgqco7J12YUQthSAQILMnx3GM26/jgn9NCGAgBAsvwnrnHPFoIQyFAYFEfmHvMo4UwBAIEFnby3GMeLYQhECCwgLpzj7nfq4XQcwIE2mow95hHC6HvBAi00WLuMY8WQp8JEGil+dxjHi2EPhMg0NAic4+5f58WQk8JEGhiwbnHPFoIfSVAoK4lzT3m0ULoIwFC76VIs0/weTdFvIpTtZy5xzxaCH3khlL02iSlT/9+9cvX776+9/j5TpHSd7Fk1dxje4lzj7k/Y9ZCilyMA3pCA6G3qoP6/4dH5Xg+kdNyD/SnMPeYRwuhbwQI/TQ70H4ymezNe2ltcri1tAPxKc495jELoU8ECL2UZgfara0rB/Neq54vJ8XnywmR05t7zKOF0CcChN6phua3qgPtCaqD/qSIK7GAZe/3qP1ztRB6QoDQL7NP59OjotYB9u185E608ZHmHvNoIfSFAKFfUr7bZEnp9rWLe1WTiCY+8txjHi2EPhAg9MfswF4FQjTU/Mysjzv3mEcLoQ8ECL1xPBhvqe6ZWWc195hHC6HrBAi9cLyRb4FWUOvMrDOce8yjhdB1AoTuO2HPRxMnnpnVgbnHPFoIXSZA6LyT9nw09f4zs85+7jGPFkKXCRA6rc6ej6b+eGZWl+Ye82ghdJUAobsa7Plo6vczszo295hHC6GrBAjd1XDPR1PVmVldnHvMo4XQRQKEbmq556OJaq7SxbnHPFoIXSRA6KRF9nwMlRZC1wgQOmfRPR9DpYXQNQKEblnSno+h0kLoEgFCpyxzz8cQaSF0iQChM05jz8cQaSF0hQChG05xz8fQaCF0hQChG055z8fQaCF0gQDh7H2EPR9Ds/1mqc+siDMlQDhzKeX9oLEU8TrgDAkQzlyOuDAeP1sPGsk5bQScoVHA2Vs/Wlv9fva4FXxQFbbVv1fOeSPgDAkQOiHnuHn/yYvLlmU+aP0wYmNW2zQ2zpwAoUvWZ8tZmwH0ghkIAK0IEABaESAAtCJAAGhFgADQigABoBUBAkArAgSAVgQIAK0IEABaESAAtCJAAGhFgADQigABoBUBAkArAoT6cjoIhi95n6lHgFBbuVI6sJwDKXmfqUeAUNvK4YrbzZ4D0zLtB9QgQKhtNQ73g8H7ZDLxQYFaBAi1bW1dOUgRr4LBqt7f6n0OqEGA0EjO+ZdguFL5KKAmAUIja5PJ3uzBJ9SBmh6uvgqoSYDQyPHyRs53g8FJkR5ub32xH1CTAKExLWSActqfHhW7AQ0IEBp7O2R1sBmQVEx3tQ+aEiC0cvvaxb1sKWsQypx3b1396mFAQylgAfeePH9YRLoR9FIZ+dH2tUs3A1rQQFhIdfCpPsEGvZNTvis8WIQAYWHb1y/tlKncqgaxQR9UM6w7f7t66duABVjCYmnujX/aKEaTnUiWtDrqYNYW734ymezZbc4yCBCWrgqSWDvaXMnFjRyxGZyp6vIk05x/ERwsmwDhVI3Hz9b/OxpdiCJvFLlYj5zXg9OV0sFsSfGgjJXXfzo83BcaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAOfE/LtdE1TuetHUAAAAASUVORK5CYII=";
const DEFAULT_GROUP_CHATS = [
    {
        id: "backpack-chat",
        name: "Backpack",
        image: "https://user-images.githubusercontent.com/321395/206757416-a80e662a-0ccc-41cc-a20f-ff397755d47f.png"
    }
];
const WHITELISTED_CHAT_COLLECTIONS = [
    {
        id: "nouns",
        name: "Y00ts + Nouns",
        image: "https://metadata.y00ts.com/y/12189.png",
        collectionId: "4mKSoDDqApmF1DqXvVTSL6tu2zixrSSNjqMxUnwvVzy2",
        attributeMapping: {
            Eyewear: "Nouns"
        }
    },
    {
        id: "nokiamon",
        name: "Nokiamon",
        image: "https://madlist-images.s3.us-west-2.amazonaws.com/nokiamon_pfp_1675332500467.png",
        collectionId: "3YysdoK6ZcJFEL5QJxccY3q8AcTUFpahgbp4HFgBtjNF"
    },
    {
        id: "backpack-chat-internal",
        name: "Backpack Team",
        image: "https://one.xnfts.dev/BackpackTeamNFT.gif",
        collectionId: "BjN9u6zneFrjzuC7LH3eLaGC9FgYLnwQJMGA1xzVBKsj"
    },
    {
        id: "bonkz",
        name: "BONKz",
        image: "https://bafybeiecuemcqxzuv4ti4sgffjlwvrqedr7golppwrbbu2u5yttglath3m.ipfs.nftstorage.link/0.png",
        collectionId: "ajM4QBHtZBBRcMqqq9gawdHK28GXcb2yeRs6WBnqhay"
    },
    {
        id: "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
        name: "Mad Lads",
        image: "https://www.madlads.com/mad_lads_logo.svg",
        collectionId: "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w"
    },
    {
        id: "Et9ckpQCXFN5PsiYN781AczSVuQYyGEdDEPDJ7jrxz4c",
        name: "Sporting F1",
        image: "https://arweave.net/Dh3FfZurEtmQD52mmq-axte9M6IMKmNSGzzdTpN9sJc?ext=png",
        collectionId: "Et9ckpQCXFN5PsiYN781AczSVuQYyGEdDEPDJ7jrxz4c"
    },
    {
        id: "4wUE3tH2MTjNnxKQPYyx3owgL95ZYbYAtW1EsQPz9hfV",
        name: "ROGUE SHARKS",
        image: "https://www.arweave.net/1f5b49zDrkC9Lot6jKFMCzyeZ57DSK8x_KkFvCFNtek?ext=png",
        collectionId: "4wUE3tH2MTjNnxKQPYyx3owgL95ZYbYAtW1EsQPz9hfV"
    }
];
// Load a fixed amount of public keys for various actions, e.g. import list,
// searching mnemonics
const LOAD_PUBLIC_KEY_AMOUNT = 20;
const DEFAULT_PUBKEY_STR = "11111111111111111111111111111111";
const MOBILE_CHANNEL_LOGS = "mobile-logs";
const BACKPACK_TEAM = [
    "ee7ce804-44b2-4360-bfbb-28e14cd0499b",
    "29c33e60-d54a-4fe4-80e9-4bbfcc6c69b8",
    "446a5f21-35b9-4248-970f-7b4558f57e21",
    "6ecf7d82-095d-4fa3-9830-3567b286066d",
    "68daeda7-2c20-49ea-9dab-f7a3ebd45ab5",
    "931fac1c-0fb1-4e0a-9119-0a9112506db1",
    "47dd7685-8eb1-4d4e-bbab-b7790eebb2b9",
    "b580347f-2ec8-4600-8af1-0f5982dc93e1",
    "b6615f78-b096-4d50-b247-05db6fe74ea4",
    "7c01a3a2-dc39-4369-afb8-0dd2189412fc",
    "50752e18-8796-4702-b140-a3d78960ee94"
]; //# sourceMappingURL=constants.js.map


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

/***/ "../common/dist/esm/crypto.js":
/*!************************************!*\
  !*** ../common/dist/esm/crypto.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HARDENING": () => (/* binding */ HARDENING),
/* harmony export */   "blockchainCoinType": () => (/* binding */ blockchainCoinType),
/* harmony export */   "ethereumIndexed": () => (/* binding */ ethereumIndexed),
/* harmony export */   "getAccountRecoveryPaths": () => (/* binding */ getAccountRecoveryPaths),
/* harmony export */   "getCoinType": () => (/* binding */ getCoinType),
/* harmony export */   "getIndexedPath": () => (/* binding */ getIndexedPath),
/* harmony export */   "getRecoveryPaths": () => (/* binding */ getRecoveryPaths),
/* harmony export */   "legacyBip44ChangeIndexed": () => (/* binding */ legacyBip44ChangeIndexed),
/* harmony export */   "legacyBip44ChangeRecoveryPaths": () => (/* binding */ legacyBip44ChangeRecoveryPaths),
/* harmony export */   "legacyBip44Indexed": () => (/* binding */ legacyBip44Indexed),
/* harmony export */   "legacyBip44RecoveryPaths": () => (/* binding */ legacyBip44RecoveryPaths),
/* harmony export */   "legacyEthereum": () => (/* binding */ legacyEthereum),
/* harmony export */   "legacyLedgerIndexed": () => (/* binding */ legacyLedgerIndexed),
/* harmony export */   "legacyLedgerLiveAccount": () => (/* binding */ legacyLedgerLiveAccount),
/* harmony export */   "legacySolletIndexed": () => (/* binding */ legacySolletIndexed),
/* harmony export */   "nextIndicesFromPaths": () => (/* binding */ nextIndicesFromPaths)
/* harmony export */ });
/* harmony import */ var bip32_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bip32-path */ "../../node_modules/bip32-path/index.js");
/* harmony import */ var bip32_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bip32_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "../common/dist/esm/types.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");




const HARDENING = 0x80000000;
// TODO could use SLIP44
const blockchainCoinType = {
    [_types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.ETHEREUM]: 60,
    [_types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.SOLANA]: 501
};
const getCoinType = (blockchain)=>{
    const coinType = blockchainCoinType[blockchain];
    if (!coinType) {
        throw new Error("Invalid blockchain");
    }
    return coinType + HARDENING;
};
const legacyBip44Indexed = (blockchain, index)=>{
    const coinType = getCoinType(blockchain);
    const path = [
        44 + HARDENING,
        coinType
    ];
    if (index > 0) path.push(index - 1 + HARDENING);
    return new (bip32_path__WEBPACK_IMPORTED_MODULE_0___default().fromPathArray)(path).toString();
};
const legacyBip44ChangeIndexed = (blockchain, index)=>{
    const coinType = getCoinType(blockchain);
    const path = [
        44 + HARDENING,
        coinType,
        index + HARDENING,
        0 + HARDENING
    ];
    return new (bip32_path__WEBPACK_IMPORTED_MODULE_0___default().fromPathArray)(path).toString();
};
/**
 * m/44'/60'/0'/0/x
 */ const ethereumIndexed = (index)=>{
    const coinType = getCoinType(_types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.ETHEREUM);
    const path = [
        44 + HARDENING,
        coinType,
        0 + HARDENING,
        0,
        index
    ];
    return new (bip32_path__WEBPACK_IMPORTED_MODULE_0___default().fromPathArray)(path).toString();
};
/**
 * m/44'/60'/x
 */ const legacyEthereum = (index)=>{
    const coinType = getCoinType(_types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.ETHEREUM);
    const path = [
        44 + HARDENING,
        coinType,
        index
    ];
    return new (bip32_path__WEBPACK_IMPORTED_MODULE_0___default().fromPathArray)(path).toString();
};
/**
 * m/44'/60'/0'/x
 */ const legacyLedgerIndexed = (index)=>{
    const coinType = getCoinType(_types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.ETHEREUM);
    const path = [
        44 + HARDENING,
        coinType,
        0 + HARDENING,
        index
    ];
    return new (bip32_path__WEBPACK_IMPORTED_MODULE_0___default().fromPathArray)(path).toString();
};
/**
 * m/44'/60'/x'/0/0
 */ const legacyLedgerLiveAccount = (accountIndex)=>{
    const coinType = getCoinType(_types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.ETHEREUM);
    const path = [
        44 + HARDENING,
        coinType,
        accountIndex + HARDENING,
        0,
        0
    ];
    return new (bip32_path__WEBPACK_IMPORTED_MODULE_0___default().fromPathArray)(path).toString();
};
const legacySolletIndexed = (index)=>{
    const coinType = 501 + HARDENING;
    const path = [
        coinType,
        index + HARDENING,
        0,
        0
    ];
    return new (bip32_path__WEBPACK_IMPORTED_MODULE_0___default().fromPathArray)(path).toString();
};
// Get the nth index account according to the Backpack derivation path scheme
const getIndexedPath = (blockchain, accountIndex = 0, walletIndex = 0)=>{
    const coinType = getCoinType(blockchain);
    const path = [
        44 + HARDENING,
        coinType,
        accountIndex + HARDENING,
        0 + HARDENING
    ];
    if (walletIndex >= 0) path.push(walletIndex + HARDENING);
    return new (bip32_path__WEBPACK_IMPORTED_MODULE_0___default().fromPathArray)(path).toString();
};
//
// Legacy scheme for newly created wallets
//
//     m/44/501'/ and m/44/501'/{0...n}
//
const legacyBip44RecoveryPaths = (blockchain)=>{
    return [
        ...Array(_constants__WEBPACK_IMPORTED_MODULE_1__.LOAD_PUBLIC_KEY_AMOUNT).keys()
    ].map((i)=>legacyBip44Indexed(blockchain, i));
};
//
// Legacy scheme for newly created wallets
//
//     m/44/501'/{0...n}'/0'
//
const legacyBip44ChangeRecoveryPaths = (blockchain)=>{
    return [
        ...Array(_constants__WEBPACK_IMPORTED_MODULE_1__.LOAD_PUBLIC_KEY_AMOUNT).keys()
    ].map((i)=>legacyBip44ChangeIndexed(blockchain, i));
};
const getAccountRecoveryPaths = (blockchain, accountIndex)=>{
    return [
        ...Array(_constants__WEBPACK_IMPORTED_MODULE_1__.LOAD_PUBLIC_KEY_AMOUNT + 1).keys()
    ].map((j)=>getIndexedPath(blockchain, accountIndex, j - 1));
};
//
// Get a sensible account and wallet index from a list of derivation paths.
//
const nextIndicesFromPaths = (derivationPaths)=>{
    if (derivationPaths.length === 0) {
        return {
            accountIndex: 0,
            walletIndex: 0
        };
    }
    const pathArrays = derivationPaths.map((x)=>bip32_path__WEBPACK_IMPORTED_MODULE_0___default().fromString(x).toPathArray());
    function isDefined(argument) {
        return argument !== undefined;
    }
    const accountIndices = pathArrays.map((p)=>p ? p[2] : undefined).filter(isDefined);
    // If there is no account indices we likely have `m/44/501'`
    if (accountIndices.length == 0) {
        return {
            accountIndex: 0,
            walletIndex: -1
        };
    }
    const accountIndex = Math.max(...accountIndices.map((i)=>i >= HARDENING ? i - HARDENING : i));
    const pathsForMaxAccountIndex = pathArrays.filter((p)=>p[2] === Math.max(...accountIndices) // Maintain hardening to filter
    );
    const walletIndices = pathsForMaxAccountIndex.map((p)=>p ? p[4] : undefined).filter(isDefined);
    // If there are no wallet indices we likely have `m/44/501'/0'/0'`
    if (walletIndices.length === 0) {
        return {
            accountIndex: 0,
            walletIndex: 0
        };
    }
    const walletIndex = Math.max(...walletIndices.map((i)=>i >= HARDENING ? i - HARDENING : i)) + 1; // Increment by 1 to get the next wallet index that should be used
    return {
        accountIndex,
        walletIndex
    };
};
const getRecoveryPaths = (blockchain, ledger = false)=>{
    /**
     * There is a fixed set of derivation paths we should check for wallets when
     * doing recovery.
     *
     * Created wallets from the legacy derivation scheme used by Backpack were
     *
     *     m/44/501'/ and m/44/501'/{0...n}' (bip44)
     *
     * It was possible to import and then derive more wallets from the paths:
     *
     *     m/44/501'/ and m/44/501'/{0...n} (bip44)
     *     m/44/501'/{0...n}'/0' (bip44change)
     *
     * Under the new derivation path scheme created wallets use the derivation
     * paths:
     *
     *     1st account: m/44/501'/, m/44/501'/0', and m/44/501'/0'/0/{0...n}
     *     2nd account: m/44/501'/1'/0', and m/44/501'/1'/0'/{0...n}
     *     3rd account: m/44/501'/2'/0', and m/44/501'/2'/0'/{0...n}
     *     etc
     *
     */ // Build an array of derivation paths to search for recovery
    let paths = [];
    // Legacy created/imported accounts (m/44/501'/ and m/44/501'/{0...n})
    paths = paths.concat(legacyBip44RecoveryPaths(blockchain));
    // Legacy imported accounts (m/44/501'/0' and m/44/501'/{0..n}'/0')
    paths = paths.concat(legacyBip44ChangeRecoveryPaths(blockchain));
    // Legacy imported accounts (m/44/501'/{0...n})/0'/0'
    paths = paths.concat(legacyBip44ChangeRecoveryPaths(blockchain).map((x)=>x + "/0'"));
    if (blockchain === _types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.SOLANA && !ledger) {
        // Handle legacy Solana wallets that were created in 0.5.0 that had
        // Ethereum derivation paths. Ledger does not allow these paths and
        // so is not impacted by this.
        paths = paths.concat(getAccountRecoveryPaths(_types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.SOLANA, 0).map((d)=>d.replace("501", "60")));
    } else if (blockchain === _types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.ETHEREUM) {
        paths = paths.concat([
            ...Array(_constants__WEBPACK_IMPORTED_MODULE_1__.LOAD_PUBLIC_KEY_AMOUNT).keys()
        ].map(legacyEthereum));
        paths = paths.concat([
            ...Array(_constants__WEBPACK_IMPORTED_MODULE_1__.LOAD_PUBLIC_KEY_AMOUNT).keys()
        ].map(ethereumIndexed));
        paths = paths.concat([
            ...Array(_constants__WEBPACK_IMPORTED_MODULE_1__.LOAD_PUBLIC_KEY_AMOUNT).keys()
        ].map(legacyLedgerIndexed));
        paths = paths.concat([
            ...Array(_constants__WEBPACK_IMPORTED_MODULE_1__.LOAD_PUBLIC_KEY_AMOUNT).keys()
        ].map(legacyLedgerLiveAccount));
    }
    // TODO
    // How many accounts should be searched before giving up? It's possible that
    // the user created up to the nth account and deleted all the rest
    const numAccounts = 2;
    // New derivation path scheme, search the first `LOAD_PUBLIC_KEY_AMOUNT`
    // indexes on the first `numAccounts` account paths
    paths = paths.concat([
        ...Array(numAccounts).keys()
    ].map((j)=>getAccountRecoveryPaths(blockchain, j)).flat());
    // Deduplicate and return
    return [
        ...new Set(paths)
    ];
}; //# sourceMappingURL=crypto.js.map


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

/***/ "../common/dist/esm/ethereum/background-provider.js":
/*!**********************************************************!*\
  !*** ../common/dist/esm/ethereum/background-provider.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundEthereumProvider": () => (/* binding */ BackgroundEthereumProvider)
/* harmony export */ });
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ "../../node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/providers */ "../../node_modules/@ethersproject/providers/lib.esm/json-rpc-provider.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");





//
// Subclass ethers BaseProvider to route all requests through the background client.
//
// TODO: check ethers events setup and see if it works.
//
class BackgroundEthereumProvider extends _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__.JsonRpcProvider {
    constructor(backgroundClient, connectionUrl, chainId){
        super(connectionUrl, chainId ? parseInt(chainId) : undefined);
        this._backgroundClient = backgroundClient;
    }
    async getBalance(address, blockTag) {
        const result = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_BALANCE,
            params: [
                address,
                blockTag
            ]
        });
        return result;
    }
    async getCode(address, blockTag) {
        const params = await (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.resolveProperties)({
            address,
            blockTag
        });
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_CODE,
            params: [
                params.address,
                params.blockTag
            ]
        });
    }
    async getStorageAt(address, position, blockTag) {
        const params = await (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.resolveProperties)({
            address,
            position,
            blockTag
        });
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_STORAGE_AT,
            params: [
                params.address,
                params.position,
                params.blockTag
            ]
        });
    }
    async getTransactionCount(address, blockTag) {
        const params = await (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.resolveProperties)({
            address,
            blockTag
        });
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_COUNT,
            params: [
                params.address,
                params.blockTag
            ]
        });
    }
    async getBlock() {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_BLOCK,
            params: []
        });
    }
    async getBlockWithTransactions() {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_BLOCK_WITH_TRANSACTIONS,
            params: []
        });
    }
    async getAvatar(address) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_AVATAR,
            params: [
                address
            ]
        });
    }
    async getResolver(address) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_RESOLVER,
            params: [
                address
            ]
        });
    }
    async lookupAddress(address) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_LOOKUP_ADDRESS,
            params: [
                address
            ]
        });
    }
    async resolveName(name) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_RESOLVE_NAME,
            params: [
                name
            ]
        });
    }
    async getNetwork() {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_NETWORK,
            params: []
        });
    }
    async getBlockNumber() {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_BLOCK_NUMBER,
            params: []
        });
    }
    async getGasPrice() {
        const result = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_GAS_PRICE,
            params: []
        });
        return ethers__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(result);
    }
    async getFeeData() {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_FEE_DATA,
            params: []
        });
    }
    async call(transaction) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_CALL,
            params: [
                transaction
            ]
        });
    }
    async estimateGas(transaction) {
        const result = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_ESTIMATE_GAS,
            params: [
                transaction
            ]
        });
        return ethers__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(result);
    }
    async getTransaction(hash) {
        const tx = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_TRANSACTION,
            params: [
                hash
            ]
        });
        // Wrap it with ethers _wrapTransaction to rehydrate the .wait function
        return this._wrapTransaction(tx);
    }
    async getTransactionReceipt(hash) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_RECEIPT,
            params: [
                hash
            ]
        });
    }
    async waitForTransaction(hash) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_WAIT_FOR_TRANSACTION,
            params: [
                hash
            ]
        });
    }
    //
    // Not implemented
    //
    async getLogs(_filter) {
        throw new Error("not implemented");
    }
} //# sourceMappingURL=background-provider.js.map


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

/***/ "../common/dist/esm/ethereum/connection-url.js":
/*!*****************************************************!*\
  !*** ../common/dist/esm/ethereum/connection-url.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthereumChainIds": () => (/* binding */ EthereumChainIds),
/* harmony export */   "EthereumConnectionUrl": () => (/* binding */ EthereumConnectionUrl)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

const EthereumConnectionUrl = {
    MAINNET: `https://swr.xnfts.dev/ethereum-rpc-proxy`,
    GOERLI: "https://eth-goerli.g.alchemy.com/v2/6QnM1O0pB17Qo47Cw9qMipDGWX7xAVWc",
    LOCALNET: "http://localhost:8545",
    DEFAULT: ({"__DEV__":true,"IS_STATIC":"","NODE_ENV":"development","TAMAGUI_TARGET":"web","DEBUG":"0"}).DEFAULT_ETHEREUM_CONNECTION_URL || "https://swr.xnfts.dev/ethereum-rpc-proxy"
};
const EthereumChainIds = {
    "0x1": "MAINNET",
    "0x5": "GOERLI"
}; //# sourceMappingURL=connection-url.js.map


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

/***/ "../common/dist/esm/ethereum/explorer.js":
/*!***********************************************!*\
  !*** ../common/dist/esm/ethereum/explorer.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthereumExplorer": () => (/* binding */ EthereumExplorer)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

const EthereumExplorer = {
    ETHERSCAN: "https://etherscan.io",
    DEFAULT: "https://etherscan.io"
}; //# sourceMappingURL=explorer.js.map


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

/***/ "../common/dist/esm/ethereum/index.js":
/*!********************************************!*\
  !*** ../common/dist/esm/ethereum/index.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundEthereumProvider": () => (/* reexport safe */ _background_provider__WEBPACK_IMPORTED_MODULE_1__.BackgroundEthereumProvider),
/* harmony export */   "ETH_NATIVE_MINT": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.ETH_NATIVE_MINT),
/* harmony export */   "Ethereum": () => (/* binding */ Ethereum),
/* harmony export */   "EthereumChainIds": () => (/* reexport safe */ _connection_url__WEBPACK_IMPORTED_MODULE_2__.EthereumChainIds),
/* harmony export */   "EthereumConnectionUrl": () => (/* reexport safe */ _connection_url__WEBPACK_IMPORTED_MODULE_2__.EthereumConnectionUrl),
/* harmony export */   "EthereumExplorer": () => (/* reexport safe */ _explorer__WEBPACK_IMPORTED_MODULE_3__.EthereumExplorer),
/* harmony export */   "UniswapTokenList": () => (/* reexport safe */ _tokens_uniswap__WEBPACK_IMPORTED_MODULE_5__.UniswapTokenList),
/* harmony export */   "ethereumTokenData": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.ethereumTokenData),
/* harmony export */   "fetchEthereumBalances": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.fetchEthereumBalances),
/* harmony export */   "fetchEthereumTokenBalances": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.fetchEthereumTokenBalances)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/contracts/lib.esm/index.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ "../common/dist/esm/ethereum/provider.js");
/* harmony import */ var _background_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background-provider */ "../common/dist/esm/ethereum/background-provider.js");
/* harmony import */ var _connection_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection-url */ "../common/dist/esm/ethereum/connection-url.js");
/* harmony import */ var _explorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explorer */ "../common/dist/esm/ethereum/explorer.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token */ "../common/dist/esm/ethereum/token.js");
/* harmony import */ var _tokens_uniswap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens-uniswap */ "../common/dist/esm/ethereum/tokens-uniswap.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");








class Ethereum {
    static async transferEth(ctx, req) {
        const unsignedTx = await Ethereum.transferEthTransaction(ctx, req);
        return await Ethereum.signAndSendTransaction(ctx, unsignedTx);
    }
    static async transferEthTransaction(ctx, req) {
        var _a, _b, _c, _d, _e, _f;
        // Hack: no way to generate an UnsignedTransaction like there is for contracts?
        return Object.fromEntries(Object.entries({
            to: req.to,
            value: ethers__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(req.value),
            type: (_a = req.type) !== null && _a !== void 0 ? _a : null,
            nonce: (_b = req.nonce) !== null && _b !== void 0 ? _b : undefined,
            gasLimit: (_c = req.gasLimit) !== null && _c !== void 0 ? _c : null,
            gasPrice: (_d = req.gasPrice) !== null && _d !== void 0 ? _d : null,
            maxFeePerGas: (_e = req.maxFeePerGas) !== null && _e !== void 0 ? _e : null,
            maxPriorityFeePerGas: (_f = req.maxPriorityFeePerGas) !== null && _f !== void 0 ? _f : null
        }).filter(([_, v])=>v != null));
    }
    static async transferErc20(ctx, req) {
        const unsignedTx = await Ethereum.transferErc20Transaction(ctx, req);
        return await Ethereum.signAndSendTransaction(ctx, unsignedTx);
    }
    static async transferErc20Transaction(ctx, req) {
        var _a, _b, _c, _d, _e, _f;
        const abi = [
            "function transfer(address to, uint amount) returns (bool)"
        ];
        const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(req.contractAddress, abi, ctx.provider);
        return await erc20.populateTransaction.transfer(req.to, ethers__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(req.amount), {
            type: (_a = req.type) !== null && _a !== void 0 ? _a : null,
            nonce: (_b = req.nonce) !== null && _b !== void 0 ? _b : null,
            gasLimit: (_c = req.gasLimit) !== null && _c !== void 0 ? _c : null,
            gasPrice: (_d = req.gasPrice) !== null && _d !== void 0 ? _d : null,
            maxFeePerGas: (_e = req.maxFeePerGas) !== null && _e !== void 0 ? _e : null,
            maxPriorityFeePerGas: (_f = req.maxPriorityFeePerGas) !== null && _f !== void 0 ? _f : null
        });
    }
    static async transferErc721(ctx, req) {
        const unsignedTx = await Ethereum.transferErc721Transaction(ctx, req);
        return await Ethereum.signAndSendTransaction(ctx, unsignedTx);
    }
    static async transferErc721Transaction(ctx, req) {
        var _a, _b, _c, _d, _e, _f;
        const abi = [
            "function safeTransferFrom(address from, address to, uint tokenId) returns (bool)"
        ];
        const erc721 = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(req.contractAddress, abi, ctx.provider);
        return await erc721.populateTransaction.safeTransferFrom(req.from, req.to, req.tokenId, {
            type: (_a = req.type) !== null && _a !== void 0 ? _a : null,
            nonce: (_b = req.nonce) !== null && _b !== void 0 ? _b : null,
            gasLimit: (_c = req.gasLimit) !== null && _c !== void 0 ? _c : null,
            gasPrice: (_d = req.gasPrice) !== null && _d !== void 0 ? _d : null,
            maxFeePerGas: (_e = req.maxFeePerGas) !== null && _e !== void 0 ? _e : null,
            maxPriorityFeePerGas: (_f = req.maxPriorityFeePerGas) !== null && _f !== void 0 ? _f : null
        });
    }
    static async signAndSendTransaction(ctx, unsignedTx) {
        return await _provider__WEBPACK_IMPORTED_MODULE_0__.EthereumProvider.signAndSendTransaction(ctx, unsignedTx);
    }
} //# sourceMappingURL=index.js.map


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

/***/ "../common/dist/esm/ethereum/provider.js":
/*!***********************************************!*\
  !*** ../common/dist/esm/ethereum/provider.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthereumProvider": () => (/* binding */ EthereumProvider)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/basex/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/transactions/lib.esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



// Provider api used by the app UI. Spiritually the same as the injected
// provider with a slightly different API. Eventually it would be nice to
// combine the two.
class EthereumProvider {
    /**
     * Serialize a transaction and send it to the background script for signing.
     */ static async signTransaction(ctx, tx) {
        const { walletPublicKey , backgroundClient  } = ctx;
        const serializedTx = ethers__WEBPACK_IMPORTED_MODULE_1__.Base58.encode(ethers__WEBPACK_IMPORTED_MODULE_2__.serialize(tx));
        const signedTx = await backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_SIGN_TRANSACTION,
            params: [
                serializedTx,
                walletPublicKey
            ]
        });
        return signedTx;
    }
    /**
     * Serialize a transaction and send it to the background script for signing
     * and sending.
     */ static async signAndSendTransaction(ctx, tx) {
        const { walletPublicKey , backgroundClient  } = ctx;
        console.log("Transaction", tx);
        const serializedTx = ethers__WEBPACK_IMPORTED_MODULE_1__.Base58.encode(ethers__WEBPACK_IMPORTED_MODULE_2__.serialize(tx));
        const txHash = await backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_SIGN_AND_SEND_TRANSACTION,
            params: [
                serializedTx,
                walletPublicKey
            ]
        });
        return txHash;
    }
} //# sourceMappingURL=provider.js.map


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

/***/ "../common/dist/esm/ethereum/token.js":
/*!********************************************!*\
  !*** ../common/dist/esm/ethereum/token.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ETH_NATIVE_MINT": () => (/* binding */ ETH_NATIVE_MINT),
/* harmony export */   "ethereumTokenData": () => (/* binding */ ethereumTokenData),
/* harmony export */   "fetchEthereumBalances": () => (/* binding */ fetchEthereumBalances),
/* harmony export */   "fetchEthereumTokenBalances": () => (/* binding */ fetchEthereumTokenBalances)
/* harmony export */ });
/* harmony import */ var ethereum_multicall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethereum-multicall */ "../../node_modules/ethereum-multicall/dist/esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/constants/lib.esm/addresses.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _tokens_uniswap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens-uniswap */ "../common/dist/esm/ethereum/tokens-uniswap.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");




// Dummy representation of native ETH.
const ETH_NATIVE_MINT = ethers__WEBPACK_IMPORTED_MODULE_2__.AddressZero;
async function fetchEthereumBalances(provider, publicKey) {
    const [ethBalance, tokenBalances] = await Promise.all([
        provider.getBalance(publicKey),
        fetchEthereumTokenBalances(provider, publicKey)
    ]);
    const balanceMap = tokenBalances;
    balanceMap.set(ETH_NATIVE_MINT, ethBalance);
    return balanceMap;
}
async function fetchEthereumTokenBalances(provider, publicKey) {
    //
    // Use a multicall contract to load Ethereum balances.
    // There might be other more performant options if this needs improving:
    //
    // - GraphQL API on Ethereum node
    // - Alchemy extended API methods
    // - Other APIs (e.g. Etherscan)
    // - Custom infrastructure
    //
    const contractAddresses = _tokens_uniswap__WEBPACK_IMPORTED_MODULE_1__.UniswapTokenList.tokens.map((token)=>token.address);
    const multicall = new ethereum_multicall__WEBPACK_IMPORTED_MODULE_0__.Multicall({
        ethersProvider: provider,
        tryAggregate: true
    });
    // Only balanceOf ERC20 ABI
    const abi = [
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address"
                }
            ],
            name: "balanceOf",
            outputs: [
                {
                    name: "balance",
                    type: "uint256"
                }
            ],
            payable: false,
            type: "function"
        }
    ];
    const contractCallContext = contractAddresses.filter((c)=>c !== ETH_NATIVE_MINT).map((contractAddress)=>{
        return {
            reference: contractAddress,
            contractAddress: contractAddress,
            abi: abi,
            calls: [
                {
                    reference: "balanceOf",
                    methodName: "balanceOf",
                    methodParameters: [
                        publicKey
                    ]
                }
            ]
        };
    });
    const contractCall = await multicall.call(contractCallContext);
    return new Map(Object.entries(contractCall.results).filter(([_, { callsReturnContext  }])=>{
        return callsReturnContext[0].returnValues[0] && !ethers__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(callsReturnContext[0].returnValues[0]).isZero();
    }).map(([contractAddress, { callsReturnContext  }])=>{
        return [
            contractAddress,
            callsReturnContext[0].returnValues[0]
        ];
    }));
}
function ethereumTokenData() {
    const ETH_LOGO_URI = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png";
    const tokenMap = new Map(_tokens_uniswap__WEBPACK_IMPORTED_MODULE_1__.UniswapTokenList.tokens.map((t)=>{
        return [
            t.address,
            t
        ];
    }));
    tokenMap.set(ETH_NATIVE_MINT, {
        name: "Ethereum",
        address: ETH_NATIVE_MINT,
        chainId: 1,
        decimals: 18,
        symbol: "ETH",
        logoURI: ETH_LOGO_URI,
        extensions: {
            coingeckoId: "ethereum"
        }
    });
    return tokenMap;
} //# sourceMappingURL=token.js.map


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

/***/ "../common/dist/esm/ethereum/tokens-uniswap.js":
/*!*****************************************************!*\
  !*** ../common/dist/esm/ethereum/tokens-uniswap.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniswapTokenList": () => (/* binding */ UniswapTokenList)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

const UniswapTokenList = {
    name: "Uniswap Labs Default",
    timestamp: "2022-06-29T15:57:01.868Z",
    version: {
        major: 4,
        minor: 1,
        patch: 0
    },
    tags: {},
    logoURI: "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
    keywords: [
        "uniswap",
        "default"
    ],
    tokens: [
        {
            chainId: 1,
            address: "0x111111111117dC0aa78b770fA6A738034120C302",
            name: "1inch",
            symbol: "1INCH",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f"
                    },
                    "42161": {
                        tokenAddress: "0x6314C31A7a1652cE482cffe247E9CB7c3f4BB9aF"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            name: "Aave",
            symbol: "AAVE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B"
                    },
                    "42161": {
                        tokenAddress: "0xba5DdD1f9d7F570dc94a51479a000E3BCE967196"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xEd04915c23f00A313a544955524EB7DBD823143d",
            name: "Alchemy Pay",
            symbol: "ACH",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/12390/thumb/ACH_%281%29.png?1599691266"
        },
        {
            chainId: 1,
            address: "0x91Af0fBB28ABA7E31403Cb457106Ce79397FD4E6",
            name: "Aergo",
            symbol: "AERGO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4490/thumb/aergo.png?1647696770"
        },
        {
            chainId: 1,
            address: "0x32353A6C91143bfd6C7d363B546e62a9A2489A20",
            name: "Adventure Gold",
            symbol: "AGLD",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/18125/thumb/lpgblc4h_400x400.jpg?1630570955",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x6a6bD53d677F8632631662C48bD47b1D4D6524ee"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x626E8036dEB333b408Be468F951bdB42433cBF18",
            name: "AIOZ Network",
            symbol: "AIOZ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14631/thumb/aioz_logo.png?1617413126",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xe2341718c6C0CbFa8e6686102DD8FbF4047a9e9B"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
            name: "Alchemix",
            symbol: "ALCX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14113/thumb/Alchemix.png?1614409874",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x95c300e7740D2A88a44124B424bFC1cB2F9c3b89"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
            name: "My Neighbor Alice",
            symbol: "ALICE",
            decimals: 6,
            logoURI: "https://assets.coingecko.com/coins/images/14375/thumb/alice_logo.jpg?1615782968",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x50858d870FAF55da2fD90FB6DF7c34b5648305C6"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
            name: "Amp",
            symbol: "AMP",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12409/thumb/amp-200x200.png?1599625397",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x0621d647cecbFb64b79E44302c1933cB4f27054d"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4",
            name: "Ankr",
            symbol: "ANKR",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4324/thumb/U85xTl2.png?1608111978",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x101A023270368c0D50BFfb62780F4aFd4ea79C35"
                    }
                }
            }
        },
        {
            name: "Aragon Network Token",
            address: "0x960b236A07cf122663c4303350609A66A7B288C0",
            symbol: "ANT",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x960b236A07cf122663c4303350609A66A7B288C0/logo.png"
        },
        {
            chainId: 1,
            address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
            name: "ApeCoin",
            symbol: "APE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/24383/small/apecoin.jpg?1647476455",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xB7b31a6BC18e48888545CE79e83E06003bE70930"
                    },
                    "42161": {
                        tokenAddress: "0x74885b4D524d497261259B38900f54e6dbAd2210"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x0b38210ea11411557c13457D4dA7dC6ea731B88a",
            name: "API3",
            symbol: "API3",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13256/thumb/api3.jpg?1606751424",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x45C27821E80F8789b60Fd8B600C73815d34DDa6C"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xBA50933C268F567BDC86E1aC131BE072C6B0b71a",
            name: "ARPA Chain",
            symbol: "ARPA",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/8506/thumb/9u0a23XY_400x400.jpg?1559027357",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xEE800B277A96B0f490a1A732e1D6395FAD960A26"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x64D91f12Ece7362F91A6f8E7940Cd55F05060b92",
            name: "ASH",
            symbol: "ASH",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15714/thumb/omnPqaTY.png?1622820503"
        },
        {
            chainId: 1,
            address: "0x2565ae0385659badCada1031DB704442E1b69982",
            name: "Assemble Protocol",
            symbol: "ASM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11605/thumb/gpvrlkSq_400x400_%281%29.jpg?1591775789"
        },
        {
            chainId: 1,
            address: "0xA9B1Eb5908CfC3cdf91F9B8B3a74108598009096",
            name: "Bounce",
            symbol: "AUCTION",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13860/thumb/1_KtgpRIJzuwfHe0Rl0avP_g.jpeg?1612412025"
        },
        {
            chainId: 1,
            address: "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
            name: "Audius",
            symbol: "AUDIO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12913/thumb/AudiusCoinLogo_2x.png?1603425727",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x5eB8D998371971D01954205c7AFE90A7AF6a95AC"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x845576c64f9754CF09d87e45B720E82F3EeF522C",
            name: "Artverse Token",
            symbol: "AVT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/19727/thumb/ewnektoB_400x400.png?1635767094"
        },
        {
            chainId: 1,
            address: "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b",
            name: "Axie Infinity",
            symbol: "AXS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png?1604471082",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x61BDD9C7d4dF4Bf47A4508c0c8245505F2Af5b7b"
                    },
                    "42161": {
                        tokenAddress: "0xe88998Fb579266628aF6a03e3821d5983e5D0089"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
            name: "Badger DAO",
            symbol: "BADGER",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13287/thumb/badger_dao_logo.jpg?1607054976",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x1FcbE5937B0cc2adf69772D228fA4205aCF4D9b2"
                    },
                    "42161": {
                        tokenAddress: "0xBfa641051Ba0a0Ad1b0AcF549a89536A0D76472E"
                    }
                }
            }
        },
        {
            name: "Balancer",
            address: "0xba100000625a3754423978a60c9317c58a424e3D",
            symbol: "BAL",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3"
                    },
                    "42161": {
                        tokenAddress: "0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
            name: "Band Protocol",
            symbol: "BAND",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9545/thumb/band-protocol.png?1568730326",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xA8b1E0764f85f53dfe21760e8AfE5446D82606ac"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
            name: "Basic Attention Token",
            symbol: "BAT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/677/thumb/basic-attention-token.png?1547034427",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x3Cef98bb43d732E2F285eE605a8158cDE967D219"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xF17e65822b568B3903685a7c9F496CF7656Cc6C2",
            name: "Biconomy",
            symbol: "BICO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/21061/thumb/biconomy_logo.jpg?1638269749",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x91c89A94567980f0e9723b487b0beD586eE96aa7"
                    },
                    "42161": {
                        tokenAddress: "0xa68Ec98D7ca870cF1Dd0b00EBbb7c4bF60A8e74d"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x5732046A883704404F284Ce41FfADd5b007FD668",
            name: "Bluzelle",
            symbol: "BLZ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2848/thumb/ColorIcon_3x.png?1622516510",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x438B28C5AA5F00a817b7Def7cE2Fb3d5d1970974"
                    }
                }
            }
        },
        {
            name: "Bancor Network Token",
            address: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
            symbol: "BNT",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xc26D47d5c33aC71AC5CF9F776D63Ba292a4F7842"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x0391D2021f89DC339F60Fff84546EA23E337750f",
            name: "BarnBridge",
            symbol: "BOND",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12811/thumb/barnbridge.jpg?1602728853",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x3e7eF8f50246f725885102E8238CBba33F276747"
                    },
                    "137": {
                        tokenAddress: "0xA041544fe2BE56CCe31Ebb69102B965E06aacE80"
                    },
                    "42161": {
                        tokenAddress: "0x0D81E50bC677fa67341c44D7eaA9228DEE64A4e1"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x799ebfABE77a6E34311eeEe9825190B9ECe32824",
            name: "Braintrust",
            symbol: "BTRST",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/18100/thumb/braintrust.PNG?1630475394"
        },
        {
            chainId: 1,
            address: "0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
            name: "Chiliz",
            symbol: "CHZ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/8834/thumb/Chiliz.png?1561970540",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xf1938Ce12400f9a761084E7A80d37e732a4dA056"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x80C62FE4487E1351b47Ba49809EBD60ED085bf52",
            name: "Clover Finance",
            symbol: "CLV",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15278/thumb/clover.png?1645084454"
        },
        {
            name: "Compound",
            address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
            symbol: "COMP",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c"
                    },
                    "42161": {
                        tokenAddress: "0x354A6dA3fcde098F8389cad84b0182725c6C91dE"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xDDB3422497E61e13543BeA06989C0789117555c5",
            name: "COTI",
            symbol: "COTI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2962/thumb/Coti.png?1559653863",
            extensions: {
                bridgeInfo: {
                    "42161": {
                        tokenAddress: "0x6FE14d3CC2f7bDdffBa5CdB3BBE7467dd81ea101"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x3D658390460295FB963f54dC0899cfb1c30776Df",
            name: "Circuits of Value",
            symbol: "COVAL",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/588/thumb/coval-logo.png?1599493950"
        },
        {
            chainId: 1,
            address: "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
            name: "Cronos",
            symbol: "CRO",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/7310/thumb/oCw2s3GI_400x400.jpeg?1645172042",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xAdA58DF0F643D959C2A47c9D4d4c1a4deFe3F11C"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x08389495D7456E1951ddF7c3a1314A4bfb646d8B",
            name: "Crypterium",
            symbol: "CRPT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1901/thumb/crypt.png?1547036205"
        },
        {
            name: "Curve DAO Token",
            address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
            symbol: "CRV",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"
                    },
                    "137": {
                        tokenAddress: "0x172370d5Cd63279eFa6d502DAB29171933a610AF"
                    },
                    "42161": {
                        tokenAddress: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D",
            name: "Cartesi",
            symbol: "CTSI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11038/thumb/cartesi.png?1592288021",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x2727Ab1c2D22170ABc9b595177B2D5C6E1Ab7B7B"
                    },
                    "42161": {
                        tokenAddress: "0x319f865b287fCC10b30d8cE6144e8b6D1b476999"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x321C2fE4446C7c963dc41Dd58879AF648838f98D",
            name: "Cryptex Finance",
            symbol: "CTX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14932/thumb/glossy_icon_-_C200px.png?1619073171",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x8c208BC2A808a088a78398fed8f2640cab0b6EDb"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xDf801468a808a32656D2eD2D2d80B72A129739f4",
            name: "Somnium Space CUBEs",
            symbol: "CUBE",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/10687/thumb/CUBE_icon.png?1617026861",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x276C9cbaa4BDf57d7109a41e67BD09699536FA3d"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x41e5560054824eA6B0732E656E3Ad64E20e94E45",
            name: "Civic",
            symbol: "CVC",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/788/thumb/civic.png?1547034556",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x66Dc5A08091d1968e08C16aA5b27BAC8398b02Be"
                    },
                    "42161": {
                        tokenAddress: "0x9DfFB23CAd3322440bCcFF7aB1C58E781dDBF144"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
            name: "Convex Finance",
            symbol: "CVX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15585/thumb/convex.png?1621256328",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x4257EA7637c355F81616050CbB6a9b709fd72683"
                    }
                }
            }
        },
        {
            name: "Dai Stablecoin",
            address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            symbol: "DAI",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
                    },
                    "137": {
                        tokenAddress: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
                    },
                    "42161": {
                        tokenAddress: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x3A880652F47bFaa771908C07Dd8673A787dAEd3A",
            name: "DerivaDAO",
            symbol: "DDX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13453/thumb/ddx_logo.png?1608741641",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x26f5FB1e6C8a65b3A873fF0a213FA16EFF5a7828"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
            name: "DIA",
            symbol: "DIA",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11955/thumb/image.png?1646041751",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x993f2CafE9dbE525243f4A78BeBC69DAc8D36000"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x0AbdAce70D3790235af448C88547603b945604ea",
            name: "district0x",
            symbol: "DNT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/849/thumb/district0x.png?1547223762"
        },
        {
            chainId: 1,
            address: "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
            name: "dYdX",
            symbol: "DYDX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17500/thumb/hjnIm9bV.jpg?1628009360",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x4C3bF0a3DE9524aF68327d1D2558a3B70d17D42a"
                    },
                    "42161": {
                        tokenAddress: "0x51863cB90Ce5d6dA9663106F292fA27c8CC90c5a"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
            name: "Dogelon Mars",
            symbol: "ELON",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14962/thumb/6GxcPRo3_400x400.jpg?1619157413",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xE0339c80fFDE91F3e20494Df88d4206D86024cdF"
                    },
                    "42161": {
                        tokenAddress: "0x3e4Cff6E50F37F731284A92d44AE943e17077fD4"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
            name: "Enjin Coin",
            symbol: "ENJ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png?1547035078",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x7eC26842F195c852Fa843bB9f6D8B583a274a157"
                    },
                    "42161": {
                        tokenAddress: "0x7fa9549791EFc9030e1Ed3F25D18014163806758"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
            name: "Ethereum Name Service",
            symbol: "ENS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/19785/thumb/acatxTm8_400x400.jpg?1635850140",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x65559aA14915a70190438eF90104769e5E890A00"
                    },
                    "137": {
                        tokenAddress: "0xbD7A5Cf51d22930B8B3Df6d834F9BCEf90EE7c4f"
                    },
                    "42161": {
                        tokenAddress: "0xfeA31d704DEb0975dA8e77Bf13E04239e70d7c28"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
            name: "Ethernity Chain",
            symbol: "ERN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14238/thumb/LOGO_HIGH_QUALITY.png?1647831402",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x0E50BEA95Fe001A370A4F1C220C49AEdCB982DeC"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
            name: "Euro Coin",
            symbol: "EUROC",
            decimals: 6,
            logoURI: "https://assets.coingecko.com/coins/images/26045/thumb/euro-coin.png?1655394420",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x8a037dbcA8134FFc72C362e394e35E0Cad618F85"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xa0246c9032bC3A600820415aE600c6388619A14D",
            name: "Harvest Finance",
            symbol: "FARM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12304/thumb/Harvest.png?1613016180",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x176f5AB638cf4Ff3B6239Ba609C3fadAA46ef5B0"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
            name: "Fetch ai",
            symbol: "FET",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/5681/thumb/Fetch.jpg?1572098136",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x7583FEDDbceFA813dc18259940F76a02710A8905"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x77FbA179C79De5B7653F68b5039Af940AdA60ce0",
            name: "Ampleforth Governance Token",
            symbol: "FORTH",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14917/thumb/photo_2021-04-22_00.00.03.jpeg?1619020835",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x5eCbA59DAcc1ADc5bDEA35f38A732823fc3dE977"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d",
            name: "ShapeShift FOX Token",
            symbol: "FOX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9988/thumb/FOX.png?1574330622",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x65A05DB8322701724c197AF82C9CaE41195B0aA8"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png?1558015016",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xC9c1c1c20B3658F8787CC2FD702267791f224Ce1"
                    },
                    "42161": {
                        tokenAddress: "0xd42785D323e608B9E99fa542bd8b1000D4c2Df37"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
            name: "Function X",
            symbol: "FX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/8186/thumb/47271330_590071468072434_707260356350705664_n.jpg?1556096683"
        },
        {
            chainId: 1,
            address: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
            name: "Frax Share",
            symbol: "FXS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13423/thumb/frax_share.png?1608478989",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x3e121107F6F22DA4911079845a470757aF4e1A1b"
                    },
                    "42161": {
                        tokenAddress: "0xd9f9d2Ee2d3EFE420699079f16D9e924affFdEA4"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
            name: "Gala",
            symbol: "GALA",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/12493/thumb/GALA-COINGECKO.png?1600233435",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x09E1943Dd2A4e82032773594f50CF54453000b97"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xdab396cCF3d84Cf2D07C4454e10C8A6F5b008D2b",
            name: "Goldfinch",
            symbol: "GFI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/19081/thumb/GOLDFINCH.png?1634369662"
        },
        {
            chainId: 1,
            address: "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
            name: "Golem",
            symbol: "GLM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/542/thumb/Golem_Submark_Positive_RGB.png?1606392013",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf"
                    }
                }
            }
        },
        {
            name: "Gnosis Token",
            address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
            symbol: "GNO",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8"
                    },
                    "42161": {
                        tokenAddress: "0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xccC8cb5229B0ac8069C51fd58367Fd1e622aFD97",
            name: "Gods Unchained",
            symbol: "GODS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17139/thumb/10631.png?1635718182",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xF88fc6b493eda7650E4bcf7A290E8d108F677CfE"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
            name: "The Graph",
            symbol: "GRT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png?1608145566",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x5fe2B58c013d7601147DcdD68C143A77499f5531"
                    },
                    "42161": {
                        tokenAddress: "0x23A941036Ae778Ac51Ab04CEa08Ed6e2FE103614"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F",
            name: "Gitcoin",
            symbol: "GTC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15810/thumb/gitcoin.png?1621992929",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xdb95f9188479575F3F718a245EcA1B3BF74567EC"
                    },
                    "42161": {
                        tokenAddress: "0x7f9a7DB853Ca816B9A138AEe3380Ef34c437dEe0"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
            name: "Gemini Dollar",
            symbol: "GUSD",
            decimals: 2,
            logoURI: "https://assets.coingecko.com/coins/images/5992/thumb/gemini-dollar-gusd.png?1536745278",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xC08512927D12348F6620a698105e1BAac6EcD911",
            name: "GYEN",
            symbol: "GYEN",
            decimals: 6,
            logoURI: "https://assets.coingecko.com/coins/images/14191/thumb/icon_gyen_200_200.png?1614843343",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x482bc619eE7662759CDc0685B4E78f464Da39C73"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x71Ab77b7dbB4fa7e017BC15090b2163221420282",
            name: "Highstreet",
            symbol: "HIGH",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/18973/thumb/logosq200200Coingecko.png?1634090470"
        },
        {
            chainId: 1,
            address: "0xB705268213D593B8FD88d3FDEFF93AFF5CbDcfAE",
            name: "IDEX",
            symbol: "IDEX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2565/thumb/logomark-purple-286x286.png?1638362736",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x9Cb74C8032b007466865f060ad2c46145d45553D"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF",
            name: "Immutable X",
            symbol: "IMX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17233/thumb/imx.png?1636691817",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x183070C90B34A63292cC908Ce1b263Cb56D49A7F"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
            name: "Injective",
            symbol: "INJ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12882/thumb/Secondary_Symbol.png?1628233237",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x4E8dc2149EaC3f3dEf36b1c281EA466338249371"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68",
            name: "Inverse Finance",
            symbol: "INV",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14205/thumb/inverse_finance.jpg?1614921871",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xF18Ac368001b0DdC80aA6a8374deb49e868EFDb8"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69",
            name: "IoTeX",
            symbol: "IOTX",
            decimals: 18,
            logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2777.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xf6372cDb9c1d3674E83842e3800F2A62aC9F3C66"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x7420B4b9a0110cdC71fB720908340C03F9Bc03EC",
            name: "JasmyCoin",
            symbol: "JASMY",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13876/thumb/JASMY200x200.jpg?1612473259",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xb87f5c1E81077FfcfE821dA240fd20C99c533aF1"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
            name: "Keep Network",
            symbol: "KEEP",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3373/thumb/IuNzUb5b_400x400.jpg?1589526336",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x42f37A1296b2981F7C3cAcEd84c5096b2Eb0C72C"
                    }
                }
            }
        },
        {
            name: "Kyber Network Crystal",
            address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
            symbol: "KNC",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdd974D5C2e2928deA5F71b9825b8b646686BD200/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x324b28d6565f784d596422B0F2E5aB6e9CFA1Dc7"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
            name: "Keep3rV1",
            symbol: "KP3R",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12966/thumb/kp3r_logo.jpg?1607057458",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x53AEc293212E3B792563Bc16f1be26956adb12e9"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x464eBE77c293E473B48cFe96dDCf88fcF7bFDAC0",
            name: "KRYLL",
            symbol: "KRL",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2807/thumb/krl.png?1547036979"
        },
        {
            chainId: 1,
            address: "0x037A54AaB062628C9Bbae1FDB1583c195585fe41",
            name: "LCX",
            symbol: "LCX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9985/thumb/zRPSu_0o_400x400.jpg?1574327008",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xE8A51D0dD1b4525189ddA2187F90ddF0932b5482"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
            name: "Lido DAO",
            symbol: "LDO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13573/thumb/Lido_DAO.png?1609873644",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xC3C7d422809852031b44ab29EEC9F1EfF2A58756"
                    }
                }
            }
        },
        {
            name: "ChainLink Token",
            address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
            symbol: "LINK",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"
                    },
                    "137": {
                        tokenAddress: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39"
                    },
                    "42161": {
                        tokenAddress: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4"
                    }
                }
            }
        },
        {
            name: "Loom Network",
            address: "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0",
            symbol: "LOOM",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x66EfB7cC647e0efab02eBA4316a2d2941193F6b3"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x58b6A8A3302369DAEc383334672404Ee733aB239",
            name: "Livepeer",
            symbol: "LPT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/7137/thumb/logo-circle-green.png?1619593365",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x3962F4A0A0051DccE0be73A7e09cEf5756736712"
                    },
                    "42161": {
                        tokenAddress: "0x289ba1701C2F088cf0faf8B3705246331cB8A839"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
            name: "Liquity",
            symbol: "LQTY",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14665/thumb/200-lqty-icon.png?1617631180",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x8Ab2Fec94d17ae69FB90E7c773f2C85Ed1802c01"
                    }
                }
            }
        },
        {
            name: "LoopringCoin V2",
            address: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
            symbol: "LRC",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0xFEaA9194F9F8c1B65429E31341a103071464907E"
                    },
                    "137": {
                        tokenAddress: "0x84e1670F61347CDaeD56dcc736FB990fBB47ddC1"
                    },
                    "42161": {
                        tokenAddress: "0x46d0cE7de6247b0A95f67b43B589b4041BaE7fbE"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
            name: "Decentraland",
            symbol: "MANA",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png?1550108745",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4"
                    },
                    "42161": {
                        tokenAddress: "0x442d24578A564EF628A65e6a7E3e7be2a165E231"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
            name: "Mask Network",
            symbol: "MASK",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14051/thumb/Mask_Network.jpg?1614050316",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x3390108E913824B8eaD638444cc52B9aBdF63798"
                    },
                    "137": {
                        tokenAddress: "0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7"
                    },
                    "42161": {
                        tokenAddress: "0x533A7B414CD1236815a5e09F1E97FC7d5c313739"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
            name: "Polygon",
            symbol: "MATIC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912",
            extensions: {
                bridgeInfo: {
                    "42161": {
                        tokenAddress: "0x561877b6b3DD7651313794e5F2894B2F18bE0766"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x949D48EcA67b17269629c7194F4b727d4Ef9E5d6",
            name: "Merit Circle",
            symbol: "MC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/19304/thumb/Db4XqML.png?1634972154"
        },
        {
            chainId: 1,
            address: "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
            name: "Moss Carbon Credit",
            symbol: "MCO2",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14414/thumb/ENtxnThA_400x400.jpg?1615948522",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xAa7DbD1598251f856C12f63557A4C4397c253Cea"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x814e0908b12A99FeCf5BC101bB5d0b8B5cDf7d26",
            name: "Measurable Data Token",
            symbol: "MDT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2441/thumb/mdt_logo.png?1569813574"
        },
        {
            chainId: 1,
            address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
            name: "Magic Internet Money",
            symbol: "MIM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/16786/thumb/mimlogopng.png?1624979612",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x01288e04435bFcd4718FF203D6eD18146C17Cd4b"
                    },
                    "42161": {
                        tokenAddress: "0xB20A02dfFb172C474BC4bDa3fD6f4eE70C04daf2"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
            name: "Mirror Protocol",
            symbol: "MIR",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13295/thumb/mirror_logo_transparent.png?1611554658",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x1C5cccA2CB59145A4B25F452660cbA6436DDce9b"
                    }
                }
            }
        },
        {
            name: "Maker",
            address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
            symbol: "MKR",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5"
                    },
                    "137": {
                        tokenAddress: "0x6f7C932e7684666C9fd1d44527765433e01fF61d"
                    },
                    "42161": {
                        tokenAddress: "0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
            name: "Melon",
            symbol: "MLN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/605/thumb/melon.png?1547034295",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xa9f37D84c856fDa3812ad0519Dad44FA0a3Fe207"
                    },
                    "42161": {
                        tokenAddress: "0x8f5c1A99b1df736Ad685006Cb6ADCA7B7Ae4b514"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x33349B282065b0284d756F0577FB39c158F935e6",
            name: "Maple",
            symbol: "MPL",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14097/thumb/photo_2021-05-03_14.20.41.jpeg?1620022863"
        },
        {
            chainId: 1,
            address: "0x65Ef703f5594D2573eb71Aaf55BC0CB548492df4",
            name: "Multichain",
            symbol: "MULTI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/22087/thumb/1_Wyot-SDGZuxbjdkaOeT2-A.png?1640764238"
        },
        {
            chainId: 1,
            address: "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
            name: "mStable USD",
            symbol: "MUSD",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11576/thumb/mStable_USD.png?1595591803"
        },
        {
            chainId: 1,
            address: "0x9E46A38F5DaaBe8683E10793b06749EEF7D733d1",
            name: "PolySwarm",
            symbol: "NCT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2843/thumb/ImcYCVfX_400x400.jpg?1628519767",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x4985E0B13554fB521840e893574D3848C10Fcc6f"
                    },
                    "42161": {
                        tokenAddress: "0x53236015A675fcB937485F1AE58040e4Fb920d5b"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x5Cf04716BA20127F1E2297AdDCf4B5035000c9eb",
            name: "NKN",
            symbol: "NKN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3375/thumb/nkn.png?1548329212"
        },
        {
            name: "Numeraire",
            address: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
            symbol: "NMR",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x0Bf519071b02F22C17E7Ed5F4002ee1911f46729"
                    },
                    "42161": {
                        tokenAddress: "0x597701b32553b9fa473e21362D480b3a6B569711"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
            name: "NuCypher",
            symbol: "NU",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3318/thumb/photo1198982838879365035.jpg?1547037916"
        },
        {
            chainId: 1,
            address: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
            name: "Ocean Protocol",
            symbol: "OCEAN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3687/thumb/ocean-protocol-logo.jpg?1547038686",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x282d8efCe846A88B159800bd4130ad77443Fa1A1"
                    },
                    "42161": {
                        tokenAddress: "0x933d31561e470478079FEB9A6Dd2691fAD8234DF"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
            name: "Origin Protocol",
            symbol: "OGN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3296/thumb/op.jpg?1547037878",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xa63Beffd33AB3a2EfD92a39A7D2361CEE14cEbA8"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
            name: "OMG Network",
            symbol: "OMG",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/776/thumb/OMG_Network.jpg?1591167168",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x62414D03084EeB269E18C970a21f45D2967F0170"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x6F59e0461Ae5E2799F1fB3847f05a63B16d0DbF8",
            name: "ORCA Alliance",
            symbol: "ORCA",
            decimals: 18,
            logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5183.png"
        },
        {
            chainId: 1,
            address: "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
            name: "Orion Protocol",
            symbol: "ORN",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/11841/thumb/orion_logo.png?1594943318",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x0EE392bA5ef1354c9bd75a98044667d307C0e773"
                    }
                }
            }
        },
        {
            name: "Orchid",
            address: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
            symbol: "OXT",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4575f41308EC1483f3d399aa9a2826d74Da13Deb/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x9880e3dDA13c8e7D4804691A45160102d31F6060"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xc1D204d77861dEf49b6E769347a883B15EC397Ff",
            name: "PayperEx",
            symbol: "PAX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1601/thumb/pax.png?1547035800"
        },
        {
            chainId: 1,
            address: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
            name: "PAX Gold",
            symbol: "PAXG",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9519/thumb/paxg.PNG?1568542565",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x553d3D295e0f695B9228246232eDF400ed3560B5"
                    },
                    "42161": {
                        tokenAddress: "0xfEb4DfC8C4Cf7Ed305bb08065D08eC6ee6728429"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
            name: "Perpetual Protocol",
            symbol: "PERP",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12381/thumb/60d18e06844a844ad75901a9_mark_only_03.png?1628674771",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x9e1028F5F1D5eDE59748FFceE5532509976840E0"
                    },
                    "137": {
                        tokenAddress: "0x263534a4Fe3cb249dF46810718B7B612a30ebbff"
                    },
                    "42161": {
                        tokenAddress: "0x753D224bCf9AAFaCD81558c32341416df61D3DAC"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x3a4f40631a4f906c2BaD353Ed06De7A5D3fCb430",
            name: "PlayDapp",
            symbol: "PLA",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14316/thumb/54023228.png?1615366911",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x8765f05ADce126d70bcdF1b0a48Db573316662eB"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xD8912C10681D8B21Fd3742244f44658dBA12264E",
            name: "Pluton",
            symbol: "PLU",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1241/thumb/pluton.png?1548331624",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x7dc0cb65EC6019330a6841e9c274f2EE57A6CA6C"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
            name: "Polkastarter",
            symbol: "POLS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12648/thumb/polkastarter.png?1609813702",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x8dc302e2141DA59c934d900886DbF1518Fd92cd4"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x9992eC3cF6A55b00978cdDF2b27BC6882d88D1eC",
            name: "Polymath",
            symbol: "POLY",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2784/thumb/inKkF01.png?1605007034",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xcB059C5573646047D6d88dDdb87B745C18161d3b"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x595832F8FC6BF59c85C527fEC3740A1b7a361269",
            name: "Power Ledger",
            symbol: "POWR",
            decimals: 6,
            logoURI: "https://assets.coingecko.com/coins/images/1104/thumb/power-ledger.png?1547035082",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x0AaB8DC887D34f00D50E19aee48371a941390d14"
                    },
                    "42161": {
                        tokenAddress: "0x4e91F2AF1ee0F84B529478f19794F5AFD423e4A6"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x226bb599a12C826476e3A771454697EA52E9E220",
            name: "Propy",
            symbol: "PRO",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/869/thumb/propy.png?1548332100",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x82FFdFD1d8699E8886a4e77CeFA9dd9710a7FefD"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x4a220E6096B25EADb88358cb44068A3248254675",
            name: "Quant",
            symbol: "QNT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3370/thumb/5ZOu7brX_400x400.jpg?1612437252",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x36B77a184bE8ee56f5E81C56727B20647A42e28E"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d",
            name: "Quantstamp",
            symbol: "QSP",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1219/thumb/0_E0kZjb4dG4hUnoDD_.png?1604815917"
        },
        {
            chainId: 1,
            address: "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f",
            name: "Quickswap",
            symbol: "QUICK",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13970/thumb/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x31c8EAcBFFdD875c74b94b077895Bd78CF1E64A3",
            name: "Radicle",
            symbol: "RAD",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14013/thumb/radicle.png?1614402918",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x2f81e176471CC57fDC76f7d332FB4511bF2bebDD"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
            name: "Rai Reflex Index",
            symbol: "RAI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x7FB688CCf682d58f86D7e38e03f9D22e7705448B"
                    },
                    "137": {
                        tokenAddress: "0x00e5646f60AC6Fb446f621d146B6E1886f002905"
                    },
                    "42161": {
                        tokenAddress: "0xaeF5bbcbFa438519a5ea80B4c7181B4E78d419f2"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xba5BDe662c17e2aDFF1075610382B9B691296350",
            name: "SuperRare",
            symbol: "RARE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17753/thumb/RARE.jpg?1629220534"
        },
        {
            chainId: 1,
            address: "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
            name: "Rarible",
            symbol: "RARI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11845/thumb/Rari.png?1594946953",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x780053837cE2CeEaD2A90D9151aA21FC89eD49c2"
                    },
                    "42161": {
                        tokenAddress: "0xCF8600347Dc375C5f2FdD6Dab9BB66e0b6773cd7"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
            name: "Rubic",
            symbol: "RBC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12629/thumb/200x200.png?1607952509",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xc3cFFDAf8F3fdF07da6D5e3A89B8723D5E385ff8"
                    },
                    "42161": {
                        tokenAddress: "0x2E9AE8f178d5Ea81970C7799A377B3985cbC335F"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x6123B0049F904d730dB3C36a31167D9d4121fA6B",
            name: "Ribbon Finance",
            symbol: "RBN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15823/thumb/RBN_64x64.png?1633529723"
        },
        {
            name: "Republic Token",
            address: "0x408e41876cCCDC0F92210600ef50372656052a38",
            symbol: "REN",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x19782D3Dc4701cEeeDcD90f0993f0A9126ed89d0"
                    },
                    "42161": {
                        tokenAddress: "0x9fA891e1dB0a6D1eEAC4B929b5AAE1011C79a204"
                    }
                }
            }
        },
        {
            name: "Reputation Augur v1",
            address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
            symbol: "REP",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1985365e9f78359a9B6AD760e32412f4a445E862/logo.png"
        },
        {
            name: "Reputation Augur v2",
            address: "0x221657776846890989a759BA2973e427DfF5C9bB",
            symbol: "REPv2",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x221657776846890989a759BA2973e427DfF5C9bB/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x6563c1244820CfBd6Ca8820FBdf0f2847363F733"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
            name: "Request",
            symbol: "REQ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1031/thumb/Request_icon_green.png?1643250951",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xAdf2F2Ed91755eA3f4bcC9107a494879f633ae7C"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xD291E7a03283640FDc51b121aC401383A46cC623",
            name: "Rari Governance Token",
            symbol: "RGT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12900/thumb/Rari_Logo_Transparent.png?1613978014",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0xB548f63D4405466B36C0c0aC3318a22fDcec711a"
                    },
                    "137": {
                        tokenAddress: "0x3b9dB434F08003A89554CDB43b3e0b1f8734BdE7"
                    },
                    "42161": {
                        tokenAddress: "0xef888bcA6AB6B1d26dbeC977C455388ecd794794"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x607F4C5BB672230e8672085532f7e901544a7375",
            name: "iExec RLC",
            symbol: "RLC",
            decimals: 9,
            logoURI: "https://assets.coingecko.com/coins/images/646/thumb/pL1VuXm.png?1604543202",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xbe662058e00849C3Eef2AC9664f37fEfdF2cdbFE"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
            name: "Rally",
            symbol: "RLY",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12843/thumb/image.png?1611212077"
        },
        {
            chainId: 1,
            address: "0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24",
            name: "Render Token",
            symbol: "RNDR",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11636/thumb/rndr.png?1638840934",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x61299774020dA444Af134c82fa83E3810b309991"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
            name: "The Sandbox",
            symbol: "SAND",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg?1597397942",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
            name: "Shiba Inu",
            symbol: "SHIB",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec"
                    },
                    "42161": {
                        tokenAddress: "0x5033833c9fe8B9d3E09EEd2f73d2aaF7E3872fd1"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x7C84e62859D0715eb77d1b1C4154Ecd6aBB21BEC",
            name: "Shping",
            symbol: "SHPING",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2588/thumb/r_yabKKi_400x400.jpg?1639470164"
        },
        {
            chainId: 1,
            address: "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
            name: "SKALE",
            symbol: "SKL",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13245/thumb/SKALE_token_300x300.png?1606789574"
        },
        {
            chainId: 1,
            address: "0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25",
            name: "Smooth Love Potion",
            symbol: "SLP",
            decimals: 0,
            logoURI: "https://assets.coingecko.com/coins/images/10366/thumb/SLP.png?1578640057",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x0C7304fBAf2A320a1c50c46FE03752722F729946"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
            name: "Status",
            symbol: "SNT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/779/thumb/status.png?1548610778"
        },
        {
            name: "Synthetix Network Token",
            address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
            symbol: "SNX",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4"
                    },
                    "137": {
                        tokenAddress: "0x50B728D8D964fd00C2d0AAD81718b71311feF68a"
                    },
                    "42161": {
                        tokenAddress: "0xcBA56Cd8216FCBBF3fA6DF6137F3147cBcA37D60"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xD31a59c85aE9D8edEFeC411D448f90841571b89c",
            name: "SOL Wormhole ",
            symbol: "SOL",
            decimals: 9,
            logoURI: "https://assets.coingecko.com/coins/images/22876/thumb/SOL_wh_small.png?1644224316",
            extensions: {
                bridgeInfo: {
                    "42161": {
                        tokenAddress: "0xb74Da9FE2F96B9E0a5f4A3cf0b92dd2bEC617124"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x090185f2135308BaD17527004364eBcC2D37e5F6",
            name: "Spell Token",
            symbol: "SPELL",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15861/thumb/abracadabra-3.png?1622544862",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xcdB3C70CD25FD15307D84C4F9D37d5C043B33Fb2"
                    },
                    "42161": {
                        tokenAddress: "0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF"
                    }
                }
            }
        },
        {
            name: "Storj Token",
            address: "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
            symbol: "STORJ",
            decimals: 8,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xd72357dAcA2cF11A5F155b9FF7880E595A3F5792"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45",
            name: "Stox",
            symbol: "STX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1230/thumb/stox-token.png?1547035256",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xB36e3391B22a970d31A9b620Ae1A414C6c256d2a"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x0763fdCCF1aE541A5961815C0872A8c5Bc6DE4d7",
            name: "SUKU",
            symbol: "SUKU",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11969/thumb/UmfW5S6f_400x400.jpg?1596602238"
        },
        {
            chainId: 1,
            address: "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
            name: "SuperFarm",
            symbol: "SUPER",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14040/thumb/6YPdWn6.png?1613975899",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xa1428174F516F527fafdD146b883bB4428682737"
                    }
                }
            }
        },
        {
            name: "Synth sUSD",
            address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
            symbol: "sUSD",
            decimals: 18,
            chainId: 1,
            logoURI: "https://assets.coingecko.com/coins/images/5013/thumb/sUSD.png?1616150765",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xF81b4Bec6Ca8f9fe7bE01CA734F55B2b6e03A7a0"
                    },
                    "42161": {
                        tokenAddress: "0xA970AF1a584579B618be4d69aD6F73459D112F95"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
            name: "Sushi",
            symbol: "SUSHI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png?1606986688",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a"
                    },
                    "42161": {
                        tokenAddress: "0xd4d42F0b6DEF4CE0383636770eF773390d85c61A"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x0f2D719407FdBeFF09D87557AbB7232601FD9F29",
            name: "Synapse",
            symbol: "SYN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/18024/thumb/syn.png?1635002049",
            extensions: {
                bridgeInfo: {
                    "42161": {
                        tokenAddress: "0x1bCfc0B4eE1471674cd6A9F6B363A034375eAD84"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
            name: "tBTC",
            symbol: "TBTC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11224/thumb/tBTC.png?1589620754",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x50a4a434247089848991DD8f09b889D4e2870aB6"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x2e9d63788249371f1DFC918a52f8d799F4a38C94",
            name: "Tokemak",
            symbol: "TOKE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17495/thumb/tokemak-avatar-200px-black.png?1628131614",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xe1708AbDE4847B4929b70547E5197F1Ba1db2250"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
            name: "OriginTrail",
            symbol: "TRAC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1877/thumb/TRAC.jpg?1635134367",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xA7b98d63a137bF402b4570799ac4caD0BB1c4B1c"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0",
            name: "Tellor",
            symbol: "TRB",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9644/thumb/Blk_icon_current.png?1584980686",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xE3322702BEdaaEd36CdDAb233360B939775ae5f1"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
            name: "Tribe",
            symbol: "TRIBE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14575/thumb/tribe.PNG?1617487954",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x8676815789211E799a6DC86d02748ADF9cF86836"
                    },
                    "42161": {
                        tokenAddress: "0xBfAE6fecD8124ba33cbB2180aAb0Fe4c03914A5A"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
            name: "TrueFi",
            symbol: "TRU",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/13180/thumb/truefi_glyph_color.png?1617610941",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x5b77bCA482bd3E7958b1103d123888EfCCDaF803"
                    }
                }
            }
        },
        {
            name: "UMA Voting Token v1",
            address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
            symbol: "UMA",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea"
                    },
                    "137": {
                        tokenAddress: "0x3066818837c5e6eD6601bd5a91B0762877A6B731"
                    },
                    "42161": {
                        tokenAddress: "0xd693Ec944A85eeca4247eC1c3b130DCa9B0C3b22"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x441761326490cACF7aF299725B6292597EE822c2",
            name: "Unifi Protocol DAO",
            symbol: "UNFI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13152/thumb/logo-2.png?1605748967"
        },
        {
            name: "Uniswap",
            address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            symbol: "UNI",
            decimals: 18,
            chainId: 1,
            logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x6fd9d7AD17242c41f7131d257212c54A0e816691"
                    },
                    "137": {
                        tokenAddress: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f"
                    },
                    "42161": {
                        tokenAddress: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x70D2b7C19352bB76e4409858FF5746e500f2B67c",
            name: "Pawtocol",
            symbol: "UPI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12186/thumb/pawtocol.jpg?1597962008"
        },
        {
            name: "USDCoin",
            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            symbol: "USDC",
            decimals: 6,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"
                    },
                    "137": {
                        tokenAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                    },
                    "42161": {
                        tokenAddress: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"
                    }
                }
            }
        },
        {
            name: "Tether USD",
            address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            symbol: "USDT",
            decimals: 6,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"
                    },
                    "137": {
                        tokenAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
                    },
                    "42161": {
                        tokenAddress: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x3C4B6E6e1eA3D4863700D7F76b36B7f3D3f13E3d",
            name: "Voyager Token",
            symbol: "VGX",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/794/thumb/Voyager-vgx.png?1575693595"
        },
        {
            name: "Wrapped BTC",
            address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            symbol: "WBTC",
            decimals: 8,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
            extensions: {
                bridgeInfo: {
                    "10": {
                        tokenAddress: "0x68f180fcCe6836688e9084f035309E29Bf0A2095"
                    },
                    "137": {
                        tokenAddress: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
                    },
                    "42161": {
                        tokenAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f"
                    }
                }
            }
        },
        {
            name: "Wrapped Ether",
            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            symbol: "WETH",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
            extensions: {
                bridgeInfo: {
                    "42161": {
                        tokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x55296f69f40Ea6d20E478533C15A6B08B654E758",
            name: "XYO Network",
            symbol: "XYO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4519/thumb/XYO_Network-logo.png?1547039819",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xd2507e7b5794179380673870d88B22F94da6abe0"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
            name: "yearn finance",
            symbol: "YFI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xDA537104D6A5edd53c6fBba9A898708E465260b6"
                    },
                    "42161": {
                        tokenAddress: "0x82e3A8F066a6989666b031d916c43672085b1582"
                    }
                }
            }
        },
        {
            chainId: 1,
            address: "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83",
            name: "DFI money",
            symbol: "YFII",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11902/thumb/YFII-logo.78631676.png?1598677348",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0xb8cb8a7F4C2885C03e57E973C74827909Fdc2032"
                    }
                }
            }
        },
        {
            name: "0x Protocol Token",
            address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
            symbol: "ZRX",
            decimals: 18,
            chainId: 1,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xE41d2489571d322189246DaFA5ebDe1F4699F498/logo.png",
            extensions: {
                bridgeInfo: {
                    "137": {
                        tokenAddress: "0x5559Edb74751A0edE9DeA4DC23aeE72cCA6bE3D5"
                    },
                    "42161": {
                        tokenAddress: "0xBD591Bd4DdB64b77B5f76Eab8f03d02519235Ae2"
                    }
                }
            }
        },
        {
            name: "Dai Stablecoin",
            address: "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
            symbol: "DAI",
            decimals: 18,
            chainId: 3,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xaD6D458402F60fD3Bd25163575031ACDce07538D/logo.png"
        },
        {
            name: "Uniswap",
            address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            symbol: "UNI",
            decimals: 18,
            chainId: 3,
            logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
        },
        {
            name: "Wrapped Ether",
            address: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
            symbol: "WETH",
            decimals: 18,
            chainId: 3,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png"
        },
        {
            name: "Dai Stablecoin",
            address: "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735",
            symbol: "DAI",
            decimals: 18,
            chainId: 4,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735/logo.png"
        },
        {
            name: "Maker",
            address: "0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85",
            symbol: "MKR",
            decimals: 18,
            chainId: 4,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85/logo.png"
        },
        {
            name: "Uniswap",
            address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            symbol: "UNI",
            decimals: 18,
            chainId: 4,
            logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
        },
        {
            name: "Wrapped Ether",
            address: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
            symbol: "WETH",
            decimals: 18,
            chainId: 4,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png"
        },
        {
            name: "Uniswap",
            address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            symbol: "UNI",
            decimals: 18,
            chainId: 5,
            logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
        },
        {
            name: "Wrapped Ether",
            address: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
            symbol: "WETH",
            decimals: 18,
            chainId: 5,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6/logo.png"
        },
        {
            chainId: 10,
            address: "0x3e7eF8f50246f725885102E8238CBba33F276747",
            name: "BarnBridge",
            symbol: "BOND",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12811/thumb/barnbridge.jpg?1602728853",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0391D2021f89DC339F60Fff84546EA23E337750f"
                    }
                }
            }
        },
        {
            name: "Curve DAO Token",
            address: "0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53",
            symbol: "CRV",
            decimals: 18,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52"
                    }
                }
            }
        },
        {
            name: "Dai Stablecoin",
            address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            symbol: "DAI",
            decimals: 18,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
                    }
                }
            }
        },
        {
            chainId: 10,
            address: "0x65559aA14915a70190438eF90104769e5E890A00",
            name: "Ethereum Name Service",
            symbol: "ENS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/19785/thumb/acatxTm8_400x400.jpg?1635850140",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72"
                    }
                }
            }
        },
        {
            name: "ChainLink Token",
            address: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
            symbol: "LINK",
            decimals: 18,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x514910771AF9Ca656af840dff83E8264EcF986CA"
                    }
                }
            }
        },
        {
            name: "LoopringCoin V2",
            address: "0xFEaA9194F9F8c1B65429E31341a103071464907E",
            symbol: "LRC",
            decimals: 18,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
                    }
                }
            }
        },
        {
            chainId: 10,
            address: "0x3390108E913824B8eaD638444cc52B9aBdF63798",
            name: "Mask Network",
            symbol: "MASK",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14051/thumb/Mask_Network.jpg?1614050316",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074"
                    }
                }
            }
        },
        {
            name: "Maker",
            address: "0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5",
            symbol: "MKR",
            decimals: 18,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"
                    }
                }
            }
        },
        {
            chainId: 10,
            address: "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
            name: "Perpetual Protocol",
            symbol: "PERP",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12381/thumb/60d18e06844a844ad75901a9_mark_only_03.png?1628674771",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xbC396689893D065F41bc2C6EcbeE5e0085233447"
                    }
                }
            }
        },
        {
            chainId: 10,
            address: "0x7FB688CCf682d58f86D7e38e03f9D22e7705448B",
            name: "Rai Reflex Index",
            symbol: "RAI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919"
                    }
                }
            }
        },
        {
            chainId: 10,
            address: "0xB548f63D4405466B36C0c0aC3318a22fDcec711a",
            name: "Rari Governance Token",
            symbol: "RGT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12900/thumb/Rari_Logo_Transparent.png?1613978014",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xD291E7a03283640FDc51b121aC401383A46cC623"
                    }
                }
            }
        },
        {
            name: "Synthetix Network Token",
            address: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
            symbol: "SNX",
            decimals: 18,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F"
                    }
                }
            }
        },
        {
            name: "UMA Voting Token v1",
            address: "0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea",
            symbol: "UMA",
            decimals: 18,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828"
                    }
                }
            }
        },
        {
            name: "Uniswap",
            address: "0x6fd9d7AD17242c41f7131d257212c54A0e816691",
            symbol: "UNI",
            decimals: 18,
            chainId: 10,
            logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
                    }
                }
            }
        },
        {
            name: "USDCoin",
            address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
            symbol: "USDC",
            decimals: 6,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                    }
                }
            }
        },
        {
            name: "Tether USD",
            address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
            symbol: "USDT",
            decimals: 6,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
                    }
                }
            }
        },
        {
            name: "Wrapped BTC",
            address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
            symbol: "WBTC",
            decimals: 8,
            chainId: 10,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
                    }
                }
            }
        },
        {
            name: "Dai Stablecoin",
            address: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
            symbol: "DAI",
            decimals: 18,
            chainId: 42,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa/logo.png"
        },
        {
            name: "Maker",
            address: "0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD",
            symbol: "MKR",
            decimals: 18,
            chainId: 42,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD/logo.png"
        },
        {
            name: "Uniswap",
            address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            symbol: "UNI",
            decimals: 18,
            chainId: 42,
            logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
        },
        {
            name: "Wrapped Ether",
            address: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
            symbol: "WETH",
            decimals: 18,
            chainId: 42,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xd0A1E359811322d97991E03f863a0C30C2cF029C/logo.png"
        },
        {
            chainId: 137,
            address: "0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f",
            name: "1inch",
            symbol: "1INCH",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x111111111117dC0aa78b770fA6A738034120C302"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
            name: "Aave",
            symbol: "AAVE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x6a6bD53d677F8632631662C48bD47b1D4D6524ee",
            name: "Adventure Gold",
            symbol: "AGLD",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/18125/thumb/lpgblc4h_400x400.jpg?1630570955",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x32353A6C91143bfd6C7d363B546e62a9A2489A20"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xe2341718c6C0CbFa8e6686102DD8FbF4047a9e9B",
            name: "AIOZ Network",
            symbol: "AIOZ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14631/thumb/aioz_logo.png?1617413126",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x626E8036dEB333b408Be468F951bdB42433cBF18"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x95c300e7740D2A88a44124B424bFC1cB2F9c3b89",
            name: "Alchemix",
            symbol: "ALCX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14113/thumb/Alchemix.png?1614409874",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x50858d870FAF55da2fD90FB6DF7c34b5648305C6",
            name: "My Neighbor Alice",
            symbol: "ALICE",
            decimals: 6,
            logoURI: "https://assets.coingecko.com/coins/images/14375/thumb/alice_logo.jpg?1615782968",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xAC51066d7bEC65Dc4589368da368b212745d63E8"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x0621d647cecbFb64b79E44302c1933cB4f27054d",
            name: "Amp",
            symbol: "AMP",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12409/thumb/amp-200x200.png?1599625397",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xfF20817765cB7f73d4bde2e66e067E58D11095C2"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x101A023270368c0D50BFfb62780F4aFd4ea79C35",
            name: "Ankr",
            symbol: "ANKR",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4324/thumb/U85xTl2.png?1608111978",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xB7b31a6BC18e48888545CE79e83E06003bE70930",
            name: "ApeCoin",
            symbol: "APE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/24383/small/apecoin.jpg?1647476455",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x4d224452801ACEd8B2F0aebE155379bb5D594381"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x45C27821E80F8789b60Fd8B600C73815d34DDa6C",
            name: "API3",
            symbol: "API3",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13256/thumb/api3.jpg?1606751424",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0b38210ea11411557c13457D4dA7dC6ea731B88a"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xEE800B277A96B0f490a1A732e1D6395FAD960A26",
            name: "ARPA Chain",
            symbol: "ARPA",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/8506/thumb/9u0a23XY_400x400.jpg?1559027357",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xBA50933C268F567BDC86E1aC131BE072C6B0b71a"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x5eB8D998371971D01954205c7AFE90A7AF6a95AC",
            name: "Audius",
            symbol: "AUDIO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12913/thumb/AudiusCoinLogo_2x.png?1603425727",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x61BDD9C7d4dF4Bf47A4508c0c8245505F2Af5b7b",
            name: "Axie Infinity",
            symbol: "AXS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png?1604471082",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x1FcbE5937B0cc2adf69772D228fA4205aCF4D9b2",
            name: "Badger DAO",
            symbol: "BADGER",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13287/thumb/badger_dao_logo.jpg?1607054976",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x3472A5A71965499acd81997a54BBA8D852C6E53d"
                    }
                }
            }
        },
        {
            name: "Balancer",
            address: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
            symbol: "BAL",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xba100000625a3754423978a60c9317c58a424e3D"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xA8b1E0764f85f53dfe21760e8AfE5446D82606ac",
            name: "Band Protocol",
            symbol: "BAND",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9545/thumb/band-protocol.png?1568730326",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x3Cef98bb43d732E2F285eE605a8158cDE967D219",
            name: "Basic Attention Token",
            symbol: "BAT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/677/thumb/basic-attention-token.png?1547034427",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x91c89A94567980f0e9723b487b0beD586eE96aa7",
            name: "Biconomy",
            symbol: "BICO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/21061/thumb/biconomy_logo.jpg?1638269749",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xF17e65822b568B3903685a7c9F496CF7656Cc6C2"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x438B28C5AA5F00a817b7Def7cE2Fb3d5d1970974",
            name: "Bluzelle",
            symbol: "BLZ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2848/thumb/ColorIcon_3x.png?1622516510",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x5732046A883704404F284Ce41FfADd5b007FD668"
                    }
                }
            }
        },
        {
            name: "Bancor Network Token",
            address: "0xc26D47d5c33aC71AC5CF9F776D63Ba292a4F7842",
            symbol: "BNT",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xA041544fe2BE56CCe31Ebb69102B965E06aacE80",
            name: "BarnBridge",
            symbol: "BOND",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12811/thumb/barnbridge.jpg?1602728853",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0391D2021f89DC339F60Fff84546EA23E337750f"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xf1938Ce12400f9a761084E7A80d37e732a4dA056",
            name: "Chiliz",
            symbol: "CHZ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/8834/thumb/Chiliz.png?1561970540",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x3506424F91fD33084466F402d5D97f05F8e3b4AF"
                    }
                }
            }
        },
        {
            name: "Compound",
            address: "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c",
            symbol: "COMP",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xc00e94Cb662C3520282E6f5717214004A7f26888"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xAdA58DF0F643D959C2A47c9D4d4c1a4deFe3F11C",
            name: "Cronos",
            symbol: "CRO",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/7310/thumb/oCw2s3GI_400x400.jpeg?1645172042",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b"
                    }
                }
            }
        },
        {
            name: "Curve DAO Token",
            address: "0x172370d5Cd63279eFa6d502DAB29171933a610AF",
            symbol: "CRV",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x2727Ab1c2D22170ABc9b595177B2D5C6E1Ab7B7B",
            name: "Cartesi",
            symbol: "CTSI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11038/thumb/cartesi.png?1592288021",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x8c208BC2A808a088a78398fed8f2640cab0b6EDb",
            name: "Cryptex Finance",
            symbol: "CTX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14932/thumb/glossy_icon_-_C200px.png?1619073171",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x321C2fE4446C7c963dc41Dd58879AF648838f98D"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x276C9cbaa4BDf57d7109a41e67BD09699536FA3d",
            name: "Somnium Space CUBEs",
            symbol: "CUBE",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/10687/thumb/CUBE_icon.png?1617026861",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xDf801468a808a32656D2eD2D2d80B72A129739f4"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x66Dc5A08091d1968e08C16aA5b27BAC8398b02Be",
            name: "Civic",
            symbol: "CVC",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/788/thumb/civic.png?1547034556",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x41e5560054824eA6B0732E656E3Ad64E20e94E45"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x4257EA7637c355F81616050CbB6a9b709fd72683",
            name: "Convex Finance",
            symbol: "CVX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15585/thumb/convex.png?1621256328",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B"
                    }
                }
            }
        },
        {
            name: "Dai Stablecoin",
            address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            symbol: "DAI",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x26f5FB1e6C8a65b3A873fF0a213FA16EFF5a7828",
            name: "DerivaDAO",
            symbol: "DDX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13453/thumb/ddx_logo.png?1608741641",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x3A880652F47bFaa771908C07Dd8673A787dAEd3A"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x993f2CafE9dbE525243f4A78BeBC69DAc8D36000",
            name: "DIA",
            symbol: "DIA",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11955/thumb/image.png?1646041751",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x4C3bF0a3DE9524aF68327d1D2558a3B70d17D42a",
            name: "dYdX",
            symbol: "DYDX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17500/thumb/hjnIm9bV.jpg?1628009360",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x92D6C1e31e14520e676a687F0a93788B716BEff5"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
            name: "Dogelon Mars",
            symbol: "ELON",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14962/thumb/6GxcPRo3_400x400.jpg?1619157413",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x7eC26842F195c852Fa843bB9f6D8B583a274a157",
            name: "Enjin Coin",
            symbol: "ENJ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png?1547035078",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xbD7A5Cf51d22930B8B3Df6d834F9BCEf90EE7c4f",
            name: "Ethereum Name Service",
            symbol: "ENS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/19785/thumb/acatxTm8_400x400.jpg?1635850140",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x0E50BEA95Fe001A370A4F1C220C49AEdCB982DeC",
            name: "Ethernity Chain",
            symbol: "ERN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14238/thumb/LOGO_HIGH_QUALITY.png?1647831402",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xBBc2AE13b23d715c30720F079fcd9B4a74093505"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x8a037dbcA8134FFc72C362e394e35E0Cad618F85",
            name: "Euro Coin",
            symbol: "EUROC",
            decimals: 6,
            logoURI: "https://assets.coingecko.com/coins/images/26045/thumb/euro-coin.png?1655394420",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x176f5AB638cf4Ff3B6239Ba609C3fadAA46ef5B0",
            name: "Harvest Finance",
            symbol: "FARM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12304/thumb/Harvest.png?1613016180",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xa0246c9032bC3A600820415aE600c6388619A14D"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x7583FEDDbceFA813dc18259940F76a02710A8905",
            name: "Fetch ai",
            symbol: "FET",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/5681/thumb/Fetch.jpg?1572098136",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x5eCbA59DAcc1ADc5bDEA35f38A732823fc3dE977",
            name: "Ampleforth Governance Token",
            symbol: "FORTH",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14917/thumb/photo_2021-04-22_00.00.03.jpeg?1619020835",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x77FbA179C79De5B7653F68b5039Af940AdA60ce0"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x65A05DB8322701724c197AF82C9CaE41195B0aA8",
            name: "ShapeShift FOX Token",
            symbol: "FOX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9988/thumb/FOX.png?1574330622",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xC9c1c1c20B3658F8787CC2FD702267791f224Ce1",
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png?1558015016",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x3e121107F6F22DA4911079845a470757aF4e1A1b",
            name: "Frax Share",
            symbol: "FXS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13423/thumb/frax_share.png?1608478989",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x09E1943Dd2A4e82032773594f50CF54453000b97",
            name: "Gala",
            symbol: "GALA",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/12493/thumb/GALA-COINGECKO.png?1600233435",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf",
            name: "Golem",
            symbol: "GLM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/542/thumb/Golem_Submark_Positive_RGB.png?1606392013",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429"
                    }
                }
            }
        },
        {
            name: "Gnosis Token",
            address: "0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8",
            symbol: "GNO",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6810e776880C02933D47DB1b9fc05908e5386b96"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xF88fc6b493eda7650E4bcf7A290E8d108F677CfE",
            name: "Gods Unchained",
            symbol: "GODS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17139/thumb/10631.png?1635718182",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xccC8cb5229B0ac8069C51fd58367Fd1e622aFD97"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x5fe2B58c013d7601147DcdD68C143A77499f5531",
            name: "The Graph",
            symbol: "GRT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png?1608145566",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xdb95f9188479575F3F718a245EcA1B3BF74567EC",
            name: "Gitcoin",
            symbol: "GTC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15810/thumb/gitcoin.png?1621992929",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65",
            name: "Gemini Dollar",
            symbol: "GUSD",
            decimals: 2,
            logoURI: "https://assets.coingecko.com/coins/images/5992/thumb/gemini-dollar-gusd.png?1536745278",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x482bc619eE7662759CDc0685B4E78f464Da39C73",
            name: "GYEN",
            symbol: "GYEN",
            decimals: 6,
            logoURI: "https://assets.coingecko.com/coins/images/14191/thumb/icon_gyen_200_200.png?1614843343",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xC08512927D12348F6620a698105e1BAac6EcD911"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x9Cb74C8032b007466865f060ad2c46145d45553D",
            name: "IDEX",
            symbol: "IDEX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2565/thumb/logomark-purple-286x286.png?1638362736",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xB705268213D593B8FD88d3FDEFF93AFF5CbDcfAE"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x183070C90B34A63292cC908Ce1b263Cb56D49A7F",
            name: "Immutable X",
            symbol: "IMX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17233/thumb/imx.png?1636691817",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x4E8dc2149EaC3f3dEf36b1c281EA466338249371",
            name: "Injective",
            symbol: "INJ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12882/thumb/Secondary_Symbol.png?1628233237",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xF18Ac368001b0DdC80aA6a8374deb49e868EFDb8",
            name: "Inverse Finance",
            symbol: "INV",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14205/thumb/inverse_finance.jpg?1614921871",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xf6372cDb9c1d3674E83842e3800F2A62aC9F3C66",
            name: "IoTeX",
            symbol: "IOTX",
            decimals: 18,
            logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2777.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xb87f5c1E81077FfcfE821dA240fd20C99c533aF1",
            name: "JasmyCoin",
            symbol: "JASMY",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13876/thumb/JASMY200x200.jpg?1612473259",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x7420B4b9a0110cdC71fB720908340C03F9Bc03EC"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x42f37A1296b2981F7C3cAcEd84c5096b2Eb0C72C",
            name: "Keep Network",
            symbol: "KEEP",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3373/thumb/IuNzUb5b_400x400.jpg?1589526336",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC"
                    }
                }
            }
        },
        {
            name: "Kyber Network Crystal",
            address: "0x324b28d6565f784d596422B0F2E5aB6e9CFA1Dc7",
            symbol: "KNC",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdd974D5C2e2928deA5F71b9825b8b646686BD200/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x53AEc293212E3B792563Bc16f1be26956adb12e9",
            name: "Keep3rV1",
            symbol: "KP3R",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12966/thumb/kp3r_logo.jpg?1607057458",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xE8A51D0dD1b4525189ddA2187F90ddF0932b5482",
            name: "LCX",
            symbol: "LCX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9985/thumb/zRPSu_0o_400x400.jpg?1574327008",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x037A54AaB062628C9Bbae1FDB1583c195585fe41"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xC3C7d422809852031b44ab29EEC9F1EfF2A58756",
            name: "Lido DAO",
            symbol: "LDO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13573/thumb/Lido_DAO.png?1609873644",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"
                    }
                }
            }
        },
        {
            name: "ChainLink Token",
            address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
            symbol: "LINK",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x514910771AF9Ca656af840dff83E8264EcF986CA"
                    }
                }
            }
        },
        {
            name: "Loom Network",
            address: "0x66EfB7cC647e0efab02eBA4316a2d2941193F6b3",
            symbol: "LOOM",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x3962F4A0A0051DccE0be73A7e09cEf5756736712",
            name: "Livepeer",
            symbol: "LPT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/7137/thumb/logo-circle-green.png?1619593365",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x58b6A8A3302369DAEc383334672404Ee733aB239"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x8Ab2Fec94d17ae69FB90E7c773f2C85Ed1802c01",
            name: "Liquity",
            symbol: "LQTY",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14665/thumb/200-lqty-icon.png?1617631180",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D"
                    }
                }
            }
        },
        {
            name: "LoopringCoin V2",
            address: "0x84e1670F61347CDaeD56dcc736FB990fBB47ddC1",
            symbol: "LRC",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4",
            name: "Decentraland",
            symbol: "MANA",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png?1550108745",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7",
            name: "Mask Network",
            symbol: "MASK",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14051/thumb/Mask_Network.jpg?1614050316",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xAa7DbD1598251f856C12f63557A4C4397c253Cea",
            name: "Moss Carbon Credit",
            symbol: "MCO2",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14414/thumb/ENtxnThA_400x400.jpg?1615948522",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x01288e04435bFcd4718FF203D6eD18146C17Cd4b",
            name: "Magic Internet Money",
            symbol: "MIM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/16786/thumb/mimlogopng.png?1624979612",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x1C5cccA2CB59145A4B25F452660cbA6436DDce9b",
            name: "Mirror Protocol",
            symbol: "MIR",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13295/thumb/mirror_logo_transparent.png?1611554658",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x09a3EcAFa817268f77BE1283176B946C4ff2E608"
                    }
                }
            }
        },
        {
            name: "Maker",
            address: "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
            symbol: "MKR",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xa9f37D84c856fDa3812ad0519Dad44FA0a3Fe207",
            name: "Melon",
            symbol: "MLN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/605/thumb/melon.png?1547034295",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x4985E0B13554fB521840e893574D3848C10Fcc6f",
            name: "PolySwarm",
            symbol: "NCT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2843/thumb/ImcYCVfX_400x400.jpg?1628519767",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x9E46A38F5DaaBe8683E10793b06749EEF7D733d1"
                    }
                }
            }
        },
        {
            name: "Numeraire",
            address: "0x0Bf519071b02F22C17E7Ed5F4002ee1911f46729",
            symbol: "NMR",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x282d8efCe846A88B159800bd4130ad77443Fa1A1",
            name: "Ocean Protocol",
            symbol: "OCEAN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3687/thumb/ocean-protocol-logo.jpg?1547038686",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xa63Beffd33AB3a2EfD92a39A7D2361CEE14cEbA8",
            name: "Origin Protocol",
            symbol: "OGN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3296/thumb/op.jpg?1547037878",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x62414D03084EeB269E18C970a21f45D2967F0170",
            name: "OMG Network",
            symbol: "OMG",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/776/thumb/OMG_Network.jpg?1591167168",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x0EE392bA5ef1354c9bd75a98044667d307C0e773",
            name: "Orion Protocol",
            symbol: "ORN",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/11841/thumb/orion_logo.png?1594943318",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a"
                    }
                }
            }
        },
        {
            name: "Orchid",
            address: "0x9880e3dDA13c8e7D4804691A45160102d31F6060",
            symbol: "OXT",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4575f41308EC1483f3d399aa9a2826d74Da13Deb/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x553d3D295e0f695B9228246232eDF400ed3560B5",
            name: "PAX Gold",
            symbol: "PAXG",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9519/thumb/paxg.PNG?1568542565",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x45804880De22913dAFE09f4980848ECE6EcbAf78"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x263534a4Fe3cb249dF46810718B7B612a30ebbff",
            name: "Perpetual Protocol",
            symbol: "PERP",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12381/thumb/60d18e06844a844ad75901a9_mark_only_03.png?1628674771",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xbC396689893D065F41bc2C6EcbeE5e0085233447"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x8765f05ADce126d70bcdF1b0a48Db573316662eB",
            name: "PlayDapp",
            symbol: "PLA",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14316/thumb/54023228.png?1615366911",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x3a4f40631a4f906c2BaD353Ed06De7A5D3fCb430"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x7dc0cb65EC6019330a6841e9c274f2EE57A6CA6C",
            name: "Pluton",
            symbol: "PLU",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1241/thumb/pluton.png?1548331624",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xD8912C10681D8B21Fd3742244f44658dBA12264E"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x8dc302e2141DA59c934d900886DbF1518Fd92cd4",
            name: "Polkastarter",
            symbol: "POLS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12648/thumb/polkastarter.png?1609813702",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xcB059C5573646047D6d88dDdb87B745C18161d3b",
            name: "Polymath",
            symbol: "POLY",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2784/thumb/inKkF01.png?1605007034",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x9992eC3cF6A55b00978cdDF2b27BC6882d88D1eC"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x0AaB8DC887D34f00D50E19aee48371a941390d14",
            name: "Power Ledger",
            symbol: "POWR",
            decimals: 6,
            logoURI: "https://assets.coingecko.com/coins/images/1104/thumb/power-ledger.png?1547035082",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x595832F8FC6BF59c85C527fEC3740A1b7a361269"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x82FFdFD1d8699E8886a4e77CeFA9dd9710a7FefD",
            name: "Propy",
            symbol: "PRO",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/869/thumb/propy.png?1548332100",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x226bb599a12C826476e3A771454697EA52E9E220"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x36B77a184bE8ee56f5E81C56727B20647A42e28E",
            name: "Quant",
            symbol: "QNT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3370/thumb/5ZOu7brX_400x400.jpg?1612437252",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x4a220E6096B25EADb88358cb44068A3248254675"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x831753DD7087CaC61aB5644b308642cc1c33Dc13",
            name: "Quickswap",
            symbol: "QUICK",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13970/thumb/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x2f81e176471CC57fDC76f7d332FB4511bF2bebDD",
            name: "Radicle",
            symbol: "RAD",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14013/thumb/radicle.png?1614402918",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x31c8EAcBFFdD875c74b94b077895Bd78CF1E64A3"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x00e5646f60AC6Fb446f621d146B6E1886f002905",
            name: "Rai Reflex Index",
            symbol: "RAI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x780053837cE2CeEaD2A90D9151aA21FC89eD49c2",
            name: "Rarible",
            symbol: "RARI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11845/thumb/Rari.png?1594946953",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xc3cFFDAf8F3fdF07da6D5e3A89B8723D5E385ff8",
            name: "Rubic",
            symbol: "RBC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12629/thumb/200x200.png?1607952509",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3"
                    }
                }
            }
        },
        {
            name: "Republic Token",
            address: "0x19782D3Dc4701cEeeDcD90f0993f0A9126ed89d0",
            symbol: "REN",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x408e41876cCCDC0F92210600ef50372656052a38"
                    }
                }
            }
        },
        {
            name: "Reputation Augur v2",
            address: "0x6563c1244820CfBd6Ca8820FBdf0f2847363F733",
            symbol: "REPv2",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x221657776846890989a759BA2973e427DfF5C9bB/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x221657776846890989a759BA2973e427DfF5C9bB"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xAdf2F2Ed91755eA3f4bcC9107a494879f633ae7C",
            name: "Request",
            symbol: "REQ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1031/thumb/Request_icon_green.png?1643250951",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x8f8221aFbB33998d8584A2B05749bA73c37a938a"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x3b9dB434F08003A89554CDB43b3e0b1f8734BdE7",
            name: "Rari Governance Token",
            symbol: "RGT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12900/thumb/Rari_Logo_Transparent.png?1613978014",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xD291E7a03283640FDc51b121aC401383A46cC623"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xbe662058e00849C3Eef2AC9664f37fEfdF2cdbFE",
            name: "iExec RLC",
            symbol: "RLC",
            decimals: 9,
            logoURI: "https://assets.coingecko.com/coins/images/646/thumb/pL1VuXm.png?1604543202",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x607F4C5BB672230e8672085532f7e901544a7375"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x61299774020dA444Af134c82fa83E3810b309991",
            name: "Render Token",
            symbol: "RNDR",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11636/thumb/rndr.png?1638840934",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683",
            name: "The Sandbox",
            symbol: "SAND",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg?1597397942",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec",
            name: "Shiba Inu",
            symbol: "SHIB",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x0C7304fBAf2A320a1c50c46FE03752722F729946",
            name: "Smooth Love Potion",
            symbol: "SLP",
            decimals: 0,
            logoURI: "https://assets.coingecko.com/coins/images/10366/thumb/SLP.png?1578640057",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25"
                    }
                }
            }
        },
        {
            name: "Synthetix Network Token",
            address: "0x50B728D8D964fd00C2d0AAD81718b71311feF68a",
            symbol: "SNX",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xcdB3C70CD25FD15307D84C4F9D37d5C043B33Fb2",
            name: "Spell Token",
            symbol: "SPELL",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15861/thumb/abracadabra-3.png?1622544862",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x090185f2135308BaD17527004364eBcC2D37e5F6"
                    }
                }
            }
        },
        {
            name: "Storj Token",
            address: "0xd72357dAcA2cF11A5F155b9FF7880E595A3F5792",
            symbol: "STORJ",
            decimals: 8,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xB36e3391B22a970d31A9b620Ae1A414C6c256d2a",
            name: "Stox",
            symbol: "STX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1230/thumb/stox-token.png?1547035256",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xa1428174F516F527fafdD146b883bB4428682737",
            name: "SuperFarm",
            symbol: "SUPER",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14040/thumb/6YPdWn6.png?1613975899",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55"
                    }
                }
            }
        },
        {
            name: "Synth sUSD",
            address: "0xF81b4Bec6Ca8f9fe7bE01CA734F55B2b6e03A7a0",
            symbol: "sUSD",
            decimals: 18,
            chainId: 137,
            logoURI: "https://assets.coingecko.com/coins/images/5013/thumb/sUSD.png?1616150765",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
            name: "Sushi",
            symbol: "SUSHI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png?1606986688",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x50a4a434247089848991DD8f09b889D4e2870aB6",
            name: "tBTC",
            symbol: "TBTC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11224/thumb/tBTC.png?1589620754",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xe1708AbDE4847B4929b70547E5197F1Ba1db2250",
            name: "Tokemak",
            symbol: "TOKE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17495/thumb/tokemak-avatar-200px-black.png?1628131614",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x2e9d63788249371f1DFC918a52f8d799F4a38C94"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xA7b98d63a137bF402b4570799ac4caD0BB1c4B1c",
            name: "OriginTrail",
            symbol: "TRAC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1877/thumb/TRAC.jpg?1635134367",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xE3322702BEdaaEd36CdDAb233360B939775ae5f1",
            name: "Tellor",
            symbol: "TRB",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9644/thumb/Blk_icon_current.png?1584980686",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x8676815789211E799a6DC86d02748ADF9cF86836",
            name: "Tribe",
            symbol: "TRIBE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14575/thumb/tribe.PNG?1617487954",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0x5b77bCA482bd3E7958b1103d123888EfCCDaF803",
            name: "TrueFi",
            symbol: "TRU",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/13180/thumb/truefi_glyph_color.png?1617610941",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784"
                    }
                }
            }
        },
        {
            name: "UMA Voting Token v1",
            address: "0x3066818837c5e6eD6601bd5a91B0762877A6B731",
            symbol: "UMA",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828"
                    }
                }
            }
        },
        {
            name: "Uniswap",
            address: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
            symbol: "UNI",
            decimals: 18,
            chainId: 137,
            logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
                    }
                }
            }
        },
        {
            name: "USDCoin",
            address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            symbol: "USDC",
            decimals: 6,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                    }
                }
            }
        },
        {
            name: "Tether USD",
            address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            symbol: "USDT",
            decimals: 6,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
                    }
                }
            }
        },
        {
            name: "Wrapped BTC",
            address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
            symbol: "WBTC",
            decimals: 8,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
                    }
                }
            }
        },
        {
            name: "Wrapped Ether",
            address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
            symbol: "WETH",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
        },
        {
            name: "Wrapped Matic",
            address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
            symbol: "WMATIC",
            decimals: 18,
            chainId: 137,
            logoURI: "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912"
        },
        {
            chainId: 137,
            address: "0xd2507e7b5794179380673870d88B22F94da6abe0",
            name: "XYO Network",
            symbol: "XYO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4519/thumb/XYO_Network-logo.png?1547039819",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x55296f69f40Ea6d20E478533C15A6B08B654E758"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xDA537104D6A5edd53c6fBba9A898708E465260b6",
            name: "yearn finance",
            symbol: "YFI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"
                    }
                }
            }
        },
        {
            chainId: 137,
            address: "0xb8cb8a7F4C2885C03e57E973C74827909Fdc2032",
            name: "DFI money",
            symbol: "YFII",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11902/thumb/YFII-logo.78631676.png?1598677348",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83"
                    }
                }
            }
        },
        {
            name: "0x Protocol Token",
            address: "0x5559Edb74751A0edE9DeA4DC23aeE72cCA6bE3D5",
            symbol: "ZRX",
            decimals: 18,
            chainId: 137,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xE41d2489571d322189246DaFA5ebDe1F4699F498/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xE41d2489571d322189246DaFA5ebDe1F4699F498"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x6314C31A7a1652cE482cffe247E9CB7c3f4BB9aF",
            name: "1inch",
            symbol: "1INCH",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x111111111117dC0aa78b770fA6A738034120C302"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xba5DdD1f9d7F570dc94a51479a000E3BCE967196",
            name: "Aave",
            symbol: "AAVE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x74885b4D524d497261259B38900f54e6dbAd2210",
            name: "ApeCoin",
            symbol: "APE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/24383/small/apecoin.jpg?1647476455",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x4d224452801ACEd8B2F0aebE155379bb5D594381"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xe88998Fb579266628aF6a03e3821d5983e5D0089",
            name: "Axie Infinity",
            symbol: "AXS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png?1604471082",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xBfa641051Ba0a0Ad1b0AcF549a89536A0D76472E",
            name: "Badger DAO",
            symbol: "BADGER",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13287/thumb/badger_dao_logo.jpg?1607054976",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x3472A5A71965499acd81997a54BBA8D852C6E53d"
                    }
                }
            }
        },
        {
            name: "Balancer",
            address: "0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8",
            symbol: "BAL",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xba100000625a3754423978a60c9317c58a424e3D"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xa68Ec98D7ca870cF1Dd0b00EBbb7c4bF60A8e74d",
            name: "Biconomy",
            symbol: "BICO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/21061/thumb/biconomy_logo.jpg?1638269749",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xF17e65822b568B3903685a7c9F496CF7656Cc6C2"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x0D81E50bC677fa67341c44D7eaA9228DEE64A4e1",
            name: "BarnBridge",
            symbol: "BOND",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12811/thumb/barnbridge.jpg?1602728853",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0391D2021f89DC339F60Fff84546EA23E337750f"
                    }
                }
            }
        },
        {
            name: "Compound",
            address: "0x354A6dA3fcde098F8389cad84b0182725c6C91dE",
            symbol: "COMP",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xc00e94Cb662C3520282E6f5717214004A7f26888"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x6FE14d3CC2f7bDdffBa5CdB3BBE7467dd81ea101",
            name: "COTI",
            symbol: "COTI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2962/thumb/Coti.png?1559653863",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xDDB3422497E61e13543BeA06989C0789117555c5"
                    }
                }
            }
        },
        {
            name: "Curve DAO Token",
            address: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
            symbol: "CRV",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x319f865b287fCC10b30d8cE6144e8b6D1b476999",
            name: "Cartesi",
            symbol: "CTSI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11038/thumb/cartesi.png?1592288021",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x9DfFB23CAd3322440bCcFF7aB1C58E781dDBF144",
            name: "Civic",
            symbol: "CVC",
            decimals: 8,
            logoURI: "https://assets.coingecko.com/coins/images/788/thumb/civic.png?1547034556",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x41e5560054824eA6B0732E656E3Ad64E20e94E45"
                    }
                }
            }
        },
        {
            name: "Dai Stablecoin",
            address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            symbol: "DAI",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x51863cB90Ce5d6dA9663106F292fA27c8CC90c5a",
            name: "dYdX",
            symbol: "DYDX",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/17500/thumb/hjnIm9bV.jpg?1628009360",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x92D6C1e31e14520e676a687F0a93788B716BEff5"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x3e4Cff6E50F37F731284A92d44AE943e17077fD4",
            name: "Dogelon Mars",
            symbol: "ELON",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14962/thumb/6GxcPRo3_400x400.jpg?1619157413",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x7fa9549791EFc9030e1Ed3F25D18014163806758",
            name: "Enjin Coin",
            symbol: "ENJ",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png?1547035078",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xfeA31d704DEb0975dA8e77Bf13E04239e70d7c28",
            name: "Ethereum Name Service",
            symbol: "ENS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/19785/thumb/acatxTm8_400x400.jpg?1635850140",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xd42785D323e608B9E99fa542bd8b1000D4c2Df37",
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png?1558015016",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xd9f9d2Ee2d3EFE420699079f16D9e924affFdEA4",
            name: "Frax Share",
            symbol: "FXS",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13423/thumb/frax_share.png?1608478989",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0"
                    }
                }
            }
        },
        {
            name: "Gnosis Token",
            address: "0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1",
            symbol: "GNO",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6810e776880C02933D47DB1b9fc05908e5386b96"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x23A941036Ae778Ac51Ab04CEa08Ed6e2FE103614",
            name: "The Graph",
            symbol: "GRT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png?1608145566",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x7f9a7DB853Ca816B9A138AEe3380Ef34c437dEe0",
            name: "Gitcoin",
            symbol: "GTC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15810/thumb/gitcoin.png?1621992929",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F"
                    }
                }
            }
        },
        {
            name: "ChainLink Token",
            address: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
            symbol: "LINK",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x514910771AF9Ca656af840dff83E8264EcF986CA"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x289ba1701C2F088cf0faf8B3705246331cB8A839",
            name: "Livepeer",
            symbol: "LPT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/7137/thumb/logo-circle-green.png?1619593365",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x58b6A8A3302369DAEc383334672404Ee733aB239"
                    }
                }
            }
        },
        {
            name: "LoopringCoin V2",
            address: "0x46d0cE7de6247b0A95f67b43B589b4041BaE7fbE",
            symbol: "LRC",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x442d24578A564EF628A65e6a7E3e7be2a165E231",
            name: "Decentraland",
            symbol: "MANA",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png?1550108745",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x533A7B414CD1236815a5e09F1E97FC7d5c313739",
            name: "Mask Network",
            symbol: "MASK",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14051/thumb/Mask_Network.jpg?1614050316",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x561877b6b3DD7651313794e5F2894B2F18bE0766",
            name: "Polygon",
            symbol: "MATIC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xB20A02dfFb172C474BC4bDa3fD6f4eE70C04daf2",
            name: "Magic Internet Money",
            symbol: "MIM",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/16786/thumb/mimlogopng.png?1624979612",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3"
                    }
                }
            }
        },
        {
            name: "Maker",
            address: "0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879",
            symbol: "MKR",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x8f5c1A99b1df736Ad685006Cb6ADCA7B7Ae4b514",
            name: "Melon",
            symbol: "MLN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/605/thumb/melon.png?1547034295",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x53236015A675fcB937485F1AE58040e4Fb920d5b",
            name: "PolySwarm",
            symbol: "NCT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/2843/thumb/ImcYCVfX_400x400.jpg?1628519767",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x9E46A38F5DaaBe8683E10793b06749EEF7D733d1"
                    }
                }
            }
        },
        {
            name: "Numeraire",
            address: "0x597701b32553b9fa473e21362D480b3a6B569711",
            symbol: "NMR",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x933d31561e470478079FEB9A6Dd2691fAD8234DF",
            name: "Ocean Protocol",
            symbol: "OCEAN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/3687/thumb/ocean-protocol-logo.jpg?1547038686",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xfEb4DfC8C4Cf7Ed305bb08065D08eC6ee6728429",
            name: "PAX Gold",
            symbol: "PAXG",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/9519/thumb/paxg.PNG?1568542565",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x45804880De22913dAFE09f4980848ECE6EcbAf78"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x753D224bCf9AAFaCD81558c32341416df61D3DAC",
            name: "Perpetual Protocol",
            symbol: "PERP",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12381/thumb/60d18e06844a844ad75901a9_mark_only_03.png?1628674771",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xbC396689893D065F41bc2C6EcbeE5e0085233447"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x4e91F2AF1ee0F84B529478f19794F5AFD423e4A6",
            name: "Power Ledger",
            symbol: "POWR",
            decimals: 6,
            logoURI: "https://assets.coingecko.com/coins/images/1104/thumb/power-ledger.png?1547035082",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x595832F8FC6BF59c85C527fEC3740A1b7a361269"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xaeF5bbcbFa438519a5ea80B4c7181B4E78d419f2",
            name: "Rai Reflex Index",
            symbol: "RAI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xCF8600347Dc375C5f2FdD6Dab9BB66e0b6773cd7",
            name: "Rarible",
            symbol: "RARI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11845/thumb/Rari.png?1594946953",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x2E9AE8f178d5Ea81970C7799A377B3985cbC335F",
            name: "Rubic",
            symbol: "RBC",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12629/thumb/200x200.png?1607952509",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3"
                    }
                }
            }
        },
        {
            name: "Republic Token",
            address: "0x9fA891e1dB0a6D1eEAC4B929b5AAE1011C79a204",
            symbol: "REN",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x408e41876cCCDC0F92210600ef50372656052a38"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xef888bcA6AB6B1d26dbeC977C455388ecd794794",
            name: "Rari Governance Token",
            symbol: "RGT",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12900/thumb/Rari_Logo_Transparent.png?1613978014",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xD291E7a03283640FDc51b121aC401383A46cC623"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x5033833c9fe8B9d3E09EEd2f73d2aaF7E3872fd1",
            name: "Shiba Inu",
            symbol: "SHIB",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE"
                    }
                }
            }
        },
        {
            name: "Synthetix Network Token",
            address: "0xcBA56Cd8216FCBBF3fA6DF6137F3147cBcA37D60",
            symbol: "SNX",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xb74Da9FE2F96B9E0a5f4A3cf0b92dd2bEC617124",
            name: "SOL Wormhole ",
            symbol: "SOL",
            decimals: 9,
            logoURI: "https://assets.coingecko.com/coins/images/22876/thumb/SOL_wh_small.png?1644224316",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xD31a59c85aE9D8edEFeC411D448f90841571b89c"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF",
            name: "Spell Token",
            symbol: "SPELL",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/15861/thumb/abracadabra-3.png?1622544862",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x090185f2135308BaD17527004364eBcC2D37e5F6"
                    }
                }
            }
        },
        {
            name: "Synth sUSD",
            address: "0xA970AF1a584579B618be4d69aD6F73459D112F95",
            symbol: "sUSD",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://assets.coingecko.com/coins/images/5013/thumb/sUSD.png?1616150765",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xd4d42F0b6DEF4CE0383636770eF773390d85c61A",
            name: "Sushi",
            symbol: "SUSHI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png?1606986688",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x1bCfc0B4eE1471674cd6A9F6B363A034375eAD84",
            name: "Synapse",
            symbol: "SYN",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/18024/thumb/syn.png?1635002049",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0f2D719407FdBeFF09D87557AbB7232601FD9F29"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0xBfAE6fecD8124ba33cbB2180aAb0Fe4c03914A5A",
            name: "Tribe",
            symbol: "TRIBE",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/14575/thumb/tribe.PNG?1617487954",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B"
                    }
                }
            }
        },
        {
            name: "UMA Voting Token v1",
            address: "0xd693Ec944A85eeca4247eC1c3b130DCa9B0C3b22",
            symbol: "UMA",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828"
                    }
                }
            }
        },
        {
            name: "Uniswap",
            address: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
            symbol: "UNI",
            decimals: 18,
            chainId: 42161,
            logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
                    }
                }
            }
        },
        {
            name: "USDCoin",
            address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
            symbol: "USDC",
            decimals: 6,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                    }
                }
            }
        },
        {
            name: "Tether USD",
            address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            symbol: "USDT",
            decimals: 6,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
                    }
                }
            }
        },
        {
            name: "Wrapped BTC",
            address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
            symbol: "WBTC",
            decimals: 8,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
                    }
                }
            }
        },
        {
            name: "Wrapped Ether",
            address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            symbol: "WETH",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
                    }
                }
            }
        },
        {
            chainId: 42161,
            address: "0x82e3A8F066a6989666b031d916c43672085b1582",
            name: "yearn finance",
            symbol: "YFI",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"
                    }
                }
            }
        },
        {
            name: "0x Protocol Token",
            address: "0xBD591Bd4DdB64b77B5f76Eab8f03d02519235Ae2",
            symbol: "ZRX",
            decimals: 18,
            chainId: 42161,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xE41d2489571d322189246DaFA5ebDe1F4699F498/logo.png",
            extensions: {
                bridgeInfo: {
                    "1": {
                        tokenAddress: "0xE41d2489571d322189246DaFA5ebDe1F4699F498"
                    }
                }
            }
        },
        {
            name: "Wrapped Ether",
            address: "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
            symbol: "WETH",
            decimals: 18,
            chainId: 80001,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
        },
        {
            name: "Wrapped Matic",
            address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
            symbol: "WMATIC",
            decimals: 18,
            chainId: 80001,
            logoURI: "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912"
        }
    ]
}; //# sourceMappingURL=tokens-uniswap.js.map


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

/***/ "../common/dist/esm/explorer.js":
/*!**************************************!*\
  !*** ../common/dist/esm/explorer.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exploreAddressUrl": () => (/* binding */ exploreAddressUrl),
/* harmony export */   "explorerNftUrl": () => (/* binding */ explorerNftUrl),
/* harmony export */   "explorerUrl": () => (/* binding */ explorerUrl)
/* harmony export */ });
/* harmony import */ var _ethereum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ethereum */ "../common/dist/esm/ethereum/index.js");
/* harmony import */ var _solana__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solana */ "../common/dist/esm/solana/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



function explorerUrl(base, tx, connectionUrl) {
    switch(base){
        case _ethereum__WEBPACK_IMPORTED_MODULE_0__.EthereumExplorer.ETHERSCAN:
            return join(_ethereum__WEBPACK_IMPORTED_MODULE_0__.EthereumExplorer.ETHERSCAN, `tx/${tx}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_EXPLORER:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_EXPLORER, `tx/${tx}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLSCAN:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLSCAN, `tx/${tx}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_BEACH:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_BEACH, `transaction/${tx}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_FM:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_FM, `tx/${tx}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.XRAY:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.XRAY, `tx/${tx}${clusterSuffix(base, connectionUrl)}`);
        default:
            throw new Error("unknown explorer base");
    }
}
// returns explorer url to explore addresses
function exploreAddressUrl(base, address, connectionUrl) {
    switch(base){
        case _ethereum__WEBPACK_IMPORTED_MODULE_0__.EthereumExplorer.ETHERSCAN:
            return join(_ethereum__WEBPACK_IMPORTED_MODULE_0__.EthereumExplorer.ETHERSCAN, `address/${address}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_EXPLORER:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_EXPLORER, `address/${address}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLSCAN:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLSCAN, `account/${address}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_BEACH:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_BEACH, `address/${address}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_FM:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_FM, `address/${address}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.XRAY:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.XRAY, `account/${address}${clusterSuffix(base, connectionUrl)}`);
        default:
            throw new Error("unknown explorer base");
    }
}
// Returns the explorer url to display the given nft.
function explorerNftUrl(base, nft, connectionUrl) {
    switch(base){
        case _ethereum__WEBPACK_IMPORTED_MODULE_0__.EthereumExplorer.ETHERSCAN:
            return join(_ethereum__WEBPACK_IMPORTED_MODULE_0__.EthereumExplorer.ETHERSCAN, `address/${nft.contractAddress.toString()}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_EXPLORER:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_EXPLORER, `address/${nft.mint.toString()}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLSCAN:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLSCAN, `address/${nft.mint.toString()}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_BEACH:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_BEACH, `address/${nft.mint.toString()}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_FM:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_FM, `address/${nft.mint.toString()}${clusterSuffix(base, connectionUrl)}`);
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.XRAY:
            return join(_solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.XRAY, `token/${nft.mint.toString()}${clusterSuffix(base, connectionUrl)}`);
        default:
            throw new Error("unknown explorer base");
    }
}
/**
 * Returns the cluster search params required by each explorer.
 */ function clusterSuffix(base, connectionUrl) {
    switch(base){
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_EXPLORER:
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLSCAN:
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_FM:
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.SOLANA_BEACH:
        case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.XRAY:
            switch(connectionUrl){
                case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaCluster.MAINNET:
                    return "?cluster=mainnet";
                case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaCluster.DEVNET:
                    return "?cluster=devnet";
                case _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaCluster.LOCALNET:
                    return "?cluster=localnet";
                default:
                    return `?cluster=custom&${encodeURIComponent(base)}`;
            }
        default:
            throw new Error("unknown explorer base");
    }
}
const join = (...args)=>args.join("/"); //# sourceMappingURL=explorer.js.map


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

/***/ "../common/dist/esm/fake-expo-secure-store.js":
/*!****************************************************!*\
  !*** ../common/dist/esm/fake-expo-secure-store.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteItemAsync": () => (/* binding */ deleteItemAsync),
/* harmony export */   "getItemAsync": () => (/* binding */ getItemAsync),
/* harmony export */   "setItemAsync": () => (/* binding */ setItemAsync)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

// this is loaded instead of `expo-secure-store` if this package is loaded
// outside react-native. This is necessary because it has react-native
// dependencies which are incompatible with standard react code.
const MEM_STORAGE = {};
const deleteItemAsync = (key)=>new Promise((res)=>{
        delete MEM_STORAGE[key];
        res();
    });
const getItemAsync = (key)=>new Promise((res)=>{
        const result = MEM_STORAGE[key];
        res(result);
    });
const setItemAsync = (key, value)=>new Promise((res)=>{
        MEM_STORAGE[key] = value;
        res();
    }); //# sourceMappingURL=fake-expo-secure-store.js.map


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

/***/ "../common/dist/esm/feature-gates.js":
/*!*******************************************!*\
  !*** ../common/dist/esm/feature-gates.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_FEATURE_GATES": () => (/* binding */ DEFAULT_FEATURE_GATES),
/* harmony export */   "PRIMARY_PUBKEY_ENABLED": () => (/* binding */ PRIMARY_PUBKEY_ENABLED),
/* harmony export */   "STRIPE_ENABLED": () => (/* binding */ STRIPE_ENABLED),
/* harmony export */   "buildFullFeatureGatesMap": () => (/* binding */ buildFullFeatureGatesMap)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

const PRIMARY_PUBKEY_ENABLED = "PRIMARY_PUBKEY_ENABLED";
const STRIPE_ENABLED = "STRIPE_ENABLED";
// Used as a fallback if feature gates worker is offline
const DEFAULT_FEATURE_GATES = {
    STRIPE_ENABLED: false,
    PRIMARY_PUBKEY_ENABLED: true,
    SWAP_FEES_ENABLED: false,
    DROPZONE_ENABLED: false,
    STICKER_ENABLED: false,
    BARTER_ENABLED: false
};
/*
 * To avoid any runtime errors because of corrupt data in the
 * local DB, we clean the gates map here and return it.
 */ const buildFullFeatureGatesMap = (featureGates)=>{
    let gates = {};
    Object.keys(DEFAULT_FEATURE_GATES).map((feature)=>{
        var _a;
        gates[feature] = (_a = featureGates === null || featureGates === void 0 ? void 0 : featureGates[feature]) !== null && _a !== void 0 ? _a : DEFAULT_FEATURE_GATES[feature];
    });
    return gates;
}; //# sourceMappingURL=feature-gates.js.map


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

/***/ "../common/dist/esm/generated-config.js":
/*!**********************************************!*\
  !*** ../common/dist/esm/generated-config.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BACKPACK_CONFIG_EXTENSION_KEY": () => (/* binding */ BACKPACK_CONFIG_EXTENSION_KEY),
/* harmony export */   "BACKPACK_CONFIG_GITHUB_RUN_NUMBER": () => (/* binding */ BACKPACK_CONFIG_GITHUB_RUN_NUMBER),
/* harmony export */   "BACKPACK_CONFIG_LOG_LEVEL": () => (/* binding */ BACKPACK_CONFIG_LOG_LEVEL),
/* harmony export */   "BACKPACK_CONFIG_VERSION": () => (/* binding */ BACKPACK_CONFIG_VERSION),
/* harmony export */   "BACKPACK_CONFIG_XNFT_PROXY": () => (/* binding */ BACKPACK_CONFIG_XNFT_PROXY),
/* harmony export */   "BACKPACK_FEATURE_AGGREGATE_WALLETS": () => (/* binding */ BACKPACK_FEATURE_AGGREGATE_WALLETS),
/* harmony export */   "BACKPACK_FEATURE_FORCE_LATEST_VERSION": () => (/* binding */ BACKPACK_FEATURE_FORCE_LATEST_VERSION),
/* harmony export */   "BACKPACK_FEATURE_LIGHT_MODE": () => (/* binding */ BACKPACK_FEATURE_LIGHT_MODE),
/* harmony export */   "BACKPACK_FEATURE_POP_MODE": () => (/* binding */ BACKPACK_FEATURE_POP_MODE),
/* harmony export */   "BACKPACK_FEATURE_XNFT": () => (/* binding */ BACKPACK_FEATURE_XNFT)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

////////////////////////////////////////////////////////////////////////////////
// This file is generated via a pre-build step via scripts/config.sh.
////////////////////////////////////////////////////////////////////////////////
//
// Config for @coral-xyz/common.
//
const BACKPACK_CONFIG_VERSION = "development";
const BACKPACK_CONFIG_GITHUB_RUN_NUMBER = "1";
const BACKPACK_CONFIG_XNFT_PROXY = "production";
const BACKPACK_CONFIG_LOG_LEVEL = "debug";
//
// This can be found in the chrome store.
// Note to self: we might need to change this for firefox, when we publish there.
//
const BACKPACK_CONFIG_EXTENSION_KEY = "aflkmfhebedbjioipglgcbcmnbpgliof";
const BACKPACK_FEATURE_LIGHT_MODE = true;
const BACKPACK_FEATURE_POP_MODE = true;
const BACKPACK_FEATURE_XNFT = true;
const BACKPACK_FEATURE_AGGREGATE_WALLETS = false;
const BACKPACK_FEATURE_FORCE_LATEST_VERSION = false; //# sourceMappingURL=generated-config.js.map


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

/***/ "../common/dist/esm/index.js":
/*!***********************************!*\
  !*** ../common/dist/esm/index.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASSOCIATED_TOKEN_PROGRAM_ID": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.ASSOCIATED_TOKEN_PROGRAM_ID),
/* harmony export */   "AVATAR_BASE_URL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_BASE_URL),
/* harmony export */   "BACKEND_API_URL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.BACKEND_API_URL),
/* harmony export */   "BACKEND_EVENT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.BACKEND_EVENT),
/* harmony export */   "BACKGROUND_SERVICE_WORKER_READY": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.BACKGROUND_SERVICE_WORKER_READY),
/* harmony export */   "BACKPACK_CONFIG_EXTENSION_KEY": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_CONFIG_EXTENSION_KEY),
/* harmony export */   "BACKPACK_CONFIG_GITHUB_RUN_NUMBER": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_CONFIG_GITHUB_RUN_NUMBER),
/* harmony export */   "BACKPACK_CONFIG_LOG_LEVEL": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_CONFIG_LOG_LEVEL),
/* harmony export */   "BACKPACK_CONFIG_VERSION": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_CONFIG_VERSION),
/* harmony export */   "BACKPACK_CONFIG_XNFT_PROXY": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_CONFIG_XNFT_PROXY),
/* harmony export */   "BACKPACK_FEATURE_AGGREGATE_WALLETS": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_FEATURE_AGGREGATE_WALLETS),
/* harmony export */   "BACKPACK_FEATURE_FORCE_LATEST_VERSION": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_FEATURE_FORCE_LATEST_VERSION),
/* harmony export */   "BACKPACK_FEATURE_LIGHT_MODE": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_FEATURE_LIGHT_MODE),
/* harmony export */   "BACKPACK_FEATURE_POP_MODE": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_FEATURE_POP_MODE),
/* harmony export */   "BACKPACK_FEATURE_XNFT": () => (/* reexport safe */ _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_FEATURE_XNFT),
/* harmony export */   "BACKPACK_GITHUB_LINK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.BACKPACK_GITHUB_LINK),
/* harmony export */   "BACKPACK_LINK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.BACKPACK_LINK),
/* harmony export */   "BACKPACK_TEAM": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.BACKPACK_TEAM),
/* harmony export */   "BACKPACK_TERMS_OF_SERVICE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.BACKPACK_TERMS_OF_SERVICE),
/* harmony export */   "BAKED_IN_XNFTS": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.BAKED_IN_XNFTS),
/* harmony export */   "BackgroundEthereumProvider": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.BackgroundEthereumProvider),
/* harmony export */   "BackgroundSolanaConnection": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.BackgroundSolanaConnection),
/* harmony export */   "Blockchain": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_17__.Blockchain),
/* harmony export */   "BrowserRuntimeCommon": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.BrowserRuntimeCommon),
/* harmony export */   "BrowserRuntimeExtension": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.BrowserRuntimeExtension),
/* harmony export */   "CHANNEL_ETHEREUM_CONNECTION_INJECTED_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_ETHEREUM_CONNECTION_INJECTED_REQUEST),
/* harmony export */   "CHANNEL_ETHEREUM_CONNECTION_INJECTED_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_ETHEREUM_CONNECTION_INJECTED_RESPONSE),
/* harmony export */   "CHANNEL_ETHEREUM_CONNECTION_RPC_UI": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_ETHEREUM_CONNECTION_RPC_UI),
/* harmony export */   "CHANNEL_ETHEREUM_NOTIFICATION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_ETHEREUM_NOTIFICATION),
/* harmony export */   "CHANNEL_ETHEREUM_RPC_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_ETHEREUM_RPC_REQUEST),
/* harmony export */   "CHANNEL_ETHEREUM_RPC_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_ETHEREUM_RPC_RESPONSE),
/* harmony export */   "CHANNEL_PLUGIN_CONNECTION_BRIDGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_PLUGIN_CONNECTION_BRIDGE),
/* harmony export */   "CHANNEL_PLUGIN_LAUNCH_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_PLUGIN_LAUNCH_REQUEST),
/* harmony export */   "CHANNEL_PLUGIN_NOTIFICATION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_PLUGIN_NOTIFICATION),
/* harmony export */   "CHANNEL_PLUGIN_RENDER_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_PLUGIN_RENDER_REQUEST),
/* harmony export */   "CHANNEL_PLUGIN_RPC_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_PLUGIN_RPC_REQUEST),
/* harmony export */   "CHANNEL_PLUGIN_RPC_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_PLUGIN_RPC_RESPONSE),
/* harmony export */   "CHANNEL_POPUP_NOTIFICATIONS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_POPUP_NOTIFICATIONS),
/* harmony export */   "CHANNEL_POPUP_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_POPUP_RESPONSE),
/* harmony export */   "CHANNEL_POPUP_RPC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_POPUP_RPC),
/* harmony export */   "CHANNEL_SOLANA_CONNECTION_INJECTED_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_SOLANA_CONNECTION_INJECTED_REQUEST),
/* harmony export */   "CHANNEL_SOLANA_CONNECTION_INJECTED_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_SOLANA_CONNECTION_INJECTED_RESPONSE),
/* harmony export */   "CHANNEL_SOLANA_CONNECTION_RPC_UI": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_SOLANA_CONNECTION_RPC_UI),
/* harmony export */   "CHANNEL_SOLANA_NOTIFICATION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_SOLANA_NOTIFICATION),
/* harmony export */   "CHANNEL_SOLANA_RPC_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_SOLANA_RPC_REQUEST),
/* harmony export */   "CHANNEL_SOLANA_RPC_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_SOLANA_RPC_RESPONSE),
/* harmony export */   "CHAT_MESSAGES": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.CHAT_MESSAGES),
/* harmony export */   "ChannelAppUi": () => (/* reexport safe */ _channel__WEBPACK_IMPORTED_MODULE_5__.ChannelAppUi),
/* harmony export */   "ChannelAppUiClient": () => (/* reexport safe */ _channel__WEBPACK_IMPORTED_MODULE_5__.ChannelAppUiClient),
/* harmony export */   "ChannelAppUiNotifications": () => (/* reexport safe */ _channel__WEBPACK_IMPORTED_MODULE_5__.ChannelAppUiNotifications),
/* harmony export */   "ChannelAppUiResponder": () => (/* reexport safe */ _channel__WEBPACK_IMPORTED_MODULE_5__.ChannelAppUiResponder),
/* harmony export */   "ChannelAppUiServer": () => (/* reexport safe */ _channel__WEBPACK_IMPORTED_MODULE_5__.ChannelAppUiServer),
/* harmony export */   "ChannelClient": () => (/* reexport safe */ _channel__WEBPACK_IMPORTED_MODULE_5__.ChannelClient),
/* harmony export */   "ChannelContentScript": () => (/* reexport safe */ _channel__WEBPACK_IMPORTED_MODULE_5__.ChannelContentScript),
/* harmony export */   "ChannelServer": () => (/* reexport safe */ _channel__WEBPACK_IMPORTED_MODULE_5__.ChannelServer),
/* harmony export */   "DEFAULT_AGGREGATE_WALLETS": () => (/* reexport safe */ _preferences__WEBPACK_IMPORTED_MODULE_15__.DEFAULT_AGGREGATE_WALLETS),
/* harmony export */   "DEFAULT_AUTO_LOCK_INTERVAL_SECS": () => (/* reexport safe */ _preferences__WEBPACK_IMPORTED_MODULE_15__.DEFAULT_AUTO_LOCK_INTERVAL_SECS),
/* harmony export */   "DEFAULT_DARK_MODE": () => (/* reexport safe */ _preferences__WEBPACK_IMPORTED_MODULE_15__.DEFAULT_DARK_MODE),
/* harmony export */   "DEFAULT_DEVELOPER_MODE": () => (/* reexport safe */ _preferences__WEBPACK_IMPORTED_MODULE_15__.DEFAULT_DEVELOPER_MODE),
/* harmony export */   "DEFAULT_FEATURE_GATES": () => (/* reexport safe */ _feature_gates__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_FEATURE_GATES),
/* harmony export */   "DEFAULT_GROUP_CHATS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_GROUP_CHATS),
/* harmony export */   "DEFAULT_PUBKEY_STR": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PUBKEY_STR),
/* harmony export */   "DEFAULT_SOLANA_CLUSTER": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.DEFAULT_SOLANA_CLUSTER),
/* harmony export */   "DELETE_MESSAGE": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.DELETE_MESSAGE),
/* harmony export */   "DISCORD_INVITE_LINK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.DISCORD_INVITE_LINK),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_CALL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_CALL),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_ESTIMATE_GAS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_ESTIMATE_GAS),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_AVATAR": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_AVATAR),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_BALANCE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_BALANCE),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_BLOCK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_BLOCK),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_BLOCK_NUMBER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_BLOCK_NUMBER),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_BLOCK_WITH_TRANSACTIONS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_BLOCK_WITH_TRANSACTIONS),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_CODE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_CODE),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_FEE_DATA": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_FEE_DATA),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_GAS_PRICE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_GAS_PRICE),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_NETWORK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_NETWORK),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_RESOLVER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_RESOLVER),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_STORAGE_AT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_STORAGE_AT),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_TRANSACTION),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_COUNT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_COUNT),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_RECEIPT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_GET_TRANSACTION_RECEIPT),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_LOOKUP_ADDRESS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_LOOKUP_ADDRESS),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_RESOLVE_NAME": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_RESOLVE_NAME),
/* harmony export */   "ETHEREUM_PROVIDER_RPC_WAIT_FOR_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PROVIDER_RPC_WAIT_FOR_TRANSACTION),
/* harmony export */   "ETHEREUM_RPC_METHOD_CONNECT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_RPC_METHOD_CONNECT),
/* harmony export */   "ETHEREUM_RPC_METHOD_DISCONNECT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_RPC_METHOD_DISCONNECT),
/* harmony export */   "ETHEREUM_RPC_METHOD_SIGN_AND_SEND_TX": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_RPC_METHOD_SIGN_AND_SEND_TX),
/* harmony export */   "ETHEREUM_RPC_METHOD_SIGN_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_RPC_METHOD_SIGN_MESSAGE),
/* harmony export */   "ETHEREUM_RPC_METHOD_SIGN_TX": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_RPC_METHOD_SIGN_TX),
/* harmony export */   "ETHEREUM_RPC_METHOD_SWITCH_CHAIN": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_RPC_METHOD_SWITCH_CHAIN),
/* harmony export */   "ETH_NATIVE_MINT": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.ETH_NATIVE_MINT),
/* harmony export */   "EXECUTE_BARTER": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.EXECUTE_BARTER),
/* harmony export */   "EXTENSION_HEIGHT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_HEIGHT),
/* harmony export */   "EXTENSION_WIDTH": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_WIDTH),
/* harmony export */   "Ethereum": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.Ethereum),
/* harmony export */   "EthereumChainIds": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.EthereumChainIds),
/* harmony export */   "EthereumConnectionUrl": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.EthereumConnectionUrl),
/* harmony export */   "EthereumExplorer": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.EthereumExplorer),
/* harmony export */   "HARDENING": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.HARDENING),
/* harmony export */   "IDL": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.IDL),
/* harmony export */   "IS_MOBILE": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.IS_MOBILE),
/* harmony export */   "LEDGER_IFRAME_URL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_IFRAME_URL),
/* harmony export */   "LEDGER_INJECTED_CHANNEL_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_INJECTED_CHANNEL_REQUEST),
/* harmony export */   "LEDGER_INJECTED_CHANNEL_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_INJECTED_CHANNEL_RESPONSE),
/* harmony export */   "LEDGER_METHOD_ETHEREUM_SIGN_EIP712_HASHED_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_METHOD_ETHEREUM_SIGN_EIP712_HASHED_MESSAGE),
/* harmony export */   "LEDGER_METHOD_ETHEREUM_SIGN_EIP712_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_METHOD_ETHEREUM_SIGN_EIP712_MESSAGE),
/* harmony export */   "LEDGER_METHOD_ETHEREUM_SIGN_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_METHOD_ETHEREUM_SIGN_MESSAGE),
/* harmony export */   "LEDGER_METHOD_ETHEREUM_SIGN_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_METHOD_ETHEREUM_SIGN_TRANSACTION),
/* harmony export */   "LEDGER_METHOD_SOLANA_SIGN_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_METHOD_SOLANA_SIGN_MESSAGE),
/* harmony export */   "LEDGER_METHOD_SOLANA_SIGN_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_METHOD_SOLANA_SIGN_TRANSACTION),
/* harmony export */   "LEDGER_METHOD_UNLOCK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_METHOD_UNLOCK),
/* harmony export */   "LOAD_PUBLIC_KEY_AMOUNT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LOAD_PUBLIC_KEY_AMOUNT),
/* harmony export */   "LogLevel": () => (/* reexport safe */ _logging__WEBPACK_IMPORTED_MODULE_10__.LogLevel),
/* harmony export */   "MESSAGING_COMMUNICATION_FETCH": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGING_COMMUNICATION_FETCH),
/* harmony export */   "MESSAGING_COMMUNICATION_FETCH_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGING_COMMUNICATION_FETCH_RESPONSE),
/* harmony export */   "MESSAGING_COMMUNICATION_PUSH": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGING_COMMUNICATION_PUSH),
/* harmony export */   "MOBILE_CHANNEL_BG_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_BG_REQUEST),
/* harmony export */   "MOBILE_CHANNEL_BG_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_BG_RESPONSE),
/* harmony export */   "MOBILE_CHANNEL_BG_RESPONSE_INNER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_BG_RESPONSE_INNER),
/* harmony export */   "MOBILE_CHANNEL_FE_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_FE_REQUEST),
/* harmony export */   "MOBILE_CHANNEL_FE_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_FE_RESPONSE),
/* harmony export */   "MOBILE_CHANNEL_FE_RESPONSE_INNER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_FE_RESPONSE_INNER),
/* harmony export */   "MOBILE_CHANNEL_HOST_RPC_REQUEST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_HOST_RPC_REQUEST),
/* harmony export */   "MOBILE_CHANNEL_HOST_RPC_RESPONSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_HOST_RPC_RESPONSE),
/* harmony export */   "MOBILE_CHANNEL_LOGS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_LOGS),
/* harmony export */   "NATIVE_ACCOUNT_RENT_EXEMPTION_LAMPORTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NATIVE_ACCOUNT_RENT_EXEMPTION_LAMPORTS),
/* harmony export */   "NAV_COMPONENT_CONTACTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_CONTACTS),
/* harmony export */   "NAV_COMPONENT_MESSAGE_CHAT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_MESSAGE_CHAT),
/* harmony export */   "NAV_COMPONENT_MESSAGE_GROUP_CHAT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_MESSAGE_GROUP_CHAT),
/* harmony export */   "NAV_COMPONENT_MESSAGE_PROFILE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_MESSAGE_PROFILE),
/* harmony export */   "NAV_COMPONENT_MESSAGE_REQUESTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_MESSAGE_REQUESTS),
/* harmony export */   "NAV_COMPONENT_NFT_CHAT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_NFT_CHAT),
/* harmony export */   "NAV_COMPONENT_NFT_COLLECTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_NFT_COLLECTION),
/* harmony export */   "NAV_COMPONENT_NFT_DETAIL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_NFT_DETAIL),
/* harmony export */   "NAV_COMPONENT_NFT_EXPERIENCE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_NFT_EXPERIENCE),
/* harmony export */   "NAV_COMPONENT_TOKEN": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_TOKEN),
/* harmony export */   "NAV_COMPONENT_XNFT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NAV_COMPONENT_XNFT),
/* harmony export */   "NEW_COLORS": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.NEW_COLORS),
/* harmony export */   "NOTIFICATION_ACTIVE_BLOCKCHAIN_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ACTIVE_BLOCKCHAIN_UPDATED),
/* harmony export */   "NOTIFICATION_ADD": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.NOTIFICATION_ADD),
/* harmony export */   "NOTIFICATION_AGGREGATE_WALLETS_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_AGGREGATE_WALLETS_UPDATED),
/* harmony export */   "NOTIFICATION_APPROVED_ORIGINS_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_APPROVED_ORIGINS_UPDATE),
/* harmony export */   "NOTIFICATION_AUTO_LOCK_SETTINGS_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_AUTO_LOCK_SETTINGS_UPDATED),
/* harmony export */   "NOTIFICATION_BLOCKCHAIN_KEYRING_CREATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_BLOCKCHAIN_KEYRING_CREATED),
/* harmony export */   "NOTIFICATION_BLOCKCHAIN_KEYRING_DELETED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_BLOCKCHAIN_KEYRING_DELETED),
/* harmony export */   "NOTIFICATION_DARK_MODE_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_DARK_MODE_UPDATED),
/* harmony export */   "NOTIFICATION_DEVELOPER_MODE_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_DEVELOPER_MODE_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_ACTIVE_WALLET_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ETHEREUM_ACTIVE_WALLET_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_CHAIN_ID_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ETHEREUM_CHAIN_ID_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_CONNECTED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ETHEREUM_CONNECTED),
/* harmony export */   "NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_DISCONNECTED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ETHEREUM_DISCONNECTED),
/* harmony export */   "NOTIFICATION_ETHEREUM_EXPLORER_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ETHEREUM_EXPLORER_UPDATED),
/* harmony export */   "NOTIFICATION_ETHEREUM_FEE_DATA_DID_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ETHEREUM_FEE_DATA_DID_UPDATE),
/* harmony export */   "NOTIFICATION_ETHEREUM_TOKENS_DID_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ETHEREUM_TOKENS_DID_UPDATE),
/* harmony export */   "NOTIFICATION_FEATURE_GATES_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_FEATURE_GATES_UPDATED),
/* harmony export */   "NOTIFICATION_KEYNAME_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYNAME_UPDATE),
/* harmony export */   "NOTIFICATION_KEYRING_ACTIVE_BLOCKCHAIN_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_ACTIVE_BLOCKCHAIN_UPDATED),
/* harmony export */   "NOTIFICATION_KEYRING_CREATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_CREATED),
/* harmony export */   "NOTIFICATION_KEYRING_DERIVED_WALLET": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_DERIVED_WALLET),
/* harmony export */   "NOTIFICATION_KEYRING_IMPORTED_SECRET_KEY": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_IMPORTED_SECRET_KEY),
/* harmony export */   "NOTIFICATION_KEYRING_IMPORTED_WALLET": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_IMPORTED_WALLET),
/* harmony export */   "NOTIFICATION_KEYRING_KEY_DELETE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_KEY_DELETE),
/* harmony export */   "NOTIFICATION_KEYRING_RESET_MNEMONIC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_RESET_MNEMONIC),
/* harmony export */   "NOTIFICATION_KEYRING_SET_MNEMONIC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_SET_MNEMONIC),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_ACTIVE_USER_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_STORE_ACTIVE_USER_UPDATED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_CREATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_STORE_CREATED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_LOCKED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_STORE_LOCKED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_REMOVED_USER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_STORE_REMOVED_USER),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_RESET": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_STORE_RESET),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_UNLOCKED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_STORE_UNLOCKED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_USERNAME_ACCOUNT_CREATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_STORE_USERNAME_ACCOUNT_CREATED),
/* harmony export */   "NOTIFICATION_KEYRING_STORE_USER_AVATAR_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEYRING_STORE_USER_AVATAR_UPDATED),
/* harmony export */   "NOTIFICATION_KEY_IS_COLD_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_KEY_IS_COLD_UPDATE),
/* harmony export */   "NOTIFICATION_NAVIGATION_URL_DID_CHANGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_NAVIGATION_URL_DID_CHANGE),
/* harmony export */   "NOTIFICATION_SOLANA_ACTIVE_WALLET_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_SOLANA_ACTIVE_WALLET_UPDATED),
/* harmony export */   "NOTIFICATION_SOLANA_COMMITMENT_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_SOLANA_COMMITMENT_UPDATED),
/* harmony export */   "NOTIFICATION_SOLANA_CONNECTED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_SOLANA_CONNECTED),
/* harmony export */   "NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED),
/* harmony export */   "NOTIFICATION_SOLANA_DISCONNECTED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_SOLANA_DISCONNECTED),
/* harmony export */   "NOTIFICATION_SOLANA_EXPLORER_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_SOLANA_EXPLORER_UPDATED),
/* harmony export */   "NOTIFICATION_SOLANA_SPL_TOKENS_DID_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_SOLANA_SPL_TOKENS_DID_UPDATE),
/* harmony export */   "NOTIFICATION_USER_ACCOUNT_AUTHENTICATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_USER_ACCOUNT_AUTHENTICATED),
/* harmony export */   "NOTIFICATION_USER_ACCOUNT_PUBLIC_KEYS_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_USER_ACCOUNT_PUBLIC_KEYS_UPDATED),
/* harmony export */   "NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_CREATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_CREATED),
/* harmony export */   "NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_DELETED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_USER_ACCOUNT_PUBLIC_KEY_DELETED),
/* harmony export */   "NOTIFICATION_XNFT_PREFERENCE_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_XNFT_PREFERENCE_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_CONNECT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_NOTIFICATION_CONNECT),
/* harmony export */   "PLUGIN_NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_ETHEREUM_PUBLIC_KEY_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_NOTIFICATION_ETHEREUM_PUBLIC_KEY_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_MOUNT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_NOTIFICATION_MOUNT),
/* harmony export */   "PLUGIN_NOTIFICATION_RENDER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_NOTIFICATION_RENDER),
/* harmony export */   "PLUGIN_NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_SOLANA_PUBLIC_KEY_UPDATED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_NOTIFICATION_SOLANA_PUBLIC_KEY_UPDATED),
/* harmony export */   "PLUGIN_NOTIFICATION_UNMOUNT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_NOTIFICATION_UNMOUNT),
/* harmony export */   "PLUGIN_NOTIFICATION_UPDATE_METADATA": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_NOTIFICATION_UPDATE_METADATA),
/* harmony export */   "PLUGIN_REQUEST_ETHEREUM_SIGN_AND_SEND_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_REQUEST_ETHEREUM_SIGN_AND_SEND_TRANSACTION),
/* harmony export */   "PLUGIN_REQUEST_ETHEREUM_SIGN_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_REQUEST_ETHEREUM_SIGN_MESSAGE),
/* harmony export */   "PLUGIN_REQUEST_ETHEREUM_SIGN_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_REQUEST_ETHEREUM_SIGN_TRANSACTION),
/* harmony export */   "PLUGIN_REQUEST_SOLANA_SIGN_ALL_TRANSACTIONS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_REQUEST_SOLANA_SIGN_ALL_TRANSACTIONS),
/* harmony export */   "PLUGIN_REQUEST_SOLANA_SIGN_AND_SEND_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_REQUEST_SOLANA_SIGN_AND_SEND_TRANSACTION),
/* harmony export */   "PLUGIN_REQUEST_SOLANA_SIGN_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_REQUEST_SOLANA_SIGN_MESSAGE),
/* harmony export */   "PLUGIN_REQUEST_SOLANA_SIGN_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_REQUEST_SOLANA_SIGN_TRANSACTION),
/* harmony export */   "PLUGIN_RPC_METHOD_CHAT_OPEN": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_RPC_METHOD_CHAT_OPEN),
/* harmony export */   "PLUGIN_RPC_METHOD_CLOSE_TO": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_RPC_METHOD_CLOSE_TO),
/* harmony export */   "PLUGIN_RPC_METHOD_LOCAL_STORAGE_GET": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_RPC_METHOD_LOCAL_STORAGE_GET),
/* harmony export */   "PLUGIN_RPC_METHOD_LOCAL_STORAGE_PUT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_RPC_METHOD_LOCAL_STORAGE_PUT),
/* harmony export */   "PLUGIN_RPC_METHOD_PLUGIN_OPEN": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_RPC_METHOD_PLUGIN_OPEN),
/* harmony export */   "PLUGIN_RPC_METHOD_POP_OUT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_RPC_METHOD_POP_OUT),
/* harmony export */   "PLUGIN_RPC_METHOD_RESIZE_EXTENSION_WINDOW": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_RPC_METHOD_RESIZE_EXTENSION_WINDOW),
/* harmony export */   "PLUGIN_RPC_METHOD_WINDOW_OPEN": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_RPC_METHOD_WINDOW_OPEN),
/* harmony export */   "POST_MESSAGE_ORIGIN": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.POST_MESSAGE_ORIGIN),
/* harmony export */   "PRIMARY_PUBKEY_ENABLED": () => (/* reexport safe */ _feature_gates__WEBPACK_IMPORTED_MODULE_9__.PRIMARY_PUBKEY_ENABLED),
/* harmony export */   "Plugin": () => (/* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_14__.Plugin),
/* harmony export */   "PluginServer": () => (/* reexport safe */ _channel__WEBPACK_IMPORTED_MODULE_5__.PluginServer),
/* harmony export */   "QUERY_ADD_USER_ACCOUNT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_ADD_USER_ACCOUNT),
/* harmony export */   "QUERY_APPROVAL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_APPROVAL),
/* harmony export */   "QUERY_APPROVE_ALL_TRANSACTIONS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_APPROVE_ALL_TRANSACTIONS),
/* harmony export */   "QUERY_APPROVE_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_APPROVE_MESSAGE),
/* harmony export */   "QUERY_APPROVE_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_APPROVE_TRANSACTION),
/* harmony export */   "QUERY_CONNECT_HARDWARE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_CONNECT_HARDWARE),
/* harmony export */   "QUERY_LOCKED": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_LOCKED),
/* harmony export */   "QUERY_LOCKED_APPROVAL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_LOCKED_APPROVAL),
/* harmony export */   "QUERY_ONBOARDING": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.QUERY_ONBOARDING),
/* harmony export */   "REALTIME_API_URL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.REALTIME_API_URL),
/* harmony export */   "REALTIME_WS_URL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.REALTIME_WS_URL),
/* harmony export */   "SIMULATOR_PORT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SIMULATOR_PORT),
/* harmony export */   "SOLANA_CONNECTION_GET_MULTIPLE_ACCOUNTS_INFO": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_GET_MULTIPLE_ACCOUNTS_INFO),
/* harmony export */   "SOLANA_CONNECTION_RPC_CONFIRM_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_CONFIRM_TRANSACTION),
/* harmony export */   "SOLANA_CONNECTION_RPC_CUSTOM_SPL_METADATA_URI": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_CUSTOM_SPL_METADATA_URI),
/* harmony export */   "SOLANA_CONNECTION_RPC_CUSTOM_SPL_TOKEN_ACCOUNTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_CUSTOM_SPL_TOKEN_ACCOUNTS),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO_AND_CONTEXT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO_AND_CONTEXT),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_ADDRESS_LOOKUP_TABLE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_ADDRESS_LOOKUP_TABLE),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_BALANCE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_BALANCE),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_BLOCK_TIME": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_BLOCK_TIME),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_CONFIRMED_SIGNATURES_FOR_ADDRESS_2": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_CONFIRMED_SIGNATURES_FOR_ADDRESS_2),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_FEE_FOR_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_FEE_FOR_MESSAGE),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH_AND_CONTEXT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH_AND_CONTEXT),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_ACCOUNT_INFO": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_PARSED_ACCOUNT_INFO),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_PROGRAM_ACCOUNTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_PARSED_PROGRAM_ACCOUNTS),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_TOKEN_ACCOUNTS_BY_OWNER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_PARSED_TOKEN_ACCOUNTS_BY_OWNER),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTION),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTIONS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTIONS),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_PROGRAM_ACCOUNTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_PROGRAM_ACCOUNTS),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_SLOT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_SLOT),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNTS_BY_OWNER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNTS_BY_OWNER),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNT_BALANCE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNT_BALANCE),
/* harmony export */   "SOLANA_CONNECTION_RPC_GET_TOKEN_LARGEST_ACCOUNTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_GET_TOKEN_LARGEST_ACCOUNTS),
/* harmony export */   "SOLANA_CONNECTION_RPC_SEND_RAW_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_CONNECTION_RPC_SEND_RAW_TRANSACTION),
/* harmony export */   "SOLANA_RPC_METHOD_CONNECT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_RPC_METHOD_CONNECT),
/* harmony export */   "SOLANA_RPC_METHOD_DISCONNECT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_RPC_METHOD_DISCONNECT),
/* harmony export */   "SOLANA_RPC_METHOD_OPEN_XNFT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_RPC_METHOD_OPEN_XNFT),
/* harmony export */   "SOLANA_RPC_METHOD_SIGN_ALL_TXS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_RPC_METHOD_SIGN_ALL_TXS),
/* harmony export */   "SOLANA_RPC_METHOD_SIGN_AND_SEND_TX": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_RPC_METHOD_SIGN_AND_SEND_TX),
/* harmony export */   "SOLANA_RPC_METHOD_SIGN_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_RPC_METHOD_SIGN_MESSAGE),
/* harmony export */   "SOLANA_RPC_METHOD_SIGN_TX": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_RPC_METHOD_SIGN_TX),
/* harmony export */   "SOLANA_RPC_METHOD_SIMULATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SOLANA_RPC_METHOD_SIMULATE),
/* harmony export */   "SOL_NATIVE_MINT": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.SOL_NATIVE_MINT),
/* harmony export */   "STRIPE_ENABLED": () => (/* reexport safe */ _feature_gates__WEBPACK_IMPORTED_MODULE_9__.STRIPE_ENABLED),
/* harmony export */   "SUBSCRIBE": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.SUBSCRIBE),
/* harmony export */   "Solana": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.Solana),
/* harmony export */   "SolanaCluster": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.SolanaCluster),
/* harmony export */   "SolanaExplorer": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.SolanaExplorer),
/* harmony export */   "SolanaProvider": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.SolanaProvider),
/* harmony export */   "SolanaWalletAdapter": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.SolanaWalletAdapter),
/* harmony export */   "TAB_APPS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TAB_APPS),
/* harmony export */   "TAB_BALANCES": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TAB_BALANCES),
/* harmony export */   "TAB_MESSAGES": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TAB_MESSAGES),
/* harmony export */   "TAB_NFTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TAB_NFTS),
/* harmony export */   "TAB_NOTIFICATIONS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TAB_NOTIFICATIONS),
/* harmony export */   "TAB_RECENT_ACTIVITY": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TAB_RECENT_ACTIVITY),
/* harmony export */   "TAB_SET": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TAB_SET),
/* harmony export */   "TAB_SWAP": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TAB_SWAP),
/* harmony export */   "TAB_XNFT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TAB_XNFT),
/* harmony export */   "TOKEN_ACCOUNT_RENT_EXEMPTION_LAMPORTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN_ACCOUNT_RENT_EXEMPTION_LAMPORTS),
/* harmony export */   "TOKEN_AUTH_RULES_ID": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.TOKEN_AUTH_RULES_ID),
/* harmony export */   "TOKEN_METADATA_PROGRAM_ID": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.TOKEN_METADATA_PROGRAM_ID),
/* harmony export */   "TOKEN_PROGRAM_ID": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.TOKEN_PROGRAM_ID),
/* harmony export */   "TWITTER_LINK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TWITTER_LINK),
/* harmony export */   "UI_RPC_METHOD_ACTIVE_USER_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ACTIVE_USER_UPDATE),
/* harmony export */   "UI_RPC_METHOD_ALL_USERS_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ALL_USERS_READ),
/* harmony export */   "UI_RPC_METHOD_APPROVED_ORIGINS_DELETE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_APPROVED_ORIGINS_DELETE),
/* harmony export */   "UI_RPC_METHOD_APPROVED_ORIGINS_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_APPROVED_ORIGINS_READ),
/* harmony export */   "UI_RPC_METHOD_APPROVED_ORIGINS_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_APPROVED_ORIGINS_UPDATE),
/* harmony export */   "UI_RPC_METHOD_BLOCKCHAINS_ENABLED_ADD": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_BLOCKCHAINS_ENABLED_ADD),
/* harmony export */   "UI_RPC_METHOD_BLOCKCHAINS_ENABLED_DELETE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_BLOCKCHAINS_ENABLED_DELETE),
/* harmony export */   "UI_RPC_METHOD_BLOCKCHAINS_ENABLED_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_BLOCKCHAINS_ENABLED_READ),
/* harmony export */   "UI_RPC_METHOD_BLOCKCHAIN_KEYRINGS_ADD": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_BLOCKCHAIN_KEYRINGS_ADD),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_CHAIN_ID_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_CHAIN_ID_READ),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_CHAIN_ID_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_CHAIN_ID_UPDATE),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_READ),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_CONNECTION_URL_UPDATE),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_EXPLORER_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_EXPLORER_READ),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_EXPLORER_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_EXPLORER_UPDATE),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_SIGN_AND_SEND_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_SIGN_AND_SEND_TRANSACTION),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_SIGN_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_SIGN_MESSAGE),
/* harmony export */   "UI_RPC_METHOD_ETHEREUM_SIGN_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_ETHEREUM_SIGN_TRANSACTION),
/* harmony export */   "UI_RPC_METHOD_FIND_SERVER_PUBLIC_KEY_CONFLICTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_FIND_SERVER_PUBLIC_KEY_CONFLICTS),
/* harmony export */   "UI_RPC_METHOD_FIND_WALLET_DESCRIPTOR": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_FIND_WALLET_DESCRIPTOR),
/* harmony export */   "UI_RPC_METHOD_GET_FEATURE_GATES": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_GET_FEATURE_GATES),
/* harmony export */   "UI_RPC_METHOD_GET_XNFT_PREFERENCES": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_GET_XNFT_PREFERENCES),
/* harmony export */   "UI_RPC_METHOD_KEYNAME_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYNAME_READ),
/* harmony export */   "UI_RPC_METHOD_KEYNAME_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYNAME_UPDATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_ACTIVE_WALLET_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_ACTIVE_WALLET_UPDATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_READ),
/* harmony export */   "UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_AUTO_LOCK_SETTINGS_UPDATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_DERIVE_WALLET": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_DERIVE_WALLET),
/* harmony export */   "UI_RPC_METHOD_KEYRING_EXPORT_MNEMONIC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_EXPORT_MNEMONIC),
/* harmony export */   "UI_RPC_METHOD_KEYRING_EXPORT_SECRET_KEY": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_EXPORT_SECRET_KEY),
/* harmony export */   "UI_RPC_METHOD_KEYRING_HAS_MNEMONIC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_HAS_MNEMONIC),
/* harmony export */   "UI_RPC_METHOD_KEYRING_IMPORT_SECRET_KEY": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_IMPORT_SECRET_KEY),
/* harmony export */   "UI_RPC_METHOD_KEYRING_IMPORT_WALLET": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_IMPORT_WALLET),
/* harmony export */   "UI_RPC_METHOD_KEYRING_KEY_DELETE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_KEY_DELETE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_READ_NEXT_DERIVATION_PATH": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_READ_NEXT_DERIVATION_PATH),
/* harmony export */   "UI_RPC_METHOD_KEYRING_RESET": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_RESET),
/* harmony export */   "UI_RPC_METHOD_KEYRING_SET_MNEMONIC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_SET_MNEMONIC),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_CHECK_PASSWORD": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_STORE_CHECK_PASSWORD),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_CREATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_STORE_CREATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_LOCK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_STORE_LOCK),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_CREATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_CREATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_SYNC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_STORE_MNEMONIC_SYNC),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEYS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEYS),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEY_DATA": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEY_DATA),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_STATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_STORE_STATE),
/* harmony export */   "UI_RPC_METHOD_KEYRING_STORE_UNLOCK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_STORE_UNLOCK),
/* harmony export */   "UI_RPC_METHOD_KEYRING_VALIDATE_MNEMONIC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEYRING_VALIDATE_MNEMONIC),
/* harmony export */   "UI_RPC_METHOD_KEY_IS_COLD_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_KEY_IS_COLD_UPDATE),
/* harmony export */   "UI_RPC_METHOD_LEDGER_CONNECT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_LEDGER_CONNECT),
/* harmony export */   "UI_RPC_METHOD_LEDGER_IMPORT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_LEDGER_IMPORT),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_ACTIVE_TAB_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_NAVIGATION_ACTIVE_TAB_UPDATE),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_CURRENT_URL_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_NAVIGATION_CURRENT_URL_UPDATE),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_OPEN_CHAT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_NAVIGATION_OPEN_CHAT),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_POP": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_NAVIGATION_POP),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_PUSH": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_NAVIGATION_PUSH),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_NAVIGATION_READ),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_READ_URL": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_NAVIGATION_READ_URL),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_TO_DEFAULT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_NAVIGATION_TO_DEFAULT),
/* harmony export */   "UI_RPC_METHOD_NAVIGATION_TO_ROOT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_NAVIGATION_TO_ROOT),
/* harmony export */   "UI_RPC_METHOD_PASSWORD_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_PASSWORD_UPDATE),
/* harmony export */   "UI_RPC_METHOD_PREFERENCES_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_PREFERENCES_READ),
/* harmony export */   "UI_RPC_METHOD_PREVIEW_PUBKEYS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_PREVIEW_PUBKEYS),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_AGGREGATE_WALLETS_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SETTINGS_AGGREGATE_WALLETS_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_DARK_MODE_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SETTINGS_DARK_MODE_READ),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_DARK_MODE_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SETTINGS_DARK_MODE_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_READ),
/* harmony export */   "UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SETTINGS_DEVELOPER_MODE_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SET_FEATURE_GATES": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SET_FEATURE_GATES),
/* harmony export */   "UI_RPC_METHOD_SET_XNFT_PREFERENCES": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SET_XNFT_PREFERENCES),
/* harmony export */   "UI_RPC_METHOD_SIGN_MESSAGE_FOR_PUBLIC_KEY": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SIGN_MESSAGE_FOR_PUBLIC_KEY),
/* harmony export */   "UI_RPC_METHOD_SOLANA_COMMITMENT_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_COMMITMENT_READ),
/* harmony export */   "UI_RPC_METHOD_SOLANA_COMMITMENT_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_COMMITMENT_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SOLANA_CONNECTION_URL_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_CONNECTION_URL_READ),
/* harmony export */   "UI_RPC_METHOD_SOLANA_CONNECTION_URL_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_CONNECTION_URL_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SOLANA_EXPLORER_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_EXPLORER_READ),
/* harmony export */   "UI_RPC_METHOD_SOLANA_EXPLORER_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_EXPLORER_UPDATE),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIGN_ALL_TRANSACTIONS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_SIGN_ALL_TRANSACTIONS),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIGN_AND_SEND_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_SIGN_AND_SEND_TRANSACTION),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIGN_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_SIGN_MESSAGE),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIGN_TRANSACTION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_SIGN_TRANSACTION),
/* harmony export */   "UI_RPC_METHOD_SOLANA_SIMULATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_SOLANA_SIMULATE),
/* harmony export */   "UI_RPC_METHOD_TRY_TO_SIGN_MESSAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_TRY_TO_SIGN_MESSAGE),
/* harmony export */   "UI_RPC_METHOD_USERNAME_ACCOUNT_CREATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_USERNAME_ACCOUNT_CREATE),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_AUTH": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_USER_ACCOUNT_AUTH),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_LOGOUT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_USER_ACCOUNT_LOGOUT),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_CREATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_CREATE),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_DELETE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_USER_ACCOUNT_PUBLIC_KEY_DELETE),
/* harmony export */   "UI_RPC_METHOD_USER_ACCOUNT_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_USER_ACCOUNT_READ),
/* harmony export */   "UI_RPC_METHOD_USER_JWT_UPDATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_USER_JWT_UPDATE),
/* harmony export */   "UI_RPC_METHOD_USER_READ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UI_RPC_METHOD_USER_READ),
/* harmony export */   "UNKNOWN_NFT_ICON_SRC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UNKNOWN_NFT_ICON_SRC),
/* harmony export */   "UNSUBSCRIBE": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.UNSUBSCRIBE),
/* harmony export */   "UPDATE_ACTIVE_BARTER": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.UPDATE_ACTIVE_BARTER),
/* harmony export */   "USDC_MINT": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.USDC_MINT),
/* harmony export */   "UiActionRequestManager": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.UiActionRequestManager),
/* harmony export */   "UniswapTokenList": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.UniswapTokenList),
/* harmony export */   "WEB_VIEW_EVENTS": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.WEB_VIEW_EVENTS),
/* harmony export */   "WHITELISTED_CHAT_COLLECTIONS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.WHITELISTED_CHAT_COLLECTIONS),
/* harmony export */   "WSOL_MINT": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.WSOL_MINT),
/* harmony export */   "WS_READY": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.WS_READY),
/* harmony export */   "XNFT_GG_LINK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.XNFT_GG_LINK),
/* harmony export */   "XNFT_PROGRAM_ID": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.XNFT_PROGRAM_ID),
/* harmony export */   "addressLookupTableAccountParser": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.addressLookupTableAccountParser),
/* harmony export */   "assertOwnerInstruction": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.assertOwnerInstruction),
/* harmony export */   "associatedTokenAddress": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.associatedTokenAddress),
/* harmony export */   "blockchainCoinType": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.blockchainCoinType),
/* harmony export */   "buildFullFeatureGatesMap": () => (/* reexport safe */ _feature_gates__WEBPACK_IMPORTED_MODULE_9__.buildFullFeatureGatesMap),
/* harmony export */   "confirmTransaction": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.confirmTransaction),
/* harmony export */   "createApolloClient": () => (/* reexport safe */ _apollo__WEBPACK_IMPORTED_MODULE_3__.createApolloClient),
/* harmony export */   "customSplTokenAccounts": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.customSplTokenAccounts),
/* harmony export */   "defaultPreferences": () => (/* reexport safe */ _preferences__WEBPACK_IMPORTED_MODULE_15__.defaultPreferences),
/* harmony export */   "deserializeLegacyTransaction": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.deserializeLegacyTransaction),
/* harmony export */   "deserializeTokenAccountsFilter": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.deserializeTokenAccountsFilter),
/* harmony export */   "deserializeTransaction": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.deserializeTransaction),
/* harmony export */   "ethereumIndexed": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.ethereumIndexed),
/* harmony export */   "ethereumTokenData": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.ethereumTokenData),
/* harmony export */   "exploreAddressUrl": () => (/* reexport safe */ _explorer__WEBPACK_IMPORTED_MODULE_8__.exploreAddressUrl),
/* harmony export */   "explorerNftUrl": () => (/* reexport safe */ _explorer__WEBPACK_IMPORTED_MODULE_8__.explorerNftUrl),
/* harmony export */   "explorerUrl": () => (/* reexport safe */ _explorer__WEBPACK_IMPORTED_MODULE_8__.explorerUrl),
/* harmony export */   "externalResourceUri": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.externalResourceUri),
/* harmony export */   "fetchEthereumBalances": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.fetchEthereumBalances),
/* harmony export */   "fetchEthereumTokenBalances": () => (/* reexport safe */ _ethereum__WEBPACK_IMPORTED_MODULE_7__.fetchEthereumTokenBalances),
/* harmony export */   "fetchFriendship": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.fetchFriendship),
/* harmony export */   "fetchMints": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.fetchMints),
/* harmony export */   "fetchSplMetadata": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.fetchSplMetadata),
/* harmony export */   "fetchSplMetadataUri": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.fetchSplMetadataUri),
/* harmony export */   "fetchTokens": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.fetchTokens),
/* harmony export */   "fetchXnft": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.fetchXnft),
/* harmony export */   "fetchXnfts": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.fetchXnfts),
/* harmony export */   "fetchXnftsFromPubkey": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.fetchXnftsFromPubkey),
/* harmony export */   "formatAMPM": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.formatAMPM),
/* harmony export */   "formatUSD": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.formatUSD),
/* harmony export */   "generateUniqueId": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.generateUniqueId),
/* harmony export */   "generateUnwrapSolTx": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.generateUnwrapSolTx),
/* harmony export */   "generateWrapSolTx": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.generateWrapSolTx),
/* harmony export */   "getAccountRecoveryPaths": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.getAccountRecoveryPaths),
/* harmony export */   "getAddMessage": () => (/* binding */ getAddMessage),
/* harmony export */   "getAuthMessage": () => (/* binding */ getAuthMessage),
/* harmony export */   "getCoinType": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.getCoinType),
/* harmony export */   "getCreateMessage": () => (/* binding */ getCreateMessage),
/* harmony export */   "getIndexedPath": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.getIndexedPath),
/* harmony export */   "getLogger": () => (/* reexport safe */ _logging__WEBPACK_IMPORTED_MODULE_10__.getLogger),
/* harmony export */   "getRandomColor": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.getRandomColor),
/* harmony export */   "getRandomColorIndex": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.getRandomColorIndex),
/* harmony export */   "getRecoveryPaths": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.getRecoveryPaths),
/* harmony export */   "isBackpackTeam": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.isBackpackTeam),
/* harmony export */   "isCardinalWrappedToken": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.isCardinalWrappedToken),
/* harmony export */   "isCreatorStandardToken": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.isCreatorStandardToken),
/* harmony export */   "isMadLads": () => (/* binding */ isMadLads),
/* harmony export */   "isMobile": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.isMobile),
/* harmony export */   "isOpenCreatorProtocol": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.isOpenCreatorProtocol),
/* harmony export */   "isProgrammableNftToken": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.isProgrammableNftToken),
/* harmony export */   "isServiceWorker": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.isServiceWorker),
/* harmony export */   "isValidEventOrigin": () => (/* binding */ isValidEventOrigin),
/* harmony export */   "isVersionedTransaction": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.isVersionedTransaction),
/* harmony export */   "legacyBip44ChangeIndexed": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.legacyBip44ChangeIndexed),
/* harmony export */   "legacyBip44ChangeRecoveryPaths": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.legacyBip44ChangeRecoveryPaths),
/* harmony export */   "legacyBip44Indexed": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.legacyBip44Indexed),
/* harmony export */   "legacyBip44RecoveryPaths": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.legacyBip44RecoveryPaths),
/* harmony export */   "legacyEthereum": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.legacyEthereum),
/* harmony export */   "legacyLedgerIndexed": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.legacyLedgerIndexed),
/* harmony export */   "legacyLedgerLiveAccount": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.legacyLedgerLiveAccount),
/* harmony export */   "legacySolletIndexed": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.legacySolletIndexed),
/* harmony export */   "makeUrl": () => (/* reexport safe */ _navigation__WEBPACK_IMPORTED_MODULE_12__.makeUrl),
/* harmony export */   "markSpam": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.markSpam),
/* harmony export */   "masterEditionAddress": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.masterEditionAddress),
/* harmony export */   "metadataAddress": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.metadataAddress),
/* harmony export */   "nextIndicesFromPaths": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_6__.nextIndicesFromPaths),
/* harmony export */   "openAddUserAccount": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openAddUserAccount),
/* harmony export */   "openApprovalPopupWindow": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openApprovalPopupWindow),
/* harmony export */   "openApproveAllTransactionsPopupWindow": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openApproveAllTransactionsPopupWindow),
/* harmony export */   "openApproveMessagePopupWindow": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openApproveMessagePopupWindow),
/* harmony export */   "openApproveTransactionPopupWindow": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openApproveTransactionPopupWindow),
/* harmony export */   "openConnectHardware": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openConnectHardware),
/* harmony export */   "openLockedApprovalPopupWindow": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openLockedApprovalPopupWindow),
/* harmony export */   "openLockedPopupWindow": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openLockedPopupWindow),
/* harmony export */   "openOnboarding": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openOnboarding),
/* harmony export */   "openPopupWindow": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.openPopupWindow),
/* harmony export */   "parseMessage": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_11__.parseMessage),
/* harmony export */   "parseNftName": () => (/* binding */ parseNftName),
/* harmony export */   "proxyImageUrl": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.proxyImageUrl),
/* harmony export */   "resizeExtensionWindow": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.resizeExtensionWindow),
/* harmony export */   "reverseScientificNotation": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.reverseScientificNotation),
/* harmony export */   "searchUsersByBlockchain": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.searchUsersByBlockchain),
/* harmony export */   "sendFriendRequest": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.sendFriendRequest),
/* harmony export */   "serializeTokenAccountsFilter": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.serializeTokenAccountsFilter),
/* harmony export */   "setupLogLevel": () => (/* reexport safe */ _logging__WEBPACK_IMPORTED_MODULE_10__.setupLogLevel),
/* harmony export */   "startMobileIfNeeded": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.startMobileIfNeeded),
/* harmony export */   "toDisplayBalance": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.toDisplayBalance),
/* harmony export */   "toTitleCase": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.toTitleCase),
/* harmony export */   "tokenRecordAddress": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.tokenRecordAddress),
/* harmony export */   "unFriend": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.unFriend),
/* harmony export */   "useStore": () => (/* reexport safe */ _zustand_store__WEBPACK_IMPORTED_MODULE_19__.useStore),
/* harmony export */   "usernameDisplay": () => (/* binding */ usernameDisplay),
/* harmony export */   "validateEthereumPrivateKey": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.validateEthereumPrivateKey),
/* harmony export */   "validatePrivateKey": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.validatePrivateKey),
/* harmony export */   "validateSolanaPrivateKey": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_18__.validateSolanaPrivateKey),
/* harmony export */   "walletAddressDisplay": () => (/* binding */ walletAddressDisplay),
/* harmony export */   "withContext": () => (/* binding */ withContext),
/* harmony export */   "withContextPort": () => (/* binding */ withContextPort),
/* harmony export */   "xnftClient": () => (/* reexport safe */ _solana__WEBPACK_IMPORTED_MODULE_16__.xnftClient)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _generated_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generated-config */ "../common/dist/esm/generated-config.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "../common/dist/esm/api/index.js");
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apollo */ "../common/dist/esm/apollo/index.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser */ "../common/dist/esm/browser/index.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channel */ "../common/dist/esm/channel/index.js");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crypto */ "../common/dist/esm/crypto.js");
/* harmony import */ var _ethereum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ethereum */ "../common/dist/esm/ethereum/index.js");
/* harmony import */ var _explorer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explorer */ "../common/dist/esm/explorer.js");
/* harmony import */ var _feature_gates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature-gates */ "../common/dist/esm/feature-gates.js");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logging */ "../common/dist/esm/logging.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages */ "../common/dist/esm/messages/index.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation */ "../common/dist/esm/navigation.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notifications */ "../common/dist/esm/notifications.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plugin */ "../common/dist/esm/plugin.js");
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./preferences */ "../common/dist/esm/preferences.js");
/* harmony import */ var _solana__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./solana */ "../common/dist/esm/solana/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./types */ "../common/dist/esm/types.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils */ "../common/dist/esm/utils.js");
/* harmony import */ var _zustand_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./zustand-store */ "../common/dist/esm/zustand-store.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");






















// Generated pre-build step.

// Utility to transform the handler API into something a little more friendly.
function withContext(backend, events, handler) {
    return async ({ data  }, sender)=>{
        const ctx = {
            backend,
            events,
            sender
        };
        return await handler(ctx, data);
    };
}
function withContextPort(backend, events, handler) {
    return async (data, sender)=>{
        const ctx = {
            backend,
            events,
            sender
        };
        return await handler(ctx, data);
    };
}
function walletAddressDisplay(publicKey, numDigits = 4) {
    if (!publicKey) return "";
    const pubkeyStr = typeof publicKey === "string" ? publicKey : publicKey.toString();
    return `${pubkeyStr.slice(0, numDigits)}...${pubkeyStr.slice(pubkeyStr.length - numDigits)}`;
}
function usernameDisplay(username, maxLength = 10) {
    if (!username) {
        return "";
    }
    if (username.length <= maxLength) {
        return username;
    }
    return username.slice(0, maxLength - 2) + "..";
}
/**
 * Message to be signed for authenticating a user.
 */ function getAuthMessage(uuid) {
    return `Backpack login ${uuid}`;
}
/**
 * Message to be signed for creating a Backpack account.
 */ function getCreateMessage(publicKey) {
    return `Backpack create ${publicKey}`;
}
/**
 * Message to be signed when adding public keys to an existing Backpack account.
 */ function getAddMessage(publicKey) {
    return `Backpack add ${publicKey}`;
}
//
// Returns true if the event can be used by an injected provider, i.e.,
// it's from a trusted source.
//
// This is used by both xNFTs and normal websites, so we allow
// events to come from either the window's origin (a website)
// or the parent chrome extension (an xNFT).
//
function isValidEventOrigin(event) {
    // From same window. Note: window not defined in the service worker context.
    if (typeof window !== "undefined") {
        if (event.origin === window.location.origin) {
            return true;
        }
    }
    try {
        // From the extension.
        const url = new URL(event.origin);
        if (url.host === _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_CONFIG_EXTENSION_KEY) {
            return true;
        }
        // From trusted ledger API.
        const ledgerUrl = new URL(_constants__WEBPACK_IMPORTED_MODULE_0__.LEDGER_IFRAME_URL);
        if (url.host === ledgerUrl.host) {
            return true;
        }
    } catch (err) {
        return false;
    }
    // Development mode. Note: production is a production build, but still
    // in development.
    if (_generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_CONFIG_VERSION === "development" || _generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_CONFIG_VERSION !== "production") {
        return true;
    }
    return false;
}
function isMadLads(creators) {
    const secondCreator = creators === null || creators === void 0 ? void 0 : creators[1];
    return (secondCreator === null || secondCreator === void 0 ? void 0 : secondCreator.address) === "2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW";
}
function parseNftName(nft) {
    return nft.name !== "" ? nft.name : nft.collectionName;
} //# sourceMappingURL=index.js.map


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

/***/ "../common/dist/esm/logging.js":
/*!*************************************!*\
  !*** ../common/dist/esm/logging.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel),
/* harmony export */   "getLogger": () => (/* binding */ getLogger),
/* harmony export */   "setupLogLevel": () => (/* binding */ setupLogLevel)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _generated_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generated-config */ "../common/dist/esm/generated-config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../common/dist/esm/utils.js");
/* harmony import */ var _zustand_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zustand-store */ "../common/dist/esm/zustand-store.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");





function getLogger(mod) {
    if (_LOG_LEVEL === undefined) {
        setupLogLevel();
    }
    return (()=>{
        const _mod = mod;
        const prefix = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isServiceWorker)() ? "service-worker:" : "";
        return {
            debug: (str, ...args)=>debug(`backpack:${prefix} ${_mod}: ${str}`, ...args),
            error: (str, ...args)=>error(`backpack:${prefix} ${_mod}: ${str}`, ...args),
            _log
        };
    })();
}
function debug(str, ...args) {
    if (_LOG_LEVEL <= LogLevel.Debug) {
        log(str, ...args);
    }
}
function error(str, ...args) {
    if (_LOG_LEVEL <= LogLevel.Error) {
        log(`ERROR: ${str}`, ...args);
    }
}
function log(str, ...args) {
    if (_utils__WEBPACK_IMPORTED_MODULE_2__.IS_MOBILE) {
        _mobileLog(str, ...args);
    } else {
        _log(str, ...args);
    }
}
function _log(str, ...args) {
    console.log(str, ...args);
}
/**
 * Temporary logging helper function specifically for the mobile app
 *
 * An alternative to console.log which should ensure that your logs are
 * visible in the terminal, regardless of whether you are in a webview,
 * serviceworker or react native app.
 * @param args what to log
 */ async function _mobileLog(...args) {
    var _a, _b;
    // We're in the serviceworker, try sending the message to the HTML page.
    try {
        // @ts-ignore
        const clients = await self.clients.matchAll({
            includeUncontrolled: true,
            type: "window"
        });
        clients.forEach((client)=>{
            client.postMessage({
                channel: _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_LOGS,
                data: args
            });
        });
    } catch (err) {
        // Although we're already in the frontend code here, send the log back
        // to the webview so that we can log through the mobile subsystem.
        //
        (_b = (_a = _zustand_store__WEBPACK_IMPORTED_MODULE_3__.useStore.getState()) === null || _a === void 0 ? void 0 : _a.injectJavaScript) === null || _b === void 0 ? void 0 : _b.call(_a, `navigator.serviceWorker.onmessage(${JSON.stringify({
            data: {
                channel: _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE_CHANNEL_LOGS,
                data: args
            }
        })}); true;`);
    }
}
let _LOG_LEVEL;
var LogLevel;
(function(LogLevel) {
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    LogLevel[LogLevel["Error"] = 4] = "Error";
})(LogLevel || (LogLevel = {}));
function setupLogLevel() {
    _LOG_LEVEL = (()=>{
        switch(_generated_config__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_CONFIG_LOG_LEVEL){
            case "trace":
                return LogLevel.Trace;
            case "debug":
                return LogLevel.Debug;
            case "info":
                return LogLevel.Info;
            case "warning":
                return LogLevel.Warning;
            case "error":
                return LogLevel.Error;
            default:
                throw new Error("invalid log level");
        }
    })();
} //# sourceMappingURL=logging.js.map


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

/***/ "../common/dist/esm/messages/ToPubsub.js":
/*!***********************************************!*\
  !*** ../common/dist/esm/messages/ToPubsub.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

 //# sourceMappingURL=ToPubsub.js.map


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

/***/ "../common/dist/esm/messages/db.js":
/*!*****************************************!*\
  !*** ../common/dist/esm/messages/db.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

 //# sourceMappingURL=db.js.map


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

/***/ "../common/dist/esm/messages/fromServer.js":
/*!*************************************************!*\
  !*** ../common/dist/esm/messages/fromServer.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHAT_MESSAGES": () => (/* binding */ CHAT_MESSAGES),
/* harmony export */   "DELETE_MESSAGE": () => (/* binding */ DELETE_MESSAGE),
/* harmony export */   "EXECUTE_BARTER": () => (/* binding */ EXECUTE_BARTER),
/* harmony export */   "NOTIFICATION_ADD": () => (/* binding */ NOTIFICATION_ADD),
/* harmony export */   "SUBSCRIBE": () => (/* binding */ SUBSCRIBE),
/* harmony export */   "UNSUBSCRIBE": () => (/* binding */ UNSUBSCRIBE),
/* harmony export */   "UPDATE_ACTIVE_BARTER": () => (/* binding */ UPDATE_ACTIVE_BARTER),
/* harmony export */   "WS_READY": () => (/* binding */ WS_READY)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

const CHAT_MESSAGES = "CHAT_MESSAGES";
const DELETE_MESSAGE = "DELETE_MESSAGE";
const UPDATE_ACTIVE_BARTER = "UPDATE_ACTIVE_BARTER";
const EXECUTE_BARTER = "EXECUTE_BARTER";
const NOTIFICATION_ADD = "NOTIFICATION_ADD";
const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const WS_READY = "WS_READY"; //# sourceMappingURL=fromServer.js.map


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

/***/ "../common/dist/esm/messages/index.js":
/*!********************************************!*\
  !*** ../common/dist/esm/messages/index.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHAT_MESSAGES": () => (/* reexport safe */ _fromServer__WEBPACK_IMPORTED_MODULE_2__.CHAT_MESSAGES),
/* harmony export */   "DELETE_MESSAGE": () => (/* reexport safe */ _fromServer__WEBPACK_IMPORTED_MODULE_2__.DELETE_MESSAGE),
/* harmony export */   "EXECUTE_BARTER": () => (/* reexport safe */ _fromServer__WEBPACK_IMPORTED_MODULE_2__.EXECUTE_BARTER),
/* harmony export */   "NEW_COLORS": () => (/* binding */ NEW_COLORS),
/* harmony export */   "NOTIFICATION_ADD": () => (/* reexport safe */ _fromServer__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_ADD),
/* harmony export */   "SUBSCRIBE": () => (/* reexport safe */ _fromServer__WEBPACK_IMPORTED_MODULE_2__.SUBSCRIBE),
/* harmony export */   "UNSUBSCRIBE": () => (/* reexport safe */ _fromServer__WEBPACK_IMPORTED_MODULE_2__.UNSUBSCRIBE),
/* harmony export */   "UPDATE_ACTIVE_BARTER": () => (/* reexport safe */ _fromServer__WEBPACK_IMPORTED_MODULE_2__.UPDATE_ACTIVE_BARTER),
/* harmony export */   "WS_READY": () => (/* reexport safe */ _fromServer__WEBPACK_IMPORTED_MODULE_2__.WS_READY),
/* harmony export */   "formatAMPM": () => (/* binding */ formatAMPM),
/* harmony export */   "getRandomColor": () => (/* binding */ getRandomColor),
/* harmony export */   "getRandomColorIndex": () => (/* binding */ getRandomColorIndex),
/* harmony export */   "isBackpackTeam": () => (/* binding */ isBackpackTeam),
/* harmony export */   "parseMessage": () => (/* binding */ parseMessage)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "../common/dist/esm/messages/db.js");
/* harmony import */ var _fromServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromServer */ "../common/dist/esm/messages/fromServer.js");
/* harmony import */ var _ToPubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToPubsub */ "../common/dist/esm/messages/ToPubsub.js");
/* harmony import */ var _toServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toServer */ "../common/dist/esm/messages/toServer.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");






const NEW_COLORS = [
    {
        light: "#E02929",
        dark: "#F88484"
    },
    {
        light: "#CC2578",
        dark: "#E57AB0"
    },
    {
        light: "#9930B8",
        dark: "#DA8BE7"
    },
    {
        light: "#5E35B1",
        dark: "#C2A6F4"
    },
    {
        light: "#3949AB",
        dark: "#97A4F4"
    },
    {
        light: "#0072DB",
        dark: "#57AEFF"
    },
    {
        light: "#0C5ADF",
        dark: "#5596F6"
    },
    {
        light: "#008577",
        dark: "#7ACCC7"
    },
    {
        light: "#1A841F",
        dark: "#75DD7A"
    },
    {
        light: "#6C7D26",
        dark: "#BEE05A"
    },
    {
        light: "#BD5B00",
        dark: "#FFD080"
    },
    {
        light: "#CC4218",
        dark: "#FA9476"
    },
    {
        light: "#6D4C41",
        dark: "#BCAAA4"
    },
    {
        light: "#2D4363",
        dark: "#A3B5CF"
    }
];
const COLORS = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#8e44ad",
    "#2c3e50",
    "#e74c3c",
    "#c0392b",
    "#d35400",
    "#c0392b"
];
const getRandomColor = ()=>{
    return COLORS[Math.floor(COLORS.length * Math.random())];
};
const getRandomColorIndex = ()=>{
    return Math.floor(NEW_COLORS.length * Math.random());
};
// Used in Chat / Messaging
function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
}
const parseMessage = (message)=>{
    const parts = [];
    let curStr = "";
    for(let i = 0; i < message.length; i++){
        if (message[i] === "<" && message[i + 1] === "@") {
            if (curStr) {
                parts.push({
                    type: "text",
                    value: curStr
                });
                curStr = "";
            }
            while(i < message.length && message[i] !== "|"){
                i++;
            }
            i++;
            i++;
            let userId = "";
            while(i < message.length && message[i] !== ">"){
                userId += message[i];
                i++;
            }
            if (i === message.length) {
                parts.push({
                    type: "text",
                    value: userId
                });
            } else {
                parts.push({
                    type: "tag",
                    value: userId
                });
            }
        } else {
            curStr += message[i];
        }
    }
    if (curStr) {
        parts.push({
            type: "text",
            value: curStr
        });
    }
    return parts;
};
const backpackSet = new Set(_constants__WEBPACK_IMPORTED_MODULE_0__.BACKPACK_TEAM);
const isBackpackTeam = (id)=>backpackSet.has(id); //# sourceMappingURL=index.js.map


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

/***/ "../common/dist/esm/messages/toServer.js":
/*!***********************************************!*\
  !*** ../common/dist/esm/messages/toServer.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

 //# sourceMappingURL=toServer.js.map


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

/***/ "../common/dist/esm/navigation.js":
/*!****************************************!*\
  !*** ../common/dist/esm/navigation.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUrl": () => (/* binding */ makeUrl)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

function makeUrl(path, params) {
    return [
        `/${path}`.replace("//", "/"),
        makeParams(params)
    ].filter(Boolean).join("?");
}
/**
 * @returns a query string where each item in the provided
 * object is JSON.stringified and URL encoded
 */ function makeParams(ob = {}) {
    return Object.entries(ob).reduce((acc, [k, v])=>acc.concat(`${k}=${encodeURIComponent(JSON.stringify(v))}`), []).join("&");
} //# sourceMappingURL=navigation.js.map


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

/***/ "../common/dist/esm/notifications.js":
/*!*******************************************!*\
  !*** ../common/dist/esm/notifications.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

 //# sourceMappingURL=notifications.js.map


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

/***/ "../common/dist/esm/plugin.js":
/*!************************************!*\
  !*** ../common/dist/esm/plugin.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plugin": () => (/* binding */ Plugin)
/* harmony export */ });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var base32_encode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base32-encode */ "../../node_modules/base32-encode/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs58 */ "../common/node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _browser_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser/extension */ "../common/dist/esm/browser/extension.js");
/* harmony import */ var _channel_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channel/plugin */ "../common/dist/esm/channel/plugin.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logging */ "../common/dist/esm/logging.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "../common/dist/esm/types.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "../common/dist/esm/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");










const logger = (0,_logging__WEBPACK_IMPORTED_MODULE_6__.getLogger)("common/plugin");
//
// A plugin is a react bundle served from a given URL, using the Backpack
// framework + protocol to render its views inside the native wallet interface.
//
// This class is effectively the model. To display a plugin, create one of
// these objects and then pass it into the renderer component.
//
class Plugin {
    constructor(xnftAddress, xnftInstallAddress, url, iconUrl, splashUrls, title, activeWallets, connectionUrls){
        //
        // Provide connection for the plugin.
        //
        var _a;
        this._activeWallets = activeWallets;
        this._connectionUrls = connectionUrls;
        this.title = title;
        this.iconUrl = iconUrl;
        this.splashUrls = splashUrls;
        this.xnftAddress = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(xnftAddress);
        this.xnftInstallAddress = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(xnftInstallAddress);
        const xnftAddressB32 = (0,base32_encode__WEBPACK_IMPORTED_MODULE_1__["default"])(bs58__WEBPACK_IMPORTED_MODULE_2___default().decode(this.xnftAddress.toBase58()), "RFC4648", {
            padding: false
        });
        const isDevnetHACKY = (_a = this._connectionUrls[_types__WEBPACK_IMPORTED_MODULE_7__.Blockchain.SOLANA]) === null || _a === void 0 ? void 0 : _a.includes("devnet");
        const iframeRootUrl = !isDevnetHACKY && (url.startsWith("ar://") || url.startsWith("ipfs://")) ? //   "CkqWjTWzRMAtYN3CSs8Gp4K9H891htmaN1ysNXqcULc8"
        `https://${xnftAddressB32}.gateway.xnfts.dev` : (0,_utils__WEBPACK_IMPORTED_MODULE_8__.externalResourceUri)(url);
        const whitelistedProtocols = [
            "ar://",
            "ipfs://",
            "https://",
            "http://"
        ];
        const isWhitelisted = whitelistedProtocols.find((p)=>iframeRootUrl.startsWith(p));
        if (!isWhitelisted) {
            throw new Error("invalid xnft url");
        }
        this.iframeRootUrl = iframeRootUrl;
        //
        // RPC Server channel from plugin -> extension-ui.
        //
        this._rpcServer = new _channel_plugin__WEBPACK_IMPORTED_MODULE_4__.PluginServer(url, _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_RPC_REQUEST, _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_RPC_RESPONSE);
        //
        // Effectively take a lock that's held until the setup is complete.
        //
        this.didFinishSetup = new Promise((resolve)=>{
            this._didFinishSetupResolver = resolve;
        });
    }
    get needsLoad() {
        return this._navPushFn === undefined;
    }
    //
    // Loads the plugin javascript code inside the iframe.
    //
    createIframe(preference, deepXnftPath) {
        logger.debug("creating iframe element");
        const url = new URL(this.iframeRootUrl);
        if (deepXnftPath) {
            // url.searchParams.set("deepXnftPath", deepXnftPath);
            url.hash = deepXnftPath;
        }
        this.iframeRoot = document.createElement("iframe");
        this.iframeRoot.style.width = "100%";
        this.iframeRoot.style.height = "100vh";
        this.iframeRoot.style.border = "none";
        this.iframeRoot.setAttribute("allow", (preference === null || preference === void 0 ? void 0 : preference.mediaPermissions) ? "camera;microphone;display-capture;fullscreen;clipboard-write *" : "fullscreen;clipboard-write *");
        this.iframeRoot.setAttribute("fetchpriority", "low");
        this.iframeRoot.src = url.toString();
        this.iframeRoot.sandbox.add("allow-same-origin");
        this.iframeRoot.sandbox.add("allow-scripts");
        this.iframeRoot.sandbox.add("allow-forms");
        this.iframeRoot.onload = ()=>this.handleRootIframeOnLoad();
    }
    // Onload handler for the top level iframe representing the xNFT.
    handleRootIframeOnLoad() {
        logger.debug("iframe on load");
        //
        // Context switch to this iframe.
        //
        this.setActiveIframe(this.iframeRoot, this.iframeRootUrl);
        //
        // Done.
        //
        this._didFinishSetupResolver();
    }
    // Note: Each time this is called, the previous active iframe no longer
    //       has the ability to make rpc invocations. Furthermore, the state
    //       will become stale, e.g., window.xnft.publicKey will be incorrect
    //       for the old active iframe since it will not receive the wallet
    //       changed notification.
    //
    //       In the future, we should properly cleanup the state for old iframes
    //       e.g., push down a disconnect event and/or provide the ability
    //       for multiple iframes within a single xNFT to have an active
    //       connection to the host at once.
    //
    //       For now, we make the simplifying assumption that if this is called
    //       it's meant for the iframe to fully hijack the xnft context.
    //
    setActiveIframe(iframe, xnftUrl) {
        this._iframeActive = iframe;
        this._rpcServer.setWindow(iframe.contentWindow, xnftUrl, this._handleRpc.bind(this));
        this.pushConnectNotification();
    }
    //
    // Cleanup the plugin iframe and garbage collect all associated data.
    //
    destroyIframe() {
        logger.debug("destroying iframe element");
        // document.head.removeChild(this.iframeRoot!);
        this.iframeRoot = undefined;
        // Don't need to remove the active iframe because we've removed the root.
        this._iframeActive = undefined;
        this._rpcServer.destroyWindow();
        this._didFinishSetupResolver = undefined;
        this.didFinishSetup = undefined;
    }
    //
    // Apis set from the outside host.
    //
    setHostApi({ push , pop , request , backgroundClient , connectionBackgroundClient , openPlugin  }) {
        this._navPushFn = push;
        this._openPlugin = openPlugin;
        this._requestTxApprovalFn = request;
        this._backgroundClient = backgroundClient;
        this._connectionBackgroundClient = connectionBackgroundClient;
    }
    //////////////////////////////////////////////////////////////////////////////
    // Rendering.
    //////////////////////////////////////////////////////////////////////////////
    mount(preference, deepXnftPath) {
        this.createIframe(preference, deepXnftPath);
        this.didFinishSetup.then(()=>{
            this.pushMountNotification();
        });
    }
    unmount() {
        this.destroyIframe();
        this.pushUnmountNotification();
        //
        // Effectively take a lock that's held until the setup is complete.
        //
        this.didFinishSetup = new Promise((resolve)=>{
            this._didFinishSetupResolver = resolve;
        });
    }
    pushMountNotification() {
        var _a, _b;
        const event = {
            type: _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_NOTIFICATION,
            detail: {
                name: _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_NOTIFICATION_MOUNT,
                data: {}
            }
        };
        (_b = (_a = this.iframeRoot) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(event, "*");
    }
    pushAppUiMetadata(metadata) {
        var _a, _b;
        const event = {
            type: _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_NOTIFICATION,
            detail: {
                name: _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_NOTIFICATION_UPDATE_METADATA,
                data: {
                    metadata
                }
            }
        };
        (_b = (_a = this.iframeRoot) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(event, "*");
    }
    pushUnmountNotification() {
        var _a, _b;
        const event = {
            type: _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_NOTIFICATION,
            detail: {
                name: _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_NOTIFICATION_UNMOUNT,
                data: {}
            }
        };
        (_b = (_a = this.iframeRoot) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(event, "*");
    }
    pushConnectNotification() {
        var _a;
        const event = {
            type: _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_NOTIFICATION,
            detail: {
                name: _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_NOTIFICATION_CONNECT,
                data: {
                    publicKeys: this._activeWallets,
                    connectionUrls: this._connectionUrls
                }
            }
        };
        (_a = this._iframeActive) === null || _a === void 0 ? void 0 : _a.contentWindow.postMessage(event, "*");
    }
    pushSolanaConnectionChangedNotification(url) {
        var _a;
        this._connectionUrls = {
            ...this._connectionUrls,
            [_types__WEBPACK_IMPORTED_MODULE_7__.Blockchain.SOLANA]: url
        };
        if (this._iframeActive) {
            const event = {
                type: _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_NOTIFICATION,
                detail: {
                    name: _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_NOTIFICATION_SOLANA_CONNECTION_URL_UPDATED,
                    data: {
                        url
                    }
                }
            };
            (_a = this._iframeActive) === null || _a === void 0 ? void 0 : _a.contentWindow.postMessage(event, "*");
        }
    }
    pushSolanaPublicKeyChangedNotification(publicKey) {
        var _a;
        this._activeWallets = {
            ...this._activeWallets,
            [_types__WEBPACK_IMPORTED_MODULE_7__.Blockchain.SOLANA]: publicKey
        };
        if (this._iframeActive) {
            const event = {
                type: _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_NOTIFICATION,
                detail: {
                    name: _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_NOTIFICATION_SOLANA_PUBLIC_KEY_UPDATED,
                    data: {
                        publicKey
                    }
                }
            };
            (_a = this._iframeActive) === null || _a === void 0 ? void 0 : _a.contentWindow.postMessage(event, "*");
        }
    }
    pushEthereumConnectionChangedNotification(url) {
        var _a;
        this._connectionUrls = {
            ...this._connectionUrls,
            [_types__WEBPACK_IMPORTED_MODULE_7__.Blockchain.ETHEREUM]: url
        };
        if (this._iframeActive) {
            const event = {
                type: _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_NOTIFICATION,
                detail: {
                    name: _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_NOTIFICATION_ETHEREUM_CONNECTION_URL_UPDATED,
                    data: {
                        url
                    }
                }
            };
            (_a = this._iframeActive) === null || _a === void 0 ? void 0 : _a.contentWindow.postMessage(event, "*");
        }
    }
    pushEthereumPublicKeyChangedNotification(publicKey) {
        var _a;
        this._activeWallets = {
            ...this._activeWallets,
            [_types__WEBPACK_IMPORTED_MODULE_7__.Blockchain.ETHEREUM]: publicKey
        };
        if (this._iframeActive) {
            const event = {
                type: _constants__WEBPACK_IMPORTED_MODULE_5__.CHANNEL_PLUGIN_NOTIFICATION,
                detail: {
                    name: _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_NOTIFICATION_ETHEREUM_PUBLIC_KEY_UPDATED,
                    data: {
                        publicKey
                    }
                }
            };
            (_a = this._iframeActive) === null || _a === void 0 ? void 0 : _a.contentWindow.postMessage(event, "*");
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    // RPC Requests.
    //////////////////////////////////////////////////////////////////////////////
    async _handleRpc(event) {
        const req = event.data.detail;
        logger.debug(`plugin rpc: ${JSON.stringify(req)}`);
        const { method , params  } = req;
        switch(method){
            case _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_RPC_METHOD_WINDOW_OPEN:
                return await this._handleWindowOpen(params[0]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_RPC_METHOD_PLUGIN_OPEN:
                return await this._handlePluginOpen(params[0]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_RPC_METHOD_CHAT_OPEN:
                return await this._handleChatOpen(params[0], params[1]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_RPC_METHOD_CLOSE_TO:
                return await this._handleCloseTo(params[0], params[1]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_RPC_METHOD_POP_OUT:
                return await this._handlePopout(params[0]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_RPC_METHOD_RESIZE_EXTENSION_WINDOW:
                return await this._handleResizeExtensionWindow(params[0]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.ETHEREUM_RPC_METHOD_SIGN_TX:
                return await this._handleEthereumSignTransaction(params[0], params[1]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.ETHEREUM_RPC_METHOD_SIGN_AND_SEND_TX:
                return await this._handleEthereumSignAndSendTransaction(params[0], params[1]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.ETHEREUM_RPC_METHOD_SIGN_MESSAGE:
                return await this._handleEthereumSignMessage(params[0], params[1]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.SOLANA_RPC_METHOD_SIGN_TX:
                return await this._handleSolanaSignTransaction(params[0], params[1]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.SOLANA_RPC_METHOD_SIGN_ALL_TXS:
                return await this._handleSolanaSignAllTransactions(params[0], params[1]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.SOLANA_RPC_METHOD_SIGN_AND_SEND_TX:
                return await this._handleSolanaSignAndSendTransaction(params[0], params[1], params[2], params[3]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.SOLANA_RPC_METHOD_SIGN_MESSAGE:
                return await this._handleSolanaSignMessage(params[0], params[1]);
            case _constants__WEBPACK_IMPORTED_MODULE_5__.SOLANA_RPC_METHOD_SIMULATE:
                return await this._handleSolanaSimulate(params[0], params[1]);
            default:
                logger.error(method);
                throw new Error("unexpected method");
        }
    }
    async _handleEthereumSignTransaction(transaction, pubkey) {
        try {
            const signature = await this._requestTransactionApproval(_constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_REQUEST_ETHEREUM_SIGN_TRANSACTION, transaction, pubkey);
            return [
                signature
            ];
        } catch (err) {
            return [
                null,
                err.toString()
            ];
        }
    }
    async _handleEthereumSignAndSendTransaction(transaction, pubkey) {
        try {
            const signature = await this._requestTransactionApproval(_constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_REQUEST_ETHEREUM_SIGN_AND_SEND_TRANSACTION, transaction, pubkey);
            return [
                signature
            ];
        } catch (err) {
            return [
                null,
                err.toString()
            ];
        }
    }
    async _handleEthereumSignMessage(transaction, pubkey) {
        try {
            const signature = await this._requestTransactionApproval(_constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_REQUEST_ETHEREUM_SIGN_MESSAGE, transaction, pubkey);
            return [
                signature
            ];
        } catch (err) {
            return [
                null,
                err.toString()
            ];
        }
    }
    async _handleSolanaSignTransaction(transaction, pubkey) {
        try {
            const signature = await this._requestTransactionApproval(_constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_REQUEST_SOLANA_SIGN_TRANSACTION, transaction, pubkey);
            return [
                signature
            ];
        } catch (err) {
            return [
                null,
                err.toString()
            ];
        }
    }
    async _handleSolanaSignAllTransactions(transactions, pubkey) {
        try {
            const signature = await this._requestTransactionApproval(_constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_REQUEST_SOLANA_SIGN_ALL_TRANSACTIONS, transactions, pubkey);
            return [
                signature
            ];
        } catch (err) {
            return [
                null,
                err.toString()
            ];
        }
    }
    async _handleSolanaSignAndSendTransaction(transaction, pubkey, options, confirmTransaction) {
        try {
            const signature = await this._requestTransactionApproval(_constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_REQUEST_SOLANA_SIGN_AND_SEND_TRANSACTION, transaction, pubkey, options, confirmTransaction);
            return [
                signature
            ];
        } catch (err) {
            return [
                null,
                err.toString()
            ];
        }
    }
    async _handleSolanaSignMessage(msg, pubkey) {
        try {
            const signature = await this._requestTransactionApproval(_constants__WEBPACK_IMPORTED_MODULE_5__.PLUGIN_REQUEST_SOLANA_SIGN_MESSAGE, msg, pubkey);
            return [
                signature
            ];
        } catch (err) {
            return [
                null,
                err.toString()
            ];
        }
    }
    async _handleSolanaSimulate(transaction, pubkey) {
        // todo
        return [
            "success"
        ];
    }
    async _handlePopout(options) {
        await (0,_browser_extension__WEBPACK_IMPORTED_MODULE_3__.openPopupWindow)("popup.html", options);
        window.close();
        return [
            "success"
        ];
    }
    async _handleResizeExtensionWindow(options) {
        (0,_browser_extension__WEBPACK_IMPORTED_MODULE_3__.resizeExtensionWindow)(options);
        return [
            "success"
        ];
    }
    async _handleWindowOpen(_url) {
        const url = new URL(_url);
        if (!url.protocol.startsWith("http")) {
            throw "Invalid url.";
        }
        window.open(url, "_blank");
        return [
            "success"
        ];
    }
    async _handlePluginOpen(nftAddress) {
        var _a;
        (_a = this._openPlugin) === null || _a === void 0 ? void 0 : _a.call(this, nftAddress);
        return [
            "success"
        ];
    }
    async _handleChatOpen(chatId, mintAddress) {
        var _a;
        throw "Not implemented yet";
        await ((_a = this._backgroundClient) === null || _a === void 0 ? void 0 : _a.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_5__.UI_RPC_METHOD_NAVIGATION_PUSH,
            params: [
                chatId,
                mintAddress
            ]
        }));
        return [
            "success"
        ];
    }
    async _handleCloseTo(url, tab) {
        var _a;
        await ((_a = this._backgroundClient) === null || _a === void 0 ? void 0 : _a.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_5__.UI_RPC_METHOD_NAVIGATION_PUSH,
            params: [
                url,
                tab
            ]
        }));
        return [
            "success"
        ];
    }
    clickHandlerError() {
        if (!this._lastClickTsMs) {
            return [
                "error"
            ];
        }
        const timeLapsed = Date.now() - this._lastClickTsMs;
        if (timeLapsed >= 1000) {
            return [
                "error"
            ];
        }
        return null;
    }
    //
    // Asks the extension UI to sign the transaction.
    //
    async _requestTransactionApproval(kind, transaction, publicKey, options, confirmTransaction) {
        return new Promise((resolve, reject)=>{
            this._requestTxApprovalFn({
                kind,
                data: transaction,
                xnftAddress: this.xnftAddress,
                pluginUrl: this.iframeRootUrl,
                publicKey,
                resolve,
                reject,
                confirmTransaction,
                options
            });
        });
    }
    //////////////////////////////////////////////////////////////////////////////
    // Solana Connection Bridge.
    //////////////////////////////////////////////////////////////////////////////
    //
    // Relay all requests to the background service worker.
    //
    async _handleConnectionBridge(event) {
        var _a;
        logger.debug(`handle connection bridge`, event);
        return await ((_a = this._connectionBackgroundClient) === null || _a === void 0 ? void 0 : _a.request(event.data.detail));
    }
} //# sourceMappingURL=plugin.js.map


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

/***/ "../common/dist/esm/preferences.js":
/*!*****************************************!*\
  !*** ../common/dist/esm/preferences.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_AGGREGATE_WALLETS": () => (/* binding */ DEFAULT_AGGREGATE_WALLETS),
/* harmony export */   "DEFAULT_AUTO_LOCK_INTERVAL_SECS": () => (/* binding */ DEFAULT_AUTO_LOCK_INTERVAL_SECS),
/* harmony export */   "DEFAULT_DARK_MODE": () => (/* binding */ DEFAULT_DARK_MODE),
/* harmony export */   "DEFAULT_DEVELOPER_MODE": () => (/* binding */ DEFAULT_DEVELOPER_MODE),
/* harmony export */   "defaultPreferences": () => (/* binding */ defaultPreferences)
/* harmony export */ });
/* harmony import */ var _ethereum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ethereum */ "../common/dist/esm/ethereum/index.js");
/* harmony import */ var _solana__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solana */ "../common/dist/esm/solana/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



const DEFAULT_DARK_MODE = false;
const DEFAULT_DEVELOPER_MODE = false;
const DEFAULT_AGGREGATE_WALLETS = false;
const DEFAULT_AUTO_LOCK_INTERVAL_SECS = 15 * 60;
function defaultPreferences() {
    return {
        autoLockSettings: {
            seconds: DEFAULT_AUTO_LOCK_INTERVAL_SECS,
            option: undefined
        },
        approvedOrigins: [],
        darkMode: DEFAULT_DARK_MODE,
        developerMode: DEFAULT_DEVELOPER_MODE,
        aggregateWallets: DEFAULT_AGGREGATE_WALLETS,
        solana: {
            explorer: _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaExplorer.DEFAULT,
            cluster: _solana__WEBPACK_IMPORTED_MODULE_1__.SolanaCluster.DEFAULT,
            commitment: "confirmed"
        },
        ethereum: {
            explorer: _ethereum__WEBPACK_IMPORTED_MODULE_0__.EthereumExplorer.DEFAULT,
            connectionUrl: _ethereum__WEBPACK_IMPORTED_MODULE_0__.EthereumConnectionUrl.DEFAULT,
            chainId: ""
        }
    };
} //# sourceMappingURL=preferences.js.map


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

/***/ "../common/dist/esm/solana/background-connection.js":
/*!**********************************************************!*\
  !*** ../common/dist/esm/solana/background-connection.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundSolanaConnection": () => (/* binding */ BackgroundSolanaConnection),
/* harmony export */   "confirmTransaction": () => (/* binding */ confirmTransaction)
/* harmony export */ });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs58 */ "../common/node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "../common/dist/esm/utils.js");
/* harmony import */ var _rpc_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rpc-helpers */ "../common/dist/esm/solana/rpc-helpers.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "../common/dist/esm/solana/types.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");









class BackgroundSolanaConnection extends _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Connection {
    // Note that this constructor is actually meaningless.
    // We only use it so that we can subclass Connection.
    // In reality, the params here are actually read in the context of the
    // background script.
    constructor(backgroundClient, endpoint, commitmentOrConfig){
        super(endpoint, commitmentOrConfig);
        this._backgroundClient = backgroundClient;
    }
    async customSplMetadataUri(tokens, tokenMetadata) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_CUSTOM_SPL_METADATA_URI,
            params: [
                tokens,
                tokenMetadata
            ]
        });
    }
    async customSplTokenAccounts(publicKey) {
        const resp = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_CUSTOM_SPL_TOKEN_ACCOUNTS,
            params: [
                publicKey.toString()
            ]
        });
        return BackgroundSolanaConnection.customSplTokenAccountsFromJson(resp);
    }
    static customSplTokenAccountsFromJson(json) {
        return {
            mintsMap: json.mintsMap.map((m)=>{
                return [
                    m[0],
                    {
                        ...m[1],
                        supply: BigInt(m[1].supply)
                    }
                ];
            }),
            fts: {
                ...json.fts,
                fungibleTokens: json.fts.fungibleTokens.map((t)=>{
                    return {
                        ...t,
                        amount: new (bn_js__WEBPACK_IMPORTED_MODULE_1___default())(t.amount)
                    };
                })
            },
            nfts: {
                ...json.nfts,
                nftTokens: json.nfts.nftTokens.map((t)=>{
                    return {
                        ...t,
                        amount: new (bn_js__WEBPACK_IMPORTED_MODULE_1___default())(t.amount)
                    };
                })
            }
        };
    }
    static customSplTokenAccountsToJson(_resp) {
        return {
            mintsMap: _resp.mintsMap.map(([publicKey, mintStr])=>{
                var _a, _b;
                return [
                    publicKey,
                    mintStr != null ? {
                        ...mintStr,
                        supply: mintStr.supply.toString(),
                        mintAuthority: (_a = mintStr.mintAuthority) === null || _a === void 0 ? void 0 : _a.toString(),
                        freezeAuthority: (_b = mintStr.freezeAuthority) === null || _b === void 0 ? void 0 : _b.toString()
                    } : null
                ];
            }),
            fts: {
                fungibleTokens: _resp.fts.fungibleTokens.map((t)=>{
                    return BackgroundSolanaConnection.solanaTokenAccountWithKeyToJson(t);
                }),
                fungibleTokenMetadata: _resp.fts.fungibleTokenMetadata.map((t)=>{
                    return t ? BackgroundSolanaConnection.tokenMetadataToJson(t) : null;
                })
            },
            nfts: {
                nftTokens: _resp.nfts.nftTokens.map((t)=>{
                    return BackgroundSolanaConnection.solanaTokenAccountWithKeyToJson(t);
                }),
                nftTokenMetadata: _resp.nfts.nftTokenMetadata.map((t)=>{
                    return t ? BackgroundSolanaConnection.tokenMetadataToJson(t) : null;
                })
            }
        };
    }
    static solanaTokenAccountWithKeyToJson(t) {
        var _a, _b;
        return {
            ...t,
            mint: t.mint.toString(),
            key: t.key.toString(),
            amount: t.amount.toString(),
            delegate: (_a = t.delegate) === null || _a === void 0 ? void 0 : _a.toString(),
            delegatedAmount: t.delegatedAmount.toString(),
            authority: t.authority.toString(),
            closeAuthority: (_b = t.closeAuthority) === null || _b === void 0 ? void 0 : _b.toString()
        };
    }
    static tokenMetadataToJson(t) {
        var _a;
        return {
            ...t,
            publicKey: t.publicKey.toString(),
            account: {
                ...t.account,
                updateAuthority: t.account.updateAuthority.toString(),
                mint: t.account.mint.toString(),
                collection: t.account.collection ? {
                    ...t.account.collection,
                    key: t.account.collection.key.toString()
                } : null,
                uses: t.account.uses ? {
                    ...t.account.uses,
                    remaining: t.account.uses.remaining.toString(),
                    total: t.account.uses.total.toString()
                } : null,
                data: {
                    ...t.account.data,
                    creators: ((_a = t.account.data.creators) !== null && _a !== void 0 ? _a : []).map((c)=>{
                        return {
                            ...c,
                            address: c.address.toString()
                        };
                    })
                }
            }
        };
    }
    async getAccountInfo(publicKey, commitment) {
        const resp = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO,
            params: [
                publicKey.toString(),
                commitment
            ]
        });
        if (resp === null) {
            return resp;
        }
        return BackgroundSolanaConnection.accountInfoFromJson(resp);
    }
    static accountInfoToJson(res) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_5__.IS_MOBILE) {
            return res;
        }
        if (res == null) {
            return res;
        }
        return {
            ...res,
            owner: res.owner.toString(),
            data: res.data ? (0,bs58__WEBPACK_IMPORTED_MODULE_2__.encode)(res.data) : res.data
        };
    }
    static accountInfoFromJson(res) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_5__.IS_MOBILE) {
            res.data = buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(res.data);
            res.owner = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(res.owner);
            return res;
        }
        return {
            ...res,
            owner: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(res.owner),
            data: (0,bs58__WEBPACK_IMPORTED_MODULE_2__.decode)(res.data)
        };
    }
    async getLatestBlockhash(commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH,
            params: [
                commitment
            ]
        });
    }
    async getLatestBlockhashAndContext(commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH_AND_CONTEXT,
            params: [
                commitment
            ]
        });
    }
    async getAccountInfoAndContext(publicKey, commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO_AND_CONTEXT,
            params: [
                publicKey.toString(),
                commitment
            ]
        });
    }
    async getTokenAccountsByOwner(ownerAddress, filter, commitment) {
        let _filter;
        // @ts-ignore
        if (filter.mint) {
            // @ts-ignore
            _filter = {
                mint: filter.mint.toString()
            };
        } else {
            // @ts-ignore
            _filter = {
                programId: filter.programId.toString()
            };
        }
        const resp = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNTS_BY_OWNER,
            params: [
                ownerAddress.toString(),
                _filter,
                commitment
            ]
        });
        resp.value = resp.value.map((token)=>{
            token.account.data = buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(token.account.data);
            return token;
        });
        return resp;
    }
    async sendRawTransaction(rawTransaction, options) {
        const txStr = (0,bs58__WEBPACK_IMPORTED_MODULE_2__.encode)(rawTransaction);
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_SEND_RAW_TRANSACTION,
            params: [
                txStr,
                options
            ]
        });
    }
    async getMultipleAccountsInfo(publicKeys, commitment) {
        const resp = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_GET_MULTIPLE_ACCOUNTS_INFO,
            params: [
                publicKeys.map((pk)=>pk.toString()),
                commitment
            ]
        });
        return resp.map((a)=>{
            if (a === null) {
                return a;
            }
            a.data = buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(a.data);
            a.owner = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(a.owner.toString());
            return a;
        });
    }
    async getConfirmedSignaturesForAddress2(address, options, commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_CONFIRMED_SIGNATURES_FOR_ADDRESS_2,
            params: [
                address.toString(),
                options,
                commitment
            ]
        });
    }
    async getParsedTransactions(signatures, commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTIONS,
            params: [
                signatures,
                commitment
            ]
        });
    }
    // @ts-ignore
    async confirmTransaction(strategy, commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_CONFIRM_TRANSACTION,
            params: [
                strategy,
                commitment
            ]
        });
    }
    async getParsedTransaction(signature, commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTION,
            params: [
                signature,
                commitment
            ]
        });
    }
    async getProgramAccounts(programId, configOrCommitment) {
        const resp = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_PROGRAM_ACCOUNTS,
            params: [
                programId.toString(),
                configOrCommitment
            ]
        });
        return resp.map((r)=>{
            r.account.data = buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(r.account.data.data);
            return r;
        });
    }
    async getFeeForMessage(message, commitment) {
        let serializedMessage = (0,bs58__WEBPACK_IMPORTED_MODULE_2__.encode)(message.serialize());
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_FEE_FOR_MESSAGE,
            params: [
                serializedMessage,
                commitment
            ]
        });
    }
    async getMinimumBalanceForRentExemption(dataLength, commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION,
            params: [
                dataLength,
                commitment
            ]
        });
    }
    async getTokenAccountBalance(tokenAddress, commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNT_BALANCE,
            params: [
                tokenAddress.toString(),
                commitment
            ]
        });
    }
    async getBalance(publicKey, commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_BALANCE,
            params: [
                publicKey.toString(),
                commitment
            ]
        });
    }
    async getSlot(commitment) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_SLOT,
            params: [
                commitment
            ]
        });
    }
    async getBlockTime(slot) {
        return await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_BLOCK_TIME,
            params: [
                slot
            ]
        });
    }
    async getParsedTokenAccountsByOwner(ownerAddress, filter, commitment) {
        const resp = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_PARSED_TOKEN_ACCOUNTS_BY_OWNER,
            params: [
                ownerAddress.toString(),
                (0,_types__WEBPACK_IMPORTED_MODULE_7__.serializeTokenAccountsFilter)(filter),
                commitment
            ]
        });
        resp.value = resp.value.map(({ pubkey , account  })=>{
            return {
                pubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(pubkey),
                account: {
                    ...account,
                    owner: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(account.owner)
                }
            };
        });
        return resp;
    }
    async getTokenLargestAccounts(mintAddress, commitment) {
        const resp = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_TOKEN_LARGEST_ACCOUNTS,
            params: [
                mintAddress.toString(),
                commitment
            ]
        });
        resp.value = resp.value.map((val)=>{
            return {
                ...val,
                address: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(val.address)
            };
        });
        return resp;
    }
    async getAddressLookupTable(accountKey, config) {
        const response = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_ADDRESS_LOOKUP_TABLE,
            params: [
                accountKey.toString(),
                config
            ]
        });
        response.value = _rpc_helpers__WEBPACK_IMPORTED_MODULE_6__.addressLookupTableAccountParser.deserialize(response.value);
        return response;
    }
    async getParsedAccountInfo(publicKey, commitment) {
        const resp = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_PARSED_ACCOUNT_INFO,
            params: [
                publicKey.toString(),
                commitment
            ]
        });
        return resp;
    }
    async getParsedProgramAccounts(programId, configOrCommitment) {
        const resp = await this._backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_4__.SOLANA_CONNECTION_RPC_GET_PARSED_PROGRAM_ACCOUNTS,
            params: [
                programId.toString(),
                configOrCommitment
            ]
        });
        return resp.map((val)=>{
            return {
                pubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(val.pubkey),
                account: {
                    ...val.account,
                    owner: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(val.account.owner),
                    data: buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(val.account.data.data)
                }
            };
        });
    }
    ///////////////////////////////////////////////////////////////////////////////
    // Below this not yet implemented.
    ///////////////////////////////////////////////////////////////////////////////
    async sendTransaction(transaction, signersOrOptions, options) {
        throw new Error("not implemented");
    }
    async getBalanceAndContext(publicKey, commitment) {
        throw new Error("not implemented");
    }
    async getMinimumLedgerSlot() {
        throw new Error("not implemented");
    }
    async getFirstAvailableBlock() {
        throw new Error("not implemented");
    }
    async getSupply(config) {
        throw new Error("not implemented");
    }
    async getTokenSupply(tokenMintAddress, commitment) {
        throw new Error("not implemented");
    }
    async getLargestAccounts(config) {
        throw new Error("not implemented");
    }
    async getMultipleAccountsInfoAndContext(publicKeys, commitment) {
        throw new Error("not implemented");
    }
    async getStakeActivation(publicKey, commitment, epoch) {
        throw new Error("not implemented");
    }
    getClusterNodes() {
        throw new Error("not implemented");
    }
    getVoteAccounts(commitment) {
        throw new Error("not implemented");
    }
    getSlotLeader(commitment) {
        throw new Error("not implemented");
    }
    getSlotLeaders(startSlot, limit) {
        throw new Error("not implemented");
    }
    getSignatureStatus(signature, config) {
        throw new Error("not implemented");
    }
    getSignatureStatuses(signatures, config) {
        throw new Error("not implemented");
    }
    getTransactionCount(commitment) {
        throw new Error("not implemented");
    }
    getTotalSupply(commitment) {
        throw new Error("not implemented");
    }
    getInflationGovernor(commitment) {
        throw new Error("not implemented");
    }
    getInflationReward(addresses, epoch, commitment) {
        throw new Error("not implemented");
    }
    getEpochInfo(commitment) {
        throw new Error("not implemented");
    }
    getEpochSchedule() {
        throw new Error("not implemented");
    }
    getLeaderSchedule() {
        throw new Error("not implemented");
    }
    getRecentBlockhashAndContext(commitment) {
        throw new Error("not implemented");
    }
    getRecentPerformanceSamples(limit) {
        throw new Error("not implemented");
    }
    getFeeCalculatorForBlockhash(blockhash, commitment) {
        throw new Error("not implemented");
    }
    getRecentBlockhash(commitment) {
        throw new Error("not implemented");
    }
    getVersion() {
        throw new Error("not implemented");
    }
    getGenesisHash() {
        throw new Error("not implemented");
    }
    // @ts-ignore
    getBlock(slot, opts) {
        throw new Error("not implemented");
    }
    getBlockHeight(commitment) {
        throw new Error("not implemented");
    }
    getBlockProduction(configOrCommitment) {
        throw new Error("not implemented");
    }
    getTransaction(signature, opts) {
        throw new Error("not implemented");
    }
    getConfirmedBlock(slot, commitment) {
        throw new Error("not implemented");
    }
    getBlocks(startSlot, endSlot, commitment) {
        throw new Error("not implemented");
    }
    getBlockSignatures(slot, commitment) {
        throw new Error("not implemented");
    }
    getConfirmedBlockSignatures(slot, commitment) {
        throw new Error("not implemented");
    }
    getConfirmedTransaction(signature, commitment) {
        throw new Error("not implemented");
    }
    getParsedConfirmedTransaction(signature, commitment) {
        throw new Error("not implemented");
    }
    getParsedConfirmedTransactions(signatures, commitment) {
        throw new Error("not implemented");
    }
    getConfirmedSignaturesForAddress(address, startSlot, endSlot) {
        throw new Error("not implemented");
    }
    getSignaturesForAddress(address, options, commitment) {
        throw new Error("not implemented");
    }
    getNonceAndContext(nonceAccount, commitment) {
        throw new Error("not implemented");
    }
    getNonce(nonceAccount, commitment) {
        throw new Error("not implemented");
    }
    requestAirdrop(to, lamports) {
        throw new Error("not implemented");
    }
    async simulateTransaction(transactionOrMessage, configOrSigners, includeAccounts) {
        throw new Error("not implemented");
    }
    sendEncodedTransaction(encodedTransaction, options) {
        throw new Error("not implemented");
    }
    onAccountChange(publicKey, callback, commitment) {
        throw new Error("not implemented");
    }
    removeAccountChangeListener(id) {
        throw new Error("not implemented");
    }
    onProgramAccountChange(programId, callback, commitment, filters) {
        throw new Error("not implemented");
    }
    removeProgramAccountChangeListener(id) {
        throw new Error("not implemented");
    }
    onLogs(filter, callback, commitment) {
        throw new Error("not implemented");
    }
    removeOnLogsListener(id) {
        throw new Error("not implemented");
    }
    onSlotChange(callback) {
        throw new Error("not implemented");
    }
    removeSlotChangeListener(id) {
        throw new Error("not implemented");
    }
    onSlotUpdate(callback) {
        throw new Error("not implemented");
    }
    removeSlotUpdateListener(id) {
        throw new Error("not implemented");
    }
    _buildArgs(args, override, encoding, extra) {
        throw new Error("not implemented");
    }
    onSignature(signature, callback, commitment) {
        throw new Error("not implemented");
    }
    onSignatureWithOptions(signature, callback, options) {
        throw new Error("not implemented");
    }
    removeSignatureListener(id) {
        throw new Error("not implemented");
    }
    onRootChange(callback) {
        throw new Error("not implemented");
    }
    removeRootChangeListener(id) {
        throw new Error("not implemented");
    }
}
async function confirmTransaction(c, txSig, commitment) {
    return new Promise(async (resolve, reject)=>{
        setTimeout(()=>reject(new Error(`30 second timeout: unable to confirm transaction`)), 30000);
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        let tx = await c.getParsedTransaction(txSig, commitment);
        while(tx === null){
            tx = await c.getParsedTransaction(txSig, commitment);
            await new Promise((resolve)=>setTimeout(resolve, 1000));
        }
        resolve(tx);
    });
} //# sourceMappingURL=background-connection.js.map


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

/***/ "../common/dist/esm/solana/cluster.js":
/*!********************************************!*\
  !*** ../common/dist/esm/solana/cluster.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_SOLANA_CLUSTER": () => (/* binding */ DEFAULT_SOLANA_CLUSTER),
/* harmony export */   "SolanaCluster": () => (/* binding */ SolanaCluster)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

const DEFAULT_SOLANA_CLUSTER = "https://swr.xnfts.dev/rpc-proxy/";
const SolanaCluster = {
    MAINNET: DEFAULT_SOLANA_CLUSTER,
    DEVNET: "https://api.devnet.solana.com",
    LOCALNET: "http://localhost:8899",
    DEFAULT: ({"__DEV__":true,"IS_STATIC":"","NODE_ENV":"development","TAMAGUI_TARGET":"web","DEBUG":"0"}).DEFAULT_SOLANA_CONNECTION_URL || DEFAULT_SOLANA_CLUSTER
}; //# sourceMappingURL=cluster.js.map


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

/***/ "../common/dist/esm/solana/explorer.js":
/*!*********************************************!*\
  !*** ../common/dist/esm/solana/explorer.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolanaExplorer": () => (/* binding */ SolanaExplorer)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

const SolanaExplorer = {
    SOLANA_EXPLORER: "https://explorer.solana.com",
    SOLSCAN: "https://solscan.io",
    SOLANA_BEACH: "https://solanabeach.io",
    SOLANA_FM: "https://solana.fm",
    XRAY: "https://xray.helius.xyz/",
    DEFAULT: "https://solscan.io"
}; //# sourceMappingURL=explorer.js.map


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

/***/ "../common/dist/esm/solana/index.js":
/*!******************************************!*\
  !*** ../common/dist/esm/solana/index.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASSOCIATED_TOKEN_PROGRAM_ID": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.ASSOCIATED_TOKEN_PROGRAM_ID),
/* harmony export */   "BAKED_IN_XNFTS": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.BAKED_IN_XNFTS),
/* harmony export */   "BackgroundSolanaConnection": () => (/* reexport safe */ _background_connection__WEBPACK_IMPORTED_MODULE_13__.BackgroundSolanaConnection),
/* harmony export */   "DEFAULT_SOLANA_CLUSTER": () => (/* reexport safe */ _cluster__WEBPACK_IMPORTED_MODULE_14__.DEFAULT_SOLANA_CLUSTER),
/* harmony export */   "IDL": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.IDL),
/* harmony export */   "SOL_NATIVE_MINT": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.SOL_NATIVE_MINT),
/* harmony export */   "Solana": () => (/* binding */ Solana),
/* harmony export */   "SolanaCluster": () => (/* reexport safe */ _cluster__WEBPACK_IMPORTED_MODULE_14__.SolanaCluster),
/* harmony export */   "SolanaExplorer": () => (/* reexport safe */ _explorer__WEBPACK_IMPORTED_MODULE_15__.SolanaExplorer),
/* harmony export */   "SolanaProvider": () => (/* reexport safe */ _provider__WEBPACK_IMPORTED_MODULE_12__.SolanaProvider),
/* harmony export */   "SolanaWalletAdapter": () => (/* reexport safe */ _wallet_adapter__WEBPACK_IMPORTED_MODULE_21__.SolanaWalletAdapter),
/* harmony export */   "TOKEN_AUTH_RULES_ID": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.TOKEN_AUTH_RULES_ID),
/* harmony export */   "TOKEN_METADATA_PROGRAM_ID": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.TOKEN_METADATA_PROGRAM_ID),
/* harmony export */   "TOKEN_PROGRAM_ID": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.TOKEN_PROGRAM_ID),
/* harmony export */   "USDC_MINT": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.USDC_MINT),
/* harmony export */   "WSOL_MINT": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.WSOL_MINT),
/* harmony export */   "XNFT_PROGRAM_ID": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.XNFT_PROGRAM_ID),
/* harmony export */   "addressLookupTableAccountParser": () => (/* reexport safe */ _rpc_helpers__WEBPACK_IMPORTED_MODULE_17__.addressLookupTableAccountParser),
/* harmony export */   "assertOwnerInstruction": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.assertOwnerInstruction),
/* harmony export */   "associatedTokenAddress": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.associatedTokenAddress),
/* harmony export */   "confirmTransaction": () => (/* reexport safe */ _background_connection__WEBPACK_IMPORTED_MODULE_13__.confirmTransaction),
/* harmony export */   "customSplTokenAccounts": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.customSplTokenAccounts),
/* harmony export */   "deserializeLegacyTransaction": () => (/* reexport safe */ _transaction_helpers__WEBPACK_IMPORTED_MODULE_19__.deserializeLegacyTransaction),
/* harmony export */   "deserializeTokenAccountsFilter": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_20__.deserializeTokenAccountsFilter),
/* harmony export */   "deserializeTransaction": () => (/* reexport safe */ _transaction_helpers__WEBPACK_IMPORTED_MODULE_19__.deserializeTransaction),
/* harmony export */   "fetchMints": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.fetchMints),
/* harmony export */   "fetchSplMetadata": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.fetchSplMetadata),
/* harmony export */   "fetchSplMetadataUri": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.fetchSplMetadataUri),
/* harmony export */   "fetchTokens": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.fetchTokens),
/* harmony export */   "fetchXnft": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.fetchXnft),
/* harmony export */   "fetchXnfts": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.fetchXnfts),
/* harmony export */   "fetchXnftsFromPubkey": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.fetchXnftsFromPubkey),
/* harmony export */   "generateUnwrapSolTx": () => (/* binding */ generateUnwrapSolTx),
/* harmony export */   "generateWrapSolTx": () => (/* binding */ generateWrapSolTx),
/* harmony export */   "isCardinalWrappedToken": () => (/* reexport safe */ _send_helpers__WEBPACK_IMPORTED_MODULE_18__.isCardinalWrappedToken),
/* harmony export */   "isCreatorStandardToken": () => (/* reexport safe */ _send_helpers__WEBPACK_IMPORTED_MODULE_18__.isCreatorStandardToken),
/* harmony export */   "isOpenCreatorProtocol": () => (/* reexport safe */ _send_helpers__WEBPACK_IMPORTED_MODULE_18__.isOpenCreatorProtocol),
/* harmony export */   "isProgrammableNftToken": () => (/* reexport safe */ _send_helpers__WEBPACK_IMPORTED_MODULE_18__.isProgrammableNftToken),
/* harmony export */   "isVersionedTransaction": () => (/* reexport safe */ _transaction_helpers__WEBPACK_IMPORTED_MODULE_19__.isVersionedTransaction),
/* harmony export */   "masterEditionAddress": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.masterEditionAddress),
/* harmony export */   "metadataAddress": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.metadataAddress),
/* harmony export */   "serializeTokenAccountsFilter": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_20__.serializeTokenAccountsFilter),
/* harmony export */   "tokenRecordAddress": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.tokenRecordAddress),
/* harmony export */   "xnftClient": () => (/* reexport safe */ _programs__WEBPACK_IMPORTED_MODULE_16__.xnftClient)
/* harmony export */ });
/* harmony import */ var _cardinal_creator_standard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cardinal/creator-standard */ "../../node_modules/@cardinal/creator-standard/dist/esm/index.js");
/* harmony import */ var _cardinal_token_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cardinal/token-manager */ "../../node_modules/@cardinal/token-manager/dist/esm/index.js");
/* harmony import */ var _magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @magiceden-oss/open_creator_protocol */ "../../node_modules/@magiceden-oss/open_creator_protocol/dist/src/index.js");
/* harmony import */ var _magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @metaplex-foundation/mpl-token-metadata */ "../../node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/mpl-token-metadata.js");
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @project-serum/anchor */ "../../node_modules/@project-serum/anchor/dist/browser/index.js");
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ "../common/node_modules/@solana/spl-token/lib/esm/index.mjs");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* harmony import */ var _programs_assert_owner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./programs/assert-owner */ "../common/dist/esm/solana/programs/assert-owner.js");
/* harmony import */ var _programs_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./programs/token */ "../common/dist/esm/solana/programs/token.js");
/* harmony import */ var _programs_xnft__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./programs/xnft */ "../common/dist/esm/solana/programs/xnft.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./provider */ "../common/dist/esm/solana/provider.js");
/* harmony import */ var _background_connection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./background-connection */ "../common/dist/esm/solana/background-connection.js");
/* harmony import */ var _cluster__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cluster */ "../common/dist/esm/solana/cluster.js");
/* harmony import */ var _explorer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./explorer */ "../common/dist/esm/solana/explorer.js");
/* harmony import */ var _programs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./programs */ "../common/dist/esm/solana/programs/index.js");
/* harmony import */ var _rpc_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rpc-helpers */ "../common/dist/esm/solana/rpc-helpers.js");
/* harmony import */ var _send_helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./send-helpers */ "../common/dist/esm/solana/send-helpers.js");
/* harmony import */ var _transaction_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./transaction-helpers */ "../common/dist/esm/solana/transaction-helpers.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./types */ "../common/dist/esm/solana/types.js");
/* harmony import */ var _wallet_adapter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wallet-adapter */ "../common/dist/esm/solana/wallet-adapter.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");
























//
// API for performing Solana actions from within the wallet. Beware! Invoking
// these methods will automatically execute within the wallet without an
// approval screen.
//
class Solana {
    static async burnAndCloseNft(ctx, req) {
        var _a;
        const { solDestination , mint  } = req;
        const { walletPublicKey , tokenClient , commitment  } = ctx;
        const provider = tokenClient.provider;
        const associatedToken = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, walletPublicKey);
        const tx = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Transaction();
        tx.add(await tokenClient.methods.burn(new (bn_js__WEBPACK_IMPORTED_MODULE_7___default())((_a = req.amount) !== null && _a !== void 0 ? _a : 1)).accounts({
            source: associatedToken,
            mint,
            authority: walletPublicKey
        }).instruction());
        tx.add(await tokenClient.methods.closeAccount().accounts({
            account: associatedToken,
            destination: solDestination,
            authority: walletPublicKey
        }).instruction());
        tx.feePayer = walletPublicKey;
        tx.recentBlockhash = (await provider.connection.getLatestBlockhash(commitment)).blockhash;
        const signedTx = await _provider__WEBPACK_IMPORTED_MODULE_12__.SolanaProvider.signTransaction(ctx, tx);
        const rawTx = signedTx.serialize();
        return await provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: false,
            preflightCommitment: commitment
        });
    }
    static async transferToken(ctx, req) {
        const { walletPublicKey , registry , tokenClient , commitment  } = ctx;
        const { mint , destination , amount  } = req;
        const decimals = (()=>{
            if (req.decimals !== undefined) {
                return req.decimals;
            }
            const tokenInfo = registry.get(mint.toString());
            if (!tokenInfo) {
                throw new Error("no token info found");
            }
            const decimals = tokenInfo.decimals;
            return decimals;
        })();
        const nativeAmount = new (bn_js__WEBPACK_IMPORTED_MODULE_7___default())(amount);
        const destinationAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, destination);
        const sourceAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, walletPublicKey);
        const [destinationAccount, destinationAtaAccount] = await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.utils.rpc.getMultipleAccounts(tokenClient.provider.connection, [
            destination,
            destinationAta
        ], commitment);
        //
        // Require the account to either be a system program account or a brand new
        // account.
        //
        if (destinationAccount && !destinationAccount.account.owner.equals(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SystemProgram.programId)) {
            throw new Error("invalid account");
        }
        // Instructions to execute prior to the transfer.
        const preInstructions = [];
        if (!destinationAtaAccount) {
            preInstructions.push(_programs_assert_owner__WEBPACK_IMPORTED_MODULE_9__.assertOwnerInstruction({
                account: destination,
                owner: _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SystemProgram.programId
            }));
            preInstructions.push((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.createAssociatedTokenAccountInstruction)(walletPublicKey, destinationAta, destination, mint));
        }
        const tx = await tokenClient.methods.transferChecked(nativeAmount, decimals).accounts({
            source: sourceAta,
            mint,
            destination: destinationAta,
            authority: walletPublicKey
        }).preInstructions(preInstructions).transaction();
        tx.feePayer = walletPublicKey;
        tx.recentBlockhash = (await tokenClient.provider.connection.getLatestBlockhash(commitment)).blockhash;
        const signedTx = await _provider__WEBPACK_IMPORTED_MODULE_12__.SolanaProvider.signTransaction(ctx, tx);
        const rawTx = signedTx.serialize();
        return await tokenClient.provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: false,
            preflightCommitment: commitment
        });
    }
    // see github.com/cardinal-labs/cardinal-creator-standard
    static async transferCreatorStandardToken(ctx, req) {
        const { walletPublicKey , tokenClient , commitment  } = ctx;
        const { mint , destination  } = req;
        const destinationAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, destination);
        const sourceAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, walletPublicKey);
        const [destinationAccount, destinationAtaAccount] = await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.utils.rpc.getMultipleAccounts(tokenClient.provider.connection, [
            destination,
            destinationAta
        ], commitment);
        //
        // Require the account to either be a system program account or a brand new
        // account.
        //
        if (destinationAccount && !destinationAccount.account.owner.equals(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SystemProgram.programId)) {
            throw new Error("invalid account");
        }
        // Instructions to execute prior to the transfer.
        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Transaction();
        const mintManagerId = (0,_cardinal_creator_standard__WEBPACK_IMPORTED_MODULE_0__.findMintManagerId)(mint);
        const mintMetadataId = (0,_cardinal_creator_standard__WEBPACK_IMPORTED_MODULE_0__.findMintMetadataId)(mint);
        const mintManagerData = await _cardinal_creator_standard__WEBPACK_IMPORTED_MODULE_0__.MintManager.fromAccountAddress(ctx.connection, mintManagerId);
        if (!destinationAtaAccount) {
            transaction.add(_programs_assert_owner__WEBPACK_IMPORTED_MODULE_9__.assertOwnerInstruction({
                account: destination,
                owner: _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SystemProgram.programId
            }));
            transaction.add((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.createAssociatedTokenAccountInstruction)(walletPublicKey, destinationAta, destination, mint));
        }
        transaction.add((0,_cardinal_creator_standard__WEBPACK_IMPORTED_MODULE_0__.createTransferInstruction)({
            mintManager: mintManagerId,
            mint: mintManagerData.mint,
            mintMetadata: mintMetadataId,
            ruleset: mintManagerData.ruleset,
            from: sourceAta,
            to: destinationAta,
            authority: walletPublicKey,
            instructions: _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SYSVAR_INSTRUCTIONS_PUBKEY
        }));
        transaction.feePayer = walletPublicKey;
        transaction.recentBlockhash = (await tokenClient.provider.connection.getLatestBlockhash(commitment)).blockhash;
        const signedTx = await _provider__WEBPACK_IMPORTED_MODULE_12__.SolanaProvider.signTransaction(ctx, transaction);
        const rawTx = signedTx.serialize();
        return await tokenClient.provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: false,
            preflightCommitment: commitment
        });
    }
    static async transferOpenCreatorProtocol(solanaCtx, req, mintState) {
        const { walletPublicKey , tokenClient , commitment  } = solanaCtx;
        const { mint , destination  } = req;
        const sourceAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, walletPublicKey);
        const destinationAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, destination);
        const destinationAtaAccount = await tokenClient.provider.connection.getAccountInfo(destinationAta);
        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Transaction();
        transaction.add(_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.computeBudgetIx);
        if (!destinationAtaAccount) {
            transaction.add((0,_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.createInitAccountInstruction)({
                policy: mintState.policy,
                freezeAuthority: (0,_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.findFreezeAuthorityPk)(mintState.policy),
                mint,
                metadata: await (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.metadataAddress)(mint),
                mintState: (0,_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.findMintStatePk)(mint),
                from: destination,
                fromAccount: destinationAta,
                cmtProgram: _magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.CMT_PROGRAM,
                instructions: _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SYSVAR_INSTRUCTIONS_PUBKEY,
                payer: walletPublicKey,
                associatedTokenProgram: _programs_token__WEBPACK_IMPORTED_MODULE_10__.ASSOCIATED_TOKEN_PROGRAM_ID
            }));
        }
        transaction.add((0,_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.createTransferInstruction)({
            policy: mintState.policy,
            freezeAuthority: (0,_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.findFreezeAuthorityPk)(mintState.policy),
            mint,
            metadata: await (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.metadataAddress)(mint),
            mintState: (0,_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.findMintStatePk)(mint),
            from: walletPublicKey,
            fromAccount: sourceAta,
            cmtProgram: _magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.CMT_PROGRAM,
            instructions: _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SYSVAR_INSTRUCTIONS_PUBKEY,
            to: destination,
            toAccount: destinationAta
        }));
        transaction.feePayer = walletPublicKey;
        transaction.recentBlockhash = (await tokenClient.provider.connection.getLatestBlockhash(commitment)).blockhash;
        const signedTx = await _provider__WEBPACK_IMPORTED_MODULE_12__.SolanaProvider.signTransaction(solanaCtx, transaction);
        const rawTx = signedTx.serialize();
        return await tokenClient.provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: true,
            preflightCommitment: commitment
        });
    }
    static async transferCardinalManagedToken(ctx, req) {
        const { walletPublicKey , tokenClient , commitment  } = ctx;
        const { mint , destination  } = req;
        const sourceAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, walletPublicKey);
        const tx = await (0,_cardinal_token_manager__WEBPACK_IMPORTED_MODULE_1__.withSend)(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Transaction(), tokenClient.provider.connection, (0,_cardinal_token_manager__WEBPACK_IMPORTED_MODULE_1__.emptyWallet)(walletPublicKey), mint, sourceAta, destination);
        tx.feePayer = walletPublicKey;
        tx.recentBlockhash = (await tokenClient.provider.connection.getLatestBlockhash(commitment)).blockhash;
        const signedTx = await _provider__WEBPACK_IMPORTED_MODULE_12__.SolanaProvider.signTransaction(ctx, tx);
        const rawTx = signedTx.serialize();
        return await tokenClient.provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: false,
            preflightCommitment: commitment
        });
    }
    static async transferProgrammableNft(solanaCtx, req) {
        var _a, _b;
        const { walletPublicKey , tokenClient , commitment  } = solanaCtx;
        const { amount , mint , destination: destinationOwner  } = req;
        const source = (_a = req.source) !== null && _a !== void 0 ? _a : (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, walletPublicKey);
        const destinationAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(mint, destinationOwner);
        const ownerTokenRecord = await (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.tokenRecordAddress)(mint, source);
        // we need to check whether the token is lock or listed
        const tokenRecord = await _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.TokenRecord.fromAccountAddress(tokenClient.provider.connection, ownerTokenRecord);
        if (tokenRecord.state == _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.TokenState.Locked) {
            throw new Error("token account is locked");
        } else if (tokenRecord.state == _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.TokenState.Listed) {
            throw new Error("token is listed");
        }
        // we need the metadata object to retrieve the programmable config
        const metadata = await _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.Metadata.fromAccountAddress(tokenClient.provider.connection, await (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.metadataAddress)(mint));
        let authorizationRules;
        if (metadata.programmableConfig) {
            authorizationRules = (_b = metadata.programmableConfig.ruleSet) !== null && _b !== void 0 ? _b : undefined;
        }
        const transferAcccounts = {
            authority: walletPublicKey,
            tokenOwner: walletPublicKey,
            token: source,
            metadata: await (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.metadataAddress)(mint),
            mint,
            edition: await (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.masterEditionAddress)(mint),
            destinationOwner,
            destination: destinationAta,
            payer: walletPublicKey,
            splTokenProgram: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID,
            splAtaProgram: _programs_token__WEBPACK_IMPORTED_MODULE_10__.ASSOCIATED_TOKEN_PROGRAM_ID,
            sysvarInstructions: _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SYSVAR_INSTRUCTIONS_PUBKEY,
            authorizationRules,
            authorizationRulesProgram: _programs_token__WEBPACK_IMPORTED_MODULE_10__.TOKEN_AUTH_RULES_ID,
            ownerTokenRecord,
            destinationTokenRecord: await (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.tokenRecordAddress)(mint, destinationAta)
        };
        const transferArgs = {
            transferArgs: {
                __kind: "V1",
                amount,
                authorizationData: null
            }
        };
        const transferIx = (0,_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.createTransferInstruction)(transferAcccounts, transferArgs);
        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Transaction();
        transaction.add(_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.computeBudgetIx, transferIx);
        transaction.feePayer = walletPublicKey;
        transaction.recentBlockhash = (await tokenClient.provider.connection.getLatestBlockhash(commitment)).blockhash;
        const signedTx = await _provider__WEBPACK_IMPORTED_MODULE_12__.SolanaProvider.signTransaction(solanaCtx, transaction);
        const rawTx = signedTx.serialize();
        return await tokenClient.provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: true,
            preflightCommitment: commitment
        });
    }
    static async transferSol(ctx, req) {
        const { walletPublicKey , tokenClient , commitment  } = ctx;
        const tx = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Transaction();
        tx.add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SystemProgram.transfer({
            fromPubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(req.source),
            toPubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(req.destination),
            lamports: req.amount
        }));
        tx.feePayer = walletPublicKey;
        tx.recentBlockhash = (await tokenClient.provider.connection.getLatestBlockhash(commitment)).blockhash;
        const signedTx = await _provider__WEBPACK_IMPORTED_MODULE_12__.SolanaProvider.signTransaction(ctx, tx);
        const rawTx = signedTx.serialize();
        return await ctx.tokenClient.provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: false,
            preflightCommitment: ctx.commitment
        });
    }
    static async wrapSol(ctx, req) {
        const { destination , amount  } = req;
        const rawTx = await generateWrapSolTx(ctx, destination, amount);
        return await ctx.tokenClient.provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: false,
            preflightCommitment: ctx.commitment
        });
    }
    static async unwrapSol(ctx, req) {
        const { destination , amount  } = req;
        const rawTx = await generateUnwrapSolTx(ctx, destination, amount);
        return await ctx.tokenClient.provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: false,
            preflightCommitment: ctx.commitment
        });
    }
    static async uninstallXnft(ctx, req) {
        const client = (0,_programs_xnft__WEBPACK_IMPORTED_MODULE_11__.xnftClient)(ctx.tokenClient.provider);
        const { install  } = req;
        const receiver = ctx.walletPublicKey;
        const authority = ctx.walletPublicKey;
        const tx = await client.methods.deleteInstall().accounts({
            install,
            receiver,
            authority
        }).transaction();
        tx.feePayer = ctx.walletPublicKey;
        tx.recentBlockhash = (await ctx.connection.getLatestBlockhash(ctx.commitment)).blockhash;
        const signedTx = await _provider__WEBPACK_IMPORTED_MODULE_12__.SolanaProvider.signTransaction(ctx, tx);
        const rawTx = signedTx.serialize();
        return await ctx.tokenClient.provider.connection.sendRawTransaction(rawTx, {
            skipPreflight: false,
            preflightCommitment: ctx.commitment
        });
    }
}
//
// Helper method that will generate a transaction to wrap SOL, creating the
// associated token account if necessary.
//
const generateWrapSolTx = async (ctx, destination, lamports)=>{
    const { walletPublicKey , tokenClient , commitment  } = ctx;
    const destinationAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.NATIVE_MINT, destination);
    const [destinationAccount, destinationAtaAccount] = await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.utils.rpc.getMultipleAccounts(tokenClient.provider.connection, [
        destination,
        destinationAta
    ], commitment);
    //
    // Require the account to either be a system program account or a brand new
    // account.
    //
    if (destinationAccount && !destinationAccount.account.owner.equals(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SystemProgram.programId)) {
        throw new Error("invalid account");
    }
    const tx = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Transaction();
    if (!destinationAtaAccount) {
        tx.instructions.push((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.createAssociatedTokenAccountInstruction)(walletPublicKey, destinationAta, destination, _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.NATIVE_MINT));
    }
    tx.instructions.push(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SystemProgram.transfer({
        fromPubkey: walletPublicKey,
        toPubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(destinationAta),
        lamports
    }));
    tx.instructions.push((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.createSyncNativeInstruction)(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(destinationAta)));
    tx.feePayer = walletPublicKey;
    tx.recentBlockhash = (await tokenClient.provider.connection.getLatestBlockhash(commitment)).blockhash;
    return tx.serialize({
        requireAllSignatures: false
    });
};
//
// Helper method to generate a transaction that will unwrap the given amount
// of wSOL by creating a new account and transferring wSOL into it, then
// closing the account.
//
const generateUnwrapSolTx = async (ctx, destination, lamports)=>{
    const { walletPublicKey , tokenClient , commitment  } = ctx;
    // Unwrapping partial SOL amounts appears to not be possible in token program.
    // This unwrap works by closing the account, and then creating a new wSOL account
    // and transferring the difference between the previous amount and the requested
    // amount into the newly created account.
    const destinationAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.NATIVE_MINT, destination);
    const sourceAta = (0,_programs_token__WEBPACK_IMPORTED_MODULE_10__.associatedTokenAddress)(_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.NATIVE_MINT, walletPublicKey);
    const [destinationAccount, destinationAtaAccount] = await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.utils.rpc.getMultipleAccounts(tokenClient.provider.connection, [
        destination,
        destinationAta
    ], commitment);
    if (!destinationAtaAccount) {
        throw new Error("expected wSOL account to exist");
    }
    //
    // Require the account to either be a system program account or a brand new
    // account.
    //
    if (destinationAccount && !destinationAccount.account.owner.equals(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SystemProgram.programId)) {
        throw new Error("invalid account");
    }
    const tx = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Transaction();
    tx.feePayer = walletPublicKey;
    tx.recentBlockhash = (await tokenClient.provider.connection.getLatestBlockhash(commitment)).blockhash;
    // recreate the account with the new balance
    if (destinationAtaAccount.account.lamports === lamports) {
        tx.instructions.push((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.createCloseAccountInstruction)(destinationAta, destination, destination));
    } else {
        const newAccount = _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Keypair.generate();
        // Create a new account to transfer wSOL into and then close
        tx.instructions.push(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.SystemProgram.createAccount({
            fromPubkey: walletPublicKey,
            newAccountPubkey: newAccount.publicKey,
            lamports: _constants__WEBPACK_IMPORTED_MODULE_8__.TOKEN_ACCOUNT_RENT_EXEMPTION_LAMPORTS,
            space: 165,
            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID
        }));
        // Init the new account with native mint
        tx.instructions.push((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.createInitializeAccountInstruction)(newAccount.publicKey, _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.NATIVE_MINT, destination));
        // Transfer unwrap amount into the new account
        tx.instructions.push((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.createTransferInstruction)(sourceAta, newAccount.publicKey, walletPublicKey, lamports));
        // Close the new account
        tx.instructions.push((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.createCloseAccountInstruction)(newAccount.publicKey, destination, destination));
        tx.partialSign(newAccount);
    }
    return tx.serialize({
        requireAllSignatures: false
    });
}; //# sourceMappingURL=index.js.map


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

/***/ "../common/dist/esm/solana/programs/assert-owner.js":
/*!**********************************************************!*\
  !*** ../common/dist/esm/solana/programs/assert-owner.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertOwnerInstruction": () => (/* binding */ assertOwnerInstruction)
/* harmony export */ });
/* harmony import */ var _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/buffer-layout */ "../../node_modules/@solana/buffer-layout/lib/Layout.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



function assertOwnerInstruction({ account , owner  }) {
    const keys = [
        {
            pubkey: account,
            isSigner: false,
            isWritable: false
        }
    ];
    return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.TransactionInstruction({
        keys,
        data: encodeOwnerValidationInstruction({
            account: owner
        }),
        programId: OWNER_VALIDATION_PROGRAM_ID
    });
}
function encodeOwnerValidationInstruction(instruction) {
    const b = Buffer.alloc(OWNER_VALIDATION_LAYOUT.span);
    const span = OWNER_VALIDATION_LAYOUT.encode(instruction, b);
    return b.slice(0, span);
}
function publicKeyLayout(property) {
    return new PublicKeyLayout(property);
}
class PublicKeyLayout extends _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_0__.Blob {
    constructor(property){
        super(32, property);
    }
    // @ts-ignore
    decode(b, offset) {
        return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(super.decode(b, offset));
    }
    // @ts-ignore
    encode(src, b, offset) {
        return super.encode(src.toBuffer(), b, offset);
    }
}
const OWNER_VALIDATION_PROGRAM_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("4MNPdKu9wFMvEeZBMt3Eipfs5ovVWTJb31pEXDJAAxX5");
const OWNER_VALIDATION_LAYOUT = (0,_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_0__.struct)([
    // @ts-ignore
    publicKeyLayout("account")
]); //# sourceMappingURL=assert-owner.js.map


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

/***/ "../common/dist/esm/solana/programs/index.js":
/*!***************************************************!*\
  !*** ../common/dist/esm/solana/programs/index.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASSOCIATED_TOKEN_PROGRAM_ID": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.ASSOCIATED_TOKEN_PROGRAM_ID),
/* harmony export */   "BAKED_IN_XNFTS": () => (/* reexport safe */ _xnft__WEBPACK_IMPORTED_MODULE_2__.BAKED_IN_XNFTS),
/* harmony export */   "IDL": () => (/* reexport safe */ _xnft__WEBPACK_IMPORTED_MODULE_2__.IDL),
/* harmony export */   "SOL_NATIVE_MINT": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.SOL_NATIVE_MINT),
/* harmony export */   "TOKEN_AUTH_RULES_ID": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_AUTH_RULES_ID),
/* harmony export */   "TOKEN_METADATA_PROGRAM_ID": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_METADATA_PROGRAM_ID),
/* harmony export */   "TOKEN_PROGRAM_ID": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID),
/* harmony export */   "USDC_MINT": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.USDC_MINT),
/* harmony export */   "WSOL_MINT": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.WSOL_MINT),
/* harmony export */   "XNFT_PROGRAM_ID": () => (/* reexport safe */ _xnft__WEBPACK_IMPORTED_MODULE_2__.XNFT_PROGRAM_ID),
/* harmony export */   "assertOwnerInstruction": () => (/* reexport safe */ _assert_owner__WEBPACK_IMPORTED_MODULE_0__.assertOwnerInstruction),
/* harmony export */   "associatedTokenAddress": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.associatedTokenAddress),
/* harmony export */   "customSplTokenAccounts": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.customSplTokenAccounts),
/* harmony export */   "fetchMints": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.fetchMints),
/* harmony export */   "fetchSplMetadata": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.fetchSplMetadata),
/* harmony export */   "fetchSplMetadataUri": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.fetchSplMetadataUri),
/* harmony export */   "fetchTokens": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.fetchTokens),
/* harmony export */   "fetchXnft": () => (/* reexport safe */ _xnft__WEBPACK_IMPORTED_MODULE_2__.fetchXnft),
/* harmony export */   "fetchXnfts": () => (/* reexport safe */ _xnft__WEBPACK_IMPORTED_MODULE_2__.fetchXnfts),
/* harmony export */   "fetchXnftsFromPubkey": () => (/* reexport safe */ _xnft__WEBPACK_IMPORTED_MODULE_2__.fetchXnftsFromPubkey),
/* harmony export */   "masterEditionAddress": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.masterEditionAddress),
/* harmony export */   "metadataAddress": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.metadataAddress),
/* harmony export */   "tokenRecordAddress": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.tokenRecordAddress),
/* harmony export */   "xnftClient": () => (/* reexport safe */ _xnft__WEBPACK_IMPORTED_MODULE_2__.xnftClient)
/* harmony export */ });
/* harmony import */ var _assert_owner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert-owner */ "../common/dist/esm/solana/programs/assert-owner.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ "../common/dist/esm/solana/programs/token.js");
/* harmony import */ var _xnft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xnft */ "../common/dist/esm/solana/programs/xnft.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



 //# sourceMappingURL=index.js.map


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

/***/ "../common/dist/esm/solana/programs/token.js":
/*!***************************************************!*\
  !*** ../common/dist/esm/solana/programs/token.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASSOCIATED_TOKEN_PROGRAM_ID": () => (/* binding */ ASSOCIATED_TOKEN_PROGRAM_ID),
/* harmony export */   "SOL_NATIVE_MINT": () => (/* binding */ SOL_NATIVE_MINT),
/* harmony export */   "TOKEN_AUTH_RULES_ID": () => (/* binding */ TOKEN_AUTH_RULES_ID),
/* harmony export */   "TOKEN_METADATA_PROGRAM_ID": () => (/* binding */ TOKEN_METADATA_PROGRAM_ID),
/* harmony export */   "TOKEN_PROGRAM_ID": () => (/* binding */ TOKEN_PROGRAM_ID),
/* harmony export */   "USDC_MINT": () => (/* binding */ USDC_MINT),
/* harmony export */   "WSOL_MINT": () => (/* binding */ WSOL_MINT),
/* harmony export */   "associatedTokenAddress": () => (/* binding */ associatedTokenAddress),
/* harmony export */   "customSplTokenAccounts": () => (/* binding */ customSplTokenAccounts),
/* harmony export */   "fetchMints": () => (/* binding */ fetchMints),
/* harmony export */   "fetchSplMetadata": () => (/* binding */ fetchSplMetadata),
/* harmony export */   "fetchSplMetadataUri": () => (/* binding */ fetchSplMetadataUri),
/* harmony export */   "fetchTokens": () => (/* binding */ fetchTokens),
/* harmony export */   "masterEditionAddress": () => (/* binding */ masterEditionAddress),
/* harmony export */   "metadataAddress": () => (/* binding */ metadataAddress),
/* harmony export */   "tokenRecordAddress": () => (/* binding */ tokenRecordAddress)
/* harmony export */ });
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @metaplex-foundation/mpl-token-metadata */ "../../node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/mpl-token-metadata.js");
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @project-serum/anchor */ "../../node_modules/@project-serum/anchor/dist/browser/index.js");
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/spl-token */ "../common/node_modules/@solana/spl-token/lib/esm/index.mjs");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logging */ "../common/dist/esm/logging.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "../common/dist/esm/utils.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");








const TOKEN_PROGRAM_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
const ASSOCIATED_TOKEN_PROGRAM_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const TOKEN_METADATA_PROGRAM_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
const TOKEN_AUTH_RULES_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey("auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg");
const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const WSOL_MINT = "So11111111111111111111111111111111111111112";
//
// App's dummy representation of native sol as an SPL token. This is *not*
// wrapped SOL. We treat native sol in the same way as we do SPL tokens.
//
const SOL_NATIVE_MINT = _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey["default"].toString();
const logger = (0,_logging__WEBPACK_IMPORTED_MODULE_4__.getLogger)("common/solana/programs/token");
function associatedTokenAddress(mint, wallet) {
    return _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.utils.publicKey.findProgramAddressSync([
        wallet.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        mint.toBuffer()
    ], ASSOCIATED_TOKEN_PROGRAM_ID)[0];
}
async function customSplTokenAccounts(connection, publicKey) {
    // @ts-ignore
    const provider = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.AnchorProvider(connection, {
        publicKey
    });
    const tokenClient = _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.Spl.token(provider);
    //
    // Fetch all tokenAccounts.
    //
    const [accountInfo, tokenAccounts] = await Promise.all([
        //
        // Fetch native sol data.
        //
        provider.connection.getAccountInfo(publicKey),
        //
        // Fetch tokens.
        //
        fetchTokens(publicKey, tokenClient)
    ]);
    const tokenAccountsArray = Array.from(tokenAccounts.values());
    //
    // Fetch all mints.
    //
    const [mintsMap, tokenMetadata] = await Promise.all([
        fetchMints(provider, tokenAccountsArray).then((mint)=>mint.filter((m)=>m[1] !== null)),
        fetchSplMetadata(tokenClient.provider, tokenAccountsArray)
    ]);
    //
    // Separate out fungible and non-fungible tokens.
    //
    const { fungibleTokens , fungibleTokenMetadata , nftTokens , nftTokenMetadata  } = splitOutNfts(tokenAccountsArray, tokenMetadata, new Map(mintsMap));
    //
    // Add native SOL to the token and metadata list.
    //
    const nativeSol = {
        key: publicKey,
        mint: _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey["default"],
        authority: publicKey,
        amount: accountInfo ? new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.BN(accountInfo.lamports) : new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.BN(0),
        delegate: null,
        state: 1,
        isNative: null,
        delegatedAmount: new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.BN(0),
        closeAuthority: null
    };
    const nativeSolMetadata = null;
    return {
        mintsMap,
        nfts: {
            nftTokens,
            nftTokenMetadata
        },
        fts: {
            fungibleTokens: fungibleTokens.concat([
                nativeSol
            ]),
            fungibleTokenMetadata: fungibleTokenMetadata.concat([
                nativeSolMetadata
            ])
        }
    };
}
async function fetchMints(provider, tokenAccounts) {
    const mints = (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.utils.rpc.getMultipleAccounts(provider.connection, tokenAccounts.map((t)=>t.mint))).map((m, idx)=>{
        return [
            tokenAccounts[idx].mint.toString(),
            m ? _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.MintLayout.decode(m.account.data) : null
        ];
    });
    return mints;
}
async function fetchSplMetadata(provider, tokens) {
    //
    // Fetch metadata for each token.
    //
    const metaAddrs = await Promise.all(tokens.map(async (t)=>{
        return {
            token: t,
            publicKey: t.key,
            metadataAddress: await metadataAddress(t.mint)
        };
    }));
    const tokenMetaAccounts = (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.utils.rpc.getMultipleAccounts(provider.connection, metaAddrs.map((t)=>t.metadataAddress))).map((t)=>t ? {
            publicKey: t.publicKey,
            account: _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata.deserialize(t.account.data)[0]
        } : null);
    return tokenMetaAccounts;
}
/**
 * Splits out all the tokens into fungible and non fungible tokens.
 */ function splitOutNfts(tokens, tokensMetadata, mintsMap) {
    let nftTokens = [];
    let nftTokenMetadata = [];
    let fungibleTokens = [];
    let fungibleTokenMetadata = [];
    tokens.forEach((token, idx)=>{
        const tokenMetadata = tokensMetadata[idx];
        //
        // If token standard is available use it.
        //
        if (tokenMetadata && tokenMetadata.account && !!tokenMetadata.account.tokenStandard) {
            if (tokenMetadata.account.tokenStandard === _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_0__.TokenStandard.Fungible) {
                fungibleTokens.push(token);
                fungibleTokenMetadata.push(tokenMetadata);
            } else {
                nftTokens.push(token);
                nftTokenMetadata.push(tokenMetadata);
            }
        } else {
            const mint = mintsMap.get(token.mint.toString());
            if (mint && mint.decimals === 0) {
                nftTokens.push(token);
                nftTokenMetadata.push(tokenMetadata);
            } else {
                fungibleTokens.push(token);
                fungibleTokenMetadata.push(tokenMetadata);
            }
        }
    });
    return {
        nftTokens,
        nftTokenMetadata,
        fungibleTokens,
        fungibleTokenMetadata
    };
}
async function fetchSplMetadataUri(tokens, tokenMetadata) {
    // Fetch the URI for each token.
    const tokenMetaUriData = await Promise.all(tokenMetadata.map(async (t)=>{
        if (t === null || !t.account.data.uri) {
            return null;
        }
        try {
            const resp = await new Promise(async (resolve, reject)=>{
                setTimeout(()=>{
                    reject(new Error("timeout"));
                }, 6000);
                const uri = t.account.data.uri;
                try {
                    const resp = await fetch(`${(0,_utils__WEBPACK_IMPORTED_MODULE_5__.externalResourceUri)(uri, {
                        cached: true
                    })}`);
                    resolve(await resp.json());
                } catch (err) {
                    try {
                        const resp = await fetch((0,_utils__WEBPACK_IMPORTED_MODULE_5__.externalResourceUri)(uri));
                        resolve(await resp.json());
                    } catch (e) {
                        reject(err);
                    }
                }
            });
            return resp;
        } catch (err) {
            logger.debug(`error fetching token metadata: ${t.account.data.uri}`, err);
        }
    }));
    //
    // Zip it all together.
    //
    const splMetadata = tokens.reduce((acc, m, idx)=>{
        const metadata = tokenMetadata[idx];
        if (!metadata || !tokenMetaUriData[idx]) {
            return acc;
        }
        acc.push([
            m.key.toString(),
            {
                publicKey: m.key,
                metadataAddress: metadata.publicKey,
                metadata: metadata.account,
                tokenMetaUriData: tokenMetaUriData[idx]
            }
        ]);
        return acc;
    }, []);
    return splMetadata;
}
async function metadataAddress(mint) {
    return (await _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer()
    ], TOKEN_METADATA_PROGRAM_ID))[0];
}
async function masterEditionAddress(mint) {
    return (await _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from("edition")
    ], TOKEN_METADATA_PROGRAM_ID))[0];
}
async function tokenRecordAddress(mint, token) {
    return (await _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from("token_record"),
        token.toBuffer()
    ], TOKEN_METADATA_PROGRAM_ID))[0];
}
async function fetchTokens(walletPublicKey, tokenClient) {
    //
    // Fetch the accounts.
    //
    const resp = await tokenClient.provider.connection.getTokenAccountsByOwner(walletPublicKey, {
        programId: tokenClient.programId
    });
    //
    // Decode the data.
    //
    const tokens = resp.value.map(({ account , pubkey  })=>[
            pubkey.toString(),
            {
                ...tokenClient.coder.accounts.decode("token", account.data),
                key: pubkey
            }
        ]);
    //
    // Filter out any invalid tokens.
    //
    const validTokens = tokens.filter(([, t])=>t.amount.gt(new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.BN(0)));
    //
    // Done.
    //
    return new Map(validTokens);
} //# sourceMappingURL=token.js.map


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

/***/ "../common/dist/esm/solana/programs/xnft.js":
/*!**************************************************!*\
  !*** ../common/dist/esm/solana/programs/xnft.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BAKED_IN_XNFTS": () => (/* binding */ BAKED_IN_XNFTS),
/* harmony export */   "IDL": () => (/* binding */ IDL),
/* harmony export */   "XNFT_PROGRAM_ID": () => (/* binding */ XNFT_PROGRAM_ID),
/* harmony export */   "fetchXnft": () => (/* binding */ fetchXnft),
/* harmony export */   "fetchXnfts": () => (/* binding */ fetchXnfts),
/* harmony export */   "fetchXnftsFromPubkey": () => (/* binding */ fetchXnftsFromPubkey),
/* harmony export */   "xnftClient": () => (/* binding */ xnftClient)
/* harmony export */ });
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @project-serum/anchor */ "../../node_modules/@project-serum/anchor/dist/browser/index.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "../common/dist/esm/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");





const XNFT_PROGRAM_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("xnft5aaToUM4UFETUQfj7NUDUBdvYHTVhNFThEYTm55");
const BAKED_IN_XNFTS = {
    one: {
        publicKey: "CkqWjTWzRMAtYN3CSs8Gp4K9H891htmaN1ysNXqcULc8",
        account: {
            authority: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey["default"],
            xnft: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("CkqWjTWzRMAtYN3CSs8Gp4K9H891htmaN1ysNXqcULc8"),
            masterMetadata: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("ANRn3ypikUTDEsY6ShgeHskX8bmZGpbmXEDACGt8hQAR"),
            edition: new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.BN("00"),
            reserved: Array(64).fill(0)
        }
    },
    explorer: {
        publicKey: "oRN37pXigdDzpSPTe9ma5UWz9pZ4srKgS8To3juBNRi",
        account: {
            authority: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey["default"],
            xnft: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("oRN37pXigdDzpSPTe9ma5UWz9pZ4srKgS8To3juBNRi"),
            masterMetadata: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("6VJYeRDbQBUG87UisCtq5yrxwWVP5mfpv4GC4q1afJuG"),
            edition: new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.BN("00"),
            reserved: Array(64).fill(0)
        }
    },
    prices: {
        publicKey: "4GWq6KwrSmi3boGVayz4LM2Mz12GHQ3bpB1W2i7F5GRR",
        account: {
            authority: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey["default"],
            xnft: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("4GWq6KwrSmi3boGVayz4LM2Mz12GHQ3bpB1W2i7F5GRR"),
            masterMetadata: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("9tHKPiFsXy4kpXL4es9PUJ5w9bnzu8rHPdMNF5WyfJSD"),
            edition: new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.BN("00"),
            reserved: Array(64).fill(0)
        }
    },
    mnemonics: {
        publicKey: "GUt1LFqrs5Wbp6b6jLK1rXUvQKEavmAvM2UjAYWwJsNh",
        account: {
            authority: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey["default"],
            xnft: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("GUt1LFqrs5Wbp6b6jLK1rXUvQKEavmAvM2UjAYWwJsNh"),
            masterMetadata: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("4WatrHZmabx9jEEL18SEQEWAtbHCktEHBaLSWiZ2kDeK"),
            edition: new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.BN("00"),
            reserved: Array(64).fill(0)
        }
    }
};
async function fetchXnfts(provider, wallet, isDropzoneWallet) {
    const client = xnftClient(provider);
    // Fetch all xnfts installed by this user.
    const xnftInstalls = await client.account.install.all([
        {
            memcmp: {
                offset: 8,
                bytes: wallet.toString()
            }
        }
    ]);
    // Hack to get baked in xNFTs for all instances by mocking installations
    // @ts-ignore
    xnftInstalls.push(...Object.values(BAKED_IN_XNFTS));
    if (isDropzoneWallet) {
        // HACK to get Dropzone xNFT installed for everyone
        xnftInstalls.push({
            // @ts-ignore
            publicKey: "CVkbt7dscJdjAJFF2uKrtin6ve9M8DA4gsUccAjePUHH",
            // @ts-ignore
            account: {
                authority: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey["default"],
                xnft: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("CVkbt7dscJdjAJFF2uKrtin6ve9M8DA4gsUccAjePUHH"),
                masterMetadata: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("3ir4m8m51eWdLTx5e1XSkiwzu6TF24DYEi5ar5XnYK9u"),
                edition: new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.BN("00"),
                reserved: Array(64).fill(0)
            }
        });
    }
    if (xnftInstalls.length === 0) {
        return [];
    }
    //
    // Get the metadata accounts for all xnfts.
    //
    const xnftMetadata = await Promise.all(xnftInstalls.map(({ account  })=>fetchXnft(account.xnft)));
    return xnftMetadata === null || xnftMetadata === void 0 ? void 0 : xnftMetadata.map((metadata, idx)=>({
            ...metadata,
            install: xnftInstalls[idx]
        }));
}
async function fetchXnftsFromPubkey(xnfts) {
    const accounts = await Promise.all(xnfts.map(async (xnft)=>({
            xnftId: xnft,
            metadata: await fetchXnft(xnft)
        })));
    return accounts.map(({ xnftId , metadata  })=>{
        var _a, _b;
        return {
            xnftId,
            image: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.externalResourceUri)((_a = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _a === void 0 ? void 0 : _a.image),
            title: (_b = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _b === void 0 ? void 0 : _b.name
        };
    });
}
async function fetchXnft(xnft) {
    const xnftMetadata = await fetch(`https://swr.xnfts.dev/nft-data/xnft/${new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(xnft).toBase58()}`).then((r)=>r.json()).catch((e)=>{
        console.error(e);
        return null;
    });
    if (!xnftMetadata) {
        return null;
    }
    return {
        metadataPublicKey: xnftMetadata.masterMetadata,
        metadataAccount: xnftMetadata.metadataAccount,
        metadata: xnftMetadata.metadata,
        xnftAccount: xnftMetadata.xnftAccount,
        xnft: xnftMetadata.xnft
    };
}
function xnftClient(provider) {
    return new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Program(IDL, XNFT_PROGRAM_ID, provider);
}
const IDL = {
    version: "0.2.0",
    name: "xnft",
    constants: [
        {
            name: "MAX_RATING",
            type: "u8",
            value: "5"
        }
    ],
    instructions: [
        {
            name: "createAppXnft",
            docs: [
                "Creates all parts of an xNFT instance.",
                'Once this is invoked, an xNFT exists and can be "installed" by users.'
            ],
            accounts: [
                {
                    name: "masterMint",
                    isMut: true,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "mint"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                path: "publisher"
                            },
                            {
                                kind: "arg",
                                type: "string",
                                path: "name"
                            }
                        ]
                    }
                },
                {
                    name: "masterToken",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "masterMetadata",
                    isMut: true,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "metadata"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                path: "metadata_program"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                account: "Mint",
                                path: "master_mint"
                            }
                        ],
                        programId: {
                            kind: "account",
                            type: "publicKey",
                            path: "metadata_program"
                        }
                    }
                },
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "xnft"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                account: "Mint",
                                path: "master_mint"
                            }
                        ]
                    }
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true
                },
                {
                    name: "publisher",
                    isMut: false,
                    isSigner: true
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "associatedTokenProgram",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "metadataProgram",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "rent",
                    isMut: false,
                    isSigner: false
                }
            ],
            args: [
                {
                    name: "name",
                    type: "string"
                },
                {
                    name: "params",
                    type: {
                        defined: "CreateXnftParams"
                    }
                }
            ]
        },
        {
            name: "createCollectibleXnft",
            docs: [
                "Creates an xNFT instance on top of an existing digital collectible that is MPL compliant."
            ],
            accounts: [
                {
                    name: "masterMint",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "masterToken",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "masterMetadata",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "xnft"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                account: "Mint",
                                path: "master_mint"
                            }
                        ]
                    }
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true
                },
                {
                    name: "publisher",
                    isMut: false,
                    isSigner: true
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false
                }
            ],
            args: [
                {
                    name: "params",
                    type: {
                        defined: "CreateXnftParams"
                    }
                }
            ]
        },
        {
            name: "createInstall",
            docs: [
                'Creates an "installation" of an xNFT.',
                "Installation is just a synonym for minting an xNFT edition for a given",
                "user."
            ],
            accounts: [
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false,
                    relations: [
                        "install_vault"
                    ]
                },
                {
                    name: "installVault",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "install",
                    isMut: true,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "install"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                path: "target"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                account: "Xnft",
                                path: "xnft"
                            }
                        ]
                    }
                },
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true
                },
                {
                    name: "target",
                    isMut: false,
                    isSigner: true
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false
                }
            ],
            args: []
        },
        {
            name: "createPermissionedInstall",
            docs: [
                'Creates an "installation" of a private xNFT through prior access approval',
                "granted by the xNFT's installation authority."
            ],
            accounts: [
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false,
                    relations: [
                        "install_vault"
                    ]
                },
                {
                    name: "installVault",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "install",
                    isMut: true,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "install"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                path: "authority"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                account: "Xnft",
                                path: "xnft"
                            }
                        ]
                    }
                },
                {
                    name: "access",
                    isMut: false,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "access"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                path: "authority"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                account: "Xnft",
                                path: "xnft"
                            }
                        ]
                    },
                    relations: [
                        "xnft"
                    ]
                },
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false
                }
            ],
            args: []
        },
        {
            name: "createReview",
            docs: [
                'Creates a "review" of an xNFT containing a URI to a comment and a 0-5 rating.'
            ],
            accounts: [
                {
                    name: "install",
                    isMut: false,
                    isSigner: false,
                    relations: [
                        "xnft"
                    ]
                },
                {
                    name: "masterToken",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "review",
                    isMut: true,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "review"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                account: "Xnft",
                                path: "xnft"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                path: "author"
                            }
                        ]
                    }
                },
                {
                    name: "author",
                    isMut: true,
                    isSigner: true
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false
                }
            ],
            args: [
                {
                    name: "uri",
                    type: "string"
                },
                {
                    name: "rating",
                    type: "u8"
                }
            ]
        },
        {
            name: "deleteInstall",
            docs: [
                "Closes the install account."
            ],
            accounts: [
                {
                    name: "install",
                    isMut: true,
                    isSigner: false,
                    relations: [
                        "authority"
                    ]
                },
                {
                    name: "receiver",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "authority",
                    isMut: false,
                    isSigner: true
                }
            ],
            args: []
        },
        {
            name: "deleteReview",
            docs: [
                "Closes the review account and removes metrics from xNFT account."
            ],
            accounts: [
                {
                    name: "review",
                    isMut: true,
                    isSigner: false,
                    relations: [
                        "author",
                        "xnft"
                    ]
                },
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "receiver",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "author",
                    isMut: false,
                    isSigner: true
                }
            ],
            args: []
        },
        {
            name: "grantAccess",
            docs: [
                "Creates an access program account that indicates a wallet's",
                "access permission to install a private xNFT."
            ],
            accounts: [
                {
                    name: "xnft",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "wallet",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "access",
                    isMut: true,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "access"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                path: "wallet"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                account: "Xnft",
                                path: "xnft"
                            }
                        ]
                    }
                },
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false
                }
            ],
            args: []
        },
        {
            name: "revokeAccess",
            docs: [
                "Closes the access program account for a given wallet on a private xNFT,",
                "effectively revoking their permission to create installations of the xNFT."
            ],
            accounts: [
                {
                    name: "xnft",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "wallet",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "access",
                    isMut: true,
                    isSigner: false,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                type: "string",
                                value: "access"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                path: "wallet"
                            },
                            {
                                kind: "account",
                                type: "publicKey",
                                account: "Xnft",
                                path: "xnft"
                            }
                        ]
                    },
                    relations: [
                        "wallet",
                        "xnft"
                    ]
                },
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true
                }
            ],
            args: []
        },
        {
            name: "setCurator",
            docs: [
                "Assigns a curator public key to the provided xNFT."
            ],
            accounts: [
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "masterToken",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "curator",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "authority",
                    isMut: false,
                    isSigner: true
                }
            ],
            args: []
        },
        {
            name: "setSuspended",
            docs: [
                "Sets the install suspension flag on the xnft."
            ],
            accounts: [
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "masterToken",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "authority",
                    isMut: false,
                    isSigner: true
                }
            ],
            args: [
                {
                    name: "flag",
                    type: "bool"
                }
            ]
        },
        {
            name: "transfer",
            docs: [
                "Transfer the xNFT to the provided designation wallet."
            ],
            accounts: [
                {
                    name: "xnft",
                    isMut: false,
                    isSigner: false,
                    relations: [
                        "master_mint"
                    ]
                },
                {
                    name: "source",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "destination",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "masterMint",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "recipient",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "associatedTokenProgram",
                    isMut: false,
                    isSigner: false
                }
            ],
            args: []
        },
        {
            name: "updateXnft",
            docs: [
                "Updates the code of an xNFT.",
                "This is simply a token metadata update cpi."
            ],
            accounts: [
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false,
                    relations: [
                        "master_metadata"
                    ]
                },
                {
                    name: "masterToken",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "masterMetadata",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "curationAuthority",
                    isMut: false,
                    isSigner: false
                },
                {
                    name: "updater",
                    isMut: false,
                    isSigner: true
                },
                {
                    name: "metadataProgram",
                    isMut: false,
                    isSigner: false
                }
            ],
            args: [
                {
                    name: "updates",
                    type: {
                        defined: "UpdateParams"
                    }
                }
            ]
        },
        {
            name: "verifyCurator",
            docs: [
                "Verifies the assignment of a curator to an xNFT, signed by the curator authority."
            ],
            accounts: [
                {
                    name: "xnft",
                    isMut: true,
                    isSigner: false
                },
                {
                    name: "curator",
                    isMut: false,
                    isSigner: true
                }
            ],
            args: []
        }
    ],
    accounts: [
        {
            name: "access",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "wallet",
                        docs: [
                            "The pubkey of the wallet being granted access (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "xnft",
                        docs: [
                            "The pubkey of the xNFT account that is access gated (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "bump",
                        docs: [
                            "Bump nonce of the PDA (1)."
                        ],
                        type: "u8"
                    },
                    {
                        name: "reserved",
                        docs: [
                            "Unused reserved byte space for additive future changes."
                        ],
                        type: {
                            array: [
                                "u8",
                                32
                            ]
                        }
                    }
                ]
            }
        },
        {
            name: "install",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "authority",
                        docs: [
                            "The authority who created the installation (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "xnft",
                        docs: [
                            "The pubkey of the xNFT that was installed (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "masterMetadata",
                        docs: [
                            "The pubkey of the MPL master metadata account (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "edition",
                        docs: [
                            "The sequential installation number of the xNFT (8)."
                        ],
                        type: "u64"
                    },
                    {
                        name: "reserved",
                        docs: [
                            "Unused reserved byte space for additive future changes."
                        ],
                        type: {
                            array: [
                                "u8",
                                64
                            ]
                        }
                    }
                ]
            }
        },
        {
            name: "review",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "author",
                        docs: [
                            "The pubkey of the account that created the review (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "xnft",
                        docs: [
                            "The pubkey of the associated xNFT (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "rating",
                        docs: [
                            "The numerical rating for the review, 0-5 (1)."
                        ],
                        type: "u8"
                    },
                    {
                        name: "uri",
                        docs: [
                            "The URI of the off-chain JSON data that holds the comment (4 + len)."
                        ],
                        type: "string"
                    },
                    {
                        name: "reserved",
                        docs: [
                            "Unused reserved byte space for future additive changes."
                        ],
                        type: {
                            array: [
                                "u8",
                                32
                            ]
                        }
                    }
                ]
            }
        },
        {
            name: "xnft",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "publisher",
                        docs: [
                            "The pubkey of the original xNFT creator (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "installVault",
                        docs: [
                            "The pubkey of the account to receive install payments (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "masterMetadata",
                        docs: [
                            "The pubkey of the MPL master metadata account (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "masterMint",
                        docs: [
                            "The pubkey of the master token mint (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "installAuthority",
                        docs: [
                            "The optional pubkey of the xNFT installation authority (33)."
                        ],
                        type: {
                            option: "publicKey"
                        }
                    },
                    {
                        name: "curator",
                        docs: [
                            "Optional pubkey of the global authority required for reviewing xNFT updates (34)."
                        ],
                        type: {
                            option: {
                                defined: "CuratorStatus"
                            }
                        }
                    },
                    {
                        name: "uri",
                        docs: [
                            "The URI of the custom metadata blob for the xNFT (4 + mpl_token_metadata::state::MAX_URI_LENGTH)."
                        ],
                        type: "string"
                    },
                    {
                        name: "mintSeedName",
                        docs: [
                            "The original name used to seed the master mint if it was a standalone (1 + 4 + mpl_token_metadata::state::MAX_NAME_LENGTH)."
                        ],
                        type: {
                            option: "string"
                        }
                    },
                    {
                        name: "kind",
                        docs: [
                            "The `Kind` enum variant describing the type of xNFT (1)."
                        ],
                        type: {
                            defined: "Kind"
                        }
                    },
                    {
                        name: "tag",
                        docs: [
                            "The `Tag` enum variant to assign the category of xNFT (1)."
                        ],
                        type: {
                            defined: "Tag"
                        }
                    },
                    {
                        name: "supply",
                        docs: [
                            "The optional finite supply of installations available for this xNFT (9)."
                        ],
                        type: {
                            option: "u64"
                        }
                    },
                    {
                        name: "totalInstalls",
                        docs: [
                            "Total amount of install accounts that have been created for this xNFT (8)."
                        ],
                        type: "u64"
                    },
                    {
                        name: "installPrice",
                        docs: [
                            "The price-per-install of this xNFT (8)."
                        ],
                        type: "u64"
                    },
                    {
                        name: "createdTs",
                        docs: [
                            "The unix timestamp of when the account was created (8)."
                        ],
                        type: "i64"
                    },
                    {
                        name: "updatedTs",
                        docs: [
                            "The unix timestamp of the last time the account was updated (8)."
                        ],
                        type: "i64"
                    },
                    {
                        name: "totalRating",
                        docs: [
                            "The total cumulative rating value of all reviews (8)."
                        ],
                        type: "u64"
                    },
                    {
                        name: "numRatings",
                        docs: [
                            "The number of ratings created used to calculate the average (4)."
                        ],
                        type: "u32"
                    },
                    {
                        name: "suspended",
                        docs: [
                            "Flag to determine whether new installations of the xNFT should be halted (1)."
                        ],
                        type: "bool"
                    },
                    {
                        name: "bump",
                        docs: [
                            "The bump nonce for the xNFT's PDA (1)."
                        ],
                        type: {
                            array: [
                                "u8",
                                1
                            ]
                        }
                    },
                    {
                        name: "reserved0",
                        docs: [
                            "Unused reserved byte space for additive future changes."
                        ],
                        type: {
                            array: [
                                "u8",
                                64
                            ]
                        }
                    },
                    {
                        name: "reserved1",
                        type: {
                            array: [
                                "u8",
                                24
                            ]
                        }
                    },
                    {
                        name: "reserved2",
                        type: {
                            array: [
                                "u8",
                                9
                            ]
                        }
                    }
                ]
            }
        }
    ],
    types: [
        {
            name: "CreatorsParam",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "address",
                        type: "publicKey"
                    },
                    {
                        name: "share",
                        type: "u8"
                    }
                ]
            }
        },
        {
            name: "CreateXnftParams",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "creators",
                        type: {
                            vec: {
                                defined: "CreatorsParam"
                            }
                        }
                    },
                    {
                        name: "curator",
                        type: {
                            option: "publicKey"
                        }
                    },
                    {
                        name: "installAuthority",
                        type: {
                            option: "publicKey"
                        }
                    },
                    {
                        name: "installPrice",
                        type: "u64"
                    },
                    {
                        name: "installVault",
                        type: "publicKey"
                    },
                    {
                        name: "sellerFeeBasisPoints",
                        type: "u16"
                    },
                    {
                        name: "supply",
                        type: {
                            option: "u64"
                        }
                    },
                    {
                        name: "symbol",
                        type: "string"
                    },
                    {
                        name: "tag",
                        type: {
                            defined: "Tag"
                        }
                    },
                    {
                        name: "uri",
                        type: "string"
                    }
                ]
            }
        },
        {
            name: "UpdateParams",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "installAuthority",
                        type: {
                            option: "publicKey"
                        }
                    },
                    {
                        name: "installPrice",
                        type: "u64"
                    },
                    {
                        name: "installVault",
                        type: "publicKey"
                    },
                    {
                        name: "name",
                        type: {
                            option: "string"
                        }
                    },
                    {
                        name: "supply",
                        type: {
                            option: "u64"
                        }
                    },
                    {
                        name: "tag",
                        type: {
                            defined: "Tag"
                        }
                    },
                    {
                        name: "uri",
                        type: {
                            option: "string"
                        }
                    }
                ]
            }
        },
        {
            name: "CuratorStatus",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "pubkey",
                        docs: [
                            "The pubkey of the `Curator` program account (32)."
                        ],
                        type: "publicKey"
                    },
                    {
                        name: "verified",
                        docs: [
                            "Whether the curator's authority has verified the assignment (1)."
                        ],
                        type: "bool"
                    }
                ]
            }
        },
        {
            name: "Kind",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "App"
                    },
                    {
                        name: "Collectible"
                    }
                ]
            }
        },
        {
            name: "Tag",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None"
                    },
                    {
                        name: "Defi"
                    },
                    {
                        name: "Game"
                    },
                    {
                        name: "Nfts"
                    }
                ]
            }
        }
    ],
    events: [
        {
            name: "AccessGranted",
            fields: [
                {
                    name: "wallet",
                    type: "publicKey",
                    index: false
                },
                {
                    name: "xnft",
                    type: "publicKey",
                    index: false
                }
            ]
        },
        {
            name: "InstallationCreated",
            fields: [
                {
                    name: "installer",
                    type: "publicKey",
                    index: false
                },
                {
                    name: "xnft",
                    type: "publicKey",
                    index: false
                }
            ]
        },
        {
            name: "ReviewCreated",
            fields: [
                {
                    name: "author",
                    type: "publicKey",
                    index: false
                },
                {
                    name: "rating",
                    type: "u8",
                    index: false
                },
                {
                    name: "xnft",
                    type: "publicKey",
                    index: false
                }
            ]
        },
        {
            name: "XnftUpdated",
            fields: [
                {
                    name: "xnft",
                    type: "publicKey",
                    index: false
                }
            ]
        }
    ],
    errors: [
        {
            code: 6000,
            name: "CannotReviewOwned",
            msg: "You cannot create a review for an xNFT that you currently own or published"
        },
        {
            code: 6001,
            name: "CuratorAlreadySet",
            msg: "There is already a verified curator assigned"
        },
        {
            code: 6002,
            name: "CuratorAuthorityMismatch",
            msg: "The expected curator authority did not match expected"
        },
        {
            code: 6003,
            name: "CuratorMismatch",
            msg: "The provided curator account did not match the one assigned"
        },
        {
            code: 6004,
            name: "InstallAuthorityMismatch",
            msg: "The provided xNFT install authority did not match"
        },
        {
            code: 6005,
            name: "InstallExceedsSupply",
            msg: "The max supply has been reached for the xNFT"
        },
        {
            code: 6006,
            name: "InstallOwnerMismatch",
            msg: "The asserted authority/owner did not match that of the Install account"
        },
        {
            code: 6007,
            name: "MetadataIsImmutable",
            msg: "The metadata of the xNFT is marked as immutable"
        },
        {
            code: 6008,
            name: "MustBeApp",
            msg: "The xNFT must be of `Kind::App` for this operation"
        },
        {
            code: 6009,
            name: "RatingOutOfBounds",
            msg: "The rating for a review must be between 0 and 5"
        },
        {
            code: 6010,
            name: "ReviewInstallMismatch",
            msg: "The installation provided for the review does not match the xNFT"
        },
        {
            code: 6011,
            name: "SupplyReduction",
            msg: "Updated supply is less than the original supply set on creation"
        },
        {
            code: 6012,
            name: "SuspendedInstallation",
            msg: "Attempting to install a currently suspended xNFT"
        },
        {
            code: 6013,
            name: "UnauthorizedInstall",
            msg: "The access account provided is not associated with the wallet"
        },
        {
            code: 6014,
            name: "UpdateAuthorityMismatch",
            msg: "The signer did not match the update authority of the metadata account or the owner"
        },
        {
            code: 6015,
            name: "UpdateReviewAuthorityMismatch",
            msg: "The signing authority for the xNFT update did not match the review authority"
        },
        {
            code: 6016,
            name: "UriExceedsMaxLength",
            msg: "The metadata URI provided exceeds the maximum length"
        }
    ]
}; //# sourceMappingURL=xnft.js.map


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

/***/ "../common/dist/esm/solana/provider.js":
/*!*********************************************!*\
  !*** ../common/dist/esm/solana/provider.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolanaProvider": () => (/* binding */ SolanaProvider)
/* harmony export */ });
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs58 */ "../common/node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../common/dist/esm/constants.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



// Provider api used by the app UI. Spiritually the same as the injected
// provider with a slightly different API. Eventually it would be nice to
// combine the two.
class SolanaProvider {
    static async signTransaction(ctx, tx) {
        const { walletPublicKey , backgroundClient  } = ctx;
        const txStr = bs58__WEBPACK_IMPORTED_MODULE_0__.encode(tx.serialize({
            requireAllSignatures: false
        }));
        const respSignature = await backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_SOLANA_SIGN_TRANSACTION,
            params: [
                txStr,
                walletPublicKey.toString()
            ]
        });
        tx.addSignature(walletPublicKey, Buffer.from(bs58__WEBPACK_IMPORTED_MODULE_0__.decode(respSignature)));
        return tx;
    }
    static async signAllTransactions(ctx, txs) {
        const { walletPublicKey  } = ctx;
        // Serialize messages.
        const txStrs = txs.map((tx)=>{
            return bs58__WEBPACK_IMPORTED_MODULE_0__.encode(tx.serialize({
                requireAllSignatures: false
            }));
        });
        // Get signatures from the background script.
        const signatures = await ctx.backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_SOLANA_SIGN_ALL_TRANSACTIONS,
            params: [
                txStrs,
                walletPublicKey.toString()
            ]
        });
        // Add the signatures to the transactions.
        txs.forEach((t, idx)=>{
            t.addSignature(walletPublicKey, Buffer.from(bs58__WEBPACK_IMPORTED_MODULE_0__.decode(signatures[idx])));
        });
        // Done.
        return txs;
    }
    static async signAndSendTransaction(ctx, tx) {
        const { walletPublicKey , connection , commitment , backgroundClient  } = ctx;
        tx.feePayer = walletPublicKey;
        tx.recentBlockhash = (await connection.getLatestBlockhash(commitment)).blockhash;
        const txSerialize = tx.serialize({
            requireAllSignatures: false
        });
        const message = bs58__WEBPACK_IMPORTED_MODULE_0__.encode(txSerialize);
        const sig = await backgroundClient.request({
            method: _constants__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_SOLANA_SIGN_AND_SEND_TRANSACTION,
            params: [
                message,
                walletPublicKey.toString()
            ]
        });
        return sig;
    }
} //# sourceMappingURL=provider.js.map


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

/***/ "../common/dist/esm/solana/rpc-helpers.js":
/*!************************************************!*\
  !*** ../common/dist/esm/solana/rpc-helpers.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addressLookupTableAccountParser": () => (/* binding */ addressLookupTableAccountParser)
/* harmony export */ });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


/*
 * Helper functions to serialize and deserialize RPC messages
 * so we can send them through the browser post message API
 * and parse them out the other side.
 */ const addressLookupTableAccountParser = {
    serialize: (addressLookupTableAccount)=>{
        var _a;
        if (!addressLookupTableAccount) {
            return null;
        }
        const serializedAddressLookupTableAccount = {
            key: addressLookupTableAccount.key.toString(),
            state: {
                deactivationSlot: addressLookupTableAccount.state.deactivationSlot.toString(),
                lastExtendedSlot: addressLookupTableAccount.state.lastExtendedSlot,
                lastExtendedSlotStartIndex: addressLookupTableAccount.state.lastExtendedSlotStartIndex,
                authority: (_a = addressLookupTableAccount.state.authority) === null || _a === void 0 ? void 0 : _a.toString(),
                addresses: addressLookupTableAccount.state.addresses.map((address)=>address.toString())
            }
        };
        return serializedAddressLookupTableAccount;
    },
    deserialize: (serializedAddressLookupTableAccount)=>{
        if (!serializedAddressLookupTableAccount) {
            return null;
        }
        const addressLookupTableAccount = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.AddressLookupTableAccount({
            key: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(serializedAddressLookupTableAccount.key),
            state: {
                deactivationSlot: BigInt(serializedAddressLookupTableAccount.state.deactivationSlot),
                lastExtendedSlot: serializedAddressLookupTableAccount.state.lastExtendedSlot,
                lastExtendedSlotStartIndex: serializedAddressLookupTableAccount.state.lastExtendedSlotStartIndex,
                authority: serializedAddressLookupTableAccount.state.authority ? new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(serializedAddressLookupTableAccount.state.authority) : undefined,
                addresses: serializedAddressLookupTableAccount.state.addresses.map((address)=>new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(address))
            }
        });
        return addressLookupTableAccount;
    }
}; //# sourceMappingURL=rpc-helpers.js.map


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

/***/ "../common/dist/esm/solana/send-helpers.js":
/*!*************************************************!*\
  !*** ../common/dist/esm/solana/send-helpers.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCardinalWrappedToken": () => (/* binding */ isCardinalWrappedToken),
/* harmony export */   "isCreatorStandardToken": () => (/* binding */ isCreatorStandardToken),
/* harmony export */   "isOpenCreatorProtocol": () => (/* binding */ isOpenCreatorProtocol),
/* harmony export */   "isProgrammableNftToken": () => (/* binding */ isProgrammableNftToken)
/* harmony export */ });
/* harmony import */ var _cardinal_creator_standard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cardinal/creator-standard */ "../../node_modules/@cardinal/creator-standard/dist/esm/index.js");
/* harmony import */ var _cardinal_token_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cardinal/token-manager */ "../../node_modules/@cardinal/token-manager/dist/esm/index.js");
/* harmony import */ var _magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @magiceden-oss/open_creator_protocol */ "../../node_modules/@magiceden-oss/open_creator_protocol/dist/src/index.js");
/* harmony import */ var _magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @metaplex-foundation/mpl-token-metadata */ "../../node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/mpl-token-metadata.js");
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var _programs_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programs/token */ "../common/dist/esm/solana/programs/token.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

// Used in Sending NFTs and Tokens in app-extension and app-mobile
// This was all copied over so it can be shared.
// do not blame peter if this doesn't work, he closed his eyes and press cmd + v






const isCardinalWrappedToken = async (connection, mintId, mintInfo)=>{
    const mintManagerId = (await _cardinal_token_manager__WEBPACK_IMPORTED_MODULE_1__.programs.tokenManager.pda.findMintManagerId(mintId))[0];
    if (!mintInfo.freezeAuthority || mintInfo.freezeAuthority !== mintManagerId.toString()) {
        return false;
    }
    // only need network calls to double confirm but the above check is likely sufficient if we assume it was created correctly
    const [tokenManagerId] = await _cardinal_token_manager__WEBPACK_IMPORTED_MODULE_1__.programs.tokenManager.pda.findTokenManagerAddress(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.PublicKey(mintId));
    const tokenManagerData = await (0,_cardinal_token_manager__WEBPACK_IMPORTED_MODULE_1__.tryGetAccount)(()=>_cardinal_token_manager__WEBPACK_IMPORTED_MODULE_1__.programs.tokenManager.accounts.getTokenManager(connection, tokenManagerId));
    if (!(tokenManagerData === null || tokenManagerData === void 0 ? void 0 : tokenManagerData.parsed)) {
        return false;
    }
    try {
        await _cardinal_token_manager__WEBPACK_IMPORTED_MODULE_1__.programs.transferAuthority.accounts.getTransferAuthority(connection, (tokenManagerData === null || tokenManagerData === void 0 ? void 0 : tokenManagerData.parsed.transferAuthority) || new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.PublicKey(""));
        return true;
    } catch (error) {
        console.log("Invalid transfer authority");
    }
    return false;
};
const isCreatorStandardToken = (mintId, mintInfo)=>{
    const mintManagerId = (0,_cardinal_creator_standard__WEBPACK_IMPORTED_MODULE_0__.findMintManagerId)(mintId);
    // not network calls involved we can assume this token was created properly if the mint and freeze authority match
    return mintInfo.freezeAuthority && mintInfo.mintAuthority && mintInfo.freezeAuthority === mintManagerId.toString() && mintInfo.mintAuthority === mintManagerId.toString();
};
async function isOpenCreatorProtocol(connection, mintId, mintInfo) {
    const mintStatePk = (0,_magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.findMintStatePk)(mintId);
    const accountInfo = await connection.getAccountInfo(mintStatePk);
    return accountInfo !== null ? _magiceden_oss_open_creator_protocol__WEBPACK_IMPORTED_MODULE_2__.MintState.fromAccountInfo(accountInfo)[0] : null;
}
async function isProgrammableNftToken(connection, mintAddress) {
    try {
        const metadata = await _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.Metadata.fromAccountAddress(connection, await (0,_programs_token__WEBPACK_IMPORTED_MODULE_5__.metadataAddress)(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.PublicKey(mintAddress)));
        return metadata.tokenStandard == _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.TokenStandard.ProgrammableNonFungible;
    } catch (error) {
        // most likely this happens if the metadata account does not exist
        console.log(error);
        return false;
    }
} //# sourceMappingURL=send-helpers.js.map


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

/***/ "../common/dist/esm/solana/transaction-helpers.js":
/*!********************************************************!*\
  !*** ../common/dist/esm/solana/transaction-helpers.js ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializeLegacyTransaction": () => (/* binding */ deserializeLegacyTransaction),
/* harmony export */   "deserializeTransaction": () => (/* binding */ deserializeTransaction),
/* harmony export */   "isVersionedTransaction": () => (/* binding */ isVersionedTransaction)
/* harmony export */ });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "../../node_modules/ethers/lib.esm/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



const { base58: bs58  } = ethers__WEBPACK_IMPORTED_MODULE_1__;
const deserializeTransaction = (serializedTx)=>{
    return _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.VersionedTransaction.deserialize(bs58.decode(serializedTx));
};
const deserializeLegacyTransaction = (serializedTx)=>{
    return _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Transaction.from(bs58.decode(serializedTx));
};
const isVersionedTransaction = (tx)=>{
    return "version" in tx;
}; //# sourceMappingURL=transaction-helpers.js.map


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

/***/ "../common/dist/esm/solana/types.js":
/*!******************************************!*\
  !*** ../common/dist/esm/solana/types.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializeTokenAccountsFilter": () => (/* binding */ deserializeTokenAccountsFilter),
/* harmony export */   "serializeTokenAccountsFilter": () => (/* binding */ serializeTokenAccountsFilter)
/* harmony export */ });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


function serializeTokenAccountsFilter(filter) {
    // @ts-ignore
    return filter.mint ? {
        mint: filter.mint.toString()
    } : {
        programId: filter.programId.toString()
    };
}
function deserializeTokenAccountsFilter(filter) {
    // @ts-ignore
    return filter.mint ? {
        mint: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(filter.mint)
    } : {
        programId: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(filter.programId)
    };
} //# sourceMappingURL=types.js.map


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

/***/ "../common/dist/esm/solana/wallet-adapter.js":
/*!***************************************************!*\
  !*** ../common/dist/esm/solana/wallet-adapter.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolanaWalletAdapter": () => (/* binding */ SolanaWalletAdapter)
/* harmony export */ });
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ "../common/dist/esm/solana/provider.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


// Exposes a variant of the `@solana/wallet-adapter` interface (for jupiter).
class SolanaWalletAdapter {
    constructor(publicKey){
        this.publicKey = publicKey;
    }
    // @override
    async sendTransaction(tx, connection, options) {
        if (options === null || options === void 0 ? void 0 : options.signers) {
            options === null || options === void 0 ? void 0 : options.signers.forEach((s)=>{
                tx.partialSign(s);
            });
        }
        const ctx = {
            walletPublicKey: this.publicKey,
            connection
        };
        return await _provider__WEBPACK_IMPORTED_MODULE_0__.SolanaProvider.signAndSendTransaction(ctx, tx);
    }
    // @override
    async signTransaction(tx) {
        const ctx = {
            walletPublicKey: this.publicKey
        };
        return await _provider__WEBPACK_IMPORTED_MODULE_0__.SolanaProvider.signTransaction(ctx, tx);
    }
    // @override
    async signAllTransactions(txs) {
        const ctx = {
            walletPublicKey: this.publicKey
        };
        return await _provider__WEBPACK_IMPORTED_MODULE_0__.SolanaProvider.signAllTransactions(ctx, txs);
    }
} //# sourceMappingURL=wallet-adapter.js.map


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

/***/ "../common/dist/esm/types.js":
/*!***********************************!*\
  !*** ../common/dist/esm/types.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blockchain": () => (/* binding */ Blockchain)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var Blockchain;
(function(Blockchain) {
    Blockchain["SOLANA"] = "solana";
    Blockchain["ETHEREUM"] = "ethereum";
})(Blockchain || (Blockchain = {})); //# sourceMappingURL=types.js.map


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

/***/ "../common/dist/esm/utils.js":
/*!***********************************!*\
  !*** ../common/dist/esm/utils.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_MOBILE": () => (/* binding */ IS_MOBILE),
/* harmony export */   "externalResourceUri": () => (/* binding */ externalResourceUri),
/* harmony export */   "formatUSD": () => (/* binding */ formatUSD),
/* harmony export */   "generateUniqueId": () => (/* binding */ generateUniqueId),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isServiceWorker": () => (/* binding */ isServiceWorker),
/* harmony export */   "proxyImageUrl": () => (/* binding */ proxyImageUrl),
/* harmony export */   "reverseScientificNotation": () => (/* binding */ reverseScientificNotation),
/* harmony export */   "toDisplayBalance": () => (/* binding */ toDisplayBalance),
/* harmony export */   "toTitleCase": () => (/* binding */ toTitleCase),
/* harmony export */   "validateEthereumPrivateKey": () => (/* binding */ validateEthereumPrivateKey),
/* harmony export */   "validatePrivateKey": () => (/* binding */ validatePrivateKey),
/* harmony export */   "validateSolanaPrivateKey": () => (/* binding */ validateSolanaPrivateKey)
/* harmony export */ });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bs58 */ "../common/node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/wallet/lib.esm/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "../common/dist/esm/types.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");






const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});
function toTitleCase(str) {
    var _a, _b;
    return ((_a = str === null || str === void 0 ? void 0 : str.slice(0, 1)) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + ((_b = str === null || str === void 0 ? void 0 : str.toLowerCase()) === null || _b === void 0 ? void 0 : _b.slice(1));
}
/**
 * Formats a number or number string into a pretty USD string
 * @example
 * formatUSD(-1234567.89) // "-$1,234,567.89"
 */ function formatUSD(amount) {
    let amountNumber;
    if (typeof amount === "string") {
        amountNumber = Number(amount.replace(",", ""));
    } else {
        amountNumber = amount;
    }
    return usd.format(amountNumber);
}
/**
 * A globally unique ID generator, useful for stateless or readonly things
 * @returns
 * uuid/v1, in case we need to extract the timestamp when debugging
 */ function generateUniqueId() {
    return (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
}
function isMobile() {
    if (typeof window !== "undefined" && typeof window.document !== "undefined") {
        return false;
    }
    return true;
}
/**
 * True if we're in the mobile environment.
 */ const IS_MOBILE = globalThis.chrome ? false : globalThis.browser ? false : true;
function isServiceWorker() {
    return globalThis.clients !== undefined;
}
/**
 * Make any necessary changes to URIs before the client queries them.
 *
 * TODO: replace host with host of caching layer for thumbnail generation, caching,
 * SVG sanitization, etc.
 */ function externalResourceUri(uri, options = {}) {
    if (uri) {
        uri = uri.replace(/\0/g, "");
    }
    if (uri && uri.startsWith("ipfs://")) {
        return uri.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/");
    // return uri.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
    if (uri && uri.startsWith("ar://")) {
        return uri.replace("ar://", "https://arweave.net/");
    }
    if (options.cached) {
        return `https://swr.xnfts.dev/1min/${uri}`;
    }
    return `${uri}`;
}
function proxyImageUrl(url, size = 400) {
    if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
        if (url.includes("swr.xnfts.dev/avatars/")) {
            url += `?size=${size}`;
        }
        return `https://images.xnfts.dev/cdn-cgi/image/fit=contain,width=${size},height=${size},quality=85/${url}`;
    }
    return url;
}
function toDisplayBalance(nativeBalance, decimals, truncate = true) {
    let displayBalance = ethers__WEBPACK_IMPORTED_MODULE_4__.formatUnits(nativeBalance, decimals);
    if (truncate) {
        try {
            displayBalance = `${displayBalance.split(".")[0]}.${displayBalance.split(".")[1].slice(0, 5)}`;
        } catch  {
        // pass
        }
    }
    return ethers__WEBPACK_IMPORTED_MODULE_4__.commify(displayBalance);
}
function reverseScientificNotation(n) {
    const str = n.toString();
    if (!str.includes("e")) {
        return str;
    }
    const [base, exp] = str.split("e");
    const decimals = parseInt(exp);
    if (decimals < 0) {
        const sign = base[0] === "-" ? "-" : "";
        return `${sign}0.${Array(Math.abs(decimals) - 1).fill("0").join("")}${base.replace(/[-.]/g, "")}`;
    }
    const baseSplit = base.split(".");
    const baseDecimals = baseSplit.length === 1 ? 0 : baseSplit[1].length;
    return `${base.replace(".", "")}${Array(decimals - baseDecimals).fill("0").join("")}`;
}
/**
 * Validate a private key
 */ function validatePrivateKey(privateKey, blockchain) {
    if (blockchain === _types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.SOLANA) {
        return validateSolanaPrivateKey(privateKey);
    } else if (blockchain === _types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.ETHEREUM) {
        return validateEthereumPrivateKey(privateKey);
    } else {
        // If blockchain not explicitly passed, allow for any possible
        try {
            return validateSolanaPrivateKey(privateKey);
        } catch  {
            try {
                return validateEthereumPrivateKey(privateKey);
            } catch  {
                // Don't throw the error from the Ethereum function because if we are
                // down here no blockchain was specified in the args.
                throw new Error("Invalid private key");
            }
        }
    }
}
/**
 * Validate an Ethereum private key
 */ function validateEthereumPrivateKey(privateKey) {
    let wallet;
    try {
        wallet = new ethers__WEBPACK_IMPORTED_MODULE_5__.Wallet(privateKey);
    } catch (_) {
        throw new Error("Invalid Ethereum private key");
    }
    return {
        privateKey: wallet.privateKey,
        publicKey: wallet.address,
        blockchain: _types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.ETHEREUM
    };
}
/**
 * Validate a Solana private key
 */ function validateSolanaPrivateKey(privateKey) {
    let keypair = null;
    try {
        // Attempt to create a keypair from JSON secret key
        keypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Keypair.fromSecretKey(new Uint8Array(JSON.parse(privateKey)));
    } catch (_) {
        // Try the next method
        try {
            // Attempt to create a keypair from bs58 decode of secret key
            keypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Keypair.fromSecretKey(new Uint8Array(bs58__WEBPACK_IMPORTED_MODULE_1__.decode(privateKey)));
        } catch (_) {
            // Failure, no other ways to interpret
            throw new Error("Invalid Solana private key");
        }
    }
    return {
        privateKey: Buffer.from(keypair.secretKey).toString("hex"),
        publicKey: keypair.publicKey.toString(),
        blockchain: _types__WEBPACK_IMPORTED_MODULE_2__.Blockchain.SOLANA
    };
} //# sourceMappingURL=utils.js.map


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

/***/ "../common/dist/esm/zustand-store.js":
/*!*******************************************!*\
  !*** ../common/dist/esm/zustand-store.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStore": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "../../node_modules/zustand/esm/index.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


const useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        injectJavaScript: undefined,
        setInjectJavaScript: (injectJavaScript)=>set(()=>({
                    injectJavaScript
                }))
    })); //# sourceMappingURL=zustand-store.js.map


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

/***/ "?6048":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c114":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2e65":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=common_dist_esm_channel_content-script_js-common_dist_esm_channel_index_js-common_dist_esm_index_js.js.map