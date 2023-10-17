module.exports = {
    extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'prettier',
        'plugin:storybook/recommended',
    ],
    plugins: ['prettier', 'import'],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
    },

    env: {
        browser: true,
        node: true,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'func-names': 'off',
        'no-process-exit': 'off',
        'object-shorthand': 'off',
        'class-methods-use-this': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.tsx'],
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['index.d.ts', 'rollup.config.js'],
};
