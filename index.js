const customExpress = require('./config/customExpress');
const connection = require('./database/connection');
const Tables = require('./database/tables');

connection.connect((err) => {
    
    
    if (err) {
        console.log(err);
    } 
    
    else {
        console.log('successfully connected');

        Tables.init(connection);
        const app = customExpress();
        app.listen(3000, () => console.log('launch server on 3000 port'));
    }
});
