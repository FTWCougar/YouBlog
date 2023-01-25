class Userkeep < ApplicationRecord
  belongs_to :blog
  belongs_to :user
  validates_uniqueness_of :user_id, scope: :blog_id
end
