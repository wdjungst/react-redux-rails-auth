class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def info
    unless current_user
      render json: {}
    end
  end
end
