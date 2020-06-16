const express = require('express')
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    var text=`Overview.pdf
Folder2\\Drw\\IWP1.pdf
Folder3\\ISO.pdf
Folder3\\IWP1.pdf`;

    res.setHeader('Content-type', "application/octet-stream");

    res.setHeader('Content-disposition', 'attachment; filename=file.lst');

    return res.send(text);
});
 
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);