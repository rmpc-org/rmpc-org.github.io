import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightVersions from "starlight-versions";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://rmpc-org.github.io",
    base: "/",
    build: {
        format: "directory",
    },
    integrations: [
        starlight({
            title: "rmpc",
            expressiveCode: {
                frames: {
                    removeCommentsWhenCopyingTerminalFrames: false,
                },
            },
            head: [
                {
                    tag: "meta",
                    attrs: {
                        property: "og:image",
                        content: "https://github.com/mierak/rmpc/raw/master/assets/preview.png",
                    },
                },
            ],
            plugins: [
                starlightLinksValidator({
                    exclude: [
                        "http://localhost:4321/rmpc", // a link to the local server in dev & contributing
                        "http://localhost:4321", // a link to the local server in dev & contributing
                    ],
                }),
                starlightVersions({
                    versions: [
                        {
                            slug: "0.11.0",
                            label: "v0.11.0",
                        },
                        {
                            slug: "0.10.0",
                            label: "v0.10.0",
                        },
                        {
                            slug: "0.9.0",
                            label: "v0.9.0",
                        },
                    ],
                }),
            ],
            sidebar: [
                {
                    label: "Overview",
                    slug: "overview",
                },
                {
                    label: "Installation",
                    slug: "installation",
                },
                {
                    label: "Try without installing",
                    slug: "try-without-install",
                },
                {
                    label: "Development and contributing",
                    link: "development",
                },
                {
                    label: "Configuration",
                    autogenerate: {
                        directory: "configuration",
                    },
                },
                {
                    label: "Guides",
                    autogenerate: {
                        directory: "guides",
                    },
                },
                {
                    label: "Reference",
                    autogenerate: {
                        directory: "reference",
                    },
                },
                {
                    label: "Theme gallery",
                    autogenerate: {
                        directory: "themes",
                    },
                },
            ],
            editLink: {
                baseUrl: "https://github.com/rmpc-org/docs/edit/master/",
            },
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/mierak/rmpc",
                },
                {
                    icon: "discord",
                    label: "Discord",
                    href: "https://discord.gg/9MAddPFqSF",
                },
            ],
            customCss: ["./src/styles/custom.css"],
            components: {
                Hero: "./src/components/Hero.astro",
                Header: "./src/components/Header.astro",
                Banner: "./src/components/Banner.astro",
                ContentPanel: "./src/components/ContentPanel.astro",
            },
        }),
        react(),
    ],
});
