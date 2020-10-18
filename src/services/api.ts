import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.18.6:3333',
    // 192.168.18.6 é o IP da minha máquina (do meu notebook) na minha rede
});

export default api;