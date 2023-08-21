<template>
    <page header="随机密码生成" class="page-password">
        <el-input v-model="password" class="password" @focus="passwordFocus($event)" />
        <el-row>
            <el-col :xs="{ span: 24 }" :sm="{ span: 8 }">
                <div class="flex-wrapper slider">
                    <span class="text">长度</span>
                    <el-slider v-model="length" :min="4" />
                    <span class="text">{{ length }}位</span>
                </div>
            </el-col>
            <el-col :xs="{ span: 24 }" :sm="{ span: 9, offset: 1 }">
                <div class="flex-wrapper checkbox">
                    <el-checkbox v-model="upperLetterChecked">大写字母</el-checkbox>
                    <el-checkbox v-model="lowerLetterChecked">小写字母</el-checkbox>
                    <el-checkbox v-model="numberChecked">数字</el-checkbox>
                </div>
            </el-col>
            <el-col :xs="{ span: 24 }" :sm="{ span: 6 }">
                <div class="flex-wrapper">
                    <el-checkbox v-model="symbolChecked">符号</el-checkbox>
                    <el-input
                        v-model="symbols"
                        size="mini"
                        class="symbols-input"
                        placeholder="请输入特殊符号"
                        @change="handleSymbolsInputChange"
                    />
                </div>
            </el-col>
        </el-row>
        <div class="btn-wrapper">
            <el-button type="primary" round @click="generate">生成密码</el-button>
        </div>
    </page>
</template>

<script setup lang="ts">
const password = ref('')
const length = ref(16)
const upperLetterChecked = ref(true)
const lowerLetterChecked = ref(true)
const numberChecked = ref(true)
const symbolChecked = ref(false)
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = ',.!@?#$%^&*()-+=[]{}:;_~<>'

onMounted(generate)

const passwordFocus = (event: any) => {
    event.currentTarget.select()
}

const handleSymbolsInputChange = (e: string) => {
    if (e.length === 0) {
        symbolChecked.value = false
    }
}

function generate() {
    if (symbolChecked.value && symbols.length === 0) {
        symbolChecked.value = false
    }

    let charset = ''
    if (upperLetterChecked.value) charset += upperLetters
    if (lowerLetterChecked.value) charset += lowerLetters
    if (numberChecked.value) charset += numbers
    if (symbolChecked.value) charset += symbols

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
        } else if (symbolChecked.value && !containsChar(password.value, symbols)) {
            generate()
        }
    } else {
        alert('至少选择一项')
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
    .password {
        input {
            font-size: 24px;
            text-align: center;
            font-family: monospace !important;
            letter-spacing: 2.5px;
        }
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
                font-family: monospace !important;
                padding: 0 5px;
                font-size: 14px;
            }
        }

        &.slider {
            .text {
                font-size: 14px;
                color: #606266;
                font-weight: 500;
            }
            .el-slider {
                flex: 1;
                margin: 0 10px;
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
