import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Cost from './Cost';


const T_painting = sequelize.define('t_painting', {
    tp_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tp_name: {
        type: Sequelize.CHAR
    },
}, {
    freezeTableName: true,
    timestamps: false
});

T_painting.hasMany(Cost, { foreingKey: 'tp_id', sourceKey: 'tp_id' });
Cost.belongsTo(T_painting, { foreingKey: 'tp_id', sourceKey: 'tp_id' });

export default T_painting;