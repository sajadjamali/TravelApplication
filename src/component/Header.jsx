const img1 = new URL('../assets/imgs/img1.PNG', import.meta.url);
const img2 = new URL('../assets/imgs/img2.PNG', import.meta.url);
const img3 = new URL('../assets/imgs/img3.PNG', import.meta.url);

import Modal from "./Modal";
import { Link } from "react-router-dom";

let flag = false;

const Header = () => {

   const handleDarkMode = (e) => {
    flag = !flag;
    if (flag === false)
    document.getElementById("darkModeBtn").title = "light mode!"
    else
    document.getElementById("darkModeBtn").title = "dark mode!"
    let paragraphs = document.querySelectorAll('p');
    document.getElementById('travelPlanBtn').classList.toggle("text-white");
    for (var i = 0; i < paragraphs.length; ++i) {
        paragraphs[i].classList.toggle("text-white");
    }
    document.getElementById("search").classList.toggle("text-white");
    document.getElementById("footer").classList.toggle("bg-slate-950");
    document.body.classList.toggle("bg-slate-950");
    e.target.classList.toggle("text-yellow-500");
    }

    return (
        <>
        <section className="flex justify-center items-center">
        <img className="m-auto h-20" src={img1} alt="not found"/>
        <Link style={{color: "#33A1FA"}}  
        className="font-bold absolute bg-white p-3 rounded-full sm:right-52 lg:right-96">!در مسابقات شرکت کن</Link>
        </section>
        
       <section className="my-6 sm:my-7 py-2 space-y-6 sm:flex flex-row-reverse justify-evenly items-center sm:space-y-0">
        <div><img className="m-auto" src={img2} alt="not found" /></div>
        <div><img className="m-auto" src={img3} alt="not found" /></div>
        <div id="modalParent" className="flex justify-center space-x-4 items-center">
            <button id="darkModeBtn" title="light mode!" onClick={handleDarkMode}><i className="bi bi-sun-fill text-4xl text-gray-500"></i></button>
            <Modal />
            <Link style={{backgroundColor: "#33A1FA"}} className="font-bold text-xl text-white py-2 px-5 rounded-3xl">عضویت</Link>
        </div>
       </section>
       </>
    );
}

export default Header;