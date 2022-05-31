webpackHotUpdate_N_E("pages/agreements",{

/***/ "./components/CameraFeed/CameraFeed.jsx":
/*!**********************************************!*\
  !*** ./components/CameraFeed/CameraFeed.jsx ***!
  \**********************************************/
/*! exports provided: CameraFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraFeed", function() { return CameraFeed; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);










var _jsxFileName = "C:\\Users\\admin\\Desktop\\projects\\MFO\\mfo\\components\\CameraFeed\\CameraFeed.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var CameraFeed = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CameraFeed, _Component);

  var _super = _createSuper(CameraFeed);

  function CameraFeed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CameraFeed);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "takePhoto", function () {
      _this.setState({
        isCameraVisible: false
      });

      var context = _this.canvas.getContext('2d');

      _this.canvas.width = _this.videoPlayer.videoWidth;
      _this.canvas.height = _this.videoPlayer.videoHeight;
      context.drawImage(_this.videoPlayer, 0, 0, _this.canvas.width, _this.canvas.height);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "takePhotoAgain", function () {
      _this.setState({
        isCameraVisible: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "startVerification", function () {
      setTimeout(function () {
        _this.setState({
          isCameraVisible: true,
          isPreload: false
        });

        setTimeout(function () {
          // 2 секунды - Поместить лицо в рамку, начать сканирование
          _this.setState({
            isScanning: true
          }); // 1 секунда - Конец сканирования, улыбнуться


          setTimeout(function () {
            _this.setState({
              isScanning: false,
              isVerificationSecond: true
            }); // 2 секунды - Улыбнуться, начать сканирование


            setTimeout(function () {
              _this.setState({
                isVerificationSecond: false,
                isScanning: true
              }); // 1 секунда - Конец сканирования, отдалиться


              setTimeout(function () {
                _this.setState({
                  isScanning: false,
                  isVerificationThird: true
                }); // 2 секунды - Отдалиться, закончить верификацию


                setTimeout(function () {
                  _this.setState({
                    isScanning: true
                  }); // 1 секунда - Конец сканирования, отдалиться


                  setTimeout(function () {
                    _this.setState({
                      isScanning: false,
                      isVerificationThird: false,
                      isVerificationCompleted: true
                    });
                  }, 1000);
                }, 2000);
              }, 1000);
            }, 2000);
          }, 1000);
        }, 2000);
      }, 1000);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sendPhoto", function () {
      var sendFile = _this.props.sendFile;

      _this.canvas.toBlob(sendFile);
    });

    _this.state = {
      isCameraVisible: false,
      isVerificationCompleted: false,
      isScanning: false,
      isVerificationSecond: false,
      isVerificationThird: false,
      isPreload: true
    };
    return _this;
  }
  /**
   * Processes available devices and identifies one by the label
   * @memberof CameraFeed
   * @instance
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CameraFeed, [{
    key: "processDevices",
    value: function processDevices(devices) {
      var _this2 = this;

      devices.forEach(function (device) {
        _this2.setDevice(device);
      });
    }
    /**
     * Sets the active device and starts playing the feed
     * @memberof CameraFeed
     * @instance
     */

  }, {
    key: "setDevice",
    value: function () {
      var _setDevice = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(device) {
        var deviceId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deviceId = device.deviceId;
                _context.next = 3;
                return navigator.mediaDevices.getUserMedia({
                  audio: false,
                  video: {
                    deviceId: deviceId
                  }
                });

              case 3:
                this.videoPlayer.srcObject = _context.sent;
                _context.next = 6;
                return this.videoPlayer.play();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setDevice(_x) {
        return _setDevice.apply(this, arguments);
      }

      return setDevice;
    }()
    /**
     * On mount, grab the users connected devices and process them
     * @memberof CameraFeed
     * @instance
     * @override
     */

  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var cameras;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return navigator.mediaDevices.enumerateDevices();

              case 2:
                cameras = _context2.sent;
                this.processDevices(cameras);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
    /**
     * Handles taking a still image from the video feed on the camera
     * @memberof CameraFeed
     * @instance
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "c-camera-feed",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "c-camera-feed__preload ".concat(this.state.isPreload ? '' : 'd-none'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            children: "\u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            onClick: this.startVerification,
            children: "\u041D\u0430\u0447\u0430\u0442\u044C \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "c-camera-feed--holder ".concat(this.state.isCameraVisible ? '' : 'd-none'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "c-camera-feed__viewer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("video", {
              ref: function ref(_ref) {
                return _this3.videoPlayer = _ref;
              },
              width: "100%",
              height: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "face-id ".concat(this.state.isVerificationCompleted ? 'd-none' : ''),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "face-id__frame ".concat(this.state.isVerificationThird ? 'scale-smaller' : ''),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "face-id__scanner ".concat(this.state.isScanning ? '' : 'd-none')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            className: "face-id__text ".concat(!this.state.isVerificationCompleted ? '' : 'd-none'),
            children: this.state.isVerificationSecond ? "Улыбнитесь" : this.state.isVerificationThird ? "Отдалитесь" : "Поместите лицо в рамку"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "".concat(this.state.isVerificationCompleted ? '' : 'd-none'),
            onClick: this.takePhoto,
            children: "\u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "c-camera-feed--holder ".concat(!this.state.isCameraVisible ? '' : 'd-none'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "c-camera-feed__stage",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("canvas", {
              className: "canvas",
              height: "100%",
              ref: function ref(_ref2) {
                return _this3.canvas = _ref2;
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "d-flex justify-content-between w-100",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              onClick: this.takePhotoAgain,
              children: "\u041F\u0435\u0440\u0435\u0441\u043D\u044F\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              onClick: this.sendPhoto,
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, this);
    }
  }]);

  return CameraFeed;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFGZWVkL0NhbWVyYUZlZWQuanN4Il0sIm5hbWVzIjpbIkNhbWVyYUZlZWQiLCJwcm9wcyIsInNldFN0YXRlIiwiaXNDYW1lcmFWaXNpYmxlIiwiY29udGV4dCIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsInZpZGVvUGxheWVyIiwidmlkZW9XaWR0aCIsImhlaWdodCIsInZpZGVvSGVpZ2h0IiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsImlzUHJlbG9hZCIsImlzU2Nhbm5pbmciLCJpc1ZlcmlmaWNhdGlvblNlY29uZCIsImlzVmVyaWZpY2F0aW9uVGhpcmQiLCJpc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZCIsInNlbmRGaWxlIiwidG9CbG9iIiwic3RhdGUiLCJkZXZpY2VzIiwiZm9yRWFjaCIsImRldmljZSIsInNldERldmljZSIsImRldmljZUlkIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ2aWRlbyIsInNyY09iamVjdCIsInBsYXkiLCJlbnVtZXJhdGVEZXZpY2VzIiwiY2FtZXJhcyIsInByb2Nlc3NEZXZpY2VzIiwic3RhcnRWZXJpZmljYXRpb24iLCJyZWYiLCJ0YWtlUGhvdG8iLCJ0YWtlUGhvdG9BZ2FpbiIsInNlbmRQaG90byIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxVQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxvTkFrRFAsWUFBTTtBQUNkLFlBQUtDLFFBQUwsQ0FBYztBQUNWQyx1QkFBZSxFQUFFO0FBRFAsT0FBZDs7QUFJQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsTUFBTCxDQUFZQyxVQUFaLENBQXVCLElBQXZCLENBQWhC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QU8sRUFBRSxLQUFLcUIsU0FBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSixlQThCSTtBQUFLLG1CQUFTLGtDQUEyQixDQUFDLEtBQUtsQixLQUFMLENBQVdsQixlQUFaLEdBQThCLEVBQTlCLEdBQW1DLFFBQTlELENBQWQ7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxtQ0FDSTtBQUFRLHVCQUFTLEVBQUMsUUFBbEI7QUFBMkIsb0JBQU0sRUFBQyxNQUFsQztBQUF5QyxpQkFBRyxFQUFFLGFBQUFtQyxLQUFHO0FBQUEsdUJBQUksTUFBSSxDQUFDakMsTUFBTCxHQUFjaUMsS0FBbEI7QUFBQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUsscUJBQVMsRUFBQyxzQ0FBZjtBQUFBLG9DQUNJO0FBQVEscUJBQU8sRUFBRSxLQUFLRSxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQVEscUJBQU8sRUFBRSxLQUFLQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQTBDSDtBQTlLTDs7QUFBQTtBQUFBLEVBQWdDQyxnREFBaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWdyZWVtZW50cy5iMGRlNjIyNjM4OGNjN2YyZjM3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhRmVlZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQ2FtZXJhVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTY2FubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uU2Vjb25kOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWZXJpZmljYXRpb25UaGlyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUHJlbG9hZDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzZXMgYXZhaWxhYmxlIGRldmljZXMgYW5kIGlkZW50aWZpZXMgb25lIGJ5IHRoZSBsYWJlbFxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBwcm9jZXNzRGV2aWNlcyhkZXZpY2VzKSB7XHJcbiAgICAgICAgZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGV2aWNlKGRldmljZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgZGV2aWNlIGFuZCBzdGFydHMgcGxheWluZyB0aGUgZmVlZFxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhc3luYyBzZXREZXZpY2UoZGV2aWNlKSB7XHJcbiAgICAgICAgY29uc3QgeyBkZXZpY2VJZCB9ID0gZGV2aWNlO1xyXG4gICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuc3JjT2JqZWN0ID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiBmYWxzZSwgdmlkZW86IHtkZXZpY2VJZH19KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnZpZGVvUGxheWVyLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIG1vdW50LCBncmFiIHRoZSB1c2VycyBjb25uZWN0ZWQgZGV2aWNlcyBhbmQgcHJvY2VzcyB0aGVtXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FtZXJhRmVlZFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0RldmljZXMoY2FtZXJhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRha2luZyBhIHN0aWxsIGltYWdlIGZyb20gdGhlIHZpZGVvIGZlZWQgb24gdGhlIGNhbWVyYVxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB0YWtlUGhvdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQ2FtZXJhVmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnZpZGVvUGxheWVyLnZpZGVvV2lkdGhcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLnZpZGVvUGxheWVyLnZpZGVvSGVpZ2h0XHJcblxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMudmlkZW9QbGF5ZXIsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0YWtlUGhvdG9BZ2FpbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDYW1lcmFWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRWZXJpZmljYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNDYW1lcmFWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNQcmVsb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gMiDRgdC10LrRg9C90LTRiyAtINCf0L7QvNC10YHRgtC40YLRjCDQu9C40YbQviDQsiDRgNCw0LzQutGDLCDQvdCw0YfQsNGC0Ywg0YHQutCw0L3QuNGA0L7QstCw0L3QuNC1XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxINGB0LXQutGD0L3QtNCwIC0g0JrQvtC90LXRhiDRgdC60LDQvdC40YDQvtCy0LDQvdC40Y8sINGD0LvRi9Cx0L3Rg9GC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uU2Vjb25kOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDIg0YHQtdC60YPQvdC00YsgLSDQo9C70YvQsdC90YPRgtGM0YHRjywg0L3QsNGH0LDRgtGMINGB0LrQsNC90LjRgNC+0LLQsNC90LjQtVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uU2Vjb25kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxINGB0LXQutGD0L3QtNCwIC0g0JrQvtC90LXRhiDRgdC60LDQvdC40YDQvtCy0LDQvdC40Y8sINC+0YLQtNCw0LvQuNGC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmljYXRpb25UaGlyZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMiDRgdC10LrRg9C90LTRiyAtINCe0YLQtNCw0LvQuNGC0YzRgdGPLCDQt9Cw0LrQvtC90YfQuNGC0Ywg0LLQtdGA0LjRhNC40LrQsNGG0LjRjlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMSDRgdC10LrRg9C90LTQsCAtINCa0L7QvdC10YYg0YHQutCw0L3QuNGA0L7QstCw0L3QuNGPLCDQvtGC0LTQsNC70LjRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmljYXRpb25UaGlyZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmRQaG90byA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNlbmRGaWxlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnRvQmxvYihzZW5kRmlsZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWNhbWVyYS1mZWVkXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyog0J/QtdGA0LXQtCDQvtGC0LrRgNGL0YLQuNC10Lwg0LHQuNC+0LzQtdGC0YDQuNC4ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjLWNhbWVyYS1mZWVkX19wcmVsb2FkICR7dGhpcy5zdGF0ZS5pc1ByZWxvYWQgPyAnJyA6ICdkLW5vbmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPtCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQv9GA0L7QudGC0Lgg0LLQtdGA0LjRhNC40LrQsNGG0LjRjjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3RhcnRWZXJpZmljYXRpb259PtCd0LDRh9Cw0YLRjCDQstC10YDQuNGE0LjQutCw0YbQuNGOPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyog0J7RgdC90L7QstC90L7QuSDQutC+0LzQv9C+0L3QtdC90YIg0LrQsNC80LXRgNGLICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjLWNhbWVyYS1mZWVkLS1ob2xkZXIgJHt0aGlzLnN0YXRlLmlzQ2FtZXJhVmlzaWJsZSA/ICcnIDogJ2Qtbm9uZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWNhbWVyYS1mZWVkX192aWV3ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHJlZj17cmVmID0+ICh0aGlzLnZpZGVvUGxheWVyID0gcmVmKX0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmFjZS1pZCAke3RoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25Db21wbGV0ZWQgPyAnZC1ub25lJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmYWNlLWlkX19mcmFtZSAke3RoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25UaGlyZCA/ICdzY2FsZS1zbWFsbGVyJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmFjZS1pZF9fc2Nhbm5lciAke3RoaXMuc3RhdGUuaXNTY2FubmluZyA/ICcnIDogJ2Qtbm9uZSd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGZhY2UtaWRfX3RleHQgJHshdGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZCA/ICcnIDogJ2Qtbm9uZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25TZWNvbmQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0KPQu9GL0LHQvdC40YLQtdGB0YxcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvblRoaXJkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQntGC0LTQsNC70LjRgtC10YHRjFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQn9C+0LzQtdGB0YLQuNGC0LUg0LvQuNGG0L4g0LIg0YDQsNC80LrRg1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25Db21wbGV0ZWQgPyAnJyA6ICdkLW5vbmUnfWB9IG9uQ2xpY2s9e3RoaXMudGFrZVBob3RvfT7QodGE0L7RgtC+0LPRgNCw0YTQuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qINCk0L7RgtC+INGA0LXQt9GD0LvRjNGC0LDRgiArINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0L/QtdGA0LXRgdC90Y/RgtGMICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjLWNhbWVyYS1mZWVkLS1ob2xkZXIgJHshdGhpcy5zdGF0ZS5pc0NhbWVyYVZpc2libGUgPyAnJyA6ICdkLW5vbmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1jYW1lcmEtZmVlZF9fc3RhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9XCJjYW52YXNcIiBoZWlnaHQ9XCIxMDAlXCIgcmVmPXtyZWYgPT4gdGhpcy5jYW52YXMgPSByZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRha2VQaG90b0FnYWlufT7Qn9C10YDQtdGB0L3Rj9GC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlbmRQaG90b30+0J7RgtC/0YDQsNCy0LjRgtGMINGE0L7RgtC+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9