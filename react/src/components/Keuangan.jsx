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
const tableHead = ["Tanggal", "Kategori", "Nominal", "Status", "image"];
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
import axiosClient from '../axios.js'
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

export default function Keuangan() {
  let currentDate = format(new Date(), 'yyyy-mm-dd');
  console.log(currentDate);

  const { currentUser } = useStateContext();
  const [isInput, setIsInput] = useState("Input");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(!open);
  };

  const [inputan, setInput] = useState({
    nip: '111',
    jenis_transaksi: isInput,
    kategori_transaksi: "",
    tanggal_transaksi: currentDate,
    jumlah: '',
    image: null,
    image_url: null,
    status: 'pending',
  });

  const onImageChoose = (ev) => {
    const file = ev.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setInput({
        ...inputan,
        image: file,
        image_url: reader.result,
      });

      ev.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = { ...inputan };
    if (payload.image) {
      payload.image = payload.image_url
    }
    delete payload.image_url;
    axiosClient.post('transaksi', payload).then((res) => {
      console.log(res);
      navigate('/keuangan')
    });

  };

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
        <form action="#" method="POST" onSubmit={onSubmit}>
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
              <Input label="Kas/Penjualan/Acara" size="lg" type="text" value={inputan.kategori_transaksi} onChange={(ev) => setInput({ ...inputan, kategori_transaksi: ev.target.value })}
                required />
              <Typography className="-mb-2" variant="h6">
                Nominal
              </Typography>
              <Input label="10000" size="lg" type="number" value={inputan.jumlah} onChange={(ev) => setInput({ ...inputan, jumlah: ev.target.value })} required />
              <Typography className="-mb-2" variant="h6">
                image
              </Typography>
              <Typography
                as="a"
                variant="small"
                color="red"
                className="ml-1 font-bold"
              >
                File dalam bentuk .PDF
              </Typography>
              <button
                type="button"
                className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <input
                  type="file"
                  className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                  onChange={onImageChoose}
                />
                Change
              </button>
              <Typography className="text-center">
                {inputan.image ? inputan.image.name : ''}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth type="submit">
                Simpan
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </div>
  );
}
