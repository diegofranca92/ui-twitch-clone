import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
    padding: 8px 0 0;
`;

export const ChannelContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 14px;
    margin-bottom: 25px;
`;

export const LeftSide = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.View`
    background: ${colors.gray};
    width: 48px; 
    height: 48px;
    border-radius: 24px;
`;

export const Column = styled.View`
    padding-left: 10px;
`;

export const Username = styled.Text`
 color: ${colors.secondary};
 font-family: roboto_500;
 font-size: 16px;
`;

export const Info = styled.Text`
 color: ${colors.gray};
 font-size: 13px;
 margin-top: 1px;
`;

export const RigthSide = styled.View`

`;

export const WhiteCircle = styled.View`
    background: ${colors.secondary};
    width: 9px; 
    height: 9px;
    border-radius: 4.5px;
    opacity: 0.85px;
`;
