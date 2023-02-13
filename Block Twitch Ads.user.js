(function() {
    'use strict';

    // Your code here...
})();// ==UserScript==
// @name        Block Twitch Ads
// @namespace   http://www.example.com/
// @match     https://www.twitch.tv/*
// @version     1
// @description  try to take over the world!
// @grant       none
// ==/UserScript==

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeName === "DIV") {
        if (node.className && node.className.includes("ad-slot")) {
          node.remove();
        }
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });