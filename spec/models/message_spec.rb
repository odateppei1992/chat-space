require 'rails_helper'

describe Message do
  describe '#create' do
    it "is valid with body" do
      message = build(:message, image:"")
      expect(message).to be_valid
    end
    it "is valid with image" do
      message = build(:message, body:"")
      expect(message).to be_valid
    end
    it "is valid with body and a image" do
      message = build(:message)
      expect(message).to be_valid
    end
    it "is invalid without body, image" do
      message = build(:message, body: "",image:"")
      message.valid?
      expect(message.errors[:body]).to include("を入力してください")
    end
    it "is invalid without group_id" do
      message = build(:message, group_id: "")
      message.valid?
      expect(message.errors[:group]).to include("を入力してください")
    end
    it "is invalid without user_id" do
      message = build(:message, user_id: "")
      message.valid?
      expect(message.errors[:user]).to include("を入力してください")
    end
  end
end
