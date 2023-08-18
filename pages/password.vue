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
export default class PagePassword extends Vue {
    password: string = ''
    length: number = 16
    upperLetterChecked: boolean = true
    lowerLetterChecked: boolean = true
    numberChecked: boolean = true
    symbolChecked: boolean = false
    upperLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    lowerLetters: string = 'abcdefghijklmnopqrstuvwxyz'
    numbers: string = '0123456789'
    symbols: string = ',.!@?#$%^&*()-+=[]{}:;_~<>'

    head() {
        return {
            title: '随机密码生成',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        '在线随机密码生成器，可配置长度、大小写字母、数字、自定义特殊字符等，生成高强度密码，增加破解难度，提供安全保障。',
                },
            ],
        }
    }

    mounted() {
        this.generate()
    }


    passwordFocus(event: any) {
        event.currentTarget.select()
    }

    handleSymbolsInputChange(e: string) {
        if (e.length === 0) {
            this.symbolChecked = false
        }
    }

    generate() {
        if (this.symbolChecked && this.symbols.length === 0) {
            this.symbolChecked = false
        }

        let charset = ''
        if (this.upperLetterChecked) charset += this.upperLetters
        if (this.lowerLetterChecked) charset += this.lowerLetters
        if (this.numberChecked) charset += this.numbers
        if (this.symbolChecked) charset += this.symbols

        if (charset.length > 0) {
            this.password = ''
            for (let i = 0, n = charset.length; i < this.length; i++) {
                this.password += charset.charAt(Math.floor(Math.random() * n))
            }
            if (this.upperLetterChecked && !this.containsChar(this.password, this.upperLetters)) {
                this.generate()
            } else if (
                this.lowerLetterChecked &&
                !this.containsChar(this.password, this.lowerLetters)
            ) {
                this.generate()
            } else if (this.numberChecked && !this.containsChar(this.password, this.numbers)) {
                this.generate()
            } else if (this.symbolChecked && !this.containsChar(this.password, this.symbols)) {
                this.generate()
            }
        } else {
            alert('至少选择一项')
        }
    }

    containsChar(a: string, b: string) {
        for (const char of b) {
            if (a.includes(char)) {
                return true
            }
        }
        return false
    }
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
