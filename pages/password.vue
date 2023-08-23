<template>
    <page header="随机密码生成" class="page-password">
        <div class="result">
            <span v-for="char in password" class="char" :class="getCharClass(char)">{{ char }}</span>
        </div>
        <el-row class="controls-row">
            <el-col :xs="{ span: 24 }" :sm="{ span: 5 }">
                <div class="flex-wrapper slider">
                    <span class="text">长度</span>
                    <el-slider v-model="length" :min="8" :max="128" />
                    <span class="text">{{ length }}位</span>
                </div>
            </el-col>
            <el-col :xs="{ span: 24 }" :sm="{ span: 13 }">
                <div class="flex-wrapper checkbox">
                    <el-checkbox v-model="upperLetterChecked">大写字母</el-checkbox>
                    <el-checkbox v-model="lowerLetterChecked">小写字母</el-checkbox>
                    <el-checkbox v-model="numberChecked">数字</el-checkbox>
                    <el-tooltip content="0oO1l|" placement="top">
                        <el-checkbox v-model="ignoreConfusableCharacters">忽略易混淆字符</el-checkbox>
                    </el-tooltip>
                </div>
            </el-col>
            <el-col :xs="{ span: 24 }" :sm="{ span: 6 }">
                <div class="flex-wrapper">
                    <el-checkbox v-model="symbolChecked">符号</el-checkbox>
                    <el-input v-model="symbols" class="symbols-input" placeholder="请输入特殊符号" @change="handleSymbolsInputChange" />
                </div>
            </el-col>
        </el-row>
        <div class="btn-wrapper">
            <el-button type="primary" size="large" round @click="generate">重新生成</el-button>
            <el-button v-if="isSupported" type="primary" size="large" round @click="copy(password)">复制密码</el-button>
        </div>
    </page>
</template>

<script setup lang="ts">
const password = ref('')
const length = ref(16)
const upperLetterChecked = ref(true)
const lowerLetterChecked = ref(true)
const numberChecked = ref(true)
const ignoreConfusableCharacters = ref(false)
const symbolChecked = ref(false)
const symbols = ref(',.!@?#$%^&*()-+=[]{}:;_~<>')
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const { copy, copied, isSupported } = useClipboard({ legacy: true })

useHead({
    title: '随机密码生成',
    meta: [
        {
            name: 'description',
            content: '在线随机密码生成器，可配置长度、大小写字母、数字、自定义特殊字符等，生成高强度密码，增加破解难度，提供安全保障。',
        },
    ],
})

onMounted(generate)

watch(copied, (value) => {
    if (value) {
        ElMessage({
            message: '复制成功！',
            type: 'success',
        })
    }
})

watch([length, upperLetterChecked, lowerLetterChecked, numberChecked, symbolChecked, symbols], (newValues, oldValues) => {
    if (newValues[4] && oldValues[5].length > 0 && newValues[5].length === 0) {
        symbolChecked.value = false
    } else if (!newValues[4] && oldValues[5].length === 0 && newValues[5].length > 0) {
        symbolChecked.value = true
    }

    if (!upperLetterChecked.value && !lowerLetterChecked.value && !numberChecked.value && !symbolChecked.value) {
        ElMessage({
            message: '至少选择一项字符类型',
            type: 'warning',
        })
        password.value = ''
    } else if (!(symbolChecked.value && symbols.value.length === 0)) {
        generate()
    }
})

function handleSymbolsInputChange(e: string) {
    if (e.length === 0) {
        symbolChecked.value = false
    }
}

function getCharClass(char: string) {
    if (/[0-9]/.test(char)) {
        return 'char-digits'
    } else if (/[a-z]/.test(char)) {
        return 'char-lowercase'
    } else if (/[A-Z]/.test(char)) {
        return 'char-uppercase'
    } else {
        return 'char-symbols'
    }
}

function generate() {
    if (symbolChecked.value && symbols.value.length === 0) {
        symbolChecked.value = false
    }
    let charset = ''
    if (upperLetterChecked.value) charset += upperLetters
    if (lowerLetterChecked.value) charset += lowerLetters
    if (numberChecked.value) charset += numbers
    if (symbolChecked.value) charset += symbols.value

    if (ignoreConfusableCharacters.value) {
        charset = filterString(charset, '0oO1l|')
    }

    if (charset.length > 0) {
        password.value = ''
        for (let i = 0, n = charset.length; i < length.value; i++) {
            password.value += charset.charAt(Math.floor(Math.random() * n))
        }
        if (upperLetterChecked.value && !containsChar(password.value, upperLetters)) {
            generate()
        } else if (lowerLetterChecked.value && !containsChar(password.value, lowerLetters)) {
            generate()
        } else if (numberChecked.value && !containsChar(password.value, numbers)) {
            generate()
        } else if (symbolChecked.value && !containsChar(password.value, symbols.value)) {
            generate()
        }
    } else {
        ElMessage({
            message: '无可用字符',
            type: 'warning',
        })
    }
}

function containsChar(a: string, b: string) {
    for (const char of b) {
        if (a.includes(char)) {
            return true
        }
    }
    return false
}
</script>

<style lang="scss">
.page-password {
    .result {
        border: 1px solid var(--el-border-color);
        padding: 15px;
        border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        word-break: break-all;
        user-select: text;
        letter-spacing: 3px;
        text-align: center;
        font-size: 24px;
        font-family: 'Courier Prime Bits', 'Courier New', monospace;
        min-height: 56px;
        .char {
            line-height: 32px;
            &.char-digits {
                color: var(--el-color-primary);
            }
            &.char-symbols {
                color: var(--el-color-danger);
            }
            &.char-uppercase {
                color: var(--el-color-warning);
            }
            &.char-lowercase {
                color: var(--el-text-color-regular);
            }
        }
    }
    .password {
        .el-input__wrapper {
            padding: 5px 15px;
        }
        input {
            font-size: 24px;
            text-align: center;
            font-family: 'Courier Prime Bits', 'Courier New', monospace;
            letter-spacing: 3px;
        }
    }
    .controls-row {
        margin-top: 10px;
    }
    .flex-wrapper {
        display: flex;
        height: 60px;
        align-items: center;

        .el-checkbox {
            margin-right: 10px;
        }

        .symbols-input {
            flex: 1;
            input {
                font-family: var(--code-font-family);
                padding: 0 5px;
                font-size: 14px;
            }
        }

        &.slider {
            .text {
                font-size: 14px;
                color: var(--el-text-color-regular);
                font-weight: 500;
            }
            .el-slider {
                flex: 1;
                margin: 0 12px;
            }
        }
        &.checkbox {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }
    .btn-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        .el-button {
            width: 200px;
        }
    }
}
@media only screen and (max-width: 767px) {
    .page-password {
        .flex-wrapper {
            &.checkbox {
                justify-content: space-between;
            }
        }
    }
}
</style>
