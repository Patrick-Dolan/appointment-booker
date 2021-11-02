$(document).ready(function() {
  $("#appointment").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const appDescription = $("#appDescription").val();
    const date = $("#date").val();
    const startTime = $("#startTime").val();
    const endTime = $("#endTime").val();
    $(".name").append(name);
    $(".appDescription").append(appDescription);
    $(".date").append(date);
    $(".startTime").append(startTime);
    $(".endTime").append(endTime);
  });
});