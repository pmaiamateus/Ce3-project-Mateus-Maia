import axios from 'axios';

export default async function API(caseInput, bodyValue) {
  switch (caseInput) {
  default:
    return console.log('sem parametro de função');
  case 'register': {
    try {
      const newUser = await axios({
        method: 'post',
        url: 'http://localhost:3001/user',
        data: bodyValue,
      });
      return newUser;
    } catch (error) {
      return 'error';
    }
  }
  case 'update': {
    try {
      const newUser = await axios({
        method: 'put',
        url: 'http://localhost:3001/user',
        data: bodyValue,
      });
      return newUser;
    } catch (error) {
      return 'error';
    }
  }
  case 'getConvenios': {
    try {
      const convenios = await axios({
        method: 'get',
        url: 'http://localhost:3001/convenios',
      })
      return convenios
    } catch (error) {
      console.log(error)
    }

  }
  }
}
