 WebFontConfig = {
    google: { families: [ 'Open+Sans:400,300,300italic,400italic,600,800italic,800,700italic,700,600italic:latin,latin-ext' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

var output = document.getElementById('output'),
    pressed = {};

window.onkeydown = function(e) {
    if ( pressed[e.which] ) return;
    pressed[e.which] = e.timeStamp;
};

window.onkeyup = function(e) {
    if ( !pressed[e.which] ) return;
        var duration = ( e.timeStamp - pressed[e.which] ) / 1000;
        var letter = String.fromCharCode(e.which);
        var lowerCaseLetter = letter.toLowerCase();

        output.innerHTML += '<span class="klass">' + lowerCaseLetter + '</span>';

        var target_array = document.getElementsByClassName('klass');
        var target = target_array[target_array.length - 1];

        target.style.fontFamily = "open sans";
        target.style.fontStyle = "italic";

    if (duration < 0.04)
        target.style.fontWeight = 300;
    else if (duration < 0.1)
        target.style.fontWeight = 400;
    else if (duration < 0.15)
        target.style.fontWeight = 600;
    else if (duration < 0.2)
        target.style.fontWeight = 700;
    else
        target.style.fontWeight = 800;

        pressed[e.which] = 0;
};