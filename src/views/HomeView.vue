<template>
  <section class="home">
    <button class="button" data-text="Awesome">
      <span class="actual-text">&nbsp;THE GREEN GODDESS&nbsp;</span>
      <span aria-hidden="true" class="front-text">&nbsp;THE GREEN GODDESS&nbsp;</span>
    </button>
  </section>
</template>


<script>

export default {
  name: 'HomeView',
 
}
</script>
<style scoped>
 .home {
  background-image: url(https://demilee06.github.io/Capstone-Images/home%20page%202.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
 }
 .button {
  position: relative;
  border: none;
  background: transparent;
  --stroke-color: #ffffff7c;
  --ani-color: rgba(95, 3, 244, 0);
  --color-gar: linear-gradient(90deg,#51d680,#b4f5b2,#00a84f,#a7b889);
  letter-spacing: 3px;
  font-size: 100px;
  font-family: "Gruppo";
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--stroke-color);
  cursor: pointer;
  padding: 40vh;
}

.front-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  background: var(--color-gar);
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 200%;
  overflow: hidden;
  transition: all 1s;
  animation: 8s ani infinite;
  border-bottom: 2px solid transparent;
  padding: 40vh;
}

.button:hover .front-text {
  width: 100%;
  border-bottom: 2px solid #03a9f4;
  -webkit-text-stroke: 1px var(--ani-color);
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  50% {
    background-position: 400%;
  }

  100% {
    background-position: 0%;
  }
}

</style>