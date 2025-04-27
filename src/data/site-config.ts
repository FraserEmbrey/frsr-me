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
    website: string;
    logo?: Image;
    title: string;
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
    website: 'https://frsr.me',
    title: 'Fraser Embrey | UI/UX Designer',
    description: "I'm a UI/UX designer with a passion for creating beautiful and functional user experiences.",
    image: {
        src: '/preview.jpg',
        alt: 'Website preview'
    },
    headerNavLinks: [
        { text: 'Projects', href: '/projects' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/contact' }
    ],
    footerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'Projects', href: '/projects' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/contact' },
        { text: 'About', href: '/about' },
        { text: 'Photography', href: 'https://fraser.photography' },
    ],
    socialLinks: [
        // Professional
        { text: 'LinkedIn', href: 'https://linkedin.com/in/fraserembrey' },
        { text: 'GitHub', href: 'https://github.com/fraserembrey' },
        { text: 'CodePen', href: 'https://codepen.io/frsr' },
        // Design
        { text: 'Dribbble', href: 'https://dribbble.com/frsr' },
        // Social/Photo
        { text: 'Instagram', href: 'https://instagram.com/fraserembrey' },
        { text: 'Glass', href: 'https://glass.photo/frsr' },
        { text: 'Threads', href: 'https://www.threads.com/@fraserembrey' },
    ],
    hero: {
        title: 'Hi 👋',
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            { text: 'Get in Touch', href: '/contact' }
        ]
    },
    subscribe: {
        title: 'Subscribe to my newsletter',
        text: 'One update per month. All the latest posts directly in your inbox.',
        formUrl: 'https://buttondown.com/api/emails/embed-subscribe/fraser'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
