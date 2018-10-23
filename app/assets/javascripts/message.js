$(function(){
  function buildHAML(message){
    if(!message.image){
      var html = `<div class='message'>
                  <span class='user_name'>${message.name}</span>
                  <span class='updated_at'>${message.updated_at}</span>
                  <div class='body'>${message.body}</div>
                  <img src='assets/${message.image}'>
                  </div>`
    }
    else{
      var html = `<div class='message'>
                  <span class='user_name'>${message.name}</span>
                  <span class='updated_at'>${message.updated_at}</span>
                  <div class='body'>${message.body}</div>
                  </div>`
    }
    return html;
  }
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHAML(data);
      $('.chat__space').append(html)
      $('.text').val('')
      $('.chat__space').animate({scrollTop: $('.chat__space')[0].scrollHeight}, 'slow','swing');
    })
  })
});
