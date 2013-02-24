
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
};

function toggleChatDock(){
	$(".ChatInner").fadeToggle("slow");
};
function fadeInContent(content){
	//insert check that the variable is div. Better if it is a proper div
	content.fadeIn("slow");
};
function fadeOutContent(content){
	//insert check that the variable is div. Better if it is a proper div
	content.fadeOut("slow");
};
$(document).ready(function(){
	
	var propsTimeout;
	var ChatShown = true;
	$("div.ArtifactBody").click(function(){
		$("#InspectionItemModal").modal('show');
		
	});


	$("div.IIHeader, div.IIHeaderContentExpanded").click(function(){
		var container = $(this).parent();
		toggleContentVisibility(container);
		$(this).toggleClass("IIHeader IIHeaderContentExpanded");
	});
	$('#liquid').liquidcarousel({height:130, hidearrows: false});

	$(".Artifact, .InspectionItem").hover(function(){
		propsTimeout = window.setTimeout(slideDownProps,1000,$(this));
		// slideDownProps($(this));
	},function(){
		window.clearTimeout(propsTimeout);
		slideUpProps($(this));
	});

	$(".ChatInner").hover(function(){
		fadeInContent($(".Dock"));
	},function(){
		 if(ChatShown){
			propsTimeout = window.setTimeout(fadeOutContent,2000,$(".Dock"));
		 }
	});

	$(".Dock").hover(function(){
		if(ChatShown){
			window.clearTimeout(propsTimeout);
		}
	},function(){
		if(ChatShown){
			fadeOutContent($(".Dock"));	
		}
	});

	$(".Dock").click(function(){
		if(ChatShown){
			
			fadeOutContent($(".ChatInner"));
			$(".ChatContainer").removeClass("span6");
			$(".Dock").css('left','0px');
			ChatShown = false;
			
			
		}
		else{
			$(".ChatContainer").addClass("span6");
			fadeInContent($(".ChatInner"));
			$(".Dock").css('left','-20px');
			ChatShown = true;
			
			
		}
		
	});
});

