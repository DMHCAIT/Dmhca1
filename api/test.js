export default async function handler(req, res) {
  res.status(200).json({ 
    message: 'API test endpoint works',
    path: req.url,
    method: req.method 
  });
}
