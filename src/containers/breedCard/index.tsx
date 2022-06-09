import React, { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toast';
import { useNavigate } from 'react-router-dom';

import Score from '../../components/score';
import Spinner from '../../components/spinner';
import routes from '../../containers/app/routes';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';
import { Breed } from '../../types';
import { useFormatMessage } from '../../hooks/useFormatMessage';
import { useStateValue, StoreContextType } from '../../store';

import usePerformVote from './usePerformVote';
import {
  Container,
  Title,
  Description,
  ScoresWrapper,
  Image,
  Wrapper,
  WikipediaButton,
  MainContainer,
  ButtonContainer,
  UpVoteButton,
  DownVoteButton,
  ThumbIcon,
  HeartIcon,
  HeartContainer,
} from './styles';

const BreedCard = ({
  id,
  image,
  name,
  description,
  adaptability,
  affection_level,
  child_friendly,
  dog_friendly,
  health_issues,
  intelligence,
  energy_level,
  social_needs,
  wikipedia_url,
  reference_image_id,
  vote,
}: Breed & { vote: number }) => {
  const formatMessage = useFormatMessage();
  const navigate = useNavigate();
  const performVote = usePerformVote();
  const prevVote = useRef(vote);
  const [_, { updateState }] = useStateValue() as StoreContextType;

  useDidUpdateEffect(() => {
    if (prevVote.current !== vote)
      toast[vote ? 'success' : 'error'](
        formatMessage(`breedCard.${vote ? 'liked' : 'unliked'}`, { name }),
      );
  }, [vote]);

  const scores = {
    adaptability,
    affection_level,
    dog_friendly,
    child_friendly,
    health_issues,
    intelligence,
    energy_level,
    social_needs,
  };

  const handleWikipediaClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    window.open(wikipedia_url, '_blank');
    event.stopPropagation();
  };

  const handleClick = () => {
    updateState('currentCat', name);
    navigate(`${routes.images}/${id}`);
  };

  const handleUpVote = () => performVote.mutate({ imageId: reference_image_id, value: 1 });
  const handleDownVote = () => performVote.mutate({ imageId: reference_image_id, value: 0 });

  return (
    <MainContainer>
      <ButtonContainer>
        <DownVoteButton
          handleClick={handleDownVote}
          loading={performVote.isLoading}
          kind={performVote.isLoading || vote === 0 ? 'disabled' : 'secondary'}
        >
          <ThumbIcon iconName="unlike" alt={formatMessage('breedCard.unlike')} />
        </DownVoteButton>
        <HeartContainer>
          {performVote.isLoading ? (
            <Spinner width="2.4rem" height="2.4rem" />
          ) : (
            <HeartIcon
              iconName={vote ? 'heart' : 'emptyHeart'}
              alt={formatMessage(`breedCard.${vote ? 'heart' : 'emptyHeart'}`)}
            />
          )}
        </HeartContainer>
        <UpVoteButton
          handleClick={handleUpVote}
          loading={performVote.isLoading}
          kind={performVote.isLoading || vote === 1 ? 'disabled' : 'primary'}
        >
          <ThumbIcon iconName="like" alt={formatMessage('breedCard.like')} />
        </UpVoteButton>
        <WikipediaButton handleClick={handleWikipediaClick}>
          <FormattedMessage id="breedCard.wikipedia" />
        </WikipediaButton>
      </ButtonContainer>
      <Container onClick={handleClick}>
        {image && <Image src={image.url} alt="Cat image" />}
        <Wrapper>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <ScoresWrapper>
            {Object.entries(scores).map(([name, amount], index) => (
              <Score key={`${id}-${index}`} amount={amount} name={name} />
            ))}
          </ScoresWrapper>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default BreedCard;
