export const site = {
    url: process.env.SITE_URL ?? "https://davidvillagomez.dev",
    name: "David Villagomez",
    role: "Desarrollador Full Stack",
    email: "villagomezf12@gmail.com",
    location: "Morelia, Michoacán, México",
    cv: "/cv/david-villagomez-cv.pdf",
    socials: {
        github: "https://github.com/David-VGMZ",
        linkedin: "https://www.linkedin.com/in/david-villagomez-carranza-5165b12b2/"
    },
} as const;