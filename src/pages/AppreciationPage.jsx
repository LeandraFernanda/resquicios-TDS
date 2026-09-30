import React from "react";
import Header from "../components/Header";
import MessageCard from "../components/MessageCard";
import FloatingLights from "../components/FloatingLights";

export default function AppreciationPage() {
    const mensagens = [
        {
          title: "Queridos alunos",
          content:
            "Durante este um ano e dois meses, percorremos juntos os caminhos encantados da lógica, entre linhas de código e silêncios repletos de aprendizado. Enfrentamos erros, superamos falhas, celebramos vitórias. Cada um de vocês se tornou luz no imenso universo da programação — e é maravilhoso vê-los chegar até aqui, firmes, na reta final da UC14. Que a sabedoria conquistada continue iluminando seus passos e sonhos.",
        },
        {
          title: "Luti",
          content:
            "Teu olhar técnico e coração generoso formam uma combinação rara. Segue sendo esse ser fenomenal, que une competência com gentileza, e transforma o desafio em oportunidade de aprendizado. Que a vida continue abrindo caminhos para tua luz profissional e humana.",
        },
        {
          title: "Vitor Vitalino",
          content:
            "Brilhas com um entusiasmo contagiante e uma curiosidade sem limites. Tua vontade de descobrir é um presente para o mundo. Que continues desbravando o desconhecido com esse coração imenso e essa energia que inspira todos ao redor.",
        },
        {
          title: "Vitória",
          content:
            "Tua força e delicadeza caminham juntas como código e poesia. Que continues trilhando esse belo caminho, guiada pela dedicação, serenidade e brilho que carregas no olhar. Teu nome já anuncia o que és: uma vitória em movimento.",
        },
        {
          title: "Leandra",
          content:
            "Mesmo quando o mundo parece pesado, tua força insiste em florescer. És exemplo de coragem silenciosa e persistência serena. Que continues enfrentando cada desafio com a doçura e a firmeza de quem sabe que é capaz de ir além.",
        },
        {
          title: "Lívia",
          content:
            "Tua técnica é como arte — precisa, elegante e inspiradora. Foi um privilégio te conhecer e aprender com tua postura profissional e serenidade. Que continues a trilhar o caminho do sucesso, com essa mesma leveza que encanta quem te cerca.",
        },
        {
          title: "Talita & Frelianys",
          content:
            "No universo do front, vocês são constelações que brilham intensamente. Criativas, determinadas e cheias de luz, seguem mostrando que talento e sensibilidade podem caminhar juntos. Continuem transformando telas em poesia e ideias em beleza.",
        },
        {
          title: "Henrique",
          content:
            "Quieto, mas com um oceano de sabedoria dentro de si. Tua inteligência é calma e profunda, como um código bem escrito que fala mais pelo silêncio do que pelas palavras. Que continues nesse belo caminho de precisão, serenidade e excelência.",
        },
        {
          title: "Gui",
          content:
            "Querido Gui, tua presença é como um abraço: acolhe, inspira e ilumina. Tens um coração imenso e uma luz que atravessa os dias. Foi um privilégio dividir este tempo contigo — segue espalhando essa paz e alegria que são tua marca.",
        },
        {
          title: "João Pedro",
          content:
            "És a prova viva de que gentileza e esforço constroem pontes. Tua educação e tua dedicação encantam. Que continues levando essa essência a todos os lugares, mostrando que o verdadeiro sucesso nasce do respeito e da constância.",
        },
        {
          title: "Luiz Henrique",
          content:
            "Criativo, leve e curioso — és como uma brisa boa em meio ao ritmo da rotina. Que essa energia livre e positiva te acompanhe nas próximas jornadas, levando contigo o brilho de quem transforma o trabalho em arte e alegria.",
        },
        {
          title: "Pedro",
          content:
            "De fala suave, mas de presença marcante. Tua competência se expressa na sutileza dos detalhes e na firmeza do que fazes. Que continues teu caminho com sabedoria e serenidade, sem jamais perder tua essência tranquila e brilhante.",
        },
        {
          title: "Arthur",
          content:
            "Gigante nas quadras e na vida. Tua criatividade, disciplina e paixão são exemplo do que é ser grande — não pelo tamanho, mas pela alma. Que continues a vencer dentro e fora do jogo, com o mesmo foco e luz que te definem.",
        },
        {
          title: "Nathi",
          content:
            "És como uma bailarina do código: moves-te com leveza entre erros e acertos, e transformas linhas frias em coreografias de lógica e beleza. Que continues dançando com a vida e encantando o mundo com tua harmonia e brilho.",
        },
        {
          title: "Encerramento",
          content:
            "Queridos, foi uma honra indescritível caminhar com vocês. Cada risada, cada desafio, cada conquista está guardada em mim. Que a vida os leve a lugares altos, para que brilhem ainda mais, espalhando o mesmo encanto que trouxeram a esta sala. Com amor, admiração e gratidão — Prof. Dalvana 💚",
        },
      ];
      

  return (
    <div style={styles.wrapper}>
      <FloatingLights />
      <Header />
      <div style={styles.container}>
        {mensagens.map((msg, i) => (
          <MessageCard key={i} title={msg.title} content={msg.content} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    overflow: "hidden",
  },
  container: {
    width: "80%",
    maxWidth: "800px",
    margin: "0 auto",
    paddingBottom: "60px",
  },
};
