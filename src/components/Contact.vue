<template>
  <div class="row contact-container">
    <div class="col contact-content m-5">
      <div class="row my-4">
        <h1>Get in touch</h1>
      </div>
      <div class="row my-4">
        <a :href="`${publicPath}CV-AminaBrenneng.pdf`" download="download" class="p-0">
          <button class="btn py-3 btn-block">Download CV</button>
        </a>
      </div>
      <div class="row mb-4">
        <p>
          If you're curious about my resume or have any further questions, <br />
          please don't hesitate to contact me. 😄
        </p>
      </div>
      <div class="row contact-info mb-4">
        <div class="col">
          <a href="https://www.linkedin.com/in/amina-brenneng-699190b0" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="p-0" />
            <br />
            Linkedin
          </a>
        </div>
        <div class="col">
          <a href="mailto:aminabrenneng@gmail.com">
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              size="2x"
              class="p-0 icon"
            /><br />AminaBrenneng@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return { publicPath: process.env.BASE_URL };
  },
};
</script>

<style scoped>
.contact-content {
  background-color: white;
  box-shadow: 0px 0px 15px 5px #4a343454;
  color: rgb(56, 31, 22);
}

a {
  color: rgb(84, 99, 88);
}

a:hover {
  color: rgb(54, 66, 54);
}

button {
  background-color: rgb(124, 155, 128);
  width: 100%;
  border-radius: 0px;
}
button:hover {
  background-color: rgb(65, 92, 65);
  color: white;
}
</style>
