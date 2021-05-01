import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Cost from './Cost';


const T_damage = sequelize.define('t_damage',{
    td_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    td_type:{
        type: Sequelize.CHAR
    },
    td_figure:{
        type: Sequelize.CHAR
    },
    td_description:{
        type: Sequelize.CHAR
    },
    td_color:{
        type: Sequelize.CHAR
    },
},{
    freezeTableName: true,
    timestamps: false
});

T_damage.hasMany(Cost, { foreingKey: 'td_id', sourceKey: 'td_id'});
Cost.belongsTo(T_damage, { foreingKey: 'td_id', sourceKey: 'td_id'});

export default T_damage;