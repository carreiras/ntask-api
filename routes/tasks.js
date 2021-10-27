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
                    res.status(412).json({msg: err.message});
                }
            });

    app.route('/tasks/:id')
            .all((req, res) => {
                delete req.body.id;
                next();
            })
            .get(async (req, res) => {
                try {
                    const {id} = req.params;
                    const where = {id};
                    const result = await Tasks.findOne({where});
                    if (result)
                        res.json(result);
                    else
                        res.sendStatus(404);
                } catch (err) {
                    res.status(412).json({msg: err.message});
                }
            })
            .put((req, res) => {
                // "/tasks/1: atualiza uma tarefa
            })
            .delete((req, res) => {
                // "/tasks/1: exclui uma tarefa
            });
};
