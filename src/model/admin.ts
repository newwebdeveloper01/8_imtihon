import { DataTypes, Model } from 'sequelize';
import sequelize from './db/connection';

class Admin extends Model {
    [x: string]: any;
    public adminId!: number
    public username!: string
    public password!: number
}


Admin.init({
    adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: {
            isLowercase: true,
            len: [2, 32],
        },
    },
    password: DataTypes.STRING(32),
}, {
    tableName: 'admin',
    sequelize,
    paranoid: true
});


export default Admin;