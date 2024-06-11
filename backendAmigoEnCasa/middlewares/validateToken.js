import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verificarToken = (req, res, next) => {
    let token_usuario = req.headers["token"];

    if (!token_usuario) {
        return res.status(402).json({ message: "Se requiere un token" });
    } else {
        jwt.verify(token_usuario, process.env.SECRET, (error, decoded) => {
            if (error) {
                return res.status(402).json({ message: "Token inválido" });
            } else {
                // Si el token es válido, puedes realizar acciones adicionales, como verificar la identidad del usuario en la base de datos.
                // Por ejemplo, puedes extraer el ID de usuario del token decodificado y buscar el usuario en la base de datos MongoDB.
                // Luego, puedes adjuntar la información del usuario a la solicitud para que esté disponible en los controladores posteriores.
                // Esto es solo un ejemplo de cómo podrías hacerlo:

                // const userId = decoded.userId; // Suponiendo que el token contiene un campo 'userId'
                // User.findById(userId, (err, user) => {
                //     if (err) {
                //         return res.status(500).json({ message: "Error al buscar el usuario en la base de datos" });
                //     } else if (!user) {
                //         return res.status(404).json({ message: "Usuario no encontrado" });
                //     } else {
                //         req.user = user; // Adjunta la información del usuario a la solicitud para que esté disponible en los controladores posteriores
                //         next();
                //     }
                // });
                
                // En este ejemplo, 'User' sería tu modelo de usuario de MongoDB. Debes ajustarlo según la estructura de tu modelo.
                
                // Como este es solo un ejemplo, debes implementar la lógica específica de tu aplicación según tus necesidades.

                next();
            }
        });
    }
};

export default verificarToken;
