// IIFE - Immediately Invoked Function Expression

(function () {
    let canvas;
    let stage;
    let helloLabel;
    let goodbyeLabel;

    function Start() {
      canvas = document.getElementById("canvas");
      stage = new createjs.Stage(canvas);
      createjs.Ticker.framerate = 60;
      createjs.Ticker.on("tick", Update);
      Main();
    }

    //GameLoop - called every frame
    function Update() {
        helloLabel.rotation += 5;
        goodbyeLabel.rotation -= 5;
        stage.update();
    }

    function Main() {
        console.log("Game Started...");

        helloLabel = new createjs.Text("Hello, World!", "40px Consolas", "black");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;
        stage.addChild(helloLabel);

        goodbyeLabel = new createjs.Text("Goodbye, World!", "20px Consolas", "red");
        goodbyeLabel.regX = goodbyeLabel.getMeasuredWidth() * 0.5;
        goodbyeLabel.regY = goodbyeLabel.getMeasuredHeight() * 0.5;
        goodbyeLabel.x = 320;
        goodbyeLabel.y = 240;
        stage.addChild(goodbyeLabel);
    }

    window.onload = Start;

})();

