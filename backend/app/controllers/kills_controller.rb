class KillsController < ApplicationController
    def index
        kills = Kill.all
        render json: kills.to_json(include: [:gladiator])
    end

    def create
        @kill = Kill.new(kill_params)

        if @kill.save
          render json: @kill, status: :created
        else
          render json: @kill.errors, status: :unprocessable_entity
        end
    end

    private

    def kill_params
        params.require(:kill).permit(:gladiator_id, :message)
    end
end
