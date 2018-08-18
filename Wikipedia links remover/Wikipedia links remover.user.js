// ==UserScript==
// @name                Wikipedia links remover
// @description	        remove all the links in a Wikipedia page content
// @include		https://*.wikipedia.org/wiki/*
// @exclude     https://en.wikipedia.org/wiki/Special:*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

$("#mw-content-text a:not(#toc a)").attr("href", window.location.href);

$("#mw-content-text a:not(#toc a)").css("cursor","text");
$("#mw-content-text a:not(#toc a)").css("color","black");
$("#mw-content-text a:not(#toc a)").css("text-decoration","none");
