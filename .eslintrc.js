module.exports = {
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
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
        'vue/multi-word-component-names': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any',
                },
            },
        ],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'vue/no-unused-vars': ['warn'],
        'new-cap': ['warn'],
    },
}
