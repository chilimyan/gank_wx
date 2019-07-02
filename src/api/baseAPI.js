import wepy from 'wepy';
import http from '../utils/http'

export default class baseAPI {
    static baseUrl = wepy.$instance.globalData.baseUrl;
    static get = http.get.bind(http);
    static post = http.get.bind(http);
}