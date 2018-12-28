/*
* @Author: Zihao Tao
* @Date:   2018-11-06 21:04:25
* @Last Modified by:   Zihao Tao
* @Last Modified time: 2018-12-27 19:24:14
*/
'use strict';
require('./index.css');
// header
var header = {
    init : function(){
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        $('.mail').click(function() {
            $('.m').show();
            $('.fa-envelope').hide();
            _this.unScroll();
        });

        $('.fa-times').click(function() {
            $('.m').hide();
            $('.fa-envelope').show();
            _this.scroll();
        });
    
    },
    unScroll : function() {
        $('body').css('overflow','hidden');
    },
    scroll : function() {
        $('body').css('overflow','scroll');
    }
};
header.init();