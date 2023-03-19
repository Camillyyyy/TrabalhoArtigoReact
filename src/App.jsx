import React, { useState, useEffect } from "react";
import './App.css'

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (

    <div className={`App ${theme}`}>

      <div>
        <button onClick={toggleTheme}>Mudar Tema</button>
      </div>

      <div className='Fundo'>

        <h1 className='Titulo'>A REALIDADE VIRTUAL NA EDUCAÇÃO DO ENSINO FUNDAMENTAL E MÉDIO</h1>

        <br></br>

        <div className='Mae'>

          <div className='info'>
            <p className="myname">
              Camilly C. Moraes Magalhães
            </p>
          </div>
          <br></br>

          <div className='resumea'>
            <p>
              <span>Resumo.</span> Este artigo tem como objetivo apresentar um estudo sobre a  realidade virtual na educação do ensino fundamental e médio, ou seja,  apresentar a importância e os benefícios ao se utilizar os óculos RV em sala  de aula.
            </p>

            <p>
              <span>Palavras-chave: Realidade Virtual, Educação, Realidade Virtual na Educação.</span>
            </p>

            <p>
              <span>Abstract.</span> This article aims to present a study on virtual reality in elementary  and high school education, that is, to present the importance and benefits of  using VR glasses in the classroom.
            </p>

            <p>
              <span>Keywords: Virtual Reality, Education, Virtual Reality in Education.</span>
            </p>
          </div>

          <br></br>

          <div className="resto">
            <h3>1. INTRODUÇÃO</h3>
            <p>
              A Realidade Virtual é um ambiente virtual, onde tudo é feito por um computador. Mesmo  sendo algo que não é “real”, a tecnologia o deixa com bastante imersão, utilizando de  efeitos visuais e sonoros, para que o usuário tenha uma experiência mais realista e  marcante.
              Ela utiliza efeitos visuais e sonoros, para oferecer uma imersão maior e deixando o  ambiente mais real possível. O usuário poderá interagir ou não com o “mundo”, isso vai  variar das configurações do sistema do ambiente.
              Os óculos utilizam uma tecnologia chamada “Head Tracking”, essa tecnologia permite que  o software entenda a posição em que você está. Quando você mexer a sua cabeça e olhar  em volta, o sistema irá entender os seus movimentos e as imagens são deslocadas na  mesma direção, dando uma experiência de imersão completa. O headset, que às vezes vem  embutido nos óculos, usam a tecnologia de eliminar os ruídos externos, fazendo com que a
              pessoa escute apenas o ambiente virtual, para que não haja interferência externa na sua  experiência.
            </p>

            <br></br>

            <h3>2. IMPORTÂNCIA</h3>
            <p>
              O uso da realidade virtual já está cada vez mais presente nas áreas além do entretenimento.  Temos que saber a importância de como implementar essa tecnologia, totalmente inovadora e  imersiva, nas salas de aulas. Esse recurso poderá ser executado de diversas maneiras no ensino,  transferindo para os alunos, e também para os professores, diversos benefícios, fazendo com  que a qualidade do ensino aumente.
              Na área de educação, a realidade virtual é interessante por prover uma oportunidade para  aprender ou executar conceitos na prática, fazendo com que o aluno experimente os ambientes  e manipule objetos aos quais seria complicado de ter acesso no mundo real. Deste modo, é  possível que os alunos possam desenvolver as suas habilidades de solução de problemas, e que  haja uma visão mais aprofundada sobre os assuntos aos quais estão estudando e que pratiquem  a aplicação em um ambiente que tenha semelhança ao real. Nisso, o engajamento dos alunos  em relação aos estudos iria melhorar e fixariam melhor os conteúdos passados em sala de aula.  Essa tecnologia também ajuda os pedagogos, facilitando a abordagem dos conceitos complexos  e garantindo que os alunos entendam facilmente o conteúdo passado. Assim, ela ajuda  diretamente para um melhor resultado no ensino e no aprendizado.
            </p>

            <br></br>

            <h3>3. BENEFÍCIOS</h3>
            <p>
              Com o uso da realidade virtual nas salas de aula, possibilita que os estudantes aprendam de  uma forma mais interativa e eficaz, diferentemente do método tradicional.  Ao fazer a utilização dos óculos, com a visão 3D e em 360° é possível fazer visita aos museus e  a locais históricos de qualquer parte do mundo, sem que haja saída da sala de aula, além de  ajudar o entendimento de diversas disciplinas.
            </p>

            <br></br>

            <h3>1. INTERATIVIDADE E IMERSÃO</h3>
            <p>
              1.1. Com a possibilidade dos conteúdos serem passados de forma imersiva, o estudante  consegue observar as estruturas e os lugares que seriam inviáveis dentro de uma sala  de aula, como por exemplo, visualizar o solo da lua e os seus robôs exploradores, ou  até mesmo, passear dentro de um vulcão. Além disso, a ferramenta permite que os  alunos interajam com os objetos, fazendo com que a aula seja interativa e que  prendesse a atenção do aluno.
            </p>

            <br></br>

            <h3>2. FACILITANDO A COMPREENSÃO</h3>
            <p>
              2.1. Um melhoramento da compreensão e a concentração de ideias pelos estudantes.  Dando um exemplo, nas aulas de química, é possível fazer as misturas dos elementos  químicos e observar as reações que surgiriam depois de fazer as misturas. Pode-se  afirmar que além de melhorar a prática, isso pode evitar falhas e interpretações  equivocadas sobre os conteúdos das disciplinas passadas em sala de aula.
            </p>

            <br></br>

            <h3>3. MELHORAMENTO DO ENGAJAMENTO DA TURMA</h3>
            <p>
              3.1. Outra principal contribuição em sala de aula é em a melhora da colaboração e da  comunicação entre a turma. A tecnologia cria um espaço de aprendizado lúdico e  atualizado que promove o envolvimento para uma contribuição do conhecimento, que  deve ser conjunta. Nisso, cada aluno pode oferecer a sua contribuição para ter uma  melhor interação social e um incentivo ao desenvolvimento de atividades em  conjunto.
            </p>

            <br></br>

            <h3>4. CONCLUSÃO</h3>
            <p>
              Neste trabalho abordamos o assunto sobre o uso da realidade virtual no ensino fundamental e  médio e concluímos que é de suma importância adquirir essa tecnologia para as salas de aulas.  Devido que para haver um melhoramento na área de educação devemos usá-la para ajudar na  facilidade do entendimento e que o aluno fique com interesse em participar da aula.
            </p>

            <br></br>

            <h3>5. REFERÊNCIAS</h3>
            <p>
              Oliveira, Adriele. Como a realidade virtual pode ser utilizada na educação?. 2021. Disponível  em:         <br></br>
              <a href="https://www.educamaisbrasil.com.br/educacao/escolas/como-a-realidade-virtual-pode-ser utilizada-na-educacao">https://www.educamaisbrasil.com.br/educacao/escolas/como-a-realidade-virtual-pode-ser utilizada-na-educacao</a>. Acesso em: 6 jun. 2022.
            </p>
            <p>
              Plataforma Eleva. REALIDADE VIRTUAL NA EDUCAÇÃO: COMO USAR A  TECNOLOGIA IMERSIVA?. 2020. Disponível em:        <br></br>

              <a href="https://blog.elevaplataforma.com.br/realidade-virtual-na-educacao/">https://blog.elevaplataforma.com.br/realidade-virtual-na-educacao/</a>. Acesso em: 10 jun. 2022.

            </p>
            <p>
              Braga, Mariluci. Realidade Virtual e Educação. Revista de Biologia e Ciências da Terra  [online]. 2001, 1 (1), 0. ISSN: 1519-5228. Disponível em:        <br></br>
              <a href="https://www.redalyc.org/articulo.oa?id=50010104">https://www.redalyc.org/articulo.oa?id=50010104</a>. Acesso em 10 de junho de 2022.
            </p>
            <br></br><br></br><br></br><br></br>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;
