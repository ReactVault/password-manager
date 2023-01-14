const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

    

// statically serve everything in the build folder on the route '/build'
app.use('/dist', express.static(path.join(__dirname, '/dist')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '/index.html'));
});
  



app.listen(3000); //listens on port 3000 -> http://localhost:3000/seryt

