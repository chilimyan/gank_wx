'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GirlListItem = function (_wepy$component) {
    _inherits(GirlListItem, _wepy$component);

    function GirlListItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GirlListItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GirlListItem.__proto__ || Object.getPrototypeOf(GirlListItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            gitem: {},
            index: {}
        }, _this.data = {}, _this.methods = {
            previewImage: function previewImage() {
                this.$emit('previewImage', this.index);
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GirlListItem, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return GirlListItem;
}(_wepy2.default.component);

exports.default = GirlListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpcmxJdGVtLmpzIl0sIm5hbWVzIjpbIkdpcmxMaXN0SXRlbSIsInByb3BzIiwiZ2l0ZW0iLCJpbmRleCIsImRhdGEiLCJtZXRob2RzIiwicHJldmlld0ltYWdlIiwiJGVtaXQiLCIkYXBwbHkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsSyxHQUFRO0FBQ0pDLG1CQUFPLEVBREg7QUFFSkMsbUJBQU87QUFGSCxTLFFBSVJDLEksR0FBTyxFLFFBSVBDLE8sR0FBVTtBQUNOQyx3QkFETSwwQkFDUztBQUNYLHFCQUFLQyxLQUFMLENBQVcsY0FBWCxFQUEyQixLQUFLSixLQUFoQztBQUNBLHFCQUFLSyxNQUFMO0FBQ0g7QUFKSyxTOzs7OztpQ0FPRCxDQUNSOzs7O0VBakJxQ0MsZUFBS0MsUzs7a0JBQTFCVixZIiwiZmlsZSI6ImdpcmxJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpcmxMaXN0SXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgICAgZ2l0ZW06IHt9LFxuICAgICAgICBpbmRleDoge30sXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIHByZXZpZXdJbWFnZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3ByZXZpZXdJbWFnZScsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG59XG4iXX0=