const express = require ('express');
const router = express.Router();
const banco = require ('../mysql').banco;

// Cadastro Cliente
router.post("/", (req, res) => {
    let c = req.body;
    const SQL = `INSERT INTO clientes (usuario, email, senha) VALUES ('${c.usuario}', '${c.email}', ${c.senha})`;
    banco.getConnection((erro, con) => {
        if (erro){
            return res.status(500).send({
                mensagem: 'Erro na conexão',
                detalhes: erro
            })
        }

        con.query(SQL, (erro, resultados) => {
            con.release();

            if(erro){
                return res.status(500).send({
                    mensagem: 'Erro na SQL',
                    detalhes: erro
                })
            }

            return res.status(200).send({
                mensagem: 'Cadastro realizado com sucesso :D'
            })
        })
    })
})

module.exports = router;