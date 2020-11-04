import axios from 'axios'

export const showStudents = (tea_class) => axios.post('/signin', {tea_class})
