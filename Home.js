var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.src = "https://source.unsplash.com/1600x900/?nature,holiday";
        img.onload = function () {
        context.canvas.width = img.width;
        context.canvas.height = img.height;
        context.drawImage(img, 0, 0);
    };

    window.addEventListener('load', resize, false);
    window.addEventListener('resize', resize, false); // JQuery: $(window).resize(function() {...});

    /**
     * Scale proportionally: If the width of the canvas > the height, the canvas height
     * equals the height of the browser window. Else, the canvas width equals the width of the browser window.
     * If the window is resized, the size of the canvas changes dynamically.
     */
    function resize() {
        var ratio = canvas.width / canvas.height;
        var canvas_height = window.innerHeight;
        var canvas_width = canvas_height * ratio;
        if(canvas_width>window.innerWidth){
            canvas_width=window.innerWidth;
            canvas_height=canvas_width/ratio;
        }

        canvas.style.width = canvas_width + 'px';
        canvas.style.height = canvas_height + 'px';
    }