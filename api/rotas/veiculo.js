const express = require ('express');
const router = express.Router();
const banco = require ('../mysql').banco;
//Cadastro veiculo
router.post("/", (req, res) => {
    let v = req.body;
    const SQL = `INSERT INTO veiculos (marca, modelo,preco_venda, proprietario) VALUES
     ('${v.marca}', '${v.modelo}', ${v.preco_venda}, '${v.proprietario}')`;
    
    banco.getConnection((erro, con) => {
        if(erro){
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
                mensagem: 'Cadastro realizado com sucesso!'
            });
        });
    });
});

module.exports = router;