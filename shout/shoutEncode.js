importScripts('LZWEncoder.js', 'NeuQuant.js', 'GIFEncoder.js', 'b64.js');

self.onmessage = function(e) {
    var imageList = e.data['imageList'];
    var durationList = e.data['durationList'];
    var encoder = new GIFEncoder();
    var unique = new Date().getTime();

    encoder.setRepeat(0);   // 0  -> loop forever
                            // 1+ -> loop n times then stop
    encoder.setDelay(100);  // go to next frame every n milliseconds

    encoder.setSize(640, 360); // set frame size

    encoder.setQuality(25); // set quality of colour reproduction

    encoder.start();

    for (var i=0;i<imageList.length;i++){
        var image = imageList[i];
        var frames = durationList[i];
        for (var j=0;j<frames;j++){
            if (j>0){
                encoder.addFrame(image,true,true);
            } else {
                encoder.addFrame(image,true);
            }
        }
    }

    encoder.finish();

    var binary_gif = encoder.stream().getData();
    var data_url = 'data:image/gif;base64,'+encode64(binary_gif);

    self.postMessage({filename:"shout_"+unique+".gif",data:data_url});

}
