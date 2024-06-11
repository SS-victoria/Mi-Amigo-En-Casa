import usersModels from '../models/usersModel.js';
// import { validationResult } from 'express-validator';
import bcryptjs from 'bcryptjs';

export const userRegister = async (req, res) => {
    try {
        // Validar los errores en la solicitud

        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        // Extraer los datos del cuerpo de la solicitud
        const { fullname, email, password, rol } = req.body;

        // Encriptar la contraseña
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        // Crear un nuevo objeto de usuario con los datos proporcionados y la contraseña encriptada
        const user = new usersModels({
            fullname,
            email,
            password: hashPassword,
            rol
        });

        // Guardar el nuevo usuario en la base de datos
        await user.save();

        // Eliminar la contraseña del objeto de usuario antes de enviarlo en la respuesta
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        // Responder con un mensaje de éxito y sin la contraseña
        return res.status(201).json({ message: "Usuario creado correctamente", user: userWithoutPassword });

    } catch (error) {
        console.error(error);
        // Responder con un mensaje de error
        return res.status(500).json({ message: "Error al conectar con la base de datos: " + error.message });
    }
};

export const userList = async (req, res) => {
    try {
        const user = await usersModels.find();
        return (res.status(200).json(user))
    } catch (error) {
        console.log(error)
    }

}

export const userListId = async (req, res) => {
    try {
        const user = await usersModels.findById(req.params.id)
        if (user) {
            return (res.status(200).json(user))
        }
        return (res.status(401).json({ message: "usuario no existe" }))
    } catch (error) {
        console.log(error)
    }
}

export const userUpdate = async (req, res) => {
    try {
        //obtenemos el id de users model y lo requerimos como parametro para
        const userUpdate = await usersModels.findByIdAndUpdate(req.params.id, {
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        })
        if (userUpdate) {
            return (res.status(200).json({ message: "usuario actualizado correctamente", userUpdate }))
        }
        return (res.status(401).json({ message: "usuario no se actualizo correctamente" }))
    } catch (error) {
        console.log(error)
    }
}

export const userDelete = async (req, res) => {
    try {
        // creamos una constante donde se va almacenar el modelo y obtenemos findByIdAndDelete(donde requerimos el id como parametro)
        const userDelete = await usersModels.findByIdAndDelete(req.params.id)
        if (userDelete) {
            return (res.status(200).json({ message: "usuario eliminado correctamente", userDelete }))
        }
        return (res.status(401).json({ message: "usuario no se elimino correctamente" }))
    } catch (error) {
        console.log(error)
    }
}

