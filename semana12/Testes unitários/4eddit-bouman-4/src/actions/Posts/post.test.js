import {setPosts} from './index'

describe('Testa action dos posts'), ()=> {
  test('Testa setPost action'), ()=>{

    //Preparação
    const textoDeTeste = 'setPost de teste'
    
    //Execucao
    const action = setPosts(textoDeTeste)

    //Verificação
    expect(action.type).toBe(3)
  })
}

