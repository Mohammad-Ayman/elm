import { singleJobHandler } from "./singleJob.js";
import { populateFilterHandler } from "./filters.js";
import { renderHomePage, renderHomePageHandler } from "./landing.js";
// Global Variables
const body = document.querySelector("body");
const searchBtn = document.getElementById("search-button");

const renderJobsPage = (jobsArray) => {
  body.style.backgroundImage = "none";
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
                <div class="text-container filter" id="level-filter">
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
  populateFilterHandler();
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
  singleJobHandler(ulELement, jobsArray);
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

export { renderJobsPage, renderJobs, searchBtn };
