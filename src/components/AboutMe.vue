<template>
  <div class="row px-3">
    <div class="col px-5">
      <div class="row py-5">
        <div class="col">
          <div class="typewriter">
            <h1>Hi, I'm <b>Amina</b> 👋🏽</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col mb-5">
          <h4>
            I'm a 26 year old developer and programming-lecturer based in Oslo. I have always had a
            passion for technology and innovation, as well as optimizing customer experiences. As a
            developer I wish to create innovative user experiences, that exceed the customers
            expectations. I love to challenge myself, and software development allows me to combine
            all of my skills while still being able to learn new things every single day. Being a
            lecturer I get to teach the fun of programming to hundreds of students.
          </h4>
        </div>
      </div>
    </div>
    <div class="col image-container"><img src="../../public/light.png" /></div>
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
  color: rgb(59, 82, 57);
}

.icon {
  transition: transform 1.5s ease-in-out;
}

.icon:hover {
  transform: rotate(360deg);
}

.image-container {
  display: flex;
  align-items: center;
}

.typewriter h1 {
  font-size: 5em;
  overflow: hidden;
  border-right: 0.1em solid rgb(0, 0, 0);
  white-space: wrap;
  margin: 0 auto;
  letter-spacing: 0.18em;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgb(82, 82, 82);
  }
}
</style>
