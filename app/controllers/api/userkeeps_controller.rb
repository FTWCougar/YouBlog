class Api::UserkeepsController < ApplicationController
    def create
        usersave = Userkeep.create(user_id: params[:user], blog_id: params[:blog])
        render json: usersave.blog, status: :created
    end
    def index
        usersaves = Userkeep.all
        render json: usersaves, status: :ok
    end
end
