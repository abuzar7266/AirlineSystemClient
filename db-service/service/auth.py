from service import app,client,request,jsonify
import datetime


@app.route('/signup',methods = ['POST'])
def signup_account():
    signup_data = request.json['signup_data']

    user_db = client['user']
    return 'Test Pass'

@app.route('/login',methods = ['GET'])
def login_account():
    return 'Test Pass'


@app.route('/booked',methods = ['GET'])
def getBooked_account():
    return 'Test Pass'

@app.route('/history',methods = ['GET'])
def getBookingHistory_account():
    return 'Test Pass'



@app.route('/searchFlight',methods = ['GET'])
def searchFlight_account():
    return 'Test Pass'


@app.route('/addBooking/<string:booking_id>',methods = ['GET'])
def addBooking_account(booking_id):
    return 'Test Pass'

@app.route('/pay',methods = ['GET'])
def pay_account():
    return 'Test Pass'


@app.route('/generate_otp',methods = ['GET'])
def generateOTP():
    return 'Test Pass'


@app.route('/cancelBooking/<string:booking_id>',methods = ['GET'])
def cancel():
    return 'Test Pass'


