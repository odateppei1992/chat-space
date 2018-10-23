json.name @message.user.name
json.updated_at @message.updated_at.strftime('%Y/%m/%d %H:%M')
json.body @message.body
json.image @message.image
