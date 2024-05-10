<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useShopStore } from '@/store/products'
import { useCarsStore } from '@/store/cars'
import { type Product } from '@/api/shop'

defineProps<{ titleA: string; titleB: string }>()

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
    shopCount: number,
    price: number,
    inventory: number
}
const allProducts = ref<ALLPRO[]>([])
allProducts.value = [{
    id: 1,
    goodsPic: "../../../public/proimg/pro1.jpg",
    goodsName: "清安系列珠宝",
    price: 998,
    shopCount: 0,
    inventory: 3
}, {
    id: 2,
    goodsPic: "../../../public/proimg/pro2.jpg",
    goodsName: "清安系列珠宝",
    price: 12998,
    shopCount: 0,
    inventory: 5
}, {
    id: 3,
    goodsPic: "../../../public/proimg/pro3.jpg",
    goodsName: "清安系列珠宝",
    price: 3498,
    shopCount: 0,
    inventory: 2
}, {
    id: 4,
    goodsPic: "../../../public/proimg/pro4.jpg",
    goodsName: "清安系列珠宝",
    price: 4688,
    shopCount: 0,
    inventory: 6
}]

</script>

<template>
    <div class="outer">

        <h2 style="margin-bottom: 20px;">{{ titleB }}</h2>
        <el-table style="width: 100%; text-align: center" table-layout="auto" :data="allProducts">
            <el-table-column prop="goodsPic" align="center" label="GoodsPic" width="200">
                <template v-slot="{ row }">
                    <img :src="row.goodsPic" style="width: 100px; height: 100px;" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="goodsName" align="center" label="GoodsName" width="auto" />
            <el-table-column prop="price" align="center" label="Price" width="150" />
            <el-table-column prop="shopCount" align="center" label="Quantity" width="150" />
            <el-table-column fixed="right" align="center" label="Action" width="120">
                <template #default="scope">
                    <el-button type="info" text bg
                        @click.prevent="carsStore.addProduct(scope.row); scope.row.shopCount++">
                        +
                    </el-button>
                    <el-button type="info" :disabled="!scope.row.shopCount" text bg
                        @click.prevent="carsStore.reduceProduct(scope.row); scope.row.shopCount--">
                        -
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
