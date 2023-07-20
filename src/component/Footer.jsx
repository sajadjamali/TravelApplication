const img2 = new URL('../assets/imgs/img2.PNG', import.meta.url);
const img50 = new URL('../assets/imgs/img50.PNG', import.meta.url);
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="my-8"  style={{direction: "rtl"}}>
            <img className="w-full" src={img50} alt="not found" />
            <div id="footer" className="bg-gray-200 py-4 veryExtraLargeMobile:flex veryExtraLargeMobile:flex-row-reverse veryExtraLargeMobile:items-center veryExtraLargeMobile:pt-0 veryExtraLargeMobile:pe-3">
                <div className="veryExtraLargeMobile:w-4/12">
                    <div>
                        <img className="m-auto" src={img2} alt="not found" />
                        <p className="font-bold text-xl mt-2 mb-3 text-center">ما همه <span className="text-red-800 text-2xl">❤</span> سفریم</p>
                    </div>
                    <p className="px-4 text-gray-700 text-justify">
                 ایران بین یک همراه رایگان و جامع است که سعی دارد تا دغدغه های یک سفر را به حداقل رسانده و سفری خاطره انگیز را برای همراهان خود به ارمغاد آورد.
                 نقشه گردشگری وبسایت ایرانسفر در کنار دیگر امکانات و فناوری های کارآمد آن
                    .بخش کوچکی از خدمات این وبسایت فوق العاده می باشد که آن را به یکی از بهترین پلتفرم های گردشگری تبدیل کرده است
                    </p>
                </div>
                <div className="veryExtraLargeMobile:w-8/12">
                <div className="mt-4 grid smallMobile:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-3 grid justify-center border-t border-slate-950 py-4 veryExtraLargeMobile:border-none veryExtraLargeMobile:items-center">
                        <p><Link>خرید بلیط هواپیما</Link></p>
                        <p><Link>رزرو هتل</Link></p>
                        <p><Link>تورهای مسافرتی</Link></p>
                        <p><Link>بلیط قطار</Link></p>
                        <p><Link>بلیط اتوبوس</Link></p>
                    </div>
                    <div className="space-y-3 grid justify-center border-t border-slate-950 py-4 veryExtraLargeMobile:border-none veryExtraLargeMobile:items-center">
                        <p><Link>جاذبه های گردشگری تهران</Link></p>
                        <p><Link>جاذبه های گردشگری مازندران</Link></p>
                        <p><Link>جاذبه های گردشگری کیش</Link></p>
                        <p><Link>جاذبه های گردشگری استانبول</Link></p>
                        <p><Link>جاذبه های گردشگری قشم</Link></p>
                    </div>
                    <div className="space-y-3 grid justify-center border-t border-slate-950 py-4 veryExtraLargeMobile:border-none veryExtraLargeMobile:items-center">
                        <p><Link>رزرو هتل تهران</Link></p>
                        <p><Link>رزرو هتل مشهد</Link></p>
                        <p><Link>رزرو هتل کیش</Link></p>
                        <p><Link>رزرو هتل اصفهان</Link></p>
                        <p><Link>رزرو هتل شیراز</Link></p>
                    </div>
                    <div className="space-y-3 grid justify-center border-t border-slate-950 py-4 veryExtraLargeMobile:border-none veryExtraLargeMobile:items-center">
                        <p><Link>تورهای یک روزه</Link></p>
                        <p><Link>تور طبیعت گردی</Link></p>
                        <p><Link>تور داخلی</Link></p>
                        <p><Link>تور روان درمانی</Link></p>
                        <p><Link>تور خارجی</Link></p>
                    </div>
                    </div>
                    <p className="px-2 border-t border-slate-950 py-4 veryExtraLargeMobile:border-none text-gray-700 text-center">تمامی حقوق و محتوای وب سایت متعلق به ایران بین می باشد.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;