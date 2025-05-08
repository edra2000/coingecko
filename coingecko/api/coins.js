// api/coins.js

const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { id } = event.queryStringParameters;  // استلام المعامل من الرابط
  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=true&developer_data=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Proxy error', details: error.message }),
    };
  }
};
