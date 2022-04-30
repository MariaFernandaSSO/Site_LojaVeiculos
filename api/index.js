const express = require('express');
const server = express();

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
};
const cors = require('cors');
server.use(cors(corsOptions));

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

// rotas
const rotaClientes = require('./rotas/clientes');
server.use('/cliente', rotaClientes);
const rotaVeiculos = require('./rotas/veiculo');
server.use('/veiculo', rotaVeiculos);

server.get("/conectar", (req, res) => {
    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: "Erro de conexão",
                erro: erro
            });
        }

        return res.status(200).send({
            mensagem: "Conectado com sucesso!"
        });
    });
});

server.listen(3000, () => {
    console.log('Servidor funcionando!');
});

