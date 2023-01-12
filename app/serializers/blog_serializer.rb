class BlogSerializer < ActiveModel::Serializer
    attributes :id, :title, :body, :img
    belongs_to :user
end
