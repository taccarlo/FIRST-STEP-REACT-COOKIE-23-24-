import Profile from './Profile.js';
import a from './a.jpg';
/*
Dividiamoci in gruppi da 3 persone 
e creiamo per ogni squadra:
- Nome del gruppo
- Motto del gruppo
- Breve descrizione dei componenti del gruppo 
con foto come nell’esempio
- I componenti del gruppo, 
che sono 3 Component in React
*/
export default function Gallery() {
  return (
    <section>
      <img src={a}></img>
      <h1>
        Il mio fantastico gruppo
      </h1>
      <h3>
        Motto: <i>prima lezione coi biscotti</i>
      </h3>
      <h4>Questo gruppo è formato da Carlo, Tacchella e me</h4>
      <Profile/>
      <Profile/>
      <Profile/>
    </section>
  );

}
