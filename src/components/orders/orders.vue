<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useShopStore } from '@/store/products'
import { useCarsStore } from '@/store/cars'
import { type Product } from '@/api/shop'

defineProps<{ title: string }>()

const shopStore = useShopStore()
const carsStore = useCarsStore()

const router = useRouter()

const buy = () => {
    router.push('/trade')
}

interface ALLPRO {
    id: number,
    goodsPic: string,
    goodsName: string,
    price: number,
    inventory: number
}
const allProducts = ref<ALLPRO[]>([])
allProducts.value = [{
    id: 1,
    goodsPic: "https://asset.swarovski.com.cn/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_675/5678045_png/%E3%80%90%E6%AD%A4%E6%B2%99%E5%90%8C%E6%AC%BE%E3%80%91swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.png",
    goodsName: "Airpods",
    price: 998,
    inventory: 3
}, {
    id: 2,
    goodsPic: "https://asset.swarovski.com.cn/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_675/5678045_png/%E3%80%90%E6%AD%A4%E6%B2%99%E5%90%8C%E6%AC%BE%E3%80%91swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.png",
    goodsName: "MacBook2022",
    price: 12998,
    inventory: 5
}, {
    id: 3,
    goodsPic: "https://asset.swarovski.com.cn/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_675/5678045_png/%E3%80%90%E6%AD%A4%E6%B2%99%E5%90%8C%E6%AC%BE%E3%80%91swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.png",
    goodsName: "iwatch 8",
    price: 3498,
    inventory: 2
}, {
    id: 4,
    goodsPic: "https://asset.swarovski.com.cn/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_675/5678045_png/%E3%80%90%E6%AD%A4%E6%B2%99%E5%90%8C%E6%AC%BE%E3%80%91swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.png",
    goodsName: "ipad 2022",
    price: 4688,
    inventory: 6
}]

</script>

<template>
    <div class="outer">

        <h2 style="margin-bottom: 20px;">{{ title }}</h2>
        <el-table style="width: 100%; text-align: center" table-layout="auto" :data="allProducts">
            <el-table-column prop="goodsPic" align="center" label="GoodsPic" width="200">
                <template v-slot="{ row }">
                    <img :src="row.goodsPic" style="width: 100px; height: 100px;" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="goodsName" align="center" label="GoodsName" width="auto" />
            <el-table-column prop="price" align="center" label="Price" width="150" />
            <el-table-column prop="shopCount" align="center" label="Quantity" width="150" />
            <el-table-column fixed="right" align="center" label="Status" width="160">
                <template #default="scope">
                    <el-button type="success" text bg @click.prevent="carsStore.addProduct(scope.row)">
                        已支付
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column fixed="right" align="center" label="Details" width="220">
                <template #default="scope">
                    <el-button type="info" text bg @click.prevent="carsStore.addProduct(scope.row)">
                        <router-link to="/tradeDetail" style="cursor: pointer;">查看订单详情</router-link>
                    </el-button>

                </template>
            </el-table-column>
            <el-table-column fixed="right" align="center" label="Action" width="160">
                <template #default="scope">
                    <el-button type="info" text bg @click.prevent="carsStore.addProduct(scope.row)">
                        <router-link to="/pay" style="cursor: pointer;">去支付</router-link>
                    </el-button>

                </template>
            </el-table-column>
        </el-table>

        <div class="total">
            <div class="totalInner">
                <span style="
                line-height: 35px;
                font-weight: 600;
                color: #959595;
                margin-right: 5px;
            ">Total:</span>
                <el-input disabled style="font-size: 18px; font-weight: 600" :value="carsStore.totalPrice"></el-input>
                <el-button style="margin-left: 10px" @click="buy" round>Buy</el-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.outer {
    width: 100%;
}

::v-deep .el-table__inner-wrapper::before {
    width: auto;
}

::v-deep .el-table__empty-block {
    width: auto !important;
}

.total {
    display: flex;
    margin: 100px 0;
    justify-content: flex-end;
}

.totalInner {
    display: inline-flex;
}
</style>
