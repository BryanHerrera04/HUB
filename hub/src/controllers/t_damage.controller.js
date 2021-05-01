import T_damage from '../models/T_damage';

export async function getTdamage(req, res) {
    const tdamages = await T_damage.findAll();
    try {
        res.json({
            data: tdamages
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'No se encontró ningun tipo de daño',
            data: {}
        });
    }
};

export async function createTdamage(req, res) {
    const { td_type, td_figure, td_description, td_color } = req.body;
    try {
        const newtdamage = await T_damage.create({
            td_type, td_figure, td_description, td_color
        }, {
            fields: ["td_type", "td_figure", "td_description", "td_color"]
        });
        if (newtdamage) {
            return res.json({
                message: 'Tipo de daño creado satisfactoriamente',
                data: newtdamage
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'No se creó ningun tipo de daño',
            data: {}
        });
    }
};

export async function getOneTdamage(req, res) {
    const { id } = req.params;
    try {
        const tdamage = await T_damage.findOne({
            where: {
                td_id: id
            }
        });
        res.json({
            data: tdamage
        });
    } catch (error) {
        res.status(500).json({
            message: 'No se encontró el tipo de daño ',
        });
    }
};

export async function deleteTdamage(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await T_damage.destroy({
            where: {
                td_id: id
            }
        });
        res.json({
            message: 'Tipo de daño eliminado sastifactoriamente',
            count: deleteRowCount
        })
    } catch (error) {
        res.status(500).json({
            message: 'No se eliminó el tipo de daño ',
        });
    }
};

export async function putTdamage(req, res) {
    const { id } = req.params;
    const { td_type, td_figure, td_description, td_color } = req.body;

    try {
        const tdamages = await T_damage.findAll({
            attributes: ['td_id', 'td_type', 'td_figure', 'td_description', 'td_color'],
            where: {
                td_id: id
            }
        });
        if (tdamages.length > 0) {
            tdamages.forEach(async tdamage => {
                await tdamage.update({
                    td_type, td_figure, td_description, td_color
                });
            })
        }
        return res.json({
            message: 'Tipo de daño editado sastifactoriamente',
            data: tdamages
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'No se editó el tipo de daño',
        });
    }
};