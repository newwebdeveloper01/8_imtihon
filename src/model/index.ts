import Cars from "./cars";
import Models from "./model"
import sequelize from "./db/connection";

Models.hasMany(Cars, {
    foreignKey: 'modelId',
    onDelete: 'cascade'
})

Cars.belongsTo(Models, {
    foreignKey: 'modelId',
});


sequelize.sync()

export {
    Models,
    Cars
}