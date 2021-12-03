Rails.application.routes.draw do
  get 'static/index'
  namespace :api do
    namespace :v1 do
      get '/greeting', to: 'greetings#index'
    end
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
