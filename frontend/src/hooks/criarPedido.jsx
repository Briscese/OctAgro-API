import api from '../utils/api';

export async function criarPedido(data){
    try{
        console.log('No hook', data)
        const dados = await api.post('/administrador/pedidos/cadastrar', data);
        console.log('No hook dps da Rota:', dados)
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}