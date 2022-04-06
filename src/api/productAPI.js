import axios from "axios";
import { toast } from "react-toastify";

const handleError = (err) => {
  if(err.response.data.msg){
    toast.error(err.response.data.msg)
    throw new Error(err.response.data.msg)
  }else{
    toast.error(err.message)
    throw new Error(err.message)
  }
}

export const getData = async ({ queryKey }) => {
  try {
    const res = await axios.get(`${queryKey[0]}`)
    return res.data;
  } catch (err) {
    handleError(err)
  }
}

export const getInfiniteData = async ({ queryKey, pageParam = 1}) => {
  // console.log(`url : ${queryKey[0]}&page=${pageParam}`)
  // console.log({pageParam})
  try {
    const res = await axios.get(`${queryKey[0]}&page=${pageParam}`)
    return res.data;
  } catch (err) {
    handleError(err)
  }
}

export const createProduct = async (newData) => {
  return axios.post('/products', newData)
};

export const updateProduct = async ({id, newData}) => {
  return axios.put(`/products/${id}`, newData)
};

export const deleteProduct = async (id) => {
  return axios.delete(`/products/${id}`)
};