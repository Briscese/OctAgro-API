const Fornecedor = require("../models/Fornecedor")

module.exports = class FornecedorControllers {
  static async cadastrarFornecedor(req, res) {
    const data = req.body.data

    if (!data.CNPJ) {
      return res.json({ message: "Por favor, digite o CNPJ!" })
    }

    if (!data.IE) {
      return res.json({ message: "Por favor, digite o IE" })
    }

    if (!data.razao_social) {
      return res.json({ message: "Por favor, digite a Razao Social" })
    }

    if (!data.responsavel) {
      return res.json({ message: "Por favor, digite um responsavel!" })
    }

    if (!data.telefone) {
      return res.json({ message: "Por favor, digite um telefone" })
    }

    if (!data.tel_celular) {
      return res.json({ message: "Por favor, digite o numero de celular!" })
    }

    if (!data.e_mail1) {
      return res.json({ message: "Por favor, entre com um e-mail" })
    }

    if (!data.cep) {
      return res.json({ message: "Por favor, entre com o numero do CEP" })
    }

    if (!data.estado) {
      return res.json({ message: "Por favor, entre o seu estado " })
    }

    if (!data.cidade) {
      return res.json({ message: "Por favor, entre com a cidade" })
    }

    if (!data.bairro) {
      return res.json({ message: "Por favor, entre com o bairro!" })
    }

    if (!data.endereco) {
      return res.json({ message: "Por favor, entre com o endereço" })
    }

    if (!data.numero) {
      return res.json({ message: "Por favor entre com o numero do local" })
    }

    if (!data.nome_fornecedor) {
      return res.json({ message: "Por favor, digite o nome do fornecedor!" })
    }




    //eventualmente vai para Pedido

    /* if (!data.nome_motorista) {
      return res.json({ message: "Por favor, digite o nome do motorista!" })
    }

    if (!data.placa_veiculo) {
      return res.json({ message: "Por favor, digite a placa do veiculo!" })
    }

    if (!data.documentos_anexos) {
      return res.json({ message: "Por favor, anexe um documento!" })
    } */

    const fornecedor = new Fornecedor({
      CNPJ: data.CNPJ,
      IE: data.IE,
      razao_social: data.razao_social,
      responsavel: data.responsavel,
      telefone: data.telefone,
      tel_celular: data.tel_celular,
      e_mail1: data.e_mail1,
      e_mail2: data.e_mail2,
      cep: data.cep,
      estado: data.estado,
      cidade: data.cidade,
      bairro: data.bairro,
      endereco: data.endereco,
      numero: data.numero,
      complemento: data.complemento,
      comentario: data.comentario,
      nome_fornecedor: data.nome_fornecedor,
      /* nome_motorista: data.nome_motorista,
      placa_veiculo: data.placa_veiculo,
      documentos_anexos: data.documentos_anexos, */
      status_fornecedor: data.status_fornecedor,
    })

    try {
      const novoFornecedor = await fornecedor.save()
      res
        .json({ message: "Fornecedor cadastrado com sucesso!", status: 201 })
        .status(201)
    } catch (error) {
      return res.json(error).status(500)
    }
  }

  static async deletarFornecedor(req, res) {
    const oId_fornecedor = req.params.id
    const fornecedor = await Fornecedor.findByPk(oId_fornecedor)
    const data = req.body
    try {
        await Fornecedor.update(
          {
            status_fornecedor: data.status_fornecedor
          },
          {
            where: {
              id_fornecedor: oId_fornecedor,
            },
          }
        )
        res.status(200).json({ message: "Fornecedor deletado  com sucesso!" })
      } catch (error) {
        return res.json("deu erro").status(500)
      }
  }

  static async atualizarFornecedor(req, res) {
    const idFornecedor = req.params.id
    const data = req.body

    if (!data.CNPJ) {
      return res.json({ message: "Por favor, digite o CNPJ!" })
    }

    if (!data.IE) {
      return res.json({ message: "Por favor, digite o IE" })
    }

    if (!data.razao_social) {
      return res.json({ message: "Por favor, digite a Razao Social" })
    }

    if (!data.responsavel) {
      return res.json({ message: "Por favor, digite um responsavel!" })
    }

    if (!data.telefone) {
      return res.json({ message: "Por favor, digite um telefone" })
    }

    if (!data.tel_celular) {
      return res.json({ message: "Por favor, digite o numero de celular!" })
    }

    if (!data.e_mail1) {
      return res.json({ message: "Por favor, entre com um e-mail" })
    }

    if (!data.cep) {
      return res.json({ message: "Por favor, entre com o numero do CEP" })
    }

    if (!data.estado) {
      return res.json({ message: "Por favor, entre o seu estado " })
    }

    if (!data.cidade) {
      return res.json({ message: "Por favor, entre com a cidade" })
    }

    if (!data.bairro) {
      return res.json({ message: "Por favor, entre com o bairro!" })
    }

    if (!data.endereco) {
      return res.json({ message: "Por favor, entre com o endereço" })
    }

    if (!data.numero) {
      return res.json({ message: "Por favor entre com o numero do local" })
    }

    if (!data.nome_fornecedor) {
      return res.json({ message: "Por favor, digite o nome do fornecedor!" })
    }

    try {
      await Fornecedor.update(
        {
          CNPJ: data.CNPJ,
          IE: data.IE,
          razao_social: data.razao_social,
          responsavel: data.responsavel,
          telefone: data.telefone,
          tel_celular: data.tel_celular,
          e_mail1: data.e_mail1,
          e_mail2: data.e_mail2,
          cep: data.cep,
          estado: data.estado,
          cidade: data.cidade,
          bairro: data.bairro,
          endereco: data.endereco,
          numero: data.numero,
          complemento: data.complemento,
          comentario: data.comentario,
          nome_fornecedor: data.nome_fornecedor
        },
        {
          where: {
            id_fornecedor: idFornecedor,
          },
        }
      )
      res.status(200).json({ message: "Fornecedor atualizado com sucesso!" })
    } catch (error) {
      return res.json("deu erro").status(500)
    }
  }

  static async listarFornecedor(req, res) {
    try {
      const oFornecedor = await Fornecedor.findAll({
        where: { status_fornecedor: 1 },
      })
      return res.json(oFornecedor).status(200)
    } catch (error) {
      return res.json(error).status(500)
    }
  }

  static async procurarFornecedor(req, res) {
    const idFornecedor = req.params.id
    const fornecedorProcurado = await Fornecedor.findByPk(idFornecedor)
    
    if (!fornecedorProcurado) {
      res.status(422).json({ message: "Fornecedor não encontrado" })
    }

    res.status(200).json({ message: fornecedorProcurado })
  }

  static async alterarStatusFornecedor(req, res) {
    const oId_fornecedor = req.params.id

    console.log(oId_fornecedor)

    const fornecedor = await Fornecedor.findByPk(oId_fornecedor)

    try {
      if (fornecedor.status_fornecedor == true) {
        await Fornecedor.update(
          {
            status_fornecedor: false,
          },
          {
            where: {
              id_fornecedor: oId_fornecedor,
            }
          }
        )
      } else {
        await Fornecedor.update(
          {
            status_fornecedor: true,
          },
          {
            where: {
              id_fornecedor: oId_fornecedor,
            }
          }
        )
      }
      return res
        .json({
          message: "Status do fornecedor alterado com sucesso!",
          status: 201,
        })
        .status(201)
    } catch (error) {
      return res.json(error).status(500)
    }
  }
}
