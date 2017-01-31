const testFolder = './tickets/';
const fs = require('fs');
const json2xls = require('json2xls');



function writerQrList(jsonData) {
	var xls = json2xls(jsonData);
	var currentDate = new Date();
	fs.writeFileSync(currentDate + '.xlsx', xls, 'binary');
}


var i =1;


fs.readdir(testFolder, (err, files) => {

	var fileLIst = [];
	files.forEach(file => {
	  	var res = file.split(".");
	    var myObject = {
	    	'Serial No.': i.toString(),
	    	'QR code': res[0]
	    };
	    // console.log(myObject);
	    fileLIst.push(myObject);
	    i++
	});
	console.log(fileLIst);
	writerQrList(fileLIst);
});


