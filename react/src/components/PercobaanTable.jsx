/* eslint-disable react/prop-types */
import {
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import ExcelExport from "../assetComponents/ExcelExport";

export default function PercobaanTable({
  judul,
  subJudul,
  tabs,
  tableHead,
  tableRows,
  download,
  penginputan,
  pengoutputan,
  handleOpen,
  handleIsInput,
}) {
  let data;
  if (download) {
    data = tableRows.filter((a) => a.status === "Terima");
  } else if (!download && !penginputan) {
    data = tableRows.filter((a) => a.status === "Pending");
  } else {
    data = tableRows;
  }
  // kategori
  const [kategori, setKategori] = useState("All");
  const [itemShow, setItemShow] = useState(data);
  // Search
  const [search, setSearch] = useState("");
  // pagination
  const [active, setActive] = useState(1);

  const next = () => {
    if (active === jumlahPage) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const jumlahPerPage = 5;
  const jumlahPage = Math.ceil(itemShow.length / jumlahPerPage);
  const lastIndex = active * jumlahPerPage;
  const firstIndex = lastIndex - jumlahPerPage;
  const show = itemShow.slice(firstIndex, lastIndex);

  useEffect(() => {
    if (kategori === "All") {
      setItemShow(data);
      setActive(1);
    } else {
      if (download || (!download && !penginputan)) {
        setItemShow(data.filter((a) => a.kategori === kategori));
      } else {
        setItemShow(data.filter((a) => a.status === kategori));
      }
      setActive(1);
    }
    if (!(search === "")) {
      console.log(search);
      setItemShow(
        itemShow.filter((a) => a.status.toLowerCase().match(search.toLowerCase()))
      );
    }
  }, [kategori, search, itemShow]);

  // eslint-disable-next-line no-unused-vars
  const exportThis = itemShow.map(({ id, status, ...sisa }) => sisa);
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              {judul}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              {subJudul}
            </Typography>
          </div>
          <div className="flex flex-row gap-5">
            {download ? (
              <ExcelExport header={tableHead} body={exportThis} />
            ) : (
              ""
            )}
            {penginputan ? (
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={() => {
                  handleOpen(true);
                  handleIsInput("Input");
                }}
              >
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Input
                Keuangan
              </Button>
            ) : (
              ""
            )}
            {pengoutputan ? (
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={() => {
                  handleOpen(true);
                  handleIsInput("Output");
                }}
              >
                <ArrowUpTrayIcon strokeWidth={2} className="h-4 w-4" /> Output
                Keuangan
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="All" className="w-full md:w-max">
            <TabsHeader>
              {tabs.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setKategori(value)}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {show.map(({ id, tanggal, kategori, nominal, status }, index) => {
              const isLast = index === show.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tanggal}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {kategori}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nominal}
                    </Typography>
                  </td>
                  {penginputan || (!penginputan && !download) ? (
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "Terima"
                              ? "green"
                              : status === "Pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                  ) : (
                    ""
                  )}
                  {penginputan ? (
                    <td className={classes}>
                      <IconButton variant="text">
                        <InformationCircleIcon className="h-7 w-7" />
                      </IconButton>
                    </td>
                  ) : (
                    ""
                  )}
                  {!penginputan && !download ? (
                    <td className="w-52">
                      <Button
                        onClick={() => handleOpen("Terima")}
                        size="sm"
                        color="green"
                        variant="gradient"
                        className="me-3"
                      >
                        Terima
                      </Button>
                      <Button
                        onClick={() => handleOpen("Tolak")}
                        size="sm"
                        color="red"
                        variant="gradient"
                      >
                        Tolak
                      </Button>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="border-t border-blue-gray-50 p-4">
        <div className="flex items-center float-right gap-8">
          <IconButton
            size="sm"
            variant="outlined"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <Typography color="gray" className="font-normal">
            Page <strong className="text-gray-900">{active}</strong> of{" "}
            <strong className="text-gray-900">{jumlahPage}</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={next}
            disabled={active === jumlahPage}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </div>
      </CardFooter>
    </Card>
  );
}
