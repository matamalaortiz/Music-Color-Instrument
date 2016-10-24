var serial; // variable to hold an instance of the serialport library
var fromSerial = 0; //variable to hold the data
var sensorValue;

function preload() {
  clap = loadSound('assets/clap.mp3');
  snare = loadSound('assets/snare.mp3');

}

function setup() { 
  createCanvas(400, 400);
  serial = new p5.SerialPort(); // make a new instance of  serialport librar	
	serial.on('list', printList); // callback function for serialport list event
	serial.on('data', serialEvent); // callback for new data coming in	
	serial.list(); // list the serial ports
	serial.open("/dev/cu.usbmodemFA131"); // open a port

  // mySound.setVolume(0.1);
  // mySound.play();
  

} 

function draw() { 
  background(220);


}

// get the list of ports:
function printList(portList) {
	for (var i = 0; i < portList.length; i++) {
		// Display the list the console:
		println(i + " " + portList[i]);
	}
}

function serialEvent() {
	var inString = serial.readLine();
	if (inString.length > 0) {
	  inString = inString.trim();
    sensorValue = inString;
    if(sensorValue > 197 && sensorValue < 201){
    	// if(!clap.isPlaying()){
    		clap.play();
			 // } else {
        // clap.pause();
				}
    }else if (sensorValue > 56 && sensorValue < 158) {
    	// if(!snare.isPlaying()){
    		snare.play();
			 // } else {
        // snare.pause();
       	}
		// }
    // println(sensorValue);
    
    
	// }
}