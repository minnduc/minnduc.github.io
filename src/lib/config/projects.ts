export type Project = {
    id: string
    name: string
    tags?: string[]
    feature?: string
    description?: string
    img: string
    link?: string
}

export const projects: Project[] = [

    {
        id: 'ecowaste',
        name: 'EcoWaste',
        description: 
            "Waste management system with AI-powered waste classification.",
        tags: ['Project','AI', 'Website'],
        img: '/assets/EcoWaste.png',
        link: '/projects/ecowaste'

    },
    {
        id: 'mangaocr',
        name: 'Manga OCR',
        description: 
            'Deep learning-based Japanese character recognition in Manga.',
        tags: ['Project', 'Coursework', 'OCR', 'Deep Learning'],
        img: '/assets/MangaOCR.png',
        link: '/projects/mangaocr'
    },
    {
        id: 'IE229',
        name: 'Artificial Intelligence',
        description: 
            'Enhancing Deep Learning Baselines.',
        tags: ['Project', 'Coursework', 'Deep Learning'],
        img: '/assets/ie229/ie229.png',
        link: '/projects/ie229'
    },
]
