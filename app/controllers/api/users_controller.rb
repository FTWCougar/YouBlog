class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: %i[create]
    
    def create
        user = User.create!(user_params)
            render json: user, status: :created
    end

    def show
        render json: current_user
    end

    def index
        users = User.all
        render json: users, status: :ok
    end

    def destroy
        user = User.find_by!(id: params[:id])
        # user.blogs.destroy_all
        # user.comments.destroy_all
        session.delete :user_id
        user.destroy
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
