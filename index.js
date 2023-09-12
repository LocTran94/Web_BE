"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router_1 = require("./src/router/router");
var body_parser_1 = require("body-parser");
var data_source_1 = require("./src/data-source");
var cors_1 = require("cors");
var http = require('http');
var app = (0, express_1["default"])();
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);
data_source_1.AppDataSource.initialize().then(function () {
    console.log('database connected');
});
// app.get('/home/message', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });
//
// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });
// });
app.use((0, cors_1["default"])());
app.use(express_1["default"].static('./public'));
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use('', router_1.router);
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
