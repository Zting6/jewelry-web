<template>
    <div class="outer">
        <div class="form">
            <h1>我已有在线账户</h1>
            <el-form v-if="userLog" ref="loginForm" :model="logForm" :rules="rules" label-width="0px" class="logForm"
                :size="formSize">
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
            <el-form v-if="phoneLog" ref="loginForm" :model="logForm" :rules="rules" label-width="0px" class="logForm"
                :size="formSize">
                <el-form-item label="" prop="phone">
                    <el-input v-model="logForm.phone" placeholder="手机号*" autocomplete="off" />
                </el-form-item>
                <el-form-item label="" prop="code">
                    <el-input v-model="logForm.code" placeholder="验证码*" autocomplete="off" />
                    <el-button style="margin-left: 10px;" :disabled="disableCodeButton" @click="getCode">{{
                        codeButtonText }}</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="logButton" @click="submitForm(loginForm)">登录</el-button>

                </el-form-item>
            </el-form>
            <div class="typeOuter">
                <span v-if="userLog" @click="changeToPhoneLog">验证码登录</span>
                <span v-if="phoneLog" @click="changeToUserLog">账号密码登录</span>
                <router-link to="/register"><span class="register">去注册</span></router-link>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { ref, reactive } from "vue"
import { useUserStore } from '@/store/user'
import { code, loginByUser, loginByPhone } from '@/api/user/user'
import router from "@/router";
const userStore = useUserStore()
const userLog = ref(true)
const phoneLog = ref(false)

interface LogForm {
    name: string
    passward: string
    phone: string
    code: string
}
const formSize = ref('default')
const loginForm = ref<FormInstance>()
const logForm = reactive<LogForm>({
    name: '',
    passward: '',
    phone: '',
    code: ""
})
const phonePattern = /^1[0-9]{10}$/;
const rules = reactive<FormRules<LogForm>>({
    name: [
        { required: true, message: 'Please input user name', trigger: 'blur' },
        { min: 3, message: 'Length should be 3 to 5', trigger: 'blur' }
    ],
    passward: [
        { required: true, message: 'Please input user name', trigger: 'blur' },
        { min: 3, message: 'Length should be 3 to 5', trigger: 'blur' }
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
    if (logForm.phone) {
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
        await code(logForm.phone).then(res => {
            // 处理接口返回的数据
        });
    } else {
        ElMessage({
            message: '请先输入手机号',
            type: 'error',
        })
    }
};

const changeToPhoneLog = () => {
    userLog.value = false;
    phoneLog.value = true;
}
const changeToUserLog = () => {
    userLog.value = true;
    phoneLog.value = false;
}

const submitForm = async () => {
    // console.log(loginForm.value);
    if (!loginForm.value) return
    await loginForm.value.validate(async (valid, fields) => {
        console.log(valid);

        if (valid) {
            if (userLog.value == true) {
                console.log(logForm);

                const res = userStore.userLogin(logForm).then(res => {

                    if (res.code === 1 || res.code === 200) {
                        setTimeout(() => {
                            router.push('/')
                        }, 200);
                    }
                })

            } else {
                const res = userStore.phoneLogin(logForm).then(res => {

                    if (res.code === 1 || res.code === 200) {
                        setTimeout(() => {
                            router.push('/')
                        }, 200);
                    }
                })
            }
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
    height: 280px;
    margin: 0 auto;
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

.typeOuter {
    width: 67%;
    display: flex;
    justify-content: space-around;
}

.register {
    width: 200px;
    cursor: pointer;
    /* position: absolute;
    bottom: 70px;
    left: 648px; */
}

.register:hover {
    text-decoration: underline;
}

:deep(.el-form-item__content) {
    flex-wrap: nowrap;
}
</style>
