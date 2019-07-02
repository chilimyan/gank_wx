'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inaver = function (_wepy$component) {
  _inherits(Inaver, _wepy$component);

  function Inaver() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Inaver);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Inaver.__proto__ || Object.getPrototypeOf(Inaver)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      background: {
        type: String,
        default: '#353535'
      },
      colorTheme: {
        type: String,
        default: 'white'
      },
      showBack: {
        type: Boolean,
        default: true
      },
      protectCapsule: {
        type: Boolean,
        default: true
      },
      toBack: {
        type: Boolean,
        default: true
      },
      checkCompatibility: {
        type: Boolean,
        default: true
      },
      smartBack: {
        type: Boolean,
        default: true
      }
    }, _this.computed = {
      getColor: function getColor() {
        if (this.colorTheme === 'black') {
          return '#000';
        } else {
          return '#FFF';
        }
      },
      getCompatibility: function getCompatibility() {
        if (!this.checkCompatibility) {
          return true;
        }
        if (this._compareVersion(_wepy2.default.getSystemInfoSync().version, '6.6.0') === -1) {
          return false;
        }
        return true;
      },
      getSmartShowBack: function getSmartShowBack() {
        var _currentPages = getCurrentPages();
        if (this.smartBack && this.showBack) {
          if (_currentPages.length === 1) {
            return false;
          }
          return true;
        }
        return this.showBack;
      }
    }, _this.watch = {}, _this.data = {}, _this.methods = {
      goBack: function goBack() {
        if (this.toBack) {
          _wepy2.default.navigateBack();
        }
        this.$emit('back');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Inaver, [{
    key: '_compareVersion',
    value: function _compareVersion(v1, v2) {
      v1 = v1.split('.');
      v2 = v2.split('.');
      var len = Math.max(v1.length, v2.length);

      while (v1.length < len) {
        v1.push('0');
      }
      while (v2.length < len) {
        v2.push('0');
      }

      for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i]);
        var num2 = parseInt(v2[i]);

        if (num1 > num2) {
          return 1;
        } else if (num1 < num2) {
          return -1;
        }
      }

      return 0;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Inaver;
}(_wepy2.default.component);

exports.default = Inaver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluYXZlci5qcyJdLCJuYW1lcyI6WyJJbmF2ZXIiLCJwcm9wcyIsImJhY2tncm91bmQiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImNvbG9yVGhlbWUiLCJzaG93QmFjayIsIkJvb2xlYW4iLCJwcm90ZWN0Q2Fwc3VsZSIsInRvQmFjayIsImNoZWNrQ29tcGF0aWJpbGl0eSIsInNtYXJ0QmFjayIsImNvbXB1dGVkIiwiZ2V0Q29sb3IiLCJnZXRDb21wYXRpYmlsaXR5IiwiX2NvbXBhcmVWZXJzaW9uIiwid2VweSIsImdldFN5c3RlbUluZm9TeW5jIiwidmVyc2lvbiIsImdldFNtYXJ0U2hvd0JhY2siLCJfY3VycmVudFBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwid2F0Y2giLCJkYXRhIiwibWV0aG9kcyIsImdvQmFjayIsIm5hdmlnYXRlQmFjayIsIiRlbWl0IiwidjEiLCJ2MiIsInNwbGl0IiwibGVuIiwiTWF0aCIsIm1heCIsInB1c2giLCJpIiwibnVtMSIsInBhcnNlSW50IiwibnVtMiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVk7QUFDVkMsY0FBTUMsTUFESTtBQUVWQyxpQkFBUztBQUZDLE9BRE47QUFLTkMsa0JBQVk7QUFDVkgsY0FBTUMsTUFESTtBQUVWQyxpQkFBUztBQUZDLE9BTE47QUFTTkUsZ0JBQVU7QUFDUkosY0FBTUssT0FERTtBQUVSSCxpQkFBUztBQUZELE9BVEo7QUFhTkksc0JBQWdCO0FBQ2ROLGNBQU1LLE9BRFE7QUFFZEgsaUJBQVM7QUFGSyxPQWJWO0FBaUJOSyxjQUFRO0FBQ05QLGNBQU1LLE9BREE7QUFFTkgsaUJBQVM7QUFGSCxPQWpCRjtBQXFCTk0sMEJBQW9CO0FBQ2xCUixjQUFNSyxPQURZO0FBRWxCSCxpQkFBUztBQUZTLE9BckJkO0FBeUJOTyxpQkFBVztBQUNUVCxjQUFNSyxPQURHO0FBRVRILGlCQUFTO0FBRkE7QUF6QkwsSyxRQXdEUlEsUSxHQUFXO0FBQ1RDLGdCQUFVLG9CQUFZO0FBQ3BCLFlBQUksS0FBS1IsVUFBTCxLQUFvQixPQUF4QixFQUFpQztBQUMvQixpQkFBTyxNQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sTUFBUDtBQUNEO0FBQ0YsT0FQUTtBQVFUUyx3QkFBa0IsNEJBQVk7QUFDNUIsWUFBSSxDQUFDLEtBQUtKLGtCQUFWLEVBQThCO0FBQzVCLGlCQUFPLElBQVA7QUFDRDtBQUNELFlBQUksS0FBS0ssZUFBTCxDQUFxQkMsZUFBS0MsaUJBQUwsR0FBeUJDLE9BQTlDLEVBQXVELE9BQXZELE1BQW9FLENBQUMsQ0FBekUsRUFBNEU7QUFDMUUsaUJBQU8sS0FBUDtBQUNEO0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FoQlE7QUFpQlRDLHdCQUFrQiw0QkFBWTtBQUM1QixZQUFJQyxnQkFBZ0JDLGlCQUFwQjtBQUNBLFlBQUksS0FBS1YsU0FBTCxJQUFrQixLQUFLTCxRQUEzQixFQUFxQztBQUNuQyxjQUFJYyxjQUFjRSxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCLG1CQUFPLEtBQVA7QUFDRDtBQUNELGlCQUFPLElBQVA7QUFDRDtBQUNELGVBQU8sS0FBS2hCLFFBQVo7QUFDRDtBQTFCUSxLLFFBNEJYaUIsSyxHQUFRLEUsUUFFUkMsSSxHQUFPLEUsUUFJUEMsTyxHQUFVO0FBQ1JDLGNBQVEsa0JBQVk7QUFDbEIsWUFBSSxLQUFLakIsTUFBVCxFQUFpQjtBQUNmTyx5QkFBS1csWUFBTDtBQUNEO0FBQ0QsYUFBS0MsS0FBTCxDQUFXLE1BQVg7QUFDRDtBQU5PLEs7Ozs7O29DQTVETUMsRSxFQUFJQyxFLEVBQUk7QUFDdEJELFdBQUtBLEdBQUdFLEtBQUgsQ0FBUyxHQUFULENBQUw7QUFDQUQsV0FBS0EsR0FBR0MsS0FBSCxDQUFTLEdBQVQsQ0FBTDtBQUNBLFVBQUlDLE1BQU1DLEtBQUtDLEdBQUwsQ0FBU0wsR0FBR1AsTUFBWixFQUFvQlEsR0FBR1IsTUFBdkIsQ0FBVjs7QUFFQSxhQUFPTyxHQUFHUCxNQUFILEdBQVlVLEdBQW5CLEVBQXdCO0FBQ3RCSCxXQUFHTSxJQUFILENBQVEsR0FBUjtBQUNEO0FBQ0QsYUFBT0wsR0FBR1IsTUFBSCxHQUFZVSxHQUFuQixFQUF3QjtBQUN0QkYsV0FBR0ssSUFBSCxDQUFRLEdBQVI7QUFDRDs7QUFFRCxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosR0FBcEIsRUFBeUJJLEdBQXpCLEVBQThCO0FBQzVCLFlBQUlDLE9BQU9DLFNBQVNULEdBQUdPLENBQUgsQ0FBVCxDQUFYO0FBQ0EsWUFBSUcsT0FBT0QsU0FBU1IsR0FBR00sQ0FBSCxDQUFULENBQVg7O0FBRUEsWUFBSUMsT0FBT0UsSUFBWCxFQUFpQjtBQUNmLGlCQUFPLENBQVA7QUFDRCxTQUZELE1BRU8sSUFBSUYsT0FBT0UsSUFBWCxFQUFpQjtBQUN0QixpQkFBTyxDQUFDLENBQVI7QUFDRDtBQUNGOztBQUVELGFBQU8sQ0FBUDtBQUNEOzs7NkJBa0NRLENBQ1I7Ozs7RUExRmlDdkIsZUFBS3dCLFM7O2tCQUFwQnpDLE0iLCJmaWxlIjoiaW5hdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluYXZlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnIzM1MzUzNSdcbiAgICAgIH0sXG4gICAgICBjb2xvclRoZW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3doaXRlJ1xuICAgICAgfSxcbiAgICAgIHNob3dCYWNrOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBwcm90ZWN0Q2Fwc3VsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9LFxuICAgICAgdG9CYWNrOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBjaGVja0NvbXBhdGliaWxpdHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNtYXJ0QmFjazoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIF9jb21wYXJlVmVyc2lvbih2MSwgdjIpIHtcbiAgICAgIHYxID0gdjEuc3BsaXQoJy4nKVxuICAgICAgdjIgPSB2Mi5zcGxpdCgnLicpXG4gICAgICB2YXIgbGVuID0gTWF0aC5tYXgodjEubGVuZ3RoLCB2Mi5sZW5ndGgpXG5cbiAgICAgIHdoaWxlICh2MS5sZW5ndGggPCBsZW4pIHtcbiAgICAgICAgdjEucHVzaCgnMCcpXG4gICAgICB9XG4gICAgICB3aGlsZSAodjIubGVuZ3RoIDwgbGVuKSB7XG4gICAgICAgIHYyLnB1c2goJzAnKVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBudW0xID0gcGFyc2VJbnQodjFbaV0pXG4gICAgICAgIHZhciBudW0yID0gcGFyc2VJbnQodjJbaV0pXG5cbiAgICAgICAgaWYgKG51bTEgPiBudW0yKSB7XG4gICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfSBlbHNlIGlmIChudW0xIDwgbnVtMikge1xuICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBnZXRDb2xvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jb2xvclRoZW1lID09PSAnYmxhY2snKSB7XG4gICAgICAgICAgcmV0dXJuICcjMDAwJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnI0ZGRidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldENvbXBhdGliaWxpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrQ29tcGF0aWJpbGl0eSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBhcmVWZXJzaW9uKHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS52ZXJzaW9uLCAnNi42LjAnKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGdldFNtYXJ0U2hvd0JhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IF9jdXJyZW50UGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKVxuICAgICAgICBpZiAodGhpcy5zbWFydEJhY2sgJiYgdGhpcy5zaG93QmFjaykge1xuICAgICAgICAgIGlmIChfY3VycmVudFBhZ2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0JhY2tcbiAgICAgIH1cbiAgICB9XG4gICAgd2F0Y2ggPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdvQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50b0JhY2spIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZW1pdCgnYmFjaycpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=