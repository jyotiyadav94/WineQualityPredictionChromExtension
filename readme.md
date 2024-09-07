# Wine Quality Predictor Chrome Extension

## Overview
The Wine Quality Predictor Chrome Extension is a tool that allows users to predict the quality of wine based on its features. This extension uses a pre-trained logistic regression model to make predictions. Users can input various wine attributes such as acidity, sugar content, and alcohol percentage, and the extension will output a predicted quality score.

## Features
- **User-Friendly Interface:** A simple and intuitive form for inputting wine features.
- **Real-Time Prediction:** Instantly get the predicted quality of the wine.
- **Normalization:** Automatically normalizes input features to match the model's training data.

## Installation

### Step 1: Clone the Repository
Clone this repository to your local machine using:
```bash
git clone https://github.com/yourusername/wine-quality-predictor.git
cd wine-quality-predictor
```

### Step 2: Load the Extension in Chrome
- Open Chrome and go to chrome://extensions/.
- Enable "Developer mode" in the top right corner.
- Click "Load unpacked" and select the wine_quality_extension directory from the cloned repository.

### Step 3: Use the Extension
- Click on the extension icon in the Chrome toolbar to open the popup.
- Enter the wine features in the provided form.
- Click "Predict" to see the predicted quality of the wine.

### Usage
Input Features
The extension requires the following input features:

Fixed Acidity
Volatile Acidity
Citric Acid
Residual Sugar
Chlorides
Free Sulfur Dioxide
Total Sulfur Dioxide
Density
pH
Sulphates
Alcohol
Prediction
After entering the features, click the "Predict" button. The extension will display the predicted quality of the wine.

### Development
Directory Structure

```bash
wine_quality_extension/
│
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── style.css
└── logistic_regression_model.pkl
```

### Files
- manifest.json: Configuration file for the Chrome extension.
- background.js: Background script that handles the prediction logic.
- popup.html: HTML file for the extension's popup interface.
- popup.js: JavaScript file that handles form submission and communicates with the background script.
- style.css: CSS file for styling the popup interface.
- logistic_regression_model.pkl: Pre-trained logistic regression model for wine quality prediction.

### Model Loading
The background.js file contains a placeholder function for loading the model. You need to implement the actual logic to load and use the pre-trained model. This might involve using a library like TensorFlow.js or a custom implementation to deserialize the model.

### Customization
- UI/UX: Customize the popup.html and style.css files to improve the user interface and experience.
- Model: Replace the placeholder model loading logic in background.js with the actual implementation.

### Contributing
- Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments
The pre-trained logistic regression model was trained on the Wine Quality dataset.

Special thanks to the open-source community for providing tools and libraries that made this project possible.

### Contact
For any questions or feedback, please contact jojoyadav255@gmail.com.

Enjoy predicting wine quality with the Wine Quality Predictor Chrome Extension!



