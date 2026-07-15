var database = require("../database/config");

function listar() {
/*         select 
livro.id,
livro.titulo,
livro.precoCompra,
livro.precoVenda,
autor.nome as nomeAutor,
genero.nome as nomeGenero
 from livro join autor on autor.id = livro.fkAutor join genero on genero.id = livro.fkGenero; */

    var instrucaoSql = `
        SELECT 
    livro.id_livro,
    livro.titulo,
    livro.autor,
    livro.preco_compra,
    livro.preco_venda,
    genero.nome_genero AS nome_genero
    FROM livro JOIN genero ON genero.nome_genero = tabela_fk.genero_fk; 

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function cadastrar(titulo, fkAutor, fkGenero, precoCompra, precoVenda) {

/*     INSERT INTO livro (titulo, fkAutor, fkGenero, precoCompra, precoVenda) VALUES ('${titulo}', '${fkAutor}', '${fkGenero}', '${precoCompra}', '${precoVenda}');
 */
    var instrucaoSql = `
        INSERT INTO livro (titulo, autor, nome_genero, preco_compra, preco_venda) VALUES ('${titulo}', '${autor}', '${nome_genero}', '${preco_compra}', '${preco_venda}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novoPrecoCompra, novoPrecoVenda, id) {

    /* UPDATE livro 
        SET precoCompra = '${novoPrecoCompra}', 
            precoVenda = '${novoPrecoVenda}'
        WHERE id = ${id}; */

    var instrucaoSql = `
        UPDATE livro 
        SET preco_compra = '${novoPrecoCompra}', 
            preco_venda = '${novoPrecoVenda}'
        WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    cadastrar,
    editar
}
