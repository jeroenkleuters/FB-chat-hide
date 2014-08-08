// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * 
 *
 * @type {string}
 */
var storage = chrome.storage.local;

var className = 'fbDockChatTabFlyout',
      cssVal = '',
      cssHide = ['All chats are hidden','.fbDockChatTabFlyout{ display:none !important }', 1],
      cssShow = ['All chats are shown', '.fbDockChatTabFlyout{ display:block !important }', 0]


var message = document.querySelector('#message');

function setDisplayValue(cssVal){
   chrome.tabs.insertCSS({code: cssVal[1]}, function() {
      if (chrome.runtime.lastError) {
         message.innerText = 'Not allowed to inject CSS into special page.';
      } else {
         storage.set({'hidden': cssVal[2]}, function() {
            message.innerText = cssVal[0];
         });        
      }
   });
}


// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
   //toggleVisibility(className);
   storage.get({hidden: ''}, function(e){
      // To avoid checking items.css we could specify storage.get({css: ''}) to
      // return a default value of '' if there is no css value yet.
      if (e.hidden == 1 ) {
        setDisplayValue(cssShow);
      } else {
        setDisplayValue(cssHide);
      }                            
   })
   
});
