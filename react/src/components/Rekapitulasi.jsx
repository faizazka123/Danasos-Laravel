import PercobaanTable from "../components/PercobaanTable";
import { useStateContext } from "../contexts/ContextProvider";
const tabs = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Kas",
    value: "Kas",
  },
  {
    label: "Penjualan",
    value: "Penjualan",
  },
  {
    label: "Acara",
    value: "Acara",
  },
];
const tableHead = ["Tanggal", "Kategori", "Nominal"];
const tableRows = [
  {
    id: 1,
    tanggal: "23/12/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "Terima",
  },
  {
    id: 2,
    tanggal: "23/12/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "Terima",
  },
  {
    id: 3,
    tanggal: "23/12/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "Terima",
  },
  {
    id: 4,
    tanggal: "23/12/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "Tolak",
  },
  {
    id: 5,
    tanggal: "23/12/2023",
    kategori: "Kas",
    nominal: "Rp10.000",
    status: "Pending",
  },
  {
    id: 6,
    tanggal: "23/12/2023",
    kategori: "Acara",
    nominal: "Rp10.000",
    status: "Terima",
  },
];
// eslint-disable-next-line react/prop-types
export default function Rekapitulasi() {
  const { currentUser } = useStateContext();

  return (
    <div className="mt-4 mx-10">
      <PercobaanTable
        judul={"Rekapitulasi"}
        subJudul={"Hasil Rekapitulasi"}
        tabs={tabs}
        tableHead={tableHead}
        tableRows={tableRows}
        download={true}
        penginputan={false}
        pengoutputan={false}
      />
    </div>
  );
}
