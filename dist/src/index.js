"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const UserEdit_1 = require("./views/UserEdit");
const user = User_1.User.buildUser({ name: "NAME", age: 20 });
const root = document.getElementById("root");
if (root) {
    const userEdit = new UserEdit_1.UserEdit(root, user);
    userEdit.render();
}
else {
    throw new Error("Root element not found");
}
//# sourceMappingURL=index.js.map