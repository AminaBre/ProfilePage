<template>
  <div class="row mt-4">
    <div class="col">
      <p>Amina Brenneng</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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
