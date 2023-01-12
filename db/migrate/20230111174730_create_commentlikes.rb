class CreateCommentlikes < ActiveRecord::Migration[7.0]
    def change
        create_table :commentlikes do |t|
            t.belongs_to :user, null: false, foreign_key: true
            t.belongs_to :comment, null: false, foreign_key: true
            t.boolean :liked

            t.timestamps
        end
    end
end
