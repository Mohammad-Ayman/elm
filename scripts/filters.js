import { renderJobsPage } from "./allJobs.js";

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
    company: "populateFilterHandler Corp",
    companyImage:
      "https://www.mmaglobal.com/files/styles/member_logo_large/public/logos/populateFilterHandlercorporatepro.png?itok=ehOUsiQj",
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

const countries = new Set();
const cities = new Set();
const skills = new Set();
const careerLevels = new Set();
const Categories = new Set();
const types = new Set();
const datePosted = new Set();

// const populateSets = (jobsArray) => {
jobs.forEach((job) => {
  countries.add(job.country);
  cities.add(job.city);
  skills.add(job.skills);
  careerLevels.add(job.careerLevel);
  Categories.add(job.jobCategory);
  types.add(job.jobType);
  datePosted.add(job.datePosted);
});

// console.log(careerLevels);
// console.log(careerLevelsArray);
// };

// list filter elements inside filter container
// const listFilterElements = (filterSet, filter) => {
//   const clickedFilter = document.querySelector(`#${filter}-filter`);
//   // console.log(clickedFilter);
//   const ulELement = document.createElement("ul");
//   clickedFilter.append(ulELement);
//   filterSet.forEach((setElement) => {
//     const liELement = document.createElement("li");
//     liELement.innerHTML = `
//      ${setElement}
//   `;
//     ulELement.appendChild(liELement);
//   });
//   renderFilteredElements(ulELement);
// };

const listFilterElements = (filterSet, filter) => {
  const clickedFilter = document.querySelector(`#${filter}-filter`);
  const ulElement = document.createElement("ul");
  clickedFilter.append(ulElement);
  filterSet.forEach((setElement) => {
    const liElement = document.createElement("li");
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.value = setElement;
    // checkboxElement.addEventListener("change", () => {
    //   if (checkboxElement.checked) {
    //     filteredJobs.push(setElement); // Add the selected value to the filteredJobs array
    //   } else {
    //     const index = filteredJobs.indexOf(setElement);
    //     if (index !== -1) {
    //       filteredJobs.splice(index, 1); // Remove the value from the filteredJobs array if unchecked
    //     }
    //   }
    //   renderJobsPage(filteredJobs); // Render the updated filtered jobs
    // });

    const labelElement = document.createElement("label");
    labelElement.textContent = setElement;
    labelElement.prepend(checkboxElement);
    liElement.appendChild(labelElement);
    ulElement.appendChild(liElement);
  });
  renderFilteredElements(ulElement);
};

const renderFilteredElements = (target) => {
  target.addEventListener("click", (e) => {
    let filteredJobs = [];
    console.log(e.target.value);
    const selectedElement = e.target.textContent;
    const parentElement = e.target.parentNode;
    const h2Element = parentElement.parentNode
      .querySelector("h2")
      .textContent.trim()
      .toLowerCase();
    const twoWordsH2Element = h2Element.split(" ")[1];
    console.log(twoWordsH2Element);
    console.log(parentElement);
    console.log(selectedElement);
    console.log("h2Element");
    console.log(h2Element);
    // if (twoWordsH2Element) {
    //   filteredJobs = jobs.filter(
    //     (job) => job[twoWordsH2Element] === selectedElement.trim()
    //   );
    // } else {
    // }
    console.log(filteredJobs);
    filteredJobs = jobs.filter(
      (job) => job[h2Element] === selectedElement.trim()
    );
    renderJobsPage(filteredJobs);
  });
};
const displayAllBtnHandler = () => {
  const displayAll = document.getElementById("display-all");
  displayAll.addEventListener("click", () => {
    renderJobsPage(jobs);
  });
};

const populateFilter = (filterArray, filter) => {
  listFilterElements(filterArray, filter);
  displayAllBtnHandler();
};
// document.addEventListener("DOMContentLoaded", () => {
const populateFilterHandler = () => {
  populateFilter(countries, "country");
  populateFilter(cities, "city");
  populateFilter(skills, "skills");
  populateFilter(careerLevels, "level");
  populateFilter(Categories, "jobCategory");
  populateFilter(types, "jobType");
  populateFilter(datePosted, "datePosted");
  // renderAllJobs(jobs);
  // });
};

export { populateFilterHandler };
