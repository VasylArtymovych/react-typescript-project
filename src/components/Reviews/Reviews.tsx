import { useOutletContext } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { toast } from "react-toastify";
import { ReviewdList, ReviewdText } from "./Reviews.styled";
import { Container } from "components/Container";
import { useGetMovieReviewQuery } from "redux/moviesAPI";
import { LoadingLine } from "components/Loader";

export default function Reviews() {
  const movieId: string = useOutletContext();
  const { data: reviews, isLoading, error } = useGetMovieReviewQuery(movieId);

  if (reviews) {
    animateScroll.scrollMore(250);
  }

  if (error) {
    toast("The resource you requested could not be found.");
  }

  return (
    <Container>
      {isLoading && <LoadingLine />}
      {reviews &&
        (reviews.length > 0 ? (
          <ReviewdList>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <ReviewdText> {content}</ReviewdText>
              </li>
            ))}
          </ReviewdList>
        ) : (
          <ReviewdText>No rewiews</ReviewdText>
        ))}
    </Container>
  );
}
