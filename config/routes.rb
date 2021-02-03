Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # static pages for visitors
  root to: 'pages#home'
  get '/about' => 'pages#about'
  get '/products' => 'pages#products'
  get '/contact' => 'pages#contact'
  get '/kladblok' => 'pages#kladblok'
end
