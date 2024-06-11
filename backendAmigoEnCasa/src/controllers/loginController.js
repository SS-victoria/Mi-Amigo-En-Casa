import usersModels from '../models/usersModel.js'; 
// import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
import bcryptjs from 'bcryptjs';

dotenv.config({ path: 'env/.env' })

export const loginUser = async (req, res) => {
    try {
        // Validar los errores en la solicitud

        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        // Extraer el login y password del cuerpo de la solicitud
        let { login, password } = req.body;

        // Buscar al usuario por el correo electrónico
        const user = await usersModels.findOne({ email: login });

        if (user) {
            // Comparación de la contraseña proporcionada con el hash almacenado en la base de datos
            const passwordMatch = await bcryptjs.compare(password, user.password);

            if (passwordMatch) {
                // Contraseña válida: se genera un token de autenticación
                const token = jwt.sign({ usuario: { id: user._id, nombre: user.fullname, rol: user.rol } }, process.env.SECRET, { expiresIn: process.env.TIME });
                return res.status(200).json({ usuario: { id: user._id, nombre: user.fullname, rol: user.rol }, token, message: 'Usuario autorizado' });
            } else {
                // Contraseña no válida
                return res.status(401).json({ message: 'Usuario no autorizado' });
            }
        } else {
            // No se encontró un usuario con el correo proporcionado
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor: ' + error.message });
    }
};
