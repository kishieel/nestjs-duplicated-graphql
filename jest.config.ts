import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testEnvironment: 'node',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    roots: ['<rootDir>'],
    resetModules: true,
};

export default config;
