window.addEventListener('load', function(){
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
        // screens greater than >= 775px
        breakpoint: 448,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 1,
            itemWidth: 244,
            duration: 2
        }
        }
    ]
      });
  })