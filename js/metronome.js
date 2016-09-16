initModule = function (  ) {

/* state variables */
  var playing = false;
  var num_beats = 16;
  var beat = 0;
  var timer;
  var hit = Array(num_beats);
  
  for (var i = 0; i < num_beats; i++) {
    hit[i] = new Audio('audio/hit.mp3');
  }
  
  var tempos = [60,72,108,120,144,180];
  var tempo;

/* event handlers */  

  onTick = function(e) {
    $("#metronome td").removeClass("highlite");
    $("#metronome td#m"+beat).addClass("highlite");
    hit[beat].play();
    beat = (beat+1)%num_beats;
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
      timer = setInterval(onTick, Math.round(1000*60/tempo));
    } else {
      txt = "&#9654;";
      onStop();
    }
    $(this).val($("<div>").html(txt).text());
    return false;
  } 
  
  onTempoSelect = function(e) {
    tempo = $( "#tempo option:selected" ).val();
    $( "#play" ).click();
    $( "#play" ).click();
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
    
    html = '';
    for (var i = 0; i < tempos.length; i++) {
      html += '<option value="'+ tempos[i] + '">'+ tempos[i] +' bpm</option>';
    }
    $("#tempo").html(html);
    
    // end html structures
 
    // highlighting   
    // button
    $("#play").val($("<div>").html("&#9654;").text());
    // end highlighting
    
    // events
    $( "#play" ).click( onClick );
    $( "#tempo" ).change( onTempoSelect );
    
    return false;
  }

  setup();
  tempo = $( "#tempo option:selected" ).val();
  $( "#play" ).click();

};