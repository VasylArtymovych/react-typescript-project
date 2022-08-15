import { FC } from 'react';
import { Loader, Container } from './Loader.styled';
import { Oval } from 'react-loader-spinner';

export const LoaderOval: FC = () => {
  return (
    <Container>
      <Oval
        ariaLabel="loading-indicator"
        height={75}
        width={75}
        strokeWidth={5}
        color="red"
        secondaryColor="blue"
      />
    </Container>
  );
};

export const CustomSpinner: FC = () => {
  return (
    <Container>
      <Loader>
        <span style={{ '--i': 1 } as {}}></span>
        <span style={{ '--i': 2 } as {}}></span>
        <span style={{ '--i': 3 } as {}}></span>
        <span style={{ '--i': 4 } as {}}></span>
        <span style={{ '--i': 5 } as {}}></span>
        <span style={{ '--i': 6 } as {}}></span>
        <span style={{ '--i': 7 } as {}}></span>
        <span style={{ '--i': 8 } as {}}></span>
        <span style={{ '--i': 9 } as {}}></span>
        <span style={{ '--i': 10 } as {}}></span>
        <span style={{ '--i': 11 } as {}}></span>
        <span style={{ '--i': 12 } as {}}></span>
        <span style={{ '--i': 13 } as {}}></span>
        <span style={{ '--i': 14 } as {}}></span>
        <span style={{ '--i': 15 } as {}}></span>
        <span style={{ '--i': 16 } as {}}></span>
        <span style={{ '--i': 17 } as {}}></span>
        <span style={{ '--i': 18 } as {}}></span>
        <span style={{ '--i': 19 } as {}}></span>
        <span style={{ '--i': 20 } as {}}></span>
      </Loader>
    </Container>
  );
};
