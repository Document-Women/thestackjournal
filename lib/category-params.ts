export const categoryParams = {
    "dear tech sis": {
        color: "rgb(20 184 166)",
        description: "This is a must-not-miss section dedicated to women in tech. It covers everything from the latest news to inspiring stories, challenges faced by women in tech and practical advice on navigating the industry. The contents are relatable and designed for women who want to thrive in the technology world. It is a go-to spot for any tech sister who wants to stay up-to-date and successfully navigate the tech space. ",
    },
    "cover story": {
        color: "rgb(132 204 22)",
        description: "This is a must-not-miss section dedicated to women in tech. It covers everything from the latest news to inspiring stories, challenges faced by women in tech and practical advice on navigating the industry. The contents are relatable and designed for women who want to thrive in the technology world. It is a go-to spot for any tech sister who wants to stay up-to-date and successfully navigate the tech space. ",
    },
    "events": {
        color: "rgb(99 102 241)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus vel itaque ab deleniti harum iste deserunt pariatur modi. Veritatis eaque officia ea illum necessitatibus eveniet labore doloremque, quaerat ut aperiam rerum deleniti recusandae tempore quia eius facere. Quibusdam a repude.",
    },
    "startups": {
        color: "rgb(249 115 22)",
        description: "Our Startup section features companies founded by inspiring women in the tech Industry. This section provides comprehensive information on each company, including their mission, vision and notable achievements. Read our latest start-up feature here.",
    },
    "featured": {
        color: "rgb(6 182 212)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus vel itaque ab deleniti harum iste deserunt pariatur modi. Veritatis eaque officia ea illum necessitatibus eveniet labore doloremque, quaerat ut aperiam rerum deleniti recusandae tempore quia eius facere. Quibusdam a repude.",
    },
    "founders": {
        color: "rgb(244 63 94)",
        description: "Explore the world of women-led companies in our Founders section. This section showcases talented women in the tech industry who have founded or co-founded a company and are making significant contributions to the tech world. Here, you will read about inspiring stories of female entrepreneurs who are making waves in the tech industry and leading the way for the next generation of women in tech.",
    },
    "essays": {
        color: "rgb(16 185 129)",
        description: "This section is a valuable resource for women seeking information and insights about technology. You can also read and benefit from the advice and guidance of experienced women who are leaders in various fields of technology.",
    },
    "news": {
        color: "rgb(139 92 246)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus vel itaque ab deleniti harum iste deserunt pariatur modi. Veritatis eaque officia ea illum necessitatibus eveniet labore doloremque, quaerat ut aperiam rerum deleniti recusandae tempore quia eius facere. Quibusdam a repude.",
    },
    "opportunities": {
        color: "rgb(245 158 11)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus vel itaque ab deleniti harum iste deserunt pariatur modi. Veritatis eaque officia ea illum necessitatibus eveniet labore doloremque, quaerat ut aperiam rerum deleniti recusandae tempore quia eius facere. Quibusdam a repude.",
    },
    "uncategorized": {
        color: "rgb(239 68 68)"
    },
};
    
export function getColor(category: string): string {
    const key = category.toLowerCase()  || 'uncategorized'// return lime for uncategoried
    return categoryParams[key]['color'] || '';
};

export function getCategoryDesc(category: string): string {
    const key = category.toLowerCase()  || 'uncategorized'// return lime for uncategoried
    return categoryParams[key]['description'] || '';
};


// export const categories = Object.keys(categoryParams);