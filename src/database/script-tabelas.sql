-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

CREATE DATABASE livraria;
USE livraria;

CREATE TABLE livro (
id_livro INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(45),
autor VARCHAR(45),
preco_compra INT,
preco_venda INT
);


CREATE TABLE genero (
id_genero INT PRIMARY KEY AUTO_INCREMENT,
nome_genero VARCHAR(45)
);

CREATE TABLE tabela_fk (
livro_fk INT,
genero_fk INT,
CONSTRAINT genero_fk_ct FOREIGN KEY (genero_fk) REFERENCES genero (id_genero),
CONSTRAINT livro_fk_ct FOREIGN KEY (livro_fk) REFERENCES livro (id_livro)
);

INSERT INTO genero (nome_genero) VALUES
("horror"),
("romance"),
("poesia"),
("fantasia");

/* CREATE DATABASE livrariaRecuperacao20262;

USE livrariaRecuperacao20262;

CREATE TABLE autor (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);

CREATE TABLE genero (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);

CREATE TABLE livro (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(50),
    fkAutor INT,
    fkGenero INT,
    precoCompra DOUBLE,
    precoVenda DOUBLE,
    CONSTRAINT fk_livro_autor FOREIGN KEY (fkAutor) REFERENCES autor(id),
    CONSTRAINT fk_livro_genero FOREIGN KEY (fkGenero) REFERENCES genero(id)
); */
