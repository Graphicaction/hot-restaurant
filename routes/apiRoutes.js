const tables = require("../data/tables")
module.exports = function(app) {
    app.get("/api/tables", (req, res) => {
        console.log(tables);
        res.json(tables);
    });
    
    app.post("/api/tables", (req, res) => {
        const newTable = req.body;
        console.log(newTable);
        tables.push(newTable);
        return res.json(newTable);
    });
}