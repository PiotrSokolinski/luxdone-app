import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../button';

import { Container, Header, Subheader, ButtonWrapper, StyledIcon } from './styles';

type ButtonType = {
  action: () => void;
  messageId: string;
};

type PageIssueType = {
  headerId: string;
  subheaderId: string;
  icon: {
    iconName: string;
    alt: string;
  };
  leftButton: ButtonType;
  rightButton: ButtonType;
};
const PageIssue = ({ headerId, subheaderId, leftButton, rightButton, icon }: PageIssueType) => {
  const { action: leftAction, messageId: leftMessageId } = leftButton;
  const { action: rightAction, messageId: rightMessageId } = rightButton;

  return (
    <Container>
      <StyledIcon {...icon} />
      <Header>
        <FormattedMessage id={headerId} />
      </Header>
      <Subheader>
        <FormattedMessage id={subheaderId} />
      </Subheader>
      <ButtonWrapper>
        <Button handleClick={leftAction}>
          <FormattedMessage id={leftMessageId} />
        </Button>
        <Button handleClick={rightAction}>
          <FormattedMessage id={rightMessageId} />
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default PageIssue;
