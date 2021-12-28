<template>
  <div class="row mt-4">
    <div class="col">
      <div class="row">
        <h1>About me</h1>
      </div>
      <div class="row my-2">
        <h5>
          I wish to create innovative user experiences, that excels the customers expectations.
        </h5>
      </div>

      <hr />
      <div class="row facts">
        <div class="col"><h5>Oslo</h5></div>
        <div class="col"><h5>Front-end Developer</h5></div>
        <div class="col"><h5>25 yrs</h5></div>
      </div>
      <div class="row mt-2 px-4">
        <p>
          My name is Amina, I'm currently writing my bachelor thesis for Frontend and Mobile
          Development at Høyskolen Kristiania. I have always had a passion for technology and
          innovation, but I also have an eye for customer experience optimization and design. I love
          to challenge myself, and front-end development allows me to combine all of my skills while
          still being able to learn new things every single day. For the past two years I have
          combined being a full-time student and working three part-time jobs. I'm a very hard
          worker that always strive to be the best at what I do.
        </p>
      </div>
      <hr />
      <div class="row mt-4">
        <div class="col">
          <font-awesome-icon icon="lightbulb" size="2x" class="p-0 tan" />
          <h5>Creative</h5>
        </div>
        <div class="col">
          <font-awesome-icon icon="laptop-code" size="2x" class="p-0 tan" />
          <h5>Fast learner</h5>
        </div>
        <div class="col">
          <font-awesome-icon icon="users" size="2x" class="p-0 tan" />
          <h5>Team player</h5>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped>
.facts {
  color: rgb(62, 26, 13);
}

.tan {
  color: rgb(62, 26, 13);
}
</style>
