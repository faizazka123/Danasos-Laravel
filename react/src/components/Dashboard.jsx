import chartConfig from "../assets/chartConfig";
import AccTab from "../assetComponents/AccTab";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useStateContext } from "../contexts/ContextProvider";

export default function Dashboard() {
  const { currentUser } = useStateContext();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 mt-4 mx-10 w-auto">
        <div className="shadow-xl rounded-lg p-4">
          <div className="float-left">
            <AccTab
              title={"Jumlah Keuangan"}
              color={"green"}
              jumlah={"Rp.10.000.000"}
            />
          </div>
          <div className="float-right ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 512 512"
            >
              <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
            </svg>
          </div>
        </div>
        <div className="shadow-xl rounded-lg p-4">
          <div className="float-left">
            <AccTab
              title={"Pemasukan Tahun Ini"}
              color={"green"}
              jumlah={"Rp.30.000.000"}
            />
          </div>
          <div className="float-right ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 576 512"
            >
              <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
            </svg>
          </div>
        </div>
        <div className="shadow-xl rounded-lg p-4">
          <div className="float-left">
            <AccTab
              title={"Pengeluaran Tahun Ini"}
              color={"red"}
              jumlah={"Rp.20.000.000"}
            />
          </div>
          <div className="float-right ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 576 512"
            >
              <path d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM128 416H64V352c35.3 0 64 28.7 64 64zM64 224V160h64c0 35.3-28.7 64-64 64zM448 352c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM384 256c0 61.9-43 112-96 112s-96-50.1-96-112s43-112 96-112s96 50.1 96 112zM252 208c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z" />
            </svg>
          </div>
        </div>
        <div className="shadow-xl rounded-lg p-4">
          <div className="float-left">
            <AccTab
              title={currentUser.name}
              color={"gray"}
              jumlah={currentUser.role}
            />
          </div>
          <div className="float-right ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 448 512"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-7 mt-10 lg:px-20 sm:grid-cols-1 lg:w-full sm:w-1/3 sm:px-10">
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="mx-auto">
              <Typography variant="h4" color="blue-gray">
                Pemasukkan Pertahun
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="px-2 pb-0">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="mx-auto">
              <Typography variant="h4" color="blue-gray">
                Pemasukkan Pertahun
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="px-2 pb-0">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="mx-auto">
              <Typography variant="h4" color="blue-gray">
                Pemasukkan Pertahun
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="px-2 pb-0">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="mx-auto">
              <Typography variant="h4" color="blue-gray">
                Pemasukkan Pertahun
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="px-2 pb-0">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
      </div>
    </>
  );
}
