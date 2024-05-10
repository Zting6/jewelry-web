<template>
    <div class="outer">

        <div class="container">
            <h3 class="title">填写并核对订单信息</h3>
            <div class="content">
                <h5 class="receive">
                    收件人信息
                    <a href="javascript:;" @click="addAddress">新增收货地址</a>
                </h5>
                <!-- 用户地址信息展示 -->
                <template v-if="addressInfo.length != 0">
                    <!-- 存在地址 -->
                    <div class="address clearFix" v-for="(address, index) in addressInfo" :key="address.id" style="
                        /* display: flex; */
                        width: 1130px;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 20px;
                    ">
                        <input type="radio" v-model="selectedAddress" :value="address.id"
                            @change="handleAddress(address.id)" :checked="address.isDefault === 1"
                            :name="'addressRadio_' + address.id" class="addressRadio"
                            style="float: left; margin-top: 18px;" />
                        <div class="addressouter" style="float: left; margin-left: 13px;">
                            <span class="username" :class="{ selected: address.isDefault === 1 }" @click="() => {
                                console.log(address);
                            }">{{ address.consignee }}</span>
                            <p>
                                <span class="s1" style="margin-right: 10px;" v-if="address.provinceName">{{
                                    address.provinceName }}</span>
                                <span class="s1" style="margin-right: 10px;" v-if="address.cityName">{{
                                    address.cityName }}</span>
                                <span class="s1" style="margin-right: 10px;" v-if="address.districtName">{{
                                    address.districtName }}</span>
                                <span class="s2">{{ address.phone }}</span>
                            </p>
                            <div class="defaultAccess">
                                <li class="cart-list-con1">
                                    <input v-model="selectedDefaultAddress" :value="address.id"
                                        @change="handleDefaultAddress(address.id)" type="radio"
                                        name="selectedDefaultAddress" :checked="address.isDefault === 1"
                                        class="selectCheck" />
                                </li>
                                <span class="s3 DefaultAddress" :class="{
                                    selected: address.isDefault === 1,
                                    'not-selected': address.isDefault !== 1,
                                }" v-if="address.isDefault == 1">已设为默认</span>
                                <span class="s3 DefaultAddress" :class="{
                                    selected: address.isDefault === 1,
                                    'not-selected': address.isDefault !== 1,
                                }" v-else>默认</span>
                            </div>
                        </div>
                        <!-- 地址操作区 -->
                        <span class="place" style="float: right; line-height: -30px">
                            <el-button class="addressBut" plain href="javascript:;"
                                style="margin-left: 150px; margin-right: 7px"
                                @click="updateUserAddress(index)">修改</el-button>

                            <el-popconfirm title="确定删除该地址吗?" @confirm="removeUserAddress(address.id)">
                                <template #reference>
                                    <el-button class="addressBut" type="danger">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </span>
                    </div>
                </template>
                <!-- 不存在地址的时候 -->
                <template v-else>
                    <div class="no-address">
                        <a href="javascript:;" @click="addAddress">找不到您的地址信息,赶快去添加地址信息吧~</a>
                    </div>
                </template>
                <div class="line"></div>
                <h5 class="pay">支付方式</h5>
                <div class="payWays clearFix">
                    <label class="payWay">
                        <input type="radio" value="1" />
                        在线支付
                    </label>
                    <!-- <label class="payWay" style="margin-left: 5px">
            <input type="radio" v-model="selectedPaymentType" value="0" />
            货到付款
          </label> -->
                </div>
                <div class="line"></div>
                <h5 class="pay">送货清单</h5>
                <!-- 配送方式 -->
                <div class="way">
                    <h5>配送方式</h5>
                    <div class="info clearFix">
                        <input type="radio" value="10" />
                        <span class="s1">天天快递</span>
                        <p>配送时间：预计7个工作日内 09:00-15:00送达</p>
                    </div>
                    <div class="info clearFix">
                        <input type="radio" value="20" />
                        <span class="s1">极速快递</span>
                        <p>配送时间：预计3个工作日内 08:00-18:00送达</p>
                    </div>
                </div>
                <!-- 商品清单 -->
                <div class="detail">
                    <h5>商品清单</h5>
                    <!-- <ul class="list clearFix" v-for="(detailInfo) in detailArrayList" :key="detailInfo.proid"> -->
                    <ul class="list clearFix" v-for="item in selectedItems" :key="item.carid">
                        <li>
                            <!-- <img :src="detailInfo.imgUrl" alt="" style="width:100px;height:100px"> -->
                            <img :src="'data:image/png;base64,' + item.mainimage" alt=""
                                style="width: 100px; height: 100px" />
                        </li>
                        <li>
                            <!-- <p>{{detailInfo.skuName}}</p> -->
                            <p>{{ item.name }}</p>
                            <h4>7天无理由退货</h4>
                        </li>
                        <li>
                            <!-- <h3>￥{{detailInfo.orderPrice}}</h3> -->
                            <h3>{{ item.quantity * item.price }}</h3>
                        </li>
                        <!-- <li>X1{{detailInfo.skuNum}}</li> -->
                        <li>X{{ item.quantity }}</li>
                        <li>有货</li>
                    </ul>
                </div>

                <div class="line"></div>
                <div class="bill">
                    <h5>发票信息：</h5>
                    <div>普通发票（电子） 个人 明细</div>
                    <h5>使用优惠/抵用</h5>
                </div>
            </div>
            <div class="money clearFix">
                <ul>
                    <li>
                        <b style="display: flex; margin-right: 10px"><i style="margin-right: 8px">9</i>件商品，总商品金额：</b>
                        <span>¥1000</span>
                    </li>
                    <li>
                        <b style="display: flex; margin-right: 19px">返现：</b>
                        <span>0.00</span>
                    </li>
                    <li>
                        <b style="display: flex; margin-right: 19px">运费：</b>
                        <span>0.00</span>
                    </li>
                </ul>
            </div>
            <div class="trade">
                <div class="price">
                    应付金额:<span>¥200</span>
                </div>
                <!-- Object.keys(this.defaultUserAddress).length === 0 -->
                <!-- <div class="receiveInfo" v-if="Object.keys(defaultUserAddress).length !== 0">
                    寄送至：
                    <span>{{ defaultUserAddress.provinceName }}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    收货人：<span>{{ defaultUserAddress.consignee }}</span>
                    &nbsp;&nbsp;
                    <span>{{ defaultUserAddress.phone }}</span>
                </div>
                <div class="receiveInfo" v-else>未选择收获地址信息</div> -->
            </div>
            <div class="sub clearFix">
                <a class="subBtn" @click="orderShop">提交订单</a>
            </div>
        </div>
        <!-- 地址编辑  -->
        <AddressInfoModel v-model:controlAddressShow="controlAddressShow" v-model:isEdit="isEdit" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { storeToRefs } from 'pinia'
import AddressInfoModel from '@/components/address/address.vue';
import { useRoute, useRouter } from 'vue-router';
import { getallAddress, changeDefaultAddress } from '@/api/trade/index'


const selectedAddressId = ref(0)
selectedAddressId.value = 1;

interface Address {
    id: number;
    userId: number;
    consignee: string;
    phone: number;
    sex: number;
    provinceName: string;
    cityName: string;
    districtName: string;
    detail: string;
    label: string;
    isDefault: number;
}
const addressInfo = ref<Address[]>([]);
addressInfo.value = [
    {
        "id": 1,
        "userId": 1,
        "consignee": "user",
        "phone": 18563859283,
        "sex": 0,
        "provinceName": "北京市",
        "cityName": "北京市",
        "districtName": "东城区",
        "detail": "东城区11",
        "label": "学校",
        "isDefault": 1

    },
]

const getAddress = async () => {
    await getallAddress().then(res => {
        addressInfo.value = res.data
    })
}
const selectedAddress = ref(0)
const selectedDefaultAddress = ref(0)
const handleAddress = (id) => {
    selectedAddress.value = id;
    // Update other addresses' selected state
    // addressInfo.value.forEach(address => {
    //     if (address.id !== id) {
    //         address.isDefault = 0; // Or whatever property indicates selection
    //     }
    // })
}
const handleDefaultAddress = async (id) => {
    selectedDefaultAddress.value = id;

    await changeDefaultAddress(id).then(res => {
        window.location.reload();
    })
    // Update other addresses' selected state
    // addressInfo.value.forEach(address => {
    //     if (address.id !== id) {
    //         address.isDefault = 0; // Or whatever property indicates selection
    //     }
    // })
}

const defaultUserAddress = () => {
    if (Array.isArray(addressInfo)) {
        if (selectedAddressId) {
            const foundAddress = addressInfo.find((item) => item.id === selectedAddressId) || {};
            //return foundAddress || {};
            if (foundAddress) {
                return foundAddress
            }
        }
        const foundAddress = addressInfo.find((item) => item.isDefault == 1)
        //console.log("商品id"+item.id);
        if (foundAddress) {
            selectedAddressId.value = foundAddress.id
            return foundAddress
        }
    }

    return {};

}

interface Select {
    carid: number
    isDefault: number
    createtime: string
    mainimage: string
    name: string
    price: number
    proid: number
    quantity: number
    updatetime: string
    userid: number
}
const selectedItems = ref<Select[]>([]);
selectedItems.value = [
    {
        "carid": 362,
        "isDefault": 1,
        "createtime": "2024-04-06T17:37:56",
        "mainimage": "",
        "name": "工业柱状颗粒活性炭 废气污水处理吸附箱净化塔喷涂油漆房用厂家",
        "price": 20,
        "proid": 104,
        "quantity": 1,
        "updatetime": "2024-04-06T17:37:56",
        "userid": 16

    },
]

const controlAddressShow = ref(false)
const isEdit = ref(false)
// 添加地址
const addAddress = () => {
    isEdit.value = false;
    controlAddressShow.value = true;

}

const updateUserAddress = (data: any) => {
    isEdit.value = true;
    controlAddressShow.value = true;
}
const removeUserAddress = (data: any) => {

}
const router = useRouter()
const orderShop = () => {
    router.push('/pay')
}

onMounted(() => {
    getAddress();
})

</script>

<style scoped>
.outer {
    width: 100%;
}

* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;

    /* 禁止选中 */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .TradeHeader {
        height: 30px;
        background-color: #f4f4f4;
    }

    .jumpHomepage {
        float: right;
        margin-left: 20px;
        color: #919399;
        font-size: 15px;
        line-height: 30px;
    }

    .container {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 100px 0;
        margin-bottom: 20px;

        .DefaultAddress {
            color: #a79e71;
            margin-left: 5px;
            padding: 2px;
            border-radius: 2px;
        }

        .selectCheck {
            float: left;
            margin-top: 2px;
        }

        .title {
            width: 1200px;
            margin: 0 auto;
            font-size: 14px;
            line-height: 21px;
            display: flex;
        }

        .addressBut {
            width: 60px;
        }

        .no-address {
            text-align: center;
            margin: 15px 0;
            display: flex;

            a {
                font-size: 16px;
                display: flex;
            }
        }

        .content {
            width: 1200px;
            margin: 10px auto 0;
            border: 1px solid rgb(221, 221, 221);
            padding: 25px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;

            .receive,
            .pay {
                line-height: 36px;
                margin: 18px 0;
                display: flex;
                justify-content: space-between;
            }

            .receive {
                a {
                    font-size: 12px;
                    float: right;
                    display: flex;

                    &:hover {
                        color: #e1251b;
                        text-decoration: underline;
                    }
                }
            }

            .payWays {
                padding-left: 20px;
                margin-bottom: 15px;
                display: flex;

                .payWay {
                    float: left;
                    width: 100px;
                    height: 30px;
                    font-size: 12px;
                    text-align: center;
                    border: 1px solid #ddd;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                    cursor: default;
                    cursor: pointer;
                    padding: 5px;
                }

                .payWay::after {
                    content: "";
                    display: none;
                    width: 13px;
                    height: 13px;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    background: url(./images/choosed.png) no-repeat;
                }

                .payWay.selected {
                    border-color: #e1251b;
                }

                .payWay.selected::after {
                    display: block;
                }

                p {
                    width: 610px;
                    float: left;
                    line-height: 30px;
                    margin-left: 10px;
                    padding-left: 5px;
                    cursor: pointer;
                    display: flex;

                    .s1 {
                        float: left;
                        display: flex;
                    }

                    .s2 {
                        float: left;
                        margin: 0 5px;
                        display: flex;
                    }

                    .s3 {
                        float: left;
                        width: 56px;
                        height: 24px;
                        line-height: 24px;
                        margin-left: 10px;
                        background-color: #878787;
                        color: #61cf7a;
                        margin-top: 3px;
                        text-align: center;
                        display: flex;
                    }
                }

                p:hover {
                    background-color: #ddd;
                }
            }

            .line {
                height: 1px;
                background-color: #ddd;
            }

            .way {
                width: 1080px;
                height: 130px;
                background: #f4f4f4;
                padding: 85px 15px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;

                h5 {
                    line-height: 50px;
                    display: flex;
                }

                .info {
                    margin-top: 5px;
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;

                    .s1 {
                        float: left;
                        border: 1px solid #ddd;
                        width: 120px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        margin-right: 10px;
                        display: flex;
                        font-size: 12px;
                        justify-content: center;
                        align-items: center;
                        cursor: default;
                    }

                    p {
                        line-height: 30px;
                        display: flex;
                        font-size: 12px;
                        justify-content: center;
                        align-items: center;
                        cursor: default;
                    }
                }
            }

            .detail {
                width: 1080px;
                display: flex;
                background: #f0eee4;
                padding: 15px;
                padding-bottom: 20px;
                margin: 0px auto 30px auto;
                flex-direction: column;

                h5 {
                    line-height: 50px;
                    display: flex;
                }

                .list {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    cursor: default;

                    li {
                        line-height: 30px;
                        display: flex;
                        flex-direction: column;
                        margin-right: 100px;

                        p {
                            margin-bottom: 20px;
                            display: flex;
                        }

                        h4 {
                            color: #c81623;
                            font-weight: 400;
                            display: flex;
                        }

                        h3 {
                            color: #e12228;
                            display: flex;
                        }
                    }
                }
            }

            .bbs {
                margin-bottom: 15px;
                display: flex;
                flex-direction: column;

                h5 {
                    line-height: 50px;
                    display: flex;
                }

                textarea {
                    width: 100%;
                    border-color: #e4e2e2;
                    line-height: 1.8;
                    outline: none;
                    resize: none;
                    display: flex;
                }
            }

            .bill {
                h5 {
                    line-height: 50px;
                    display: flex;
                }

                div {
                    padding-left: 15px;
                    display: flex;
                    font-size: 12px;
                    justify-content: flex-start;
                    align-items: center;
                    cursor: default;
                }
            }
        }

        .money {
            width: 1200px;
            margin: 20px auto;
            display: flex;
            justify-content: flex-end;

            ul {
                width: 230px;
                float: right;
                display: flex;
                flex-direction: column;

                li {
                    line-height: 30px;
                    display: flex;
                    justify-content: flex-end;

                    i {
                        color: #61cf7a;
                        display: flex;
                    }
                }
            }
        }

        .trade {
            box-sizing: border-box;
            width: 1200px;
            padding: 10px;
            margin: 10px auto;
            text-align: right;
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            div {
                line-height: 30px;
                display: flex;
            }

            .price span {
                color: #e12228;
                font-weight: 700;
                font-size: 14px;
                display: flex;
            }

            .receiveInfo {
                color: #999;
                display: flex;
            }
        }

        .sub {
            width: 1200px;
            margin: 0 auto 10px;
            display: flex;
            justify-content: flex-end;

            .subBtn {
                float: right;
                width: 164px;
                height: 56px;
                font-size: 18px;
                font-weight: 800;
                line-height: 56px;
                text-align: center;
                color: #fff;
                background-color: #cdcbc1;
                display: flex;
                justify-content: center;
                margin-top: 20px;
                cursor: pointer;
                transition: all .2s;
            }

            .subBtn:hover {
                background-color: #c7be91
            }
        }
    }
}
</style>
