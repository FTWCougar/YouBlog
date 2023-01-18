class CommentSerializer < ActiveModel::Serializer
    attributes :id, :body
    has_many :commentlikes
    belongs_to :user
end
