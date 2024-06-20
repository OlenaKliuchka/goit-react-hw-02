import styles from "./FriendListItem.module.css";

export default function Friend({ friend: { avatar, isOnline, name } }) {
  const classes = ["status"];

  isOnline ? classes.push("online") : classes.push("offline");

  return (
    <div>
      <img className={styles.image} src={avatar} alt={name} width="48" />
      <p className={styles.title}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
