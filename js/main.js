let app = new Vue({
    el: "#root",
    data: {
        images: [
            "http://ubuntuphoneitalia.altervista.org/wp-content/uploads/2015/07/linusestallman.jpg",
            "https://biografieonline.it/img/bio/Linus_Torvalds_1.jpg",
            "https://i1.wp.com/imgs.xkcd.com/blag/rms_katana.jpg",
          
        ],
        timer: null,
        index: 0
    },
    mounted: function() {
        this.startShow();
    },

    methods: {
        startShow: function(){
            this.timer = setInterval(this.next, 4000);
        },
        next: function(){
            this.index += 1;
        },
        prev: function(){
            this.index -= 1;
        }
    },
        computed: {
            currImg: function() {
                return this.images[Math.abs(this.index) % this.images.length];
            }
        }
   
})