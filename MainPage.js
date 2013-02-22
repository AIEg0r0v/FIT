
//Welcome to JS and jQuery world

//toggle Inspections Content
function toggleContent(content){
	//insert check that the variable is div. Better if it is a proper div
	content.fadeToggle("slow");
};
function toggleContentSlide(content){

}
//On change Inspection class when expanded/collapsed.
 function toggleContentVisibility(container){
	var content = container.children(".IIContent");
	//something like  if(content != null) is needed
	//container.toggleClass("InspectionItem InspectionItemExpanded");
	toggleContent(content);
 };

function slideUpProps(container){
		var ArtifactProps = container.children(".Artifact-onhover");
		ArtifactProps.slideUp("fast");
};

function slideDownProps(container){
		var ArtifactProps = container.children(".Artifact-onhover");
		ArtifactProps.slideDown("fast");
	}
$(document).ready(function(){
	
	var propsTimeout;
	$("div.ArtifactBody").click(function(){
		$("#InspectionItemModal").modal('show');
		
	});


	$("div.IIHeader, div.IIHeaderContentExpanded").click(function(){
		var container = $(this).parent();
		toggleContentVisibility(container);
		$(this).toggleClass("IIHeader IIHeaderContentExpanded");
	});
	$('#liquid').liquidcarousel({height:110, hidearrows: false});

	$(".Artifact, .InspectionItem").hover(function(){
		propsTimeout = window.setTimeout(slideDownProps,1000,$(this));
		// slideDownProps($(this));
	},function(){
		window.clearTimeout(propsTimeout);
		slideUpProps($(this));
	});
	

});

