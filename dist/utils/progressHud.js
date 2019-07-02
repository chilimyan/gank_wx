'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressHud = function () {
    function ProgressHud() {
        _classCallCheck(this, ProgressHud);
    }

    _createClass(ProgressHud, null, [{
        key: 'success',

        /**
         * @Description: 弹出成功提示框
         */
        value: function success(title) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

            wx.showToast({
                title: title,
                icon: 'success',
                duration: 1500,
                mask: true
            });
            if (duration > 0) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve();
                    }, duration);
                });
            }
        }
        /**
         * @Description: 弹出确认窗口
         */

    }, {
        key: 'modal',
        value: function modal(text) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';

            return new Promise(function (resolve, reject) {
                wx.showModal({
                    title: title,
                    content: text,
                    showCancel: false,
                    success: function success(result) {
                        resolve(result);
                    },
                    fail: function fail(result) {
                        reject(result);
                    }
                });
            });
        }
        /**
         * @Description: 弹出带取消的确认窗口
         */

    }, {
        key: 'confirm',
        value: function confirm(text) {
            var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '提示';

            return new Promise(function (resolve, reject) {
                wx.showModal({
                    title: title,
                    content: text,
                    showCancel: true,
                    success: function success(result) {
                        if (result.confirm) {
                            resolve(payload);
                        } else if (result.cancel) {
                            reject(payload);
                        }
                    },
                    fail: function fail(result) {
                        reject(payload);
                    }
                });
            });
        }
    }, {
        key: 'totast',
        value: function totast(title, onHide) {
            var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';

            wx.showToast({
                title: title,
                icon: icon,
                duration: 500,
                mask: true
            });
            if (onHide) {
                setTimeout(function () {
                    onHide();
                }, 500);
            }
        }
        /**
         * @Description:警告框 
         */

    }, {
        key: 'alert',
        value: function alert(title) {
            wx.showToast({
                title: title,
                image: '/images/icons/alert.png',
                duration: 500,
                mask: true
            });
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 500);
            });
        }
        /**
         * @Description: 错误框
         */

    }, {
        key: 'error',
        value: function error(title, onHide) {
            wx.showToast({
                title: title,
                image: '/images/icons/error.png',
                duration: 500,
                mask: true
            });
            if (onHide) {
                setTimeout(function () {
                    onHide();
                }, 500);
            }
        }
        /**
         * @Description: 弹出加载提示 
         */

    }, {
        key: 'loading',
        value: function loading() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';

            if (this.isLoading) {
                return;
            }
            this.isLoading = true;
            if (wx.showLoading) {
                wx.showLoading({
                    title: title,
                    mask: true
                });
            } else {
                wx.showNavigationBarLoading();
            }
        }
        /**
         * @Description: 加载完毕
         */

    }, {
        key: 'loaded',
        value: function loaded() {
            if (this.isLoading) {
                this.isLoading = false;
                if (wx.hideLoading) {
                    wx.hideLoading();
                } else {
                    wx.hideNavigationBarLoading();
                }
            }
        }
    }, {
        key: 'setLoading',
        value: function setLoading() {
            this.isLoading = true;
        }
    }]);

    return ProgressHud;
}();

ProgressHud.isLoading = false;
ProgressHud.pause = false;
exports.default = ProgressHud;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzSHVkLmpzIl0sIm5hbWVzIjpbIlByb2dyZXNzSHVkIiwidGl0bGUiLCJkdXJhdGlvbiIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsIm1hc2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ0ZXh0Iiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJzdWNjZXNzIiwicmVzdWx0IiwiZmFpbCIsInBheWxvYWQiLCJjb25maXJtIiwiY2FuY2VsIiwib25IaWRlIiwiaW1hZ2UiLCJpc0xvYWRpbmciLCJzaG93TG9hZGluZyIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImhpZGVMb2FkaW5nIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwicGF1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7O0FBR2pCOzs7Z0NBR2VDLEssRUFBdUI7QUFBQSxnQkFBaEJDLFFBQWdCLHVFQUFMLEdBQUs7O0FBQ2xDQyxlQUFHQyxTQUFILENBQWE7QUFDVEgsdUJBQU9BLEtBREU7QUFFVEksc0JBQU0sU0FGRztBQUdUSCwwQkFBVSxJQUhEO0FBSVRJLHNCQUFNO0FBSkcsYUFBYjtBQU1BLGdCQUFHSixXQUFXLENBQWQsRUFBaUI7QUFDYix1QkFBTyxJQUFJSyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQywrQkFBVyxZQUFLO0FBQ1pGO0FBQ0gscUJBRkQsRUFFR04sUUFGSDtBQUdILGlCQUpNLENBQVA7QUFLSDtBQUNKO0FBQ0Q7Ozs7Ozs4QkFHY1MsSSxFQUFvQjtBQUFBLGdCQUFkVixLQUFjLHVFQUFOLElBQU07O0FBQzlCLG1CQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBb0I7QUFDbkNOLG1CQUFHUyxTQUFILENBQWE7QUFDVFgsMkJBQU9BLEtBREU7QUFFVFksNkJBQVNGLElBRkE7QUFHVEcsZ0NBQVks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LEs7QUFERnZCLFcsQ0FFVjRCLEssR0FBUSxLO2tCQUZFNUIsVyIsImZpbGUiOiJwcm9ncmVzc0h1ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0h1ZCB7XG4gICAgc3RhdGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHN0YXRpYyBwYXVzZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBEZXNjcmlwdGlvbjog5by55Ye65oiQ5Yqf5o+Q56S65qGGXG4gICAgICovXG4gICAgc3RhdGljIHN1Y2Nlc3ModGl0bGUsIGR1cmF0aW9uID0gNTAwKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gICBcbiAgICB9XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDlvLnlh7rnoa7orqTnqpflj6NcbiAgICAgKi9cbiAgICBzdGF0aWMgbW9kYWwgKHRleHQsIHRpdGxlID0gJ+aPkOekuicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgY29udGVudDogdGV4dCxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBEZXNjcmlwdGlvbjog5by55Ye65bim5Y+W5raI55qE56Gu6K6k56qX5Y+jXG4gICAgICovXG4gICAgc3RhdGljIGNvbmZpcm0gKHRleHQsIHBheWxvYWQgPSB7fSwgdGl0bGUgPSAn5o+Q56S6Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgY29udGVudDogdGV4dCxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmNvbmZpcm0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0LmNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiAocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyB0b3Rhc3QgKHRpdGxlLCBvbkhpZGUsIGljb24gPSAnc3VjY2VzcycpIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvbkhpZGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uSGlkZSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBARGVzY3JpcHRpb2466K2m5ZGK5qGGIFxuICAgICAqL1xuICAgIHN0YXRpYyBhbGVydCAodGl0bGUpIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9pY29ucy9hbGVydC5wbmcnLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBARGVzY3JpcHRpb246IOmUmeivr+ahhlxuICAgICAqL1xuICAgIHN0YXRpYyBlcnJvciAodGl0bGUsIG9uSGlkZSkge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ljb25zL2Vycm9yLnBuZycsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKG9uSGlkZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICBvbkhpZGUoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDlvLnlh7rliqDovb3mj5DnpLogXG4gICAgICovXG4gICAgc3RhdGljIGxvYWRpbmcgKHRpdGxlID0gJ+WKoOi9veS4rScpIHtcbiAgICAgICAgaWYodGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGlmKHd4LnNob3dMb2FkaW5nKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgIFxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBEZXNjcmlwdGlvbjog5Yqg6L295a6M5q+VXG4gICAgICovXG4gICAgc3RhdGljIGxvYWRlZCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHd4LmhpZGVMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHNldExvYWRpbmcgKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgfVxuXG59Il19