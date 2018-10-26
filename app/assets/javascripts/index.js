$(function(){
  $("#user-search-field").on("keyup",function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      $("#user-search-result").empty();
      console.log(input);
      if(users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        });
      }
    })
  })
})
