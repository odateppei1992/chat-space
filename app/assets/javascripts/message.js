$(function(){
  function buildHAML(message){
    var src = message.image.url;
    if(src){
      var html = `<div class='message'>
                    <span class='user_name'>${message.name}</span>
                    <span class='updated_at'>${message.updated_at}</span>
                    <div class='body'>${message.body}</div>
                    <div class='message_image'>
                      <img src= ${src}>
                    </div>
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
    .fail(function(data){
      alert('通信に失敗しました')
    })
  })
});
