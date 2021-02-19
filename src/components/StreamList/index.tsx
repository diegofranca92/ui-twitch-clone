import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColmun,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
  ScreamDescription,
  ScreamCategory
} from './styles';

const StreamList: React.FC = () => {

  const StreamItem: React.FC = () => {
    return (
      <StreamContainer>
        <StreamThumbnail source={streamThumbnail}/>

        <StreamColmun>
          <StreamRow>
            <StreamHeader>
              <StreamAvatar />
              <StreamUsername numberOfLines={1}>diego</StreamUsername>
            </StreamHeader>
            <ScreamDescription numberOfLines={1}>
              Front-End com React.js e React Native
            </ScreamDescription>
            <ScreamCategory numberOfLines={1}>
              Science & Technology
            </ScreamCategory>
          </StreamRow>
          <TagRow>
            <TagView>
              <TagText>Portuguese</TagText>
            </TagView>
            <TagView>
              <TagText>Web Development</TagText>
            </TagView>
          </TagRow>
        </StreamColmun>
      </StreamContainer>
    );
  }; 

  return (
      <List>
        <StreamItem />
        <StreamItem />
        <StreamItem />
        <StreamItem />
      </List>
  );
};

export default StreamList;
