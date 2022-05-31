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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showCamera", function () {
      _this.setState({
        isCameraVisible: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sendPhoto", function () {
      var sendFile = _this.props.sendFile;

      _this.canvas.toBlob(sendFile);
    });

    _this.state = {
      isCameraVisible: false,
      isCameraLoading: true,
      isVerificationCompleted: false,
      isScanning: false,
      isVerificationSecond: false,
      isVerificationThird: false
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
        var _this3 = this;

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
                setTimeout(function () {
                  _this3.setState({
                    isCameraLoading: false,
                    isCameraVisible: true
                  });

                  setTimeout(function () {
                    // 2 секунды - Поместить лицо в рамку, начать сканирование
                    _this3.setState({
                      isScanning: true
                    }); // 1 секунда - Конец сканирования, улыбнуться


                    setTimeout(function () {
                      _this3.setState({
                        isScanning: false,
                        isVerificationSecond: true
                      }); // 2 секунды - Улыбнуться, начать сканирование


                      setTimeout(function () {
                        _this3.setState({
                          isVerificationSecond: false,
                          isScanning: true
                        }); // 1 секунда - Конец сканирования, отдалиться


                        setTimeout(function () {
                          _this3.setState({
                            isScanning: false,
                            isVerificationThird: true
                          }); // 2 секунды - Отдалиться, закончить верификацию


                          setTimeout(function () {
                            _this3.setState({
                              isScanning: true
                            }); // 1 секунда - Конец сканирования, отдалиться


                            setTimeout(function () {
                              _this3.setState({
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

              case 5:
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
      var _this4 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "c-camera-feed",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "modelLoader ".concat(this.state.isCameraLoading ? '' : 'd-none')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "c-camera-feed__preload ".concat(this.state.isCameraVisible ? '' : 'd-none'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            children: "\u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            onClick: this.showCamera,
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
                return _this4.videoPlayer = _ref;
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
                return _this4.canvas = _ref2;
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
              onClick: this.showCamera,
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
        lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFGZWVkL0NhbWVyYUZlZWQuanN4Il0sIm5hbWVzIjpbIkNhbWVyYUZlZWQiLCJwcm9wcyIsInNldFN0YXRlIiwiaXNDYW1lcmFWaXNpYmxlIiwiY29udGV4dCIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsInZpZGVvUGxheWVyIiwidmlkZW9XaWR0aCIsImhlaWdodCIsInZpZGVvSGVpZ2h0IiwiZHJhd0ltYWdlIiwic2VuZEZpbGUiLCJ0b0Jsb2IiLCJzdGF0ZSIsImlzQ2FtZXJhTG9hZGluZyIsImlzVmVyaWZpY2F0aW9uQ29tcGxldGVkIiwiaXNTY2FubmluZyIsImlzVmVyaWZpY2F0aW9uU2Vjb25kIiwiaXNWZXJpZmljYXRpb25UaGlyZCIsImRldmljZXMiLCJmb3JFYWNoIiwiZGV2aWNlIiwic2V0RGV2aWNlIiwiZGV2aWNlSWQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInZpZGVvIiwic3JjT2JqZWN0IiwicGxheSIsImVudW1lcmF0ZURldmljZXMiLCJjYW1lcmFzIiwicHJvY2Vzc0RldmljZXMiLCJzZXRUaW1lb3V0Iiwic2hvd0NhbWVyYSIsInJlZiIsInRha2VQaG90byIsInNlbmRQaG90byIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxVQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxvTkF3R1AsWUFBTTtBQUNkLFlBQUtDLFFBQUwsQ0FBYztBQUNWQyx1QkFBZSxFQUFFO0FBRFAsT0FBZDs7QUFJQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsTUFBTCxDQUFZQyxVQUFaLENBQXVCLElBQXZCLENBQWhCOztBQUVBLFlBQUtELE1BQUws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QU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRKLGVBa0JJO0FBQVEscUJBQVMsWUFBSyxLQUFLTCxLQUFMLENBQVdFLHVCQUFYLEdBQXFDLEVBQXJDLEdBQTBDLFFBQS9DLENBQWpCO0FBQTRFLG1CQUFPLEVBQUUsS0FBS3NCLFNBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFnQ0k7QUFBSyxtQkFBUyxrQ0FBMkIsQ0FBQyxLQUFLeEIsS0FBTCxDQUFXWixlQUFaLEdBQThCLEVBQTlCLEdBQW1DLFFBQTlELENBQWQ7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxtQ0FDSTtBQUFRLHVCQUFTLEVBQUMsUUFBbEI7QUFBMkIsb0JBQU0sRUFBQyxNQUFsQztBQUF5QyxpQkFBRyxFQUFFLGFBQUFtQyxLQUFHO0FBQUEsdUJBQUksTUFBSSxDQUFDakMsTUFBTCxHQUFjaUMsS0FBbEI7QUFBQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUsscUJBQVMsRUFBQyxzQ0FBZjtBQUFBLG9DQUNJO0FBQVEscUJBQU8sRUFBRSxLQUFLRCxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQVEscUJBQU8sRUFBRSxLQUFLRyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQTRDSDtBQTlLTDs7QUFBQTtBQUFBLEVBQWdDQyxnREFBaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWdyZWVtZW50cy5lYzE0YTA3ZjkyZDNiNjFlNmI1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhRmVlZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQ2FtZXJhVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzQ2FtZXJhTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgaXNWZXJpZmljYXRpb25Db21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1NjYW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWZXJpZmljYXRpb25TZWNvbmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblRoaXJkOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzZXMgYXZhaWxhYmxlIGRldmljZXMgYW5kIGlkZW50aWZpZXMgb25lIGJ5IHRoZSBsYWJlbFxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBwcm9jZXNzRGV2aWNlcyhkZXZpY2VzKSB7XHJcbiAgICAgICAgZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGV2aWNlKGRldmljZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgZGV2aWNlIGFuZCBzdGFydHMgcGxheWluZyB0aGUgZmVlZFxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhc3luYyBzZXREZXZpY2UoZGV2aWNlKSB7XHJcbiAgICAgICAgY29uc3QgeyBkZXZpY2VJZCB9ID0gZGV2aWNlO1xyXG4gICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuc3JjT2JqZWN0ID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiBmYWxzZSwgdmlkZW86IHtkZXZpY2VJZH19KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnZpZGVvUGxheWVyLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIG1vdW50LCBncmFiIHRoZSB1c2VycyBjb25uZWN0ZWQgZGV2aWNlcyBhbmQgcHJvY2VzcyB0aGVtXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FtZXJhRmVlZFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0RldmljZXMoY2FtZXJhcyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzQ2FtZXJhTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0NhbWVyYVZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIDIg0YHQtdC60YPQvdC00YsgLSDQn9C+0LzQtdGB0YLQuNGC0Ywg0LvQuNGG0L4g0LIg0YDQsNC80LrRgywg0L3QsNGH0LDRgtGMINGB0LrQsNC90LjRgNC+0LLQsNC90LjQtVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMSDRgdC10LrRg9C90LTQsCAtINCa0L7QvdC10YYg0YHQutCw0L3QuNGA0L7QstCw0L3QuNGPLCDRg9C70YvQsdC90YPRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblNlY29uZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAyINGB0LXQutGD0L3QtNGLIC0g0KPQu9GL0LHQvdGD0YLRjNGB0Y8sINC90LDRh9Cw0YLRjCDRgdC60LDQvdC40YDQvtCy0LDQvdC40LVcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblNlY29uZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMSDRgdC10LrRg9C90LTQsCAtINCa0L7QvdC10YYg0YHQutCw0L3QuNGA0L7QstCw0L3QuNGPLCDQvtGC0LTQsNC70LjRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uVGhpcmQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIg0YHQtdC60YPQvdC00YsgLSDQntGC0LTQsNC70LjRgtGM0YHRjywg0LfQsNC60L7QvdGH0LjRgtGMINCy0LXRgNC40YTQuNC60LDRhtC40Y5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEg0YHQtdC60YPQvdC00LAgLSDQmtC+0L3QtdGGINGB0LrQsNC90LjRgNC+0LLQsNC90LjRjywg0L7RgtC00LDQu9C40YLRjNGB0Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uVGhpcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmljYXRpb25Db21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGFraW5nIGEgc3RpbGwgaW1hZ2UgZnJvbSB0aGUgdmlkZW8gZmVlZCBvbiB0aGUgY2FtZXJhXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FtZXJhRmVlZFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHRha2VQaG90byA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDYW1lcmFWaXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMudmlkZW9QbGF5ZXIudmlkZW9XaWR0aFxyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMudmlkZW9QbGF5ZXIudmlkZW9IZWlnaHRcclxuXHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy52aWRlb1BsYXllciwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNob3dDYW1lcmEgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQ2FtZXJhVmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFBob3RvID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2VuZEZpbGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMudG9CbG9iKHNlbmRGaWxlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtY2FtZXJhLWZlZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kZWxMb2FkZXIgJHt0aGlzLnN0YXRlLmlzQ2FtZXJhTG9hZGluZyA/ICcnIDogJ2Qtbm9uZSd9YH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiDQntGB0L3QvtCy0L3QvtC5INC60L7QvNC/0L7QvdC10L3RgiDQutCw0LzQtdGA0YsgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGMtY2FtZXJhLWZlZWRfX3ByZWxvYWQgJHt0aGlzLnN0YXRlLmlzQ2FtZXJhVmlzaWJsZSA/ICcnIDogJ2Qtbm9uZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INC/0YDQvtC50YLQuCDQstC10YDQuNGE0LjQutCw0YbQuNGOPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93Q2FtZXJhfT7QndCw0YfQsNGC0Ywg0LLQtdGA0LjRhNC40LrQsNGG0LjRjjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qINCe0YHQvdC+0LLQvdC+0Lkg0LrQvtC80L/QvtC90LXQvdGCINC60LDQvNC10YDRiyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYy1jYW1lcmEtZmVlZC0taG9sZGVyICR7dGhpcy5zdGF0ZS5pc0NhbWVyYVZpc2libGUgPyAnJyA6ICdkLW5vbmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1jYW1lcmEtZmVlZF9fdmlld2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlbyByZWY9e3JlZiA9PiAodGhpcy52aWRlb1BsYXllciA9IHJlZil9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZhY2UtaWQgJHt0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uQ29tcGxldGVkID8gJ2Qtbm9uZScgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmFjZS1pZF9fZnJhbWUgJHt0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uVGhpcmQgPyAnc2NhbGUtc21hbGxlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZhY2UtaWRfX3NjYW5uZXIgJHt0aGlzLnN0YXRlLmlzU2Nhbm5pbmcgPyAnJyA6ICdkLW5vbmUnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BmYWNlLWlkX190ZXh0ICR7IXRoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25Db21wbGV0ZWQgPyAnJyA6ICdkLW5vbmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uU2Vjb25kID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCj0LvRi9Cx0L3QuNGC0LXRgdGMXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25UaGlyZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J7RgtC00LDQu9C40YLQtdGB0YxcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J/QvtC80LXRgdGC0LjRgtC1INC70LjRhtC+INCyINGA0LDQvNC60YNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uQ29tcGxldGVkID8gJycgOiAnZC1ub25lJ31gfSBvbkNsaWNrPXt0aGlzLnRha2VQaG90b30+0KHRhNC+0YLQvtCz0YDQsNGE0LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiDQpNC+0YLQviDRgNC10LfRg9C70YzRgtCw0YIgKyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC/0LXRgNC10YHQvdGP0YLRjCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYy1jYW1lcmEtZmVlZC0taG9sZGVyICR7IXRoaXMuc3RhdGUuaXNDYW1lcmFWaXNpYmxlID8gJycgOiAnZC1ub25lJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtY2FtZXJhLWZlZWRfX3N0YWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYW52YXMgY2xhc3NOYW1lPVwiY2FudmFzXCIgaGVpZ2h0PVwiMTAwJVwiIHJlZj17cmVmID0+IHRoaXMuY2FudmFzID0gcmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93Q2FtZXJhfT7Qn9C10YDQtdGB0L3Rj9GC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlbmRQaG90b30+0J7RgtC/0YDQsNCy0LjRgtGMINGE0L7RgtC+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9