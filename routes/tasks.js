module.exports = app => {
    const Tasks = app.models.tasks;

    app.route('/tasks')
            .all((req, res) => {
                delete req.body.id;
                next();
            })
            .get(async (req, res) => {
                try {
                    const result = await Tasks.findAll();
                    res.json(result);
                } catch (err) {
                    res.status(412).json({msg: err.message});
                }
            })
            .post(async (req, res) => {
                try {
                    const result = await Tasks.create(req.body);
                    res.json(result);
                } catch (err) {
                    res.tatus(412).json({msg: err.message});
                }
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
