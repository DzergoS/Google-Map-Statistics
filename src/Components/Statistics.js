/* eslint-disable no-param-reassign */
import * as React from "react";
import { PropTypes } from "prop-types";
import { VictoryPie } from "victory";
import MarkerTable from "./MarkerTable";
import "../Css/Statistics.css";

const Statistics = ({ markers, historyMarkers }) => {
  function countGraphic(array) {
    const names = {};
    array.forEach((item) => {
      names[item] = (names[item] || 0) + 1;
    });
    array = [];
    Object.keys(names).forEach((key, i) => {
      array[i] = { x: key, y: names[key] };
    });

    return array;
  }
  return (
    <div className="statistics">
      <div className="history">
        {/* Recently VIEWED */}
        <MarkerTable
          markers={[...historyMarkers].reverse()}
          title="Recently viewed markers"
        />

        {!historyMarkers.length ? null : (
          <VictoryPie
            cornerRadius={({ datum }) => datum.y * 5}
            padding={{ top: 20, bottom: 60 }}
            padAngle={1}
            data={countGraphic(historyMarkers.map((item) => item.title))}
            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            width={500}
            height={350}
          />
        )}
      </div>

      {/* Markers */}
      <MarkerTable markers={markers} title="Markers" />
    </div>
  );
};

Statistics.defaultProps = {
  markers: [],
  historyMarkers: [],
};

Statistics.propTypes = {
  markers: PropTypes.instanceOf(Array),
  historyMarkers: PropTypes.instanceOf(Array),
};

export default Statistics;
