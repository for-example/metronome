initModule = function (  ) {

/* state variables */
  var playing = false;
  var num_beats = 16;
  var beat = 0;
  var timer;

/* event handlers */  

  onTick = function(e) {
    beat = (beat+1)%num_beats;
    $("#metronome td").removeClass("highlite");
    $("#metronome td#m"+beat).addClass("highlite");
    return false;
  }
  
  onStop = function () {
    clearTimeout(timer);
    beat = 0;
    $("#metronome td").removeClass("highlite");
    $("#metronome td#m"+beat).addClass("highlite");
    return false;
  }

  onClick = function(e) {
    var txt;
    playing = ! playing;
    if (playing) {
      txt = "&#9724;";
      timer = setInterval(onTick, 500);
    } else {
      txt = "&#9654;";
      onStop();
    }
    $(this).val($("<div>").html(txt).text());
    return false;
  } 
/* end event handlers */  

/* setup */  
  setup = function() {
    
    // html structures
    html = '<tr>';
    for (var i = 0; i < num_beats; i++) {
      html += '<td id="m'+ i +'"></td>';
    } 
    html += '</tr>';
    $("#metronome").html(html);
    // end html structures
 
    // highlighting   
    // button
    $("#play").val($("<div>").html("&#9654;").text());
    
    // metronome
    $("#m0").addClass("highlite"); 
    // end highlighting
    
    // events
    $( "#play" ).click( onClick );
    
    return false;
  }

  setup();

};