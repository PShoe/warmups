Rails.application.routes.draw do
  get '/pokemons/show', to: 'pokemons#show'

  get '/pokemons/new', to: 'pokemons#new'

  get '/pokemons', to: 'pokemons#index'

  post '/pokemons', to: 'pokemons#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
