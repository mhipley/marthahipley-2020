let w, h;

window.addEventListener('load', function(){
    console.log("load")
    //glider script for the carousel
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        scrollLock: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
            
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
                duration: 2,
                scrollLock: false
              }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    duration: 2,
                    scrollLock: false
                }
            }
          ]
    });

    w = document.getElementById("underlay").offsetWidth;
    h = document.getElementById("underlay").offsetHeight;

    new p5(sketch, 'underlay');
   
})




let sketch = function(p) {
    let pink = p.color('#FF0B87');
    p.setup = function(){
        p.createCanvas(w, h);
        p.background(255, 255, 255);
    }
    p.windowResized = function(){
        console.log("resize");
        w = document.getElementById("underlay").offsetWidth;
        h = document.getElementById("underlay").offsetHeight;
        p.resizeCanvas(w, h);
        
    }
    p.draw = function(){
        // p.background(255, 255, 255);
        p.variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }

    p.variableEllipse = function(x, y, px, py){
        let speed = p.abs(x - px) + p.abs(y - py);
        p.stroke(speed);
        p.noStroke();
        p.fill(pink);
        p.ellipse(x, y, speed, speed);

        
    }
    p.mouseClicked = function() {
        p.background(255, 255, 255);
    }
};


window.addEventListener('load', function () {
    var cards = document.getElementsByClassName("link-card");
    console.log(cards);
    [].forEach.call(cards, function(el) {
        el.classList.add("show");
        el.classList.remove("hide");
    });

});
