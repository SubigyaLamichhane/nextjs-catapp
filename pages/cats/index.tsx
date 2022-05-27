import React, { useEffect, useState } from 'react';
import { Nav } from '../../components/Nav/Nav';
import axios from 'axios';
import { Card } from '../../components/Card/Card';

interface catsProps {}

interface Response {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: {
    alt: string;
    url: string;
  };
}

const Cats: React.FC<catsProps> = ({}) => {
  const [cats, setCats] = useState<Response[]>([]);

  const fetchCats = async () => {
    const response = await axios.get('/api/cats');
    const data: Response[] = response.data;
    console.log(data);
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Nav />
      <div className="container mt-5">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {cats.map(({ id, name, email, phone, image }) => (
            <Card
              id={id}
              key={id}
              name={name}
              email={email}
              phone={phone}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cats;
