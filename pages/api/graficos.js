import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    let client;

    console.log(data);

    const connectionstring = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.repnmln.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    //"mongodb+srv://diegosilvacarreras:YrPQ7F7p5QVuwaOM@cluster0.repnmln.mongodb.net/LED-trap?retryWrites=true&w=majority"

    try {
      client = await MongoClient.connect(connectionstring);
    } catch (error) {
      res
        .status(500)
        .json({ message: "No se pudo conectar a la base de datos" });
      return;
    }
    const { dia, mes, año } = data;

    const fecha = `${dia}/${mes}/${año}`;
    const horaLimite = "12:00";

    const db = client.db();
    const capturas = await db
      .collection("Captura")
      .find({ fecha: { $eq: fecha } })
      .toArray();

    client.close();
    res.status(200).json({
      message: "Nos conectamos y conseguimos la data",
      capturas: capturas,
    });
  }
}

export default handler;
