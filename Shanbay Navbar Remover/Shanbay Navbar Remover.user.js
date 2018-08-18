// ==UserScript==
// @name                Shanbay Navbar Remover
// @description	        remove navbar at shanbay.com
// @include		https://www.shanbay.com/bdc/review/
// ==/UserScript==

var intervalId;

function deleteNavbar() {
	var header = document.getElementsByClassName("bdc-learning-header")[0];
	if (header == undefined || header.innerText != "⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅ 扇贝单词 ⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅") {
		clearInterval(intervalId);
		var taskDone = document.getElementsByClassName("task-done")[0];
		if (taskDone == undefined || taskDone.innerText != "今日单词任务已完成") {
			var elmDeleted = document.getElementById("main-navbar");
			elmDeleted.parentNode.removeChild(elmDeleted);
			document.getElementsByClassName("main-body")[0].style.backgroundColor = "#f5faf5";
		}
	}
}

window.onload = function () {
	intervalId = setInterval(deleteNavbar, 1000);
};
