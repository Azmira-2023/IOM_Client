

const FatwaBoard = () => {
  return (
    <div className="mt-4 p-6 sticky top-0">
    <div className="border rounded-lg bg-gray-100 shadow-md">
      <h2 className="text-center uppercase text-lg bg-teal-800 text-white font-semibold py-2 rounded-t-lg">
      Fatwa Board 
      </h2>
      <p className="text-lg text-center">Ifta Department, IOM </p>
      <div className="p-2 space-y-6">
        <p className="bg-white">
        Ifatwa is one of the reliable fatwa related sites in Bangladesh. That is IOM Managed by its Ifta department. The best means of asking questions and acquiring knowledge is directly from the mufti Asking the question to the Saheb where the questioner has an opportunity to know and understand the question in detail. This site is for those who have few such opportunities. Also because of the vagueness of the questioner's question due to the multiple narrations of the Qur'an and Hadith on the subject, sometimes some answers may differ. so any don't take big decision based on this site but contact mufti sahib directly is good. 
        </p>
          </div>
     
        <div className="p-2 flex justify-center">
            <button className="rounded bg-teal-800 text-white py-2 px-4">All Notice</button>
          </div>
        </div>
        </div>
  )
}

export default FatwaBoard