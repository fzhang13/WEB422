
$( document ).ready(function(){
    $( "#big" ).on( "click", ()=>{
        event.preventDefault();
        $("#big").empty();
    });
    $( "#middle").on( "click", ()=>{
        event.preventDefault();
        $("#middle").hide();
    });
    $( "#small").on( "click", ()=>{
        event.preventDefault();
        $("#small").hide();
    });
    
});