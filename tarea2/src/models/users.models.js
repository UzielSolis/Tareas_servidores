const axios = require('axios');
const url = process.env.URL;

class User {
    // Método para obtener usuarios
    getUsers() {
        return axios.get(url);
    }

    // Obtener usuario mediante su ID
    getUsersById(id) {
        return axios.get(url+'/'+id);
    }

    // Poner un nuevo usuario
    postUser(newUser) {
        return axios.post(url, newUser);
    }

    // Actualizar usuario
    putUser(id, updateUser) {
        return axios.put((url+'/'+id), updateUser);
    }

    // Eliminar usuario
    deleteUser(id) {
        return axios.delete(url+'/'+id);
    }
}


// Exportar la clase User
module.exports = User;
