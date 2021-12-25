<template>
  <div class="row my-3 history">
    <div class="col-sm-6 pt-3 education-content">
      <div class="row">
        <h3>Education</h3>
      </div>
      <div class="row education-card mb-5">
        <h5>Frontend and Mobile Development</h5>
        <h6>Bachelors degree, Høyskolen Kristiania</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
          impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur expedita,
          quisquam quaerat quidem molestias obcaecati animi.
        </p>
      </div>
      <div class="row education-card">
        <h5>Frontend and Mobile Development</h5>
        <h6>Bachelors degree, Høyskolen Kristiania</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
          impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur expedita,
          quisquam quaerat quidem molestias obcaecati animi.
        </p>
      </div>
    </div>
    <div class="col-sm-6 pt-3">
      <div class="row">
        <h3>Work History</h3>
      </div>
      <div class="row work-card mb-5">
        <h5>Front-end Developer</h5>
        <h6>BDO, 2021 - present</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
          impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur expedita,
          quisquam quaerat quidem molestias obcaecati animi.
        </p>
      </div>
      <div class="row work-card mb-5">
        <h5>Front-end Developer</h5>
        <h6>BDO, 2021 - present</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
          impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur expedita,
          quisquam quaerat quidem molestias obcaecati animi.
        </p>
      </div>

      <div class="row work-card mb-5">
        <h5>Front-end Developer</h5>
        <h6>BDO, 2021 - present</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
          impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur expedita,
          quisquam quaerat quidem molestias obcaecati animi.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
};
</script>

<style scoped>
.history {
  color: white;
}
.education-content {
  border-right: 1px solid white;
}

.education-card {
  background-color: white;
  color: black;
  position: relative;
  width: 104%;
  margin-top: 5%;
  padding-left: 10%;
  padding-top: 5%;
  text-align: left;
  box-shadow: 0px 0px 15px 5px #4a343454;
  margin-right: 10%;
}

.work-card {
  background-color: white;
  color: black;
  position: relative;
  width: 100%;
  margin-top: 5%;
  padding-left: 10%;
  padding-top: 5%;
  text-align: left;
  box-shadow: 0px 0px 15px 5px #4a343454;
  margin-left: 2%;
}
</style>
