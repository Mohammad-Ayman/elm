// Global Variables
const body = document.querySelector("body");
const searchBtn = document.getElementById("search-button");

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

const renderJobsPage = (jobsArray) => {
  body.innerHTML = `
  <header class="header flex">
        <a href="index.html" class="logo-container">
          <img src="images/logo.png" alt="logo" class="logo-header" />
        </a>
        <div class="search-container flex">
          <div class="icon-search flex">
            <div class="icon-container">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </a>
            </div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Find the best Jobs"
            />
          </div>
        </div>
        <nav>
          <ul class="sign-login flex">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Signup </a>
            </li>
          </ul>
        </nav>
      </header>
      <section class="container">
        <div class="test">
          <aside class="results-aside">
            <!-- <div class="filters-container flex"> -->
            <ul class="filters-container flex">
              <li class="filter-card">
                <h2 id="display-all">Display all jobs</h2>
              </li>
              <li class="filter-card flex">
                <div class="text-container filter" id="country-filter">
                  <h2>Country</h2>
                </div>
                <div class="filter__icon-container">
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="chevron-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
              <li class="filter-card flex">
                <div class="text-container filter" id="city-filter">
                  <h2>City</h2>
                </div>
                <div class="filter__icon-container">
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="chevron-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
              <li class="filter-card flex">
                <div class="text-container filter" id="skills-filter">
                  <h2>Skills</h2>
                </div>
                <div class="filter__icon-container">
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="chevron-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
              <li class="filter-card flex">
                <div class="text-container filter" id="careerLevel-filter">
                  <h2>Career level</h2>
                </div>
                <div class="filter__icon-container">
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="chevron-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
              <li class="filter-card flex">
                <div class="text-container filter" id="jobCategory-filter">
                  <h2>Job category</h2>
                </div>
                <div class="filter__icon-container">
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="chevron-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
              <li class="filter-card flex">
                <div class="text-container filter" id="jobType-filter">
                  <h2>Job type</h2>
                </div>
                <div class="filter__icon-container">
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="chevron-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
              <li class="filter-card flex">
                <div class="text-container filter" id="datePosted-filter">
                  <h2>Date posted</h2>
                </div>
                <div class="filter__icon-container">
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="chevron-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
            <!-- </div> -->
          </aside>
          <main class="results-main">
            <ul class="job-container flex"></ul>
          </main>
        </div>
      </section>
  `;
  renderJobs(jobsArray);
  toggleFilterElements();
};
const renderJobs = (jobsArray) => {
  const ulELement = document.querySelector(".job-container");
  console.log(ulELement);
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
  // singleJobHandler(ulELement);
};
const renderJobsPageHandler = () => {
  renderJobsPage(jobs);
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

searchBtn.addEventListener("click", renderJobsPageHandler);

// export {}
