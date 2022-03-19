import { config } from 'dotenv-flow';
config({
    node_env: 'test'
});

import { Selector } from 'testcafe';
const title = Selector('h1');

fixture('Test')
    .page('http://localhost:' + normalizePort(process.env.PORT || '3000'));

test('Test', async (t) => {
    await t
        .expect(title.innerText).eql('Example H1 Title')
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
