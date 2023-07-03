import { DataTypes, Model } from 'sequelize';
import sequelize from './db/connection'

class Models extends Model {
    public modelId!: number
    public name!: string
}


Models.init({
    adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    image:{
        type:DataTypes.STRING(64),
        allowNull: false

    }
}, {
    tableName: 'models',
    sequelize,
    paranoid: true
});


export default Models;