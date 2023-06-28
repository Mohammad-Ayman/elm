import { renderJobsPage } from "./allJobs.js";
import { jobs } from "./filters.js";
import { searchJobsHandler } from "./searching.js";

const body = document.querySelector("body");
const renderHomePage = () => {
  body.style.backgroundImage = `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.64),
    rgba(0, 0, 0, 0.64)
  ),
  url("../images/landing-background.jpg")`;
  body.innerHTML = `
  <header id="index__header" class="flex">
  <div class="logo-container">
    <img src="images/logo-white.png" alt="logo" id="index__logo-header" />
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
<main id="index__main" class="flex">
  <h2>Find the best Jobs</h2>
  <h3>Search for jobs and career opportunities</h3>
  <div id="index__search-container" class="flex">
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
    <button id="search-button">Search job</button>
  </div>
</main>
`;

  const signLogin = document.querySelectorAll("nav ul li a");
  signLogin.forEach((element) => {
    element.style.color = "#fff";
  });
  const searchBtn = document.getElementById("search-button");

  // renderJobsPageHandler();

  searchBtn.addEventListener("click", renderJobsPageHandler);
  const searchBar = document.getElementById("search");
  searchBar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      renderJobsPageHandler();
    }
  });
};

const renderJobsPageHandler = () => {
  const searchBar = document.getElementById("search");
  const searchBarInput = searchBar.value.toLowerCase().trim();
  console.log(searchBarInput);
  searchBar.value.length === 0
    ? renderJobsPage(jobs)
    : searchJobsHandler(searchBar, jobs, renderJobsPage, searchBarInput);
};

const renderHomePageHandler = () => {
  const headerLogo = document.querySelector(".logo-container");
  headerLogo.addEventListener("click", renderHomePage);
};
export { renderHomePage, renderHomePageHandler };
