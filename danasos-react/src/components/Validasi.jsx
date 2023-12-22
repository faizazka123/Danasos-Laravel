const tableHead = ["Tanggal", "Kategori", "Nominal", "Bukti", "Aksi"];
const tableBody = [
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    bukti: "link",
  },
  {
    bulan: "12/04/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    bukti: "link",
  },
];
export default function Validasi() {
  return (
    <>
      <div className="m-10 p-4 shadow-2xl w-full sm:w-fit">
        <div className="border-none rounded-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-col">
              <div className="text-2xl text-blueGray">
                <b>Validasi</b>
              </div>
              <div className="mt-2 text-gray-600">
                Seluruh Keuangan Yang Berstatus &quot;Pending&quot;
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
            <table className="table-fixed w-full text-center">
              <thead className="text-gray-500 bg-gray-300 border-y-2">
                <tr className="border border-gray-300 h-10">
                  {tableHead.map((item) => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableBody.map(({ bulan, kategori, nominal, bukti }) => (
                  <tr key={bulan} className="border border-gray-300 h-12">
                    <td>{bulan}</td>
                    <td>{kategori}</td>
                    <td>{nominal}</td>
                    <td>{bukti}</td>
                    <td className="flex justify-center my-2">
                      <button className="flex flex-row items-center border rounded-md pt-1 px-2 bg-lime-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="14"
                          viewBox="0 0 448 512"
                          className="me-2"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        Validasi
                      </button>
                    </td>
                  </tr>
                ))}
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
