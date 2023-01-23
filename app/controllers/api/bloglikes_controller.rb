class Api::BloglikesController < ApplicationController

    def create
        like = Bloglike.create!(
            liked: params[:liked],
            blog_id: params[:blog],
            user_id: params[:user],
        )
        blog = Blog.find_by!(id: params[:blog])
        render json: blog, status: :created, serializer: BlogSerializer
    end
end
