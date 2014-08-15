

$(document).ready(function(){
   $("#ocultar").click(function(evento){
      $("#ocultar1").hide("slow");
      $("#ocultar2").hide("slow");
      $("#ocultar3").hide("slow");
      $("#ocultar4").hide("slow");
      $("#ocultar5").hide("slow");
      $("#ocultar6").hide("slow");
   });
   
    $("#mostrar").click(function(evento){
      $("#ocultar1").show(300);
      $("#ocultar2").show(300);
      $("#ocultar3").show(300);
      $("#ocultar4").show(300);
      $("#ocultar5").show(300);
      $("#ocultar6").show(300);
   });
   
   
//    $("#ocultar").click(function(evento){
//   $("#ocultar1").fadeOut(300, function(){
//			$("#ocultar2").fadeOut(300, function(){
//			$("#ocultar3").fadeOut(300, function(){
//			$("#ocultar4").fadeOut(300, function(){
//			$("#ocultar5").fadeOut(300, function(){
//			$("#ocultar6").fadeOut(300, function(){
//			
//		});
//		});
//		});
//		});
//		});
//		});
//                });
//   $("#mostrar").click(function(evento){
//   $("#ocultar1").fadeOut(300, function(){
//			$("#ocultar2").fadeIn(300, function(){
//			$("#ocultar3").fadeIn(300, function(){
//			$("#ocultar4").fadeIn(300, function(){
//			$("#ocultar5").fadeIn(300, function(){
//			$("#ocultar6").fadeIn(300, function(){
//			
//		});
//		});
//		});
//		});
//		});
//		});
//                });
   
});