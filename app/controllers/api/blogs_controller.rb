class Api::BlogsController < ApplicationController
    def index
        blogs = Blog.all
        render json: blogs, status: :ok
    end
    def show
        blog = Blog.find_by(id: params[:id])
        render json: blog, status: :ok
    end
    def create
    end
end
