const express = require('express');
const axios = require('axios');
const app = express();

app.get('/cep', async (req, res) => {
  try {
    const resposta = await axios.get('https://viacep.com.br/ws/56503705/json/');
    res.json(resposta.data);
  } catch (e) {
    res.status(500).json({ erro: 'Falha ao consultar ViaCEP' });
  }
});

app.listen(3000, () => console.log('API rodando na porta 3000'));
