class BlogSerializer < ActiveModel::Serializer
    attributes :id, :title, :body, :img, :comments, :get_like, :get_dislike
    belongs_to :user
    
    def comments
        ActiveModel::SerializableResource.new(object.comments.order(created_at: :desc))
    end

end
