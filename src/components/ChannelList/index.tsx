import React from 'react';

import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RigthSide,
  WhiteCircle
} from './styles';

const ChannelList: React.FC = () => {

  const ChannelItem: React.FC = () => {
    return (
      <ChannelContainer>
        <LeftSide>
          <Avatar/>
          <Column>
          <Username>diego franca official</Username>
          <Info>45 news videos</Info>
          </Column>
        </LeftSide>

        <RigthSide>
          <WhiteCircle />
        </RigthSide>
      </ChannelContainer>
    );
  };

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
