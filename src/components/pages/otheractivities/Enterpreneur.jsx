import images from "../../../assets/images.jpg";

const Enterpreneur = () => {
  return (
    <div className="p-12 mt-8 max-w-6xl mx-auto bg-gray-100">
      <h1 className="text-2xl text-rose-900 text-center font-bold">
        Enterpreneurship Club
      </h1>
      <p className="text-xl text-center">Islamic Uddokta Club (IUC) </p>
      <div className="flex justify-center items-center mt-8 ">
        <img src={images} alt="" />
      </div>
    </div>
  )
}

export default Enterpreneur