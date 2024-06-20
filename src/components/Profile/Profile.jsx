import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.profileInfo}>
        <img className={styles.profileImage} src={image} alt="User avatar" />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.statsKey}>Followers</span>
          <span className={styles.statsValue}>{stats.followers}</span>
        </li>

        <li className={styles.statsItem}>
          <span className={styles.statsKey}>Views</span>
          <span className={styles.statsValue}>{stats.views}</span>
        </li>

        <li className={styles.statsItem}>
          <span className={styles.statsKey}>Likes</span>
          <span className={styles.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
