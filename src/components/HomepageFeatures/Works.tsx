import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { CodeBracketIcon, StarIcon } from '@heroicons/react/16/solid';

type FeatureItem = {
    title: string;
    pic: string;
    description: ReactNode;
    linkText1: string;
    linkText2: string;
    linkText3: string;
};

export default function Works(): ReactNode {

    const FeatureList: FeatureItem[] = [
        {
            title: 'Galio Website',
            pic: '/img/galio-web-1.png',
            description: (
                <div>
                    This website is a showcase of Galio. A React Native framework that provides pre-built components and beautiful cross-platform templates to speed up your mobile app development. This documentation site is built with Docusaurus.
                </div>
            ),
            linkText1: "https://github.com/MichaelGetu-git/Galio-website",
            linkText2: 'https://galio-website-khaki.vercel.app/',
            linkText3: 'https://github.com/MichaelGetu-git/Galio-website',
        },
        {
            title:'Galio Framework',
            pic: '/img/galio.jpg',
            description: (
                <div>
                    Galio is a 100% free and open source project, licensed under MIT. It will always remain free to use, powered by a massive world-wide community. Carefully crafted. Ready-made components, typography, and a gorgeous base theme that adaps to each project. You'll be building in style. Built with real app examples, component demos, guides, and how-to's to get you up and running with mobile apps faster than ever before.
                </div>
            ),
            linkText1: "https://github.com/galio-org/galio",
            linkText2: '',
            linkText3: 'https://github.com/galio-org/galio',
        },
        {
            title: 'BGRemove',
            pic: '/img/bg-remover.png',
            description: (
                <div>
                    An intelligent web-based image background removal tool built with Next.js, powered by the Modnet Model from @xenova/transformers. Upload an image, process it locally in the browser (no server needed), and apply custom backgrounds or colors before downloading.
                </div>
            ),
            linkText1: "https://github.com/MichaelGetu-git/BGRemove",
            linkText2: 'https://bg-remove-three.vercel.app/',
            linkText3: 'https://github.com/MichaelGetu-git/BGRemove'
        },
        {
            title: 'Questions Jo',
            pic: '/img/leadership-styles.png',
            description: (
                <div>
                    A modern, interactive leadership assessment tool built with React, TypeScript, and Tailwind CSS.
                </div>
            ),
            linkText1: "https://github.com/MichaelGetu-git/Questions-jo",
            linkText2: 'https://leaders-journey.vercel.app/',
            linkText3: 'https://github.com/MichaelGetu-git/Questions-jo'
        },
    ];

    function Feature({ title, pic, description, linkText1, linkText2, linkText3 }: FeatureItem) {
        return (
            <div className={clsx('col col--6 w-full my-5')}>
                <a href={linkText3} className="border-gray-200 rounded-md shadow-2xl dark:bg-gray-800 overflow-hidden block h-full flex flex-col !no-underline text-gray-700 dark:text-white font-light">
                    <div className="w-full h-80 md:h-100 lg:h-120 flex-shrink-0">
                        <img
                            src={pic}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 padding-horiz--md py-4 flex flex-col">
                        <Heading as="h3">{title}</Heading>
                        <p className="flex-1 mb-4">{description}</p>
                        <div className="flex gap-2 mt-auto">
                            <a href={linkText1} className="!no-underline py-2 px-3 bg-indigo-500 text-white font-semibold rounded-3xl">
                               Github
                            </a>
                            {linkText2 && (
                                <a href={linkText2} className="!no-underline py-2 px-3 bg-indigo-500 text-white font-semibold rounded-3xl">
                                    View Website
                                </a>
                            )}
                        </div>
                    </div>
                </a>
            </div>
        );
    }

    return (
        <section className='px-5 md:px-10'>
            <h1>My Works</h1>
            <div className="md:pl-10 container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}