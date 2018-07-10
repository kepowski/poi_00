let myFont;

function preload() {
  myFont = loadFont('alarm clock.ttf');
}

function mousePressed() {

    var fs = fullscreen();
    fullscreen(!fs);

}

function setup() {
  createCanvas(450, 300);
  background(0);
  fill('#ED225D');

  textFont(myFont);
  textSize(128);
  frameRate(1);
}
//http://api.openweathermap.org/data/2.5/weather?lat=50.104313&lon=18.543773&appid=76d3ed9ada7f2f84e193f85d2edb4284
let current_time = '88:88';
let current_date = '88.88.8888'
let current_time_width = 0;

let l_hour = 0;
let l_minute = 0;
let l_second = 0;
let l_day = 0;
let l_month = 0;
let l_year = 0;

function draw() {

  background(0);
  //get time
  l_hour = hour();
  l_minute = minute();
  l_second = second();
	current_time = l_hour + ':' + l_minute;

	l_day = day();
  l_month =  month();
  l_year = year();
	current_date = l_day+'.'+l_month+'.'+l_year;

  //Draw time (text)
	strokeWeight(0);
  if (current_time.length == 5) {
    current_time_width = 375;
  } else {
    current_time_width = 255;
  }
	fill('#ED225D');
	textSize(128);
  text(current_time, width / 2 - current_time_width / 2, 170);

  //draw Seconds (line)

	strokeWeight(10);
	stroke(30, 0, 0);
	line(70, 185, 400, 185 );
	strokeWeight(8);
	stroke('#ED225D');
	line(70, 185, map(l_second, 0, 60, 70, 400), 185 );


	//Show date
	strokeWeight(0);
	textSize(32);
	fill('#FFAAAA');
	text(current_date, 10, 30);

}
