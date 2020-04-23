//Archivo para manejar los actions relacionados al Store de Redux

export const SET_CITY ='SET_CITY'; //las constantes van en mayusculas

//Action para hacer update de la ciudad dentro del Store de Redux
export const setCity = value =>({type:SET_CITY,value});//la accion es un objeto con un nombre y un value

