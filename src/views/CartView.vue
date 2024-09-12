<template>
    <section class="item">
    <div class="container-fluid ">
        <div v-if="product()">
            <h2>{{ $store.state.product.prodName }}</h2>
              <div class="product-card">
                <div class="product-image">
                  <img :src="$store.state.product.prodUrl" :alt="$store.state.product.prodName" class="product-img">
                </div>
                <div class="product-detail">
                      <h1 class="product-name">{{$store.state.product.prodName}}</h1>
                      <h5 class="product-desc">{{$store.state.product.prodDes}}</h5>
                      <h4 class="product-cate">Category: {{$store.state.product.Catergory}}</h4>
                      <br>
                      <br>
                    <div class="pp">
                      <div class="price">
                      <p class="card-text">Price: R{{$store.state.product.amount}}</p>
                      </div>
                      <div class="purchase">
                      <button @click="purchaseAlert(product.prodName)" class="btn">Purchase</button>
                      </div>
                    </div>
                </div>
              </div>
              <button @click="$router.push(`/product/`)">Continue Shopping</button>
          </div>
        <div v-else>
            <SpinnerComp/>
        </div>
    </div>
  
    </section>
  </template>
  <script >
  import SpinnerComp from '@/components/SpinnerComp.vue';
  export default{
    methods: {
        getProduct(){
            this.$store.dispatch('getProduct',this.$route.params.id);
            // console.log(this.$store.state.product.prodUrl);
        },
        product() {
            return this.$store.state.product;
        },
        purchaseAlert(prodName) {
            alert(`You have purchased ${prodName}`);
        },
    },
    mounted() {
        this.getProduct();
    },
    components:{
        SpinnerComp
    }
  }
  </script>
  <style scoped>
  .item{
    background-image: url(https://demilee06.github.io/Capstone-Images/green%20pic%201.jpg);
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .product-card{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 6rem;
  }
  .product-detail{
    width: 50rem;
    padding: 1rem;
    height: auto;
  }
  .product-name{
    text-align: left;
  }
  .product-desc{
    text-align: left;
    margin-top:2rem;
    margin-bottom:2rem
  }
  .product-cate{
    margin-top: 2rem;
    margin-bottom:2rem
  }
  .pp{
    display: grid;
    grid-template-columns: repeat(2, 1fr)
  }
  .price{
    text-align: end;
  }
  .product-img{
    width:30rem;
    height:auto
  }
  
  @media screen and (max-width: 300px) {
    .item{
      margin-top: 3.5rem;
  }
  .product-card {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem;
    }
    .product-detail {
      width: 100%;
      padding: 0.5rem;
    }
    .product-name {
      font-size: 1.2rem;
    }
    .product-desc {
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .product-cate {
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .pp {
      grid-template-columns: repeat(1, 1fr);
    }
    .price {
      text-align: left;
    }
    .product-img {
      width: 100%;
      height: auto;
      margin: 0 auto;
    }
    .btn {
      width: 100%;
      margin-top: 1rem;
    }
  }
  </style>