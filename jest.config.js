module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.spec.(ts|tsx)'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  