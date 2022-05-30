import axios from "axios";

export default async function API(caseInput, bodyValue) {
  switch (caseInput) {
    case 'register': {
      try {
        const newUser = await axios({
          method: 'post',
          url: 'http://localhost:3001/user',
          data: bodyValue,
        });
        return newUser
      } catch (error) {
        return "error"
      }
    }
  }
}