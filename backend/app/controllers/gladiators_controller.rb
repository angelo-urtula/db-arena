class GladiatorsController < ApplicationController
    before_action :set_gladiator, only: [:show, :destroy, :update]
    def index
        gladiators = Gladiator.all
        render json: gladiators.to_json(include: [:kills])
    end

    def show
        render json: @gladiator
    end
    
     
    def create
        @gladiator = Gladiator.new(gladiator_params)

        if @gladiator.save
          render json: @gladiator, status: :created
        else
          render json: @gladiator.errors, status: :unprocessable_entity
        end
    end

    def update
      if @gladiator.update(gladiator_params)
        render json: @gladiator
      else
        render json: @gladiator.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @gladiator.destroy
    end

    private
    def set_gladiator
      @gladiator = Gladiator.find(params[:id])
    end

    def gladiator_params
        params.require(:gladiator).permit(:name, :motto, :honor, :reason, :souls)
    end
end
