'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'isEmpty',

        /**
         * @Description: 判断字符串是否为空
         */
        value: function isEmpty(str) {
            return str == '' || str == null || str == 'null';
        }
        /**
         * @Description: 判断字符串是否不为空
         */

    }, {
        key: 'isNotEmpty',
        value: function isNotEmpty(str) {
            return !this.isEmpty(str);
        }
        /**
         * @Description: 浮点数求和
         */

    }, {
        key: 'sum',
        value: function sum(numbers) {
            var toFixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            var sum = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var str = _step.value;

                    if (!this.isNumber(str)) {
                        return NaN;
                    }
                    var num = parseFloat(str);
                    if (isNaN(num)) {
                        return NaN;
                    }
                    sum += num;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return sum.toFixed(toFixed);
        }
        /**
         * @Description: 数字判断
         */

    }, {
        key: 'isNumber',
        value: function isNumber(value) {
            var patrn = /^[-+]?\d+(\.\d+)?$/;
            return patrn.test(value);
        }
        /**
         * @Description: 数组判断
         */

    }, {
        key: 'isArray',
        value: function isArray(o) {
            return Object.prototype.toString.call(o) === '[object Array]';
        }
        /**
         * @Description: 格式化日期
         */

    }, {
        key: 'dateFormate',
        value: function dateFormate(date, fmt) {
            var o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'h+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
            return fmt;
        }

        /**
         * @Description: 判断日期是否今天：isToday('2019-07-04')
         */

    }, {
        key: 'isToday',
        value: function isToday(str) {
            var d = new Date(str.replace(/-/g, "/"));
            var todaysDate = new Date();
            if (d.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
                return true;
            } else {
                return false;
            }
        }
    }]);

    return Utils;
}();

exports.default = Utils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwic3RyIiwiaXNFbXB0eSIsIm51bWJlcnMiLCJ0b0ZpeGVkIiwic3VtIiwiaXNOdW1iZXIiLCJOYU4iLCJudW0iLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJ2YWx1ZSIsInBhdHJuIiwidGVzdCIsIm8iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJkYXRlIiwiZm10IiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImdldE1pbGxpc2Vjb25kcyIsInJlcGxhY2UiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwibGVuZ3RoIiwiayIsImQiLCJEYXRlIiwidG9kYXlzRGF0ZSIsInNldEhvdXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQSxLOzs7Ozs7OztBQUNqQjs7O2dDQUdlQyxHLEVBQUs7QUFDaEIsbUJBQU9BLE9BQU8sRUFBUCxJQUFhQSxPQUFPLElBQXBCLElBQTRCQSxPQUFPLE1BQTFDO0FBQ0g7QUFDRDs7Ozs7O21DQUdrQkEsRyxFQUFLO0FBQ25CLG1CQUFPLENBQUMsS0FBS0MsT0FBTCxDQUFhRCxHQUFiLENBQVI7QUFDSDtBQUNEOzs7Ozs7NEJBR1dFLE8sRUFBc0I7QUFBQSxnQkFBYkMsT0FBYSx1RUFBSCxDQUFHOztBQUM3QixnQkFBSUMsTUFBTSxDQUFWO0FBRDZCO0FBQUE7QUFBQTs7QUFBQTtBQUU3QixxQ0FBa0JGLE9BQWxCLDhIQUEyQjtBQUFBLHdCQUFoQkYsR0FBZ0I7O0FBQzNCLHdCQUFJLENBQUMsS0FBS0ssUUFBTCxDQUFjTCxHQUFkLENBQUwsRUFBeUI7QUFDckIsK0JBQU9NLEdBQVA7QUFDSDtBQUNELHdCQUFNQyxNQUFNQyxXQUFXUixHQUFYLENBQVo7QUFDQSx3QkFBSVMsTUFBTUYsR0FBTixDQUFKLEVBQWdCO0FBQ1osK0JBQU9ELEdBQVA7QUFDSDtBQUNERiwyQkFBT0csR0FBUDtBQUNDO0FBWDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWTdCLG1CQUFPSCxJQUFJRCxPQUFKLENBQVlBLE9BQVosQ0FBUDtBQUNIO0FBQ0Q7Ozs7OztpQ0FHZ0JPLEssRUFBTztBQUNuQixnQkFBTUMsUUFBUSxvQkFBZDtBQUNBLG1CQUFPQSxNQUFNQyxJQUFOLENBQVdGLEtBQVgsQ0FBUDtBQUNIO0FBQ0Q7Ozs7OztnQ0FHZUcsQyxFQUFHO0FBQ2QsbUJBQU9DLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkosQ0FBL0IsTUFBc0MsZ0JBQTdDO0FBQ0g7QUFDRDs7Ozs7O29DQUdvQkssSSxFQUFNQyxHLEVBQUs7QUFDM0IsZ0JBQU1OLElBQUk7QUFDUixzQkFBTUssS0FBS0UsUUFBTCxLQUFrQixDQURoQjtBQUVSLHNCQUFNRixLQUFLRyxPQUFMLEVBRkU7QUFHUixzQkFBTUgsS0FBS0ksUUFBTCxFQUhFO0FBSVIsc0JBQU1KLEtBQUtLLFVBQUwsRUFKRTtBQUtSLHNCQUFNTCxLQUFLTSxVQUFMLEVBTEU7QUFNUixzQkFBTUMsS0FBS0MsS0FBTCxDQUFXLENBQUNSLEtBQUtFLFFBQUwsS0FBa0IsQ0FBbkIsSUFBd0IsQ0FBbkMsQ0FORTtBQU9SLHFCQUFLRixLQUFLUyxlQUFMO0FBUEcsYUFBVjtBQVNBLGdCQUFJLE9BQU9mLElBQVAsQ0FBWU8sR0FBWixDQUFKLEVBQXNCQSxNQUFNQSxJQUFJUyxPQUFKLENBQVlDLE9BQU9DLEVBQW5CLEVBQXVCLENBQUNaLEtBQUthLFdBQUwsS0FBcUIsRUFBdEIsRUFBMEJDLE1BQTFCLENBQWlDLElBQUlILE9BQU9DLEVBQVAsQ0FBVUcsTUFBL0MsQ0FBdkIsQ0FBTjtBQUN0QixpQkFBSyxJQUFJQyxDQUFULElBQWNyQixDQUFkLEVBQWlCO0FBQ2Ysb0JBQUksSUFBSWdCLE1BQUosQ0FBVyxNQUFNSyxDQUFOLEdBQVUsR0FBckIsRUFBMEJ0QixJQUExQixDQUErQk8sR0FBL0IsQ0FBSixFQUF5Q0EsTUFBTUEsSUFBSVMsT0FBSixDQUFZQyxPQUFPQyxFQUFuQixFQUF3QkQsT0FBT0MsRUFBUCxDQUFVRyxNQUFWLElBQW9CLENBQXJCLEdBQTJCcEIsRUFBRXFCLENBQUYsQ0FBM0IsR0FBb0MsQ0FBQyxPQUFPckIsRUFBRXFCLENBQUYsQ0FBUixFQUFjRixNQUFkLENBQXFCLENBQUMsS0FBS25CLEVBQUVxQixDQUFGLENBQU4sRUFBWUQsTUFBakMsQ0FBM0QsQ0FBTjtBQUMxQztBQUNELG1CQUFPZCxHQUFQO0FBQ0g7O0FBRUQ7Ozs7OztnQ0FHZW5CLEcsRUFBSTtBQUNmLGdCQUFJbUMsSUFBSSxJQUFJQyxJQUFKLENBQVNwQyxJQUFJNEIsT0FBSixDQUFZLElBQVosRUFBaUIsR0FBakIsQ0FBVCxDQUFSO0FBQ0EsZ0JBQUlTLGFBQWEsSUFBSUQsSUFBSixFQUFqQjtBQUNBLGdCQUFHRCxFQUFFRyxRQUFGLENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEtBQXVCRCxXQUFXQyxRQUFYLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLENBQXhCLEVBQTBCLENBQTFCLENBQTFCLEVBQXVEO0FBQ25ELHVCQUFPLElBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBTyxLQUFQO0FBQ0g7QUFDSjs7Ozs7O2tCQTFFZ0J2QyxLIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAgIC8qKlxuICAgICAqIEBEZXNjcmlwdGlvbjog5Yik5pat5a2X56ym5Liy5piv5ZCm5Li656m6XG4gICAgICovXG4gICAgc3RhdGljIGlzRW1wdHkoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIgPT0gJycgfHwgc3RyID09IG51bGwgfHwgc3RyID09ICdudWxsJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDliKTmlq3lrZfnrKbkuLLmmK/lkKbkuI3kuLrnqbpcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNOb3RFbXB0eShzdHIpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRW1wdHkoc3RyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDmta7ngrnmlbDmsYLlkoxcbiAgICAgKi9cbiAgICBzdGF0aWMgc3VtKG51bWJlcnMsIHRvRml4ZWQgPSAyKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHN0ciBvZiBudW1iZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc051bWJlcihzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgICAgICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgc3VtICs9IG51bTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VtLnRvRml4ZWQodG9GaXhlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBEZXNjcmlwdGlvbjog5pWw5a2X5Yik5patXG4gICAgICovXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHBhdHJuID0gL15bLStdP1xcZCsoXFwuXFxkKyk/JC87XG4gICAgICAgIHJldHVybiBwYXRybi50ZXN0KHZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDmlbDnu4TliKTmlq1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNBcnJheShvKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBEZXNjcmlwdGlvbjog5qC85byP5YyW5pel5pyfXG4gICAgICovXG4gICAgc3RhdGljIGRhdGVGb3JtYXRlIChkYXRlLCBmbXQpIHtcbiAgICAgICAgY29uc3QgbyA9IHtcbiAgICAgICAgICAnTSsnOiBkYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgICdkKyc6IGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICAgICdoKyc6IGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAnbSsnOiBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAncysnOiBkYXRlLmdldFNlY29uZHMoKSxcbiAgICAgICAgICAncSsnOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLFxuICAgICAgICAgICdTJzogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKVxuICAgICAgICB9O1xuICAgICAgICBpZiAoLyh5KykvLnRlc3QoZm10KSkgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpICsgJycpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xuICAgICAgICBmb3IgKGxldCBrIGluIG8pIHtcbiAgICAgICAgICBpZiAobmV3IFJlZ0V4cCgnKCcgKyBrICsgJyknKS50ZXN0KGZtdCkpIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKFJlZ0V4cC4kMS5sZW5ndGggPT0gMSkgPyAob1trXSkgOiAoKCcwMCcgKyBvW2tdKS5zdWJzdHIoKCcnICsgb1trXSkubGVuZ3RoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmbXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDliKTmlq3ml6XmnJ/mmK/lkKbku4rlpKnvvJppc1RvZGF5KCcyMDE5LTA3LTA0JylcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNUb2RheShzdHIpe1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHN0ci5yZXBsYWNlKC8tL2csXCIvXCIpKTtcbiAgICAgICAgdmFyIHRvZGF5c0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZihkLnNldEhvdXJzKDAsMCwwLDApID09IHRvZGF5c0RhdGUuc2V0SG91cnMoMCwwLDAsMCkpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59Il19