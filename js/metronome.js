initModule = function (  ) {

/* state variables */
  var playing = false;
  var num_measures = 16;

/* event handlers */  
  onClick = function(e) {
    var txt;
    playing = ! playing;
    txt = playing ? "&#9724;" : "&#9654;";
    $(this).val($("<div>").html(txt).text()); // a trick to have val() work with unicode
    return false;
  } 


/* setup */  
  setup = function() {
    
    // html structures
    html = '<tr>';
    for (var i = 0; i < num_measures; i++) {
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