<template>
    <div class="outer">
        <div class="form">
            <h1>注册账号</h1>
            <el-form ref="registerForm" :model="regForm" :rules="rules" label-width="0px" class="regForm" :size="formSize">
                <el-form-item label="" prop="name">
                    <el-input v-model="regForm.name" placeholder="用户名*" autocomplete="off" />
                </el-form-item>
                <el-form-item label="" prop="passward">
                    <el-input v-model="regForm.passward" type="password" placeholder="密码*" show-password
                        autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="regButton" @click="submitForm(registerForm)">注册</el-button>

                </el-form-item>
            </el-form>
            <div class="login">我已有账户，去<router-link to="/login"><span class="tologin">登录</span></router-link></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { ref, reactive } from "vue"
interface regForm {
    name: string,
    passward: string
}
const formSize = ref('default')
const regFormRef = ref<FormInstance>()
const regForm = reactive<regForm>({
    name: '',
    passward: ''
})

const rules = reactive<FormRules<regForm>>({
    name: [
        { required: true, message: 'Please input user name', trigger: 'blur' },
        { min: 3, message: 'Length should be 3 to 5', trigger: 'blur' }
    ],
    passward: [
        { required: true, message: 'Please input user name', trigger: 'blur' },
        { min: 3, message: 'Length should be 3 to 5', trigger: 'blur' }
    ]
})

const submitForm = (registerForm: FormInstance | undefined) => {
    if (!registerForm) return
    registerForm.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
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
}

.form {
    width: 1000px;
    height: 500px;
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
    width: 400px;
    height: 600px;
    margin: 0 auto;
    margin-top: -60px;
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
</style>
