const jobs = [
  {
    id: 0,
    company: "NTG Clarity",
    companyImage: "images/NTG-logo.png",
    country: "Egypt",
    city: "Cairo",
    skills: "Programming",
    careerLevel: "2 Years",
    jobCategory: "Front End Developer",
    jobType: "Full Time",
    datePosted: "1 hour ago",
  },
  {
    id: 1,
    company: "Elm",
    companyImage: "",
    country: "Saudi Arabia",
    city: "Jeddah",
    skills: "Communication",
    careerLevel: "2-5 Years",
    jobCategory: "Back End Developer",
    jobType: "Full Time",
    datePosted: "1 hour ago",
  },
  {
    id: 2,
    company: "ABC Inc.",
    companyImage:
      "http://3.bp.blogspot.com/_WPLahtdbO_I/TNhOrMSg-ZI/AAAAAAAAAFY/zZPBft9s7WQ/s1600/abc_logo.jpg",
    country: "USA",
    city: "New York",
    skills: "Marketing",
    careerLevel: "3-5 Years",
    jobCategory: "Marketing Specialist",
    jobType: "Part Time",
    datePosted: "2 hours ago",
  },
  {
    id: 3,
    company: "XYZ Corp",
    companyImage:
      "https://www.mmaglobal.com/files/styles/member_logo_large/public/logos/xyzcorporatepro.png?itok=ehOUsiQj",
    country: "Canada",
    city: "Toronto",
    skills: "Data Analysis",
    careerLevel: "1-3 Years",
    jobCategory: "Data Analyst",
    jobType: "Contract",
    datePosted: "3 hours ago",
  },
  {
    id: 4,
    company: "Tech Solutions",
    companyImage:
      "https://images-platform.99static.com/7v8-fjWpezqDYFTxbYGvEE3gnw8=/191x0:1338x1147/500x500/top/smart/99designs-contests-attachments/60/60612/attachment_60612660",
    country: "India",
    city: "Bangalore",
    skills: "Software Development",
    careerLevel: "5+ Years",
    jobCategory: "Senior Software Engineer",
    jobType: "Full Time",
    datePosted: "4 hours ago",
  },
  {
    id: 5,
    company: "Global Industries",
    companyImage:
      "https://s33009.pcdn.co/wp-content/uploads/2021/01/Global-Industrial.png.webp",
    country: "Australia",
    city: "Sydney",
    skills: "Project Management",
    careerLevel: "5-10 Years",
    jobCategory: "Project Manager",
    jobType: "Full Time",
    datePosted: "5 hours ago",
  },
  {
    id: 6,
    company: "Media Co.",
    companyImage:
      "https://img.freepik.com/free-vector/logo-template-design_1289-216.jpg?w=740&t=st=1687426633~exp=1687427233~hmac=99c6de1af2f6322101a21246be59607a553972c54931418ca7f9f9974cd3cf06",
    country: "United Kingdom",
    city: "London",
    skills: "Content Writing",
    careerLevel: "1 Year",
    jobCategory: "Content Writer",
    jobType: "Freelance",
    datePosted: "6 hours ago",
  },
  {
    id: 7,
    company: "E-commerce Solutions",
    companyImage:
      "https://thumbs.dreamstime.com/z/ecommerce-solutions-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133731961.jpg",
    country: "Germany",
    city: "Berlin",
    skills: "E-commerce",
    careerLevel: "3-5 Years",
    jobCategory: "E-commerce Manager",
    jobType: "Full Time",
    datePosted: "7 hours ago",
  },
  {
    id: 8,
    company: "Creative Agency",
    companyImage:
      "https://previews.123rf.com/images/webpapa/webpapa1910/webpapa191000020/132662389-logo-design-for-creative-agency-abstract-sign-for-company-branding-modern-logotype-in-flat-style.jpg",
    country: "France",
    city: "Paris",
    skills: "Graphic Design",
    careerLevel: "2-4 Years",
    jobCategory: "Graphic Designer",
    jobType: "Part Time",
    datePosted: "8 hours ago",
  },
  {
    id: 9,
    company: "Healthcare Solutions",
    companyImage:
      "https://cdn.shopify.com/s/files/1/1095/6418/products/L-2138_1024x1024@2x.png?v=1597302839",
    country: "Brazil",
    city: "Sao Paulo",
    skills: "Medical Research",
    careerLevel: "5+ Years",
    jobCategory: "Medical Researcher",
    jobType: "Full Time",
    datePosted: "9 hours ago",
  },
  {
    id: 10,
    company: "Finance Corp.",
    companyImage: "",
    country: "United States",
    city: "Chicago",
    skills: "Accounting",
    careerLevel: "3-5 Years",
    jobCategory: "Accountant",
    jobType: "Full Time",
    datePosted: "10 hours ago",
  },
  {
    id: 11,
    company: "Travel Agency",
    companyImage: "",
    country: "Spain",
    city: "Barcelona",
    skills: "Tourism",
    careerLevel: "1-3 Years",
    jobCategory: "Tourism Specialist",
    jobType: "Contract",
    datePosted: "11 hours ago",
  },
  {
    id: 12,
    company: "Tech Startup",
    companyImage: "",
    country: "United States",
    city: "San Francisco",
    skills: "Software Engineering",
    careerLevel: "2-5 Years",
    jobCategory: "Full Stack Developer",
    jobType: "Full Time",
    datePosted: "12 hours ago",
  },
  {
    id: 13,
    company: "Fashion Retail",
    companyImage: "",
    country: "Italy",
    city: "Milan",
    skills: "Fashion Design",
    careerLevel: "3-5 Years",
    jobCategory: "Fashion Designer",
    jobType: "Full Time",
    datePosted: "13 hours ago",
  },
  {
    id: 14,
    company: "Hospitality Group",
    companyImage: "",
    country: "United Arab Emirates",
    city: "Dubai",
    skills: "Hospitality Management",
    careerLevel: "5+ Years",
    jobCategory: "Hotel Manager",
    jobType: "Full Time",
    datePosted: "14 hours ago",
  },
  {
    id: 15,
    company: "Consulting Firm",
    companyImage: "",
    country: "Singapore",
    city: "Singapore",
    skills: "Consulting",
    careerLevel: "5-10 Years",
    jobCategory: "Consultant",
    jobType: "Full Time",
    datePosted: "15 hours ago",
  },
];

const renderJobs = (jobsArray) => {
  const ulELement = document.querySelector(".job-container");
  ulELement.innerHTML = "";
  jobsArray.forEach((job) => {
    const liELement = document.createElement("li");
    liELement.classList = "job-card flex";
    liELement.innerHTML = `
    <div class="text-container flex">
    <h2 class="job-id">${job.id}</h2>
    <h2>${job.jobCategory}</h2>
    <p>${job.company} - ${job.city} - ${job.country}</p>
      <p>
        <span class="job-type">${job.jobType}</span>
        <span class="time-posted">${job.datePosted} ago</span>
        </p>
      <p>Experience ${job.careerLevel} - ${job.skills} Skills</p>
    </div>
    <img
      src=${job.companyImage ? job.companyImage : "images/logo.png"}
      alt="Company logo "
      class="job-card__company-logo"
    />
    `;
    ulELement.appendChild(liELement);
  });
  singleJobHandler(ulELement);
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

const toggleFilterElements = () => {
  const filterContainer = document.querySelector(".filters-container");

  filterContainer.addEventListener("click", (e) => {
    const clickedFilter = e.target.closest(".chevron-icon");
    if (clickedFilter) {
      const h2Element = clickedFilter
        .closest(".filter-card")
        .querySelector(".text-container");
      if (h2Element) {
        h2Element.classList.toggle("filter");
      }
    }
  });
};

const renderAllJobs = (jobsArray) => {
  renderJobs(jobsArray);
  toggleFilterElements();
};

const backArrowHandler = () => {
  const arrowIcon = document.querySelector(".arrow-icon");
  arrowIcon.addEventListener("click", () => renderAllJobs(arrowIcon));
};

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

document.addEventListener("DOMContentLoaded", () => {
  populateFilter(countries, "country");
  populateFilter(cities, "city");
  populateFilter(skills, "skills");
  populateFilter(careerLevels, "careerLevel");
  populateFilter(Categories, "jobCategory");
  populateFilter(types, "jobType");
  populateFilter(datePosted, "datePosted");
  renderAllJobs(jobs);
});

/*

FILTER

*/

const countries = new Set();
const cities = new Set();
const skills = new Set();
const careerLevels = new Set();
const Categories = new Set();
const types = new Set();
const datePosted = new Set();

const populateSets = (jobsArray) => {
  jobs.forEach((job) => {
    countries.add(job.country);
    cities.add(job.city);
    skills.add(job.skills);
    careerLevels.add(job.careerLevel);
    Categories.add(job.jobCategory);
    types.add(job.jobType);
    datePosted.add(job.datePosted);
  });

  // Convert sets to arrays
  const countriesArray = Array.from(countries);
  const citiesArray = Array.from(cities);
  const skillsArray = Array.from(skills);
  const careerLevelsArray = Array.from(careerLevels);
  const CategoriesArray = Array.from(Categories);
  const typesArray = Array.from(types);

  console.log(careerLevels);
  console.log(careerLevelsArray);
};

// list filter elements inside filter container
const listFilterElements = (filterArray, filter) => {
  const clickedFilter = document.querySelector(`#${filter}-filter`);
  const ulELement = document.createElement("ul");
  clickedFilter.append(ulELement);
  filterArray.forEach((array) => {
    const liELement = document.createElement("li");
    liELement.innerHTML = `
    ${array}
  `;
    ulELement.appendChild(liELement);
  });
  renderFilteredElements(ulELement);
};
const renderFilteredElements = (target) => {
  target.addEventListener("click", (e) => {
    const selectedElement = e.target.textContent;
    const parentElement = e.target.parentNode;
    const h2Element = parentElement.parentNode
      .querySelector("h2")
      .textContent.trim()
      .toLowerCase();

    console.log(selectedElement);
    const filteredJobs = jobs.filter(
      (job) => job[h2Element] === selectedElement.trim()
    );
    console.log(filteredJobs);
    renderAllJobs(filteredJobs);
  });
};
const displayAllBtnHandler = () => {
  console.log("I am clicked");
  const displayAll = document.getElementById("display-all");
  displayAll.addEventListener("click", () => {
    renderAllJobs(jobs);
  });
};

const populateFilter = (filterArray, filter) => {
  listFilterElements(filterArray, filter);
  displayAllBtnHandler();
};

export { populateSets, populateFilter };
