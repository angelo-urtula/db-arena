class Gladiator < ApplicationRecord
    has_many :kills, dependent: :delete_all
    has_many :souls, dependent: :delete_all
end
