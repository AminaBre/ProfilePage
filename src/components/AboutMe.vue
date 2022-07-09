<template>
  <div class="row px-5">
    <div class="col px-5">
      <div class="row py-5">
        <div class="col">
          <div class="typewriter"><h1>Hi, I'm Amina 👋🏽</h1></div>
        </div>
      </div>
      <div class="row">
        <div class="col mb-5">
          I wish to create innovative user experiences, that exceed the customers expectations. I'm
          currently writing my bachelor thesis for Frontend and Mobile Development at Høyskolen
          Kristiania. I have always had a passion for technology and innovation, as well as
          optimizing customer experiences. I love to challenge myself, and front-end development
          allows me to combine all of my skills while still being able to learn new things every
          day. I'm currently balancing being a full-time student, part-time front-end developer and
          a lecturer in programming.
        </div>
      </div>
      <hr class="y-3" />
      <div class="row py-4 facts">
        <div class="col">
          <font-awesome-icon icon="lightbulb" size="2x" class="p-0 icon" />
          <h5>Creative</h5>
        </div>
        <div class="col">
          <font-awesome-icon icon="laptop-code" size="2x" class="p-0 icon" />
          <h5>Fast learner</h5>
        </div>
        <div class="col">
          <font-awesome-icon icon="users" size="2x" class="p-0 icon" />
          <h5>Team player</h5>
        </div>
      </div>
      <hr />
    </div>
    <div class="col"><img src="../../public/inspo3.jpeg" /></div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.facts {
  text-align: center;
}

.icon {
  transition: transform 1.5s ease-in-out;
}

.icon:hover {
  transform: rotate(360deg);
}
</style>
