'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

// let n = 0;

// setInterval(function() {
//   chrome.browserAction.setBadgeText({ text: n + '\'Allo' });
//   n+=1;
// }, 1000);


// console.log('\'Allo \'Allo! Event Page for Browser Action');

 // for (var i = 0; i < views.length; i++) {
 //    var view = views[i];