const expertise = [
    {
        id: 0,
        title: 'ONITO —> Frontend Developer (Full Time)',
        country:"India",
        workingTime:"8 August 2022 to 12 march 2024",
        point1:"Do The Project With Strong Backend Communication and Complete All Task Given.",
        point2:"Debug To The Many Error and bugs To The Exist Project And Solving It.",
        point3:"Add 90+ Features And Update To The Exist Features When Needed.",
        point4:"Have Proper Github usage and make secure or working with team.",
        point5:"Made A New Project And Complete All Of Features With Backend Communication",
        point6:"Working Many Forms AND Handle The Focus System By Manually With UseRef.",
        point7:"Proper FIle Structure And Readable Code Quality",
        skill:"ReactJs, NextJs, Vite, Github, Material Ui, Redux, Rtk Query, Typescript, React-hook-form, Formik Form, Other Frontend Package need..."
    },
    {
        id: 1,
        title: 'OKLI PVT LTD. —> Frontend Developer (internship)',
        country:"India",
        workingTime:"1 July 2022 to 2 august 2022",
        point1:"Making A New Project and integrating animation UI",
        point2:"Add 10+ Features And Good Quality Code",
        point3:"Intricate Backend API with frontEnd and made workable ",
        point4:"A Proper Register, Login and Reset Password are made Customized",
        point5:"Complete All Of Features With Backend Communication",
        point6:"have Proper Github usage and make secure or working with team.",
        skill:"ReactJs, Tailwind, Redux, Javascript, React hook form, PReactJs , Other Frontend Package need..."
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
