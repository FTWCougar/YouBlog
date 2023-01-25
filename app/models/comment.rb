class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :blog
    has_many :commentlikes, dependent: :destroy
    def get_like
        self.commentlikes.where(liked: true).length
    end
    def get_dislike
        self.commentlikes.where(liked: false).length
    end
end
