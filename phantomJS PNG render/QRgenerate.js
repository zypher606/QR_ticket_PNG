function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}








function renderPageToPng(){
	var hashed = "BLITH17" + randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
	console.log(hashed);


	var page = require('webpage').create();

	page.viewportSize = {
	  width: 1366,
	  height: 587
	};	
		
		
		


	
	page.open('file:///home/cypher606/Desktop/Github/QR_ticket_PNG/Ticket%20Template/index.html?QRgencode='+hashed, function(status) {
	  console.log("Status: " + status);
	  if(status === "success") {
	    page.render('./tickets/'+hashed+'.png');
	  }
	  // phantom.exit();
	});

}


var i=0;
function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      renderPageToPng();        //  your code here
      i++;                     //  increment the counter
      if (i <= 10) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      } 
      else{
      	phantom.exit();
      }                       //  ..  setTimeout()
   }, 3000)
}

myLoop();





