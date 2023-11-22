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

    // conseguir data de la noche 20:00 a 24:00 pm
    const { dia, mes, año } = data;

    const fecha1 = `${dia}/${mes}/${año}`;

    const db = client.db();
    const capturas1 = await db
      .collection("trampa1/capturas")
      .find({ fecha: { $eq: fecha1 }, hora: { $gte: "20:00" } })
      .toArray();

    //data de la madrugada desde 00 hasta 06 am
    const dia2 = (parseInt(dia, 10) + 1).toString();
    const fecha2 = `${dia2}/${mes}/${año}`;


    const capturas2 = await db
      .collection("trampa1/capturas")
      .find({ fecha: { $eq: fecha2 }, hora: { $lt: "20:00" } })
      .toArray();

    const capturas = capturas1.concat(capturas2)

    client.close();
    res.status(200).json({
      message: "Nos conectamos y conseguimos la data",
      capturas: capturas,
    });
  }
}

export default handler;
