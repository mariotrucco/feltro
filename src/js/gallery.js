import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min.js';
var galleries = {
    madonna: [
        {
            src: 'img/gallery/madonna_iv_1200_firma.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/madonna_i_detail_1200_firma.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/madonna_ii_detail3_1200_firma.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/madonna_ii_detail2_1200_firma.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/madonna_iv_detail_1200_firma.jpg',
            w: 1200,
            h: 1200
        }
    ],
    ragno: [
        {
            src: 'img/gallery/ragno_Ansicht_HINTEN_dunkel_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/ragno_Ansicht_VORNE_dunkel_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/ragno_Detail_1200.JPG',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/ragno_Detail2_1200.JPG',
            w: 1200,
            h: 1200
        }
    ],
    spurensuche: [
        {
            src: 'img/gallery/spurensuche_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/spurensuche_detail_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/spurensuche_detail_2_1200.jpg',
            w: 1200,
            h: 1200
        }
    ],
    homunkulus: [
        {
            src: 'img/gallery/homunkulus_hell_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/homunkulus_hell_detail_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/homunkulus_hell_macro_1200.jpg',
            w: 1200,
            h: 1200
        }
    ],
    poppy: [
        {
            src: 'img/gallery/cut_poppy_dunkel_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/cut_poppy_detail1_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/cut_poppy_detail2_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/cut_poppy_detail_1200.jpg',
            w: 1200,
            h: 1200
        }
    ],
    lashed: [
        {
            src: 'img/gallery/lashed_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/lashed_front.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/lashed_detail.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/lashed_making.jpg',
            w: 1200,
            h: 1200
        }
    ],
    islandNetwork: [
        {
            src: 'img/gallery/island_network_1200.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/island_network_Detail_1.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/island_network_Detail_4.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/island_network_Detail_3.jpg',
            w: 1200,
            h: 1200
        }
    ],
    scheitel : [
        {
            src: 'img/gallery/Scheitel.jpg',
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
    ],
    dueXdue: [
        {
            src: 'img/gallery/dueXdueDistanza.JPG',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/dueXdue.jpg',
            w: 1200,
            h: 1600
        },
        {
            src: 'img/carousel/duexdue_bearb.jpg',
            w: 1200,
            h: 1200
        },
        {
            src: 'img/carousel/dueXdueDetail.jpg',
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
            index: 0, // start at first slide
            closeOnScroll: false,
            closeOnVerticalDrag: false

        };
    
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
