
import baseAPI from './baseAPI';

export default class GankAPI extends baseAPI {
    /**
     * @Description: 获取今日最新
     */
    static getTodayNews () {
        const url = `${this.baseUrl}/api/today`;
        return this.get(url, {}).then(data => {
            console.log(data);
            return data;
        });
        
    }

    /**
     * @Description: 获取某日数据
     */
    static getDayNews (date) {
        const url = `${this.baseUrl}/api/day/${date}`;
        return this.get(url, {}).then(data => {
            console.log(data);
            return data;
        });
        
    }
    /**
     * @Description: 获取分类数据
     */
    static getCatoryNews (catory, page) {
        const url = `${this.baseUrl}/api/data/${catory}/20/${page}`;
        return this.get(url, {}).then(data => {
            console.log(data);
            return data;
        });
    }
}