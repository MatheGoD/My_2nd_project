const { createApp } = require('./app');
const { appDataSource } = require('./src/models/data-source');

const startServer = async () => {
    const app = createApp();
    const PORT = process.env.PORT;

    app.get('/ping', (req, res) => {
        res.json({ message: 'pong' });
    });

    await appDataSource
        .initialize()
        .then(() => {
            console.log('Data Source has been initialised!');
        })
        .catch((err) => {
            console.error('Error during Data Source initialisation', err);
        });

    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });
};

startServer();
