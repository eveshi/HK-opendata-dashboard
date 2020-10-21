module.exports = {
  plugins: ['react'], // use the plugin rules within ESLint
  parser: ['babel-eslint'],
  extends: ['prettier', 'prettier/babel', 'prettier/react'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version
    },
  },
}
