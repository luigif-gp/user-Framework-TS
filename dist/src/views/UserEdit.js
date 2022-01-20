"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEdit = void 0;
const View_1 = require("./View");
const UserShow_1 = require("./UserShow");
const UserForm_1 = require("./UserForm");
class UserEdit extends View_1.View {
    regionsMap() {
        return {
            userShow: ".user-show",
            userForm: ".user-form",
        };
    }
    onRender() {
        new UserShow_1.UserShow(this.regions.userShow, this.model).render();
        new UserForm_1.UserForm(this.regions.userForm, this.model).render();
    }
    template() {
        return `
        <div>
         <div class="user-show"></div>
        <div class="user-form"></div>
        </div>
        `;
    }
}
exports.UserEdit = UserEdit;
//# sourceMappingURL=UserEdit.js.map