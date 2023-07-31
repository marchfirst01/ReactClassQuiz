import { ArrowDown, ContentWrapper, Line, MenuTitle, MenuTitleClicked, MenuWrapper, MyTitle, MyWrapper, NavigationIconWrapper, NavigationWrapper, ProfileImg, ProfileName, ProfileWrapper, QuestionContent, QuestionNumber, QuestionWrapper, SearchIcon, SearchWrapper, Wrapper } from "../../styles/01/emotion";

export default function FaqPage() {

  return(
    <>
      <Wrapper>
        <SearchWrapper>
          <SearchIcon src="img-01/search.png" />
        </SearchWrapper>
        <MyWrapper>
          <MyTitle>마이</MyTitle>
          <ProfileWrapper>
            <ProfileImg src="img-01/profileImage.png" />
            <ProfileName>임정아</ProfileName>
          </ProfileWrapper>
        </MyWrapper>
        <MenuWrapper>
          <MenuTitle>공지사항</MenuTitle>
          <MenuTitle>이벤트</MenuTitle>
          <MenuTitleClicked>FAQ</MenuTitleClicked>
          <MenuTitle>Q&A</MenuTitle>
        </MenuWrapper>
        <Line></Line>
        <ContentWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.01</QuestionNumber>
            <QuestionContent>리뷰 작성은 어떻게 하나요?</QuestionContent>
          </QuestionWrapper>
          <ArrowDown src="img-01/arrow-down.png" />
        </ContentWrapper>
        <ContentWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.02</QuestionNumber>
            <QuestionContent>리뷰 수정/삭제는 어떻게 하나요?</QuestionContent>
          </QuestionWrapper>
          <ArrowDown src="img-01/arrow-down.png" />
        </ContentWrapper>
        <ContentWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.03</QuestionNumber>
            <QuestionContent>아이디/비밀번호를 잊어버렸어요</QuestionContent>
          </QuestionWrapper>
          <ArrowDown src="img-01/arrow-down.png" />
        </ContentWrapper>
        <ContentWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.04</QuestionNumber>
            <QuestionContent>회원탈퇴를 하고싶어요.</QuestionContent>
          </QuestionWrapper>
          <ArrowDown src="img-01/arrow-down.png" />
        </ContentWrapper>
        <ContentWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.05</QuestionNumber>
            <QuestionContent>출발지 설정은 어떻게 하나요?</QuestionContent>
          </QuestionWrapper>
          <ArrowDown src="img-01/arrow-down.png" />
        </ContentWrapper>
        <ContentWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.06</QuestionNumber>
            <QuestionContent>비밀번호를 변경하고 싶어요.</QuestionContent>
          </QuestionWrapper>
          <ArrowDown src="img-01/arrow-down.png" />
        </ContentWrapper>
        <Line></Line>
        <NavigationWrapper>
          <NavigationIconWrapper><img src="img/home.png"/>홈
          </NavigationIconWrapper>
          <NavigationIconWrapper><img src="img/map.png"/>잇츠로드
          </NavigationIconWrapper>
          <NavigationIconWrapper><img src="img/heart.png"/>마이찜
          </NavigationIconWrapper>
          <NavigationIconWrapper><img src="img/myprofile.png"/>마이
          </NavigationIconWrapper>
        </NavigationWrapper>
      </Wrapper>
    </>
  )
}