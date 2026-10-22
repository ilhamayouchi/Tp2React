import { useState } from 'react';

function ProfilEditable() {
  const [user, setUser] = useState({
    nom: 'Jean',
    age: 25,
    ville: 'Paris',
  });

  const handleChange = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <input
        value={user.nom}
        onChange={(e) => handleChange('nom', e.target.value)}
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => handleChange('age', e.target.value)}
      />
      <p>{user.nom}, {user.age} ans, à {user.ville}</p>
    </div>
  );
}

export default ProfilEditable;