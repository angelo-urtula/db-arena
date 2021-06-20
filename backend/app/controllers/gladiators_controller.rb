class GladiatorsController < ApplicationController
    def index
        gladiators = Gladiator.all
        render json: gladiators.to_json(include: [:kills, :souls])
    end

    def create
        @gladiator = Gladiator.create(
            name: params[:name],
            motto: params[:motto],
            reason: params[:reason],
            honor: params[:honor]
        )
        render json: @gladiator
    end
end
