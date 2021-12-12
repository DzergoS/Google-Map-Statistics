/* eslint-disable no-restricted-syntax */
import XLSX from "xlsx";

const getExcel = () => {
  const url = "./Coordinates.xlsx";

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("fetch failed");
      return res.arrayBuffer();
    })
    .then((ab) => {
      const data = new Uint8Array(ab);

      // get excel
      const workbook = XLSX.read(data, { type: "array" });

      // get object of cells
      const markersObject = workbook.Sheets.Markers;

      // delete unnecessary keys
      delete markersObject["!margins"];
      delete markersObject["!ref"];

      let column;
      let row;
      const massiveMarkers = [];

      const setMassiveMarker = (key, val, item = massiveMarkers[row]) => {
        massiveMarkers[row] = { ...item, [key]: val };
      };

      const switchExcel = (value) => {
        switch (column) {
          case "A":
            setMassiveMarker("lat", +value);
            break;
          case "B":
            setMassiveMarker("lng", +value);
            break;
          case "C":
            setMassiveMarker("title", value);
            break;
          case "D":
            setMassiveMarker("date", value);
            break;
          case "E":
            setMassiveMarker("event", value);
            break;
          default:
            break;
        }
      };

      Object.entries(markersObject).forEach((item) => {
        const [key, { w }] = item;

        column = key.charAt(0);
        row = key.replace(/^\D+/g, "") - 1;

        switchExcel(w);
      });

      massiveMarkers.shift();
      return massiveMarkers;
    });
};

export default getExcel;
