$(document).ready(function(){
	$(".redes").on("click", function(){
	alert( $(this).attr('alt') );
        });
        

        $( ".inner" ).prepend( "<p>Hostal</p>" );
        $( ".info" ).append( $( "<h1>Más Información</h1>" ) );
    });
    

    $( document ).ready(function() {
        console.log( "document loaded" );
    });
 
    $( window ).on( "load", function() {
        console.log( "window loaded" );
    });