import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '@feature-components': '<rootDir>/src/components/feature/index.ts',
    '@ui-components': '<rootDir>/src/components/ui/index.ts',
    '@providers': '<rootDir>/src/providers/index.ts',
    '@constants': '<rootDir>/src/constants/index.ts',
  },
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
