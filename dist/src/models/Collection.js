"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const Eventing_1 = require("./Eventing");
const axios_1 = require("axios");
class Collection {
    constructor(rootUrl, deserialize) {
        this.rootUrl = rootUrl;
        this.deserialize = deserialize;
        this.models = [];
        this.events = new Eventing_1.Eventing();
    }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    fetch() {
        axios_1.default.get(this.rootUrl).then((response) => {
            response.data.forEach((value) => {
                this.models.push(this.deserialize(value));
            });
            this.trigger('change');
        });
    }
}
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map