import type { Config } from '@jest/types';
import defaultConfig from './jest.config';

const config: Config.InitialOptions = {
    ...defaultConfig,
    testRegex: ['.*\\e2e-spec\\.ts$'],
};

export default config;
