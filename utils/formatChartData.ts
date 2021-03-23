import { FetchMqlTimeSeriesQuery } from "queries/mql/MqlQueryTypes";
import { defaultColor, generatedColors } from "./colors";
import moment from "moment";

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
      // TODO: Migrate to server
      // https://app.asana.com/0/1161293048858925/1200102125224770
      .sort((a, b) => (a.xDate < b.xDate ? -1 : 1))

      // Note: For now we need to limit the volume of data being rendered in the chart
      // TODO: Migrate to server
      // https://app.asana.com/0/1161293048858925/1200102125224772
      .slice(limit ? -limit : undefined)

      // TODO: We should be able to manage this formatting on the server, also
      // https://app.asana.com/0/1161293048858925/1200102125224774
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
