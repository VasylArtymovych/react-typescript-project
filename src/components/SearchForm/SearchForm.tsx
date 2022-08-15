import { FC } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BiSearch } from 'react-icons/bi';
import { StyledForm, StyledInput, Button } from './SearchForm.styled';

const validationSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

interface IFormProps {
  onSubmit: (name: string) => void;
}

interface MyFormValues {
  search: string;
}

const SearchForm: FC<IFormProps> = ({ onSubmit }) => {
  const initialValues: MyFormValues = { search: '' };

  // useEffect(() => {
  //   const searchParam = urlSearchParams.get('search');
  //   if (searchParam) {
  //     onSubmit(searchParam);
  //   }
  // }, [onSubmit, urlSearchParams]);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          const { search } = values;
          onSubmit(search);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledInput type="text" name="search" placeholder="search name" />
          <Button type="submit">
            <BiSearch size={22} color="white" />
          </Button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default SearchForm;
