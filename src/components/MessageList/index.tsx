import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api.get<Message[]>("/messages/last3").then((response) => {
      setMessages(response.data);
    });
  }, []);
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamoo pra cima 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/fryttzz.png" alt="Matheus Santos" />
            </div>
            <span>Matheus Santos</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamoo pra cima 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/fryttzz.png" alt="Matheus Santos" />
            </div>
            <span>Matheus Santos</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamoo pra cima 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/fryttzz.png" alt="Matheus Santos" />
            </div>
            <span>Matheus Santos</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
