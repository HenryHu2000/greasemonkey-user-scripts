// ==UserScript==
// @name                Quora Restrictor
// @description	        restrict number of answers shown in Quora
// @include		https://www.quora.com/
// @include		https://www.quora.com/*
// ==/UserScript==

var maximumAnswers = 5;

function deleteAnswers() {
	var answerList = document.getElementsByClassName("Answer");
	if (answerList.length > maximumAnswers) {
		for (var i = answerList.length - 1; i >= maximumAnswers; i--) {
			var elmDeleted = answerList[i];
			elmDeleted.parentNode.removeChild(elmDeleted);
		}
	}
}

setInterval(deleteAnswers, 1000);
