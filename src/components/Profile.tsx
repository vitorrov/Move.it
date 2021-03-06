import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
        alt="Vitor"
      />
      <div>
        <strong>Vitor</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
