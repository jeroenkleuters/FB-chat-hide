// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */
var className = '.fbDockChatTabFlyout';

function toggle_visibility(className) {
   console.log('test');
   var elements = getElementsByClassName(document, className),
       n = elements.length;
   for (var i = 0; i < n; i++) {
     var e = elements[i];

     if(e.style.display == 'block') {
       //e.style.display = 'none !important';
       e.style.height = '28px';
     } else {
       e.style.display = 'block !important';
     }
  }
}

function getElementsByClassName(node,classname) {
   if (node.getElementsByClassName) { // use native implementation if available
       return node.getElementsByClassName(classname);
     } else {
      return (function getElementsByClass(searchClass,node) {
          if ( node == null )
            node = document;
          var classElements = [],
              els = node.getElementsByTagName("*"),
              elsLen = els.length,
              pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;
  
          for (i = 0, j = 0; i < elsLen; i++) {
            if ( pattern.test(els[i].className) ) {
                classElements[j] = els[i];
                j++;
            }
          }
          return classElements;
      })(classname, node);
   }
}

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
   toggle_visibility(className);
});
