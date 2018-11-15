json.messages @new_messages.each do |message|
  json.name message.user.name
  json.created_at message.created_at.to_s(:datetime)
  json.body message.body
  json.image message.image.url
  json.id message.id
end
