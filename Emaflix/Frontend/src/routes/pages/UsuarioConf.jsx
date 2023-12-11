import { useEffect, useState } from "react";

import "../css/UsuarioConf.css"
import axios from "axios";

const UsuarioConf = () => {
    const [User, setUser] = useState([]);

    useEffect(() => {
        const getUserConf = async () => {
            try {
                const response = await axios.get("http://localhost:3000/userconfig");
                const UserConfig = response.data;
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
            <h2>Permissões de usuários</h2>
            <ul className="list-user">
                {User.map(user => (
                    <li key={user.id}>
                        <span>
                            <h3>Usuário:&nbsp;</h3>
                            <h3 className="h3-simple">{user.user}</h3>
                        </span>
                        <span>
                            <h3>Ação:&nbsp;</h3>
                            <h3 className="h3-simple">{user.actions === 'conf' ? "Gerenciar Vídeos" : "Aluno"}</h3>
                        </span>
                        <select
                            value={user.actions}
                            onChange={(e) => handleActionChange(e, user.id)}
                        >
                            <option value="view">Aluno</option>
                            <option value="conf">Gerenciar Vídeos</option>
                        </select>
                       <button onClick={() => handleDeletar(user.id)}> <span className="material-symbols-outlined">delete</span>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};



export default UsuarioConf