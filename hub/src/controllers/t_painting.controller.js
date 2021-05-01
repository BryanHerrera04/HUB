import T_painting from '../models/T_painting';

export async function getTpainting(req, res) {
    const Tpaintings = await T_painting.findAll();
    try {
        res.json({
            data: Tpaintings
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'No se encontró ningun tipo de pintura',
            data: {}
        });
    }
};

export async function createTpainting(req, res) {
    const { tp_name } = req.body;
    try {
        const newtpainting = await T_painting.create({
            tp_name
        }, {
            fields: ["tp_name"]
        });
        if (newtpainting) {
            return res.json({
                message: 'Tipo de pintura creada satisfactoriamente',
                data: newtpainting
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'No se creó ningun tipo de pintura',
            data: {}
        });
    }
};

export async function getOneTpainting(req, res) {
    const { id } = req.params;
    try {
        const tpainting = await T_painting.findOne({
            where: {
                tp_id: id
            }
        });
        res.json({
            data: tpainting
        });
    } catch (error) {
        res.status(500).json({
            message: 'No se encontró el tipo de pintura ',
        });
    }
};

export async function deleteTpainting(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await T_painting.destroy({
            where: {
                tp_id: id
            }
        });
        res.json({
            message: 'Tipo de pintura eliminado sastifactoriamente',
            count: deleteRowCount
        })
    } catch (error) {
        res.status(500).json({
            message: 'No se eliminó el tipo de pintura ',
        });
    }
};

export async function putTpainting(req, res) {
    const { id } = req.params;
    const { tp_name } = req.body;

    try {
        const Tpaintings = await T_painting.findAll({
            attributes: ['tp_id', 'tp_name'],
            where: {
                tp_id: id
            }
        });
        if (Tpaintings.length > 0) {
            Tpaintings.forEach(async tpainting => {
                await tpainting.update({
                    tp_name
                });
            })
        }
        return res.json({
            message: 'Tipo de pintura editado sastifactoriamente',
            data: Tpaintings
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'No se editó el tipo de pintura',
        });
    }
};