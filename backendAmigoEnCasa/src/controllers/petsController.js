import petsModels from "../models/petsModels.js";


export const petRegister = async (req, res) => {
    try {
        const { name, races, category, genders } = req.body;
        
        const originalname  = req.file.originalname;
        
        const pet = new petsModels({
            name,
            races,
            category,
            genders,
            images: originalname
        });

    const save=  await pet.save();
        if(pet) {
        
        return res.status(201).json({ message: 'Mascota creada correctamente', save });
        }
        return res.status(401).json({ message: "No se creo correctamente" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const petList = async (req, res) => {
    try {
        const pets = await petsModels.find({}, "name images")
            .populate("races", "name")
            .exec()
        if (pets) {
            return res.status(200).json(pets);
        }
        return res.status(401).json({ message: "No se listó correctamente" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const petUpdate = async(req,res)=>{

    try {
        let {name ,race,categorira,genders}=req.body
        let id=req.params.id
       /*  let images =file.originalname */
    const originalname  = req.file.originalname;

        
        const petUpdate = await petsModels.findByIdAndUpdate(
            {_id:id},
            {$set:{
                name:name,
                race:race,
                categorira:categorira,
                genders:genders,
                images:originalname
            }
        },
        { new: true }
        )
        if(petUpdate) return (res.status(200).json({message:"mascota actualizada correctamente",petUpdate}))
        return (res.status(401).json({message:"No se pudo actualizar la mascota"}))
    } catch (error) {
        return (res.status(500).json({message:error.message}))
    }
}
export const petListId = async (req, res) => {
    const { id } = req.params;

    try {
    const pet = await petsModels.findById(id)
        .populate("races", "name")
        .populate("category", "name")
        .populate("genders", "name")
    

    if (pet) {
        return res.status(200).json(pet);
    }
    return res.status(404).json({ message: "Mascota no encontrada" });
    } catch (error) {
    return res.status(500).json({ message: error.message });
    }
};

export const petDelete =async(req,res)=>{
    try {
        const petDelete = await petsModels.findByIdAndDelete(req.params.id)
        if(petDelete) return (res.status(200).json({message:"mascota eliminada correctamente",petDelete}))
        return (res.status(401).json({message:"mascota no se elimino correctamente"}))
    } catch (error) {
        return (res.status(500).json({message:error.message}))
    }
}







