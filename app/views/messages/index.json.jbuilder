json.messages @new_messages.each do |message|
  json.id message.id
  json.name message.user.name
  json.created_at message.created_at.to_s(:datetime)
  json.body message.body
  json.image message.image.url
end
