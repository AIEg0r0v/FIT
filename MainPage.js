
//Welcome to JS and jQuery world

//toggle Inspections Content
function toggleContent(content){
	//insert check that the variable is div. Better if it is a proper div
	content.fadeToggle("slow");
};

//On change Inspection class when expanded/collapsed.
 function toggleContentVisibility(container){
	var content = container.children(".IIContent");
	//something like  if(content != null) is needed
	//container.toggleClass("InspectionItem InspectionItemExpanded");
	toggleContent(content);
 };


$(document).ready(function(){
	

	$("div.ArtifactBody").click(function(){
		$("#InspectionItemModal").modal('show');
		
	});


	$("div.IIHeader, div.IIHeaderContentExpanded").click(function(){
		var container = $(this).parent();
		toggleContentVisibility(container);
		$(this).toggleClass("IIHeader IIHeaderContentExpanded");
	});
	$('#liquid').liquidcarousel({height:110, hidearrows: false});

	
	
});

