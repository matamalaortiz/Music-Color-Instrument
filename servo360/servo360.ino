

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 0;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  pinMode(3,OUTPUT);
  Serial.begin(9600);


}

void loop() {
 // delay(50);
  int sensorValue = analogRead(A0);
  int mappedSensor = map(sensorValue, 0, 1023, 20,225);

  if (mappedSensor > 193 && mappedSensor < 204) {
//    tone(3, 523, 20);
  } //Play Red
  else if (mappedSensor > 155 && mappedSensor < 164 ) {
//    tone(3, 494, 20);
  }//Play Red
  
  Serial.println(mappedSensor);// waits for the servo to get there

}



