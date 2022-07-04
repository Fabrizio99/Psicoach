import { rest } from "msw";
import { AppSettings } from "../util/AppSeetings";

export const handlers = [
  rest.get(`${AppSettings.END_POINT}meeting/calendar`, (req, res, ctx) => {
    const month = req.url.searchParams.get("month");
    const formattedMonth = month.padStart(2, "0");
    const year = req.url.searchParams.get("year");
    return res(
      ctx.status(200),
      ctx.json({
        calendar: [
          {
            quote_id: 1,
            name: "Paquete: SESION - Tema: Depresión",
            date: `${year}-${formattedMonth}-09T00:00:00.000Z`,
            link_meet: "https://linkdereu/123-123123",
          },
        ],
        pending: [],
      })
    );
  }),
];
