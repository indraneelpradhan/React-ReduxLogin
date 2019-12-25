import axios from 'axios';
export const LOGIN_USER = 'LOGIN_USER';


export const LoginAsync = (data)=> {
return{
  type: 'LOGIN_USER',
  payload:{
    loginState: data.logAuth
  }
}
}

export const LoginFast = (username, password) => {
  return dispatch => {
    if(username === 'indraneel' && password === 'password123') {
      const data = {
        logAuth: true
      }
      dispatch(LoginAsync(data));
    } else {
      const data = {
        logAuth: false
      }
      dispatch(LoginAsync(data));
    }
    // dispatch(LoginAsync(username, password));
  }
};

// export const LoginAsynApi = (username, password) => {
//  axios({
//    method: 'post',
//    url: 'http://phlebex.medimojo.co/api/v1/auth/login',
//    data: {
//      username: username,
//      password: password
//    } 
//   })
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// }