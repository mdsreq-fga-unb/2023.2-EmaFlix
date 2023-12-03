import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "../css/UsuarioConf.css"
import axios from "axios";

const UsuarioConf = () => {
    const [User, setUser] = useState([]);

    useEffect(() => {
        const getUserConf = async () => {
            try {
                const response = await axios.get("http://localhost:3004/user");
                const UserConfig = response.data.filter(user => user.actions.includes('conf') || user.actions.includes('view'));
                setUser(UserConfig);
                console.log(response.data);
            } catch (error) {
                console.log("Erro ao busca o conteúdo");
            }
        };
        getUserConf()
    }, [])

    const handleDeletar = (userId) => {

    };

    return (
        <div className="usuarios-conf">
            <h1>Permissões de usuários</h1>
            <ul className="list-user">
                {User.map(user => (
                    <li key={user.id}>
                        <span>
                            <h3>Usuário:&nbsp;</h3>
                            <h2>{user.user}</h2>
                        </span>
                        <span>
                            <h3>Ação:&nbsp;</h3>
                            <h2>{user.actions === 'conf' ? "Gerenciar Vídeos" : "Aluno"}</h2>
                        </span>
                        <select
                            value={user.actions}
                            onChange={(e) => handleActionChange(e, user.id)}
                        >
                            <option value="view">Aluno</option>
                            <option value="conf">Gerenciar Vídeos</option>
                        </select>
                       <button onClick={() => handleDeletar(user.id)}>Excluir <span className="material-symbols-outlined">delete</span></button>
                    </li>
                ))}
            </ul>
        </div>
    )
};



export default UsuarioConf