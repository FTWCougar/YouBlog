class Blog < ApplicationRecord
    belongs_to :user
    has_many :bloglikes
    has_many :userkeeps
    has_many :comments
    accepts_nested_attributes_for :comments
    accepts_nested_attributes_for :user


    def get_like
        self.bloglikes.where(liked: true).length
    end
    def get_dislike
        self.bloglikes.where(liked: false).length
    end
end
