/* 3 - Adicione o campo avaliacao em todos os documentos
da coleção e efetue alterações nesse campo. 

Crie uma query que inclua o campo avaliacao do tipo
NumberInt e com o valor 0 em todos os documentos da coleção.

Crie uma query que incremente o valor do campo avaliacao em 5
em todos os sanduíches de carne do tipo bovino. Dica: utilize
como filtro o campo tags.

Crie uma query que incremente o valor do campo avaliacao em 3
em todos os sanduíches de ave.

Crie uma query que retorne o nome e avaliacao de todos os sanduíches.
*/

db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt("0") } },
);

db.produtos.updateMany(
  { tags: { $elemMatch: { $in: ["bovino"] } } },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tags: { $elemMatch: { $in: ["ave"] } } },
  { $inc: { avaliacao: 3 } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
);
