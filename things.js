const portfolio = {
  projects: [
    {
      title: "Motor Vehicle Accident Injury Classifier",
      subtitle: "Applied classifiers",
      summary:
        "To predict, at crash time, which motor vehicle accidents are more injury risk prone based on crash characteristics",
      methods: ["Classification", "Data cleaning", "Model evaluation", "Feature creation"],
      tools: ["Python", "sklearn"],
      link: "projects.html#accident-injury-classifier",
      repoLink: "https://github.com/lily-harper/injury_risk_classifier",
      reflectionLink: "writings/reproducible-analysis.html",
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
      link: "projects.html#soul-meets-body-nlp",
      repoLink: "https://github.com/lily-harper/death-cab-lyrics-nlp",
      reflectionLink: "writings/soul-meets-body-nlp.html",
      reflectionTitle: "Read reflection",
      graphicLabel: "NLP workflow",
      graphicSrc: "assets/project_cards/sentiment_per_year.png",
      graphicAlt: "Sentiment per year",
    },
    {
      title: "Museam piece Database",
      subtitle: "Database and Schema for artwork from select Museams",
      summary:
        "Build a relational database using PostGreSQL for museam artwork",
      methods: ["Database management"],
      tools: ["SQL", "Python"], 
      link: "projects.html#data-dashboard",
      repoLink: "https://github.com/lily-harper/artworks_database",
      graphicLabel: "Dashboard preview",
      graphicSrc: "",
      graphicAlt: "schema",
    },
    {
      title: "Portfolio",
      subtitle: "This website itself",
      summary:
        "Self marketing where signal persists over noise (hopefully)",
      methods: ["Basic web design"],
      tools: ["HTML", "CSS", "JavaScript", "Codex"],
      link: "projects.html#portfolio",
      graphicLabel: "Classifier results",
      graphicSrc: "assets/project_cards/portfolio.png",
      graphicAlt: "screenshot of my portfolio",
    },
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "Git", "Jupyter"],
    },
    {
      category: "Data Science",
      items: ["EDA", "Regression", "Classification", "Model evaluation basics"],
    },
    {
      category: "Communication",
      items: ["Data visualization", "Technical writing", "Reproducible reports", "Presentations"],
    },
  ],
  experience: [
    {
      role: "M.S. Data Science",
      organization: "University of Colorado-Boulder",
      date: "August 2025-May 2027 (expected)",
      description:
        "Coursework in statistics, machine learning, data mining, and applied analytics.",
    },
    {
      role: "B.A. Economics & History",
      organization: "University of Nebraska-Lincoln",
      date: "August 2020- May 2024",
      description:
        "Coursework in economics, introductory econometrics, and history. Minor in Art History & Criticism. Additionally, I completed an undergraduate thesis in economics and a capstone paper in history",
    },
    {
      role: "Portfolio Project Work",
      organization: "Independent",
      date: "2025-present",
      description:
        "Developing projects that emphasize clean code, readable notebooks, and practical interpretation.",
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

document.getElementById("projects-list").innerHTML = portfolio.projects
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
              ? `<a class = "archive-link" href = "${project.repoLink}" target="_blank" rel="noopener noreferrer"> GitHub repo </a>`
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

document.getElementById("skills-list").innerHTML = portfolio.skills
  .map(
    (group) => `
      <section class="archive-card rounded-lg p-5 shadow-sm">
        <h3 class="archive-title text-lg font-semibold">${group.category}</h3>
        <div class="mt-4 flex flex-wrap gap-2">${tagList(group.items)}</div>
      </section>
    `
  )
  .join("");

document.getElementById("experience-list").innerHTML = portfolio.experience
  .map(
    (item) => `
      <article class="archive-card-muted rounded-lg p-5">
        <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 class="archive-title text-lg font-semibold">${item.role}</h3>
            <p class="archive-muted text-sm font-medium">${item.organization}</p>
          </div>
          <p class="archive-accent text-sm font-semibold">${item.date}</p>
        </div>
        <p class="archive-muted mt-3 text-base leading-7">${item.description}</p>
      </article>
    `
  )
  .join("");
