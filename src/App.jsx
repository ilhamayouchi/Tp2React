import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';
import Timer from './Timer';
import TodoList from './TodoList';
import ProfilEditable from './ProfilEditable';

function App() {
  return (
    <div className="App">
      <h1>TP 2 : Gestion de l'État</h1>
      <section>
        <h2>Compteur</h2>
        <Compteur />
      </section>
      <section>
        <h2>Interactions</h2>
        <MessageBouton />
      </section>
      <section>
        <h2>Formulaire</h2>
        <FormulaireNom />
      </section>
      <section>
        <h2>Effets (useEffect)</h2>
        <CompteurEffet />
        <Timer />
      </section>
      <section>
        <h2>Liste de tâches</h2>
        <TodoList />
      </section>
      <section>
        <h2>Profil modifiable</h2>
        <ProfilEditable />
      </section>
    </div>
  );
}

export default App;