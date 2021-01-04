let w, h;

window.addEventListener('load', function(){
    //glider script for the carousel
    if (document.querySelector('.glider') != null) {
        function runGlider(callback) {
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
            callback();
        }
    
        function showCards() {
            var cards = document.getElementsByClassName("link-card");
            [].forEach.call(cards, function(el) {
                el.classList.add("show");
                el.classList.remove("hide");
            });
        }
    
        runGlider(showCards);
    }

    if (document.getElementById("underlay") != null) {
        w = document.getElementById("underlay").offsetWidth;
        h = document.getElementById("underlay").offsetHeight;
    
        new p5(sketch, 'underlay');
    }

    for (var i = 0; i < document.links.length; i++) {
        if (document.links[i].href == document.URL) {
            document.links[i].className = 'active';
        }
    }

    
   
})

// open p on mobile in pricing chart
function openDetail(span) {
    if (span.classList.contains("active")) {
        span.classList.remove("active");
        span.nextElementSibling.style.maxHeight = null;

    }
    else {
        span.classList.add("active");
        span.nextElementSibling.style.maxHeight = span.nextElementSibling.scrollHeight + "px";
    }

}



let sketch = function(p) {
    let pink = p.color('#FF0B87');
    p.setup = function(){
        p.createCanvas(w, h);
        p.background(255, 255, 255);
    }
    p.windowResized = function(){
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

