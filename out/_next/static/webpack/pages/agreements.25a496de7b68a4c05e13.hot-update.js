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
              lineNumber: 139,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "face-id ".concat(this.state.isVerificationCompleted ? 'd-none' : ''),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "face-id__frame ".concat(this.state.isVerificationThird ? 'scale-smaller' : ''),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "face-id__scanner ".concat(this.state.isScanning ? '' : 'd-none')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            className: "face-id__text ".concat(!this.state.isVerificationCompleted ? '' : 'd-none'),
            children: this.state.isVerificationSecond ? "Улыбнитесь" : this.state.isVerificationThird ? "Отдалитесь" : "Поместите лицо в рамку"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "".concat(this.state.isVerificationCompleted ? '' : 'd-none'),
            onClick: this.takePhoto,
            children: "\u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
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
              lineNumber: 160,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "d-flex justify-content-between w-100",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              onClick: this.takePhotoAgain,
              children: "\u041F\u0435\u0440\u0435\u0441\u043D\u044F\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              onClick: this.sendPhoto,
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFGZWVkL0NhbWVyYUZlZWQuanN4Il0sIm5hbWVzIjpbIkNhbWVyYUZlZWQiLCJwcm9wcyIsInNldFN0YXRlIiwiaXNDYW1lcmFWaXNpYmxlIiwiY29udGV4dCIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsInZpZGVvUGxheWVyIiwidmlkZW9XaWR0aCIsImhlaWdodCIsInZpZGVvSGVpZ2h0IiwiZHJhd0ltYWdlIiwic2VuZEZpbGUiLCJ0b0Jsb2IiLCJzdGF0ZSIsImlzQ2FtZXJhTG9hZGluZyIsImlzVmVyaWZpY2F0aW9uQ29tcGxldGVkIiwiaXNTY2FubmluZyIsImlzVmVyaWZpY2F0aW9uU2Vjb25kIiwiaXNWZXJpZmljYXRpb25UaGlyZCIsImRldmljZXMiLCJmb3JFYWNoIiwiZGV2aWNlIiwic2V0RGV2aWNlIiwiZGV2aWNlSWQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInZpZGVvIiwic3JjT2JqZWN0IiwicGxheSIsImVudW1lcmF0ZURldmljZXMiLCJjYW1lcmFzIiwicHJvY2Vzc0RldmljZXMiLCJzZXRUaW1lb3V0IiwicmVmIiwidGFrZVBob3RvIiwidGFrZVBob3RvQWdhaW4iLCJzZW5kUGhvdG8iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsVUFBYjtBQUFBOztBQUFBOztBQUNJLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsb05Bd0dQLFlBQU07QUFDZCxZQUFLQyxRQUFMLENBQWM7QUFDVkMsdUJBQWUsRUFBRTtBQURQLE9BQWQ7O0FBSUEsVUFBTUMsT0FBTyxHQUFHLE1BQUtDLE1BQUwsQ0FBWUMsVUFBWixDQUF1QixJQUF2QixDQUFoQjs7QUFFQSxZQUFLRCxNQUFMLENBQVlFLEtBQVosR0FBb0IsTUFBS0MsV0FBTCxDQUFpQkMsVUFBckM7QUFDQSxZQUFLSixNQUFMLENBQVlLLE1BQVosR0FBcUIsTUFBS0YsV0FBTCxDQUFpQkcsV0FBdEM7QUFFQVAsYUFBTyxDQUFDUSxTQUFSLENBQWtCLE1BQUtKLFdBQXZCLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLE1BQUtILE1BQUwsQ0FBWUUsS0FBdEQsRUFBNkQsTUFBS0YsTUFBTCxDQUFZSyxNQUF6RTtBQUNILEtBbkhrQjs7QUFBQSx5TkFxSEYsWUFBTTtBQUNuQixZQUFLUixRQUFMLENBQWM7QUFDVkMsdUJBQWUsRUFBRTtBQURQLE9BQWQ7QUFHSCxLQXpIa0I7O0FBQUEsb05BMkhQLFlBQU07QUFBQSxVQUNOVSxRQURNLEdBQ08sTUFBS1osS0FEWixDQUNOWSxRQURNOztBQUVkLFlBQUtSLE1BQUwsQ0FBWVMsTUFBWixDQUFtQkQsUUFBbkI7QUFDSCxLQTlIa0I7O0FBRWYsVUFBS0UsS0FBTCxHQUFhO0FBQ1RaLHFCQUFlLEVBQUUsS0FEUjtBQUVUYSxxQkFBZSxFQUFFLElBRlI7QUFHVEMsNkJBQXVCLEVBQUUsS0FIaEI7QUFJVEMsZ0JBQVUsRUFBRSxLQUpIO0FBS1RDLDBCQUFvQixFQUFFLEtBTGI7QUFNVEMseUJBQW1CLEVBQUU7QUFOWixLQUFiO0FBRmU7QUFVbEI7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7QUFqQkE7QUFBQTtBQUFBLG1DQWtCbUJDLE9BbEJuQixFQWtCNEI7QUFBQTs7QUFDcEJBLGFBQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxNQUFNLEVBQUk7QUFDdEIsY0FBSSxDQUFDQyxTQUFMLENBQWVELE1BQWY7QUFDSCxPQUZEO0FBR0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQTVCQTtBQUFBO0FBQUE7QUFBQSx5TkE2Qm9CQSxNQTdCcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJnQkUsd0JBOUJoQixHQThCNkJGLE1BOUI3QixDQThCZ0JFLFFBOUJoQjtBQUFBO0FBQUEsdUJBK0IyQ0MsU0FBUyxDQUFDQyxZQUFWLENBQXVCQyxZQUF2QixDQUFvQztBQUFDQyx1QkFBSyxFQUFFLEtBQVI7QUFBZUMsdUJBQUssRUFBRTtBQUFDTCw0QkFBUSxFQUFSQTtBQUFEO0FBQXRCLGlCQUFwQyxDQS9CM0M7O0FBQUE7QUErQlEscUJBQUtqQixXQUFMLENBQWlCdUIsU0EvQnpCO0FBQUE7QUFBQSx1QkFnQ2MsS0FBS3ZCLFdBQUwsQ0FBaUJ3QixJQUFqQixFQWhDZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQW1DSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBMEM4Qk4sU0FBUyxDQUFDQyxZQUFWLENBQXVCTSxnQkFBdkIsRUExQzlCOztBQUFBO0FBMENjQyx1QkExQ2Q7QUEyQ1EscUJBQUtDLGNBQUwsQ0FBb0JELE9BQXBCO0FBRUFFLDBCQUFVLENBQUMsWUFBTTtBQUNiLHdCQUFJLENBQUNsQyxRQUFMLENBQWM7QUFDVmMsbUNBQWUsRUFBRSxLQURQO0FBRVZiLG1DQUFlLEVBQUU7QUFGUCxtQkFBZDs7QUFLQWlDLDRCQUFVLENBQUMsWUFBTTtBQUNiO0FBQ0EsMEJBQUksQ0FBQ2xDLFFBQUwsQ0FBYztBQUNWZ0IsZ0NBQVUsRUFBRTtBQURGLHFCQUFkLEVBRmEsQ0FNYjs7O0FBQ0FrQiw4QkFBVSxDQUFDLFlBQU07QUFDYiw0QkFBSSxDQUFDbEMsUUFBTCxDQUFjO0FBQ1ZnQixrQ0FBVSxFQUFFLEtBREY7QUFFVkMsNENBQW9CLEVBQUU7QUFGWix1QkFBZCxFQURhLENBTWI7OztBQUNBaUIsZ0NBQVUsQ0FBQyxZQUFNO0FBQ2IsOEJBQUksQ0FBQ2xDLFFBQUwsQ0FBYztBQUNWaUIsOENBQW9CLEVBQUUsS0FEWjtBQUVWRCxvQ0FBVSxFQUFFO0FBRkYseUJBQWQsRUFEYSxDQU1iOzs7QUFDQWtCLGtDQUFVLENBQUMsWUFBTTtBQUNiLGdDQUFJLENBQUNsQyxRQUFMLENBQWM7QUFDVmdCLHNDQUFVLEVBQUUsS0FERjtBQUVWRSwrQ0FBbUIsRUFBRTtBQUZYLDJCQUFkLEVBRGEsQ0FNYjs7O0FBQ0FnQixvQ0FBVSxDQUFDLFlBQU07QUFDYixrQ0FBSSxDQUFDbEMsUUFBTCxDQUFjO0FBQ1ZnQix3Q0FBVSxFQUFFO0FBREYsNkJBQWQsRUFEYSxDQUtiOzs7QUFDQWtCLHNDQUFVLENBQUMsWUFBTTtBQUNiLG9DQUFJLENBQUNsQyxRQUFMLENBQWM7QUFDVmdCLDBDQUFVLEVBQUUsS0FERjtBQUVWRSxtREFBbUIsRUFBRSxLQUZYO0FBR1ZILHVEQUF1QixFQUFFO0FBSGYsK0JBQWQ7QUFLSCw2QkFOUyxFQU1QLElBTk8sQ0FBVjtBQU9ILDJCQWJTLEVBYVAsSUFiTyxDQUFWO0FBY0gseUJBckJTLEVBcUJQLElBckJPLENBQVY7QUFzQkgsdUJBN0JTLEVBNkJQLElBN0JPLENBQVY7QUE4QkgscUJBckNTLEVBcUNQLElBckNPLENBQVY7QUFzQ0gsbUJBN0NTLEVBNkNQLElBN0NPLENBQVY7QUE4Q0gsaUJBcERTLEVBb0RQLElBcERPLENBQVY7O0FBN0NSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBb0dJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBeEdBO0FBQUE7QUFBQSw2QkFpSWE7QUFBQTs7QUFDTCwwQkFDSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsd0JBQWlCLEtBQUtGLEtBQUwsQ0FBV0MsZUFBWCxHQUE2QixFQUE3QixHQUFrQyxRQUFuRDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFHSTtBQUFLLG1CQUFTLGtDQUEyQixLQUFLRCxLQUFMLENBQVdaLGVBQVgsR0FBNkIsRUFBN0IsR0FBa0MsUUFBN0QsQ0FBZDtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyx1QkFBZjtBQUFBLG9DQUNJO0FBQU8saUJBQUcsRUFBRSxhQUFBa0MsSUFBRztBQUFBLHVCQUFLLE1BQUksQ0FBQzdCLFdBQUwsR0FBbUI2QixJQUF4QjtBQUFBLGVBQWY7QUFBNkMsbUJBQUssRUFBQyxNQUFuRDtBQUEwRCxvQkFBTSxFQUFDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFLLHVCQUFTLG9CQUFhLEtBQUt0QixLQUFMLENBQVdFLHVCQUFYLEdBQXFDLFFBQXJDLEdBQWdELEVBQTdELENBQWQ7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLDJCQUFvQixLQUFLRixLQUFMLENBQVdLLG1CQUFYLEdBQWlDLGVBQWpDLEdBQW1ELEVBQXZFLENBQWQ7QUFBQSx1Q0FDSTtBQUFLLDJCQUFTLDZCQUFzQixLQUFLTCxLQUFMLENBQVdHLFVBQVgsR0FBd0IsRUFBeEIsR0FBNkIsUUFBbkQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBU0k7QUFBRyxxQkFBUywwQkFBbUIsQ0FBQyxLQUFLSCxLQUFMLENBQVdFLHVCQUFaLEdBQXNDLEVBQXRDLEdBQTJDLFFBQTlELENBQVo7QUFBQSxzQkFFUSxLQUFLRixLQUFMLENBQVdJLG9CQUFYLEdBQ0ksWUFESixHQUVJLEtBQUtKLEtBQUwsQ0FBV0ssbUJBQVgsR0FDSSxZQURKLEdBRUk7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFUSixlQWtCSTtBQUFRLHFCQUFTLFlBQUssS0FBS0wsS0FBTCxDQUFXRSx1QkFBWCxHQUFxQyxFQUFyQyxHQUEwQyxRQUEvQyxDQUFqQjtBQUE0RSxtQkFBTyxFQUFFLEtBQUtxQixTQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBd0JJO0FBQUssbUJBQVMsa0NBQTJCLENBQUMsS0FBS3ZCLEtBQUwsQ0FBV1osZUFBWixHQUE4QixFQUE5QixHQUFtQyxRQUE5RCxDQUFkO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsbUNBQ0k7QUFBUSx1QkFBUyxFQUFDLFFBQWxCO0FBQTJCLG9CQUFNLEVBQUMsTUFBbEM7QUFBeUMsaUJBQUcsRUFBRSxhQUFBa0MsS0FBRztBQUFBLHVCQUFJLE1BQUksQ0FBQ2hDLE1BQUwsR0FBY2dDLEtBQWxCO0FBQUE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFLLHFCQUFTLEVBQUMsc0NBQWY7QUFBQSxvQ0FDSTtBQUFRLHFCQUFPLEVBQUUsS0FBS0UsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFRLHFCQUFPLEVBQUUsS0FBS0MsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFvQ0g7QUF0S0w7O0FBQUE7QUFBQSxFQUFnQ0MsZ0RBQWhDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FncmVlbWVudHMuMjVhNDk2ZGU3YjY4YTRjMDVlMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYUZlZWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0NhbWVyYVZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0NhbWVyYUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTY2FubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uU2Vjb25kOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWZXJpZmljYXRpb25UaGlyZDogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkZXZpY2VzIGFuZCBpZGVudGlmaWVzIG9uZSBieSB0aGUgbGFiZWxcclxuICAgICAqIEBtZW1iZXJvZiBDYW1lcmFGZWVkXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcHJvY2Vzc0RldmljZXMoZGV2aWNlcykge1xyXG4gICAgICAgIGRldmljZXMuZm9yRWFjaChkZXZpY2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERldmljZShkZXZpY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgYWN0aXZlIGRldmljZSBhbmQgc3RhcnRzIHBsYXlpbmcgdGhlIGZlZWRcclxuICAgICAqIEBtZW1iZXJvZiBDYW1lcmFGZWVkXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2V0RGV2aWNlKGRldmljZSkge1xyXG4gICAgICAgIGNvbnN0IHsgZGV2aWNlSWQgfSA9IGRldmljZTtcclxuICAgICAgICB0aGlzLnZpZGVvUGxheWVyLnNyY09iamVjdCA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHthdWRpbzogZmFsc2UsIHZpZGVvOiB7ZGV2aWNlSWR9fSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy52aWRlb1BsYXllci5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBtb3VudCwgZ3JhYiB0aGUgdXNlcnMgY29ubmVjdGVkIGRldmljZXMgYW5kIHByb2Nlc3MgdGhlbVxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYXMgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NEZXZpY2VzKGNhbWVyYXMpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0NhbWVyYUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNDYW1lcmFWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAyINGB0LXQutGD0L3QtNGLIC0g0J/QvtC80LXRgdGC0LjRgtGMINC70LjRhtC+INCyINGA0LDQvNC60YMsINC90LDRh9Cw0YLRjCDRgdC60LDQvdC40YDQvtCy0LDQvdC40LVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDEg0YHQtdC60YPQvdC00LAgLSDQmtC+0L3QtdGGINGB0LrQsNC90LjRgNC+0LLQsNC90LjRjywg0YPQu9GL0LHQvdGD0YLRjNGB0Y9cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmljYXRpb25TZWNvbmQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMiDRgdC10LrRg9C90LTRiyAtINCj0LvRi9Cx0L3Rg9GC0YzRgdGPLCDQvdCw0YfQsNGC0Ywg0YHQutCw0L3QuNGA0L7QstCw0L3QuNC1XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmljYXRpb25TZWNvbmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEg0YHQtdC60YPQvdC00LAgLSDQmtC+0L3QtdGGINGB0LrQsNC90LjRgNC+0LLQsNC90LjRjywg0L7RgtC00LDQu9C40YLRjNGB0Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblRoaXJkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyINGB0LXQutGD0L3QtNGLIC0g0J7RgtC00LDQu9C40YLRjNGB0Y8sINC30LDQutC+0L3Rh9C40YLRjCDQstC10YDQuNGE0LjQutCw0YbQuNGOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxINGB0LXQutGD0L3QtNCwIC0g0JrQvtC90LXRhiDRgdC60LDQvdC40YDQvtCy0LDQvdC40Y8sINC+0YLQtNCw0LvQuNGC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblRoaXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uQ29tcGxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRha2luZyBhIHN0aWxsIGltYWdlIGZyb20gdGhlIHZpZGVvIGZlZWQgb24gdGhlIGNhbWVyYVxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB0YWtlUGhvdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQ2FtZXJhVmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnZpZGVvUGxheWVyLnZpZGVvV2lkdGhcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLnZpZGVvUGxheWVyLnZpZGVvSGVpZ2h0XHJcblxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMudmlkZW9QbGF5ZXIsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0YWtlUGhvdG9BZ2FpbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDYW1lcmFWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZW5kUGhvdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZW5kRmlsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLmNhbnZhcy50b0Jsb2Ioc2VuZEZpbGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1jYW1lcmEtZmVlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RlbExvYWRlciAke3RoaXMuc3RhdGUuaXNDYW1lcmFMb2FkaW5nID8gJycgOiAnZC1ub25lJ31gfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjLWNhbWVyYS1mZWVkLS1ob2xkZXIgJHt0aGlzLnN0YXRlLmlzQ2FtZXJhVmlzaWJsZSA/ICcnIDogJ2Qtbm9uZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWNhbWVyYS1mZWVkX192aWV3ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHJlZj17cmVmID0+ICh0aGlzLnZpZGVvUGxheWVyID0gcmVmKX0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmFjZS1pZCAke3RoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25Db21wbGV0ZWQgPyAnZC1ub25lJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmYWNlLWlkX19mcmFtZSAke3RoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25UaGlyZCA/ICdzY2FsZS1zbWFsbGVyJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmFjZS1pZF9fc2Nhbm5lciAke3RoaXMuc3RhdGUuaXNTY2FubmluZyA/ICcnIDogJ2Qtbm9uZSd9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGZhY2UtaWRfX3RleHQgJHshdGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZCA/ICcnIDogJ2Qtbm9uZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25TZWNvbmQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0KPQu9GL0LHQvdC40YLQtdGB0YxcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvblRoaXJkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQntGC0LTQsNC70LjRgtC10YHRjFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQn9C+0LzQtdGB0YLQuNGC0LUg0LvQuNGG0L4g0LIg0YDQsNC80LrRg1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25Db21wbGV0ZWQgPyAnJyA6ICdkLW5vbmUnfWB9IG9uQ2xpY2s9e3RoaXMudGFrZVBob3RvfT7QodGE0L7RgtC+0LPRgNCw0YTQuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjLWNhbWVyYS1mZWVkLS1ob2xkZXIgJHshdGhpcy5zdGF0ZS5pc0NhbWVyYVZpc2libGUgPyAnJyA6ICdkLW5vbmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1jYW1lcmEtZmVlZF9fc3RhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9XCJjYW52YXNcIiBoZWlnaHQ9XCIxMDAlXCIgcmVmPXtyZWYgPT4gdGhpcy5jYW52YXMgPSByZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRha2VQaG90b0FnYWlufT7Qn9C10YDQtdGB0L3Rj9GC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlbmRQaG90b30+0J7RgtC/0YDQsNCy0LjRgtGMINGE0L7RgtC+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9