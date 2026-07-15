var database = require("../database/config");

function listar() {

    /*  SELECT * FROM autor; */

    var instrucaoSql = `
       SELECT * FROM livro WHERE autor like '${autor}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(autor) {
    
    /* INSERT INTO autor (nome) VALUES ('${nome}'); */
    /* troquei tudo oq era 'nome' para autor */

    var instrucaoSql = `
        INSERT INTO livro (autor) VALUES ('${autor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    cadastrar
}
