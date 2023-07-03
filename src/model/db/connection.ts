import {Sequelize}  from 'sequelize';

const sequelize= new Sequelize({
    username:'postgres',
    host:'localhost',
    password:'1234',
    database:'imtihon',
    logging:false,
    dialect:'postgres'
})


!async function () {
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
    
}()

export default sequelize;
