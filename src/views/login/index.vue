<template>
    <div class="outer">
        <div class="form">
            <h1>我已有在线账户</h1>
            <el-form ref="loginForm" :model="logForm" :rules="rules" label-width="0px" class="logForm" :size="formSize">
                <el-form-item label="" prop="name">
                    <el-input v-model="logForm.name" placeholder="用户名*" autocomplete="off" />
                </el-form-item>
                <el-form-item label="" prop="passward">
                    <el-input v-model="logForm.passward" type="password" placeholder="密码*" show-password
                        autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="logButton" @click="submitForm(loginForm)">登录</el-button>

                </el-form-item>
            </el-form>
            <router-link to="/register"><span class="register">去注册</span></router-link>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { ref, reactive } from "vue"
interface LogForm {
    name: string,
    passward: string
}
const formSize = ref('default')
const logFormRef = ref<FormInstance>()
const logForm = reactive<LogForm>({
    name: '',
    passward: ''
})

const rules = reactive<FormRules<LogForm>>({
    name: [
        { required: true, message: 'Please input user name', trigger: 'blur' },
        { min: 3, message: 'Length should be 3 to 5', trigger: 'blur' }
    ],
    passward: [
        { required: true, message: 'Please input user name', trigger: 'blur' },
        { min: 3, message: 'Length should be 3 to 5', trigger: 'blur' }
    ]
})

const submitForm = (loginForm: FormInstance | undefined) => {
    if (!loginForm) return
    loginForm.validate((valid) => {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    position: relative;

    h1 {
        margin-top: 80px;
    }
}

.logForm {
    width: 400px;
    height: 600px;
    margin: 0 auto;
    margin-top: -60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.logButton {
    width: 400px;
    background-color: black;
    margin-top: 20px;
    transition: all .3s;
}

.logButton:hover {
    background-color: rgb(63, 63, 63);
}

.register {
    width: 200px;
    cursor: pointer;
    position: absolute;
    bottom: 70px;
    left: 648px;
}

.register:hover {
    text-decoration: underline;
}
</style>
