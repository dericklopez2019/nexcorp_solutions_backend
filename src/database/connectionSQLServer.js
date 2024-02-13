import mssql from "mssql";

const connectionSettings = {
    server: 'DESKTOP-1512JD3',  
    database: 'NexCorp Solutions',
    authentication: {
        type: 'default',
        options: {
            trustServerCertificate: true,
            instanceName: '',
        }
    },
    options: {
        encrypt: true,
        enableArithAbort: true,
    }
};

export async function getConnection(){
    try {
        return mssql.connect(connectionSettings);
    } catch (error) {
        console.error(error);
    }
}

export{mssql};
