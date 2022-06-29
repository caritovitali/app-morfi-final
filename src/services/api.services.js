
import axios from 'axios';
const apiUrl="https://629571d563b5d108c19e1e1c.mockapi.io"

const apiServices = {

  getProductos: async () => {
    try {
      const res = await axios.get(apiUrl + '/productos');
      return res.data;
    
    } catch (err) { console.log (err) }
  },
  getUsers: async () => {
    try {
      const res = await axios.get(apiUrl + '/usuarios');
      return res.data;
    
    } catch (err) { console.log (err) }
  },
  deleteProducto: async (productId) => {
    try {
        const res = await axios.delete(`${apiUrl}/productos/${productId}`);
        return res.data;
    
    } catch (err) { console.log (err) }
 },
  createUser: async (usuario) => {
    try {
      const res = await axios.post(apiUrl + '/usuarios', usuario);
      return res.data;

    } catch (err) { console.log (err) }
  }, 
   saveProducto: async (producto) => {
    try {
      const res = await axios.post(apiUrl + '/productos', producto);
      return res.data;

    } catch (err) { console.log (err) }
  }, 
  updateProducto: async (id,producto) => {
    try {
      const res = await axios.put(`${apiUrl}/productos/${id}`, producto);
      
      return res.data;

    } catch (err) { console.log (err) }
  },
  getPedidos: async (userId) => {
    try {
      const res = await axios.get(`${apiUrl}/usuarios/${userId}/pedidos`);
      return res.data;
    
    } catch (err) { console.log (err) }
  },
  guardarCompra: async (userId,carrito) => {
    try {
      const res = await axios.post(`${apiUrl}/usuarios/${userId}/pedidos`, carrito);
      
      return res.data;

    } catch (err) { console.log (err) }
  }

 
}

export default apiServices