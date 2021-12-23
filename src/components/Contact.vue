<template>
  <div class="row mt-4">
    <div class="col contact-content py-4">
      <div class="row">
        <h1>Contact me</h1>
      </div>
      <div class="row contact-info">
        <div class="col-4 icons">
          <div class="row"><font-awesome-icon icon="feather-alt" size="2x" class="p-0 tan" /></div>
          <div class="row"><font-awesome-icon icon="feather-alt" size="2x" class="p-0 tan" /></div>
          <div class="row"><font-awesome-icon icon="feather-alt" size="2x" class="p-0 tan" /></div>
          <div class="row"><font-awesome-icon icon="feather-alt" size="2x" class="p-0 tan" /></div>
        </div>
        <div class="col-8 links">
          <div class="row"><p>aminahb@live.no</p></div>
          <div class="row"><p>+4740644715</p></div>
          <div class="row"><p>githublink</p></div>
          <div class="row"><p>linkedinlink</p></div>
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
  position: absolute;
  top: 20%;
  background-color: white;
  box-shadow: 0px 0px 15px 5px #4a343454;
}

.contact-info {
  color: rgb(84, 99, 88);
}

.links {
  color: rgb(96, 55, 40);
  text-align: left;
}
</style>
