import L_damage from '../models/L_damage';

export async function getLdamage(req, res) {
    const ldamages = await L_damage.findAll();
    try {
        res.json({
            data: ldamages
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'No se encontró ningun nivel de daño',
            data: {}
        });
    }
};

export async function createLdamage(req, res) {
    const { ld_name } = req.body;
    try {
        const newLdamage = await L_damage.create({
            ld_name,
        }, {
            fields: ["ld_name"]
        });
        if (newLdamage) {
            return res.json({
                message: 'Nivel de daño creado satisfactoriamente',
                data: newLdamage
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'No se creó ningun nivel de daño',
            data: {}
        });
    }
};

export async function getOneLdamage(req, res) {
    const { id } = req.params;
    try {
        const ldamage = await L_damage.findOne({
            where: {
                ld_id: id
            }
        });
        res.json({
            data: ldamage
        });
    } catch (error) {
        res.status(500).json({
            message: 'No se encontró el nivel de daño ',
        });
    }
};

export async function deleteLdamage(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await L_damage.destroy({
            where: {
                ld_id: id
            }
        });
        res.json({
            message: 'Nivel de daño eliminado sastifactoriamente',
            count: deleteRowCount
        })
    } catch (error) {
        res.status(500).json({
            message: 'No se eliminó el nivel de daño ',
        });
    }
};

export async function putLdamage(req, res) {
    const { id } = req.params;
    const { ld_name } = req.body;

    try {
        const ldamages = await L_damage.findAll({
            attributes: ['ld_id', 'ld_name'],
            where: {
                ld_id: id
            }
        });
        if (ldamages.length > 0) {
            ldamages.forEach(async ldamage => {
                await ldamage.update({
                    ld_name
                });
            })
        }
        return res.json({
            message: 'Nivel de daño editado sastifactoriamente',
            data: ldamages
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'No se editó el nivel de daño',
        });
    }
};
