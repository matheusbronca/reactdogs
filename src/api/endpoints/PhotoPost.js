import React from 'react';

const PhotoPost = () => {
  const [token, setToken] = React.useState('');

  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [imagem, setImagem] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('img', imagem);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);

    console.log('formdata: ' + formData);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        placeholder="nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        placeholder="peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        placeholder="idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type="file"
        onChange={({ target }) => setImagem(target.files[0])}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
