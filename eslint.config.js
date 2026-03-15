import eslint from 'eslint';

export default [
  // Applies the built-in recommended rules
  {
    files: ["src/**/*.js"], // Applies these specific rules only to files in the 'src' directory
    rules: {
      "semi": "error", // Enforces semicolons as an error
      "prefer-const": "warn", // Warns if a 'const' could be used
    }
  },
  {
    ignores: ["dist", "build"] // Globally ignores specific directories
  }
];