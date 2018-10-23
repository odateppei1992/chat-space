$(function(){
  function buildHAML(message){
    var html = `<span class='user_name'>${message.name}</span>
                <span class='updated_at'>${message.updated_at}</span>
                <div class='body'>${message.body}</div>`
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
      console.log(html)
      $('.chat__messages').append(html)
      $('.text').val('')
    })
  })
});
