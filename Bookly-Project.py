from flask import Flask, render_template, request
import pymysql as sql


app = Flask(__name__)

def db_connect():
    db = sql.connect(host='localhost',port=3306,user='root',database='bookly')

    cursor = db.cursor()
    return db,cursor





@app.route("/")
def index():
    return render_template("/index.html")



@app.route("/items/")
def items():
    return render_template("bookly-items.html")

@app.route("/items/",methods=['GET','POST'])
def afterorder():
    if request.method == 'GET':
        return render_template('bookly-items.html')
    
    else:
        book_name = request.form.get('book_name')
        user = request.form.get('user')
        address = request.form.get('address')
        landmark = request.form.get('landmark')
        country = request.form.get('country')
        state = request.form.get('state')
        city = request.form.get('city')
        pincode = request.form.get('pincode')
        mobile = request.form.get('mobile')

        db, cursor = db_connect()

        cmd = f"insert into Orders(Book_Name,User_Name,Address,Landmark,Country,State,City,Pincode,Mobile) values('{book_name}','{user}','{address}','{landmark}','{country}','{state}','{city}',{pincode},'{mobile}');"

        cursor.execute(cmd)

        db.commit()

        db.close()

        msgg = "Ordered Successfully"

        return render_template('bookly-items.html',data=msgg) 


@app.route('/',methods=['GET',"POST"])
def aftersubmit():
    if request.method == 'GET':
        return render_template('index.html')

    else:
        name = request.form.get('name')
        gmail = request.form.get('gmail')
        password = request.form.get('password')  

        db, cursor = db_connect()

        cmd = f"insert into Users values('{name}','{gmail}','{password}')"

        cursor.execute(cmd)

        db.commit()

        db.close()

        msg = "Account created successfully"

        return render_template('index.html',data=msg) 



app.run(debug=True)
        



