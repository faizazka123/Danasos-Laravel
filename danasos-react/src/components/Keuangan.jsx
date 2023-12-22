const tableHead = ["Tanggal", "Kategori", "Nominal", "Status", "Bukti"];
const tableBody = [
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "PENDING",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "PENDING",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "TERIMA",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "TERIMA",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "TERIMA",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "TOLAK",
    bukti: "link",
  },
];
export default function Keuangan() {
  return (
    <>
      <div className="m-10 p-4 shadow-2xl w-full sm:w-fit">
        <div className="border-none rounded-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-col">
              <div className="text-2xl text-blueGray">
                <b>Transaksi</b>
              </div>
              <div className="mt-2 text-gray-600">
                History Transaksi Keuangan
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
                  ({ bulan, kategori, nominal, status, bukti }) => (
                    <tr key={bulan} className="border border-gray-300 h-12">
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
