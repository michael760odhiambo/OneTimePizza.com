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
      confirm("your delivery cost is sh.200")
      alert(" your order will be delivered to your location")

      

      event.preventDefault();
  });
  $("select#size").change(function(){
    window.selectedsize = $(this).children("option:selected").val()
    $("#output1").text(window.selectedsize)
    if (window.selectedsize ==="big"){
      window.money_size = 1300;
    }
    else if (window.selectedsize ==="medium"){
      window.money_size = 1000;
    }
    else if (window.selectedsize ==="small"){
      window.money_size = 600;
    }
  })
  $("select#crust").change(function(){
    window.selectedcrust = $(this).children("option:selected").val()
    $("#output2").text(window.selectedcrust)
    if (window.selectedcrust ==="crispy"){
      window.money_crust = 50;
    }
    else if (window.selectedcrust ==="stuffed"){
      window.money_crust = 70;
    }
    else if (window.selectedcrust ==="gluten-free"){
      window.money_crust = 80;
    }
  })
  $("select#toppings").change(function(){
    window.selectedtoppings = $(this).children("option:selected").val()
    $("#output3").text(window.selectedtoppings)
    if (window.selectedtoppings ==="pepperoni"){
      window.money_toppings = 50;
    }
    else if (window.selectedtoppings ==="mushrooms"){
      window.money_toppings = 60;
    }
    else if (window.selectedtoppings ==="onions"){
      window.money_toppings = 80;
    }
    else if (window.selectedtoppings ==="sausage"){
      window.money_toppings = 95;
    }
    else if (window.selectedtoppings ==="extra-cheese"){
      window.money_toppings = 65;
    }
    else if (window.selectedtoppings ==="black-olives"){
      window.money_toppings = 40;
    }
    else if (window.selectedtoppings ==="green peppers"){
      window.money_toppings = 80;
    }
  
  
  })
  $("#action").click(function(){
    var number_of_pizzas=$("#num").val();
    var total = number_of_pizzas*(window.money_size+window.money_crust+window.money_toppings+)
    $("#output4").text(total);


  })
  
});