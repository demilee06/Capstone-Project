<template>
  <section class="signup">
    <!-- <div>
          <img src="https://demilee06.github.io/Capstone-Images/signup_page.jpg" alt="">
        </div>
        -->
    <div class="container">
      <div class="wrapper my-auto">
        <div class="card-switch">
          <label class="switch">
            <input class="toggle" type="checkbox" />
            <span class="slider"></span>
            <span class="card-side"></span>
            <div class="flip-card__inner">
              <div class="flip-card__front">
                <div class="title">Log in</div>
                <form action="" class="flip-card__form">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    class="flip-card__input"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    class="flip-card__input"
                  />
                  <button class="flip-card__btn">Let`s go!</button>
                </form>
              </div>
              <div class="flip-card__back">
                <div class="title">Sign up</div>
                <form action="" class="flip-card__form">
                  <input
                    type="name"
                    placeholder="Name"
                    class="flip-card__input"
                  />
                  <input
                    type="surname"
                    placeholder="Surname"
                    class="flip-card__input"
                  />
                  <input
                    type="age"
                    placeholder="Age"
                    class="flip-card__input"
                  />
                  <input
                    type="user role"
                    placeholder="user role"
                    class="flip-card__input"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    class="flip-card__input"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    class="flip-card__input"
                  />
                  <input
                    type="user profile"
                    placeholder="user profile"
                    class="flip-card__input"
                  />
                  <button class="flip-card__btn">Confirm!</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </section>

  <!-- <div class="container">
    <h1>Register Here</h1>
    <div>
      <label>
        Enter your first name: <input type="text" v-model="firstName"
      /></label>
      <br /><br />
      <label>
        Enter your last name: <input type="text" v-model="lastName"
      /></label>
      <br /><br />
      <label>Enter your age: <input type="text" v-model="userAge" /></label>
      <br /><br />
      <label>Enter your gender: <input type="text" v-model="Gender" /></label>
      <br /><br />
      <label
        >Enter your user role: <input type="text" v-model="userRole"
      /></label>
      <br /><br />
      <label>
        Enter your email address: <input type="text" v-model="emailAdd"
      /></label>
      <br /><br />
      <label>
        Enter your user password: <input type="text" v-model="userPass"
      /></label>
      <br /><br />
      <label>
        Enter your user profile name: <input type="text" v-model="userProfile"
      /></label>
      <br /><br />
      <button>Submit</button>
    </div>
  </div> -->
</template>
<script>
export default {};
</script>
<style scoped>
.signup {
  margin-top: 0rem;
  background-image: url(https://demilee06.github.io/Capstone-Images/signup_page.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
/* img{
    width:100%;
    height:100
} */
.wrapper {
  --input-focus: #2d8cf0;
  --font-color: #fefefe;
  --font-color-sub: #7e7e7e;
  --bg-color: #b4f5b2;
  --bg-color-alt: #7e7e7e;
  --main-color: #fefefe;
  display: flex;
  /* height: 98vh; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50vh;
}
/* switch card */
.switch {
  transform: translateY(-200px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 50px;
  height: 20px;
}

.card-side::before {
  position: absolute;
  content: "Log in";
  left: -70px;
  top: 0;
  width: 100px;
  text-decoration: underline;
  color: var(--font-color);
  font-weight: 600;
}

.card-side::after {
  position: absolute;
  content: "Sign up";
  left: 70px;
  top: 0;
  width: 100px;
  text-decoration: none;
  color: var(--font-color);
  font-weight: 600;
}

.toggle {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  box-sizing: border-box;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-color);
  transition: 0.3s;
}

.slider:before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  border: 2px solid var(--main-color);
  border-radius: 5px;
  left: -2px;
  bottom: 2px;
  background-color: var(--bg-color);
  box-shadow: 0 3px 0 var(--main-color);
  transition: 0.3s;
}

.toggle:checked + .slider {
  background-color: var(--input-focus);
}

.toggle:checked + .slider:before {
  transform: translateX(30px);
}

.toggle:checked ~ .card-side:before {
  text-decoration: none;
}

.toggle:checked ~ .card-side:after {
  text-decoration: underline;
}

/* card */

.flip-card__inner {
  width: 300px;
  height: 350px;
  position: relative;
  background-color: transparent;
  perspective: 1000px;
  /* width: 100%;
    height: 100%; */
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.toggle:checked ~ .flip-card__inner {
  transform: rotateY(180deg);
}

.toggle:checked ~ .flip-card__front {
  box-shadow: none;
}

.flip-card__front,
.flip-card__back {
  padding: 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: var(--bg-color);
  gap: 20px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
}

.flip-card__back {
  width: 100%;
  transform: rotateY(180deg);
}

.flip-card__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.title {
  margin: 20px 0 20px 0;
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  color: var(--main-color);
}

.flip-card__input {
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
}

.flip-card__input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

.flip-card__input:focus {
  border: 2px solid var(--input-focus);
}

.flip-card__btn:active,
.button-confirm:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}

.flip-card__btn {
  margin: 20px 0 20px 0;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
}
</style>
