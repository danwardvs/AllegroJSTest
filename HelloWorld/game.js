var x = 100,y = 100;
var scene1;
var bobby;

var bobX=600;
var bobY=600;
var flip;
var loop;
var angle;
var h=25;
var w=25;

function draw()
{	
	draw_sprite(canvas,scene1,0,0);
	
	
}

function update()
{
	 draw_sprite( buffer, scene1, 0, 0);
     if(flip==0){draw_sprite(buffer,bobby, 600, 600); flip=1; loop=1;}
	if(flip==1 && loop==0){draw_sprite_h_flip(buffer,bobby, 600, 600); flip=0;}
	loop=0;
	
	angle=angle+5;                      
	rotate_sprite(buffer, bobby, 400, 600, itofix(angle));
	
	stretch_sprite(buffer, bobby, 500, 600, w, h);
	
	stretch_sprite(buffer, bobby, 300, 600, w, 50);
	
	stretch_sprite(buffer, bobby, 200, 600, 50, h);
	
	w++;
	h++;
	
	if(w==75){w=25;}
	if(h==75){h=25;}	
}

function setup(){
	scene1 = load_bmp("scene1.bmp");
	buffer = load_bmp("bobby.bmp");
}

function main()
{
	enable_debug('debug');
	allegro_init_all("game_canvas", 900,680);
	setup();
	ready(function(){
		loop(function(){
			clear_to_color(canvas,makecol(0,0,0));
			update();
			draw();
		},BPS_TO_TIMER(60));
	});
	return 0;
}
END_OF_MAIN();

 