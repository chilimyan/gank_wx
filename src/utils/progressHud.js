

export default class ProgressHud {
    static isLoading = false;
    static pause = false;
    /**
     * @Description: 弹出成功提示框
     */
    static success(title, duration = 500) {
        wx.showToast({
            title: title,
            icon: 'success',
            duration: 1500,
            mask: true
        });
        if(duration > 0) {
            return new Promise((resolve, reject) => {
                setTimeout(()=> {
                    resolve();
                }, duration);
            });
        }   
    }
    /**
     * @Description: 弹出确认窗口
     */
    static modal (text, title = '提示') {
        return new Promise((resolve, reject) =>{
            wx.showModal({
                title: title,
                content: text,
                showCancel: false,
                success: (result) => {
                    resolve(result);
                },
                fail: (result)=>{
                    reject(result);
                },
            });
        });
    }
    /**
     * @Description: 弹出带取消的确认窗口
     */
    static confirm (text, payload = {}, title = '提示') {
        return new Promise((resolve, reject) => {
            wx.showModal({
                title: title,
                content: text,
                showCancel: true,
                success: (result) => {
                    if(result.confirm){
                        resolve(payload);
                    }else if(result.cancel) {
                        reject(payload);
                    }
                },
                fail: (result)=>{
                    reject(payload);
                },
            });
        })
    }

    static totast (title, onHide, icon = 'success') {
        wx.showToast({
            title: title,
            icon: icon,
            duration: 500,
            mask: true,
        });
        if (onHide) {
            setTimeout(() => {
                onHide();
            }, 500);
        }
    }
    /**
     * @Description:警告框 
     */
    static alert (title) {
        wx.showToast({
            title: title,
            image: '/images/icons/alert.png',
            duration: 500,
            mask: true,
        });
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve();
            }, 500);
        })
    }
    /**
     * @Description: 错误框
     */
    static error (title, onHide) {
        wx.showToast({
            title: title,
            image: '/images/icons/error.png',
            duration: 500,
            mask: true,
        });
        if(onHide) {
            setTimeout(()=> {
                onHide();
            }, 500);
        }
    }
    /**
     * @Description: 弹出加载提示 
     */
    static loading (title = '加载中') {
        if(this.isLoading) {
            return;
        }
        this.isLoading = true;
        if(wx.showLoading) {
            wx.showLoading({
                title: title,
                mask: true,
            });
        }else{
            wx.showNavigationBarLoading();  
        }
    }
    /**
     * @Description: 加载完毕
     */
    static loaded () {
        if (this.isLoading) {
            this.isLoading = false;
            if(wx.hideLoading) {
                wx.hideLoading();
            }else{
                wx.hideNavigationBarLoading();
            }
        }
    }

    static setLoading () {
        this.isLoading = true;
    }

}