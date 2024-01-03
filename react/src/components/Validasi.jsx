import PercobaanTable from "../components/PercobaanTable";
import {
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
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
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";

export default function Validasi() {
  const { currentUser } = useStateContext();

  const [isTerima, setIsTerima] = useState("Terima");
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setOpen(!open);
    setIsTerima(e);
  };

  return (
    <div className="mt-8 mx-10">
      <PercobaanTable
        judul={"Validasi"}
        subJudul={"Validasi Keuangan Pending"}
        tabs={tabs}
        tableHead={tableHead}
        tableRows={tableRows}
        download={false}
        penginputan={false}
        pengoutputan={false}
        handleOpen={handleOpen}
      />

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Pemberitahuan!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <Typography
            color={isTerima === "Terima" ? "green" : "red"}
            variant="h4"
          >
            Apakah Anda Yakin Ingin {isTerima} ?
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Batalkan
          </Button>
          <Button
            variant="gradient"
            onClick={handleOpen}
            color={isTerima === "Terima" ? "green" : "red"}
          >
            {isTerima}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
