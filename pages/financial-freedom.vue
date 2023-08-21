<template>
    <page header="财富自由计算器" class="page-financial-freedom">
        <el-row :gutter="20">
            <el-col :xs="12" :sm="6">
                <div class="input-item">
                    <span class="input-item-title">初始资金</span>
                    <el-input v-model.number="init" maxlength="14" />
                </div>
            </el-col>
            <el-col :xs="12" :sm="6">
                <div class="input-item">
                    <span class="input-item-title">新增投入</span>
                    <div class="row-line">
                        <el-input v-model.number="addition" maxlength="14" /><span>/年</span>
                    </div>
                </div>
            </el-col>
            <el-col :xs="12" :sm="6">
                <div class="input-item">
                    <span class="input-item-title">年化收益</span>
                    <div class="row-line">
                        <el-input
                            v-model.number="rate"
                            maxlength="14"
                            @input="handleRateInput"
                        /><span>%</span>
                    </div>
                </div>
            </el-col>
            <el-col :xs="12" :sm="6">
                <div class="input-item">
                    <span class="input-item-title">目标金额</span>
                    <el-input v-model.number="goal" maxlength="14" @input="handleGoalInput" />
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

<script setup lang="ts">
const init = ref(0)
const addition = ref(0)
const rate = ref(7)
const goal = ref(10000000)
const years = ref(0)

useHead({
    title: '财富自由计算器',
    meta: [
        {
            name: 'description',
            content:
                '财富自由计算器小工具，输入初始资金、每年新增投入、预计年转化、目标金额，计算出所需年数',
        },
    ],
})

function handleRateInput(e: any) {
    if (e > 100) {
        ElNotification.warning({
            title: '年化收益太高',
            message: '调整合理一些的年化收益，收益越高风险越高！',
        })
    }
}

function handleGoalInput(e: any) {
    if (e.length >= 14) {
        ElNotification.warning({
            title: '目标金额太大',
            message: '别做梦了，该醒醒啦！',
        })
    }
}

function calc1(a: number, m: number, r: number, n: number) {
    return (a + ((1 + r) / r) * m) * Math.pow(1 + r, n) - ((1 + r) / r) * m
}

function calc2(a: number, m: number, r: number, g: number) {
    return Math.log((g + (m * (1 + r)) / r) / (m / r + a + m)) / Math.log(1 + r)
}

function handleButtonClick() {
    years.value =
        Math.round(calc2(init.value, addition.value, rate.value / 100, goal.value) * 100) / 100
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
