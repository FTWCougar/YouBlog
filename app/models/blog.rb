class Blog < ApplicationRecord
    belongs_to :user
    has_many :bloglikes
    has_many :saves
    has_many :comments
    accepts_nested_attributes_for :comments
end
