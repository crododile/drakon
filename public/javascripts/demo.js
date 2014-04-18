$(function(){
	$(".rubify").click(function(event){
		event.preventDefault();
		var def = $('.def').val();
		var variable = $('.variable').val();
		var conditional = $('.conditional').val();
		var falseAction = $('.falseAction').val();
		var trueAction = $('.trueAction').val();
		var action1 = $('.action1').val();
		
		var code = 
		"<br>def " + def + "("+variable+")"+"<br>"+
		"  " + action1 + "<br>" +
		"   if " + conditional + "<br>" + 
		"     " + trueAction + "<br>" + 
		"   else<br>" + 
		"     " + falseAction + "<br>" +
		"   end<br>end"	
		$('.code').append("<pre>"+code+"</pre>")
	});	
})