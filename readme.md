# Deno blog demo

## Installation

```bash
deno run -r --allow-read --allow-write https://deno.land/x/blog/init.ts my-deno-demo-blog-name
```

## Repository

## Usage

- In the `deno.jsonc` file you add tasks and the importMap file. Tasks are
  similar to scripts in Node, and in the importMap section, you pass a JSON file
  that contains all your import packages from Deno.
- The`import_map.json` file contains imports of all packages which you need to
  run your project.
- The `posts` folder contains all markdown files.
- The `main.tsx` file contains all configurations for the blog module.

- run the local development server with the `deno task dev` command.

Markdown files support various types of frontMatter. The most common and widely
used fontMatter types are:

- YAML: YAML is identified by opening and closing ---.
- JSON: JSON is identified by '{' and '}'.
- TOML: TOML is identified by opening and closing +++.

The most common frontMatter is YAML. The YAML frontMatter support markdown file
is everywhere. But the Deno blog module only supports yml frontMatter.

The Markdown file is divided into two sections.

- The first section is the header (frontMatter)
- The second is the body section.

The header section contains all metadata for the article. All the metadata is
written inside three dashes (---) both opening and closing – for example, post
title, tag, description, publish date, and so on. Finally, in the body section,
you write your article body and explain it.

The Deno blog module supports the following YML FrontMatter fields in a markdown
file:

1. author (string): The author contains the names of the authors. For example,
   author : "Rajdeep singh , deno"
2. publish_date(Date): The publish_date is required for the article.
3. description (string): The description is required for the description.
4. og:image(string): The og:image is not required. It is used for
   <meta property="og:image" content="assets/images/Title-tag-In-HTML-5.jpg">
5. tags(string[]): The tags are just keywords used for SEO. They're not
   compulsory.
6. title(string): The title is required for the heading.
7. allow_iframes( boolean ): the allow_iframes allows you to use iframe HTML.
8. pathname( string ): pathname is not required. For example,
   http://yourdomain.com/hello-world after your domain hello-world is your
   pathname
9. cover_html(string): The cover_html contains the HTML for the blog.
