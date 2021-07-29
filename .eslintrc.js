module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/script-setup-uses-vars': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any',
                },
            },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
    },
}
