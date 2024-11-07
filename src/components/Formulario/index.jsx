import { useState } from "react";

import styles from "./Formulario.module.css";

const Formulario = () => {
const [peso, setPeso] = useState("");
const [altura, setAltura] = useState("");
const [resultado, setResultado] = useState("");

const calculaImc = () => {
    const imc = peso / (altura * altura);
    const imcComUmaCasa = imc.toFixed(1);
    return setResultado(+imcComUmaCasa);
};

if (altura === null) return null;

return (
    <form className={styles.form}>
        <h2 className={styles.pesoAltura}>Peso:</h2>
        <h5 className={styles.pesoAltura}>Obs: Utilize "," para colocar os gramas</h5>
        <input
            className={styles.input}
            value={peso}
            onChange={(e) => setPeso(+e.target.value)}
            type="number"
            placeholder="Digite o peso (ex: 75,5kg)"
    />
        <h2 className={styles.pesoAltura}>Altura:</h2>
        <h5 className={styles.pesoAltura}>Obs: Utilize "," para colocar os centímetros</h5>
        <input
            className={styles.input}
            value={altura}
            onChange={(e) => setAltura(+e.target.value)}
            type="number"
            placeholder="Digite a altura (ex: 1,75m)"
    />
    <div className={styles.btnContainer}>
        <button
        className={styles.button}
        onClick={(e) => {
            e.preventDefault();
            calculaImc();
        }}
        >
            Calcular
        </button>
        <h5 className={styles.obsBotao}>Obs: Aperte o botão para ver o resultado</h5>
    </div>

    {peso && altura && peso && altura > 0 ? (
        <p className={styles.resultado}>Seu IMC é de: {resultado}</p>
    ) : (
        <p></p>
        )}
    {peso && altura && peso && altura > 0 && resultado < 18.5 ? (
        <p className={styles.classificacao}>Peso abaixo do normal</p>
    ) : (
        <p></p>
        )}
    {peso && altura && peso && altura > 0 && resultado >= 18.5 && resultado < 25 ? (
        <p className={styles.classificacao}>Peso considerado na faixa saudável</p>
    ) : (
        <p></p>
        )}
    {peso && altura && peso && altura > 0 && resultado >= 25 && resultado < 30 ? (
        <p className={styles.classificacao}>Peso na faixa do sobrepeso</p>
    ) : (
        <p></p>
        )}
    {peso && altura && peso && altura > 0 && resultado >= 30 && resultado < 35 ? (
        <p className={styles.classificacao}> Peso na faixa da obesidade grau 1</p>
    ) : (
        <p></p>
        )}
    {peso && altura && peso && altura > 0 && resultado >= 35 && resultado < 40 ? (
        <p className={styles.classificacao}>Peso na faixa da obesidade grau 2</p>
    ) : (
        <p></p>
        )}
    {peso && altura && peso && altura > 0 && resultado >= 40 ? (
        <p className={styles.classificacao}>Peso na faixa da obesidade grau 3</p>
    ) : (
        <p></p>
        )}
    </form>
    );
};

export default Formulario;