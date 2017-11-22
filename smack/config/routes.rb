Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :destroy, :update, :show, :index, :new, :edit] do
      # I need to make sure this is the correcrt nesting
      resources :messages, only: [:create, :index]
      resources :users, only: :index
    end

    resources :rooms, only: [:index, :create] do
      # I need to make sure this is the correcrt nesting
      resources :messages, only: [:create, :index]
      resources :users, only: :index
    end

  end

end
