import * as types from './mutation-types';
import cookie from "../assets/js/cookie";

// 类似于事件 每个mutation都有字符类型的事件类型和回调函数
//全局引入vue
import Vue from 'vue';
import Axios from 'axios';

Vue.prototype.$http = Axios;


export default {
    [types.SET_INFO](state) {
        state.userInfo = {
            name: cookie.getCookie('name'),
            token: cookie.getCookie('token')
        };
        self.console.log(state.userInfo);
    },
}
