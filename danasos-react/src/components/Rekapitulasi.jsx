const tableHead = [
  "Dosen",
  "Tanggal",
  "Kategori",
  "Nominal",
  "Status",
  "Bukti",
];
const tableBody = [
  {
    dosen: "Mutia Sari Zulvi",
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "TERIMA",
    bukti: "link",
  },
  {
    dosen: "Mutia Sari Zulvi",
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "TERIMA",
    bukti: "link",
  },
  {
    dosen: "Mutia Sari Zulvi",
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "TERIMA",
    bukti: "link",
  },
];
export default function Rekapitulasi() {
  return (
    <>
      <div className="m-10 p-4 shadow-2xl w-full sm:w-fit">
        <div className="border-none rounded-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-col">
              <div className="text-2xl text-blueGray">
                <b>Rekapitulasi</b>
              </div>
              <div className="mt-2 text-gray-600">
                History Seluruh Keuangan Yang Telah Di Validasi
              </div>
            </div>
            <div className="my-auto sm:ml-auto">
              <div className="relative h-10 w-full flex flex-row">
                <label htmlFor="search" className="my-auto text-gray-700 me-3">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-72 h-10 p-3 rounded-lg border-solid border-2 border-slate-400 focus:outline-none focus:border-slate-700 text-left "
                  id="search"
                />
              </div>
            </div>
            <div className="my-auto">
              <button
                type="submit"
                className="p-2 text-white bg-black-800 rounded-lg flex flex-row focus:outline-none focus:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                  className="m-1 me-2"
                >
                  <path
                    fill="#ffffff"
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                  />
                </svg>
                Download
              </button>
            </div>
          </div>
          <div className="mt-5 border-b-2 border-gray-300">
            <table className="table-fixed w-full text-center ">
              <thead className="text-gray-500 bg-gray-300 border-y-2">
                <tr className="border border-gray-300 h-10">
                  {tableHead.map((item) => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableBody.map(
                  ({ dosen, bulan, kategori, nominal, status, bukti }) => (
                    <tr key={bulan} className="border border-gray-300 h-12">
                      <td>{dosen}</td>
                      <td>{bulan}</td>
                      <td>{kategori}</td>
                      <td>{nominal}</td>
                      <td>
                        <span
                          className={
                            status == "TOLAK"
                              ? "border rounded-md px-4 bg-red-300 text-red-600 font-semibold text-sm"
                              : status == "PENDING"
                              ? "border rounded-md px-4 bg-orange-300 text-orange-600 font-semibold text-sm"
                              : "border rounded-md px-4 bg-green-300 text-green-600 font-semibold text-sm"
                          }
                        >
                          {status}
                        </span>
                      </td>
                      <td>{bukti}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between ">
            <button className="border rounded-md px-3 py-1 hover:shadow-xl">
              Previous
            </button>
            <div className="flex items-center gap-5">
              <button className="text-sm border rounded-md px-3 py-1">1</button>
              <button className="text-sm">2</button>
              <button className="text-sm">3</button>
              <button className="text-sm">...</button>
              <button className="text-sm">8</button>
              <button className="text-sm">9</button>
              <button className="text-sm">10</button>
            </div>
            <button className="border rounded-md px-3 py-1 hover:shadow-xl">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
