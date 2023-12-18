/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/CookieConsent.module.css":
/*!*****************************************!*\
  !*** ./styles/CookieConsent.module.css ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"cookieConsent\": \"CookieConsent_cookieConsent__qK_as\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQ29va2llQ29uc2VudC5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSVMyMTgtRmluYWwvLi9zdHlsZXMvQ29va2llQ29uc2VudC5tb2R1bGUuY3NzPzQ5ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29va2llQ29uc2VudFwiOiBcIkNvb2tpZUNvbnNlbnRfY29va2llQ29uc2VudF9fcUtfYXNcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/CookieConsent.module.css\n");

/***/ }),

/***/ "./components/CookieConsent.js":
/*!*************************************!*\
  !*** ./components/CookieConsent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/CookieConsent.module.css */ \"./styles/CookieConsent.module.css\");\n/* harmony import */ var _styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// components/CookieConsent.js\n\n\n // Import Link from Next.js\n // CSS module for styling\nconst CookieConsent = ()=>{\n    const [consent, setConsent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Save the consent in local storage or manage it as needed\n    const handleConsent = ()=>{\n        setConsent(true);\n        // Implement storing consent, e.g., in local storage\n        localStorage.setItem(\"cookieConsent\", \"true\");\n    };\n    // Don't render anything if consent is given\n    if (consent) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().cookieConsent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"We use cookies to improve your experience on our site. By continuing to use our site, you accept our use of cookies.\"\n            }, void 0, false, {\n                fileName: \"/Users/armendsinanovic/FinalGroupProject-4/components/CookieConsent.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/policy\",\n                children: \"Privacy Policy\"\n            }, void 0, false, {\n                fileName: \"/Users/armendsinanovic/FinalGroupProject-4/components/CookieConsent.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleConsent,\n                children: \"Accept\"\n            }, void 0, false, {\n                fileName: \"/Users/armendsinanovic/FinalGroupProject-4/components/CookieConsent.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/armendsinanovic/FinalGroupProject-4/components/CookieConsent.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookieConsent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvb2tpZUNvbnNlbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsOEJBQThCOztBQUNVO0FBQ1gsQ0FBQywyQkFBMkI7QUFDRCxDQUFDLHlCQUF5QjtBQUVsRixNQUFNSSxnQkFBZ0I7SUFDcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXZDLDJEQUEyRDtJQUMzRCxNQUFNTSxnQkFBZ0I7UUFDcEJELFdBQVc7UUFDWCxvREFBb0Q7UUFDcERFLGFBQWFDLE9BQU8sQ0FBQyxpQkFBaUI7SUFDeEM7SUFFQSw0Q0FBNEM7SUFDNUMsSUFBSUosU0FBUyxPQUFPO0lBRXBCLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFXUix1RkFBb0I7OzBCQUNsQyw4REFBQ1U7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ1gsa0RBQUlBO2dCQUFDWSxNQUFLOzBCQUFVOzs7Ozs7MEJBR3JCLDhEQUFDQztnQkFBT0MsU0FBU1Q7MEJBQWU7Ozs7Ozs7Ozs7OztBQUd0QztBQUVBLGlFQUFlSCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSVMyMTgtRmluYWwvLi9jb21wb25lbnRzL0Nvb2tpZUNvbnNlbnQuanM/NWE1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0Nvb2tpZUNvbnNlbnQuanNcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IC8vIEltcG9ydCBMaW5rIGZyb20gTmV4dC5qc1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29va2llQ29uc2VudC5tb2R1bGUuY3NzJzsgLy8gQ1NTIG1vZHVsZSBmb3Igc3R5bGluZ1xuXG5jb25zdCBDb29raWVDb25zZW50ID0gKCkgPT4ge1xuICBjb25zdCBbY29uc2VudCwgc2V0Q29uc2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gU2F2ZSB0aGUgY29uc2VudCBpbiBsb2NhbCBzdG9yYWdlIG9yIG1hbmFnZSBpdCBhcyBuZWVkZWRcbiAgY29uc3QgaGFuZGxlQ29uc2VudCA9ICgpID0+IHtcbiAgICBzZXRDb25zZW50KHRydWUpO1xuICAgIC8vIEltcGxlbWVudCBzdG9yaW5nIGNvbnNlbnQsIGUuZy4sIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29va2llQ29uc2VudCcsICd0cnVlJyk7XG4gIH07XG5cbiAgLy8gRG9uJ3QgcmVuZGVyIGFueXRoaW5nIGlmIGNvbnNlbnQgaXMgZ2l2ZW5cbiAgaWYgKGNvbnNlbnQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb29raWVDb25zZW50fT5cbiAgICAgIDxwPldlIHVzZSBjb29raWVzIHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlIG9uIG91ciBzaXRlLiBCeSBjb250aW51aW5nIHRvIHVzZSBvdXIgc2l0ZSwgeW91IGFjY2VwdCBvdXIgdXNlIG9mIGNvb2tpZXMuPC9wPlxuICAgICAgey8qIENvcnJlY3QgdXNhZ2Ugb2YgTGluayBjb21wb25lbnQgKi99XG4gICAgICA8TGluayBocmVmPVwiL3BvbGljeVwiPlxuICAgICAgICBQcml2YWN5IFBvbGljeVxuICAgICAgPC9MaW5rPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25zZW50fT5BY2NlcHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZUNvbnNlbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJzdHlsZXMiLCJDb29raWVDb25zZW50IiwiY29uc2VudCIsInNldENvbnNlbnQiLCJoYW5kbGVDb25zZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImNvb2tpZUNvbnNlbnQiLCJwIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CookieConsent.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_CookieConsent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CookieConsent */ \"./components/CookieConsent.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__]);\n_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/_app.js\n\n\n // Import the Head component\n\n\n // Import the component\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/logo.webp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/armendsinanovic/FinalGroupProject-4/pages/_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"TrailStride\"\n                    }, void 0, false, {\n                        fileName: \"/Users/armendsinanovic/FinalGroupProject-4/pages/_app.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/armendsinanovic/FinalGroupProject-4/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NextUIProvider, {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/armendsinanovic/FinalGroupProject-4/pages/_app.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CookieConsent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/armendsinanovic/FinalGroupProject-4/pages/_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/armendsinanovic/FinalGroupProject-4/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCOztBQUNVO0FBQ0csQ0FBQyw0QkFBNEI7QUFDUDtBQUNwQjtBQUN5QixDQUFDLHVCQUF1QjtBQUVoRixTQUFTSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFOzswQkFDRSw4REFBQ0wsa0RBQUlBOztrQ0FDSCw4REFBQ007d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7OztvQkFBZTtrQ0FDckMsOERBQUNDO2tDQUFNOzs7Ozs7b0JBQW1COzs7Ozs7OzBCQUc1Qiw4REFBQ1IsNkRBQWNBOztvQkFBQztrQ0FDZCw4REFBQ0c7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7O2tDQUN4Qiw4REFBQ0gsaUVBQWFBOzs7OztvQkFBRzs7Ozs7Ozs7O0FBSXpCO0FBRUEsaUVBQWVDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JUzIxOC1GaW5hbC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJzsgLy8gSW1wb3J0IHRoZSBIZWFkIGNvbXBvbmVudFxuaW1wb3J0IHsgTmV4dFVJUHJvdmlkZXIgfSBmcm9tICdAbmV4dHVpLW9yZy9yZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgQ29va2llQ29uc2VudCBmcm9tICcuLi9jb21wb25lbnRzL0Nvb2tpZUNvbnNlbnQnOyAvLyBJbXBvcnQgdGhlIGNvbXBvbmVudFxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28ud2VicFwiIC8+IHsvKiBSZWZlcmVuY2UgdG8geW91ciBsb2dvLnBuZyBmaWxlICovfVxuICAgICAgICA8dGl0bGU+VHJhaWxTdHJpZGU8L3RpdGxlPiB7LyogWW91IGNhbiBhbHNvIHNldCBhIGRlZmF1bHQgdGl0bGUgZm9yIGFsbCBwYWdlcyAqL31cbiAgICAgICAgey8qIEFueSBvdGhlciB0YWdzIHlvdSB3YW50IHRvIGluY2x1ZGUgaW4gdGhlIGhlYWQgKi99XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmV4dFVJUHJvdmlkZXI+IHsvKiBSZW1vdmVkIHRoZSB0aGVtZSBwcm9wICovfVxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxDb29raWVDb25zZW50IC8+IHsvKiBBZGQgdGhlIENvb2tpZSBDb25zZW50IGNvbXBvbmVudCAqL31cbiAgICAgIDwvTmV4dFVJUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIk5leHRVSVByb3ZpZGVyIiwiQ29va2llQ29uc2VudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibGluayIsInJlbCIsImhyZWYiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@nextui-org/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();