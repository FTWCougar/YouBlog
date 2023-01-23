class Api::CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments, status: :ok
    end
    def create
        comment = Comment.create!(body: params[:body], user_id: params[:user], blog_id: params[:blog])
        blog = Blog.find_by!(id: params[:blog])
        render json: blog, status: :created
    end
end
