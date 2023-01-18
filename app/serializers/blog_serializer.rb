class BlogSerializer < ActiveModel::Serializer
    attributes :id, :title, :body, :img, :comments
    belongs_to :user
    has_many :bloglikes

    def comments
        ActiveModel::SerializableResource.new(object.comments)
    end
end
