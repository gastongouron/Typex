
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

  if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient,10);

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
var list = document.getElementById("output");
console.log(list);
// Listen to keydown via window element
$("body").on("keypress", function(e) {
   if (pressed) return;
   console.log(e.which);
   if (e.which === 13) character = '<br>'
   else if (e.which === 8) list.removeChild(listLastChild);
   else character = String.fromCharCode(e.which);;
   pressed=e.timeStamp;
});

$("body").on("keydown", function(e) {
    var lastguy = $( "p span:last-child" );
    console.log(lastguy);
   if (e.which === 8) lastguy.remove();
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
        target.style.fontSize = 70;

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