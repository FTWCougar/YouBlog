Rails.application.routes.draw do
    namespace :api do
        resources :commentlikes
        resources :bloglikes
        resources :saves
        resources :saveds
        resources :comments
        resources :blogs
        resources :users
        get "/me", to: "users#show"
        post "/signup", to: "users#create"
        post "/login", to: "sessions#create"
        delete "/logout", to: "sessions#destroy"
    end
    get "*path",
            to: "fallback#index",
            constraints: ->(req) { !req.xhr? && req.format.html? }
end
