import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";

export default function Profile() {
  const { currentUser } = useStateContext();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="bg-gray-100 mb-12 rounded-x">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-3xl mx-auto mt-3 shadow-xl">
          <div className="mt-2 py-5 sm:px-6">
            <div className="mt-5 border-b-4 border-yellow-300 rounded-lg"></div>
            <div className="mt-4 max-w-l mx-auto bg-white overflow-hidden md:max-w-2xl">
              <div className="grid grid-cols-8">
                <div className="w-20 col-span-1">
                  <div className="flex p-3 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      width="28"
                      viewBox="0 0 448 512"
                    >
                      <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                    </svg>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="md:flex-shrink-0 p-3 px-5">
                    <h3 className="text-lg text-left leading-3 font-medium text-gray-900">
                      {currentUser.name}
                    </h3>
                    <p className="mt-1 text-left text-sm text-yellow-500 justify-center">
                      bergabung sejak ----
                    </p>
                  </div>
                </div>
                <div className="w-20 col-span-1">
                  <div className="flex p-3 items-center justify-center">
                    <button
                      className="hover:text-yellow-300 "
                      aria-label="logout"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="32"
                        viewBox="0 0 512 512"
                      >
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 ">
            <div className=" bg-gray-100 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-1 px-4 py-5 sm:gap-1">
              <div className="mt-4 text-center sm:mt-1 sm:col-span-2">
                <div className="shadow-2xl max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-4xl">
                  <div className="md:flex">
                    <div className="p-9">
                      <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">
                        {currentUser.name}
                      </div>
                      <a
                        href="#"
                        className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                      >
                        {currentUser.role}
                      </a>
                      <div className="mt-5 border-b-4 border-gray-300 rounded-lg"></div>
                      <p className="mt-2 text-gray-500 text-justify">
                        Tionida, a quiet artist, painted the world with emotions
                        rather than colors. In her tiny studio, whispers of
                        dreams echoed against canvas. Her brush danced
                        gracefully, translating heartaches into masterpieces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-4 text-center sm:mt-1 sm:col-span-1">
                <div className="shadow-2xl max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-64 rounded-xl w-full object-cover md:w-48"
                        src="https://placekitten.com/200/200"
                        alt="Gambar Card"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 px-5 py-8">
            <div className="mt-4 text-center sm:mt-1 sm:col-span-2">
              <div className="shadow-2xl max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-4xl">
                <div className="md:flex">
                  <div className="p-9">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                      Kelompok Bidang Keahlian
                    </h3>
                    <div className="mt-5 border-b-4 border-gray-300 rounded-lg"></div>
                    <div className="mt-3 text-sm text-gray-500 text-left">
                      <ul className="list-disc list-inside">
                        <li>Data Engineering</li>
                        <li>Data Mining</li>
                        <li>Artificial Intelligence</li>
                        <li>Cybersecurity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center sm:mt-1 sm:col-span-1">
              <div className="mt-3 p-1 sm:px-6 text-center sm:col-span-1">
                <button className="w-full shadow-xl bg-pink-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-lg">
                  <a href="#tambahdosen" onClick={() => handleOpen(true)}>
                    Tambah User
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Tambah User
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Masukkan Data Diri Dibawah Ini!
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Nama
            </Typography>
            <Input label="Siapa ya" size="lg" type="text" required />
            <Typography className="-mb-2" variant="h6">
              Email
            </Typography>
            <Input label="example@gmail.com" size="lg" type="email" required />
            <Typography className="-mb-2" variant="h6">
              Jabatan
            </Typography>
            <Select label="Jabatan">
              <Option>Bendahara</Option>
              <Option>Admin</Option>
              <Option>User</Option>
            </Select>
            <Typography className="-mb-2" variant="h6">
              Gambar
            </Typography>
            <Typography
              as="a"
              variant="small"
              color="red"
              className="ml-1 font-bold"
            >
              File dalam bentuk .JPG/.JPEG/.PNG
            </Typography>
            <Input label="File" size="lg" type="file" required />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Simpan
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
