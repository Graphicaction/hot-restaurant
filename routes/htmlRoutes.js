const path = require("path");
module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/table", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/table.html"));
    });
    app.get("/reserve", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });
}

