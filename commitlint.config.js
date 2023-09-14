module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
        parserOpts: {
            headerPattern: /^(.*?)(?:\(([\w$.\-*/ ]*)\))?: (.*)$/,
        },
    },
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            ['📦build', '🔧chore', '👷ci', '📚docs', '✨feat', '🐛fix', '🚀perf', '🦄refactor', '⏪revert', '🎨style', '✅test'],
        ],
    },
    prompt: {
        questions: {
            type: {
                description: '选择当前 commit 的类型',
                enum: {
                    '✨feat': {
                        description: '新增功能',
                        title: '✨ Features',
                        emoji: '✨',
                    },
                    '🐛fix': {
                        description: ' 问题修复',
                        title: '🐛 Bug Fixes',
                        emoji: '🐛',
                    },
                    '📚docs': {
                        description: ' 文档相关',
                        title: '📚 Documentation',
                        emoji: '📚',
                    },
                    '🎨style': {
                        description: ' 代码风格',
                        title: '🎨 Styles',
                        emoji: '🎨',
                    },
                    '🦄refactor': {
                        description: ' 代码重构',
                        title: '🦄 Code Refactoring',
                        emoji: '🦄',
                    },
                    '🚀perf': {
                        description: ' 性能提升',
                        title: '🚀 Performance Improvements',
                        emoji: '🚀',
                    },
                    '✅test': {
                        description: '测试相关',
                        title: '✅ Tests',
                        emoji: '✅',
                    },
                    '📦build': {
                        description: ' 构建依赖',
                        title: '📦 Builds',
                        emoji: '📦',
                    },
                    '👷ci': {
                        description: ' 持续集成',
                        title: '👷 Continuous Integrations',
                        emoji: '👷',
                    },
                    '🔧chore': {
                        description: ' 杂项修改',
                        title: '🔧 Chores',
                        emoji: '🔧',
                    },
                    '⏪revert': {
                        description: '代码回滚',
                        title: '⏪ Reverts',
                        emoji: '⏪',
                    },
                },
            },
            scope: {
                description: '变更范围（如模块名、组件名或文件名等）',
            },
            subject: {
                description: '变更的简短描述',
            },
            body: {
                description: '变更的详细说明，"|" 换行',
            },
            isBreaking: {
                description: '是否有破坏性更新',
            },
            breakingBody: {
                description: '破坏性变更的详细描述',
            },
            breaking: {
                description: '破坏性变更的详细描述简短描述',
            },
            isIssueAffected: {
                description: '是否关联 issue？',
            },
            issuesBody: {
                description: '如果问题被关闭，需要提供一个更长的描述',
            },
            issues: {
                description: '填写引用的 issue (如 "fix #123"、"re #123")',
            },
        },
    },
}
