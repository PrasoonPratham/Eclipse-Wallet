globalThis["webpackHotUpdate_coral_xyz_app_extension"]("src_app_Router_tsx-src_components_Onboarding_pages_HardwareOnboard_tsx-src_components_Onboard-4fad4c",{

/***/ "./src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx ***!
  \**********************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ../../node_modules/swc-loader/src/index.js):\nError: \n  \u001b[31mx\u001b[0m Expression expected\n    ,-[\u001b[36;1;4m/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx\u001b[0m:39:1]\n \u001b[2m39\u001b[0m |       },\n \u001b[2m40\u001b[0m |       detail:\n \u001b[2m41\u001b[0m |         currentUrl !== SolanaCluster.LOCALNET &&\n \u001b[2m42\u001b[0m |         ? (\n    : \u001b[31;1m        ^\u001b[0m\n \u001b[2m43\u001b[0m |           <>\n \u001b[2m44\u001b[0m |             <Checkmark />\n \u001b[2m45\u001b[0m |             <PushDetail />\n    `----\n\n\nCaused by:\n    Syntax Error");

/***/ }),

/***/ "./src/components/common/Account/ImportWallets.tsx":
/*!*********************************************************!*\
  !*** ./src/components/common/Account/ImportWallets.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportWallets": () => (/* binding */ ImportWallets)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/react-common */ "../react-common/src/index.ts");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.ts");
/* harmony import */ var _ledgerhq_hw_app_eth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ledgerhq/hw-app-eth */ "../../node_modules/@ledgerhq/hw-app-eth/lib-es/Eth.js");
/* harmony import */ var _ledgerhq_hw_app_solana__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ledgerhq/hw-app-solana */ "../../node_modules/@ledgerhq/hw-app-solana/lib-es/Solana.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @project-serum/anchor */ "./node_modules/@project-serum/anchor/dist/browser/index.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ "../../node_modules/ethers/lib.esm/utils.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/providers/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* harmony import */ var _Layout_Scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Layout/Scrollbar */ "./src/components/common/Layout/Scrollbar.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();













const { base58: bs58  } = ethers__WEBPACK_IMPORTED_MODULE_11__;
function ImportWallets({ blockchain , mnemonic , transport , onNext , onError , recovery , allowMultiple =true  }) {
    _s();
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient)();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme)();
    const dehydrated = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useDehydratedWallets)();
    const dehydratedPubkeys = dehydrated.filter((d)=>d.blockchain === blockchain).map((d)=>d.publicKey);
    // Loaded balances for each public key
    const [balances, setBalances] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    // Path to the public key
    const [walletDescriptors, setWalletDescriptors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [checkedWalletDescriptors, setCheckedWalletDescriptors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    // Lock flag to prevent changing of derivation path while ledger is loading
    const [ledgerLocked, setLedgerLocked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // Public keys that have already been imported on this account
    const [importedPublicKeys, setImportedPublicKeys] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    // Public keys that are in use on other Backpack accounts
    const [conflictingPublicKeys, setConflictingPublicKeys] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const derivationPathOptions = {
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA]: [
            {
                path: (i)=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.legacyBip44Indexed)(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA, i),
                label: "m/44/501'/x'"
            },
            {
                path: (i)=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.legacyBip44ChangeIndexed)(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA, i),
                label: "m/44/501'/x'/0'"
            },
            {
                path: (i)=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.legacyBip44ChangeIndexed)(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA, i) + "/0'",
                label: "m/44/501'/x'/0'/0'"
            }
        ]// Note: We only allow importing the deprecated sollet derivation path for
        //       hot wallets. This UI is hidden behind a local storage flag we
        //       expect people to manually set, since this derivation path was only
        //       used by mostly technical early Solana users.
        .concat(mnemonic && window.localStorage.getItem("sollet") ? [
            {
                path: (i)=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.legacySolletIndexed)(i),
                label: "501'/0'/0/0 (Deprecated)"
            }
        ] : []),
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM]: [
            {
                path: (i)=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.legacyEthereum)(i),
                label: "m/44/60'/x"
            },
            {
                path: (i)=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.legacyLedgerIndexed)(i),
                label: "m/44'/60'/0'/x' - Ledger"
            },
            {
                path: (i)=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.legacyLedgerLiveAccount)(i),
                label: "m/44'/60'/x'/0/0 - Ledger Live"
            },
            {
                path: (i)=>(0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.ethereumIndexed)(i),
                label: "m/44'/60'/0'/0/x - Ethereum Standard"
            }
        ]
    }[blockchain];
    const [derivationPathLabel, setDerivationPathLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(derivationPathOptions[0].label);
    const [derivationPaths, setDerivationPaths] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const disabledPublicKeys = [
        ...importedPublicKeys,
        ...conflictingPublicKeys
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (async ()=>{
            try {
                const blockchainKeyrings = await background.request({
                    method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEYS,
                    params: []
                });
                const keyring = blockchainKeyrings[blockchain];
                setImportedPublicKeys(Object.values(keyring).flat().map((a)=>a.publicKey));
            } catch (error) {
            // Keyring store locked, either onboarding or left open
            }
        })();
    }, [
        background,
        blockchain
    ]);
    //
    // Query the server for a list of public keys that are already in use
    //
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (async ()=>{
            if (walletDescriptors.length === 0) return;
            try {
                const response = await background.request({
                    method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_FIND_SERVER_PUBLIC_KEY_CONFLICTS,
                    params: [
                        walletDescriptors.map((w)=>({
                                publicKey: w.publicKey,
                                blockchain
                            }))
                    ]
                });
                setConflictingPublicKeys(response.map((r)=>r.public_key));
            } catch  {
            // If the query failed assume all are valid
            }
        })();
    }, [
        background,
        blockchain,
        walletDescriptors
    ]);
    //
    // Load a list of accounts and their associated balances
    //
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!derivationPaths) return;
        setCheckedWalletDescriptors([]);
        let loaderFn;
        // `mnemonic` can be true here if we aren't passing the mnemonic then it
        // can be taken from the unlocked keyring on the backend
        if (mnemonic) {
            // Loading accounts from a mnemonic
            loaderFn = (derivationPaths)=>loadMnemonicPublicKeys(mnemonic, derivationPaths);
        } else if (transport) {
            // Loading accounts from a Ledger
            loaderFn = (derivationPaths)=>loadLedgerPublicKeys(transport, derivationPaths);
        } else {
            throw new Error("no public key loader found");
        }
        loaderFn(derivationPaths).then(async (publicKeys)=>{
            setWalletDescriptors(derivationPaths.map((derivationPath, i)=>({
                    blockchain,
                    publicKey: publicKeys[i],
                    derivationPath
                })));
            const balances = await loadBalances(publicKeys);
            setBalances(Object.fromEntries(balances.sort((a, b)=>b.balance.lt(a.balance) ? -1 : b.balance.eq(a.balance) ? 0 : 1).map((a)=>[
                    a.publicKey,
                    a.balance
                ])));
        }).catch((error)=>{
            // Probably Ledger error, i.e. app is not opened
            console.error(error);
            if (onError) {
                // Call custom error handler if one was passed
                onError(error);
            } else {
                throw error;
            }
        });
    }, [
        mnemonic,
        transport,
        derivationPaths
    ]);
    //
    // Clear accounts and selected acounts on change of derivation path.
    //
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setBalances({});
        setWalletDescriptors([]);
        if (derivationPathLabel !== null) {
            const derivationPath = derivationPathOptions.find((d)=>d.label === derivationPathLabel);
            if (!derivationPath) throw new Error("Invalid derivation path label");
            setDerivationPaths([
                ...Array(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.LOAD_PUBLIC_KEY_AMOUNT).keys()
            ].map((i)=>derivationPath.path(i)));
        }
    }, [
        derivationPathLabel
    ]);
    //
    // Load balances for accounts that have been loaded
    //
    const loadBalances = async (publicKeys)=>{
        if (blockchain === _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA) {
            // TODO use Backpack configured value
            const solanaMainnetRpc = ({"__DEV__":true,"IS_STATIC":"","NODE_ENV":"development","TAMAGUI_TARGET":"web","DEBUG":"0"}).DEFAULT_SOLANA_CONNECTION_URL || _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_SOLANA_CLUSTER;
            const solanaConnection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_8__.Connection(solanaMainnetRpc, "confirmed");
            const accounts = (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_7__.utils.rpc.getMultipleAccounts(solanaConnection, publicKeys.map((p)=>new _solana_web3_js__WEBPACK_IMPORTED_MODULE_8__.PublicKey(p)))).map((result, index)=>{
                return {
                    publicKey: publicKeys[index],
                    balance: result ? ethers__WEBPACK_IMPORTED_MODULE_12__.BigNumber.from(result.account.lamports) : ethers__WEBPACK_IMPORTED_MODULE_12__.BigNumber.from(0),
                    index
                };
            });
            return accounts;
        } else if (blockchain === _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM) {
            // TODO use Backpack configured value
            const ethereumMainnetRpc = ({"__DEV__":true,"IS_STATIC":"","NODE_ENV":"development","TAMAGUI_TARGET":"web","DEBUG":"0"}).DEFAULT_ETHEREUM_CONNECTION_URL || _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.EthereumConnectionUrl.MAINNET;
            const ethereumProvider = new ethers__WEBPACK_IMPORTED_MODULE_13__.JsonRpcProvider(ethereumMainnetRpc);
            const balances = await Promise.all(publicKeys.map((p)=>ethereumProvider.getBalance(p)));
            return publicKeys.map((p, index)=>{
                return {
                    publicKey: p,
                    balance: balances[index],
                    index
                };
            });
        } else {
            throw new Error("invalid blockchain");
        }
    };
    //
    // Load accounts for the given mnemonic. This is passed to the ImportWallets
    // component and called whenever the derivation path is changed with the selector.
    //
    const loadMnemonicPublicKeys = async (mnemonic, derivationPaths)=>{
        return await background.request({
            method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_PREVIEW_PUBKEYS,
            params: [
                blockchain,
                mnemonic,
                derivationPaths
            ]
        });
    };
    //
    // Load accounts for a ledger.
    //
    const loadLedgerPublicKeys = async (transport, derivationPaths)=>{
        const publicKeys = [];
        setLedgerLocked(true);
        const ledger = {
            [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA]: new _ledgerhq_hw_app_solana__WEBPACK_IMPORTED_MODULE_6__["default"](transport),
            [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM]: new _ledgerhq_hw_app_eth__WEBPACK_IMPORTED_MODULE_5__["default"](transport)
        }[blockchain];
        // Add remaining accounts
        for (const derivationPath of derivationPaths){
            publicKeys.push((await ledger.getAddress(derivationPath.replace("m/", ""))).address);
        }
        setLedgerLocked(false);
        return publicKeys.map((p)=>blockchain === _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA ? bs58.encode(p) : p.toString());
    };
    const isDisabledPublicKey = (pk)=>{
        if (recovery === undefined) {
            return disabledPublicKeys.includes(pk);
        }
        return pk !== recovery || !dehydratedPubkeys.includes(pk);
    };
    //
    // Handles checkbox clicks to select accounts to import.
    //
    const handleSelect = (publicKey, derivationPath)=>()=>{
            const currentIndex = checkedWalletDescriptors.findIndex((a)=>a.publicKey === publicKey);
            let newCheckedWalletDescriptors = [
                ...checkedWalletDescriptors
            ];
            if (currentIndex === -1) {
                // Not selected, add it
                const walletDescriptor = {
                    blockchain,
                    derivationPath,
                    publicKey
                };
                // Adding the account
                if (allowMultiple) {
                    newCheckedWalletDescriptors.push(walletDescriptor);
                } else {
                    newCheckedWalletDescriptors = [
                        walletDescriptor
                    ];
                }
            } else {
                // Removing the account
                newCheckedWalletDescriptors.splice(currentIndex, 1);
            }
            // TODO Sort by account indices
            // newCheckedWalletDescriptors.sort((a, b) => a.index - b.index);
            setCheckedWalletDescriptors(newCheckedWalletDescriptors);
        };
    // Symbol for balance displays
    const symbol = {
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA]: "SOL",
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM]: "ETH"
    }[blockchain];
    // Decimals for balance displays
    const decimals = {
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA]: 9,
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM]: 18
    }[blockchain];
    return /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 404,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 412,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
        sx: {
            marginLeft: "24px",
            marginRight: "24px",
            marginTop: "24px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 413,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_9__.Header, {
        text: `Import wallet${allowMultiple ? "s" : ""}`,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 420,
            columnNumber: 11
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_9__.SubtextParagraph, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 421,
            columnNumber: 11
        },
        __self: this
    }, "Select which wallet", allowMultiple ? "s" : "", " you'd like to import.")), /*#__PURE__*/ React.createElement("div", {
        style: {
            margin: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 425,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
        placeholder: "Derivation Path",
        value: derivationPathLabel,
        setValue: (e)=>setDerivationPathLabel(e.target.value),
        select: true,
        disabled: ledgerLocked,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 426,
            columnNumber: 11
        },
        __self: this
    }, derivationPathOptions.map((o)=>/*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
            value: o.label,
            key: o.label,
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
                lineNumber: 434,
                columnNumber: 15
            },
            __self: this
        }, o.label)))), Object.keys(balances).length > 0 ? /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
        sx: {
            color: theme.custom.colors.fontColor,
            background: theme.custom.colors.background,
            borderRadius: "12px",
            marginLeft: "16px",
            marginRight: "16px",
            paddingTop: "8px",
            paddingBottom: "8px",
            height: "225px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 441,
            columnNumber: 11
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_Layout_Scrollbar__WEBPACK_IMPORTED_MODULE_10__.Scrollbar, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 453,
            columnNumber: 13
        },
        __self: this
    }, [
        ...walletDescriptors
    ].sort((a, b)=>{
        // Sort so that any public keys with balances are displayed first
        if (balances[a.publicKey] < balances[b.publicKey]) {
            return 1;
        } else if (balances[a.publicKey] > balances[b.publicKey]) {
            return -1;
        } else {
            return 0;
        }
    }).map(({ publicKey , derivationPath  })=>/*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
            disableRipple: true,
            key: publicKey.toString(),
            onClick: handleSelect(publicKey, derivationPath),
            sx: {
                display: "flex",
                paddinLeft: "16px",
                paddingRight: "16px",
                paddingTop: "5px",
                paddingBottom: "5px"
            },
            disabled: isDisabledPublicKey(publicKey.toString()),
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
                lineNumber: 466,
                columnNumber: 19
            },
            __self: this
        }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
            style: {
                display: "flex",
                width: "100%"
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
                lineNumber: 479,
                columnNumber: 21
            },
            __self: this
        }, /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
                lineNumber: 480,
                columnNumber: 23
            },
            __self: this
        }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_9__.Checkbox, {
            edge: "start",
            checked: checkedWalletDescriptors.some((a)=>a.derivationPath === derivationPath) || importedPublicKeys.includes(publicKey.toString()),
            tabIndex: -1,
            disabled: isDisabledPublicKey(publicKey.toString()),
            disableRipple: true,
            style: {
                marginLeft: 0
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
                lineNumber: 487,
                columnNumber: 25
            },
            __self: this
        })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
            id: publicKey.toString(),
            primary: (0,_common__WEBPACK_IMPORTED_MODULE_9__.walletAddressDisplay)(publicKey),
            sx: {
                marginLeft: "8px",
                fontSize: "14px",
                lineHeight: "32px",
                fontWeight: 500
            },
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
                lineNumber: 501,
                columnNumber: 23
            },
            __self: this
        }), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
            sx: {
                color: theme.custom.colors.secondary,
                textAlign: "right"
            },
            primary: `${balances[publicKey] ? (+ethers__WEBPACK_IMPORTED_MODULE_19__.formatUnits(balances[publicKey], decimals)).toFixed(4) : "-"} ${symbol}`,
            __source: {
                fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
                lineNumber: 511,
                columnNumber: 23
            },
            __self: this
        })))))) : /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.Loading, {
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 531,
            columnNumber: 11
        },
        __self: this
    })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
        sx: {
            mt: "12px",
            ml: "16px",
            mr: "16px",
            mb: "16px"
        },
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 534,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_coral_xyz_react_common__WEBPACK_IMPORTED_MODULE_2__.PrimaryButton, {
        label: `Import Wallet${allowMultiple ? "s" : ""}`,
        onClick: ()=>onNext(checkedWalletDescriptors),
        disabled: checkedWalletDescriptors.length === 0,
        __source: {
            fileName: "/Users/pratham/Documents/GitHub/backpack/packages/app-extension/src/components/common/Account/ImportWallets.tsx",
            lineNumber: 542,
            columnNumber: 9
        },
        __self: this
    })));
}
_s(ImportWallets, "NdcFTe6PhYcHf43+gyw9hZcuKKc=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useBackgroundClient,
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_4__.useCustomTheme,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_3__.useDehydratedWallets
    ];
});
_c = ImportWallets;
var _c;
__webpack_require__.$Refresh$.register(_c, "ImportWallets");


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
//# sourceMappingURL=src_app_Router_tsx-src_components_Onboarding_pages_HardwareOnboard_tsx-src_components_Onboard-4fad4c.bd764d120e51d79680b9.hot-update.js.map