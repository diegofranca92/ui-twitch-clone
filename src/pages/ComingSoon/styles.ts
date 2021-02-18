import {Platform} from 'react-native'
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const statusBarHeight = Platform.OS == 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
    background: ${colors.primary};
    flex: 1;
    padding-top: ${statusBarHeight + 'px'};
    align-items: center;
    justify-content: center;
`;

export const Heading = styled.Text`
    color: ${colors.purple};
    font-family: roboto_500;
    font-size: 30px;
`;
