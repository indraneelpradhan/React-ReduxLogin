import { LOGIN_USER } from  '../Action/Actions';

const data = {
  username: 'dcbjvkjdv',
  password: 'fcdkjbvjk'
}
export const LoginReducer = (state={username: 'dcbjvkjdv', password: 'fcdkjbvjk', loginState: false, loader: false}, {type,payload}) => {
switch(type) {
  case LOGIN_USER:
    console.log(`${type} reducer state: ${JSON.stringify(state)}, payload: ${JSON.stringify(payload)}`);
    return payload;
    default:
      return state;
}
}
