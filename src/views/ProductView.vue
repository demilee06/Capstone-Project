<template>
<section>
    <img class="img2" src="https://demilee06.github.io/Capstone-Images/products%20page%20img1.webp" alt="">
</section>
<br><br>
<section>
    <div class="input-container">
        <input type="text" name="text" class="input" placeholder="search...">
        <span class="icon"> 
            <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </span>
    </div>
    <card-comp></card-comp>
</section>
<div>
    <spinner-comp></spinner-comp>
</div>

</template>
<script>
  import CardComp from '../components/CardComp.vue'
  import SpinnerComp from '@/components/SpinnerComp.vue';
  
  export default {
  components: {
    CardComp,
    SpinnerComp,

  },
  data() {
    return {
      
    }
  },
  methods : {
      getProducts() {
          this.$store.dispatch('getProducts')
        }
    },
    mounted() {
        // this.getProducts()
        this.$store.dispatch('getProducts')
    }
  }
  
  </script>
  
  <style scoped>
 @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif, Arial, Helvetica;

}

body {
    height: 100vh;
    background-color: #f2f2f2;
}

a {
    text-decoration: none;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
}

.content {
    width: 20%;
    min-width: 250px;
    margin: 15px;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    background-color: #f2f2f2;
    padding-top: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.20), 0 10px 10px rgba(0, 0, 0, 0.20);
}

.content:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.24);
    transform: translateY(-3px);
}

img {
    width: 200px;
    height: 200px;
    text-align: center;
    margin: 0 auto;
    display: block;
    border-radius: 16px;
}

.img2{
    width: 100%;
    height: 50%
}
h3{
    text-align: center;
    font-size: 25px;
    margin: 0;
    padding: 12px 0;
}

p {
    text-align: center;
    color: #b2bec3;
    padding: 0 8px;
}

h6 {
    font-size: 18px;
    text-align: center;
    color: #222f25;
    margin: 5px 0;
}

ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
}

li {
    padding-left: 4px;
}

.fas {
    font-size: 24px;
}

.checked {
    color: gold;
}

button {
    text-align: center;
    width: 100%;
    border: none;
    background-color:#99B1E7;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    font-size: 24px;
    margin-top: 10px;
    outline: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
.input-container {
  width: 220px;
  position: relative;
}

.icon {
  position: absolute;
  right: 10px;
  top: calc(50% + 5px);
  transform: translateY(calc(-50% - 5px));
}

.input {
  width: 100%;
  height: 40px;
  padding: 10px;
  transition: .2s linear;
  border: 2.5px solid black;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.input:focus {
  outline: none;
  border: 0.5px solid black;
  box-shadow: -5px -5px 0px black;
}

.input-container:hover > .icon {
  animation: anim 1s linear infinite;
}

@keyframes anim {
  0%,
  100% {
    transform: translateY(calc(-50% - 5px)) scale(1);
  }

  50% {
    transform: translateY(calc(-50% - 5px)) scale(1.1);
  }
}
  </style>