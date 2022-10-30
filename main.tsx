/** @jsx h */

import blog, { ogImage, h} from "blog";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

blog({
    author: "Yohann Hommet",
    title: "Yohann Hommet",
    description: "Fullstack developer",
    avatar: `assets/logos/profile.jpg`,
    avatarClass: "rounded-full shadow-lg w-32 h-32",
    coverTextColor: "white",
    links: [
        {title: "Email", url: "mailto:hommet.yohann@gmail.com"},
        {title: "GitHub", url: "https://github.com/YohannHommet"},
        {title: "Linkedin", url: "https://www.linkedin.com/in/YohannHommet/"},
    ],
    // header: <header/>,
    // section: <Section />,
    // footer: <footer/>,
    lang: "fr",
    favicon: `${Deno.env.get("URL")}favicon.ico`,
    theme: "auto",
    cover: "assets/logos/background.png",
    ogImage: {
        url: `assets/logos/profile.jpg`,
        twitterCard: "summary_large_image",
    },
    style: ".markdown-body ul, .markdown-body ol { list-style: disc !important;}",
});
