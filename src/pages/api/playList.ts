// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  imagePath: string;
  titulo: string;
  subTitulo: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({
      imagePath: "/images/MegaHit.png",
      titulo: "All Out 90s",
      subTitulo: "The biggest songs of the 1990s. Cover:",
    });
}
