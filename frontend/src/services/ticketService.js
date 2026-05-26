import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ticketService = {
  getTickets: async (filters = {}) => {
    const params = {};
    if (filters.priority) {
      params.priority = filters.priority;
    }
    if (filters.breached) {
      params.breached = 'true';
    }
    
    const response = await axios.get(`${API_URL}/tickets`, { params });
    return response.data;
  },

  createTicket: async (ticketData) => {
    const response = await axios.post(`${API_URL}/tickets`, ticketData);
    return response.data;
  },

  updateTicket: async (id, updateData) => {
    const response = await axios.patch(`${API_URL}/tickets/${id}`, updateData);
    return response.data;
  },

  deleteTicket: async (id) => {
    const response = await axios.delete(`${API_URL}/tickets/${id}`);
    return response.data;
  },

  getStats: async () => {
    const response = await axios.get(`${API_URL}/tickets/stats`);
    return response.data;
  }
};

export default ticketService;
