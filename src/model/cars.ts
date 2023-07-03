import { DataTypes, Model } from 'sequelize';
import sequelize from './db/connection'

class Car extends Model {
    public carId!: number
    public name!: string
    public motor!: number
    public year!: number
    public color!: string
}


Car.init({
    carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: {
            isLowercase: true,
            len: [2, 32],
        },
    },
    motor: DataTypes.SMALLINT,
    year: DataTypes.SMALLINT,
    color: {
        type: DataTypes.STRING(32),
        allowNull: false

    },
}, {
    tableName: 'cars',
    sequelize,
    paranoid: true
});


export default Car;