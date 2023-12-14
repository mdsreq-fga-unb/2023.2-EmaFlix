const { describe, before, after, it } = require('node:test');
const assert = require('node:assert');
const { once } = require('node:events');
const axios = require('axios');
const { deepEqual, deepStrictEqual, equal, throws } = require('node:assert');



const BASE_URL = 'https://recanto-cinema-a74e4167e1ec.herokuapp.com'
var GLOBAL_LOGIN = ''


describe('API CONTROLLERS Test Suite', () => { 
  let _server = {} 


  before(async () => {
    try {
      _server = require('../app.js')
    } catch (error) {
      throw new Error(`Error importing module: ${error.message}`);
    }
  });


// cria um usuário
  before(async () => {
    try {
      const user = {
        username: 'teste',
        password: 'teste'
      }
    
      await axios.post(`${BASE_URL}/register`, user);
    } catch (error) {

    }
  })

  
  describe('Usuário', () => {
    it('Deve retornar um erro ao tentar registrar um usuário já existente', async () => {
      try {
        const user = {
          username: 'teste',
          password: 'teste'
        };
        
        await axios.post(`${BASE_URL}/register`, user);
      } catch (error) {
        deepStrictEqual(error.response.data, { error: 'Usuário já existe' })
      }
    });


    it('Deve fazer login em um usuário', async () => {
      const user = {
        username: 'teste',
        password: 'teste'
      }

      const response = await axios.post(`${BASE_URL}/login`, user)
      GLOBAL_LOGIN = response.data
      equal(response.status, 200);
    })
  })

  
  describe('Vídeos', () => {
    it('Deve obter todas os vídeos', async () => {
      const response = await axios.get(`${BASE_URL}/videos`)
      equal(response.status, 200)
    });

    it('Deve adicionar um vídeo aos favoritos', async () => {
      const data = {
        username: GLOBAL_LOGIN.user.username,
        myvideoId: 13
      }

      const response = await axios.put(`${BASE_URL}/savemyvideo`, data)
      deepEqual(response.data, { message: 'Vídeo adicionado ao favoritos com sucesso' })
    })

    it('Deve remover um vídeo dos favoritos', async () => {
      const data = {
        username: GLOBAL_LOGIN.user.username,
        myvideoId: 13
      }

      const response = await axios.put(`${BASE_URL}/removemyvideo`, data)
      deepEqual(response.data, { message: 'Vídeo removido dos favoritos' })
    })

    it('Deve adicionar um comentário no vídeo', async () => {
      const data = {
        comment: 'this is a test',
        id: 13
      }

      const response = await axios.put(`${BASE_URL}/addcomentario`, data);
      deepEqual(response.data, { message: 'Comentário adicionado com sucesso' })
    })

    it('Deve apagar um comentário feito pelo usuário no vídeo', async () => {
      const data = {
        comment: 'this is a test',
        id: 13
      }

      const response = await axios.put(`${BASE_URL}/removecomentario`, data);
      deepEqual(response.data, { message: 'Comentário deletado com sucesso!' }) 
    })
  })


    after(done => _server.close(done))
})