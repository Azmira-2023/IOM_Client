

const ClassRoutine = () => {
  return (
    <div className="container mx-auto">
    <h2 className="text-2xl font-bold mb-4">Islamic Online Madrasah All Batch Routine</h2>
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2"></th>
          <th className="px-4 py-2">Saturday</th>
          <th className="px-4 py-2">Sunday</th>
          <th className="px-4 py-2">Monday</th>
          <th className="px-4 py-2">Tuesday</th>
          <th className="px-4 py-2">Wednesday</th>
          <th className="px-4 py-2">Thursday</th>
          <th className="px-4 py-2">Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">After Magrib 6:00 PM Salah</td>
          <td className="border px-4 py-2" colSpan="7">Talim Class</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">9:00 PM to 10:00 PM</td>
          <td className="border px-4 py-2" colSpan="7">Batch: 2411 TAJ101 Mawlana Mamunur Rashid</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">10:00 PM to 11:00 PM</td>
          <td className="border px-4 py-2">Batch: 2411 AQD101 Mufti Abdul Wahid</td>
          <td className="border px-4 py-2">Batch: 2411 DNS 101 Marsus, Jubaer, Arman</td>
          <td className="border px-4 py-2">Batch: 2411 ATI101 Mawlana Rahat</td>
          <td className="border px-4 py-2">Batch: 2411 FQH101 Mufti Abdul</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2"></td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default ClassRoutine