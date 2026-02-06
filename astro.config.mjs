// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightLinksValidator from 'starlight-links-validator'
import Icons from 'unplugin-icons/vite';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: "https://nf-neuro.github.io",
    base: "/",
    trailingSlash: 'never',
    integrations: [
        starlight({
            title: 'nf-neuro',
            logo: {
                light: './src/assets/nf-neuro_logo_light.svg',
                dark: './src/assets/nf-neuro_logo_dark.svg',
                replacesTitle: true,
            },
            // Add a script to use web analytics.
            head: [
                {
                    tag: 'script',
                    attrs: {
                        src: 'https://scripts.simpleanalyticscdn.com/latest.js',
                        defer: true,
                    },
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'algolia-site-verification',
                        content: '21A44C24369F49EF'
                    },
                },
            ],
            customCss: [
                './src/styles/custom.css',
                './src/styles/global.css'
            ],
            components: {
                // Override the default `Hero` component.
                Hero: './src/components/newHero.astro',
            },
            social: [
                { icon: "github", label: "nf-neuro", href: 'https://github.com/nf-neuro/modules.git'}
            ],
            plugins: [
                starlightLinksValidator(),
                starlightDocSearch({
                    appId: 'GKBR5BGCDX',
                    apiKey: 'eb61244400b86ad87e5aae7c4a9077a8',
                    indexName: 'nf-neuro'
                }),
                starlightSidebarTopics([
                    {
                        label: 'Welcome',
                        link: 'welcome',
                        icon: 'bars',
                        items: []
                    },
                    {
                        label: 'Getting Started',
                        link: 'pipeline/1-setup',
                        icon: 'rocket',
                        items: [
                            { label: 'Explore', slug: 'pipeline/2-tutorial_explore' },
                            { label: 'Part 1-2 : Use inputs', slug: 'pipeline/3-tutorial_steps_1-2' },
                            { label: 'Part 3 : Use modules', slug: 'pipeline/4-tutorial_step_3' },
                            { label: 'Part 4 : Install modules', slug: 'pipeline/5-tutorial_step_4' },
                            { label: 'Part 5 : Install subworkflows', slug: 'pipeline/6-tutorial_step_5' },
                            { label: 'Part 6 : Create a module', slug: 'pipeline/7-tutorial_step_6' },
                            { label: 'Part 7 : Create a subworkflow', slug: 'pipeline/8-tutorial_step_7' }
                        ]
                    },
                    {
                        label: 'API',
                        link: 'api',
                        icon: 'seti:notebook',
                        items: [
                            'api/configuration',
                            {
                                label: 'Subworkflows',
                                autogenerate: { directory: 'api/subworkflows' },
                                collapsed: true
                            },
                            {
                                label: 'Modules',
                                autogenerate: { directory: 'api/modules', collapsed: true },
                                collapsed: false
                            }
                        ]
                    },
                    {
                        label: 'Contribute',
                        link: 'contribute/setup',
                        icon: 'heart',
                        items: [
                            {
                                label: 'Create your module',
                                items: [
                                    'contribute/create-your-module/1-template',
                                    'contribute/create-your-module/2-main',
                                    'contribute/create-your-module/3-configuration',
                                    'contribute/create-your-module/4-container',
                                    'contribute/create-your-module/5-metadata',
                                    'contribute/create-your-module/6-tests',
                                    'contribute/create-your-module/7-quality-control',
                                    'contribute/create-your-module/8-submit'
                                ]
                            },
                            {
                                label: 'Create your subworkflow',
                                items: [
                                    'contribute/create-your-subworkflow/1-template',
                                    'contribute/create-your-subworkflow/2-main',
                                    'contribute/create-your-subworkflow/3-optional-inputs',
                                    'contribute/create-your-subworkflow/4-configuration',
                                    'contribute/create-your-subworkflow/5-metadata',
                                    'contribute/create-your-subworkflow/6-tests',
                                    'contribute/create-your-subworkflow/7-submit'
                                ]
                            },
                            {
                                label: 'Continuous Integration',
                                items: [
                                    'contribute/continuous-integration/1-test-data',
                                    'contribute/continuous-integration/2-ci'
                                ],
                                collapsed: true
                            }
                        ]
                    },
                    {
                        label: 'Guides',
                        link: 'guides',
                        icon: 'open-book',
                        items: [
                            {
                                label: 'How-to',
                                items: [
                                    {
                                        label: "Nextflow",
                                        items: [
                                            { label: 'Top-5 Operators', slug: 'guides/how-to/nextflow/1-top-5-operators' },
                                            { label: 'Custom Subworkflows', slug: 'guides/how-to/nextflow/2-custom-subworkflows' }
                                        ],
                                        collapsed: true
                                    },
                                    {
                                        label: "VSCode",
                                        items: [
                                            { label: 'Data in devcontainers', slug: 'guides/how-to/vscode/1-devcontainer-manage-data' },
                                            { label: 'Nextflow support', slug: 'guides/how-to/vscode/2-nextflow-language-support' }
                                        ],
                                        collapsed: true
                                    },
                                    {
                                        label: "Lineage",
                                        items: [
                                            { label: 'Software versioning', slug: 'guides/how-to/versioning/1-common-software-version'}
                                        ]
                                    }
                                ]
                            },
                            {
                                label: 'Advanced Tutorials',
                                items: [
                                    { label: 'BIDS Input', slug: 'guides/advanced-tutorials/1-bidsinput' },
                                    { label: 'BIDS Output', slug: 'guides/advanced-tutorials/2-bidsoutput' },
                                    { label: 'MultiQC', slug: 'guides/advanced-tutorials/3-multiqc' }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Pipelines',
                        link: 'pipelines',
                        icon: 'seti:pipeline',
                        items: [
                            {
                                label: 'Running pipelines',
                                items : [
                                    { label: 'Common guidelines', slug: 'pipelines/run' },
                                    { label: 'Offline execution', slug: 'pipelines/offline' }
                                ]
                            },
                            { label: 'Add your pipeline', slug: 'pipelines/submit' }
                        ]
                    }
                ])
            ]
        })
    ],
    vite: {
        plugins: [Icons({ compiler: 'astro' }), tailwindcss()],
        server: {
            watch: {
                ignored: [
                    "**/.pnpm-store/**/*",
                    "**/node_modules/**/*"
                ],
            },
        },
    },
});
