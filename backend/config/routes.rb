Rails.application.routes.draw do
  resources :souls
  resources :kills
  resources :gladiators do
    resources :souls, only: [:create, :destroy]
    resources :kills, only: [:create, :update, :index, :show]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
