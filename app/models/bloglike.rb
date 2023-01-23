class Bloglike < ApplicationRecord
    belongs_to :user
    belongs_to :blog
    validates_uniqueness_of :user_id, scope: :blog_id
end
