# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :login
      t.string :password_digest
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :middle_name
      t.string :location
      t.string :phone
      t.string :telegram
      t.datetime :birthday
      t.string :position
      t.string :bio
      t.string :reset_password_token
      t.datetime :reset_password_sent_at

      t.timestamps
    end
  end
end
