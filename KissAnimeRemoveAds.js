// ==UserScript==
// @name        KissAnime Disable Ads
// @namespace   https://github.com/Jousway/KissAnime-Disable-Ads
// @description Disable anoying KissAnime Ads
// @include     http://kissanime.com/*
// @version     1
// @grant       none
// ==/UserScript==

var divsToHide = document.getElementsByClassName("divCloseBut");

for(var d = 0; d < divsToHide.length; d++) {
    divsToHide[d].style.visibility="hidden";
}

for(var i = 0; i < 200; i++) {
    ifdef = document.getElementById("adsIfrme"+i);
    if (ifdef) {
        ifdef.width="0";
        ifdef.height="0"; 
    }
}