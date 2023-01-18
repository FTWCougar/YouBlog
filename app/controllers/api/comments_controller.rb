class Api::CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments, status: :ok
    end
end
