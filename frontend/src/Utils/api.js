import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: '',
  timeout: 1000
});
instance.interceptors.request.use(
function (config) {
    const access_token = Cookies.get('access_token')
    config.headers = {access_token};
    return config;
  }, 
  function (error) {
      return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    const {access_token, refresh_token, user_type, user_name} = response.data
    if(access_token)
      Cookies.set("access_token", access_token)
    if(refresh_token) 
      Cookies.set("refresh_token", refresh_token)
    if(user_type)
      Cookies.set("user_type", user_type)
    if(user_name)
      Cookies.set("user_name", user_name)    
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getLogin = (user_num, user_pw) => instance.post('/signin', {user_num, user_pw})
export const getLogout = () => axios.post('/logout')
export const showClass = () => instance.post('/classmanagement/showClass')
export const showStudents = (tea_class) => instance.post('/classmanagement/showStudents',{tea_class})
export const showSubjects = () => instance.post('/classmanagement/showsubject')
export const registerStandard = (tea_subject, sub_semester, mid, final, practice) => instance.post('/classmanagement/registerstandard',{tea_subject, sub_semester, mid, final, practice})
export const registerGrade = (tea_subject, sub_semester, students) => instance.post('/classmanagement/registergrade', {tea_subject, sub_semester, students})
export const showStdGrades = () => instance.post('/stdGrade',)
// export const getSignup = ( user_num, user_name, user_id, user_pwd ) =>
//   axios.post('/signup', { user_num, user_name, user_id, user_pwd })


