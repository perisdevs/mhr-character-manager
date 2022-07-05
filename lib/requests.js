import http from 'http';

export function requestJSONObject(host, port, path) {
    const options = {
        host: host,
        port: port,
        path: path,
        method: 'GET',
    };

    return new Promise((resolve, reject) => {

        const req = http.request(options, (res) => {

            let responseText = '';

            res.on('data', (d) => {
                responseText += d;
            });

            res.on('end', () => {
                resolve(JSON.parse(responseText));
            });

            req.on('error', (err) => {
                reject(err);
            });
            
        });

        req.end();
    });
}