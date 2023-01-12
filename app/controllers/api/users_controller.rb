class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: %i[create]
    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {
                              errors: user.errors.full_messages,
                          },
                          status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by id: session[:user_id]
        if user
            render json: user
        else
            render json: { errors: ["Unauthorized"] }, status: 401
        end
    end

    def index
        users = User.all
        render json: users, status: :ok
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
