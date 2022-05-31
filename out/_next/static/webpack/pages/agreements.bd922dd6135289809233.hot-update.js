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
          className: "c-camera-feed--holder ".concat(this.state.isCameraVisible && !this.state.isPreload ? '' : 'd-none'),
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
          className: "c-camera-feed--holder ".concat(!this.state.isCameraVisible && !this.state.isPreload ? '' : 'd-none'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFGZWVkL0NhbWVyYUZlZWQuanN4Il0sIm5hbWVzIjpbIkNhbWVyYUZlZWQiLCJwcm9wcyIsInNldFN0YXRlIiwiaXNDYW1lcmFWaXNpYmxlIiwiY29udGV4dCIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsInZpZGVvUGxheWVyIiwidmlkZW9XaWR0aCIsImhlaWdodCIsInZpZGVvSGVpZ2h0IiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsImlzUHJlbG9hZCIsImlzU2Nhbm5pbmciLCJpc1ZlcmlmaWNhdGlvblNlY29uZCIsImlzVmVyaWZpY2F0aW9uVGhpcmQiLCJpc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZCIsInNlbmRGaWxlIiwidG9CbG9iIiwic3RhdGUiLCJkZXZpY2VzIiwiZm9yRWFjaCIsImRldmljZSIsInNldERldmljZSIsImRldmljZUlkIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ2aWRlbyIsInNyY09iamVjdCIsInBsYXkiLCJlbnVtZXJhdGVEZXZpY2VzIiwiY2FtZXJhcyIsInByb2Nlc3NEZXZpY2VzIiwic3RhcnRWZXJpZmljYXRpb24iLCJyZWYiLCJ0YWtlUGhvdG8iLCJ0YWtlUGhvdG9BZ2FpbiIsInNlbmRQaG90byIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxVQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxvTkFrRFAsWUFBTTtBQUNkLFlBQUtDLFFBQUwsQ0FBYztBQUNWQyx1QkFBZSxFQUFFO0FBRFAsT0FBZDs7QUFJQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsTUFBTCxDQUFZQyxVQUFaLENBQXVCLElBQXZCLENBQWhC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QyxFQUFyQyxHQUEwQyxRQUEvQyxDQUFqQjtBQUE0RSxtQkFBTyxFQUFFLEtBQUtxQixTQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKLGVBOEJJO0FBQUssbUJBQVMsa0NBQTJCLENBQUMsS0FBS2xCLEtBQUwsQ0FBV2xCLGVBQVosSUFBK0IsQ0FBQyxLQUFLa0IsS0FBTCxDQUFXUCxTQUEzQyxHQUF1RCxFQUF2RCxHQUE0RCxRQUF2RixDQUFkO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsbUNBQ0k7QUFBUSx1QkFBUyxFQUFDLFFBQWxCO0FBQTJCLG9CQUFNLEVBQUMsTUFBbEM7QUFBeUMsaUJBQUcsRUFBRSxhQUFBd0IsS0FBRztBQUFBLHVCQUFJLE1BQUksQ0FBQ2pDLE1BQUwsR0FBY2lDLEtBQWxCO0FBQUE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFLLHFCQUFTLEVBQUMsc0NBQWY7QUFBQSxvQ0FDSTtBQUFRLHFCQUFPLEVBQUUsS0FBS0UsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFRLHFCQUFPLEVBQUUsS0FBS0MsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUEwQ0g7QUE5S0w7O0FBQUE7QUFBQSxFQUFnQ0MsZ0RBQWhDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FncmVlbWVudHMuYmQ5MjJkZDYxMzUyODk4MDkyMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYUZlZWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0NhbWVyYVZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU2Nhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblNlY29uZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uVGhpcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ByZWxvYWQ6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkZXZpY2VzIGFuZCBpZGVudGlmaWVzIG9uZSBieSB0aGUgbGFiZWxcclxuICAgICAqIEBtZW1iZXJvZiBDYW1lcmFGZWVkXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcHJvY2Vzc0RldmljZXMoZGV2aWNlcykge1xyXG4gICAgICAgIGRldmljZXMuZm9yRWFjaChkZXZpY2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERldmljZShkZXZpY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgYWN0aXZlIGRldmljZSBhbmQgc3RhcnRzIHBsYXlpbmcgdGhlIGZlZWRcclxuICAgICAqIEBtZW1iZXJvZiBDYW1lcmFGZWVkXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2V0RGV2aWNlKGRldmljZSkge1xyXG4gICAgICAgIGNvbnN0IHsgZGV2aWNlSWQgfSA9IGRldmljZTtcclxuICAgICAgICB0aGlzLnZpZGVvUGxheWVyLnNyY09iamVjdCA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHthdWRpbzogZmFsc2UsIHZpZGVvOiB7ZGV2aWNlSWR9fSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy52aWRlb1BsYXllci5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBtb3VudCwgZ3JhYiB0aGUgdXNlcnMgY29ubmVjdGVkIGRldmljZXMgYW5kIHByb2Nlc3MgdGhlbVxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYXMgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NEZXZpY2VzKGNhbWVyYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0YWtpbmcgYSBzdGlsbCBpbWFnZSBmcm9tIHRoZSB2aWRlbyBmZWVkIG9uIHRoZSBjYW1lcmFcclxuICAgICAqIEBtZW1iZXJvZiBDYW1lcmFGZWVkXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdGFrZVBob3RvID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0NhbWVyYVZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy52aWRlb1BsYXllci52aWRlb1dpZHRoXHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy52aWRlb1BsYXllci52aWRlb0hlaWdodFxyXG5cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnZpZGVvUGxheWVyLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH07XHJcblxyXG4gICAgdGFrZVBob3RvQWdhaW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQ2FtZXJhVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0VmVyaWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzQ2FtZXJhVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzUHJlbG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIDIg0YHQtdC60YPQvdC00YsgLSDQn9C+0LzQtdGB0YLQuNGC0Ywg0LvQuNGG0L4g0LIg0YDQsNC80LrRgywg0L3QsNGH0LDRgtGMINGB0LrQsNC90LjRgNC+0LLQsNC90LjQtVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMSDRgdC10LrRg9C90LTQsCAtINCa0L7QvdC10YYg0YHQutCw0L3QuNGA0L7QstCw0L3QuNGPLCDRg9C70YvQsdC90YPRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblNlY29uZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAyINGB0LXQutGD0L3QtNGLIC0g0KPQu9GL0LHQvdGD0YLRjNGB0Y8sINC90LDRh9Cw0YLRjCDRgdC60LDQvdC40YDQvtCy0LDQvdC40LVcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblNlY29uZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMSDRgdC10LrRg9C90LTQsCAtINCa0L7QvdC10YYg0YHQutCw0L3QuNGA0L7QstCw0L3QuNGPLCDQvtGC0LTQsNC70LjRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uVGhpcmQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIg0YHQtdC60YPQvdC00YsgLSDQntGC0LTQsNC70LjRgtGM0YHRjywg0LfQsNC60L7QvdGH0LjRgtGMINCy0LXRgNC40YTQuNC60LDRhtC40Y5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEg0YHQtdC60YPQvdC00LAgLSDQmtC+0L3QtdGGINGB0LrQsNC90LjRgNC+0LLQsNC90LjRjywg0L7RgtC00LDQu9C40YLRjNGB0Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uVGhpcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmljYXRpb25Db21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBzZW5kUGhvdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZW5kRmlsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLmNhbnZhcy50b0Jsb2Ioc2VuZEZpbGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1jYW1lcmEtZmVlZFwiPlxyXG4gICAgICAgICAgICAgICAgey8qINCf0LXRgNC10LQg0L7RgtC60YDRi9GC0LjQtdC8INCx0LjQvtC80LXRgtGA0LjQuCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYy1jYW1lcmEtZmVlZF9fcHJlbG9hZCAke3RoaXMuc3RhdGUuaXNQcmVsb2FkID8gJycgOiAnZC1ub25lJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD7QktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0L/RgNC+0LnRgtC4INCy0LXRgNC40YTQuNC60LDRhtC40Y48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN0YXJ0VmVyaWZpY2F0aW9ufT7QndCw0YfQsNGC0Ywg0LLQtdGA0LjRhNC40LrQsNGG0LjRjjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qINCe0YHQvdC+0LLQvdC+0Lkg0LrQvtC80L/QvtC90LXQvdGCINC60LDQvNC10YDRiyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYy1jYW1lcmEtZmVlZC0taG9sZGVyICR7dGhpcy5zdGF0ZS5pc0NhbWVyYVZpc2libGUgJiYgIXRoaXMuc3RhdGUuaXNQcmVsb2FkID8gJycgOiAnZC1ub25lJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtY2FtZXJhLWZlZWRfX3ZpZXdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gcmVmPXtyZWYgPT4gKHRoaXMudmlkZW9QbGF5ZXIgPSByZWYpfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmYWNlLWlkICR7dGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZCA/ICdkLW5vbmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZhY2UtaWRfX2ZyYW1lICR7dGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvblRoaXJkID8gJ3NjYWxlLXNtYWxsZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmYWNlLWlkX19zY2FubmVyICR7dGhpcy5zdGF0ZS5pc1NjYW5uaW5nID8gJycgOiAnZC1ub25lJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZmFjZS1pZF9fdGV4dCAkeyF0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uQ29tcGxldGVkID8gJycgOiAnZC1ub25lJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvblNlY29uZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQo9C70YvQsdC90LjRgtC10YHRjFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uVGhpcmQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCe0YLQtNCw0LvQuNGC0LXRgdGMXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCf0L7QvNC10YHRgtC40YLQtSDQu9C40YbQviDQsiDRgNCw0LzQutGDXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZCA/ICcnIDogJ2Qtbm9uZSd9YH0gb25DbGljaz17dGhpcy50YWtlUGhvdG99PtCh0YTQvtGC0L7Qs9GA0LDRhNC40YDQvtCy0LDRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyog0KTQvtGC0L4g0YDQtdC30YPQu9GM0YLQsNGCICsg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQv9C10YDQtdGB0L3Rj9GC0YwgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGMtY2FtZXJhLWZlZWQtLWhvbGRlciAkeyF0aGlzLnN0YXRlLmlzQ2FtZXJhVmlzaWJsZSAmJiAhdGhpcy5zdGF0ZS5pc1ByZWxvYWQgPyAnJyA6ICdkLW5vbmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1jYW1lcmEtZmVlZF9fc3RhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9XCJjYW52YXNcIiBoZWlnaHQ9XCIxMDAlXCIgcmVmPXtyZWYgPT4gdGhpcy5jYW52YXMgPSByZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRha2VQaG90b0FnYWlufT7Qn9C10YDQtdGB0L3Rj9GC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlbmRQaG90b30+0J7RgtC/0YDQsNCy0LjRgtGMINGE0L7RgtC+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9