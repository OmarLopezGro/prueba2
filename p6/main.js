$("#boton1").on("click",function(event){

	var num=$("ul li").last().val();
	var n= parseInt(num);
	var num2 =n + 1; 

	$("ul").append("<li>"+num2+"</li>");
});

$("#boton2").click(function() {
    $("ul li").eq(0).remove();
});