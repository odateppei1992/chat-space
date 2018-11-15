$(function(){
  function buildHTML(message){
    var image = (message.image) ? `<img src= ${message.image}>` : ''
    var html = `<div class='message' data-message-id=${message.id}>
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
      $(".button").removeAttr("data-disable-with");
      $(".button").val("SEND");
    });
  })
  setInterval(function(){
  lastMessageId = $('.message:last').data('message-id') || 0
  $.ajax({
    url:location.pathname,
    type: "GET",
    data: {
      message: {id: lastMessageId}
    },
    dataType: 'json',
  })
  .done(function(new_messages){
    new_messages.forEach(function(message){
      var html = buildHTML(message);
      $('.chat__space').append(html)
      $('.chat__space').animate({scrollTop: $('.chat__space')[0].scrollHeight}, 'slow','swing');
    });
  })
  .fail(function(new_messages){
    alert('更新に失敗しました');
  })
  },5000)
});
