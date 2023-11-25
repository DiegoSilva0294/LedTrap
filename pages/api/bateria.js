import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    let client;

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

    const db = client.db();
    const dataBateria = await db
      .collection("trampa1/bateria")
      .find()
      .sort({ _id: -1 }) // Ordenar por el campo "_id" de forma descendente
      .limit(1)
      .toArray(); // Obtener solo un documento (el último)

    client.close();
    res.status(200).json({
      message: "Nos conectamos y conseguimos la data",
      dataBateria: dataBateria,
    });
  }
}

export default handler;
