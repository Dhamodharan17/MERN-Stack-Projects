const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on port ${port}`));



// endpoint : express_backend
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
}); 