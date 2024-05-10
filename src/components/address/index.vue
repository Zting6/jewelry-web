<template>
    <div class="addressmodel-wrap" v-show="controlAddressShow">
        <el-dialog :title="addressInfo.shoppingid ? '请修改您的地址信息' : '请添写您的收货地址'" :visible.sync="controlAddressShow" center
            :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" :modal="false"
            @open="handleOpen">
            <el-form>
                <el-form-item label="收货人：" :label-width="formLabelWidth" :error="receiverNameErrorMsg">
                    <el-input autocomplete="off" v-model="addressInfo.receivername" class="input-item"
                        @blur="validateReceiverName"></el-input>
                </el-form-item>

                <el-form-item label="联系电话：" :label-width="formLabelWidth" :error="phoneErrorMsg">
                    <el-input autocomplete="off" v-model="addressInfo.receiverphone" class="input-item"
                        @blur="validatePhone"></el-input>
                </el-form-item>

                <el-form-item label="所在地区：" :label-width="formLabelWidth">
                    <el-cascader v-model="addressValue" :options="address" size="medium"></el-cascader>
                </el-form-item>

                <el-form-item label="详细地址：" :label-width="formLabelWidth" :error="addressErrorMsg">
                    <el-input autocomplete="off" v-model="addressInfo.receiveraddress" class="input-item special"
                        @blur="validateAddress"></el-input>
                </el-form-item>

                <el-form-item label="是否设为默认地址：" v-if="!addressInfo.shoppingid">
                    <el-checkbox v-model="isChecked"></el-checkbox>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="btnConfirm" type="primary" :disabled="!isValid">确定</el-button>
                <el-button @click="btnCancel">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
// import { useStore } from 'pinia';

// 中国各省市区
import addressData from "../../../public/address.json";

// const store = useStore();
const address = addressData.address;

const controlAddressShow = ref(false);
const shoppingid = ref('');
const addressInfo = ref({
    userid: 1,
    shoppingid: 1,
    checked: '',
    receivername: '',
    receiverphone: '',
    receiverprovince: '',
    receivercity: '',
    receiverdistrict: '',
    receiveraddress: '',
});
const initialAddressInfo = ref({
    userid: 1,
    isChecked: false,
    receivername: '',
    receiverphone: '',
    receiverprovince: '',
    receivercity: '',
    receiverdistrict: '',
    receiveraddress: '',
});
const isChecked = ref(false);
const formLabelWidth = '100px';
const addressValue = ref({});
const provinces = ref([]);
const cities = ref([]);
const districts = ref([]);
const phoneValid = ref(true);
const phoneErrorMsg = ref('');
const receiverNameValid = ref(true);
const receiverNameErrorMsg = ref('');
const addressValid = ref(true);
const addressErrorMsg = ref('');

const isValid = computed(() => {
    const requiredFields = [
        addressInfo.value.receivername,
        addressInfo.value.receiverphone,
        addressValue.value,
        addressInfo.value.receiveraddress
    ];
    return requiredFields.every(field => field != '' && field !== undefined);
});

const resetAddressForm = () => {
    shoppingid.value = '';
    addressValue.value = {};
    
};

const preventDefault = (e: Event) => {
    e.preventDefault();
};

const preventDefaultForScrollKeys = (e: KeyboardEvent) => {
    const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
};

const forbiddenScroll = () => {
    let supportsPassive = false;
    try {
        window.addEventListener(
            'test',
            null,
            Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                },
            })
        );
    } catch (e) { }
    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent =
        'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
};

const enableScroll = () => {
    let supportsPassive = false;
    try {
        window.addEventListener(
            'test',
            null,
            Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                },
            })
        );
    } catch (e) { }
    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent =
        'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
};

const handleOpen = () => {
    forbiddenScroll();
};

const btnCancel = () => {
    enableScroll();
    controlAddressShow.value = false;
    resetAddressForm();
};

const btnConfirm = async () => {
    if (!isValid.value) {
        alert('请填写所有的必须字段');
        return;
    }

    if (addressInfo.value.shoppingid) {
        updateAddress();
    } else {
        addAddress();
    }
    isChecked.value = false;
    addressInfo.value.checked = isChecked.value ? '1' : '0';
    enableScroll();
    // $emit("confirmAddress");
    resetAddressForm();
};

const addAddress = async () => {
    addressInfo.value.checked = isChecked.value ? '1' : '0';
    addressInfo.value.receiverprovince = addressValue.value[0];
    addressInfo.value.receivercity = addressValue.value[1];
    addressInfo.value.receiverdistrict = addressValue.value[2];

    try {
        // await store.dispatch("addUserAddress", addressInfo.value);
        console.log('Add Address:', addressInfo.value);
    } catch (error) {
        console.log('Error:', error);
    }
    getAddress();
};

const updateAddress = async () => {
    await store.commit('setChangeAddress', {});
    let changeAddressInfo = {
        ...addressInfo.value,
        userid: store.state.user.userid,
    };
    try {
        // await store.dispatch("ChangeAddress", { changeAddressInfo });
        console.log('Update Address:', changeAddressInfo);
    } catch (error) {
        console.log('Error:', error);
    }
    getAddress();
};

const getAddress = async () => {
    try {
        // await store.dispatch("readAddress", { userid: store.state.user.userid });
        console.log('Get Address');
    } catch (error) { }
};

const validatePhone = () => {
    const regex = /^1[3-9]\d{9}$/;
    if (!regex.test(addressInfo.value.receiverphone)) {
        phoneValid.value = false;
        phoneErrorMsg.value = '请输入有效的手机号码';
    } else {
        phoneValid.value = true;
        phoneErrorMsg.value = '';
    }
};

const validateReceiverName = () => {
    const regex =
        /^[\u4e00-\u9fa5a-zA-Z\s\.,;:'"!@#$%^&*()-_+={}\[\]<>?~\|]*$/;
    if (
        !regex.test(addressInfo.value.receivername) ||
        addressInfo.value.receivername.length > 50
    ) {
        receiverNameValid.value = false;
        receiverNameErrorMsg.value =
            '请输入有效的收货人名字（50字符以内，只包括中英文和常见标点）';
    } else {
        receiverNameValid.value = true;
        receiverNameErrorMsg.value = '';
    }
};

const validateAddress = () => {
    if (
        addressInfo.value.receiveraddress.length < 5 ||
        addressInfo.value.receiveraddress.length > 200
    ) {
        addressValid.value = false;
        addressErrorMsg.value = '请输入5到200个字符的详细地址';
    } else {
        addressValid.value = true;
        addressErrorMsg.value = '';
    }
};

watch(
    () => store.state.trade.changAddress,
    () => {
        if (store.state.trade.changAddress) {
            const {
                userid,
                shoppingid,
                receivername,
                receiverphone,
                receiverprovince,
                receivercity,
                receiverdistrict,
                receiveraddress,
            } = store.state.trade.changAddress;

            addressInfo.value = {
                userid,
                shoppingid,
                receivername,
                receiverphone,
                receiverprovince,
                receivercity,
                receiverdistrict,
                receiveraddress,
            };

            addressInfo.value.checked = addressInfo.value.isChecked ? '1' : '0';
        }
    },
    { deep: true }
);

watch(
    () => regionId,
    () => {
        if (!regionId) return;
        provinces.value = [];
        reqAddressBaseProvinceByRegionId(regionId);
    }
);

// Dummy function
const reqAddressBaseProvinceByRegionId = (regionId: string) => {
    console.log('Request Address Base Province By Region ID:', regionId);
};
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

.el-form-item__label {
    width: 140px;
}
</style>