class Api::UserkeepsController < ApplicationController
    def create
        blog = Blog.find_by(id: params[:blog])
        unless current_user.id == blog.user.id
            usersave = Userkeep.create!(user_id: params[:user], blog_id: params[:blog])
            render json: usersave.blog, status: :created
        else
            render json: {errors: ["Can't save your own blog"]}, status: 401
        end
    end
    def index
        usersaves = Userkeep.all
        render json: usersaves, status: :ok
    end
    def destroy
        savedblog = Userkeep.find_by!(id: params[:id])
        savedblog.destroy
        render json: savedblog, status: :ok
    end
end
