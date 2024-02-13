import {getConnection, mssql} from "./database/connectionSQLServer.js"

const getProducts = async ()=>{
    try{
        const pool= await getConnection();
        const result = await pool.request().query("SELECT Codigo, Nombre, PrecioCosto, Fletes, Categoria, Iva, PrecioVenta, Existencias FROM Productos");
        console.log(result);
        console.log("produtos listados")
    }catch (error) {
        console.error(error);
    }
}

getProducts();