import http from 'http';
import https from 'https';

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

export function queryExternalAPI(query) {
    const options = {
        hostname: 'www.mhriseapi.com',
        path: query,
        method: 'GET',
    };

    return new Promise((resolve, reject) => {

        const req = https.request(options, (res) => {

            let responseText = '';

            res.on('data', (d) => {
                responseText += d;
            });

            res.on('end', () => {
                resolve(JSON.parse(responseText));
            });

        });
        
        req.on('error', (error) => {
            reject(error);
        });

        req.end();
        
    });

}