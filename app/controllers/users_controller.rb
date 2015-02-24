class UsersController < ApplicationController
  def new
  end
  
  def show
    @user = current_user
    render json: {success: {success:"yes"},user: @user}
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end
  
  private
  def gravatar_for(user)
    gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
    gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
  end
  
  def user_params
    params.permit(:name,:email,:password,:password_confirmation)
  end
end
