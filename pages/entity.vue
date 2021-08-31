<template>
    <page header="HTML 实体转换" class="page-entity">
        <h4>简介</h4>
        <div class="notecard">
            <p>
                <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Entity" target="_blank">
                    HTML 实体</a
                >是一段以连字号（<code>&</code>）开头、以分号（<code>;</code>）结尾的文本（字符串）。实体常常用于显示保留字符（这些字符会被解析为
                HTML
                代码）和不可见的字符（如“不换行空格”）。你也可以用实体来代替其他难以用标准键盘键入的字符。
            </p>
            <p>
                很多字符都有易于记忆的实体，例如版权符号 (©) 的实体是
                <code>&amp;copy;</code>。另外有些字符会有多个对应实体。
            </p>
            <p>
                注：实体字符串区分大小写；空格键对应的 Unicode 编码是
                <code>U+0020</code>，因此无法搜索出 <code>&amp;nbsp;</code> 对应的
                <code>U+00A0</code>。
            </p>
        </div>
        <h4>自动转换</h4>
        <el-row :gutter="20">
            <el-col :span="10">
                <el-input
                    v-model="character"
                    :maxlength="1"
                    placeholder="请输入符号"
                    @input="onCharacterInput"
                />
            </el-col>
            <el-col :span="4">
                <el-button
                    :style="{ width: '100%' }"
                    :disabled="entity === '' && character === ''"
                    type="primary"
                    @click="onButtonClick"
                >
                    转换
                </el-button>
            </el-col>
            <el-col :span="10">
                <el-input v-model="entity" placeholder="请输入实体" @input="onEntityInput" />
            </el-col>
        </el-row>

        <h4>对照表</h4>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="characters" label="符号" width="180" />
            <el-table-column prop="entity" label="实体" width="180" />
            <el-table-column prop="htmlCode" label="HTML 代码" />
            <el-table-column prop="unicode" label="Unicode" />
        </el-table>
    </page>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Page from '@/components/page.vue'
import entities from '@/assets/html-entities.json'

interface Symbol {
    codepoint: number
    entity: string
    characters: string
    htmlCode: string
    unicode: string
}

@Component({
    components: { Page },
})
export default class PageEntity extends Vue {
    head() {
        return {
            title: 'HTML 实体转换',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        '在线 HTML 实体转换小工具，支持各种字符与 HTML 实体之间的相互转换；HTML 特殊字符转义',
                },
            ],
        }
    }

    character: string = ''
    entity: string = ''
    tableData: Array<any> = []

    get entities(): Array<Symbol> {
        const results: Array<Symbol> = []
        Object.keys(entities).forEach((key) => {
            if (key.indexOf(';') > 0 && entities[key].codepoints.length === 1) {
                results.push({
                    codepoint: entities[key].codepoints[0],
                    entity: key,
                    characters: entities[key].characters,
                    htmlCode: `&#${entities[key].codepoints[0]};`,
                    unicode: `U+${entities[key].codepoints[0]
                        .toString(16)
                        .toUpperCase()
                        .padStart(4, '0')}`,
                })
            }
        })
        results.sort((a, b) => {
            if (a.codepoint !== b.codepoint) {
                return a.codepoint - b.codepoint
            } else if (a.entity !== b.entity) {
                return a.entity < b.entity ? 1 : -1
            }
            return 0
        })
        return results
    }

    mounted() {
        this.entities.forEach((entity) => {
            this.tableData.push(entity)
        })
    }

    onCharacterInput() {
        this.entity = ''
        if (this.character.length === 1) {
            this.onButtonClick()
        }
    }

    onEntityInput() {
        this.character = ''
        if (this.entity.endsWith(';')) {
            this.onButtonClick()
        }
    }

    onButtonClick() {
        if (this.entity !== '') {
            const result = this.entities.find((e) => e.entity === this.entity)
            if (result) {
                this.character = result.characters
            } else {
                this.$message.warning('未找到结果！')
            }
        } else if (this.character !== '') {
            const result = this.entities.find((e) => e.characters === this.character)
            if (result) {
                this.entity = result.entity
            } else {
                this.$message.warning('未找到结果！')
            }
        } else {
            this.$message.error('字符和 HTML 实体均为空！')
        }
    }
}
</script>

<style lang="scss">
.page-entity {
    .content-wrapper > :first-child {
        margin-top: 0 !important;
    }
    .el-table,
    input {
        font-family: monospace;
    }
    h4 {
        font-weight: bold;
        margin: 20px 0;
    }
}
</style>
