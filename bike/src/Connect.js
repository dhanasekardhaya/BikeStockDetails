import axios from 'axios'

const link="http://localhost:8080/BikeBackEnd";

export const join=async(obj)=>{
   const hai=await axios.post(`${link}/new`,obj)
   return hai;
}

export const show=async()=>{
    const yet=await axios.get(`${link}/home`)
    return yet;
}

export const detail=async(num)=>{
    const t=await axios.get(`${link}/getting/${num}`)
  return t;
}

export const updateEdit=async(obj)=>{
  const ed=await axios.put(`${link}/update`,obj)
  return ed;
}

export const removed=async(id)=>{
 const del= await axios.delete(`${link}/delete/${id}`)
 return del;
}