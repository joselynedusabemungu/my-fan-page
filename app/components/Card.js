import Image from "next/image";
import styles from "./Card.module.css";
import LikeButton from "./LikeButton";

export default function Card({ name, blurb, rating, emoji, image }) {
  return (
    <article className={styles.card}>
      {image ? (
        <Image src={image} alt={name} width={150} height={190} />
      ) : (
        <div className={styles.emoji}>{emoji}</div>
      )}
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
      <LikeButton className={styles.likeButton} />
    </article>
  );
}
