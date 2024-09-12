<template>
  <!-- this is my contact page -->
  <section class="contactPage">
    <div class="contact">
      <div class="container-fluid">
        <div class="container" data-aos="fade-up">
          <div class="row mt-5">
            <div class="col-lg-4 text-center mt-5">
              <div class="info" data-aos="fade-up">
                <div class="address">
                  <i class="las la-map-marker"></i>
                  <h4>Location:</h4>
                  <p><i>Cape Town, Claremont</i></p>
                </div>
                <div class="email">
                  <i class="lar la-envelope"></i>
                  <h4>Email:</h4>
                  <a href="#" class="text-decoration-none"
                    ><p class="text-blue myemail">
                      <i>TheGreenGoddess@gmail.com</i>
                    </p></a
                  >
                </div>
                <div class="phone">
                  <i class="las la-phone"></i>
                  <h4>Whatsapp No. :</h4>
                  <p><i>083 659 3215</i></p>
                </div>
              </div>
            </div>
            <div class="col-lg-8 mt-5 mt-lg-0 mt-md-0 mt-sm-0">
              <form
                action="https://formspree.io/f/xnqewyrd"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row mt-5">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Surname"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="text-center mt-4">
                  <button type="submit" class="submit"><i>SUBMIT</i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
  .contactPage {                      
    background-image: url(https://demilee06.github.io/Capstone-Images/contact2.jpg);
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .container-fluid{
    padding-top: 20vh;
  }
  .submit{
    border-radius: 5px;
    background-color: #51d680;
  }
  
</style>
