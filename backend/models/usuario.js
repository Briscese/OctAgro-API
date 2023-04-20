const Sequelize = require('sequelize')
const db = require('../db/conexao')

//adicionei-----------------------
const bcrypt = require('bcryptjs')
//--------------------------------

const Usuario = db.define('usuario', {
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type:Sequelize.STRING,
        require: true
    },
    senha: {
        type:Sequelize.STRING,
        require: true
    },
    
    email: {
        type:Sequelize.STRING,
        require: true
    },

    funcao: Sequelize.STRING,

    dataAdmissao: Sequelize.DATE,

    CPF: Sequelize.INTEGER,

    RG: Sequelize.INTEGER,

    dataNascimento: Sequelize.DATE,

    genero: Sequelize.STRING(1)

    
}, {
    timestamp: false
})

//adicionei---------------------------------------------------
async function contar(){
    const usuarios = await Usuario.count(Usuario.id_usuario)
    return usuarios;
}
contar().then(function(valor) {
    console.log('Quantidade', valor);
    if (valor === 0) {


        const salt = bcrypt.genSaltSync(10)
        const hashedSenha = bcrypt.hashSync('123', salt)
    
        Usuario.create({
            nome: 'Gabriel Briscese',
            senha: hashedSenha,
            email: 'gabriel@live.com',
            funcao: 'Analista',
            dataAdmissao: '10-01-2010',
            CPF: '123',
            RG: '321',
            dataNascimento: '10-03-1998',
            genero: 'M'
    
        })
    
        Usuario.create({
            nome: 'Jean',
            senha: hashedSenha,
            email: 'jean@live.com',
            funcao: 'Aprovador',
            dataAdmissao: '10-01-2010',
            CPF: '1234',
            RG: '4321',
            dataNascimento: '10-03-1998',
            genero: 'M'
    
        })
    
        Usuario.create({
            nome: 'Jonas',
            senha: hashedSenha,
            email: 'jonas@live.com',
            funcao: 'Aprovador',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M'
    
        })
    
        Usuario.create({
            nome: 'Felipe',
            senha: hashedSenha,
            email: 'felipe@live.com',
            funcao: 'Gerente',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M'
    
        })
    
        Usuario.create({
            nome: 'Tiago',
            senha: hashedSenha,
            email: 'tiago@live.com',
            funcao: 'Recebedor',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M'
    
        })

        Usuario.create({
            nome: 'Kenzo',
            senha: hashedSenha,
            email: 'kenzo@live.com',
            funcao: 'Recebedor',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M'
    
        })

        Usuario.create({
            nome: 'Igor',
            senha: hashedSenha,
            email: 'igor@live.com',
            funcao: 'Aprovador',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M'
    
        })
    }
}).catch(function(erro) {
    console.log('Erro', erro)
})

//--------------------------------------------------

//comentar pois ele força a criar
// Usuario.sync({force: true})

module.exports = Usuario