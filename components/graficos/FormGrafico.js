import { Fragment } from "react";
import classes from "./FormGrafico.module.css";
import { useRef,useState } from "react";
import GraficarData from "./GraficarData";
import AcomodarData from '../../helpers/graficas'


//Aca Tengo el form, y envio con fetch a la api/graficos para conseguir la data de tal dia/mes/año 
// de la base de datos. Y despues uso la funcion Auxiliar AcomodarData para ponerla en el formato
//que necesita chartJS y le mando esa data al componente <GraficarData />

function FormGrafico() {
  const [isLoading, setIsLoading] = useState(false)
  const [dataGraficar, setDataGraficar] = useState('')
  const selectedDiaRef = useRef();
  const selectedMesRef = useRef();
  const selectedAñoRef = useRef()

  async function submitHandler(event) {
    event.preventDefault();
    const data = {
      dia: selectedDiaRef.current.value,
      mes: selectedMesRef.current.value,
      año: selectedAñoRef.current.value
    };
    setIsLoading(true)

    const response = await fetch("/api/graficos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // Indica que estás enviando datos en formato JSON
      },
    });

    const res = await response.json();

    console.log(res)

    if (!response.ok) {
      throw new Error(res.message || "something went wrong!!!");
    }
    console.log(res)
    await setDataGraficar(AcomodarData(res))
    setIsLoading(false)
  }

  return (
    <Fragment>
      <h1 className={classes.h1}>Ingrese los valores para extraer graficos</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="dia">Seleccione dia</label>
          <select id="dia" name="dia" ref={selectedDiaRef}>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label htmlFor="mes">Seleccione mes</label>
          <select id="mes" name="mes" ref={selectedMesRef}>
            <option value="1">enero</option>
            <option value="2">febrero</option>
            <option value="3">marzo</option>
            <option value="4">abril</option>
            <option value="5">mayo</option>
            <option value="6">junio</option>
            <option value="7">julio</option>
            <option value="8">agosto</option>
            <option value="9">setiembre</option>
            <option value="10">octubre</option>
            <option value="11">noviembre</option>
            <option value="12">diciembre</option>
          </select>
        </div>
        <div>
          <label htmlFor="año">Seleccione año</label>
          <select id="año" name="año" ref={selectedAñoRef}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <button>Obtener</button>
      </form>
      {isLoading && <h2 className={classes.h1}>Cargando...</h2>}
      {dataGraficar && !isLoading && <GraficarData dataGraficar={dataGraficar}/>}
      {dataGraficar===0 && !isLoading && <h1 className={classes.h1}>No hay capturas en las fechas seleccionadas</h1>}
    </Fragment>
  );
}

export default FormGrafico;
