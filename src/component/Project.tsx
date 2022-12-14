import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { props, propsType } from '../type/type';
import { GoTriangleDown, GoTriangleRight } from 'react-icons/go';
import { useInView } from 'react-intersection-observer';
import { appear } from './AboutMe';

const Section = styled.section`
    position: relative;
    top: ${(props: props) => (props.isWidthLarge ? '112px' : '100px')};
    bottom: 0;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    color: #ffffff;
    width: 100%;
    height: ${(props: props) =>
        props.isWidthLarge ? 'calc(100vh - 112px)' : 'calc(100vh - 100px)'};
    background-color: #0a3c4b;
    transition: 0.7s ease;
    overflow: auto;
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    h1 {
        font-size: ${(props: props) => (props.isWidthLarge ? '50px' : '40px')};
        transform-origin: 0% 50%;
        border-bottom: 6px solid;
        margin-top: 20px;
        margin-bottom: 0;
        animation: ${(props: props) => props.isView && appear} 2s ease;
    }
`;
const ProjectLayout = styled.div`
    margin: 20px auto;
    width: calc(100% - 20px);
    height: 70%;
    max-width: 1200px;
    overflow: ${(props: props) => (props.isWidthSmall ? 'hidden' : 'scroll')};
    ::-webkit-scrollbar {
        display: none;
    }
    display: flex;
    flex-direction: ${(props: props) =>
        props.isWidthSmall ? 'row' : 'column'};
    align-items: center;
    border-radius: 10px;
    transform: perspective(500px) rotate(0.001deg); //스크롤시 잔상 방지
    transition: 0.7s ease;
    left: 0px;
    animation: ${(props: props) => props.isView && appear} 2s ease;
`;
const VideoBox = styled.div`
    width: ${(props: props) =>
        props.isWidthSmall ? '70%' : 'calc(100% - 20px)'};
    padding: 10px;
    max-height: ${(props: props) => (props.isWidthSmall ? '100%' : '')};
    overflow: ${(props: props) => (props.isWidthSmall ? 'auto' : 'visible')};
    ::-webkit-scrollbar {
        display: none;
    }
    video {
        width: 100%;
    }
    h3 {
        width: fit-content;
        border-bottom: 2px solid;
    }
    div {
        margin-top: 10px;
        border-radius: 10px;
        border: 3px solid #ffffff;
        white-space: pre-line;
        padding: 0 15px;
        p {
            text-indent: 10px;
            margin: 8px 0;
            font-size: 14px;
        }
    }
`;
const ExplainBox = styled.div`
    width: ${(props: props) =>
        props.isWidthSmall ? '30%' : 'calc(100% - 20px)'};
    max-height: 100%;
    padding: 10px;
    overflow: ${(props: props) => (props.isWidthSmall ? 'auto' : 'visible')};
    ::-webkit-scrollbar {
        display: none;
    }
    div {
        padding: 10px;
        border-radius: 10px;
        border: 5px outset #ffffff;

        p {
            font-size: 14px;
            text-indent: 10px;
            white-space: pre-wrap;
        }
        h4 {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        a {
            font-weight: bold;
            color: blue;
        }
    }
    h3 {
        border-bottom: 2px solid;
        width: fit-content;
    }
`;
const Project = forwardRef<HTMLDivElement, propsType>((props, ref) => {
    const { isWidthSmall, isWidthLarge } = props;
    const [titleRef, inView] = useInView();
    const [contentRef, contentInView] = useInView();
    const [skillsIsOpen, setSkillsIsOpen] = useState<{
        one: boolean;
        two: boolean;
        three: boolean;
        four: boolean;
        five: boolean;
    }>({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
    });
    const [isOpen, setIsOpen] = useState<{
        one: boolean;
        two: boolean;
        three: boolean;
        four: boolean;
        five: boolean;
    }>({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
    });

    return (
        <Section
            ref={ref}
            isWidthLarge={isWidthLarge}
            isWidthSmall={isWidthSmall}
        >
            <Title isView={inView} isWidthLarge={isWidthLarge}>
                <h1 ref={titleRef}>Project</h1>
            </Title>
            <ProjectLayout
                isWidthSmall={isWidthSmall}
                ref={contentRef}
                isView={contentInView}
            >
                <VideoBox isWidthSmall={isWidthSmall}>
                    <video controls>
                        <source src="/video/JUSTDOIT.mp4" />
                    </video>

                    <div>
                        <h3>프로젝트 개요</h3>
                        <p>
                            바쁜 일상 속 계획 수립과 이행이 어려운 사람들이 조금
                            더 재미있게 계획을 실천할 수 있도록 도와주는 웹
                            서비스. 캐릭터 성장 시스템을 통해 계획 이행에 대한
                            동기부여가 되고, 커뮤니티를 통해 다른 사람들과
                            계획을 공유하고 채팅을 통해 대화하며 계획 실천에
                            즐거움을 더한다.
                        </p>

                        <h3>후기</h3>
                        <p>
                            이 프로젝트는 지금까지 공부해 온 React의 지식을 총
                            정리한 프로젝트라고 생각한다. 기본적인 로그인
                            Token관리부터 Refresh Token을 이용한 Access Token
                            재발급, 무한스크롤, 실시간 채팅 등 경험할 수 있는
                            기능은 거의 다 해본 것 같다.
                        </p>
                        <p>
                            아직 공부를 하고있는 단계라 하드 코딩으로 하나하나
                            작성하다보니 코드를 추상화하지 못한점이 아쉽다. 차차
                            리펙토링을 통해 코드를 추상화하여 클린 코드를 만들기
                            위해 조금 더 공부해야겠다는 생각이 들었다.
                        </p>
                    </div>
                </VideoBox>
                <ExplainBox isWidthSmall={isWidthSmall}>
                    <div>
                        <h3>기술 Stack</h3>

                        <p>
                            React, Typescript, Recoil, React-Query, SockJs,
                            Stomp.js, GithubAction, AWS S3
                        </p>
                        <h4
                            onClick={() =>
                                setSkillsIsOpen({
                                    ...skillsIsOpen,
                                    one: !skillsIsOpen.one,
                                })
                            }
                        >
                            {skillsIsOpen.one ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            Typescript
                        </h4>
                        {skillsIsOpen.one && (
                            <p>
                                {
                                    'JavsScript 기반 언어로 목적에 맞지 않는 타입 사용을 최소화 하여 코드 작성 단계에서 오류를 확인할 수 있고 버그의 사전 예방에 유용하기 때문에 기반 언어로 채택했습니다.'
                                }
                            </p>
                        )}
                        <h4
                            onClick={() =>
                                setSkillsIsOpen({
                                    ...skillsIsOpen,
                                    two: !skillsIsOpen.two,
                                })
                            }
                        >
                            {skillsIsOpen.two ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            React
                        </h4>
                        {skillsIsOpen.two && (
                            <p>
                                {
                                    'JUST DO IT의 개발 Tool은 React입니다. React는 메타에서 개발한 open source library로 Dirty checking과 Virtual DOM을 활용하여 update가 필요한 DOM요소를 찾아 업데이트하기 때문에 re-rendering이 잦은 웹에서 효율적인 동작을 합니다. 또한 React-Hooks 메소드는 보다 편리한 개발 환경을 만들어줍니다.'
                                }
                            </p>
                        )}
                        <h4
                            onClick={() =>
                                setSkillsIsOpen({
                                    ...skillsIsOpen,
                                    three: !skillsIsOpen.three,
                                })
                            }
                        >
                            {skillsIsOpen.three ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            Recoil
                        </h4>
                        {skillsIsOpen.three && (
                            <p>
                                {
                                    'Context API 기반 전역 상태관리 library로 사용법이 간단합니다. Redux의 경우 사용하기 위해 action type, action create function, reducer 등 boiler plate가 많기 때문에 사용이 간편한 Recoil을 채택했습니다. 로그인 시 Token 저장과 Modal의 state를 부모 컴포넌트로 이동, React Query로 받아온 data를 전역으로 사용하기 위하여 사용했습니다.'
                                }
                            </p>
                        )}
                        <h4
                            onClick={() =>
                                setSkillsIsOpen({
                                    ...skillsIsOpen,
                                    four: !skillsIsOpen.four,
                                })
                            }
                        >
                            {skillsIsOpen.four ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            React Query
                        </h4>
                        {skillsIsOpen.four && (
                            <p>
                                {
                                    '서버 상태관리 library로 기존 store의 data와 서버의 data가 달라 발생하는 오류를 없애고 오래된 정보를 다시 caching하여 빠른 데이터 반영을 위하여 사용했습니다.'
                                }
                            </p>
                        )}
                        <h4
                            onClick={() =>
                                setSkillsIsOpen({
                                    ...skillsIsOpen,
                                    five: !skillsIsOpen.five,
                                })
                            }
                        >
                            {skillsIsOpen.five ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            SockJs & Stomp.js
                        </h4>
                        {skillsIsOpen.five && (
                            <>
                                <p>
                                    {
                                        '-WebSocket은 http에서 지원하지 않는 양방향 실시간 스트리밍을 가능하게합니다. SockJS는 모든 최신 브라우저와 WebSocket 프로토콜을 지원하지 않는 환경에서 작동하기때문에 사용하였습니다.'
                                    }
                                </p>
                                <p>
                                    -Stomp.js는 Javascript환경에서 Stomp를
                                    사용하게 해줍니다. stomp는 simple text
                                    oriented messaging protocol의 약자로
                                    메시지의 형식, 유형, 내용 등을 정의해줍니다.
                                    Text, Binary 메시지 type만 정의하는
                                    WebSocket에 비해 사용하기가 간단해
                                    사용했습니다.
                                </p>
                            </>
                        )}
                        <h3>주요 기능</h3>
                        <h4>Page</h4>
                        <p style={{ textIndent: '0' }}>
                            {
                                '-TODO 작성/완료/삭제\n-TODO완료에 따른 캐릭터 레벨업/스텝업\n-1:1채팅/단체채팅\n-친구요청/수락/거절/삭제\n-친구페이지\n-커뮤니티'
                            }
                        </p>
                        <h4>Chatting</h4>
                        <p style={{ textIndent: '0' }}>
                            {
                                '-1:1 채팅 혹은 커뮤니티를 통해 단체 채팅 가능\n-채팅 기록이 DB에 저장되어 과거 채팅 기록 확인 가능\n-Send type을 이용하여 입/퇴장 메시지 발송'
                            }
                        </p>

                        <h3>Issue & Trouble Shooting</h3>
                        <p>
                            코드를 포함한 정보는{' '}
                            <a href="https://github.com/minsoohwan/ReactEX">
                                github
                            </a>
                            에 정리되어 있습니다.
                        </p>
                        <h4
                            onClick={() =>
                                setIsOpen({ ...isOpen, one: !isOpen.one })
                            }
                        >
                            {isOpen.one ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            게시물 filter
                        </h4>
                        {isOpen.one && (
                            <>
                                <p>
                                    <b>문제 :</b> 게시판에서 게시물을 filter할
                                    때 query data로 넘겨주는 filter값이 바뀌지
                                    않는 문제가 발생함.
                                </p>
                                <p>
                                    <b>접근 :</b> 기존의
                                    queryClient.invalidateQueries()는 data만
                                    다시 캐싱하기 때문에 api통신을 다시 하지
                                    않는다고 생각함.
                                </p>
                                <p>
                                    <b>해결방법1 :</b>{' '}
                                    queryClient.invalidateQueries()를 지우고
                                    refetchInterval을 useInfiniteQuery의
                                    onSuccess 콜백 함수에 추가해 주기적으로
                                    refetch하게 함.
                                </p>
                                <p>
                                    <b>문제점</b> : 불피요한 통신과 refetch가
                                    많아저 성능 저하가 예상됨.
                                </p>
                                <p>
                                    <b>해결방법2</b> : select state값이 바뀔 때
                                    useEffect를 통해 refetch하게 함. 결과적으로
                                    원하는 filter를 선택했을 때 refetch가 한
                                    번만 일어나게 수정됨.
                                </p>
                            </>
                        )}
                        <h4
                            onClick={() =>
                                setIsOpen({ ...isOpen, two: !isOpen.two })
                            }
                        >
                            {isOpen.two ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            로그인 오류
                        </h4>
                        {isOpen.two && (
                            <>
                                <p>
                                    <b>문제 :</b> 로그인 후 메인 페이지 이동 시
                                    로그인 정보가 없다는 alert 출력 후 로그인
                                    페이지로 돌아감. 로그인 페이지로 돌아오면
                                    이미 로그인 돼있다는 alert가 다시 출력되고
                                    메인페이지로 다시 이동됨.
                                </p>
                                <p>
                                    <b>접근 :</b> React-Query의 OnSuccess
                                    callback 함수가 비동기로 처리되어 Token이
                                    localStorage에 저장되는 것과 alert, page
                                    이동이 같이 이루어 지기 때문에 메인 page에서
                                    토큰이 없다고 판단된다고 생각.
                                </p>
                                <p>
                                    <b>해결방법1 :</b> 로그인 page의 muation
                                    함수에서 alert와 nav를 setTImeout으로 0.1초
                                    뒤에 실행하게함.
                                </p>
                                <p>
                                    <b>해결방법2</b> : API 통신을 할 때 Token
                                    저장과 alert를 출력하고, mutation 함수가
                                    성공했을 때 메인 page로 이동하게 함. 위
                                    기술한 해결방법은 mutation함수가 성공하고
                                    0.1초의 시간이 지연되지만 이 해결법은 시간의
                                    지연 없이 바로 동작하기 때문에 더
                                    효율적이라고 생각함.
                                </p>
                            </>
                        )}
                        <h4
                            onClick={() =>
                                setIsOpen({ ...isOpen, three: !isOpen.three })
                            }
                        >
                            {isOpen.three ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            Event Bubbling
                        </h4>
                        {isOpen.three && (
                            <>
                                <p>
                                    <b>문제 :</b> 친구 목록 page에서 친구 삭제를
                                    누르면 부모 component의 친구의 메인
                                    page로가는 event가 같이 실행되는 Event
                                    Bubbling이 발생함.
                                </p>
                                <p>
                                    <b>해결방법1 :</b> 친구 삭제 버튼에
                                    e.stopPropagation()을 추가해 Event
                                    Bubbling을 막음.
                                </p>
                            </>
                        )}
                        <h4
                            onClick={() =>
                                setIsOpen({ ...isOpen, four: !isOpen.four })
                            }
                        >
                            {isOpen.four ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            Library CSS
                        </h4>
                        {isOpen.four && (
                            <>
                                <p>
                                    <b>문제 :</b> react-datepicker library를
                                    원하는대로 수정할 수가 없어 원하는 디자인이
                                    나오지 않게됨.
                                </p>
                                <p>
                                    <b>접근 :</b> react-datepicker에 해당하는
                                    node_modules경로로 들어가 직접 css를
                                    수정하면 될 것이라고 생각.
                                </p>
                                <p>
                                    <b>시도 :</b> node_modules경로에서 직접
                                    css를 수정해 봤지만 반영이 되지 않음.
                                </p>
                                <p>
                                    <b>해결방법</b> : 개발자도구에서 요소
                                    선택으로 해당 요소를 선택한 뒤 class를 찾고
                                    css파일을 만들어 !important로 내가 지정한
                                    style로 덮어씌움.
                                </p>
                            </>
                        )}
                        <h4
                            onClick={() =>
                                setIsOpen({ ...isOpen, five: !isOpen.five })
                            }
                        >
                            {isOpen.five ? (
                                <GoTriangleDown />
                            ) : (
                                <GoTriangleRight />
                            )}
                            비효율적인 Component
                        </h4>
                        {isOpen.five && (
                            <>
                                <p>
                                    <b>문제 :</b> 로그인, 회원가입, 메인, 친구의
                                    메인 4개의 페이지를 제외한 모든 페이지에서
                                    공통된 component들을 페이지마다 각각
                                    사용하고 있어 비효율적이라고 생각.
                                </p>
                                <p>
                                    <b>해결방법 :</b> CommonLayout component를
                                    만들어 공통된 component를 이용해 layout을
                                    만들고 props의 children 속성을 사용해
                                    페이지를 layout 사이에 위치시켜 해결.
                                </p>
                            </>
                        )}
                    </div>
                </ExplainBox>
            </ProjectLayout>
        </Section>
    );
});
export default Project;
