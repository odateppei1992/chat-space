# README
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|

### Association
- has_many :groups, through: :members
- has_many :messeages
- has_many :members

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|


### Association
- has_many :users, through: :members
- has_many :messeages
- has_many :members

## messeagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||

### Association
- belongs_to :group
- belongs_to :user

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
