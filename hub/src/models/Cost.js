import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Cost = sequelize.define('cost', {
    c_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tp_id: {
        type: Sequelize.INTEGER
    },
    td_id: {
        type: Sequelize.INTEGER
    },
    ld_id: {
        type: Sequelize.INTEGER
    },
    cost: {
        type: Sequelize.CHAR
    }
}, {
    freezeTableName: true,
    timestamps: false
});


export default Cost;