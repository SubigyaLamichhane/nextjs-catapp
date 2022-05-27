import React from 'react';
import styles from './Card.module.css';
import { useRouter } from 'next/router';

interface CardProps {
  name: string;
  phone: string;
  email: string;
  id: number;
  image: {
    url: string;
    alt: string;
  };
}

export const Card: React.FC<CardProps> = ({
  name,
  phone,
  image,
  email,
  id,
}) => {
  const router = useRouter();

  return (
    <div className={styles.card} onClick={() => router.push(`/cats/${id}`)}>
      <div className={styles['card-header']}>
        <img
          src={image.url}
          alt={image.alt}
          className={styles['card-img']}
          width="30"
          height="24"
        />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

// <Image
// src="/docs/5.2/assets/brand/bootstrap-logo.svg"
// alt="assests"
// width="30"
// height="24"
// className="d-inline-block align-text-top"
// />
