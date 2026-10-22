import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    console.log(`Le compteur est à ${compte}`);
  }, [compte]);

  return (
    <div>
      <p>Compte : {compte}</p>
      <button onClick={() => setCompte(c => c + 1)}>+1</button>
    </div>
  );
}

export default CompteurEffet;