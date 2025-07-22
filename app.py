from flask import Flask, render_template, request
import numpy as np
import pickle
import os

app = Flask(__name__)

with open('model/model_prediksi.pkl', 'rb') as f:
    data = pickle.load(f)
    model = data['model']
    scaler = data['scaler']

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.form
        features = np.array([
            float(data['pregnancies']),
            float(data['glucose']),
            float(data['blood_pressure']),
            float(data['skin_thickness']),
            float(data['insulin']),
            float(data['bmi']),
            float(data['dpf']),
            float(data['age'])
        ]).reshape(1, -1)

        features_scaled = scaler.transform(features)

        prediction = model.predict(features_scaled)[0]

        result = "Berisiko Tinggi Terkena Diabetes Gestasional" if prediction == 1 else "Berisiko Rendah Terkena Diabetes Gestasional"

        return render_template('index.html', result=result)

    except Exception as e:
        return f"Terjadi kesalahan: {e}", 500

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)


