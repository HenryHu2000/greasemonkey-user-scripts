// ==UserScript==
// @name                Twitter Restrictor
// @description	        restrict number of answers shown in Twitter
// @include		https://twitter.com/
// @include		https://twitter.com/*
// ==/UserScript==

var maximumAnswers = 20;

function deleteAnswers() {
	var originalTweets = Array.from(document.getElementsByClassName("original-tweet"));
	var conversationTweets = Array.from(document.getElementsByClassName("conversation-tweet"));

	var answerList = originalTweets.concat(conversationTweets);
	if (answerList.length > maximumAnswers) {
		for (var i = answerList.length - 1; i >= maximumAnswers; i--) {
			var elmDeleted = answerList[i];
			elmDeleted.parentNode.removeChild(elmDeleted);
		}
	}
}

setInterval(deleteAnswers, 1000);
