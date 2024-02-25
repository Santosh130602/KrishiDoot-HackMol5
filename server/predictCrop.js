const { PythonShell } = require('python-shell');

function predictCrop(N, P, K, temperature, humidity, ph, rainfall) {
    return new Promise((resolve, reject) => {
        PythonShell.run('predictCrop.py', { args: [N, P, K, temperature, humidity, ph, rainfall] }, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]);
            }
        });
    });
}

// Example usage
predictCrop(30, 65, 82, 20, 15, 7, 76)
    .then(prediction => console.log('Predicted crop:', prediction))
    .catch(error => console.error('Error predicting crop:', error));


