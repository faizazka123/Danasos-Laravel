import PercobaanTable from "../components/PercobaanTable";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
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
import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";

export default function Keuangan() {
  const { currentUser } = useStateContext();

  const [inputanKategori, setInputanKategori] = useState("");
  const [inputanNominal, setInputanNominal] = useState("");
  const [inputanFile, setInputanFile] = useState("");

  const [isInput, setIsInput] = useState("Input");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  // kalau mau make
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const url = 'http://localhost:3000/uploadFile';
  //   const formData = new FormData();
  //   formData.append('Kategori', inputanKategori);
  //   formData.append('Nominal', inputanNominal);
  //   formData.append('file', file);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     },
  //   };
  //   axios.post(url, formData, config).then((response) => {
  //     console.log(response.data);
  //   });

  // }

  return (
    <div className="mt-4 mx-10">
      <PercobaanTable
        judul={"Keuangan"}
        subJudul={"Penginputan Keuangan Kamu"}
        tabs={tabs}
        tableHead={tableHead}
        tableRows={tableRows}
        download={false}
        penginputan={true}
        pengoutputan={true}
        handleOpen={handleOpen}
        handleIsInput={setIsInput}
      />
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              {isInput}
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Masukkan Data Keuangan Dibawah Ini!
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Kategori
            </Typography>
            <Input label="Kas/Penjualan/Acara" size="lg" type="text" value={inputanKategori}onChange={e => setInputanKategori(e.target.value)}
            required />
            <Typography className="-mb-2" variant="h6">
              Nominal
            </Typography>
            <Input label="10000" size="lg" type="number" value={inputanNominal}onChange={e => setInputanNominal(e.target.value)} required />
            <Typography className="-mb-2" variant="h6">
              Bukti
            </Typography>
            <Typography
              as="a"
              variant="small"
              color="red"
              className="ml-1 font-bold"
            >
              File dalam bentuk .PDF
            </Typography>
            <Input label="File" size="lg" type="file" multiple accept="image/jpg, image/png" onChange={e => setInputanFile(e.target.files[0].name)} required />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Simpan
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}
