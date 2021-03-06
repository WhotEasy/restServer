const {response, request} = require('express');


const usuariosGet = (req = request , res=response) => {
    const query = req.query;
    res.json({
        msg:'get API - controlador',
        query
    });
};

const usuariosPut = (req = request, res=response) => {
    const {id} = req.params;
    res.status(500).json({
        msg:'put API - controlador',
        id
    });
}

const usuariosPost = (req = request, res=response) => {
    const {nombre, apellido} = req.body;
    res.status(201).json({
        msg:'post API - controlador',
        nombre,
        apellido
    });
}

const usuariosDelete = (req = request, res=response) => {
    res.json({
        msg:'delete API - controlador'
    });
}

const usuariosPatch = (req = request, res=response) => {
    res.json({
        msg:'patch API - controlador'
    });
}

module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}