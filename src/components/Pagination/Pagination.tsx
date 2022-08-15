import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledBtn, BtnContainer } from './Pagination.styled';

interface IProps {
  page: number;
  totalPages: number;
  onClick: React.MouseEventHandler<HTMLLabelElement>;
}

const Pagination: FC<IProps> = ({ page, totalPages, onClick }) => {
  const beforeTwoPage = page - 2;
  const beforePage = page - 1;
  const afterTwoPage = page + 2;
  const afterPage = page + 1;

  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  useEffect(() => {
    const pageToString = page.toString();
    setUrlSearchParams({ ...urlSearchParams, page: pageToString });
  }, [page, setUrlSearchParams, urlSearchParams]);

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
