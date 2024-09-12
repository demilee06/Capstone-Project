<template>
  <section class="about">
    <div class="container">
    <div class="box">
      <span class="title">THE GREEN GODDESS</span>
      <br>
      <div>
        <p>The Green Goddess began with a simple yet powerful idea: to provide nutritious and delicious meal options that cater to the needs of busy individuals seeking a healthier lifestyle. The inspiration came from my personal struggle to find convenient yet wholesome food in a fast-paced world. After countless hours spent researching, experimenting with recipes, and understanding dietary needs, I decided to turn my passion for nutrition into a business. The journey began in my home kitchen, where I meticulously crafted recipes that balanced flavor with nutritional value, aiming to offer meals that were both satisfying and health-conscious.</p>
        <p>The core goal of The Green Goddess business is to make nutritious eating accessible and enjoyable for everyone, regardless of their lifestyle or dietary restrictions. We strive to bridge the gap between convenience and health by providing a range of meal options that cater to various dietary needs, including gluten-free, vegan, and low-carb diets. Each meal is carefully prepared with high-quality, fresh ingredients to ensure that our customers receive the best in both taste and nutrition. Our mission is to empower individuals to make healthier food choices without sacrificing the convenience that modern life demands.
        </p>
        <br>
        <p>Beyond just offering meals, our business is committed to promoting overall wellness and education. We actively engage with our community through workshops and nutritional advice, helping people understand the importance of balanced eating and how it can be seamlessly integrated into their daily routines. By fostering a culture of health and well-being, we aim to inspire positive lifestyle changes and contribute to a healthier society. Our ultimate goal is to be a trusted partner in our customers' journey towards a more nutritious and fulfilling life.</p>

      </div>
    </div>
  </div>

  </section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.about{
  background-image: url(https://demilee06.github.io/Capstone-Images/aboutpage.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  color: white;
  position: relative;
  font-family: sans-serif;
  padding-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container::before,
.container::after {
  content: "";
  background-color: #fab5704c;
  position: absolute;
}

.container::before {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  top: 30%;
  right: 7%;
}

.container::after {
  content: "";
  position: absolute;
  height: 3rem;
  top: 8%;
  right: 5%;
  border: 1px solid;
}

.container .box {
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;
  
}

.container .box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container .box .title {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.container .box div strong {
  display: block;
  margin-bottom: 0.5rem;
}

.container .box div p {
  margin: 0;
  font-size: 0.9em;
  font-weight: 300;
  letter-spacing: 0.1em;
}

.container .box div span {
  font-size: 0.7rem;
  font-weight: 300;
}

.container .box div span:nth-child(3) {
  font-weight: 500;
  margin-right: 0.2rem;
}

.container .box:hover {
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}
span{
 font-family:sans-serif;
 font-style: italic;
}

</style>
