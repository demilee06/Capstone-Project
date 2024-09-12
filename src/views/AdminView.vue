<template>
    <section class="inner-admin">
        <button  type="button" class="btn" data-bs-toggle="modal"
            data-bs-target="#adminAddProduct">Add New Product</button>
            <div class="admin-page-table">
                <table class="table table-responsive table-bordered">
                    <thead class="table-group-divider">
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="table-products">
                        <tr v-for="product in $store.state.products" :key="product.prodID">
                        <td>{{ product.prodID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td><img :src="product.prodUrl" alt="Product Image" class="img-fluid" width="auto" height="auto"/></td>
                        <td>{{ product.Catergory }}</td>
                        <td>{{ product.prodDes }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>
                            <edit-product-comp :product="product"/>
                            <button @click="deleteProduct()" class="btn btn-outline-danger">Delete Product</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button  type="button" class="btn" data-bs-toggle="modal"
            data-bs-target="#adminAddUser">Add New User</button>
            <div class="user-page-table">
                <table class="table table-responsive table-bordered">
                    <thead class="table-group-divider">
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="table-products">
                        <tr v-for="user in $store.state.users" :key="user.usersID">
                        <td>{{ user.usersID }}</td>
                        <td>{{ user.firstName }}</td> 
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.Gender }}</td> 
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.emailAdd }}</td> 
                            <edit-user-comp :user="user"/>
                            <button @click="deleteUser()" class="btn btn-outline-danger">Delete User</button>
                        </tr>
                    </tbody>
                </table>
            </div>

        <!-- Add New Product Modal -->
        <div class="modal fade" id="adminAddProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="addProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addProductLabel">Add a New Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter product name" v-model="newProduct.prodName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter product quatity" v-model="newProduct.quantity" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product amount" v-model="newProduct.amount" required>
                                 <input class="form-control m-2" type="text" placeholder="Enter product category" v-model="newProduct.Catergory" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product image URL" v-model="newProduct.prodUrl">
                                <input class="form-control m-2" type="text" placeholder="Enter product description" v-model="newProduct.prodDes" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="addProduct()">Save Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add New User Modal -->
        <div class="modal fade" id="adminAddUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="addUserLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addUserLabel">Add a New User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter Name" v-model="newUser.firstName" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Surname" v-model="newUser.lastName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter Age" v-model="newUser.userAge" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Gender" v-model="newUser.Gender" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Role" v-model="newUser.userRole" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Email" v-model="newUser.emailAdd" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="insertUser()">Add User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        
    </section>
</template>

<script>
import EditProductComp from '@/components/EditProductComp.vue';
import EditUserComp from '@/components/EditUserComp.vue';

export default {
    data() {
        return {
            newProduct: {
                prodName: '',
                quantity: '',
                amount: '',
                Catergory: '',
                prodUrl: '',
                prodDes: '',
            },
            
            newUser: {
                firstName: '',
                lastName: '',
                userAge: '',
                Gender: '',
                userRole: '',
                emailAdd: ''
            }
        }; 
    },
    components:{
        EditProductComp,
        EditUserComp
    },
    methods: {
        getProducts() {
            this.$store.dispatch('getProducts');
        },
        
        getUsers() {
            this.$store.dispatch('getUsers');
        },
        addProduct() {
            this.$store.dispatch('addProduct', this.newProduct);
            
        },
        insertUser() {
            this.$store.dispatch('insertUser', this.newUser);
        },
        deleteUser() {
            this.$store.dispatch('deleteUser', this.usersID)
        },
        deleteProduct() {
            this.$store.dispatch('deleteProduct', this.prodID)
        }
    },
    computed: {
        product(){
            return this.$store.state.product
        },
        user(){
            return this.$store.state.user
        }
    },
    mounted() {
        this.getProducts(),
        this.getUsers()
    }
}
</script>

<style scoped>
.inner-admin {
    margin-top: 0rem;
    background-image: url(https://demilee06.github.io/Capstone-Images/admin2.jpg);
    width:100%;
    height:100%
}

.table-responsive {
    width: 100%;
    background-color: transparent;
}

.table {
    width: 80rem;
    /* background-color: #96005A; */
    margin-top: 1rem;
}

.table th,
.table td {
    text-align: left;
    justify-content: center;
    align-content: center;
    background-color: transparent;
    border: none;
}

.admin-page-table, .user-page-table {
    width: auto;
    display: grid;
    justify-content: center;
}

.quantity-buttons {
    display: flex;
    align-items: center;
}

.total-amount {
    text-align: end;
}

.btn {
    color: white;
    background-color: #51d680;
    margin-top: 40px;
    border: none;
    /* margin-left: 200px; */
}

button.btn:hover {
    background-color: #51d680;
    color: white;
    border: none;
}

.products-sec {
    display: grid;
    justify-content: space-around;
}

.img-fluid {
    max-width: 100px;
    height: auto;
}

@media screen and (max-width: 300px) {
    .inner-admin {
        margin-top: 3.5rem;
    /* background-image: url(https://github.com/demilee06/Node-Images/blob/main/5616868-hd_2048_1080_25fps-ezgif.com-optimize.gif?raw=true); */
    background-size: contain
}
.admin-page-table, .user-page-table {
    width: 100%;
    overflow-x: auto;
  }
  .table {
    width: 100%;
    display: block;

  }
  .table th, .table td {
    padding: 5px;
    font-size: 12px;
    display: block;
    width: 100%;
  }
  .img-fluid {
    max-width: 50px;
    height: auto;
  }

}
</style>