import React from 'react';

const App = () => {
  const [nome, setNome] = React.useState('');

  return (
    <>
      <form action="">
        <input type="text" value={nome} />
      </form>
    </>
  );
};

export default App;
