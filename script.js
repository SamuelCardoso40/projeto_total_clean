const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Função para salvar os dados no DynamoDB
async function salvarDados(nome, email, telefone, servico) {
  // Definir os parâmetros de inserção no DynamoDB
  const params = {
    TableName: 'TotalCleanClientes', 
    Item: {
      nome: nome,
      email: email,
      telefone: telefone,
      servico: servico
    }
  };

  try {
    // Inserir os dados no DynamoDB
    await dynamodb.put(params).promise();
    console.log('Dados salvos com sucesso no DynamoDB!');
  } catch (error) {
    console.error('Erro ao salvar os dados no DynamoDB:', error);
  }
}