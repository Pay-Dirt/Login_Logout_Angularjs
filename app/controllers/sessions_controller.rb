class SessionsController < ApplicationController
  
  def create
    user = User.find_by(email: session_params[:email].downcase)
    if user && user.authenticate(session_params[:password])
      log_in user
      render json: user
    else
      render json: ["Invalid Username or password"]
      #will use for later rendering of json
      #render json: ["Invalid Username or password",user:user]
    end
  end
  
  def destroy
  end
  
  private
  def session_params
    params.require(:session).permit(:email,:password)
  end
end
