$(document).ready(function(){
  $("#search").click(function(){
    var searchTerm=$("#searchTerm").val();
   $.ajax({
     url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&namespace=0&format=json',

     dataType:'jsonp',
     type:'POST',

     success:function(data){
       $('#output').html('');
       for(var i=0;i<data[1].length;i++){
      $('#output').prepend('<li><a href='+data[3][i]+'>'+data[1][i]+'</a><p>'+data[2][i]+'</p></li>');
       //console.log(data);
       }
       $('#searchTerm').val('');
     },
     error:function(errormessage){
       alert("ERROR");
     },

    });

  });
  $('#searchTerm').keypress(function(e){
    if(e.which==13){
    $('#search').click();
    }
  });

});

