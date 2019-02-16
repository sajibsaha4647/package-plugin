 $(document).ready(function() {
     
		$("#minslider").owlCarousel({
		 
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay : false,
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		pagination : false,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		
     
   });
     
   });


// Active MIX IT UP

$(function(){
	$('.portfolio_content').mixItUp({
		animation:{
			effects: 'fade rotateZ'
		}
	
	});

});
