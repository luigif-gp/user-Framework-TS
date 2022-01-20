"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSync = void 0;
const axios_1 = require("axios");
class ApiSync {
    constructor(rootUrl) {
        this.rootUrl = rootUrl;
    }
    fetch(id) {
        return axios_1.default.get(`${this.rootUrl}/${id}`);
    }
    save(data) {
        const { id } = data;
        if (id) {
            return axios_1.default.put(`${this.rootUrl}/${id}`, data);
        }
        else {
            return axios_1.default.post(this.rootUrl, data);
        }
    }
}
exports.ApiSync = ApiSync;
//# sourceMappingURL=ApiSync.js.map