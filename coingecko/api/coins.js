export default async function handler(req, res) {
  const { query } = req;
  const url = `https://api.coingecko.com/api/v3/coins/${query.id}?localization=false&tickers=false&community_data=true&developer_data=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: error.message });
  }
}
