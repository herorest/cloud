var config = require('./config')
var path = require('path')
var express = require('express')
var webpack = require('webpack')

var port = '8001';

var app = express()

app.use(express.static('./assets'));
module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
})
