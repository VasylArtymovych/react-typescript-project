import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { toast } from 'react-toastify';
import { fetchMovieCast } from 'serverAPI';
import defaultPhoto from 'images/default.jpeg';
import { CasList } from './Cast.styled';
import { ICast } from 'types/cast';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export default function Cast() {
  const movieId: string = useOutletContext();
  const [cast, setCast] = useState<Array<ICast> | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error: any) {
        toast(error.message);
      }
    })();
  }, [movieId]);

  if (cast) {
    animateScroll.scrollMore(250);
  }

  return (
    <>
      {cast && (
        <CasList>
          {cast.map(({ cast_id, name, profile_path, character }) => {
            const imgPath = profile_path
              ? IMG_PATH + profile_path
              : defaultPhoto;
            return (
              <li key={cast_id}>
                <img src={imgPath} alt={name} width="55" height="75" />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </CasList>
      )}
    </>
  );
}
