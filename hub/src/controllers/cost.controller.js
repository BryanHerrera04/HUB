import Cost from "../models/Cost";

export async function getCosts(req, res) {
  const costs = await Cost.findAll();
  try {
    res.json({
      data: costs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se encontró ningun costo",
      data: {},
    });
  }
}

export async function createCost(req, res) {
  const { tp_id, td_id, ld_id, cost } = req.body;
  try {
    const newCost = await Cost.create(
      {
        tp_id,
        td_id,
        ld_id,
        cost,
      },
      {
        fields: ["tp_id", "td_id", "ld_id", "cost"],
      }
    );
    if (newCost) {
      return res.json({
        message: "Costo creado satisfactoriamente",
        data: newCost,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se creó ningun costo",
      data: {},
    });
  }
}

export async function getOneCost(req, res) {
  const { id } = req.params;
  try {
    const cost = await Cost.findOne({
      where: {
        c_id: id,
      },
    });
    res.json({
      data: cost,
    });
  } catch (error) {
    res.status(500).json({
      message: "No se encontró el costo ",
    });
  }
}

export async function deleteCost(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Cost.destroy({
      where: {
        c_id: id,
      },
    });
    res.json({
      message: "Costo eliminado sastifactoriamente",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "No se eliminó el costo ",
    });
  }
}

export async function putCost(req, res) {
  const { id } = req.params;
  const { tp_id, td_id, ld_id, cost } = req.body;

  try {
    const costs = await Cost.findAll({
      attributes: ["c_id", "tp_id", "td_id", "ld_id", "cost"],
      where: {
        c_id: id,
      },
    });
    if (costs.length > 0) {
      costs.forEach(async (costo) => {
        await costo.update({
          tp_id,
          td_id,
          ld_id,
          cost,
        });
      });
    }
    return res.json({
      message: "Costo editado sastifactoriamente",
      data: costs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se editó el costo",
    });
  }
}

export async function getCostByLdamage(req, res) {
  const { ld_id } = req.params;
  const cost = await Cost.findAll({
    attributes: ["c_id", "tp_id", "td_id", "ld_id", "cost"],
    where: { ld_id },
  });
  res.json({ cost });
}

export async function getCostByTdamage(req, res) {
  const { td_id } = req.params;
  const cost = await Cost.findAll({
    attributes: ["c_id", "tp_id", "td_id", "ld_id", "cost"],
    where: { td_id },
  });
  res.json({ cost });
}

export async function getCostByTpainting(req, res) {
  const { tp_id } = req.params;
  const cost = await Cost.findAll({
    attributes: ["c_id", "tp_id", "td_id", "ld_id", "cost"],
    where: { tp_id },
  });
  res.json({ cost });
}
