document.getElementById('wineForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const formData = new FormData(event.target);
    const features = Array.from(formData.values()).map(Number);

    // Normalize the features
    const maxValues = [14.23, 1.58, 1.0, 65.8, 0.611, 289.0, 440.0, 1.00369, 4.01, 2.0, 14.95];
    const normalizedFeatures = features.map((f, i) => f / maxValues[i]);

    // Convert to a 2D array
    const finalFeatures = [normalizedFeatures];

    // Make prediction
    chrome.runtime.sendMessage({features: finalFeatures}, function(response) {
        document.getElementById('predictionResult').innerText = `Predicted Quality: ${response.prediction}`;
    });
});