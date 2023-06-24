

const renderSingleJob = (job, section) => {
  console.log(job);
  section.classList = "singleJob-section container flex";
  section.innerHTML = `
  <main class="singleJob-main">
  <article class="job-header flex">
  <a href="results.html"
  <div class="arrow-icon__container">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="arrow-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>  
  </div>
  </a>
    <div class="info-container flex">
      <div class="info">
        <h2>${job.jobCategory}</h2>
        <p class="job-type">${job.jobType}</p>
        <p>
          <span class="job-header__company">${job.company}</span>
          <span class="verify-icon__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="verify-icon"
            >
              <path
                fill-rule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          ${job.city} - ${job.country}
        </p>
        <p>Posted ${job.datePosted} ago</p>
      </div>
      <img
      src=${job.companyImage ? job.companyImage : "images/logo.png"}
        alt="Company logo "
        class="job-card__company-logo"
      />
    </div>
    <div class="apply flex">
      <a href="#" class="apply-button">Apply for job</a>
      <div class="vector-icon__container">
        <img src="./images/Vector.svg" alt="icon" class="vector-icon" />
      </div>
    </div>
  </article>
  <article class="job-details">
    <h3>Job details</h3>
    <div class="details-container flex">
      <div class="key-values flex">
        <ul class="keys">
          <li>Experience Needed:</li>
          <li>Career Level:</li>
          <li>Education Level:</li>
          <li>Salary:</li>
          <li>Job Categories:</li>
        </ul>
        <ul class="values">
          <li>${job.careerLevel}</li>
          <li>Experienced (Non-Manager)</li>
          <li>Bachelor's Degree</li>
          <li>Confidential</li>
          <li>${job.jobType}</li>
        </ul>
      </div>
      <div class="skills-list flex">
        <h4>Skills and Tools:</h4>
        <p>
          <span class="job-type">HTML</span>
          <span class="job-type">CSS</span>
          <span class="job-type">JavaScript</span>
        </p>
      </div>
    </div>
  </article>
  <article class="job-description">
    <h3>Job description</h3>
    <p>
      We're looking for an exceptional Inspection Engineer to join our
      fast-growing team at Sylndr, helping transform the way people buy
      used cars and make purchasing a car no different from buying any
      other product online today. You will be managing the end-to-end
      inspection process for vehicles to ensure they fit Sylndr’s criteria
      and requirements and complete the appraisal process accurately and
      within our SLAs. The inspections will be done using one of our
      inspection vehicles or in one of our fixed locations.
    </p>
    <h3>What will you do</h3>

    <ul class="requirements-list">
      <li>
        Managing the end-to-end inspection process for vehicles to ensure
        they meet Sylndr's criteria and requirements.
      </li>
      <li>
        Conducting thorough inspections of both the interior and exterior
        of vehicles, identifying areas of concern such as scratches,
        dents, and subpar previous repairs.
      </li>
      <li>
        Assessing and identifying mechanical, electrical, and suspension
        issues in the vehicles.
      </li>
      <li>
        Completing the appraisal process accurately and within the
        designated Service Level Agreements (SLAs).
      </li>
      <li>
        Utilizing our specialized inspection vehicles or conducting
        inspections at our fixed locations.
      </li>
      <li>
        Achieving the Key Performance Indicators (KPIs) assigned to the
        role, demonstrating exceptional attention to detail and
        effectively managing the inspection process.
      </li>
    </ul>
  </article>
  <article class="job-requirements">
    <h3>Job requirements</h3>
    <ul class="requirements-list">
      <li>
        A bachelor's degree in Mechanical Engineering or a related field
        is required.
      </li>
      <li>
        A good level of experience in Vehicle Inspection/Assessment.
      </li>
      <li>
        Demonstrated expertise in body and paint repairs, including
        identifying and assessing cosmetic issues such as scratches,
        dents, and previous repairs.
      </li>
      <li>
        Familiarity with automotive industry standards and practices.
      </li>
      <li>
        Proven organizational skills to effectively manage the inspection
        process.
      </li>
      <li>
        Excellent communication skills to convey findings and
        recommendations clearly.
      </li>
      <li>
        Ability to adapt to changing priorities and work with a flexible
        approach.
      </li>
      <li>
        Demonstrated "can-do" attitude. Ability to work fast and
        efficiently without
      </li>
      <li>
        compromising accuracy. Capable of meeting tight deadlines and
        completing
      </li>
      <li>inspections within designated timeframes.</li>
    </ul>
  </article>
</main>
<aside class="singleJob-aside">
  <h2>About ${job.company}</h2>
  <p>
    NTG Clarity is a leading IT services & solutions provider in Canada &
    the Middle East, enabling enterprises to maintain their competitive
    edge in today’s dynamic and volatile market. The main areas of focus
    of NTG are; Commercial Off The Shelf products; serving multitude of
    industries, covering Enterprise Management Solution via its flagship
    StageEM™ Enterprise Management, NTS-Billing, NTS-Inventory Management
    and Control, NTS-Workflow Management, NTS-Partner Relationship
    Management.
  </p>
  <a href="#">Browse all jobs</a>
</aside>
  `;
  backArrowHandler();
};

const singleJobHandler = (parentElement) => {
  let sectionElement = document.querySelector("section");
  console.log(sectionElement.classList);

  parentElement.addEventListener("click", (e) => {
    const clickedJob = e.target.closest("li");
    const jobId = clickedJob.querySelector(".job-id").textContent;
    const job = jobs.find((job) => job.id === +jobId);
    renderSingleJob(job, sectionElement);
  });
};

const backArrowHandler = () => {
  const arrowIcon = document.querySelector(".arrow-icon");
  arrowIcon.addEventListener("click", () => renderAllJobs(arrowIcon));
};