var noteTemp =  '<div class="note">'
				+ 		'<textarea class="cnt" placeholder="Enter note here"></textarea>'
				+'</div>';

var noteZindex = 1;
function deleteNote(){
    $(this).parent('.note').hide("puff",{ percent: 133}, 250);
};

function newNote() {
  $(noteTemp).hide().appendTo("#add_new").show("fade", 300).draggable().on('dragstart',
    function(){
       $(this).zIndex(++noteZindex);
    });
 
	$('.remove').click(deleteNote);
	$('textarea').autogrow();
	
  $('.note')
	return false; 
};



$(document).ready(function() {
    
    $("#add_new").height($(document).height());
    
    $("#add_new").click(newNote);
    
    $('.remove').click(deleteNote);
    newNote();
	  
    return false;
});