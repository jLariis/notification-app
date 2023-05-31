export const config = () => ({
    port: Number(process.env.PORT),
    //jwtSecret: process.env.JWT_SECRET,
    database: {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: false,
        logging: process.env.DB_LOGGING,
        entities: ['dist/**/*.entity.js'],
        autoLoadEntities: true,
        //migrations: ['dist/**/migration/.ts']
    },
});