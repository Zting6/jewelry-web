<template>
    <div class="outer">
        <Header></Header>
        <div class="main">
            <div class="pay-container">
                <div class="checkout-tit">
                    <h4 class="tit-txt">
                        <span class="success-icon"></span>
                        <span class="success-info">订单提交成功，请您及时付款，以便尽快为您发货~~</span>
                    </h4>
                    <div class="paymark">
                        <span class="fl">请您在提交订单<em class="orange time">{{ countdownValue
                                }}</em>之内完成支付，超时订单会自动取消。</span>
                        <span class="fr">订单号：<em>{{ order.orderid }}</em><em class="lead">应付金额：</em><em
                                class="orange money">￥{{
                                    order.payment ? order.payment : '加载中...' }}</em></span>
                    </div>
                </div>
                <div class="checkout-steps">
                    <div v-if="!dialogPayment" class="checkouter">
                        <div class="step-tit">
                            <h5>支付平台</h5>
                        </div>
                        <div class="step-cont">
                            <ul class="payType">
                                <li :class="{ 'check': isZfbChecked }" @click="payTypeCheck('zfb')"
                                    style="position:relative;" ref="zfb">
                                    <img src="../../../public/payimg/pay2.jpg">
                                </li>
                                <li :class="{ 'check': iswxChecked }" @click="payTypeCheck('wx')"
                                    style="position:relative;" ref="wx"><img src="../../../public/payimg/pay3.jpg"></li>
                            </ul>

                        </div>


                        <div class="hr"></div>

                        <div class="submit">
                            <a class="btn" @click="payMoney">立即支付</a>

                        </div>
                    </div>
                    <div v-else-if="dialogPayment && iswxChecked" class="codeform"
                        style="display: flex; flex-direction: column; align-items: center;">
                        <div class="paycode_head">
                            <div class="codeheader_img">
                                <img style="margin-left: 10px;" src="../../../public/payimg/WePayLogo.png" alt="">
                                <img style="width: 60px; height: 29px;" src="../../../public/payimg/按钮标签.png" alt="">
                                <span style="font-size: 14px; color: gray;">亿万用户的选择，更快更安全</span>
                            </div>
                            <span class="codeheader_text"></span>
                        </div>
                        <div id="qrcode" ref="qrcode"></div>
                        <div class="scantext" style="margin-top: 10px;">
                            <img style="width: 186px;" src="../../../public/payimg/说明文字.png" alt="">
                        </div>
                        <div class="button" style="margin-top: 30px;">
                            <el-button @click="handleClose()">支付遇到问题</el-button>
                            <el-button type="success" @click="handleConfirm()">我已成功支付</el-button>
                        </div>
                    </div>
                    <div v-else-if="dialogPayment && isZfbChecked" class="codeform"
                        style="display: flex; flex-direction: column; align-items: center;">
                        <div class="paycode_head">
                            <div class="codeheader_img">

                                <span
                                    style="margin-left: 10px; margin-right: 16px; color: #409eff; color: rgb(64, 158, 255); font-size: 21px; font-weight: 888;">支付宝支付</span>
                                <span style="font-size: 14px; color: gray;">亿万用户的选择，更快更安全</span>

                                <div id="zfbPay"></div>
                            </div>
                            <span class="codeheader_text"></span>
                        </div>
                        <div id="qrcode" ref="qrcode">
                            <form name="punchout_form" method="post" target="_blank"
                                action="https://openapi.alipaydev.com/gateway.do?charset=UTF-8&method=alipay.trade.page.pay&sign=niN8KPinj8AJCm%2FuYbyQdbqAj7UxFZ5R2KRz0uQE5YL1Y%2FLYGbSdCLHX3kRx3z7XxGRm3tez5el%2BXJyaxP3Tv%2FBETG0DxrD5yAZ3rja2E0HjGjbDwHhcJr3r33YHbDinQDXhP%2FL8hakLw%2FpVQioZUTSjNq3Gwa1SZERNdg14n9HlZYj6mluRrW004Sb6HrqmzfCz4EnfPEliJ3itcoQs14BaYvtiLXKYjPeeqMHlCjzeEcFeWaUdICP3BEIJuyoD%2B23WNAdr8dEa51OFg3u6sZKb3zzc0fB8sOKDCKmIRryVQzbosepVvHGLYLuRAIaHVLKi61MuazVuqEvN8j4CRA%3D%3D&notify_url=http%3A%2F%2F65q6m8.natappfree.cc%2Falipay%2Fnotify&version=1.0&app_id=9021000125690355&sign_type=RSA2&timestamp=2023-09-26+17%3A05%3A36&alipay_sdk=alipay-sdk-java-4.35.132.ALL&format=JSON">
                                <input type="hidden" name="biz_content"
                                    value="{&quot;out_trade_no&quot;:&quot;XP202309252043370001&quot;,&quot;total_amount&quot;:&quot;119&quot;,&quot;subject&quot;:&quot;颗粒活性炭&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">
                                <input type="submit" value="立即支付" style="display:none">
                            </form>
                        </div>

                        <div class="button" style="margin-top: 30px;">
                            <el-button @click="handleClose()">支付遇到问题</el-button>
                            <el-button type="success" @click="handleConfirm()">我已成功支付</el-button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue"
import Header from "@/components/header/static_header.vue"
import { useRouter } from "vue-router";

const router = useRouter()

const countdownValue = ref('24:00:00')
const countdown = 24 * 60 * 60// 初始倒计时值，单位为秒
const order = ref({
    orderid: 1,
    payment: 100
})
const dialogPayment = ref(false)
// 支付方式选择
const isZfbChecked = ref(false)
const iswxChecked = ref(true)
// 检验支付是否成功
const payCheck = ref(false)
// 选择支付方式
const payRequests = ref({
    orderid: '1',
    payplatform: 2,
    // 流水号
    platformnumber: '',
    platformstatus: ''
})
const payTypeCheck = (payType: string) => {
    if (payType === 'zfb') {
        isZfbChecked.value = true;
        iswxChecked.value = false;
        payRequests.value.payplatform = 1;
    } else if (payType === 'wx') {
        isZfbChecked.value = false;
        iswxChecked.value = true;
        payRequests.value.payplatform = 2;
    }
}

// 支付
const payMoney = () => {
    dialogPayment.value = true;
    if (iswxChecked.value) {
        // 微信支付
        try {
        } catch (error) {
            return;
        }
    } else {
        // 支付宝支付
        try {

        } catch (error) {
            return;
        }
    }

}
const handleClose = () => {
    dialogPayment.value = false;

    // this.$message({
    //     message: "请联系客服解决~",
    //     type: "warning"
    // });
    // this.$router.push("/member");
}
const handleConfirm = () => {

    // this.$message({
    //     message: "正在校验中~",
    //     type: "warning"
    // });
    router.push('/paysuccess')
}



</script>
<style scoped>
.outer {
    background-color: rgb(240, 238, 228);
}

.main {
    /* width: 1500px; */
    height: 500px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 200px;
    display: flex;
    align-items: center;
    background-color: white;
}

.check::after {

    content: "";
    background-image: url("../../../public/payimg/check.png");
    background-size: 48px 48px;
    position: absolute;
    bottom: -5px;
    right: -5px;
    width: 48px;
    height: 48px;
    display: flex;
}

.pay-container {
    margin: 60px auto;
    width: 1200px;
    display: flex;
    flex-direction: column;

    a:hover {
        color: #e1251b;
    }

    .orange {
        color: #e1251b;

    }

    .money {
        font-size: 18px;

    }

    .zfb {
        color: #e1251b;
        font-weight: 700;
        display: flex;
    }

    .checkout-tit {
        padding: 10px;
        display: flex;
        flex-direction: column;

        .tit-txt {
            font-size: 14px;
            line-height: 21px;
            display: flex;

            .success-icon {
                width: 30px;
                height: 30px;
                display: inline-block;
                background: url(../../../public/payimg/icon.png) no-repeat 0 0;
            }

            .success-info {
                padding: 0 8px;
                line-height: 30px;
                vertical-align: top;
            }
        }

        .paymark {
            overflow: hidden;
            line-height: 26px;
            text-indent: 38px;
            position: relative;
            margin-top: 10px;



            .fl {
                float: left;
                font-size: 18px;
            }

            .fr {
                position: absolute;
                right: 10px;

                .lead {
                    margin-bottom: 18px;
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 22.5px;
                    margin-left: 20px;
                }
            }
        }
    }

    .checkout-info {
        padding-left: 25px;
        padding-bottom: 15px;
        margin-bottom: 10px;
        border: 2px solid #e1251b;

        h4 {
            margin: 9px 0;
            font-size: 14px;
            line-height: 21px;
            color: #e1251b;
        }

        ol {
            padding-left: 25px;
            list-style-type: decimal;
            line-height: 24px;
            font-size: 14px;

        }

        ul {
            padding-left: 25px;
            list-style-type: disc;
            line-height: 24px;
            font-size: 14px;
        }
    }

    .checkout-steps {
        border: 1px solid #ddd;
        padding: 25px;



        .hr {
            height: 1px;
            background-color: #ddd;
        }

        .step-tit {
            line-height: 36px;
            margin: 5px 0 0 0;
            display: flex;
        }

        .step-cont {
            margin: 0 10px 12px 20px;
            display: flex;

            .payType {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 10px;
            }

            ul {
                font-size: 0;

                li {
                    margin: 2px;
                    display: inline-block;
                    padding: 5px 20px;
                    border: 1px solid #ddd;
                    cursor: pointer;
                    line-height: 18px;
                }
            }
        }
    }

    .submit {
        text-align: center;
        margin-top: 20px;

        .btn {
            display: inline-block;
            padding: 15px 45px;
            margin: 15px 0 10px;
            font: 18px "微软雅黑";
            font-weight: 700;
            border-radius: 0;
            background-color: #e3dec1;
            color: #fff;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            user-select: none;
            text-decoration: none;
            transition: all .2s;
        }

        .btn:hover {
            background-color: #d6d0b6;
        }
    }

    .paycode_head {
        width: 100%;
        height: 60px;
        border: 2px solid rgb(195, 195, 195);
        margin-bottom: 26px;

        .codeheader_img {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;

            img {
                width: 118px;
                height: 34px;
                margin-right: 12px;
            }

        }
    }
}
</style>
