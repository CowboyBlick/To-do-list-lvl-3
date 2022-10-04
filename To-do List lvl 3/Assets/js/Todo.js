//check off specific todos by clicking them
$("ul").on("click", "li" ,function () {
    $(this).toggleClass("completed")
});

//Listen for the span "X" to delete to-dos
$("ul").on("click", "span" , function (event) {
   $(this).parent().fadeOut(500,function () {
       $(this).remove();
   });
    event.stopProgration();
})

//Add a listener to the input that fires when the "enter" key is fired
$("input[type='text']").keypress(function (event) {
    if(event.which === 13){
        //grabbing new todo text from input
      let todoText =  $(this).val();
      $(this).val("")
      //create a new li and add ul
        $("ul").append("<li><span><i class='fas fa-dumpster'></i></span> " + todoText + "</li>")  
    }
})

$(".fa-minus-circle").click(function () {
    $("input[type='text']").fadeToggle(750);
});


//if li is gray
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         //turn it black        
//         $(this).css("color", "black");
//         $(this).css("text-decoration", "none")
//     }
//     //else
//     else{       
//     //turn it gray    

//        $(this).css("color", "gray");
//    $(this).css("text-decoration", "line-through"); 
//     }

   