<template>
    <page header="财富自由计算器" class="page-financial-freedom">
        <el-row :gutter="20">
            <el-col :xs="12" :sm="6">
                <div class="input-item">
                    <span class="input-item-title">初始资金</span>
                    <el-input v-model.number="init" />
                </div>
            </el-col>
            <el-col :xs="12" :sm="6">
                <div class="input-item">
                    <span class="input-item-title">新增投入</span>
                    <div class="row-line">
                        <el-input v-model.number="addition" /><span>/年</span>
                    </div>
                </div>
            </el-col>
            <el-col :xs="12" :sm="6">
                <div class="input-item">
                    <span class="input-item-title">年化收益</span>
                    <div class="row-line"><el-input v-model.number="rate" /><span>%</span></div>
                </div>
            </el-col>
            <el-col :xs="12" :sm="6">
                <div class="input-item">
                    <span class="input-item-title">目标金额</span>
                    <el-input v-model.number="goal" />
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="18">
                <div class="result-item">
                    <span class="result-item-title">所需年数：</span>
                    <span class="result-item-text">{{ years || '' }}</span>
                </div>
            </el-col>
            <el-col :xs="24" :sm="6">
                <el-button type="primary" @click="handleButtonClick">计算</el-button>
            </el-col>
        </el-row>
    </page>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Page from '@/components/page.vue'

@Component({
    components: { Page },
})
export default class PageTimestamp extends Vue {
    init: number = 0
    addition: number = 0
    rate: number = 7
    goal: number = 10000000
    years: number = 0

    head() {
        return {
            title: '财富自由计算器',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        '财富自由计算器小工具，输入初始资金、每年新增投入、预计年转化、目标金额，计算出所需年数',
                },
            ],
        }
    }

    mounted() {}

    calc1(a: number, m: number, r: number, n: number) {
        return (a + ((1 + r) / r) * m) * Math.pow(1 + r, n) - ((1 + r) / r) * m
    }

    calc2(a: number, m: number, r: number, g: number) {
        // 66000,83600,102960,124256,147681.6
        return Math.log((g + (m * (1 + r)) / r) / (m / r + a + m)) / Math.log(1 + r)
    }

    handleButtonClick() {
        this.years =
            Math.round(this.calc2(this.init, this.addition, this.rate / 100, this.goal) * 100) / 100
    }
}
</script>

<style lang="scss">
.page-financial-freedom {
    h3 {
        font-weight: bold;
    }
    .el-row {
        margin-bottom: 20px;
        min-height: 40px;
    }
    .input-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 5px;
        .input-item-title {
            font-weight: bold;
            text-align: center;
            margin-bottom: 10px;
        }

        .el-input__inner {
            padding: 0 5px;
            text-align: right;
        }
        .row-line {
            width: 100%;
            display: flex;
            align-items: center;
            .el-input {
                flex: 1;
                margin-right: 5px;
            }
        }
    }
    .result-item {
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 5px;
        .result-item-title {
            font-weight: bold;
        }
        .result-item-text {
            font-family: monospace !important;
        }
    }

    .el-button--primary {
        width: 100%;
    }
    .text-center {
        text-align: center;
    }
    input {
        font-size: 16px;
        font-family: monospace !important;
    }
}
</style>
