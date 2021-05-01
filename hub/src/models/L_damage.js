import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Cost from './Cost';


const L_damage = sequelize.define('l_damage',{
    ld_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ld_name:{
        type: Sequelize.CHAR
    },
},{
    freezeTableName: true,
    timestamps: false
});

L_damage.hasMany(Cost, { foreingKey: 'ld_id', sourceKey: 'ld_id'});
Cost.belongsTo(L_damage, { foreingKey: 'ld_id', sourceKey: 'ld_id'});

export default L_damage;