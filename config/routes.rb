Rails.application.routes.draw do
  
  resources :dummies
  namespace :api do
    namespace :v1 do
      resources :fruits 
    end
  end
  root to: 'home#index'
end
