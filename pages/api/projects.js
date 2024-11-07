const projects = [
    {
        id: 0,
        projectName: "Journey Verse",
        url: "https://journey-verse-pi.vercel.app/",
        image: "projects/journey-verse.png",
        projectDetail: "Journey Verse Is A Travel Platform Here You can book your Hotel, Tours, Activities, Rent also or here you can book in future date and travel full safety and securely you choose your Hotels or other services and select date then book and then do payment then your booking is successfully. All Pages is Responsive for All devices and having dark mode also and user friendly ui and bookingsystem in landing page have all services and all service have love react feature user and admin have dashboarduser can upload blog post and see there orders and profile and admin manage all orders blogs and add the servicesor admin upload blogs also and update the status of orders. User authentication system login and register features",
        technologiesUsed: [
            {
                tech: "Next Js"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "shadcn"
            },
            {
                tech: "Next Auth"
            },
            {
                tech: "react-hook-form"
            },
            {
                tech: "Postgresql"
            },
            {
                tech: "Drizzle-Orm"
            },
            {
                tech: "Other Need Packages"
            },
        ]
    },
    {
        id: 1,
        projectName: "Safari List",
        url: "https://www.safarilist.com/",
        image: "projects/safarilist.png",
        projectDetail: "Safarilist Is a Website that Provide Articles and Mobile specification and here have mobile reviews and also have feature app reviews and in mobile device user can do dekstop mode inside safari list and in mobile you can enjoy dekstop mode. Here try User friendly ui and 2000+ Phone are uploaded and 50+ Articles and this site is tottaly SEO Friendly. ",
        technologiesUsed: [
            {
                tech: "Next Js"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "shadcn"
            },
            {
                tech: "Material Ui"
            },
            {
                tech: "Next Auth"
            },
            {
                tech: "react-hook-form"
            },
            {
                tech: "MySql"
            },
            {
                tech: "Drizzle-Orm"
            },
            {
                tech: "Other Need Packages"
            },
        ]
    },
    {
        id: 2,
        projectName: "Electric Tools",
        url: "https://tools-a576c.web.app/",
        image: "projects/electric-tool.png",
        projectDetail: "Two Different Interface Users Or Admin User Purchase Admin Management. User Or Admin Updates His/her Profile And Admin Adds More Products.Only Users Add Review Or Payment To All Orders and Admin Sees And Manage Who Will Pay ",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
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
        id: 3,
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
