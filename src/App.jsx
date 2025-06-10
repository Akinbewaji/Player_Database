import "./App.css";
import React from "react";
import PlayerCard from "./components/PlayerCard";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <p>BEST PLAYERS OF ALL TIME IN NO SPECIFIC ORDER</p>
        </div>
        <div className="grid">
          <PlayerCard
            playerImg="./images/LM10.png"
            playerName="Lionel Messi [La Pulga][G.O.A.T]"
            teamName="Inter Miami"
            nationality="Argentina"
            position="Forward"
            age="34"
          />
          <PlayerCard
            playerImg="./images/Lamine.jpg"
            playerName="Lamine Yamal"
            teamName="Barcelona"
            nationality="Spanish"
            position="Right Winger"
            age="17"
          />
          <PlayerCard
            playerImg="./images/neymar.jpg"
            playerName="Neymar Jr."
            teamName="Barcelona"
            nationality="Brazil"
            position="Left Winger"
            age="34"
          />
          <PlayerCard
            playerImg="./images/suarez.jpg"
            playerName="Luis Suarez"
            teamName="Inter Miami"
            nationality="Uruguay"
            position="Forward"
            age="38"
          />
          <PlayerCard
            playerImg="./images/ronaldo.jpg"
            playerName="Cristiano Ronaldo"
            teamName="Al-Nassr"
            nationality="Portugual"
            position="Forward"
            age="40"
          />
          <PlayerCard
            playerImg="./images/haaland.jpg"
            playerName="Erling Haaland"
            teamName="Manchester City"
            nationality="Norway"
            position="Forward"
            age="23"
          />
          <PlayerCard
            playerImg="./images/mbappe.jpg"
            playerName="Kylian Mbappé"
            teamName="Real Madrid"
            nationality="France"
            position="Forward"
            age="25"
          />
          <PlayerCard
            playerImg="./images/salah.jpg"
            playerName="Mohammed Salah"
            teamName="Liverpool"
            nationality="Eygpt"
            position="Forward"
            age="31"
          />
          <PlayerCard
            playerImg="./images/kevin.jpg"
            playerName="Kevin De Bruyne"
            teamName="Manchester City"
            nationality="Belguim"
            position="Midfielder"
            age="32"
          />
          <PlayerCard
            playerImg="./images/robert.png"
            playerName="Robert Lewandoski"
            teamName="Barcelona"
            nationality="Poland"
            position="Forward"
            age="35"
          />
          <PlayerCard
            playerImg="./images/pedri.jpg"
            playerName="Pedri"
            teamName="Barcelona"
            nationality="Spain"
            position="Midfielder"
            age="21"
          />
          <PlayerCard
            playerImg="./images/raphinha.jpg"
            playerName="Raphinha Dias Belloli"
            teamName="Barcelona"
            nationality="Brazil"
            position="Forward"
            age="28"
          />
        </div>
      </div>
    </>
  );
};

export default App;
