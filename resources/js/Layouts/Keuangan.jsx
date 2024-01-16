import Table from "@/Components/Table";

const tabs = [
    {
        label: "All",
        value: "All",
    },
    {
        label: "Terima",
        value: "Terima",
    },
    {
        label: "Tolak",
        value: "Tolak",
    },
    {
        label: "Pending",
        value: "Pending",
    },
];
const tableHead = ["Tanggal", "Kategori", "Nominal", "Status", "Bukti"];
const tableRows = [
    {
        id: 1,
        tanggal_transaksi: "23/12/2023",
        kategori: "Kas",
        nominal: "Rp10.000",
        status: "Terima",
    },
    {
        id: 2,
        tanggal_transaksi: "23/12/2023",
        kategori: "Kas",
        nominal: "Rp10.000",
        status: "Terima",
    },
    {
        id: 3,
        tanggal_transaksi: "23/12/2023",
        kategori: "Kas",
        nominal: "Rp10.000",
        status: "Terima",
    },
    {
        id: 4,
        tanggal_transaksi: "23/12/2023",
        kategori: "Kas",
        nominal: "Rp10.000",
        status: "Tolak",
    },
    {
        id: 5,
        tanggal_transaksi: "23/12/2023",
        kategori: "Kas",
        nominal: "Rp10.000",
        status: "Pending",
    },
    {
        id: 6,
        tanggal_transaksi: "23/12/2023",
        kategori: "Acara",
        nominal: "Rp10.000",
        status: "Terima",
    },
];
export default function Keuangan() {
    return (
        <Table
            title="Keuangan"
            desc="Seluruh Keuangan Kamu Dapat Dilihat DiSini"
            tabs={tabs}
            tableHead={tableHead}
            tableRows={tableRows}
        />
    );
}
