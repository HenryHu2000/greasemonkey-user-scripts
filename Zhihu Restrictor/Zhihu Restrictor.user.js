// ==UserScript==
// @name                Zhihu Restrictor
// @description	        restrict number of answers shown in Zhihu
// @include		https://www.zhihu.com/
// @include		https://www.zhihu.com/question/*
// ==/UserScript==

var maximumAnswers = 5;

function deleteAnswers() {
	var answerList = document.getElementsByClassName("AnswerItem");
	if (answerList.length > maximumAnswers) {
		for (var i = answerList.length - 1; i >= maximumAnswers; i--) {
			var elmDeleted = answerList[i];
			elmDeleted.parentNode.removeChild(elmDeleted);
		}
	}
}

setInterval(deleteAnswers, 1000);
