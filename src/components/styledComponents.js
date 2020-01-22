import styled from 'styled-components';
import { Card } from 'antd';

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: #e5e5e5;
  margin-top: 50px;
  width: 500px;
  cursor: pointer;
`;

export const ArticleTagsSection = styled.div``;
export const ArticleLikeSection = styled.div``;
export const ArticleMainSection = styled.div``;

export const HeartImg = styled.img`
  width: 20px;
  height: 35px;
`;

export const StyledCard = styled(Card)`
  width: 500px;
`;
