from flask import Flask, render_template, request
import numpy as np
import pickle

app = Flask(__name__)

# Load the pre-trained model
with open('logistic_regression_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the form data
    features = [float(x) for x in request.form.values()]
    
    # Normalize the features
    max_values = [14.23, 1.58, 1.0, 65.8, 0.611, 289.0, 440.0, 1.00369, 4.01, 2.0, 14.95]
    normalized_features = [f / max_values[i] for i, f in enumerate(features)]
    
    # Convert to numpy array
    final_features = np.array(normalized_features).reshape(1, -1)
    
    # Make prediction
    prediction = model.predict(final_features)
    
    # Return the result
    return render_template('index.html', prediction=prediction[0])

if __name__ == "__main__":
    app.run(debug=True)