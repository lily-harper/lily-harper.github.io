const writings = [
  {
    title: "'The map is not the territory'",
    category: "project",
    meta: "Modeling note",
    date: "July 2026 (draft)",
    datetime: "2026-06",
    excerpt:
      "Feature engineering as mechanical approximation",
    link: "writings/the_map.html",
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
    meta: "Reading log",
    date: "June 2026",
    datetime: "2026-06",
    excerpt:
      "Selected notes from technical and humanistic reading, especially work that changes how I think about evidence, culture, and communication.",
    link: "writings/reading-notes-data-culture.html",
  },
  {
    title: "Liner Notes",
    published: false,
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
      <a class="archive-link mt-5 inline-block text-sm font-semibold" href="${post.link}">Read essay</a>
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
