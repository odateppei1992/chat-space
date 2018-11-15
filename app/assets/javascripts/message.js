$(function(){
  function buildHTML(message){
    var image = (message.image) ? `<img src= ${message.image}>` : ''
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
  setInterval(function(){
  var url = location.pathname
  if($('.message')[0]){
    var message_id = $('.message:last').data('message-id');
  }else{
    var message_id = 0
  }
  console.log(message_id)
  $.ajax({
    url:url,
    type: "GET",
    data: {
      message: {id: message_id}
    },
    dataType: 'json',
  })
  .always(function(data){
    data.messages.forEach(function(message){
      var html = buildHTML(message);
      $('.chat__space').append(html)
      $('.chat__space').animate({scrollTop: $('.chat__space')[0].scrollHeight}, 'slow','swing');
    });
  })
  },5000)
});
