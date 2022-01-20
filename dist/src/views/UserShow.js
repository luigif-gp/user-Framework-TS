"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserShow = void 0;
const View_1 = require("./View");
class UserShow extends View_1.View {
    template() {
        return `
        <div>
        <h1>User Details</h1>
        <div>User Name: ${this.model.get("name")} </div>
        <div>User age: ${this.model.get("age")} </div>
        </div>
        `;
    }
}
exports.UserShow = UserShow;
//# sourceMappingURL=UserShow.js.map