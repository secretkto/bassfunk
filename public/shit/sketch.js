		var logo;
		var	audio;
		var imgw;
		var parent;
		var	cool;
		var analyzer;
		var okok = 0
		var vol = 0
		var artname = " ";
		var w;
		var h;
		var s = 600;


		function setup() {
		

		}

		function draw() {
			if ($('#wow').length > 0 && okok < 2) {
				analyzer = new p5.Amplitude();
				bh = $('body').height();
	    		bw = $('body').width();
				cool = createCanvas( bw, bh );
				background( 0,  0, 0, 300 );
				w = bw/10;
				// ww = windowWidth
				h = bh/2;
				// hh = windowHeight;
				fill( 0,  0, 0, 300 );
				noStroke();
				cool.parent("wow");
				okok = okok + 1;
			}

			if ($('#wow').length > 0 ) {
				vol = analyzer.getLevel();
				
				background( vol * 250, vol * 250, vol * 250, 250 );
				
				textSize(s);
	 			textStyle(ITALIC);

	 			fill( 255, 255, 255, vol*255)
	 			noStroke();
	 			
	 			var changeS = function(nameit){
					s = s-100;
				}

				if (vol>0){
		 			if (textWidth(artname)>bw){
		 				changeS(artname)
		 			} else {
						 w = bw-textWidth(artname);
						 w = w/2;
						 textSize(s);
						 text(artname, w, h+s/2);
					}
				} else{
					s = 600;
				}
				
				
				
			}
		}
