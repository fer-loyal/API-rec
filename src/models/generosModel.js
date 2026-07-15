var database = require("../database/config");

function listar() {
    
/*     SELECT * FROM genero; */

    var instrucaoSql = `

        
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome_genero) {
    /* INSERT INTO genero (nome) VALUES ('${nome}'); */

    var instrucaoSql = `
        INSERT INTO genero (nome_genero) VALUES ('${nome_genero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    cadastrar
}
