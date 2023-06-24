import { renderSingleJob } from "./singleJob1.js";

//Global Variables
const body = document.querySelector("body");

const renderResults =  () => {
  body.style.backgroundImage = "none";
  body.innerHTML = `
    <header class="header flex">
        <img src="images/logo.png" alt="logo" class="logo-header" />
      
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
            <li class="filter-card flex">
              <div class="text-container">
                <h2>Filter</h2>
                <p>0 Filters selected</p>
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
              <div class="text-container">
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
              <div class="text-container">
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
              <div class="text-container">
                <h2>Area</h2>
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
              <div class="text-container">
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
              <div class="text-container">
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
              <div class="text-container">
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
              <div class="text-container">
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
            <ul class="job-container flex">
              <li class="job-card flex">
                <div class="text-container flex">
                  <h2>Front end developer</h2>
                  <p>Elm - Jeddah - Saudi Arabia</p>
                  <p>
                    <span class="job-type">Full time</span>
                    <span class="time-posted"> 1 hour ago</span>
                  </p>
                  <p>Experience 2-5 years - Communication skills</p>
                </div>
                <img
                  src="images/logo.png"
                  alt="Company logo "
                  class="job-card__company-logo"
                />
              </li>

              <li class="job-card flex">
                <div class="text-container flex">
                  <h2>Front end developer</h2>
                  <p>Elm - Jeddah - Saudi Arabia</p>
                  <p>
                    <span class="job-type">Full time</span>
                    <span class="time-posted"> 1 hour ago</span>
                  </p>
                  <p>Experience 2-5 years - Communication skills</p>
                </div>
                <img
                  src="images/logo.png"
                  alt="Company logo "
                  class="job-card__company-logo"
                />
              </li>

              <li class="job-card flex">
                <div class="text-container flex">
                  <h2>Front end developer</h2>
                  <p>Elm - Jeddah - Saudi Arabia</p>
                  <p>
                    <span class="job-type">Full time</span>
                    <span class="time-posted"> 1 hour ago</span>
                  </p>
                  <p>Experience 2-5 years - Communication skills</p>
                </div>
                <img
                  src="images/logo.png"
                  alt="Company logo "
                  class="job-card__company-logo"
                />
              </li>

              <li class="job-card flex">
                <div class="text-container flex">
                  <h2>Front end developer</h2>
                  <p>Elm - Jeddah - Saudi Arabia</p>
                  <p>
                    <span class="job-type">Full time</span>
                    <span class="time-posted"> 1 hour ago</span>
                  </p>
                  <p>Experience 2-5 years - Communication skills</p>
                </div>
                <img
                  src="images/logo.png"
                  alt="Company logo "
                  class="job-card__company-logo"
                />
              </li>

              <li class="job-card flex">
                <div class="text-container flex">
                  <h2>Front end developer</h2>
                  <p>Elm - Jeddah - Saudi Arabia</p>
                  <p>
                    <span class="job-type">Full time</span>
                    <span class="time-posted"> 1 hour ago</span>
                  </p>
                  <p>Experience 2-5 years - Communication skills</p>
                </div>
                <img
                  src="images/logo.png"
                  alt="Company logo "
                  class="job-card__company-logo"
                />
              </li>

              <li class="job-card flex">
                <div class="text-container flex">
                  <h2>Front end developer</h2>
                  <p>Elm - Jeddah - Saudi Arabia</p>
                  <p>
                    <span class="job-type">Full time</span>
                    <span class="time-posted"> 1 hour ago</span>
                  </p>
                  <p>Experience 2-5 years - Communication skills</p>
                </div>
                <img
                  src="images/logo.png"
                  alt="Company logo "
                  class="job-card__company-logo"
                />
              </li>

              <li class="job-card flex">
                <div class="text-container flex">
                  <h2>Front end developer</h2>
                  <p>Elm - Jeddah - Saudi Arabia</p>
                  <p>
                    <span class="job-type">Full time</span>
                    <span class="time-posted"> 1 hour ago</span>
                  </p>
                  <p>Experience 2-5 years - Communication skills</p>
                </div>
                <img
                  src="images/logo.png"
                  alt="Company logo "
                  class="job-card__company-logo"
                />
              </li>

              <li class="job-card flex">
                <div class="text-container flex">
                  <h2>Front end developer</h2>
                  <p>Elm - Jeddah - Saudi Arabia</p>
                  <p>
                    <span class="job-type">Full time</span>
                    <span class="time-posted"> 1 hour ago</span>
                  </p>
                  <p>Experience 2-5 years - Communication skills</p>
                </div>
                <img
                  src="images/logo.png"
                  alt="Company logo "
                  class="job-card__company-logo"
                />
              </li>

              <li class="job-card flex">
                <div class="text-container flex">
                  <h2>Front end developer</h2>
                  <p>Elm - Jeddah - Saudi Arabia</p>
                  <p>
                    <span class="job-type">Full time</span>
                    <span class="time-posted"> 1 hour ago</span>
                  </p>
                  <p>Experience 2-5 years - Communication skills</p>
                </div>
                <img
                  src="images/logo.png"
                  alt="Company logo "
                  class="job-card__company-logo"
                />
              </li>
            </ul>  
        </main>
      </div>
    </section>
  `;
};

export { renderResults };
