const projects = [
    {
        id: 0,
        projectName: "Electric Tools",
        url: "https://tools-a576c.web.app/",
        image: "projects/electric-tool.png",
        projectDetail: "Two Different Interface Users Or Admin User Purchase Admin Management. User Or Admin Updates His/her Profile And Admin Adds More Products.Only Users Add Review Or Payment To All Orders and Admin Sees And Manage Who Will Pay ",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Daisyui"
            },
            {
                tech: "Fierbase Authentication"
            },
            {
                tech: "react-hook-form"
            },
            {
                tech: "react-query"
            },
            {
                tech: "swiper"
            },
            {
                tech: "JWT"
            },
            {
                tech: "React FontAwsome"
            },
            {
                tech: "react-router-dom"
            },
            {
                tech: "react-spinners"
            },
            {
                tech: "react-toastify"
            },
            {
                tech: "suneditor"
            },
            {
                tech: "react-spinners"
            },
        ]
    },
    {
        id: 0,
        projectName: "Computer Services",
        url: "https://computer-service-frontend.vercel.app/",
        image: "projects/computer-services.png",
        projectDetail: "Admin, Super Admin, User role-based Management Users have a Booking System For their services and Also Add To the Cart Admin Can Create And Manage The Services. There are two types of Services available Coming  All Are Working With Backend Integration Using API ",
        // Next.js, Redux toolkit, Rtk Query, Typescript, and design, Axios using these I will make the entire logic of these features
        technologiesUsed: [
            {
                tech: "NextJs"
            },
            {
                tech: "Redux Toolkit"
            },
            {
                tech: "Rtk Query"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "Axios"
            },
            {
                tech: "JWT"
            },
            {
                tech: "Moment"
            },
            {
                tech: "Yup"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(projects)
}
