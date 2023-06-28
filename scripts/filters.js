import { renderJobsPage, renderJobs } from "./allJobs.js";
import { createLiElement } from "./searching.js";

const jobs = [
  {
    id: 0,
    company: "NTG Clarity",
    image: "images/NTG-logo.png",
    country: "Egypt",
    city: "Cairo",
    skills: "Programming",
    level: "2 Years",
    category: "Front End Developer",
    type: "Full Time",
    posted: "1 hour ago",
  },
  {
    id: 20,
    company: "NTG Clarity",
    image: "images/NTG-logo.png",
    country: "Egypt",
    city: "Cairo",
    skills: "Programming",
    level: "2 Years",
    category: "Full Stack Developer",
    type: "Full Time",
    posted: "1 hour ago",
  },
  {
    id: 1,
    company: "Elm",
    image: "",
    country: "Saudi Arabia",
    city: "Jeddah",
    skills: "Communication",
    level: "2-5 Years",
    category: "Front End Developer",
    type: "Full Time",
    posted: "1 hour ago",
  },
  {
    id: 2,
    company: "ABC Inc.",
    image: "images/abc-logo.png",
    country: "USA",
    city: "New York",
    skills: "Marketing",
    level: "3-5 Years",
    category: "Marketing Specialist",
    type: "Part Time",
    posted: "2 hours ago",
  },
  {
    id: 3,
    company: "XYZ Corp",
    image: "images/xyz-logo.png",
    country: "Canada",
    city: "Toronto",
    skills: "Data Analysis",
    level: "1-3 Years",
    category: "Data Analyst",
    type: "Contract",
    posted: "3 hours ago",
  },
  {
    id: 4,
    company: "Tech Solutions",
    image: "images/tech-logo.png",
    country: "India",
    city: "Bangalore",
    skills: "Software Development",
    level: "5+ Years",
    category: "Senior Software Engineer",
    type: "Full Time",
    posted: "4 hours ago",
  },
  {
    id: 5,
    company: "Global Industries",
    image: "images/global-logo.png",
    country: "Australia",
    city: "Sydney",
    skills: "Project Management",
    level: "5-10 Years",
    category: "Project Manager",
    type: "Full Time",
    posted: "5 hours ago",
  },
  {
    id: 6,
    company: "Media Co.",
    image: "images/promedia-logo.png",
    country: "United Kingdom",
    city: "London",
    skills: "Content Writing",
    level: "1 Year",
    category: "Content Writer",
    type: "Freelance",
    posted: "6 hours ago",
  },
  {
    id: 7,
    company: "E-commerce Solutions",
    image: "images/ecommerce-logo.png",
    country: "Germany",
    city: "Berlin",
    skills: "E-commerce",
    level: "3-5 Years",
    category: "E-commerce Manager",
    type: "Full Time",
    posted: "7 hours ago",
  },
  {
    id: 8,
    company: "Creative Agency",
    image:
      "https://previews.123rf.com/images/webpapa/webpapa1910/webpapa191000020/132662389-logo-design-for-creative-agency-abstract-sign-for-company-branding-modern-logotype-in-flat-style.jpg",
    country: "France",
    city: "Paris",
    skills: "Graphic Design",
    level: "2-4 Years",
    category: "Graphic Designer",
    type: "Part Time",
    posted: "8 hours ago",
  },
  {
    id: 9,
    company: "Healthcare Solutions",
    image:
      "https://cdn.shopify.com/s/files/1/1095/6418/products/L-2138_1024x1024@2x.png?v=1597302839",
    country: "Brazil",
    city: "Sao Paulo",
    skills: "Medical Research",
    level: "5+ Years",
    category: "Medical Researcher",
    type: "Full Time",
    posted: "9 hours ago",
  },
  {
    id: 10,
    company: "Finance Corp.",
    image: "",
    country: "USA",
    city: "Chicago",
    skills: "Accounting",
    level: "3-5 Years",
    category: "Accountant",
    type: "Full Time",
    posted: "10 hours ago",
  },
  {
    id: 11,
    company: "Travel Agency",
    image: "",
    country: "Spain",
    city: "Barcelona",
    skills: "Tourism",
    level: "1-3 Years",
    category: "Tourism Specialist",
    type: "Contract",
    posted: "11 hours ago",
  },
  {
    id: 12,
    company: "Tech Startup",
    image: "",
    country: "USA",
    city: "San Francisco",
    skills: "Software Engineering",
    level: "2-5 Years",
    category: "Full Stack Developer",
    type: "Full Time",
    posted: "12 hours ago",
  },
  {
    id: 13,
    company: "Fashion Retail",
    image: "",
    country: "Italy",
    city: "Milan",
    skills: "Fashion Design",
    level: "3-5 Years",
    category: "Fashion Designer",
    type: "Full Time",
    posted: "13 hours ago",
  },
  {
    id: 14,
    company: "NTG Clarity",
    image: "images/NTG-logo.png",
    country: "Canada",
    city: "Toronto",
    skills: "Hospitality Management",
    level: "5+ Years",
    category: "Hotel Manager",
    type: "Full Time",
    posted: "14 hours ago",
  },
  {
    id: 15,
    company: "NTG Clarity",
    image: "images/NTG-logo.png",
    country: "Turkey",
    city: "Istanbul",
    skills: "Consulting",
    level: "5-10 Years",
    category: "Consultant",
    type: "Full Time",
    posted: "15 hours ago",
  },
];

const company = new Set();
const countries = new Set();
const cities = new Set();
const skills = new Set();
const levels = new Set();
const categories = new Set();
const types = new Set();
const posted = new Set();


jobs.forEach((job) => {
  company.add(job.company);
  countries.add(job.country);
  cities.add(job.city);
  skills.add(job.skills);
  levels.add(job.level);
  categories.add(job.category);
  types.add(job.type);
  posted.add(job.posted);
});

const listFilterElements = (filterSet, filter) => {
  // const clickedFilter = document.querySelector(`#${filter}-filter`);
  const clickedFilter = document.querySelector(`[data-filter="${filter}"]`);

  const ulElement = document.createElement("ul");
  clickedFilter.append(ulElement);
  filterSet.forEach((setElement) => {
    const liElement = document.createElement("li");
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.value = setElement;
    checkboxElement.classList.add("check-box");

    const labelElement = document.createElement("label");

    const spanElement = document.createElement("span");
    spanElement.classList.add("check-box__label");
    spanElement.textContent = setElement;
    labelElement.appendChild(checkboxElement);
    labelElement.appendChild(spanElement);
    liElement.appendChild(labelElement);
    ulElement.appendChild(liElement);
  });
  renderFilteredElements(ulElement, clickedFilter);
  displayAllBtnHandler();
};

let selectedElements = new Set();

const populateSelectedElements = (e, filter, filteredJobs) => {
  const filterData = filter.dataset.filter;
  const selectedElement = e.target.value;
  const label = e.target.parentNode;
  const checkboxLabel = label.querySelector("span");

  if (e.target.checked) {
    console.log(label.querySelector("span"));
    if (checkboxLabel) {
      checkboxLabel.classList.toggle("check-box__label-checked");
    }

    selectedElements.add({ [filterData]: selectedElement });
    console.log(selectedElements);
  } else {
    if (checkboxLabel) {
      checkboxLabel.classList.toggle("check-box__label-checked");
    }
    selectedElements.forEach((element) => {
      if (element[filterData] === selectedElement) {
        selectedElements.delete(element);
      }
    });
    console.log(selectedElements);
  }
  // populateFilteredJobs(filteredJobs)
};
const populateFilteredJobs = (filteredJobs) => {
  filteredJobs = [...jobs];
  selectedElements.forEach((element) => {
    const key = Object.keys(element)[0];
    const values = [...selectedElements]
      .filter((el) => Object.keys(el)[0] === key)
      .map((el) => el[key]);
    filteredJobs = filteredJobs.filter((job) => values.includes(job[key]));
  });
};

const renderFilteredElements = (target, filter) => {
  let filteredJobs = [];

  target.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(e.target);

    populateSelectedElements(e, filter);
    filteredJobs = [...jobs];
    selectedElements.forEach((element) => {
      const key = Object.keys(element)[0];
      const values = [...selectedElements]
        .filter((el) => Object.keys(el)[0] === key)
        .map((el) => el[key]);
      filteredJobs = filteredJobs.filter((job) => values.includes(job[key]));
    });

    console.log("filtered jobs length", filteredJobs.length);
    if (filteredJobs.length > 0) {
      renderJobs(filteredJobs);
    } else if (selectedElements.size === 0 || filteredJobs.length === 0) {
      createLiElement();
      selectedElements.clear();
    }
  });
};

// let selectedElements = new Set();
// const renderFilteredElements = (target, filter) => {
//   let filteredJobs = [];
//   let lastClickedFilteredJobs;
//   const filterData = filter.dataset.filter;

//   target.addEventListener("change", (e) => {
//     const selectedElement = e.target.value;

//     if (e.target.checked) {
//       lastClickedFilteredJobs = jobs.filter(
//         (job) => job[filterData] === selectedElement.trim()
//       );
//       selectedElements.add({ [filterData]: selectedElement });
//       console.log(selectedElements);

//       filteredJobs.push(...lastClickedFilteredJobs);
//     } else {
//       // filteredJobs = filteredJobs.filter(
//       //   (job) => job[filterData] !== selectedElement.trim()
//       // );
//       selectedElements.delete(selectedElement);
//       filteredJobs = selectedElements.size > 0 ? [...selectedElements] : [];
//       console.log(selectedElements);
//     }
//     console.log("filtered jobs length", filteredJobs.length);
//     filteredJobs.length > 0 ? renderJobs(filteredJobs) : renderJobsPage(jobs);
//   });
// };

const displayAllBtnHandler = () => {
  const displayAll = document.getElementById("display-all");
  displayAll.addEventListener("click", () => {
    renderJobsPage(jobs);
  });
};

const populateFilter = (filterArray, filter) => {
  listFilterElements(filterArray, filter);
  // displayAllBtnHandler();
};

const populateFilterHandler = () => {
  populateFilter(company, "company");
  populateFilter(countries, "country");
  populateFilter(cities, "city");
  populateFilter(skills, "skills");
  populateFilter(levels, "level");
  populateFilter(categories, "category");
  populateFilter(types, "type");
  populateFilter(posted, "posted");
};

export { populateFilterHandler, jobs, displayAllBtnHandler };
