import axios from "axios"

export const getEmployees = async ({user}:{user:number}) => {
  try {
    const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}