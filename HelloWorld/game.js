var x = 100,y = 100;
var scene1;
var bobby;

var bobX=600;
var bobY=600;
var flip=0;
var angle=0;
var h=25;
var w=25;

function draw()
{	
	draw_sprite(canvas,scene1,0,0);
	
	if(flip<10){
		draw_sprite_h_flip(canvas,bobby, 600, 600);
		draw_sprite_v_flip(canvas,bobby, 700,600);
	}
	if(flip>9){
		draw_sprite(canvas,bobby, 600, 600);
		draw_sprite(canvas,bobby, 700, 600);
	}
	
	
	rotate_sprite(canvas, bobby, 400, 600, angle);
	
	stretch_sprite(canvas, bobby, 500, 600, w, h);
	
	stretch_sprite(canvas, bobby, 300, 600, w, 50);
	
	stretch_sprite(canvas, bobby, 200, 600, 50, h);
	
}

function update()
	{
	angle=angle+5;                      
	
	flip++;
	w++;
	h++;
	
	if(flip==20){flip=0;}
	if(w==75){w=25;}
	if(h==75){h=25;}	
}

function setup(){
	scene1 = load_bmp("scene1.bmp");
	bobby = load_bmp("bobby.png");
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

 