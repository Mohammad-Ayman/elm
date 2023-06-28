import { renderJobsPage, toggleFilterElements } from "./allJobs.js";
import { jobs } from "./filters.js";
//Global Variables
let searchedJobs = new Set();

const searchJobs = (searchBar, jobsArray, filteredGroup) => {
  let searchBarInput = searchBar.value.toLowerCase().trim();
  const newSearchedJobs = jobsArray.filter((job) => {
    return job[filteredGroup].toLowerCase().includes(searchBarInput);
  });

  newSearchedJobs.forEach((job) => {
    searchedJobs.add(job);
  });

  // console.log([...searchedJobs]);
};
const searchJobsHandler = (
  searchBar,
  jobsArray,
  functionName,
  searchBarInput
) => {
  searchedJobs.clear();
  Object.entries(jobsArray[0]).forEach(([key, value]) => {
    if (typeof value === "string") {
      searchJobs(searchBar, jobsArray, key, searchBarInput);
    }
  });
  if (searchedJobs.size === 0) {
    createLiElement();
    resetCheckboxes();
  } else {
    functionName([...searchedJobs]);
  }
  // searchedJobs.size === 0 ? createLiElement() : functionName([...searchedJobs]);
  // searchedJobs.size === 0
  //   ? renderJobsPage(jobs)
  //   : functionName([...searchedJobs]);
  // searchBar.value = "";
};

function resetCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  const body = document.querySelector("body");
  const checkboxLabel = body.querySelectorAll("span");
  if (checkboxLabel) {
    checkboxLabel.forEach((checkbox) => {
      checkbox.classList.remove("check-box__label-checked");
    });
  }
  const chevronIcons = document.querySelectorAll(".chevron-icon");
  chevronIcons.forEach((icon) => {
    if (icon) {
      const h2Element = icon
        .closest(".filter-card")
        .querySelector(".text-container");
      if (h2Element) {
        icon.classList.remove("chevron-icon__clicked");
        h2Element.classList.add("filter");
      }
    }
  });
  // toggleFilterElements();
}
const createLiElement = () => {
  const parentElement = document.querySelector(".job-container");
  if (parentElement) {
    parentElement.innerHTML = `
      <li class="job-card">
      <h2 style="text-align: center">No Jobs to show!</h2>
      </li>
    `;
  } else {
    renderJobsPage(jobs);
  }
};

export { searchJobsHandler, createLiElement, resetCheckboxes };
