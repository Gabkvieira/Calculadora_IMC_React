import styles from "./Informacoes.module.css";

const Informacoes = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.titulo}>O que é o IMC?</h1>
                <p className={styles.texto}>
                    O IMC (Índice de Massa Corporal) é um cálculo que permite avaliar o peso de uma pessoa em relação à sua altura.
                    É uma das formas mais recomendadas pela Organização Mundial da Saúde (OMS) para classificar o estado antropométrico de um indivíduo. 
                </p>
            </div>
            <div className={styles.container2}>
                <h1 className={styles.titulo}>Como é calculado o IMC?</h1>
                <p className={styles.texto}>
                    O IMC é calculado dividindo o peso (em quilogramas) pela altura elevada 
                    ao quadrado (em metros). Ex: Para uma pessoa de 1.75m e 75kg o IMC seria calculado fazendo 75 dividido por 1.75 vezes 1.75.
                </p>
                <p>
                    <img className={styles.imagem} src="https://s3.amazonaws.com/assets.fetalmed.net/wp-content/uploads/2022/10/formula-IMC.png" alt="Cálculo IMC" />
                </p>
            </div>
            <div>
                <h1 className={styles.titulo}>Como avaliar seu IMC:</h1>
                <p className={styles.texto}>
                    O IMC é classificado em diferentes categorias, cada uma indicando uma
                    faixa geral de peso. Lembre-se de que o IMC é apenas uma medida
                    inicial e não leva em conta todos os fatores individuais de saúde. As
                    categorias são:
                </p>
                <ul className={styles.lista}>
                    <li className={styles.listaItem}>
                        Abaixo de 18.5: Peso abaixo do normal.
                    </li>
                    <li className={styles.listaItem}>
                        18.5 a 24.9: Peso considerado na faixa saudável.
                    </li>
                    <li className={styles.listaItem}>
                        25 a 29.9: Peso na faixa do sobrepeso.
                    </li>
                    <li className={styles.listaItem}>
                        30 a 34.9: Peso na faixa da obesidade grau 1.
                    </li>
                    <li className={styles.listaItem}>
                        35 a 39.9: Peso na faixa da obesidade grau 2.
                    </li>
                    <li className={styles.listaItem}>
                        Acima de 40: Peso na faixa da obesidade grau 3.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Informacoes;