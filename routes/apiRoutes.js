const tables = require("../data/tables");
const waitList = require("../data/waitList");
module.exports = function(app) {
    app.get("/api/tables", (req, res) => {
        console.log(tables);
        res.json(tables);
    });
    
    app.post("/api/tables", (req, res) => {
        const newTable = req.body;
        console.log(newTable);
        if(tables.length < 5){
            tables.push(newTable);
            res.json(newTable);            
        } else {
            waitList.push(newTable);
            console.log(waitList);
            res.json({ success: false });
        }
            
    });
}