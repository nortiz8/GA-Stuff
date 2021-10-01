class Song < ApplicationRecord
    validates :artist_name, presence: true
    validates :title, presence: true
end