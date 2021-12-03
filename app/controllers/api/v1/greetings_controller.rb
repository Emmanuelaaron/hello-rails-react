class Api::V1::GreetingsController < ApplicationController
  def index
    render :json {
      greeting: Greeting.all.sample,
      code: 200
    }
  end
end
