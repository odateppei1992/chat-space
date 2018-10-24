$(function(){
  function buildHTML(message){
    var src = message.image.url
    var image = (src) ? `<img src= ${src}>` : ''
    var html = `<div class='message'>
                  <span class='user_name'>${message.name}</span>
                  <span class='created_at'>${message.created_at}</span>
                  <div class='body'>${message.body}</div>
                  <div class='message_image'>
                    ${image}
                  </div>
                </div>`
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
      var html = buildHTML(data);
      $('.chat__space').append(html)
      $('.text,.hidden').val('')
      $('.chat__space').animate({scrollTop: $('.chat__space')[0].scrollHeight}, 'slow','swing');
    })
    .fail(function(data){
      alert('通信に失敗しました')
    })
    .always(function(){
      $(".button").removeAttr("disabled");
    });
  })
});
