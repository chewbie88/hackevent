// ==UserScript==
// @name         Hack Event Ranking
// @namespace    https://github.com/chewbie88/hackevent
// @version      0.0.2
// @description  Add column to display ranking
// @author       Chewbie88
// @match        https://advent.missionday.info/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=missionday.info
// @downloadURL  https://github.com/chewbie88/hackevent/ranking.user.js
// @updateURL    https://github.com/chewbie88/hackevent/ranking.meta.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	let nickname;
	$.ajax({
	  url: "https://advent.missionday.info/?agentdata",
	  async: false
	}).done(function(data) {
		  nickname = $(data).find("#agentdata .text-primary").html();
	});

    $(".resume-section.day .card-header .btn").each(function(missionType) {
        const target = $(this).data("target");

        $(target + " table .header").append("<th>N°</th>");
        $(target + " table tbody tr").each(function(index) {
        	if (index < 10) {
	        	$(this).css("background-color", "rgba(0,0,0,.025)");
        	}

	        const currentNickName = $(this).find("td").first().html()
	        if (currentNickName == nickname) {
	        	$(this).css("background-color", "#03fe03");
	        }
            $(this).append("<td>"+(index+1)+"</td>");
        });
    });

})();