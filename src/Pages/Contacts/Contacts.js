import React, { useState } from 'react';

function Contacts() {
  // Определяем состояния для данных формы
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логика обработки формы здесь
    console.log('Submitted:', { username, email, password });
    // Очистка состояний после отправки формы
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Message:</label>
          <textarea
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contacts;