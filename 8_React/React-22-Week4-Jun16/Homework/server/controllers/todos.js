let todos = [
    {
        id: 1,
        title: "Learn React",
        completed: true
    },
    {
        id: 2,
        title: "Learn to connect React and Node",
        completed: false
    }
];

// Step 2: update the create request to be able to add an item to the list

const create = (req, res) => {
    todos.push(req.body);
    res.status(200).send(todos);
};

const update = (req, res) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === Number(req.params.todoId)) todos[i] = req.body;
    }
    res.status(200).send(todos);
};

const list = (req, res) => {
    res.status(200).send(todos);
};

// Step 4: implement the delete feature here.

const destroy = (req, res) => {
    const index = todos.findIndex(
        todo => todo.id === parseInt(req.params.todoId)
      );
      todos.splice(index, 1);
      res.status(200).send(todos);
};

module.exports = {
    list,
    create,
    update,
    destroy
};
