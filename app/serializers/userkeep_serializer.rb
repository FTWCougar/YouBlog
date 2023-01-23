class UserkeepSerializer < ActiveModel::Serializer
  attributes :id, :blog, :bloguser

  def bloguser
    ActiveModel::SerializableResource.new(object.blog.user)
  end
end
