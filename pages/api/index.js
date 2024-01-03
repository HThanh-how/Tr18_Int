import shoes from "./shoes.json"


export default async function JSON(req, res) {
    // const data = { name: "John Doe", age: 30 };
    return res.status(200).json(shoes);
  }
  