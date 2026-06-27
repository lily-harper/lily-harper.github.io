const writings = [
  {
    title: "What am I looking at?",
    category: "project",
    meta: "Methods note",
    date: "June 2026",
    datetime: "2026-06",
    excerpt:
      "A short note on why reproducibility is about more than whether code runs: assumptions, cleaning choices, model comparisons, and limitations all need to be visible.",
    link: "writings/what_am_i_looking_at.html",
  },
  {
    titleHtml: "<i>Can</i> Soul Meet Body meet NLP?",
    category: "project",
    meta: "Project reflection",
    date: "June 2026",
    datetime: "2026-06",
    excerpt:
      "I wanted to use NLP to learn about a band, but a band taught me about NLP: sentiment analysis, clustering assumptions, and what gets lost in computational.",
    link: "writings/soul-meets-body-nlp.html",
  },
  {
    title: "Reading Notes on Data and Culture",
    category: "musings",
    meta: "Reading notes · Draft",
    date: "June 2026",
    datetime: "2026-06",
    excerpt:
      "Selected notes from technical and humanistic reading, especially work that changes how I think about evidence, cities, culture, classification, and communication.",
    link: "writings/reading-notes-data-culture.html",
  },
  {
    title: "Liner Notes",
    category: "musings",
    meta: "J-card · Draft",
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
      <a class="archive-link mt-5 inline-block text-sm font-semibold" href="${post.link}">Read essay</a>
    </article>
  `;
}

function writingSection(title, description, category) {
  const posts = writings.filter((post) => post.category === category);

  if (posts.length === 0) {
    return "";
  }

  return `
    <section>
      <div class="mb-6">
        <p class="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">${description}</p>
        <h2 class="archive-heading mt-2 text-3xl font-bold">${title}</h2>
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
