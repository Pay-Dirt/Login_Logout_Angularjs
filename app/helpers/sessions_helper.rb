module SessionsHelper
  #this method will be used to login user
  def log_in(user)
    session[:user_id] = user.id
  end
  
  #returns current user if logged in
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
  
  #check for logged_in
  def logged_in?
    !current_user?
  end
  
  #to logout
  def log_out
    session.delete(:user_id)
    @current_user = nil
  end
end
