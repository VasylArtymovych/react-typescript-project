import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { toast } from "react-toastify";
import { fetchMovieReviews } from "serverAPI";
import { ReviewdList, ReviewdText } from "./Reviews.styled";
import { Container } from "components/Container";
import { IReview } from "types/review";

export default function Reviews() {
  const movieId: string = useOutletContext();
  const [reviews, setReview] = useState<IReview | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const reviewData = await fetchMovieReviews(movieId);
        setReview(reviewData);
      } catch (error: any) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);

  if (reviews) {
    animateScroll.scrollMore(250);
  }

  return (
    <Container>
      {reviews &&
        (reviews.results.length > 0 ? (
          <ReviewdList>
            {reviews.results.map(({ id, author, content }) => (
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
