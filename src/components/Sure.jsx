import handleToggle from "@/utils/haptics";
function Sure({show,setShow,deletechat,chatid}) {
    console.log(chatid);
  return (
    <div className= {`${show ? "flex":"hidden"} fixed z-50 inset-0 bg-black/10`}>
      <div className="flex flex-col gap-2 bg-linear-to-br from-black h-fit to-sky-800 border border-gray-500   justify-center w-full rounded-lg p-4">
        <h1 className="text-xl text-center ">
          <span className="text-sky-500">
            <span className="text-2xl">A</span>
            re
          </span>{" "}
          you Sure ,<span className="text-red-500"> DELETE </span>
          studio
          <br />
          <br />
          <p className="text-sm font-light text-gray-300">
            ( The conversation will be
            <span className="text-red-500"> deleted permanently</span>)
          </p>
        </h1>
        <div className="flex w-full gap-2 justify-around mt-4">
          <button onClick={()=>{handleToggle(); setShow(false)}} className="px-3 py-2 rounded-lg text-xl shadow-2xl bg-linear-to-b duration-300 from-green-800 border to-teal-900/60 w-full border-green-900 cursor-pointer hover:scale-105 active:scale-90">
            Cancel
          </button>
          <button onClick={()=>{deletechat(chatid);handleToggle();setShow(false)}} className="px-3 py-2 rounded-lg text-xl shadow-2xl bg-linear-to-b duration-300 from-red-800 border to-red-900/60 w-full border-red-900 cursor-pointer hover:scale-105 active:scale-90">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sure;
