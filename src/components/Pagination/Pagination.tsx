import { FC } from "react";
import { StyledBtn, BtnContainer } from "./Pagination.styled";
import { increment, decrement, setPage } from "redux/moviesSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const Pagination: FC = () => {
  const { page, totalPages } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();
  const beforeTwoPage = page - 2;
  const beforePage = page - 1;
  const afterTwoPage = page + 2;
  const afterPage = page + 1;

  const onClick: React.MouseEventHandler<HTMLLabelElement> = (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    const value = e.target.textContent;

    if (value === "next") {
      return dispatch(increment());
    }
    if (value === "prev") {
      return dispatch(decrement());
    }
    dispatch(setPage(Number(value)));
  };

  return (
    <BtnContainer>
      {page > 1 && (
        <StyledBtn type="button" onClick={onClick}>
          prev
        </StyledBtn>
      )}
      {page > 1 && (
        <StyledBtn type="button" onClick={onClick}>
          1
        </StyledBtn>
      )}
      {page > 4 && <StyledBtn type="button">...</StyledBtn>}
      {page > 3 && (
        <StyledBtn type="button" onClick={onClick}>
          {beforeTwoPage}
        </StyledBtn>
      )}
      {page > 2 && (
        <StyledBtn type="button" onClick={onClick}>
          {beforePage}
        </StyledBtn>
      )}
      <StyledBtn type="button" onClick={onClick} current>
        {page}
      </StyledBtn>
      {page < totalPages - 1 && (
        <StyledBtn type="button" onClick={onClick}>
          {afterPage}
        </StyledBtn>
      )}
      {page < totalPages - 2 && (
        <StyledBtn type="button" onClick={onClick}>
          {afterTwoPage}
        </StyledBtn>
      )}
      {page < totalPages - 3 && <StyledBtn type="button">...</StyledBtn>}
      {page < totalPages && (
        <StyledBtn type="button" onClick={onClick}>
          {totalPages}
        </StyledBtn>
      )}
      {page < totalPages && (
        <StyledBtn type="button" onClick={onClick}>
          next
        </StyledBtn>
      )}
    </BtnContainer>
  );
};

export default Pagination;
