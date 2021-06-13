// ==UserScript==
// @name         The Simplest Adblocker
// @namespace    https://kawamoto.no-ip.org/
// @version      1.0
// @description  Just removes all iframes.
// @author       Suguru Kawamoto
// @include      *
// @grant        none
// @updateURL    https://kawamoto.no-ip.org/misc/The%20Simplest%20Adblocker.user.js
// @downloadURL  https://kawamoto.no-ip.org/misc/The%20Simplest%20Adblocker.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    new MutationObserver(function(){
        Array.prototype.forEach.call(document.getElementsByTagName("iframe"), function(e){
            let s = getComputedStyle(e);
            if(s.display != "none" && s.visibility == "visible" && s.opacity > 0 && s.width != 0 && s.height != 0){
                e.src = "about:blank";
                while(e.contentWindow.document.firstChild){
                    e.contentWindow.document.removeChild(e.contentWindow.document.firstChild);
                }
            }
        });
    }).observe(document, {subtree : true, childList : true});
})();