const fs = require('fs');

const emptyTodos = JSON.stringify({ todos: [] }, null, '  ');

fs.writeFileSync('./db.json', emptyTodos);
