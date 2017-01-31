function runQrPrint(){

	function randomString(length, chars) {
	    var result = '';
	    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
	    return result;
	}





					


	var hashed = "BLITH17" + randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
	console.log(hashed);






	var qrcode = new QRCode(document.getElementById("qrcode"), {
		width : 150,
		height : 150
	});

	qrcode.makeCode(hashed);

	

	document.getElementById("html-filename").value = hashed;


	// document.getElementById("html-options").submit();
	var delayMillis = 2000; //1 second

	setTimeout(function() {
	  document.getElementById("html-fileSaver").click();
	  //your code to be executed after 1 second
	}, delayMillis);

		

}

for (var i=0; i<10;i++){
	setTimeout(function() {
	  runQrPrint();
	}, 1000);
	
}