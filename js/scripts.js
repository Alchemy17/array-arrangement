$(document).ready(function(){
  $("form").submit(function(event){
    var input = [$("#input1").val(), $("#input2").val(), $("#input3").val()]
    var array1 = []

    $("#id").prepend(input[1]);
    $("#id1").prepend(input[0]);
    $("#id2 ").prepend(input[2]);

    $("#open").fadeIn();
    event.preventDefault();
   });
});
