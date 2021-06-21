class GladiatorsController < ApplicationController
    def index
        gladiators = Gladiator.all
        render json: gladiators.to_json(include: [:kills, :souls])
    end

    def show
        render json: @gladiator
    end
    
     
    def create
        @gladiator = Gladiator.new(gladiator_params)
    
        if @gladiator.save
          render json: @gladiator, status: :created, location: @gladiator
        else
          render json: @gladiator.errors, status: :unprocessable_entity
        end
      end
end
