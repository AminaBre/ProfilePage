<template>
  <div class="row history-content mt-4">
    <div class="col-lg-6 p-5 education-content">
      <div class="row">
        <h3>Education</h3>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="graduation-cap" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Front-end and Mobile Development</h5>
            <h6>Bachelors degree, Høyskolen Kristiania</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
            impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur
            expedita, quisquam quaerat quidem molestias obcaecati animi.
          </p>
        </div>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="graduation-cap" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Frontend and Mobile Development</h5>
            <h6>Bachelors degree, Høyskolen Kristiania</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
            impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur
            expedita, quisquam quaerat quidem molestias obcaecati animi.
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 p-5 work-content">
      <div class="row">
        <h3>Work History</h3>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="code" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Front-end Developer</h5>
            <h6>BDO, 2021 - present</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
            impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur
            expedita, quisquam quaerat quidem molestias obcaecati animi.
          </p>
        </div>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="glasses" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Front-end Developer</h5>
            <h6>BDO, 2021 - present</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
            impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur
            expedita, quisquam quaerat quidem molestias obcaecati animi.
          </p>
        </div>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="shield-alt" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Front-end Developer</h5>
            <h6>BDO, 2021 - present</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
            impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur
            expedita, quisquam quaerat quidem molestias obcaecati animi.
          </p>
        </div>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="graduation-cap" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Front-end Developer</h5>
            <h6>BDO, 2021 - present</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum similique dolorum saepe
            impedit. Numquam harum quia, qui voluptatibus corrupti ut explicabo consectetur
            expedita, quisquam quaerat quidem molestias obcaecati animi.
          </p>
        </div>
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
.header-content {
  align-items: center;
}

.education-content {
  border-right: 0.5px solid white;
}

.education-content .header-icon {
  color: rgb(69, 82, 126);
}

.work-content .header-icon {
  color: #526a4b;
}

.card {
  background-color: white;
  color: black;
  margin-top: 10%;
  text-align: left;
  box-shadow: 0px 0px 15px 5px #3620203d;
  border-radius: 0px;
  transition: 0.5s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 15px 5px #362020af;
}
</style>
