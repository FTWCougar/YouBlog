class Api::CommentlikesController < ApplicationController

    def create
        like = Commentlike.create!(
            liked: params[:liked],
            comment_id: params[:comment],
            user_id: params[:user],
        )

        render json: like.comment.blog, status: :created, serializer: BlogSerializer
    end
end
