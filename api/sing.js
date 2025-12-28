const express = require('express');
const axios = require('axios');
const app = express();

app.get('/dl', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ status: 'error', message: 'Missing url parameter' });
  }

  try {
 import axios from 'axios';

const response = await axios.get('https://ooocoo.etacloud.org/api/v1/convert', {
  params: {
    'sig': 'vyvLCEG+MXqLVH9eRUr5ZOGEVM0FP71kDFVe6KNrT7WKp1q5uhR1hgbR8Pxo4+/lihGvn3bHQy27I+8f/rSPlkuubpPc5ELAVI7ZWJZ1wZW3M0br78C2hgLdTasg6PtoxqBnSroXLaxkQpyucAuQpG0oFGIEure+uf5iTplpzg/MItbI41yZbL4jx8Jt4qBpFFzfsywbm3BLMYi43zkXgy7J2JKpMbMOADeHljhrmmf4nPmIcW6XA6t8qpH5971WBFuJCjRJ28t6v9mpMu3Pqo2gval1XSz1jf18Vsh/abEzamZ315TDKfRORkZ8Eq20D2UrtYsdHK34oClEmwzwaQ==',
    'v': 'xNnbR87fRNA',
    'f': 'mp3',
    't': '1766907496'
  },
  headers: {
    'authority': 'ooocoo.etacloud.org',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'origin': 'https://y2mate.nu',
    'referer': 'https://y2mate.nu/',
    'sec-ch-ua': '"Chromium";v="107", "Not=A?Brand";v="24"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Linux; Android 11; RMX3261) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36'
  }
});

    // Forward the CDNFrame response (or pick specific fields as needed)
res.json(response.data);

} catch (error) { console.error(error); } });

app.listen(3000, () => { console.log("api is running"); });
