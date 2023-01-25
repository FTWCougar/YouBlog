class User < ApplicationRecord
    has_secure_password
    has_many :blogs, dependent: :destroy
    has_many :bloglikes, dependent: :destroy
    has_many :commentlikes, dependent: :destroy
    has_many :userkeeps, dependent: :destroy
    has_many :blogs, through: :userkeeps
    validates_uniqueness_of :username, :email
end
