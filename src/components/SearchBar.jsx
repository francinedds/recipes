import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');
  
    // Ao enviar o formulário, chama a função de busca passada como prop
    const handleSubmit = (e) => {
      e.preventDefault(); // Evita recarregar a página
      onSearch(input);    // Chama a função de busca com o texto digitado
};

return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search recipe..."
        value={input}
        onChange={(e) => setInput(e.target.value)} // Atualiza o texto digitado
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;