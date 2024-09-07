chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.features) {
      // Load the pre-trained model
      fetch(chrome.runtime.getURL('logistic_regression_model.pkl'))
          .then(response => response.arrayBuffer())
          .then(buffer => {
              // Assuming you have a function to load and use the model
              // This is a placeholder for the actual model loading and prediction logic
              const model = loadModel(buffer);
              const prediction = model.predict(request.features);
              sendResponse({prediction: prediction});
          });
      return true; // Will respond asynchronously
  }
});

// Placeholder function for loading the model
function loadModel(buffer) {
  // Implement the logic to load and use the model
  // This is a placeholder and needs to be replaced with actual model loading code
  return {
      predict: function(features) {
          // Placeholder prediction logic
          return Math.round(Math.random() * 10);
      }
  };
}