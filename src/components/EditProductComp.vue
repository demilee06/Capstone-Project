<template >
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#adminEditProduct'+product.prodID">
            Edit
        </button>
        <!-- Edit Product Modal -->
        <div class="modal fade" :id="'adminEditProduct'+product.prodID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="editProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editProductLabel">Edit Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter product ID"
                                    v-model="updateProduct.prodID" required readonly>
                                <input class="form-control m-2" type="text" placeholder="Enter product name"
                                    v-model="updateProduct.prodName" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product image URL"
                                    v-model="updateProduct.prodUrl" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product category"
                                    v-model="updateProduct.Catergory" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Description"
                                    v-model="updateProduct.prodDes" required>
                                <textarea class="form-control m-2" placeholder="Enter product amount" v-model="updateProduct.amount"
                                    required></textarea>
                                <input class="form-control m-2" type="number" placeholder="Enter product quantity"
                                    v-model="updateProduct.quantity" required>
                            </div>
                            <div class="modal-footer">
                                <button type="reset" class="btn btn-outline-success"
                                    data-bs-dismiss="modal">Clear</button>
                                <button type="button" class="btn btn-outline-success"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-outline-success" @click="updateProductFx()">Save
                                    Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['product'],
    data(){
        return{
            updateProduct: {
                prodID: this.product.prodID,
                prodName: this.product.prodName,
                prodUrl: this.product.prodUrl,
                Catergory: this.product.Catergory,
                prodDes: this.product.prodDes,
                amount: this.product.amount,
                quantity: this.product.quantity
            },
        }
    },
    methods:{
        updateProductFx() {
            this.$store.dispatch('updateProduct', this.updateProduct);
        },
    }
}
</script>
<style >
    
</style>