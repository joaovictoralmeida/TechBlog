import styles from '../Content/Content.module.css'
import Info1 from '../../assets/image-1.png'
import Info2 from '../../assets/image-2.png'
import Info3 from '../../assets/image-3.png'
import Info4 from '../../assets/image-4.png'
import Info5 from '../../assets/image-5.png'
import Info6 from '../../assets/image-6.png'
import Cards from './Cards'

const Content = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.layoutc}>
                <h1>Artigos recomendados</h1>
                <div className={styles.cards}>
                    <Cards
                    img={Info1}
                    title="O que é linguagem de programação? Conheça as principais"
                    text="Uma das mais populares vertentes da tecnologia da informação, a área de..."
                    />

                    <Cards
                    img={Info2}
                    title="Python: por que a linguagem é tão usada para Data Science e finanças?"
                    text="O mundo da programação conta com algumas opções de linguagem para..."
                    />

                    <Cards
                    img={Info3}
                    title="GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários"
                    text="O popular serviço de repositório de código GitHub foi adquirido pela..."
                    />

                    <Cards
                    img={Info4}
                    title="15 comandos no GIT que os desenvolvedores precisam saber"
                    text="Dominar os comandos GIT é uma habilidade que se conquista com..."
                    />

                    <Cards
                    img={Info5}
                    title="GIT e GitHub: o que são e quais as diferenças entre eles?"
                    text="Git e GibHub são dois softwares de controle de versão essenciais para..."
                    />

                    <Cards
                    img={Info6}
                    title="GitHub Copilot ganha integração com GPT-4 e interface conversacional"
                    text="O GitHub Copilot, ferramenta de desenvolvimento baseada em IA..."
                    />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Content