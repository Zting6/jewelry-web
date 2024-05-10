<template>
    <div class="addressmodel-wrap" v-show="props.controlAddressShow">
        <el-dialog :title="props.isEdit ? '请修改您的收获信息' : '请填写您的收货信息'" v-model="props.controlAddressShow" center
            :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" :modal="false">


            <el-form ref="ruleFormRef" style="max-width: 700px" :model="ruleForm" :rules="rules" label-width=auto
                class="demo-ruleForm" status-icon>
                <el-form-item label="收获人" prop="name">
                    <el-input v-model="ruleForm.name" />
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="ruleForm.phone" />
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="ruleForm.sex">
                        <el-radio label="1" size="large">男</el-radio>
                        <el-radio label="0" size="large">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="所在地区" prop="location">
                    <el-cascader v-model="ruleForm.location" :options="address" size="big"></el-cascader>
                </el-form-item>
                <el-form-item label="详细地址" prop="detailLoc">
                    <el-input v-model="ruleForm.detailLoc" type="textarea" />
                </el-form-item>
                <el-form-item label="地址类型为">
                    <el-radio-group v-model="ruleForm.locType">
                        <el-radio label="家" size="large">家</el-radio>
                        <el-radio label="公司" size="large">公司</el-radio>
                        <el-radio label="学校" size="large">学校</el-radio>
                    </el-radio-group>

                </el-form-item>
                <el-form-item label="是否设为默认">
                    <el-checkbox v-model="ruleForm.isdefault" label="" size="large" />
                </el-form-item>

                <el-form-item style="margin: 0 auto;">
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        确定
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)">取消</el-button>
                </el-form-item>
            </el-form>

        </el-dialog>



    </div>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, defineEmits, onMounted } from "vue"
import { addAddress } from '@/api/trade/index'
import type { FormInstance, FormRules } from 'element-plus'
// 中国各省市区
import addressData from "../../../public/address.json";
const address = addressData.address;

// const address = ref([])

const props = defineProps({
    isEdit: Boolean,
    controlAddressShow: Boolean
})

const formLabelWidth = ref('100px')


interface RuleForm {
    name: string
    phone: string
    sex: number
    location: string
    detailLoc: string
    locType: string
    isdefault: number
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: '',
    phone: '',
    sex: 0,
    location: '',
    detailLoc: '',
    locType: '家',
    isdefault: 0
})

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, message: 'Length should be 3', trigger: 'blur' },
    ],
    phone: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    sex: [
        {
            required: true,
            message: '请选择性别',
            trigger: 'change',
        },
    ],
    location: [
        {
            required: true,
            message: 'Please select Activity count',
            trigger: 'change',
        },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            ruleForm.isdefault = ruleForm.isdefault === true ? 1 : 0
            console.log('submit!', ruleForm)
            await addAddress(ruleForm).then(res => {
                console.log('addres: ', res);
                if (res.code == 1) {
                    ElMessage({
                        message: '添加成功',
                        type: 'success'
                    })
                    formEl.resetFields()
                    emit("update:controlAddressShow", false);
                    window.location.reload();
                }

            })
        } else {
            console.log('error submit!', fields)
        }
    })
}

const emit = defineEmits<{
    // update:固定写法，后面的变量是父组件中v-model：后面的这个变量
    (event: 'update:controlAddressShow', controlAddressShow: boolean): void
}>()

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    emit("update:controlAddressShow", false);
}




</script>
<style scoped>
.addressmodel-wrap {

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);

    .el-dialog__wrapper {
        width: 100%;
        height: 100%;
    }

    .input-item {
        width: 300px;
        height: 20px;

        &.special {
            width: 400px;
        }
    }
}

.demo-ruleForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 90px;
}
</style>
