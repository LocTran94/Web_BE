"use strict";
exports.__esModule = true;
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var user_1 = require("./model/user");
var post_1 = require("./model/post");
var provision_1 = require("./model/provision");
var order_1 = require("./model/order");
var personal_1 = require("./model/personal");
var comment_1 = require("./model/comment");
var message_1 = require("./model/message");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "123456",
    database: "love",
    synchronize: true,
    logging: false,
    entities: [user_1.User, post_1.Post, provision_1.Provision, order_1.Orders, personal_1.Personal, comment_1.Comment, message_1.Message]
});
