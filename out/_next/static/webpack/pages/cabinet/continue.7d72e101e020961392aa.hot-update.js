webpackHotUpdate_N_E("pages/cabinet/continue",{

/***/ "./pages/cabinet/continue.js":
/*!***********************************!*\
  !*** ./pages/cabinet/continue.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_continue_ContinueStep2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/continue/ContinueStep2 */ "./components/continue/ContinueStep2.js");
/* harmony import */ var _components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/continue/ContinueStep3 */ "./components/continue/ContinueStep3.js");
/* harmony import */ var _components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hocs/withAuth */ "./components/hocs/withAuth.js");
/* harmony import */ var _components_shared_Progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shared/Progressbar */ "./components/shared/Progressbar.js");



var _jsxFileName = "E:\\job\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\cabinet\\continue.js",
    _this = undefined,
    _s = $RefreshSig$();










var mapStateToProps = function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
    userStatus: state.userStatus,
    userHistory: state.userHistory
  };
};

var Continue = function Continue(_ref) {
  _s();

  var userReducer = _ref.userReducer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      stepResult = _useState[0],
      setStepResult = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(55000),
      summa = _useState2[0],
      setSumma = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(20),
      srok = _useState3[0],
      setSrok = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(stepResult),
      step = _useState4[0],
      setStep = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      sendRepeat = _useState5[0],
      setSendRepeat = _useState5[1];

  var canSendRepeat = function canSendRepeat() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(userReducer.user.UF_4)).then(function (response) {
      if (response.data.success == true) {
        // Router.push('/cabinet/repeated')
        _this.setState({
          sendRepeat: true
        }); // this.setState({btnLoading: false})

      }

      if (response.data.success == false) {
        _this.setState({
          sendRepeat: false
        });

        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/cabinet/loans');
      } else {
        console.log(response);
      }
    });
  };

  var getCurrentStep = function getCurrentStep() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.money-men.kz/api/notFull?iin=".concat(userReducer.user.UF_4), {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(function (res) {
      console.log(res);

      if (res.data.success) {
        if (res.data.step === 3) {
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/cabinet/loans');
        } else {
          setStep(parseInt(res.data.step));
          setStepResult(parseInt(res.data.step));
        }
      }
    })["catch"](console.log('log'));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getCurrentStep();
    canSendRepeat();
  }, []);

  var StepReg = function StepReg() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: step === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep2__WEBPACK_IMPORTED_MODULE_5__["default"], {
        next: step,
        setNext: setStep,
        userDate: userReducer.user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 8
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_6__["default"], {
        step: step,
        setStep: setStep,
        stepResult: stepResult,
        userDate: userReducer.user,
        summa: summa,
        srok: srok
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 85
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "otherPages container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: [userReducer.user.UF_5, " ", userReducer.user.UF_6, ", \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0437\u0430\u0439\u043C"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 43
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "inputs_continue ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0443\u043C\u043C\u0430 : ", summa, " \u0442\u0433"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: summa,
          onChange: function onChange(e) {
            return setSumma(e.target.value);
          },
          type: "range",
          step: "5000",
          min: "10000",
          max: "145000",
          className: "range"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0440\u043E\u043A : ", srok, " \u0434\u043D\u0435\u0439"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: srok,
          onChange: function onChange(e) {
            return setSrok(e.target.value);
          },
          type: "range",
          min: "15",
          max: "30",
          className: "range"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 16
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "mt-5 mb-3 text-center",
      children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, _this), stepResult === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StepReg, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userDate: userReducer.user,
      summa: summa,
      srok: srok
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 7
  }, _this);
};

_s(Continue, "az9G6JJYTvVpbKed27GLksZpEBk=");

_c = Continue;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, null)(Continue)));

var _c;

$RefreshReg$(_c, "Continue");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9jb250aW51ZS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwiQ29udGludWUiLCJ1c2VTdGF0ZSIsInN0ZXBSZXN1bHQiLCJzZXRTdGVwUmVzdWx0Iiwic3VtbWEiLCJzZXRTdW1tYSIsInNyb2siLCJzZXRTcm9rIiwic3RlcCIsInNldFN0ZXAiLCJzZW5kUmVwZWF0Iiwic2V0U2VuZFJlcGVhdCIsImNhblNlbmRSZXBlYXQiLCJheGlvcyIsImdldCIsInVzZXIiLCJVRl80IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJzZXRTdGF0ZSIsIlJvdXRlciIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZ2V0Q3VycmVudFN0ZXAiLCJoZWFkZXJzIiwicmVzIiwicGFyc2VJbnQiLCJ1c2VFZmZlY3QiLCJTdGVwUmVnIiwiVUZfNSIsIlVGXzYiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aXRoQXV0aCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQy9CLFNBQU87QUFBQ0MsZUFBVyxFQUFFRCxLQUFLLENBQUNDLFdBQXBCO0FBQWlDQyxjQUFVLEVBQUVGLEtBQUssQ0FBQ0UsVUFBbkQ7QUFBK0RDLGVBQVcsRUFBRUgsS0FBSyxDQUFDRztBQUFsRixHQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtQjtBQUFBOztBQUFBLE1BQWpCSCxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQUEsa0JBQ0NJLHNEQUFRLENBQUMsQ0FBRCxDQURUO0FB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QS9CO0FBQTBELGNBQUksRUFBQyxPQUEvRDtBQUF1RSxhQUFHLEVBQUMsSUFBM0U7QUFBZ0YsYUFBRyxFQUFDLElBQXBGO0FBQXlGLG1CQUFTLEVBQUM7QUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaQSxlQVlTO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaVCxlQWFFO0FBQUksZUFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsRUFnQkdsQyxVQUFVLEtBQUssQ0FBZixnQkFBbUIscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW5CLGdCQUFpQyxxRUFBQywwRUFBRDtBQUFlLGNBQVEsRUFBRUwsV0FBVyxDQUFDa0IsSUFBckM7QUFBMkMsV0FBSyxFQUFFWCxLQUFsRDtBQUF5RCxVQUFJLEVBQUVFO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJELENBL0VEOztHQUFNTixROztLQUFBQSxRO0FBaUZTcUMsd0lBQVEsQ0FBQ0MsMkRBQU8sQ0FBQzNDLGVBQUQsRUFBaUIsSUFBakIsQ0FBUCxDQUE4QkssUUFBOUIsQ0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2NvbnRpbnVlLjdkNzJlMTAxZTAyMDk2MTM5MmFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQ29udGludWVTdGVwMiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250aW51ZS9Db250aW51ZVN0ZXAyXCJcclxuaW1wb3J0IENvbnRpbnVlU3RlcDMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGludWUvQ29udGludWVTdGVwM1wiXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoXCJcclxuaW1wb3J0IFByb2dyZXNzYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Qcm9ncmVzc2JhclwiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHt1c2VyUmVkdWNlcjogc3RhdGUudXNlclJlZHVjZXIsIHVzZXJTdGF0dXM6IHN0YXRlLnVzZXJTdGF0dXMsIHVzZXJIaXN0b3J5OiBzdGF0ZS51c2VySGlzdG9yeX1cclxufVxyXG5cclxuY29uc3QgQ29udGludWUgPSAoe3VzZXJSZWR1Y2VyfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGVwUmVzdWx0LHNldFN0ZXBSZXN1bHRdID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbc3VtbWEsc2V0U3VtbWFdID0gdXNlU3RhdGUoNTUwMDApXHJcbiAgY29uc3QgW3Nyb2ssc2V0U3Jva10gPSB1c2VTdGF0ZSgyMClcclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gID0gdXNlU3RhdGUoc3RlcFJlc3VsdClcclxuICBjb25zdCBbc2VuZFJlcGVhdCwgc2V0U2VuZFJlcGVhdF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICBjb25zdCBjYW5TZW5kUmVwZWF0ID0gKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgIC5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVwZWF0VXNlcj9paW49JHt1c2VyUmVkdWNlci51c2VyLlVGXzR9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAvLyBSb3V0ZXIucHVzaCgnL2NhYmluZXQvcmVwZWF0ZWQnKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbmRSZXBlYXQ6IHRydWV9KVxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2J0bkxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZFJlcGVhdDogZmFsc2V9KVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9sb2FucycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBnZXRDdXJyZW50U3RlcCA9KCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL25vdEZ1bGw/aWluPSR7dXNlclJlZHVjZXIudXNlci5VRl80fWAsIHtoZWFkZXJzOiB7XHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgfX0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN0ZXA9PT0zKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9sb2FucycpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXAocGFyc2VJbnQocmVzLmRhdGEuc3RlcCkpXHJcbiAgICAgICAgICAgIHNldFN0ZXBSZXN1bHQocGFyc2VJbnQocmVzLmRhdGEuc3RlcCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2ggKFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2cnKVxyXG4gICAgICApXHJcbiAgfVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDdXJyZW50U3RlcCgpXHJcbiAgICBjYW5TZW5kUmVwZWF0KClcclxuICB9LFtdKVxyXG4gIGNvbnN0IFN0ZXBSZWcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgIHtzdGVwPT09IDE/IFxyXG4gICAgICAgPENvbnRpbnVlU3RlcDIgbmV4dD17c3RlcH0gc2V0TmV4dD17c2V0U3RlcH0gdXNlckRhdGU9e3VzZXJSZWR1Y2VyLnVzZXJ9Lz4gOiA8Q29udGludWVTdGVwMyBzdGVwPXtzdGVwfSBzZXRTdGVwPXtzZXRTdGVwfSBzdGVwUmVzdWx0PXtzdGVwUmVzdWx0fSB1c2VyRGF0ZT17dXNlclJlZHVjZXIudXNlcn0gc3VtbWE9e3N1bW1hfSBzcm9rPXtzcm9rfS8+fVxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3RoZXJQYWdlcyBjb250YWluZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvJz48Yj57dXNlclJlZHVjZXIudXNlci5VRl81fSB7dXNlclJlZHVjZXIudXNlci5VRl82fSwg0LLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INC00L7Qt9Cw0L/QvtC70L3QuNGC0Ywg0LDQvdC60LXRgtGDLCDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0L/QvtCy0YLQvtGA0L3Ri9C5INC30LDQudC8PC9iPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dHNfY29udGludWUgJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYW5nZS1ncm91cCc+XHJcbiAgICAgICAgICA8bGFiZWw+0KHRg9C80LzQsCA6IHtzdW1tYX0g0YLQszwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3N1bW1hfSBvbkNoYW5nZT17ZT0+c2V0U3VtbWEoZS50YXJnZXQudmFsdWUpfSB0eXBlPSdyYW5nZScgc3RlcD0nNTAwMCcgbWluPScxMDAwMCcgbWF4PScxNDUwMDAnIGNsYXNzTmFtZT0ncmFuZ2UnPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYW5nZS1ncm91cCc+XHJcbiAgICAgICAgICA8bGFiZWw+0KHRgNC+0LogOiB7c3Jva30g0LTQvdC10Lk8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtzcm9rfSBvbkNoYW5nZT17ZT0+c2V0U3JvayhlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3JhbmdlJyBtaW49JzE1JyBtYXg9JzMwJyBjbGFzc05hbWU9J3JhbmdlJz48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9J210LTUgbWItMyB0ZXh0LWNlbnRlcic+0J/RgNC+0LTQvtC70LbQuNGC0Ywg0LDQvdC60LXRgtGDPC9oMz5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAge3N0ZXBSZXN1bHQgPT09IDEgPyA8U3RlcFJlZyAvPiA6IDxDb250aW51ZVN0ZXAzIHVzZXJEYXRlPXt1c2VyUmVkdWNlci51c2VyfSBzdW1tYT17c3VtbWF9IHNyb2s9e3Nyb2t9Lz59XHJcbiAgICAgICB7LyogPENvbnRpbnVlU3RlcDMgLz4gKi99XHJcbiAgICAgIHsvKiA8Q29udGludWVTdGVwMyAvPiAqL31cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbnVsbCkoQ29udGludWUpKTsiXSwic291cmNlUm9vdCI6IiJ9