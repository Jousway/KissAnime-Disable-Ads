// ==UserScript==
// @name            KissAnime Disable Ads
// @namespace       https://github.com/Jousway/KissAnime-Disable-Ads
// @updateURL       https://github.com/Jousway/KissAnime-Disable-Ads/raw/master/KissAnimeRemoveAds.user.js
// @downloadURL     https://github.com/Jousway/KissAnime-Disable-Ads/raw/master/KissAnimeRemoveAds.user.js
// @description     Disable anoying KissAnime Ads
// @include         http://kissanime.com/*
// @include         http://kissanime.to/*
// @include         http://kissmanga.com/*
// @include         http://kisscartoon.me/*
// @include         https://kissanime.to/*
// @include         http://kissanime.ru/*
// @include         http://kissanime.se/*
// @include         http://kissasian.com/*
// @version         1.4
// @grant           none
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB+CAYAAADsphmiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAEZ0FNQQAAsY58+1GTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAA8VSURBVHja7J15fFTVFce/d5hENiFsBkoyQlFUFNyxigpai0vdlaIoVkBQ0IjiQt1FrdWKILWI1Qof0Wo/oCJiqRWxuGArAgKCFBFBEUkQgUAQAgnpH+dMCWmWuW+ZvJl5v8/nfSDJvPvm3d8595577jnnGq5uT5ohCjQB2gM/BY7Vn48BDNBWr+pQAnyp/18CFOu/a/X3JcDu9Oosk/Lv0Bw4HOgNnAS0A1rrFbVsqyUQ0/+fXuVvG4HvgQ3Ax8Ac4BP9fcrCMCDlRoBGwMFAf6AH0LEWjfYbm4CvgPnAa8BHwPbUEoCBKSEAWUAv4ArgZOBAB9qdDHyjU8YLwEydMgIuAIMCLQAdgSHA+UCXFBupVgPvAuOAz4IrANe0D953ghOBu3WIb5biNsouYAHwGPA3/TkwiASM+IuAecD7wNlpQD5Atgr0azo9FKgdE5BOHxyIEeAC1fjjyAysBJ7Uq54FYEi9CsCxwAigH5mJWcB4YHr9CcC19SIAOcBdwGBdx2cyKoCXgfvY64RKogBcl3QB6AfciThvQuxFITAW+H1yBWBo0gSgNfA4cFXIda34BzASWJyMhyXLFdwDeBo4IsmduUUNriJgIVAKrK/jnlygIdBVhfYwoE0Sv/OZwFHAbYhDKeUFoAB4KAlLujJdQs5GnDBrgKWI/94NWiBOqI5AB2S/wW//RC4wGeimtpJvvgPDDb5NAc11ThvgY0cVAW+q32ABsCxJWpqPuKSPBi5Bdh39whzgGmCVPwJQ0N4vCX5VNcVrlAJ/Bf6unVNUz3N2E+DniLNngL6711gD/ArZffRYAG70XAAOVYKO9LjdL4E3gEk6tAcRuSoEfZD4Ay/xA3AZ8I63AjDcUwHoCkxRIfAKi4CJeqXKVmtUp4bBOjp4hWJdRs/0TgBu8kwAzlCHRmuP2ou7S5/RYT9V0Rfxdnb3qL09wA3ABG8E4GZPBKAn4s5s7pGUTwBG67CXDsgGhgI3I7EMXmAw8Gf3AjDCtQAcqpZ4J4+cIHepRZ+OaAs8ijfOsBJk99SVTRDBgIvrCAzTMHRy2c5mDCMxnIVhgcu2gnwVYvg1hiswrHTZVlMMr2A41007hlsdjwCtgLnAIS4l+VPgWj+WOAFHC2CaTp9usAUJl3PkOo46DAkxau27JX+SzovFZB6y8SYwJAd4Hdla32QvAM5cwWP5/7BpG+xGdgRHk5nIV7upm0ftdVDfy1m6SkgYDTilme28cT6GJ1zMO9t1Dnwujef62q58DG9i6OZxu50wGAxzbO6zHQHydV3uFFvVAp4ear4vuAP4J+IiT3QKSFgCDLI96dTXvR4J754fku8bspBdxCOBzV4bgQUuLNbtwMCQfF/Jr/yscYn6Ggz35CVqZCzG2R54CXBlOOwnhfzKOE+f68kqYKJD8isQF2hIfvIxXu2B7W6ngL7AaQ6/xEPAixlKfhsPyC9D4ir6Org3pv1/c20fqssVnIVhlMNlyTQMv8vQpV4bDDNdLvUqMAzBcBmGRxy2MRBDXm2fqUsARmI4xMGD12O4AcOODCb/OJfkD8YwSX8eZbu+16sZhvG1+wFqngIaAde5mPe/y9BhfybuUtwqkK3e5yr9bicSA/Aesgdjg95IZPNy2yngFgztHUjdOAzTQ813pfnVeUmXYbjDQZsNMTxa827gw3k1af9KpM6ODb5DImU3hJrvieZXRQPgbez3YXYiMYrLE10FjHBAPsCtIfm+kQ9Qrlb9x0jySqJoCDyCZGHXOQVkYbjawVAzG8OUDBv22/o87Fd3LcHwpIPn9MTQLhEj8HSchXfdrxKaSZr/Du6TXBPR/Kp4HLgau5S15og7/866RoDhuq1oI12vYpibgQbf4S7bGeRwW7yoruVdDdclmH05N4zJqyrVXyBRJjboiaRnhXN+4hikLnY3buZPLZeF5bosfLemEeAaDDkOPH4fhEs9a82f6LKNtRiesrynAYaCmmyACM5KtbygVmyo+cnR/MqYAtwO7GdxTzyzeWvVESAXQ8xSopZjeCvU/KRqfuVrKYaXHLzLqdWNAH2w3/IdA+wINT/pml8Zf8I+Bf8qNFYgHg9gkGRGG+zJAMMv6OSjRvsG4ACLe45Bwsd2x0eAbPZWyU4UnwNfpzH5LZF4e7fkX+8j+SCxf68jJXUTRTsgD1gdtwE6qFfLZi55GkNpms75LTHMwHCSy3aud2CpO7met/x8Ywy9KtsAF1r6liuwCD1OQc2fgdQCcqv5TyXpO69EsqtssrMvBibFbYDelg/8Jk2H/1QkH6QQ1mwlNVEcDGRFiRDFPtZ/DilQCz9DyI/jDUsBaAU0jmJoqC9vg3dD8gNFPkjdpAqd5RNBDtApSoQ8JFXZZvm3KCQ/UOQDrENCwJsm+Pko0C2KoaulAViK5KSnA3KV/ONdtFGBxOs9Vc/vsgX4FrsCXcdFiXCYA4NjUxqQ3wJJWDneZTu3BoB8kLCvpZYC0CWKoaMDB1BJGpA/EzjBZTvD8Khal0dYCFxq8fkmUSJ0cPCQdCD/Z2lGvhNumkaJ0Njypu0h+YEkPz4N2CA7iqGz5U3zQ/IDST5IXcUyEj9TsVWUiF1NGVLz7NxMID++RLdawTgpEmVC8tMH0UCdHOg9WiKHNYbkZ6AANEWiXtySX5Cu5IsAGJOu5M9ADnFwgxHAH9N5iEzHESBOfi8PyB9LmiOKoYHPlmZIfvJgG54fiRJhHXaRJEcSzGigUPPF6LVR6K1RDIXIsWiJok1IfmDRyHKZXhIlYr212zUkP7CwPahrV5QIy7ALJfoJ4mosC8AL5yAh0W5r7t+SJgafbWh/cRTDGsubDtaO3xgA8qd6QP4dSIZTqsMg5XlssCZKhBXYxZI1VjtgYwDIP8MDzU8H8kFc3rbBPSuiGFYg2SWJBoZmIZkly0PyA4U22NV1qADmRYlQjOSW2UQGn0n9RAaH5NeMziS+DQySSLIkiqGMBGvLV8IFwL0k90DHkPzacbHl5zcB26JEqAA+ws5v3lGngTUh+YFAE+wLen8LlMaTQ1/BUGaRXJiN4ZQkJWrmYJiK4QyX7dyCYUyaJrN2xnCg5T1vYqiIbwYtRcKJbFLELkTKw/iJ5qHmJ4Qelp8vj9tw8YigH5HMEhsB6I0chVro00vtj5wr6Jb8B9Kc/P2QAhQ2KIyv4uIjwB4keMLmzPumwMnAKz6R/zxyNq5b8u8jvdEZOMrynsWq9PsUiZqCYbflPHKjlh7zcj7bXwseXOSynQcw3JcBBawud3DPjL2FIhfkV3bwLFWJssGpwAeh5tcL8lSbbXw4m5Hd38LKNgBIuPf7DgTgMo8EICTfHudin9r/RWW7zbAov/IfuwALsMsW3okUUloWkp9UtAD+hf0B3gPVuKaqDQCGz/VkCtsTKa53MYc1C+d8R1dfB+c5FVYt6V9dUOiLyFHkNhgA/AH4jwMP1tMeaP6YDNL8+ApsuIP75lIlt7O6cvHPqqTYjgLDLO9pomVOL3epCWPVy5dJB1X0x3Co5T2l1Y2Qhs/zq5OUCdifGLYHCcv6IEHNfwk5TNoNHkQ2pTIJ7ZA08LYOtP/kqr80LK9WAHJ1OM+xfMh7yFZxaUi+bxgH3OjA9XsWcsJJFQFYkV/TTX/BWfn424HHQvJ9wTnqsbVN55pPDaVwDF/k1zbULMcuZwCkevgJwGch+Z4v+/7twE9TDpwNzKruj5E6jn992YGB0khr4u9fjcF3vkvj50EM92bgoZRGjd3ODu79GMOsmg+OXJVfm/Tk6ijQwoHEPoGccdcYeDnUfFcYhhwHb4synftn1/QBw1f5dTVyt3a+E/TTeetKlx3wCBK+nYk4GvhQFckWb1DNYZH7CsDqOgUgC1iCXf25yktDt/nHjyO1+DIRB+i839HBvcXImYbravtQIunhu4GbgLccfImQfOfIAaY5JD/ed+vq+pDhm/xEG5wM9E9iB2Qy+QZxyfdzeP8iXfaV1f2gtQkLQAv1QHUIyfed/GexD/OK40fgFBIsGmlTIWQzcAVSGyArJN8XZCFu+EEu2vgNFhVDDd/ZJpQyysflWCaT3xJ4DXfJrjOBX9oNN+utBSCiBuEvQvI9w2FIQIybyuWrgO5YVnI3FMacSusCj+yBciV/ZIaS31MNvjwXbexAdvqsC3kbimJOH3oMsvXb2GUHrEBq+W3JQPLvBm7D/sTWquivQuTA4vw+5ubB5yLZQTkuX2ABEuEyN0OIPwgYTR1eugRQodOm48QXw8aY25fph2wdu0UJstf9IMnNOk42hqgh3daDtly7yA0/xLx4qaF4d2zKQn2xqWlG/InAPcjWrBeYgBxUVeFOADbFvHpBL4UAYAqyA5bqB1QfotNbfxI/0SsR8od50ZBhc8zLlx2K1Nb1qgBtOfBqigpCnPjLPbCRKmM8ckoZ3gjAlpjXL34OEvnT3MM244IwFdkgKQ8w8b0Qj+mlHhOPEj/eywYNxTE/OuEC4Ekg34e2P9KVxxzs8xD8Qi6SLt8HOM+H9repsTfe64YNW2N+dcrRwETsU5cTxU4k4GEWEq+wkOQWr+yi73iaLodzfXrOWuTMgul+NG7YFvOzk1qrYdgnCYQsQXzpq4DVSKZzsUdtN1HCD0K8n70Rz1vU53f6UIf9xX49wFASS4a2FAAP4d7jZYP1KgTzkKKWxUARe49W2wn/K5LZCUlQRQ3Y9oiHsy3i8eyGfRlWtxgN3AXs8vMhhu1Je68eiMeqe4AMtvjGScsAfaeVwP1qSPsOw49JFexsZCt5uIdr4nTCZCSxpihZDzTsiNXHi/ZAXL6nhZwDUlvh4WRp/b4CsDNWny9eAFyLRK9mIjYg6fFjqafdUENprL47IUfXuP2RdLRMwDZdsYzSFUu9wbArFpROyUVO7UhnQYgT/1s19uodht2xoHVSLpKHcAlyOEU6YD0Sr/doUIgPsgDE0QgpHTNM1+KNUoz0MvVDTFbjriiIX9JQFkuFzuykU8NFOio0CjDpq4G3gWeQFPmKIHesoTyWSloVQVKl+iPu2HzcBVN6gc06rM9DEjpWkEIRTYY9KSUAVdEcqVF4uvoW2iHuW79cztt1Pi8EPkEqbn9KAjl4oQAkB/sBrdSv0B3ZjOqGuHqz9arL7Vui1x5kD2E18DUSuLpE1+4706XD/jsAxVUd05Ep9qwAAAAASUVORK5CYII=
// ==/UserScript==

function adrm(div) {
    var rmad = document.getElementById(div);
    if (rmad) {
       setTimeout(function(){
          rmad.src = "no";
          rmad.parentNode.removeChild(rmad);
       }, 100);
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

replac("barTitle","Remove ads","KissAnime Disable Ads 1.4");
replac("title","Remove Ads","Get Script");
$("a[href='/Message/GoPremium']").attr('href', 'https://github.com/Jousway/KissAnime-Disable-Ads/raw/master/KissAnimeRemoveAds.user.js')

var adbtn = document.getElementsByClassName("divCloseBut");

for(var d = 0; d < adbtn.length; d++) {
    adbtn[d].style.visibility="hidden";
}

for(var i = 0; i < 9; i++) {
    adrm("adsIfrme"+i);
    adrm("divAds"+i);
}

//adrm("adsIfrme10")
setTimeout(function(){
    var rm10 = document.getElementById("adsIfrme10");
    rm10.parentNode.removeChild(rm10);
}, 2100);

for(var i = 11; i < 50; i++) {
    adrm("adsIfrme"+i);
    adrm("divAds"+i);
}

adrm("divFloatLeft");
adrm("divFloatRight");
adrm("divAds");

//adrm("adsIfrme10")
setTimeout(function(){
    var rm10 = document.getElementById("adsIfrme10");
    rm10.parentNode.removeChild(rm10);
}, 2100);

for(var i = 11; i < 50; i++) {
    adrm("adsIfrme"+i);
    adrm("divAds"+i);
}

adrm("divFloatLeft");
adrm("divFloatRight");
adrm("divAds");
