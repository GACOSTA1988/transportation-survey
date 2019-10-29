$(document).ready(function() {
  $("#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#results").show();
    $("#fun-results").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var transportationResults = $(this).val();
      $("#results").append(transportationResults + "<br>");
  });
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funTransportationResults = $(this).val();
      $("#fun-results").append(funTransportationResults + "<br>");
    });
    $("#transportation_survey").hide();
  });
});
