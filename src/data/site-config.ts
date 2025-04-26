export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    author: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Fraser Embrey | UX/UI designer',
    subtitle: 'Fraser Embrey - UX/UI Designer | Creating User-Centered, Accessible, and Intuitive Experiences',
    author: 'Fraser Embrey',
    description: 'Explore the portfolio of Fraser Embrey, a UX/UI designer specializing in user-centered web and app design. Discover case studies, design insights, and creative solutions focused on accessibility, innovation, and exceptional user experiences.',
    image: {
        src: '/preview.jpg',
        alt: 'Fraser Embrey Portfolio Website'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/frsr'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/fraserembrey'
        },
        {
            text: 'CodePen',
            href: 'https://codepen.io/frsr'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/fraserembrey'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/fraserembrey'
        }
    ],
    hero: {
        title: 'Hey, I’m Fraser',
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
