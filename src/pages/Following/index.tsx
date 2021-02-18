import React from 'react';

import { FlatList, View } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';

import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Title from '../../components/Title'
import CategoryList from '../../components/CategoryList'

import { 
  Wrapper,
  Container,
  Main 
} from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const {indices, data} = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {
        key: 'C1',
        render: () => <CategoryList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <View />,
      },
      {
        key: 'CONTINUE_WHATCHING',
        render: () => <Title>Continue Whatching</Title>,
        isTitle: true,
      },
      {
        key: 'C3',
        render: () => <View />,
      },
      {
        key: 'OFFLINE_CHANNEL',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C4',
        render: () => <View />,
      },
    ];

    // array com indices dos elementos de titulo
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices
    };

  }, [])
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            // Efeito de Refresh
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
