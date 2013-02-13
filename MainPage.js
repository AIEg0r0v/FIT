
//Welcome to JS and jQuery world

//toggle Inspections Content
function toggleContent(content){
	//insert check that the variable is div. Better if it is a proper div
	content.fadeToggle("slow");
};

//On change Inspection class when expanded/collapsed.
 function toggleInspectionClass(inspection){
	//insert check that the variable is inspection class
	inspection.toggleClass("InspectionItem InspectionItemExpanded");
	toggleContent(inspection.children(".IIContent"));
	toggleContent(inspection.children(".IIHeader, .IIHeaderContentExpanded").children(".IIContentCollapse"));
 };
 
$(document).ready(function(){

	// $("div.InspectionItem").click(function(){
		// toggleInspectionClass($(this));
	// });
	$("div.IIHeader, div.IIHeaderContentExpanded").click(function(){
		var inspection = $(this).parent(".InspectionItem, .InspectionItemExpanded")
		toggleInspectionClass(inspection);
		$(this).toggleClass("IIHeader IIHeaderContentExpanded");
	});
});