const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '.'
})

const customJestConfig = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '.*\\.spec\\.ts$',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}

module.exports = createJestConfig(customJestConfig)
