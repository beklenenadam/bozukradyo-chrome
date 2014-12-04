'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

var isClicked = false;

function playStream() {
  isClicked = !isClicked;

  soundManager.createSound({
    id: 'bozukradyo',
    url: 'http://178.33.71.254:9992/;stream.nsv'
  });

  if( isClicked ) 
  {
    chrome.browserAction.setIcon({path:"gorsel/dur.png"});
    soundManager.play('bozukradyo');
  } else {
    soundManager.reboot('bozukradyo');
    chrome.browserAction.setIcon({path:"gorsel/oynat.png"});    
  }

}

chrome.browserAction.onClicked.addListener(playStream);
