import { downloadExcel } from "react-export-table-to-excel";
import { Button } from "@material-tailwind/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

// eslint-disable-next-line react/prop-types
export default function SampleMethod({ header, body }) {
  console.log(header);
  console.log(body);
  // const header = ["test"];
  // const body = [{ test: "coba" }];
  function handleDownloadExcel() {
    const opt = "downloadExcel";

    downloadExcel({
      fileName: `Excel Export - ${opt}`,
      sheet: "Excel Export",
      tablePayload: {
        header,
        // accept two different data structures
        body,
      },
    });
  }

  return (
    <Button
      className="flex items-center gap-3"
      size="sm"
      onClick={handleDownloadExcel}
    >
      <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
    </Button>
  );
}
