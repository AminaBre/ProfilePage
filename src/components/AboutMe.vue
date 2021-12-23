<template>
  <div class="row mt-5">
    <div class="col">
      <div class="row">
        <h1>Amina Brenneng</h1>
      </div>
      <hr />
      <div class="row facts">
        <div class="col"><p>Oslo</p></div>
        <div class="col"><p>Front-end Developer</p></div>
        <div class="col"><p>25 yrs</p></div>
      </div>
      <div class="row mt-2 px-4">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <hr />
      <div class="row mt-4">
        <div class="col">
          <font-awesome-icon icon="feather-alt" size="2x" class="p-0 tan" />
          <p>Creative</p>
        </div>
        <div class="col">
          <font-awesome-icon icon="book-reader" size="2x" class="p-0 tan" />
          <p>Fast learner</p>
        </div>
        <div class="col">
          <font-awesome-icon icon="users" size="2x" class="p-0 tan" />
          <p>Team player</p>
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
  color: rgb(96, 55, 40);
}

.tan {
  color: rgb(62, 26, 13);
}
</style>
