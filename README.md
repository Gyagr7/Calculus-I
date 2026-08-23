# MATH 1540 — Integral Calculus, Lecture Notes

PreTeXt source for the Fall 2026 course notes. This project was set up and
test-built against **PreTeXt-CLI 2.49.1** (see `requirements.txt`).

## Getting set up

```bash
python3 -m venv .venv
source .venv/bin/activate        # on Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Building

Run these from the project's root folder (wherever `project.ptx` lives):

```bash
pretext build web      # accessible HTML website -> output/web
pretext view web       # preview it in a browser, with live reload

pretext build print    # PDF -> output/print (needs a LaTeX install)
```

## How the source is organized

```
project.ptx                       project manifest (targets: web, print)
publication/publication.ptx       build-time look-and-feel settings
source/
  docinfo.ptx                     book-wide macros, asset paths
  main.ptx                        root file -- includes everything below
  frontmatter.ptx                 title page, preface
  ch-derivatives-recap.ptx
  ch-optimization-approximation.ptx      (Stewart Sec. 4.7-4.9)
  ch-integrals.ptx                       (Stewart Sec. 5.1-5.5)
  ch-applications-of-integration.ptx     (Stewart Sec. 6.1-6.5)
  ch-further-applications-of-integration.ptx  (Stewart Sec. 8.1-8.3)
  backmatter.ptx
assets/                           images, diagrams, etc. referenced by source
```

Each chapter is one file, pulled into `source/main.ptx` with `xi:include`, so
no single file gets unwieldy as the semester goes on. Every section already
has a comment noting which class session(s) it corresponds to (matching
`Math_1540_Course_Schedule.docx`) and which quiz/HW it feeds, if any.

Each section currently has three placeholder paragraphs marked `TODO` —
Motivation, Problem, Abstraction — as a scaffold for the course's
motivation-first pedagogy. Replace them with real content; delete the ones
you don't need, add more `<p>`, `<example>`, `<definition>`, `<theorem>`,
etc. as the section grows.

## Adding a new chapter or section

1. Create `source/ch-whatever.ptx` (copy an existing chapter file as a
   template) or add a `<section>` inside an existing chapter file.
2. If it's a new chapter file, add a matching `<xi:include href="./ch-whatever.ptx"/>`
   line inside `source/main.ptx`, in the position you want it to appear.
3. Give every new `<chapter>`/`<section>` a unique `xml:id`.

## Reference

- The PreTeXt Guide: <https://pretextbook.org/doc/guide/html/>
- Annotated sample book: <https://pretextbook.org/examples/sample-book/annotated/>
