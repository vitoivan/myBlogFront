import axios from 'axios'

const api = axios.create({
	baseURL: "http://152.67.48.196:3333/"
})

export { api }