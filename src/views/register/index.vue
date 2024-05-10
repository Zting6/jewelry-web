<template>
    <div class="outer">
        <div class="form">
            <h1>注册账号</h1>
            <el-form ref="regFormRef" :model="regForm" :rules="rules" label-width="90px" class="regForm"
                :size="formSize">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="regForm.userName" placeholder="长度为3-5位" autocomplete="off" />
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="regForm.sex">
                        <el-radio label="男" size="large">男</el-radio>
                        <el-radio label="女" size="large">女</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input v-model="regForm.password" type="password" placeholder="密码至少6位" show-password
                        autocomplete="off" />
                </el-form-item>
                <el-form-item label="确认密码" prop="repassword">
                    <el-input v-model="regForm.repassword" type="password" placeholder="请再次输入密码" show-password
                        autocomplete="off" />
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="regForm.name" placeholder="长度为3-5位" autocomplete="off" />
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="regForm.phone" type="phone" placeholder="请输入手机号" autocomplete="off" />
                </el-form-item>
                <el-form-item style="display: flex;flex-wrap: nowrap" label="验证码" prop="code">
                    <el-input v-model="regForm.code" type="code" placeholder="请输入验证码" autocomplete="off" />
                    <el-button style="margin-left: 10px;" :disabled="disableCodeButton" @click="getCode">{{
                        codeButtonText }}</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="regButton" @click="submitForm">注册</el-button>
                </el-form-item>
            </el-form>
            <div class="login">我已有账户，去<router-link to="/login"><span class="tologin">登录</span></router-link></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import type { FormInstance, FormRules } from "element-plus";
import { code, register } from '@/api/user/user'
// import { ElMessage } from 'element-plus'

interface regForm {
    userName: string
    sex: string
    password: string
    repassword: string
    name: string
    phone: string
    code: string
}

const formSize = ref('default')
const regFormRef = ref<FormInstance>()
const regForm = reactive<regForm>({
    userName: '',
    sex: '',
    password: '',
    repassword: '',
    name: '',
    phone: '',
    code: ""
})

const validatePassword = (rule: any, value: string, callback: Function) => {
    if (value === regForm.password) {
        callback();
    } else {
        callback(new Error('The passwords do not match'));
    }
}
const phonePattern = /^1[0-9]{10}$/; // 以1开头，后面跟着10位数字
const rules = reactive<FormRules<regForm>>({
    userName: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 5, message: '长度应为3到5位', trigger: 'blur' }
    ],
    sex: [
        {
            required: true,
            message: '请选择性别',
            trigger: 'change',
        },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '密码至少6位', trigger: 'blur' }
    ],
    repassword: [
        { required: true, message: '请确认密码', trigger: 'blur' },
        { validator: validatePassword, trigger: 'blur' }
    ],
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        { min: 3, max: 5, message: '长度应为3到5位', trigger: 'blur' }
    ],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: phonePattern, message: '手机号格式不正确', trigger: 'blur' }
    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 4, message: '验证码应为4位', trigger: 'blur' }
    ],
})

const disableCodeButton = ref(false)
const codeButtonText = ref('获取验证码')
const getCode = async () => {
    if (regForm.phone) {
        if (disableCodeButton.value) return; // 如果按钮已禁用，则不执行后续逻辑

        // 弹出提示框
        ElMessage({
            message: '验证码发送成功',
            type: 'success',
        })
        // 禁用按钮
        disableCodeButton.value = true;
        codeButtonText.value = '重新发送(30s)';

        // 倒计时 30 秒
        let seconds = 30;
        const timer = setInterval(() => {
            seconds--;
            codeButtonText.value = `重新发送(${seconds}s)`;
            if (seconds === 0) {
                clearInterval(timer);
                codeButtonText.value = '获取验证码';
                disableCodeButton.value = false; // 启用按钮
            }
        }, 1000);

        // 调用获取验证码的接口
        await code(regForm.phone).then(res => {
            // 处理接口返回的数据
        });
    } else {
        ElMessage({
            message: '请先输入手机号',
            type: 'error',
        })
    }
};

// 定义表单提交函数
const submitForm = async () => {
    console.log(regForm.name);

    if (!regFormRef.value) return
    await regFormRef.value.validate(async (valid, fields) => {
        if (valid) {
            await register(regForm).then(res => {
                console.log(res);
            })
        } else {
            console.log('表单验证未通过，请检查输入')
        }
    })
}

</script>

<style scoped>
.outer {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    background: linear-gradient(to right, #f0eee4 20%, #c2bc9e 80%);
}

.form {
    width: 1000px;
    /* height: 500px; */
    background-color: white;
    margin: 170px 0;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    h1 {
        margin-top: 80px;
    }
}

.regForm {
    width: 440px;
    height: 600px;
    margin-top: -60px;
    margin-left: -70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.regButton {
    width: 400px;
    background-color: black;
    margin-top: 20px;
    transition: all .3s;
}

.regButton:hover {
    background-color: rgb(63, 63, 63);
}

.login {
    width: 200px;

    position: absolute;
    top: 22px;
    left: 60px;
}

.tologin {
    cursor: pointer;
}

.tologin:hover {
    text-decoration: underline;
}

:deep(.el-form-item__content) {
    flex-wrap: nowrap;
}
</style>
