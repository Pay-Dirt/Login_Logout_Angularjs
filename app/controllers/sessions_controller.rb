class SessionsController < ApplicationController
  
  def create
    user = User.find_by(email: session_params[:email].downcase)
    if user && user.authenticate(session_params[:password])
      log_in user
      render json: {success: {success: "yes",type: "notice",message: "You have logged in successfully."},user: user}
    else
      render json: {success: {success: "no"}}
      #will use for later rendering of json
      #render json: ["Invalid Username or password",user:user]
    end
  end
  
  def destroy
    session[:user_id] = nil
    render json: {}
  end
  
  private
  def session_params
    params.require(:session).permit(:email,:password)
  end
end
