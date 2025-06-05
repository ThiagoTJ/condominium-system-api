const Unidade = require('../models/Unidade')
const Condominio = require('../models/Condominio')

module.exports = {
  async listarPorCondominio(req, res) {
    try {
      const { condominioId } = req.params
      const unidades = await Unidade.findAll({ where: { condominioId }})
      res.json(unidades)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar unidades' })
    }
  },
  async criar(req, res) {
    try {
      const { numero, bloco, condominioId } = req.body
      const condominio = await Condominio.findByPk(condominioId)
      if(!condominio) {
        return res.status(404).json({ error: 'Condominio não econtrado' })
      }
      const unidade = await Unidade.create({ numero, bloco, condominioId })
      res.status(201).json(unidade) 
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar unidade' })
    }
  },
  async atualizar(req, res) {
    try {
      const { id } = req.params
      const { numero, bloco } = req.body

      const unidade = await Unidade.findByPk(id)
      if(!unidade) {
        return res.status(404).json({ error: 'Unidade não encontrada'})
      }
      await unidade.update({ numero, bloco })
      res.json(unidade)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar unidade'})
    }
  },
  async deletar(req, res) {
    try {
      const { id } = req.params
      const unidade = await Unidade.findByPk(id)
      if(!unidade) {
        return res.status(404).json({ error: 'Unidade nao encontrada'})
      }
      await unidade.destroy()
      res.json({ message: 'Unidade removida com sucesso'})
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar unidade' })
    }
  }
}