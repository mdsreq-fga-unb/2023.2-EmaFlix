import { useEffect, useState } from "react";
import "../css/UsuarioConf.css";
import axios from "axios";

const UsuarioConf = () => {
    const [users, setUsers] = useState([]);
    const [newAction, setNewAction] = useState('');
    const [Conf, setConf] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const getUserConf = async () => {
            try {
                const response = await axios.get("https://recanto-cinema-a74e4167e1ec.herokuapp.com/userconfig");
                const userConfig = response.data;
                setUsers(userConfig);
                console.log(response.data);
            } catch (error) {
                console.log("Erro ao buscar o conteúdo");
            }
        };
        getUserConf();
    }, []);

    const DeletarUsuario = (userId) => {
    };

    const MudarPermissao = async (userId) => {
        if (newAction !== 'conf' && newAction !== 'user') {
            setConf("As opçãos são: conf ou user");
            return;
        }
        try {
            const response = await axios.put(`https://recanto-cinema-a74e4167e1ec.herokuapp.com/chargepermissao`, {
                username: username,
                newactions: newAction,
            });
            window.location.href = '/usuario_conf';
        } catch (error) {
            console.error('Erro ao atualizar o usuário', error);
        }
    };

    const InputChangeUsername = (event) => {
        event.target.value;
        setUsername(event.target.value);
    };

    const InputChangeAction = (event) => {
        const value = event.target.value;
        setNewAction(value);
    };

    return (
        <div className="usuarios-conf">
            <h2>Permissões de usuários</h2>
            <h3 className="aviso">{Conf}</h3>
            <div className="permission-charge">
                <input placeholder="Usuário:" type="text" value={username} onChange={InputChangeUsername} />
                <input placeholder="Permissão:" type="text" value={newAction} onChange={InputChangeAction} />
                <button onClick={MudarPermissao}>Alterar Permissão</button>
            </div>
            <ul className="list-user">
                {users.map(user => (
                    <li key={user.username}>
                        <span>
                            <h3>Usuário:&nbsp;</h3>
                            <h3 className="h3-simple">{user.username}</h3>
                        </span>
                        <span>
                            <h3>Ação:&nbsp;</h3>
                            <h3 className="h3-simple">{user.actions === 'conf' ? "Gerenciar Vídeos" : "Aluno"}</h3>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default UsuarioConf;
