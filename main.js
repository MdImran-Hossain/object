const myObject={
    firstName: "Md Imran",
    lastName:"Hossain",
    batch:"MERN 2403",
    fullName: function(){
        return this.firstName+" "+this.lastName
    },
    Object:{
        name: "John",
        age: 30,
        city: "New York"
    },
    cit:{
        name:"Creative IT Institute",
        totalDepartment:7,
        department:["Graphic & Multimedia","Web & Software","Digital Marketing","3D Animation & Visualization","Cyber Security","Networking Technology","Film & Media"]
    },
    graphicAndMultimedia:{
        graphicAndMultimediaTotalDepartment:8,
        departmentHead:"Shohidur Rahmon",
        departmentAre:["Professional Graphic Design","Motion Graphics","UX/UI Design","Digital Image Editing","Adobe Photoshop","Adobe Illustrator","Digital Product Design","Diploma in Graphics & Animation"]
    },
    webANdSoftware:{
        totalDepartment:7,
        departmentHead:"Shohan Hossain Ean",
        departmentAre:["MERN Stack Development","App Development With Kotlin","Python Django","Python Machine Learning","Front-End Development with React","Web Development With PHP Laravel and VUE","Diploma in Full Stack Development"]
    }
}

console.log(myObject);