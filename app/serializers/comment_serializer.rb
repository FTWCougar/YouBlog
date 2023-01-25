class CommentSerializer < ActiveModel::Serializer
    attributes :id, :body, :get_like, :get_dislike
    belongs_to :user
end
