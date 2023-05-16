import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/utils";
import User from "@/models/User.model";


export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  await dbConnect();

  if (req.method === "GET") {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } else {
    res.status(424).json({ message: "Invalid method!" });
  }
}
