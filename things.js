const portfolio = {
  projects: [
    {
      title: "Soul Meets Body meets NLP",
      subtitle: "Natural language processing on lyrics",
      summary:
        "Basic NLP techniques on lyrics written by Benjamin Gibbard. Built and evaluated an unsupervised learning model",
      methods: ["NLP", "Text preprocessing", "Clustering"],
      tools: ["Python", "nltk", "pandas"],
      link: "projects.html#soul-meets-body-nlp",
    },
    {
      title: "Motor Vehicle Accident Injury Classifier",
      subtitle: "Applied classifiers",
      summary:
        "Cleaned a real-world dataset, identified patterns",
      methods: ["Classification", "Data cleaning", "Model evaluation"],
      tools: ["Python", "sklearn"],
      link: "projects.html#accident-injury-classifier",
    },
    {
      title: "Data Dashboard",
      subtitle: "Interactive reporting",
      summary:
        "Designed a lightweight dashboard to track key measures and make trends easier to scan over time.",
      methods: ["Dashboard design", "Trend analysis", "Reporting"],
      tools: ["SQL", "Tableau", "Excel"],
      link: "projects.html#data-dashboard",
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
      date: "Expected May 2027",
      description:
        "Coursework in statistics, machine learning, data mining, and applied analytics.",
    },
    {
      role: "B.A. Economics & History",
      organization: "University of Nebraska-Lincoln",
      date: "",
      description:
        "Coursework in economics, intro econometrics, and history. Minor in Art History & Criticism",
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

document.getElementById("projects-list").innerHTML = portfolio.projects
  .map(
    (project) => `
      <article class="archive-card-muted rounded-lg p-5 shadow-sm">
        <h3 class="text-lg font-semibold">
          <a class="archive-title hover:text-[var(--color-link-hover)]" href="${project.link}">${project.title}</a>
        </h3>
        ${
          project.subtitle
            ? `<p class="archive-accent mt-1 text-xs font-semibold uppercase tracking-wider">${project.subtitle}</p>`
            : ""
        }
        <p class="archive-muted mt-3 text-sm leading-6">${project.summary}</p>
        ${chipSection("Methods", project.methods, "archive-method-tag")}
        ${chipSection("Tools", project.tools, "archive-tag")}
        <a class="archive-link mt-5 inline-block text-sm font-semibold" href="${project.link}">
          View project
        </a>
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
        <p class="archive-muted mt-3 text-sm leading-6">${item.description}</p>
      </article>
    `
  )
  .join("");
