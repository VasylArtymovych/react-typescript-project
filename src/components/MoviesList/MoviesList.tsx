import { List } from "./MoviesList.styled";
import { IMovie } from "types";
import ListItem from "./ListItem";

interface IProps {
  moviesArr: IMovie[];
}

const MoviesList: React.FC<IProps> = ({ moviesArr }) => {
  return (
    <List>
      {moviesArr.map((movie) => {
        return <ListItem key={movie.id} movie={movie} />;
      })}
    </List>
  );
};

export default MoviesList;
