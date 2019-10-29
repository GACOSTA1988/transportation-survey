$(document).ready(function() {
  $("#transportation_survey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var transportationResults = $(this).val();
      $("#results").append(transportationResults + "<br>");
      // $("#results").text(transportationResults);
    });

  });
});
