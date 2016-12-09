var song;

function preload() {
  song = loadSound('frogs.mp3'); //add sound to the project folder. no spaces in the name.
  console.log("loaded");
}


function setup() {
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event

  serial.list(); // list the serial ports
}



// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    println(i + " " + portList[i]);
  }
}


var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1421'; // fill in your serial port name here
var inData; // for incoming serial data
var shouldIbereading = true;
var interval = 5000;
var lastTime; //var to store millis
var currentTime; //timestamp for the last time it checked activity

function setup() {
  createCanvas(400, 300);
  //t = millis();

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port

}


function serverConnected() {
  println('connected to server.');
}

function portOpen() {
  println('the serial port opened.')
}

function serialEvent() {
  inData = Number(serial.read());
  if (shouldIbereading === true); // the sensor is set to read
  if (inData == 1) { //if there is movement then it checks
    if (!song.isPlaying()) { //if the song is not playing. if it's not playing, then:
      song.play(); //play the song
      shouldIbereading === false; // if the sensor is set not to read
      //update previous time to millis // add the part of the interval updating the previous time to millis 
      //(check notes and lab 3)
      
    if (lastTime() - interval() > interval()) {   

    //} else {}

   // if (t = interval === true) {
      song.stop();
      if (shouldIbereading === true);
      if (inData == 1) {
        if (!song.isPlaying()) {
          song.play();
          shouldIbereading === false;
        

        } else {}
      }
    }
  }
}
}


console.log("notplaying");

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}

function draw() {
  background(0);
  fill(255);
  text("sensor value: " + inData, 30, 30);
  currentTime = millis // this should be here
  if (shouldIbereading === true);
  if (lastTime() - interval() > interval()) { //if t ( millis) minus the previous interval is larger that the previous interval, 
                                     //check again if there is movement - write code!
    if (shouldIbereading === true); // the sensor is set to read (I tried 'true' before with 'inData==0')
  if (inData == 0) {
        if (song.isPlaying()) {
          song.stop();
    

        } else {}
      }
    }
  }



function portClose() {
  println('The serial port closed.');
}