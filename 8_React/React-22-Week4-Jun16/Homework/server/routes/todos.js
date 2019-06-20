const todos = require("../controllers/todos");

module.exports = app => {
    app.get("/api/todos", todos.list);
    app.post("/api/todos", todos.create);
    app.put("/api/todos/:todoId", todos.update);
    app.delete("/api/todos/:todoId", todos.destroy);
};
