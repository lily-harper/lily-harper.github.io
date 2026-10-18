const writings = [
  {
    title: "Superunknown",
    category: "project",
    meta: "Project reflection",
    date: "August 2026",
    datetime: "2026-08",
    excerpt:
      "The gap between real-world plausibility and predictive value.",
    link: "writings/superunknown.html",
    projectLink: "projects/accident-injury-classifier.html",
  },
  {
    titleHtml: "<i>Can</i> Soul Meets Body meet NLP?",
    category: "project",
    meta: "Project reflection",
    date: "June 2026",
    datetime: "2026-06",
    excerpt:
      "I wanted to use NLP to learn about a band, but a band taught me about NLP: sentiment analysis, clustering assumptions, and what could get lost in computational methods.",
    link: "writings/soul-meets-body-nlp.html",
    projectLink: "projects/soul-meets-body-nlp.html",
  },
  {
    title: "Reading Notes on Data and Culture",
    published: false,
    category: "musings",
    meta: "Reading log",
    date: "June 2026",
    datetime: "2026-06",
    excerpt:
      "Selected notes from technical and humanistic reading, especially work that changes how I think about evidence, culture, and communication.",
    link: "writings/reading-notes-data-culture.html",
  },
  {
    title: "Liner Notes",
    category: "musings",
    meta: "J-card",
    date: "June 2026",
    datetime: "2026-06",
    excerpt:
      "Blurbs inspired by the material printed on cassette J-cards or booklets in CD jewel cases.",
    link: "writings/liner-notes.html",
  },
];

function writingCard(post) {
  const title = post.titleHtml || post.title;

  return `
    <article class="archive-card-muted rounded-lg p-5 shadow-sm">
      <div class="flex items-baseline justify-between gap-4">
        <h2 class="text-lg font-semibold">
          <a class="archive-title hover:text-[var(--color-link-hover)]" href="${post.link}">${title}</a>
        </h2>
        <time class="archive-muted shrink-0 text-sm" datetime="${post.datetime}">${post.date}</time>
      </div>
      <p class="archive-muted mt-1 text-sm">${post.meta}</p>
      <p class="archive-muted mt-4 text-base leading-7">${post.excerpt}</p>
      <div class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
        <a class="archive-link" href="${post.link}">Read essay</a>
        ${post.projectLink ? `<a class="archive-link" href="${post.projectLink}">View project</a>` : ""}
      </div>
    </article>
  `;
}

function writingSection(title, description, category) {
  const posts = writings.filter(
    (post) => post.category === category && post.published !== false,
  );

  if (posts.length === 0) {
    return "";
  }

  return `
    <section>
      <div class="mb-6">
        <p class="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">${description}</p>
        <h2 class="archive-heading mt-2 text-3xl font-bold">${title}</h2>
        ${
          category === "project"
            ? `<p class="archive-muted mt-3 max-w-3xl text-base leading-7">I wanted to include reflections on the details, meanings of methods, or results of the various projects.</p>`
            : ""
        }
      </div>
      <div class="space-y-4">
        ${posts.map(writingCard).join("")}
      </div>
    </section>
  `;
}

document.getElementById("writings-list").innerHTML = [
  writingSection("Project Notes", "Directly related to projects", "project"),
  writingSection("Musings", "General thoughts and reading notes", "musings"),
].join("");
