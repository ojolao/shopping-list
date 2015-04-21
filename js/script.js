$(document).ready(function() {
    $('#add-button').click(function() {
        var toAdd = $('#add-items').val();
        $('#list-area').prepend('<li>' + '<input type="checkbox" />' + toAdd + '<button class="delete-item">Delete</button>' + '</li>');
    	$('#add-items').val("");
    });



	 $(document).on("click", "input[type='checkbox']", function(){
    	var myinput = $(this).closest('li');
    	if($(this).is(':checked')){
    		$(myinput).css('textDecoration', 'line-through');
    	}else{
    		$(myinput).css('textDecoration', 'none');
    	}
    	});

//reset button
	$('#reset-button').click(function(){
  	$('#list-area').empty();
  	submissions = 0;
	});

//delete individual item button
	$(document).on("click", ".delete-item", function(){
		$(this).closest('li').remove();
	});

});




/*

   var input = $(this).parent().find('input[type=text]');
    if ($(this).is(':checked') ) {
        $(input).css('textDecoration','line-through');
    }else{
        $(input).css('textDecoration','none');
    }
});

.on('change','input[type=checkbox]',function(){
    

});

$( "input" ).change(function() {
  var $input = $( this );
  $( "p" ).html(
    ".attr( \"checked\" ): <b>" + $input.attr( "checked" ) + "</b><br>" +
    ".prop( \"checked\" ): <b>" + $input.prop( "checked" ) + "</b><br>" +
    ".is( \":checked\" ): <b>" + $input.is( ":checked" ) ) + "</b>";
}).change();

*/