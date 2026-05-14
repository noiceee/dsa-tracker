const https = require('https');

const data = JSON.stringify({
  jsonrpc: "2.0",
  id: 1,
  method: "tools/call",
  params: {
    name: "list_screens",
    arguments: {
      projectId: "14866155942280057933"
    }
  }
});

const options = {
  hostname: 'stitch.googleapis.com',
  port: 443,
  path: '/mcp',
  method: 'POST',
  headers: {
    'X-Goog-Api-Key': process.env.STITCH_API_KEY,
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  let body = '';
  res.on('data', d => { body += d; });
  res.on('end', () => {
    try {
      const parsed = JSON.parse(body);
      console.log(JSON.stringify(parsed, null, 2));
    } catch (e) {
      console.log('Error parsing:', e.message);
    }
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
