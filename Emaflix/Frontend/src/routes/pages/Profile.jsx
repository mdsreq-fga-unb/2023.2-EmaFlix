import "../css/Profile.css"

import React, { useState } from 'react';
import avatar from '../../img/ifb_logo_notext.png';

const Profile = () => {
 const [userName, setUserName] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', userName);
    console.log('Password:', password);
 };


 return (
    <div className="profile-container">
        <div className="profile">
      <form onSubmit={handleSubmit}>
        <div className="profile-img">
        <h2>Alterar senha de Usuário</h2>
          <img src={avatar} width={100} alt="Avatar" />
        </div>
        <input
          type="text"
          placeholder="Usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite a Nova Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite a Senha Novamente"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
    </div>
 );
};

export default Profile;