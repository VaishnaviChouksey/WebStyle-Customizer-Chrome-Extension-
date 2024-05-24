document.getElementById('applyBtn1').addEventListener('click', function() {
  var font = document.getElementById('font').value;
  chrome.runtime.sendMessage({
    action: 'apply1',
    font: font
  });
});

document.getElementById('applyBtn2').addEventListener('click', function() {
  var color = document.getElementById('color').value;
  chrome.runtime.sendMessage({
    action: 'apply2',
    color:color
  });
});

document.getElementById('applyBtn3').addEventListener('click', function() {
  var headingFont = document.getElementById('headingFont').value;
  chrome.runtime.sendMessage({
    action: 'apply3',
    headingFont: headingFont
  });
});

document.getElementById('applyBtn4').addEventListener('click', function() {
  var headingColor = document.getElementById('headingColor').value;
  chrome.runtime.sendMessage({
    action: 'apply4',
    headingColor: headingColor
  });
});

document.getElementById('applyBtn5').addEventListener('click', function() {
  var backgroundColor = document.getElementById('backgroundColor').value;
  chrome.runtime.sendMessage({
    action: 'apply5',
    backgroundColor: backgroundColor
  });
});




