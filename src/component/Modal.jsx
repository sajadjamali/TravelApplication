const Modal = () => {

    return (
        <>
        <button onClick={handleClick} id="myBtn"><i id="search" className="bi bi-search text-3xl text-gray-500"></i></button>
        <div style={{backgroundColor: "rgba(0,0,0,0.7)"}} id="myModal" className="w-full h-full overflow-auto fixed hidden pt-36 left-0 top-0">
            <div style={{direction: "rtl"}} className="text-center bg-white py-3 rounded-3xl m-auto relative w-11/12 sm:w-8/12 lg:w-6/12 xl:w-4/12 modal-content">
                <button className="font-bold text-5xl hover:text-red-800 close">&times;</button>
                <input type="text" placeholder="عبارت مورد نظر را جست و جو کنید..." className="block border border-black rounded-3xl m-auto w-10/12 h-12" />
                <button className="bg-red-500 text-white mt-3 p-4 rounded-full">جست و جو</button>                 
            </div>
        </div>
        </>
    );
}


const handleClick = () =>{
    let element = document.getElementById("modalParent");
    let modal = document.getElementById("myModal");
    let closeBtn = document.getElementsByClassName("close")[0];
    element.classList.remove("space-x-4");
    modal.style.display = "block";
    closeBtn.onclick = function() {
        modal.style.display = "none";
        element.classList.add("space-x-4");
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            element.classList.add("space-x-4");          
        }    
    }
}



export {handleClick};
export default Modal;