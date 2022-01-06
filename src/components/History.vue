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
            <h6>Bachelor's degree, Høyskolen Kristiania</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            This bachelor's degree taught me how to develop high quality web pages and
            cross-platform applications. I learned the importance of UX and UI-design, and how to
            make great, intuitive user experiences. I also learned how to code in a variety of
            programming languages and frameworks.<br /><br />
            <b>I'm currently working on my bachelor thesis.</b>
          </p>
        </div>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="graduation-cap" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Marketing and Leadership</h5>
            <h6>Bachelor's degree, BI</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            This degree taught me about how customers and consumers think, make decisions and how to
            meet their needs. I also learned about leadership and management which I find very
            interesting. In my bachelor thesis I discussed how bad management and leadership could
            affect the business long term, and what measures the management can implement to improve
            the work environment. <br /><br /><b>I received a grade A on my bachelor thesis.</b>
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
            I design and develop custom-made landing pages for customers from different departments
            of BDO. We use Moqups as a sketching tool and Vue as our framework. Working as a
            front-end developer at BDO has given me a greater understanding on how to communicate
            with the customer and meet their needs, as well as sugesting solutions that can be
            developed wihtin the given deadline. I also improved my coding skills, as well as
            designing.
          </p>
        </div>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="glasses" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Lecturer</h5>
            <h6>Gokstad Akademiet, 2021 - present</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            I'm currently a lecturer in HTML/CSS and Javascript for Front-end students in
            Sandefjord. I get to teach a class with over 30 students how to code, and it truly has
            become a passion of mine. I've gained new skills such as project management and how to
            teach different types of learners.
          </p>
        </div>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="graduation-cap" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Assistant teacher</h5>
            <h6>Høyskolen Kristiania, 2021</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>I helped first-year students in classes such as HTML/CSS and Information Security.</p>
        </div>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="cogs" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Tech Support</h5>
            <h6>Høyskolen Kristiania, 2021</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            I helped students and teachers at Høyskolen Kristiania with various soft- and hardware
            concerns. This improved my problem-solving and researching skills.
          </p>
        </div>
      </div>
      <div class="row card p-2">
        <div class="row header-content">
          <div class="col-2 header-icon">
            <font-awesome-icon icon="shield-alt" size="2x" class="p-0" />
          </div>
          <div class="col-10 header-text">
            <h5>Security Alarm Operator</h5>
            <h6>Sector Alarm, 2020 - 2022</h6>
          </div>
        </div>
        <div class="row card-content">
          <p>
            I worked with monitoring security alarm systems all across the country, and managing
            urgent alarm signals. The job required me to multitask, have good communication with the
            customer, and stress management in critical situations.
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
