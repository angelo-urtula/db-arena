class GladiatorsController < ApplicationController
    def index
        gladiators = Gladiator.all
        render json: gladiators
    end
end
