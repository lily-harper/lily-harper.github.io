const portfolio = {
  projects: [
    {
      title: "Motor Vehicle Accident Injury Classifier",
      subtitle: "Applied classifiers",
      summary:
        "To predict, at crash time, which motor vehicle accidents are more injury risk prone based on crash characteristics",
      methods: ["Classification", "Data cleaning", "Model evaluation", "Feature creation"],
      tools: ["Python", "sklearn"],
      link: "projects/accident-injury-classifier.html",
      repoLink: "https://github.com/lily-harper/injury_risk_classifier",
      reflectionLink: "writings/the_map.html",
      reflectionTitle: "Read reflection",
      graphicLabel: "Denver Map",
      graphicSrc: "assets/project_cards/denver_map.png",
      graphicAlt: "Map of Denver's accidents",
    },
    {
      title: "Soul Meets Body meets NLP",
      subtitle: "Basic NLP techniques on lyrics written by Benjamin Gibbard.",
      summary:
        "Lyrics similarity and sentiment analysis with TF-IDF, SVD, and KMeans",
      methods: ["NLP", "Text preprocessing", "Clustering"],
      tools: ["Python", "nltk", "pandas"],
      link: "projects/soul-meets-body-nlp.html",
      repoLink: "https://github.com/lily-harper/death-cab-lyrics-nlp",
      reflectionLink: "writings/soul-meets-body-nlp.html",
      reflectionTitle: "Read reflection",
      graphicLabel: "NLP workflow",
      graphicSrc: "assets/project_cards/sentiment_per_year.png",
      graphicAlt: "Sentiment per year",
    },
    {
      title: "Museam piece Database [in progress]",
      subtitle: "Database and Schema for artwork from select Museams for analysis",
      summary:
        "Building a relational database using PostGreSQL for museam artwork",
      methods: ["Database management"],
      tools: ["SQL", "Python", "API"], 
      link: "projects/museam.html",
      repoLink: "https://github.com/lily-harper/artworks_database",
      graphicLabel: "Dashboard preview",
      graphicSrc: "assets/project_cards/data_model.png",
      graphicAlt: "data_model",
    },
    {
      title: "Portfolio",
      subtitle: "This website itself",
      summary:
        "Self marketing where signal persists over noise (hopefully)",
      methods: ["Basic web design"],
      tools: ["HTML", "CSS", "JavaScript", "Codex"],
      link: "projects/portfolio.html",
      graphicLabel: "Classifier results",
      graphicSrc: "assets/project_cards/portfolio.png",
      graphicAlt: "screenshot of my portfolio",
    },
  ],
skills: [
  {
    id: "programming",
    category: "Programming",
    items: ["Python", "R", "SQL"],
  },
  {
    id: "wrangling",
    category: "Data Wrangling, Visualization & ETL",
    items: [
      "Pandas",
      "Tidyverse",
      "Matplotlib",
      "Data cleaning",
      "API data collection",
      "Feature construction",
      "PostgreSQL basics",
    ],
  },
  {
    id: "data-science",
    category: "Data Science & Machine Learning",
    items: [
      "Exploratory data analysis",
      "Regression",
      "Classification",
      "Clustering",
      "Dimensionality reduction",
      "Natural language processing basics",
      "Model evaluation",
    ],
  },
  {
    id: "workflow",
    category: "Workflow & Tools",
    items: [
      "Git/GitHub",
      "Jupyter",
      "LaTeX",
      "VS Code",
      "DBeaver",
      "AI-assisted coding workflows",
    ],
  },
],
  experience: [
    {
      type: "education",
      role: "M.S. Data Science",
      organization: "University of Colorado-Boulder, College of Engineering and Applied Sciences",
      date: "August 2025-May 2027 (expected)",
      description: [
        "Coursework in statistical methods and applications, data mining, and computer science.",
        "Membership in Data Science Student Association (DaSSA) and the Colorado Data Science Team"
      ],
    },
    {
      type: "education",
      role: "B.A. Economics & History",
      organization: "University of Nebraska-Lincoln, College of Arts and Sciences",
      date: "August 2020- May 2024",
      description: [
        "Coursework in economics, introductory econometrics, and history. Minor in Art History & Criticism.",
        "I also completed an undergraduate thesis in economics that drew on methods and ideas of behavioral economics. For fulfillment of a degree in history, I completed a capstone centered on consumption and labor in the late 20th century United States.",
      ],
    },
    {
      type: "experience",
      role: "Data Specialist - Contract",
      organization: "Polco / NRC",
      date: "September 2025-Dececember 2025",
      description:[
        "Researched, categorized, and completed data entry tasks in Excel to inform stakeholders and support improvements to Boulder's Transportation Master Plan",
        "Collaborated to compile datasets on businesses in Boulder Valley for completeness and to improve usability"],
    },
    {
      type: "experience",
      role: "Undergraduate Research Assistant",
      organization: "UNL Methodology and Evaluation Core Facility",
      date: "June 2023-September 2023",
      description:[
        "Analyzed survey data and produced visualizations to support internal and external evaluations",
        "Generated descriptive statistics and preliminary insights"
      ],
    },
  ],
};

function tagList(items, className = "archive-tag") {
  return items
    .map(
      (item) =>
        `<span class="${className} rounded px-2 py-1 text-xs font-medium">${item}</span>`
    )
    .join("");
}

function chipSection(label, items, className) {
  if (!items || items.length === 0) {
    return "";
  }

  return `
    <div class="mt-4">
      <p class="archive-muted mb-2 text-xs font-semibold uppercase tracking-wider">${label}</p>
      <div class="flex flex-wrap gap-2">${tagList(items, className)}</div>
    </div>
  `;
}

function projectGraphic(project) {
  if (project.graphicSrc) {
    return `
      <a class="project-graphic block overflow-hidden rounded-md" href="${project.link}">
        <img class="h-full w-full object-contain" src="${project.graphicSrc}" alt="${project.graphicAlt || project.title}" />
      </a>
    `;
  }

  return `
    <a class="project-graphic project-graphic-placeholder flex items-center justify-center rounded-md" href="${project.link}" aria-label="View ${project.title}">
      <span>${project.graphicLabel || "Project graphic"}</span>
    </a>
  `;
}

const projectsList = document.getElementById("projects-list");

if (projectsList) {
  projectsList.innerHTML = portfolio.projects
    .map(
      (project) => `
        <article class="archive-card-muted rounded-lg p-5 shadow-sm">
          ${projectGraphic(project)}
          <h3 class="text-lg font-semibold">
            <a class="archive-title hover:text-[var(--color-link-hover)]" href="${project.link}">${project.title}</a>
          </h3>
          ${
            project.subtitle
              ? `<p class="archive-accent mt-1 text-xs font-semibold uppercase tracking-wider">${project.subtitle}</p>`
              : ""
          }
          <p class="archive-muted mt-3 text-base leading-7">${project.summary}</p>
          ${chipSection("Methods", project.methods, "archive-method-tag")}
          ${chipSection("Tools", project.tools, "archive-tag")}
          <div class="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
            <a class="archive-link" href="${project.link}">View project</a>
            ${
              project.repoLink
                ? `<a class="archive-link" href="${project.repoLink}" target="_blank" rel="noopener noreferrer">GitHub repo</a>`
                : ""
              }
              ${
              project.reflectionLink
                ? `<a class="archive-link" href="${project.reflectionLink}">${project.reflectionTitle || "Read reflection"}</a>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");
}

function skillCard(group) {
  return `
    <section class="archive-card rounded-lg p-5 shadow-sm">
      <h3 class="archive-title text-lg font-semibold">${group.category}</h3>
      <div class="mt-4 flex flex-wrap gap-2">${tagList(group.items)}</div>
    </section>
  `;
}

const programmingSkills = portfolio.skills.find(
  (group) => group.id === "programming"
);
const workflowSkills = portfolio.skills.find(
  (group) => group.id === "workflow"
);
const remainingSkills = portfolio.skills.filter(
  (group) => group.id !== "programming" && group.id !== "workflow"
);

const skillsList = document.getElementById("skills-list");

if (skillsList) {
  skillsList.innerHTML = `
    <div class="skill-stack flex flex-col gap-5">
      ${skillCard(programmingSkills)}
      ${skillCard(workflowSkills)}
    </div>
    ${remainingSkills.map(skillCard).join("")}
  `;
}

function experienceParagraphs(description) {
  const paragraphs = Array.isArray(description) ? description : [description];

  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function experienceCard(item) {
  return `
    <article class="archive-card-muted rounded-lg p-5">
      <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <div>
          <h3 class="archive-title text-lg font-semibold">${item.role}</h3>
          <p class="archive-muted text-sm font-medium">${item.organization}</p>
        </div>
        <p class="archive-accent text-sm font-semibold">${item.date}</p>
      </div>
      <div class="archive-muted mt-3 space-y-3 text-base leading-7">
        ${experienceParagraphs(item.description)}
      </div>
    </article>
  `;
}

function experienceGroup(title, type) {
  const items = portfolio.experience.filter((item) => item.type === type);

  return `
    <section>
      <h2 class="archive-heading text-3xl font-bold">${title}</h2>
      <div class="mt-4 space-y-4">
        ${items.map(experienceCard).join("")}
      </div>
    </section>
  `;
}

const experienceList = document.getElementById("experience-list");

if (experienceList) {
  experienceList.innerHTML = [
    experienceGroup("Education", "education"),
    experienceGroup("Experience", "experience"),
  ].join("");
}
