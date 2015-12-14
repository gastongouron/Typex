// Google fonts call. line 2 to 13 provided by google
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


// Create a variable equal to the actual div where id="output"
// And an hash to store pressed keys and their duration
var output = document.getElementById('output'),
    pressed = 0
var character
// Listen to keydown via window element
$("body").on("keypress", function(e) {
   if (pressed) return;
   character = String.fromCharCode(e.which);
   pressed=e.timeStamp;
});

// Listen to keyup via window element
$("body").on("keyup", function(e) {
    if ( !pressed ) return;

        // get duration of the key pressed event
        var duration = ( e.timeStamp - pressed ) / 1000;
        console.log(duration);
        // Output the letter in a span tag
        output.innerHTML += '<span class="klass">' + character + '</span>';

        // Get the next one with classname index -1
        var target_array = document.getElementsByClassName('klass');
        var target = target_array[target_array.length - 1];

        // Change character family to Open Sans and font style to Italic
        target.style.fontFamily = "open sans";
        target.style.fontStyle = "italic";

    // Conditional statement that modify fontWeight referring to the duration of the key pressed event
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

        // Reinitialize pressed to 0
        pressed = 0;
});