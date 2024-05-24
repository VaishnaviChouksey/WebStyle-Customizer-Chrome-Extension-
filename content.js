chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'apply1') {
      applyFont(message.font);
    }
    
    if (message.action === 'apply2') {
      applyColor(message.color);
    }

    if (message.action === 'apply3') {
      applyHeadingFont(message.headingFont);
    }

    if (message.action === 'apply4') {
      applyHeadingColor(message.headingColor);
    }

    if (message.action === 'apply5') {
      applyBackgroundColor(message.backgroundColor);
    }
  });


function applyFont(font) { 
 document.body.style.fontFamily = font;
}

function applyColor(color) { 
    document.body.style.color = color;
}

function applyHeadingFont(headingFont) {
  var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7, h8');
 headings.forEach(function(heading) {
   heading.style.fontFamily = headingFont;
 });
// }
}

function applyHeadingColor(headingColor) {
  var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7, h8');
 headings.forEach(function(heading) {
   heading.style.color = headingColor;
 });
}

function applyBackgroundColor(backgroundColor) {
  document.body.style.backgroundColor = backgroundColor;
}


