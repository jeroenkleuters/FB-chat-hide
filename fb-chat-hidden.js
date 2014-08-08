/**
 * Description: Show or hide Facebook chat windows
 * Autor: Jeroen Kleuters
 * Date: 8-8-2014
 */

var storage = chrome.storage.local,
    className = 'fbDockChatTabFlyout',
      cssVal = '',
      cssHide = ['All chats are hidden','.fbDockChatTabFlyout{ display:none !important }', 1],
      cssShow = ['All chats are shown', '.fbDockChatTabFlyout{ display:block !important }', 0],
      message = document.querySelector('#message');

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

document.addEventListener('DOMContentLoaded', function () {
   storage.get({hidden: ''}, function(e){
      if (e.hidden == 1 ) {
        setDisplayValue(cssShow);
      } else {
        setDisplayValue(cssHide);
      }                            
   })   
});