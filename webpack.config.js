const path = require('path');

module.exports = {
  // Correctly setting the entry point for your theme 'Au'
  entry: './themes/Au/assets/js/index.js', 
  output: {
    filename: 'app.js',
    // FIX: Must use the Node.js global variable __dirname
    path: path.resolve(__dirname, 'themes','Au','assets', 'js') 
  }
};