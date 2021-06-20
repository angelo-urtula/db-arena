class KillsController < ApplicationController
    def index
        kills = Kill.all
        render json: kills.to_json(include: [:gladiator])
    end
end
