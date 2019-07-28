function blanks(person, describe, size, crust, toppings,time){
  this.person = person;
  this.size = size;
  this.describe = describe;
  this.crust = crust;
  this.toppings = toppings;
  this.time = time;
}

$(document).ready(function() {
  $("#filblanks form").submit(function(event) {
      var person1Input = $("input#person1").val();
      var describeInput = $("input#describe").val();
      var sizeInput = $("input#size").val();
      var crustInput = $("input#crust").val();
      var toppingsInput = $("input#toppings").val();
      var timeInput = $("input#time").val();


      $(".person1").text(person1Input);
      $(".size").text(sizeInput);
      $(".describe").text(describeInput);
      $(".crust").text(crustInput);
      $(".toppings").text(toppingsInput);
      $(".time").text(timeInput);

      $("input#person1").val("");
      $("input#describe").val("");
      $("input#size").val("");
      $("input#crust").val("");
      $("input#toppings").val("");
      $("input#time").val("");

      var filBlanks = 'fil Blanks(person1Input, describeInput, sizeInput, crustInput, toppingsInput, timeInput)';

      //$("p#storys").append("<p><span class='storys'>" + newStory.person +  "" + newStory.describe + newStory.crust +"" + newStory.toppings + "" + newStory.time + "</span></li>");

      prompt("please enter your location")

      

      event.preventDefault();
  });
});