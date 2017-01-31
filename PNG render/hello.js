function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

var hashed = "BLITH17" + randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(hashed);


var page = require('webpage').create();
page.open('file:///home/cypher606/Desktop/Github/QR/Final2/index.html?c='+hashed, function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render(hashed+'.png');
  }
  phantom.exit();
});