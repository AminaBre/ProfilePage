<template>
  <div class="row contact-container">
    <div class="col contact-content m-5">
      <div class="row my-4">
        <h1>Get in touch</h1>
      </div>
      <div class="row mb-4">
        <p>
          If you're curious about my resume or have any further questions, <br />
          please don't hesitate to contact me. 😄
        </p>
      </div>
      <div class="row contact-info">
        <div class="col">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="p-0" />
          <p>linkedinlink</p>
        </div>
        <div class="col">
          <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="p-0" />
          <p class="media-body">aminahb@live.no</p>
        </div>
        <div class="col mb-4">
          <font-awesome-icon :icon="['fas', 'phone']" size="2x" class="p-0" />
          <p class="media-body">+4740644715</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
.contact-content {
  background-color: white;
  box-shadow: 0px 0px 15px 5px #4a343454;
  color: rgb(56, 31, 22);
}

.contact-info {
  color: rgb(84, 99, 88);
}
</style>
