$(document).ready(function() {
  $('form#questions').submit(function(event) {
    var name = $("input#name").val();
    var os = $("select#os").val();
    var side = $("select#side").val();
    var application = $("select#application").val();
    var experience = $("select#experience").val();
    var stack = $("select#stack").val();
    $("#output").show();
    $("#nameDisplay").text(`${name}, `);
    $("#c").hide();
    $("#js").hide();
    $("#css").hide();
    $("#sql").hide();
    $("#again").hide();
    console.log(name + os + side + application + experience + stack);
    
    if ((os === "1" && application === "3") || (side === "3" && application === "3")) {
      $("#c").show();
    } else if ((os === "5" && side === "1") || (side === "1" && application === "2")) {
      $("#js").show();
    }  else if ((os === "5" && side === "1") || (side === "1" && application === "1")) {
      $("#css").show();
    }  else if ((os === "5" && side === "3") || (side === "3" && application === "4")) {
      $("#sql").show();       
    } else {
      $("#again").show();
    }
    
    event.preventDefault();
    });
  });