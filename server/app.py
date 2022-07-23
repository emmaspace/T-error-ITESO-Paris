from flask import Flask, request, Response
import main 
# Creation of the Flask app
app = Flask(__name__)


# Flask route for elegibility and CO2 capture
@app.route('/proyecto-forestal',methods=['GET','POST'])
def elegibilidad():
    return main.rutina_elegibilidad(request)

@app.route('/captura-carbono',methods=['GET','POST'])
def captura_carbono():
    return main.captura_carbono(request)

if __name__ == "__main__":
	app.run(debug=False, host='0.0.0.0', port=4000)	