// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "img/212/2.gif",
        "img/212/4.gif",
        "img/212/8.gif",
        "img/212/16.gif",
        "img/212/32.gif",
        "img/212/64.gif",        
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
