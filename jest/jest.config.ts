import type { Config } from 'jest';

const config: Config = {
    rootDir: './',
    // preset: 'ts-jest',
    testEnvironment: 'jsdom',
    // testEnvironment: 'jest-fixed-jsdom', - needed for msw
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
        // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
    },
    testEnvironmentOptions: {
        customExportConditions: [''], // needed only for msw
    },
}

export default config
