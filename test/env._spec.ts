import {assert} from 'chai';

const REQUIRED_ENV_VARS = [
    'PORT',
];

describe("Environment Variables", () => {
    it(`${REQUIRED_ENV_VARS.join(' / ')} should exist`, async function () {
        for(const requiredEnvVar of REQUIRED_ENV_VARS) {
            assert.ok(process.env[requiredEnvVar], `Environment variable ${requiredEnvVar} must be set`);
        }
    });
});
