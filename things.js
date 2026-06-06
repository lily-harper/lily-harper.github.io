const portfolio = {
  projects: [
    {
      title: "Soul Meets Body meets NLP",
      summary:
        "Built and evaluated a supervised learning model, compared baselines, and explained tradeoffs using clear metrics.",
      tools: ["Python", "scikit-learn", "pandas"],
      link: "https://github.com/lily-harper",
    },
    {
      title: "Exploratory Data Analysis",
      summary:
        "Cleaned a real-world dataset, identified patterns, and created visual summaries for a non-technical audience.",
      tools: ["R", "ggplot2", "Quarto"],
      link: "https://github.com/lily-harper",
    },
    {
      title: "Data Dashboard",
      summary:
        "Designed a lightweight dashboard to track key measures and make trends easier to scan over time.",
      tools: ["SQL", "Tableau", "Excel"],
      link: "https://github.com/lily-harper",
    },
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "Git", "Jupyter"],
    },
    {
      category: "Data Science",
      items: ["EDA", "Regression", "Classification", "Model evaluation", "A/B testing basics"],
    },
    {
      category: "Communication",
      items: ["Data visualization", "Technical writing", "Reproducible reports", "Presentations"],
    },
  ],
  experience: [
    {
      role: "M.S. Data Science",
      organization: "University of Colorado Boulder",
      date: "Expected 2026",
      description:
        "Coursework in statistics, machine learning, data engineering, and applied analytics.",
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

function tagList(items) {
  return items
    .map(
      (item) =>
        `<span class="archive-tag rounded px-2 py-1 text-xs font-medium">${item}</span>`
    )
    .join("");
}

document.getElementById("projects-list").innerHTML = portfolio.projects
  .map(
    (project) => `
      <article class="archive-card-muted rounded-lg p-5 shadow-sm">
        <h3 class="archive-title text-lg font-semibold">${project.title}</h3>
        <p class="archive-muted mt-3 text-sm leading-6">${project.summary}</p>
        <div class="mt-4 flex flex-wrap gap-2">${tagList(project.tools)}</div>
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
