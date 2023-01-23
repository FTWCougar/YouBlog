class Api::BlogsController < ApplicationController
    def index
        blogs = Blog.all.order(created_at: :desc)
        render json: blogs, status: :ok
    end
    def show
        blog = Blog.find_by!(id: params[:id])
        render json: blog, status: :ok
    end
    def create
        blog = Blog.create!(title: params[:title], body: params[:body], img: params[:img], user_id: params[:user])
        render json: blog, status: :created
    end
end
