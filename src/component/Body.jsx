const img4 = new URL('../assets/imgs/img4.PNG', import.meta.url);
const img5 = new URL('../assets/imgs/img5.PNG', import.meta.url);
const img6 = new URL('../assets/imgs/img6.PNG', import.meta.url);
const img7 = new URL('../assets/imgs/img7.PNG', import.meta.url);
const img8 = new URL('../assets/imgs/img8.PNG', import.meta.url);
const img9 = new URL('../assets/imgs/img9.PNG', import.meta.url);
const img10 = new URL('../assets/imgs/img10.PNG', import.meta.url);
const img11 = new URL('../assets/imgs/img11.PNG', import.meta.url);
const img12 = new URL('../assets/imgs/img12.PNG', import.meta.url);
const img13 = new URL('../assets/imgs/img13.PNG', import.meta.url);
const img14 = new URL('../assets/imgs/img14.PNG', import.meta.url);
const img15 = new URL('../assets/imgs/img15.PNG', import.meta.url);
const img16 = new URL('../assets/imgs/img16.PNG', import.meta.url);
const img17 = new URL('../assets/imgs/img17.PNG', import.meta.url);

import ShowProvince from "./ShowProvince";
import { Link } from "react-router-dom";
import { handleClick } from "./Modal";

const Body = () => {
    return (
        <>
        <img className="mt-4 w-full" src={img4} alt="not found" />

        <section className="my-8 text-center largeMobile:mt-4">
            <div className="space-y-6 space-x-5 px-3 mb-8">
                <button id="travelPlanBtn" className="text-gray-500 bg-transparent border border-gray-400 rounded-full px-4 py-2 font-bold md:text-xl md:px-5 md:py-3">برنامه سفر درون شهری</button>
                <button className="text-white bg-green-500 rounded-full px-4 py-2 font-bold md:text-xl md:px-5 md:py-3">برنامه ریز سفر</button>
            </div>
            <div className="bg-transparent border-2 shadow-2xl rounded-3xl mt-8 pt-3 pb-7 m-auto md:flex flex-row-reverse justify-between items-center px-6 largeMobile:rounded-full lg:w-10/12">
                <div className="space-y-5 space-x-10 largeMobile:flex justify-evenly largeMobile:space-y-0">
                <div>
                    <p className="font-bold text-xl">انتخاب مقصد</p>
                    <p className="mt-2 font-bold text-gray-600">به کجا سفر میکنید؟</p>
                </div>
                <div>
                    <p className="font-bold text-xl">تعداد روز</p>
                    <p className="mt-2 font-bold text-gray-600">سفرت چند روزه هست؟</p>
                </div>
                </div>
                <button onClick={handleClick} className="mt-9 md:mt-5">
                <i style={{backgroundColor: "#17BDD5"}} className="bi bi-search text-3xl text-white pt-2 px-3 rounded-full"></i>
                </button>
            </div>
        </section>

        <section>
            <header className="flex flex-row-reverse justify-center items-center gap-4 text-gray-600">
                <img src={img5} alt="not found" />
                <p className="font-bold text-2xl">مقاصد پرطرفدار</p>
            </header>
            <div className="mt-7 grid justify-items-center gap-3 px-4 largeMobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <Link>
                    <img src={img6} alt="not found" />
                    <p className="mt-2 text-center font-bold text-xl text-gray-700">کیش</p>
                    </Link>
                    <Link>
                    <img src={img7} alt="not found" />
                    <p className="mt-2 text-center font-bold text-xl text-gray-700">تهران</p>
                    </Link>
                    <Link>
                    <img src={img8} alt="not found" />
                    <p className="mt-2 text-center font-bold text-xl text-gray-700">قشم</p>
                    </Link>
                    <Link>
                    <img src={img9} alt="not found" />
                    <p className="mt-2 text-center font-bold text-xl text-gray-700">شیراز</p>
                    </Link>
                    <Link>
                    <img src={img10} alt="not found" />
                    <p className="mt-2 text-center font-bold text-xl text-gray-700">اصفهان</p>
                    </Link>
            </div>
        </section>

        <section>
            <header className="flex flex-row-reverse justify-center items-center gap-3 text-gray-600 largeMobile:text-2xl">
                <img src={img5} alt="not found" />
                <p className="font-bold">سفر تو چه سبکی دوست داری؟</p>
            </header>
            <div className="my-8 grid grid-cols-2 justify-items-center px-4 gap-x-2 gap-y-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
                <Link>
                  <img src={img11} alt="not found" />
                </Link>
                <Link>
                  <img src={img12} alt="not found" />
                </Link>
                <Link>
                  <img src={img13} alt="not found" />
                </Link>
                <Link>
                  <img src={img14} alt="not found" />
                </Link>
                <Link>
                  <img src={img15} alt="not found" />
                </Link>
                <Link>
                  <img src={img16} alt="not found" />
                </Link>
                <Link>
                  <img src={img17} alt="not found" />
                </Link>
            </div>
        </section>

        <ShowProvince />
        </>
    );
} 

export default Body;