
//Recibe la data de capturas desde la base de datos, y la prepara para mandarla a graficar
//Si no hay capturas devuelve 0, y en el componente que la llama <formGrafico>, dice que no hay capturas.
function AcomodarData(dataCruda) {
  const cantidadXhora = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let dato of dataCruda.capturas) {
    switch (dato.hora) {
      case "20:00":
        cantidadXhora[0]++;
        break;
      case "21:00":
        cantidadXhora[1]++;
        break;
      case "22:00":
        cantidadXhora[2]++;
        break;
      case "23:00":
        cantidadXhora[3]++;
        break;
      case "00:00":
        cantidadXhora[4]++;
        break;
      case "01:00":
        cantidadXhora[5]++;
        break;
      case "02:00":
        cantidadXhora[6]++;
        break;
      case "03:00":
        cantidadXhora[7]++;
        break;
      case "04:00":
        cantidadXhora[8]++;
        break;
      case "05:00":
        cantidadXhora[9]++;
        break;
      case "06:00":
        cantidadXhora[10]++;
        break;
    }
  }

  const total = cantidadXhora.reduce(
    (acumulador, actual) => acumulador + actual,
    0
  );
  let data;

  if (total !== 0) {
    data = {
      labels: [
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
      ],
      datasets: [
        {
          label: "Capturas",
          data: cantidadXhora,
          backgroundColor: ["green"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
  } else {
    data = 0;
  }

  return data;
}

export default AcomodarData;
