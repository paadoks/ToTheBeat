var audio = new Audio();

function ready_vid(){
    /*
      parts = window.location.pathname.split('/')
      if (parts[parts.length -1] == '')
      _id = parts[parts.length - 2]
      else _id = parts[parts.length - 1]

      //pulls the json data about a particular video
      if (_id != '' && _id != null){
      $.getJSON('/get_data/' + _id, function(data, video){
      window.images = (data['images']);
      window.song = data['song'];
      window.intervals = data['intervals'];
    */
    //makes image Objects out of images

    if ( !window.requestAnimationFrame ) {

	window.requestAnimationFrame = ( function() {

	    return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
                    console.log('ahhh');
		    window.setTimeout( callback, 1000 / 60 );

		};

	} )();

    }

    // Create an <audio> element dynamically.

    window.imagesObjects = new Array();
    for (i = 0; i < window.images.length; i++) {
        image=new Image()
        image.src= images[i]
        window.imagesObjects[i] = image
    }

    //sets the video display to the first photo
    $("#slide").attr("src",window.images[0]);
    //starts the video on click of the container
    $('#play').click(function(){
        if (window.context == null){
            audio.src = window.song;
            audio.controls = false;
            audio.autoplay = false;
            window.context = new webkitAudioContext();
            var source = context.createMediaElementSource(audio);
            audio.play();
            console.log(context.currentTime)
            document.body.appendChild(audio);
            window.num = 0
            window.requestAnimationFrame(slide);
        }
    });
    window.times = new Array();

}

function slide(){
    window.requestAnimationFrame(slide);
    if (window.num < window.imagesObjects.length -1  && context.currentTime >= (window.intervals[num] / 1000.0) -.28){
        document.images.slide.src=window.imagesObjects[num+1].src;
        window.num++;
    }
}
