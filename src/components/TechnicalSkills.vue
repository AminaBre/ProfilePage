<template>
  <div class="row mt-4">
    <div class="col">
      <div class="row">
        <h1>Skills</h1>
      </div>
      <hr />
      <div class="row mt-4">
        <div class="col">
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>Vue</li>
            <li>React Native</li>
            <li>HTML/CSS</li>
            <li>Kotlin</li>
            <li>Swift</li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li>Bootstrap</li>
            <li>MySQL</li>
            <li>Moqups</li>
            <li>Adobe XD</li>
            <li>Git</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnicalSkills',
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: left;
  font-size: 1.7rem;
  color: rgb(62, 26, 13);
}
li {
  border-bottom: 2px solid rgb(241, 231, 231);
  margin: 5px;
  transition: 0.5s;
  cursor: pointer;
}

li:hover {
  transform: scale(1.05);
}
</style>
