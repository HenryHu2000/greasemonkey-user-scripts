// ==UserScript==
// @name                Stack Exchange Restrictor
// @description	        restrict number of answers shown in Stack Exchange
// @include		https://*.stackexchange.com/
// @include		https://*.stackexchange.com/*
// ==/UserScript==

var maximumAnswers = 5;

function deleteAnswers() {
	var answerList = document.getElementsByClassName("answer");
	if (answerList.length > maximumAnswers) {
		for (var i = answerList.length - 1; i >= maximumAnswers; i--) {
			var elmDeleted = answerList[i];
			elmDeleted.parentNode.removeChild(elmDeleted);
		}
	}
}

setInterval(deleteAnswers, 1000);
