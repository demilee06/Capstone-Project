<template>

    <!-- remove me  -->

    <div
      class="row d-flex justify-content-center"

    >
     
      
          <div class="card col-md-3" v-for="product in $store.state.products"
          :key="product">
            <div class="card-header">
                <img :src="product.prodUrl" class="card-img-top" alt="Product Image">
            </div>
            <div class="card-footer">
                <h3>{{ product.prodName }}</h3>
               <p>{{ product.prodDes }}</p>
               <h6>{{ product.amount }}</h6>
            </div>

            <button class="btn"> Buy Now
            </button>
          </div>
        </div>
     



  <!-- <div class="col">

                    <div class="content">
                        <img src="https://demilee06.github.io/Capstone-Images/peach%20rolls.png"
                            alt="peach rolls">
                        <h3>Peach Rolls</h3>
                        <p>They offer a sweet, tangy taste of ripe peaches in a convenient, portable form, making them a healthy and tasty option for on-the-go snacking.</p>
                        <h6> $40.00</h6>
                        
                        <Button class="buy-2">Buy now</button>
                    </div>
        
                </div>
                <div class="col">

                    <div class="content">
                        <img src="https://demilee06.github.io/Capstone-Images/Popcorn-packaging.jpg"
                            alt="popcorn">
                        <h3>Popcorn</h3>
                        <p>The popcorn is popped until light and airy, then drizzled with melted butter and seasoned with a touch of salt. This combination creates a savory, indulgent treat that's perfect for movie nights or casual snacking.
                        </p>
                        <h6> $1000.00</h6>
                       
                        <button class="buy-3">Buy now</button>
                    </div>
                </div>
                <div class="col">

                    <div class="content">
                        <img src="https://demilee06.github.io/Capstone-Images/Milkwood-yoghurt.jpg"
                            alt="yoghurt">
                        <h3>Yoghurt</h3>
                        <p>It has a smooth texture and a mildly sour flavor, with no added sugars or flavors. This versatile staple can be enjoyed on its own, mixed with fruits or honey, or used as a base for sauces and dressings.
                        </p>
                        <h6> $100.00</h6>
                      
                        <Button class="buy-4">Buy now</button>
                    </div>
                </div>
                <div class="col">

                    <div class="content">
                        <img src="https://demilee06.github.io/Capstone-Images/cashew.jpg"
                            alt="cashews">
                        <h3>Cashews</h3>
                        <p>They are often enjoyed as a snack on their own, roasted and salted, or used in cooking and baking for added creaminess and nutty taste.
                        </p>
                        <h6> $100.00</h6>
                      
                        <Button class="buy-4">Buy now</button>
                    </div>
                </div>
                <div class="col">
                    
                    <div class="content">
                        <img src="https://demilee06.github.io/Capstone-Images/dark chocolate.jpg"
                        alt="dark chocolate">
                        <h3>Dark Chocolate</h3>
                        <p> It has a deep, intense cocoa flavor and a smooth texture, often with notes of fruit, spice, or coffee. It's enjoyed on its own or used in baking and desserts for its complex taste and potential health benefits.</p>
                        <h6> $100.00</h6>
                        
                        <Button class="buy-4">Buy now</button>
                        </div>
                    </div>
            </div>
            <div class="row">

                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/apple%20chips.jpg"
                        alt="apple chips">
                    <h3>Apple Chips</h3>
                    <p>They retain the natural sweetness and tartness of fresh apples while offering a crunchy texture. 
                    </p>
                    <h6> $100.00</h6>
                
                    <Button class="buy-4">Buy now</button>
                </div>
            <div class="content">
                <img src="https://demilee06.github.io/Capstone-Images/6009515512316-ultimate-4-seed-mix-500g.jpg"
                    alt="seed mix">
                <h3>Seed Mix</h3>
                <p>This mix is typically enjoyed as a snack on its own, sprinkled over salads, or added to yogurt and smoothies for an extra boost of nutrients and healthy fats.
                </p>
                <h6> $100.00</h6>
              
                <Button class="buy-4">Buy now</button>
            </div>
            <div class="content">
                <img src="https://demilee06.github.io/Capstone-Images/banana-chips-doypack-craft-bag-600nw-1990883921.webp"
                    alt="banana chips">
                <h3>Banana Chips</h3>
                <p>They have a sweet, slightly caramelized flavor and a light, airy texture. These chips make for a convenient, naturally sweet snack or can be used as a topping for cereals and desserts.
                </p>
                <h6> $100.00</h6>
              
                <Button class="buy-4">Buy now</button>
            </div>
            <div class="content">
                <img src="https://demilee06.github.io/Capstone-Images/drink%20flavour%20packets.jpg"
                    alt="liquid IV drink packets">
                <h3>Liquid IV</h3>
                <p> It comes in convenient single-serving packets that dissolve in water, providing a quick and effective way to stay hydrated. With a variety of flavors and added nutrients, it helps support energy levels and overall hydration.</p>
                <h6> $100.00</h6>
              
                <Button class="buy-4">Buy now</button>
            </div>
            </div>
                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/Cheese%20Rice%20Cakes.webp"
                        alt="cheese rice crackers">
                    <h3>Cheese Rice Crackers</h3>
                    <p> These crackers have a light, crunchy texture and a rich, cheesy taste, making them a satisfying, portable treat that pairs well with dips or can be enjoyed on their own.
                    </p>
                    <h6> $100.00</h6>
                  
                    <Button class="buy-4">Buy now</button>
                </div>
                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/Bloom%20superfood%20powder2.jpg"
                        alt="bloom superfood powder">
                    <h3>Bloom SuperFood Powder</h3>
                    <p>It typically contains a blend of organic superfoods, such as greens, fruits, and vegetables, combined into a convenient powder form. When mixed with water, smoothies, or other beverages, it provides a concentrated dose of vitamins, minerals, and antioxidants to support energy, digestion, and overall vitality.
                    </p>
                    <h6> $100.00</h6>
                  
                    <Button class="buy-4">Buy now</button>
                </div>
                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/magnesium-glycinate-60-tabs.jpg"
                        alt="magnesium">
                    <h3>Magnesium</h3>
                    <p> It helps regulate blood pressure, supports a healthy immune system, and aids in the synthesis of proteins and DNA. 
                    </p>
                    <h6> $100.00</h6>
                  
                    <Button class="buy-4">Buy now</button>
                </div>
                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/omega3-1000mg-90s.jpg"
                        alt="omega-3">
                    <h3>Omega-3</h3>
                    <p>Omega-3s are essential fatty acids that are crucial for heart health, brain function, and reducing inflammation</p>
                  
                    <Button class="buy-4">Buy now</button>
                </div>
                <div class="content">
                    <img src="vitamin-b12-60-tabs-500x500.jpg"
                        alt="vitamin B12">
                    <h3>Vitamin B12</h3>
                    <p> It helps maintain healthy nerve cells and supports energy production. Found primarily in animal products such as meat, dairy, and eggs, it is often taken as a supplement, especially by those following vegetarian or vegan diets.
                    </p>
                    <h6> $100.00</h6>
                  
                    <Button class="buy-4">Buy now</button>
                </div>
                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/vitamin-c-1000mg-extra-strength-30-caps.jpg"
                        alt="vitamin c">
                    <h3>Vitamin C</h3>
                    <p>It helps protect cells from damage, aids in wound healing, and enhances iron absorption from plant-based foods. Common sources include citrus fruits, strawberries, bell peppers, and broccoli.
                    </p>
                    <h6> $100.00</h6>
                  
                    <Button class="buy-4">Buy now</button>
                </div>
                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/vitamin-d3-500iu-120-caps.jpg"
                        alt="vitamin d3">
                    <h3>Vitamin D3</h3>
                    <p>Vitamin D3 is crucial for maintaining bone density and overall health.
                    </p>
                    <h6> $100.00</h6>
                  
                    <Button class="buy-4">Buy now</button>
                </div>
                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/vitamin-E-30-caps.jpg"
                        alt="vitamin e">
                    <h3>Vitamin E</h3>
                    <p> It is important for skin health and can be found in foods like nuts, seeds, and green leafy vegetables, as well as in supplements. Vitamin E aids in maintaining healthy skin and eyes, and supports overall cellular health.
                    </p>
                    <h6> $100.00</h6>
                  
                    <Button class="buy-4">Buy now</button>
                </div>
                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/vitamin%20B6.webp"
                        alt="vitamin b6">
                    <h3>Vitamin B6</h3>
                    <p>It helps in converting food into energy and supports immune system health. Found in foods such as poultry, fish, potatoes, and bananas, Vitamin B6 is essential for overall health and well-being.
                    </p>
                    <h6> $100.00</h6>
                  
                    <Button class="buy-4">Buy now</button>
                </div>
                <div class="content">
                    <img src="https://demilee06.github.io/Capstone-Images/calcium%20citrate.jpg"
                        alt="calcium citrate">
                    <h3>Calcium Citrate</h3>
                    <p>It provides a bioavailable source of calcium, which is essential for maintaining strong bones and teeth, as well as supporting muscle function and nerve transmission.
                    </p>
                    <h6> $100.00</h6>
                  
                    <Button class="buy-4">Buy now</button>
                </div> -->

  <!-- </div> -->
</template>

<script>
export default {
  name: "CardComp",
  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  /* padding: 20px; */
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 380px;
  height: 100%;
  color: black;
}
img {
  width: 250px;
  height: 250px;
  border-radius: 5px;
}

.card{
    width: 350px;
    /* height: 600px; */
    /* background-color: green; */
    margin: 1%;
}
.btn {
 --color: #51d680;
 --color2: rgb(10, 25, 30);
 padding: 0.8em 1.75em;
 background-color: transparent;
 border-radius: 6px;
 border: .3px solid var(--color);
 transition: .5s;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 z-index: 1;
 font-weight: 300;
 font-size: 17px;
 font-family: 'Roboto', 'Segoe UI', sans-serif;
 text-transform: uppercase;
 color: var(--color);
}

.btn::after, .btn::before {
 content: '';
 display: block;
 height: 100%;
 width: 100%;
 transform: skew(90deg) translate(-50%, -50%);
 position: absolute;
 inset: 50%;
 left: 25%;
 z-index: -1;
 transition: .5s ease-out;
 background-color: var(--color);
}

.btn::before {
 top: -50%;
 left: -25%;
 transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::before {
 transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::after {
 transform: skew(45deg) translate(-50%, -50%);
}

.btn:hover {
 color: var(--color2);
}

.btn:active {
 filter: brightness(.7);
 transform: scale(.98);
}
</style>
