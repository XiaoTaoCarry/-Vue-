<template>
    <i-form :model="formItem" :label-width="80">
        
        </Form-item>
        <Form-item label="选择文件">
            <i-select :model.sync="formItem.select" placeholder="请选择">
                <i-option value="beijing">文件1</i-option>
                <i-option value="shanghai">文件2</i-option>
                <i-option value="shenzhen">文件3</i-option>
            </i-select>
        </Form-item>
        
        </Form-item>
        <Form-item label="纸张大小">
            <Radio-group :model.sync="formItem.radio">
                <Radio label="male">A4</Radio>
                <Radio label="female">A3</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="其他设置">
            <Checkbox-group v-model="formItem.checkbox">
                <Checkbox label="黑白"></Checkbox>
                <Checkbox label="彩色"></Checkbox>
                <Checkbox label="双面"></Checkbox>
                <Checkbox label="PDF去背景"></Checkbox>
            </Checkbox-group>
        </Form-item>
       
        </Form-item>
        <Form-item label="选择打印页面">
            <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 2}" placeholder="请输入..."></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary">提交</i-button>
            <i-button type="ghost" style="margin-left: 8px">取消</i-button>
        </Form-item>
    </i-form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
