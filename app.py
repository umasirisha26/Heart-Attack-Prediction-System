from flask import Flask, render_template, request, redirect
import pickle
import numpy as np

app = Flask(__name__, template_folder='templates', static_url_path='/static')

# Load your pre-trained ML model
with open('C:\\Users\\91863\\OneDrive\\Documents\\final project\\stacking_classifier.pkl', 'rb') as file:
   model  = pickle.load(file)

@app.route('/')
def landing():
    return render_template('landing.html')

@app.route('/login.html')
def login():
    return render_template('login.html')

@app.route('/register.html')
def register():
    return render_template('register.html')

@app.route('/input.html')
def index():
    return render_template('input.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Process form data and perform prediction
        age = float(request.form['age'])
        sex = request.form['sex']  # Keep it as a string
        cp = int(request.form['cp'])
        bp = float(request.form['bp'])
        chol = float(request.form['chol'])
        fbs = int(request.form['fbs'])
        restecg = int(request.form['restecg'])
        thalach = float(request.form['thalach'])
        exang = int(request.form['exang'])
        oldpeak = float(request.form['oldpeak'])
        slope = int(request.form['slope'])
        ca = int(request.form['ca'])
        thal = int(request.form['thal'])

        # Encode 'sex' as numerical value
        sex_encoded = 0 if sex == 'male' else 1

        input_data = np.array([[age, sex_encoded, cp, bp, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])

        prediction = model.predict(input_data)

        # Redirect based on final prediction
        if prediction[0] == 1:
            return redirect('/positive')
        else:
            return redirect('/negative')

    except Exception as e:
        # Handle exceptions, such as invalid input data
        return render_template('error.html', error_message=str(e))

# Route for the positive result page
@app.route('/positive')
def positive():
    return render_template('positive.html')

# Route for the negative result page
@app.route('/negative')
def negative():
    return render_template('negative.html')

if __name__ == '__main__':
    app.run(debug=True)