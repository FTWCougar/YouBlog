class CreateApiUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :api_users do |t|

      t.timestamps
    end
  end
end
