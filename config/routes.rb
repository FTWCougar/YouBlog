Rails.application.routes.draw do
    namespace :api do
        resources :users
        resources :userkeeps
        resources :commentlikes
        resources :bloglikes
        resources :comments
        resources :blogs
        get "/me", to: "users#show"
        post "/signup", to: "users#create"
        post "/login", to: "sessions#create"
        delete "/logout", to: "sessions#destroy"
    end
    get "*path",
            to: "fallback#index",
            constraints: ->(req) { !req.xhr? && req.format.html? }
end
