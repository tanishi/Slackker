import * as Https from 'https';


export function slurpStream(stream, cb) {
  let buf = '';
  stream.on('data', chunk => buf += chunk);
  stream.on('end', () => cb(buf.toString()));
}

export function httpsGet(url, cb) {
  Https.get(url, res => slurpStream(res, cb));
}

