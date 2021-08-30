<template>
    <page header="时间戳转换" class="page-timestamp">
        <el-row type="flex" align="middle">
            <el-col :span="4"><span class="line-title">选项：</span></el-col>
            <el-col :span="20">
                <el-checkbox v-model="realTime">实时时间</el-checkbox>
                <el-checkbox v-model="millisecond">毫秒</el-checkbox>
            </el-col>
        </el-row>
        <el-row type="flex" align="middle">
            <el-col :span="4"><span class="line-title">时间选择器：</span></el-col>
            <el-col :span="14">
                <el-date-picker
                    v-model="dateTime"
                    type="datetime"
                    placeholder="选择日期时间"
                    @focus="onInputFocus"
                />
            </el-col>
            <el-col :span="5" :offset="1">
                <el-button type="primary" @click="convertDateTime">转换</el-button>
            </el-col>
        </el-row>
        <el-row type="flex" align="middle">
            <el-col :span="4"><span class="line-title">时间戳：</span></el-col>
            <el-col :span="14">
                <el-input v-model="timestamp" @focus="onInputFocus" />
            </el-col>
            <el-col :span="5" :offset="1">
                <el-button type="primary" @click="convertTimestamp">转换</el-button>
            </el-col>
        </el-row>
        <el-row type="flex" align="middle">
            <el-col :span="4"><span class="line-title">ISO 8601：</span></el-col>
            <el-col :span="14">
                <el-input v-model="isoString" @focus="onInputFocus" />
            </el-col>
            <el-col :span="5" :offset="1">
                <el-button type="primary" @click="convertIsoString">转换</el-button>
            </el-col>
        </el-row>
    </page>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Page from '@/components/page.vue'
import { DateTime } from 'luxon'

@Component({
    components: { Page },
})
export default class PageTimestamp extends Vue {
    dateTime: Date = DateTime.now().toJSDate()
    timestamp: string = ''
    isoString: string = ''
    realTime: boolean = true
    millisecond: boolean = false

    head() {
        return {
            title: '时间戳转换',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '在线时间戳转换小工具，支持时间戳与 ISO 8601 时间格式之间相互转换',
                },
            ],
        }
    }

    mounted() {
        this.updateTime()
    }

    onInputFocus() {
        this.realTime = false
    }

    updateTime() {
        if (this.realTime) {
            this.dateTime = DateTime.now().toJSDate()
            this.convertFromDateTime()
        }
        const timeInverval = this.millisecond ? 1 : 100
        setTimeout(() => {
            this.updateTime()
        }, timeInverval)
    }

    convertFromDateTime() {
        if (this.dateTime) {
            if (this.millisecond) {
                this.timestamp = DateTime.fromJSDate(this.dateTime).toMillis().toString()
                this.isoString = DateTime.fromJSDate(this.dateTime).toISO()
            } else {
                this.timestamp = Math.floor(
                    DateTime.fromJSDate(this.dateTime).toSeconds()
                ).toString()
                this.isoString = DateTime.fromJSDate(this.dateTime).toFormat(
                    "yyyy-MM-dd'T'HH:mm:ssZZ"
                )
            }
        }
    }

    convertDateTime() {
        this.realTime = false
        this.convertFromDateTime()
    }

    convertTimestamp() {
        if (this.timestamp) {
            if (this.timestamp.toString().length === 13) {
                this.dateTime = DateTime.fromMillis(parseInt(this.timestamp)).toJSDate()
            } else if (this.timestamp.toString().length === 10) {
                this.dateTime = DateTime.fromSeconds(parseInt(this.timestamp)).toJSDate()
            } else {
                this.$message.error('时间戳位数应为 10 位或 13位')
                return
            }
            this.convertFromDateTime()
        }
    }

    convertIsoString() {
        if (this.isoString) {
            this.dateTime = DateTime.fromISO(this.isoString).toJSDate()
            this.convertFromDateTime()
        }
    }

    playOrPause() {
        this.realTime = !this.realTime
    }
}
</script>

<style lang="scss">
.page-timestamp {
    h3 {
        font-weight: bold;
    }
    .el-row {
        margin-bottom: 20px;
        min-height: 40px;
    }
    .line-title {
        font-weight: bold;
    }
    .el-date-editor {
        width: 100%;
    }
    .button-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .el-button {
            margin: 0;
        }
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
