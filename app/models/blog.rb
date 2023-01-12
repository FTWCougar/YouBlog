class Blog < ApplicationRecord
    belongs_to :user
    has_many :bloglikes
    has_many :saves
end
