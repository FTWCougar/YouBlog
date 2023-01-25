class UserkeepSerializer < ActiveModel::Serializer
  attributes :id, :blog, :bloguser

  def bloguser
    ActiveModelSerializers::SerializableResource.new(object.blog.user)
  end
end
