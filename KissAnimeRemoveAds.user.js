// ==UserScript==
// @name        KissAnime Disable Ads
// @namespace   https://github.com/Jousway/KissAnime-Disable-Ads
// @description Disable anoying KissAnime Ads
// @include     http://kissanime.com/*
// @include     http://kissmanga.com/*
// @include     http://kisscartoon.me/*
// @version     1.2
// @grant       none
// ==/UserScript==

function adrm(div) {
    var rmad = document.getElementById(div);
    if (rmad) {
        rmad.parentNode.removeChild(rmad);
    }
}

function replac(clas,sor,rel) {
    var cnt = document.getElementsByClassName(clas);
    for(var o = 0; o < cnt.length; o++) {
       var rep = cnt[o].innerHTML;
       var res = rep.replace(sor,rel);
       cnt[o].innerHTML = res;
    }
}

replac("barTitle","\nRemove ads","KissAnime Disable Ads 1.2");
replac("title","Remove Ads","Get Script");
$("a[href='/Message/GoPremium']").attr('href', 'https://github.com/Jousway/KissAnime-Disable-Ads/raw/master/KissAnimeRemoveAds.user.js')

var adbtn = document.getElementsByClassName("divCloseBut");

for(var d = 0; d < adbtn.length; d++) {
    adbtn[d].style.visibility="hidden";
}

for(var i = 0; i < 50; i++) {
    adrm("adsIfrme"+i);
    adrm("divAds"+i);
}

adrm("divFloatLeft");
adrm("divFloatRight");
adrm("divAds");





