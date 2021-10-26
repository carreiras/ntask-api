module.exports = app => {
    const Tasks = app.models.tasks;

    app.route('/tasks')
            .all((req, res) => {
                // middleware de pré-execução das rotas
                delete req.body.id;
                next();
            })
            .get((req, res) => {
                // "/tasks: lista tarefas
            })
            .post((req, res) => {
                // "/tasks: cadastra uma nova tarefa
            });

    app.route('/tasks/:id')
            .all((req, res) => {
                // Middleware de pré-execução das rotas
                delete req.body.id;
                next();
            })
            .get((req, res) => {
                // "/tasks/1: consulta uma tarefa
            })
            .put((req, res) => {
                // "/tasks/1: atualiza uma tarefa
            })
            .delete((req, res) => {
                // "/tasks/1: exclui uma tarefa
            });
};
