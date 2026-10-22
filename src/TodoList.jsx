import { useState } from 'react';

function TodoList() {
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  const ajouterTache = (e) => {
    e.preventDefault();
    if (nouvelleTache.trim()) {
      setTaches([...taches, nouvelleTache]);
      setNouvelleTache('');
    }
  };

  const supprimerTache = (index) => {
    setTaches(taches.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={ajouterTache}>
        <input
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {taches.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => supprimerTache(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;