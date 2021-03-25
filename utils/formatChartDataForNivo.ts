/*
  Note: This data formatting utility is only used for the demo site.
  It is not needed for useMqlQuery
*/
import { FetchMqlTimeSeriesQuery } from "queries/mql/MqlQueryTypes";
import moment from "moment";

import { defaultColor, generatedColors } from "./colors";

export default function formatChartData(
  mqlQueryResult: FetchMqlTimeSeriesQuery["mqlQuery"],
  limit?: number
) {
  if (!mqlQueryResult?.result) {
    throw new Error("Invalid result supplied to formatChartData");
  }
  return mqlQueryResult.result.map((d, idx) => ({
    id:
      ((d.seriesValue as unknown) as boolean) === true
        ? "True"
        : ((d.seriesValue as unknown) as boolean) === false
        ? "False"
        : // TODO: Trap invalid values better
          d.seriesValue || "Unknown",
    color:
      d.seriesValue === "ALL"
        ? defaultColor
        : generatedColors[idx % generatedColors.length],
    data: (d.data || [])
      .sort((a, b) => (a.xDate < b.xDate ? -1 : 1))
      .slice(limit ? -limit : undefined)
      .map(({ xDate, y }) => {
        if (xDate === "NaT") {
          throw new Error(
            `Invalid Date on metrics: [${mqlQueryResult?.metrics?.join(", ")}]`
          );
        }
        return {
          x: moment(xDate).format("YYYY-MM-DD"),
          y,
        };
      }),
  }));
}
