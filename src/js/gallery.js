import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min.js';
var galleries = {
    pois : [
        {
            src: 'img/gallery/Pois2_opt.jpg',
            w: 1600,
            h: 1200
        },
        {
            src: 'img/carousel/Pois3.jpg',
            w: 1600,
            h: 1200
        },
        {
            src: 'img/carousel/PoisDetail.jpg',
            w: 1200,
            h: 1600
        },
        {
            src: 'img/carousel/PoisDetail2.jpg',
            w: 1200,
            h: 1600
        }
    ],
    kissen : [
        {
            src: 'img/gallery/KissenFell_opt.jpg',
            w: 1600,
            h: 1200
        },
        {
            src: 'img/carousel/KissenFellDetail.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/KissenFellDistanzaufnahme.jpg',
            w: 1600,
            h: 1200
        },
        {
            src: 'img/carousel/KissenFellDistanzaufnahme2.jpg',
            w: 1600,
            h: 1200
        }
    ],
    scheitel : [
        {
            src: 'img/gallery/Scheitel_opt.jpg',
            w: 1600,
            h: 1200
        },
        {
            src: 'img/carousel/ScheitelDetail.jpg',
            w: 1600,
            h: 1200
        },
        {
            src: 'img/carousel/ScheitelDetail3.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/ScheitelDistanzaufnahme.jpg',
            w: 1200,
            h: 1600
        }
    ]
}

    window.openGallery =  function(galleryName){
        //see https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/getting-started.md (step 4)
        var pswpElement = document.querySelectorAll('.pswp')[0];
    
        // build items array
        var items = galleries[galleryName];
    
        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: 0 // start at first slide
        };
    
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
