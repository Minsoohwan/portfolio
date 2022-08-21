import React, { forwardRef, useState } from 'react';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { animationNumber, props, propsType } from '../type/type';
import { useInView } from 'react-intersection-observer';
const rotate = keyframes`
    from {

        transform: translate(-50%, -50%) rotate(0deg);
  }
  to {

    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
export const appear = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 100;
    }
`;
const strech = keyframes`
    from{
        height: 0;
    }
    to{
        height: 90%;
    }
`;
export const textSlide = keyframes`
    from{
        transform: translateX(20%);
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 100;
    }
`;
const Section = styled.section`
    position: relative;
    top: ${(props: props) => (props.isWidthLarge ? '112px' : '100px')};
    bottom: 0;
    display: flex;
    flex-direction: column;
    //align-items: center;
    color: #000000;
    width: 100%;
    height: ${(props: props) =>
        props.isWidthLarge ? 'calc(100vh - 112px)' : 'calc(100vh - 100px)'};
    background-color: #fefaf3;
    transition: 0.7s ease;
    overflow: hidden;

    div:nth-child(1) {
        display: flex;
        flex-direction: column;
        padding: 20px;

        h1 {
            font-size: ${(props: props) =>
                props.isWidthLarge ? '50px' : '40px'};
            transform-origin: 0% 50%;
            border-bottom: 6px solid;
            margin-top: 20px;
            margin-bottom: 0;
            animation: ${(props: props) => props.isView && appear} 2s ease;
        }
    }
    div:nth-child(2) {
        animation: ${(props: props) => props.isContentView && appear} 2s ease;
        div:nth-child(1) {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            height: ${(props: props) =>
                props.isWidthLarge
                    ? '500px'
                    : props.isWidthSmall
                    ? '400px'
                    : '300px'};
            width: ${(props: props) =>
                props.isWidthLarge
                    ? '500px'
                    : props.isWidthSmall
                    ? '400px'
                    : '300px'};
            border: 2px solid black;
            border-radius: 51% 49% 66% 34% / 46% 39% 61% 54%;
            animation: ${rotate} 10s infinite linear reverse;
        }
        div:nth-child(2) {
            position: absolute;
            top: 50%;
            left: 50%;
            margin: auto;
            display: flex;
            height: ${(props: props) =>
                props.isWidthLarge
                    ? '500px'
                    : props.isWidthSmall
                    ? '400px'
                    : '300px'};
            width: ${(props: props) =>
                props.isWidthLarge
                    ? '500px'
                    : props.isWidthSmall
                    ? '400px'
                    : '300px'};
            border: 2px solid black;
            border-radius: 43% 57% 52% 48% / 36% 57% 43% 64%;
            animation: ${rotate} 10s infinite linear;
        }
        div:nth-child(3) {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            height: ${(props: props) =>
                props.isWidthLarge
                    ? '500px'
                    : props.isWidthSmall
                    ? '400px'
                    : '300px'};
            width: ${(props: props) =>
                props.isWidthLarge
                    ? '500px'
                    : props.isWidthSmall
                    ? '400px'
                    : '300px'};
            border: 2px solid black;
            border-radius: 43% 57% 52% 48% / 63% 57% 43% 37%;
            animation: ${rotate} 10s infinite linear;
        }
        div:nth-child(4) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: ${(props: props) =>
                props.isWidthLarge
                    ? '300px'
                    : props.isWidthSmall
                    ? '240px'
                    : '180px'};
            p {
                font-size: ${(props: props) =>
                    props.isWidthLarge
                        ? '20px'
                        : props.isWidthSmall
                        ? '15px'
                        : '12px'};
                cursor: pointer;
            }
        }
    }
`;
const Education = styled.article`
    width: 80%;
    height: 70%;
    gap: 20px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Bar = styled.article`
    position: relative;
    width: 15px;
    height: 90%;
    background-color: #000000;
    animation: ${strech} 1s ease;
    article:nth-child(1) {
        position: absolute;
        top: -15px;
        left: -7.5px;
        width: 30px;
        height: 30px;

        border-radius: 50%;
        background-color: #000000;
        article {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #ffffff;
        }
    }
    article:nth-child(2) {
        position: absolute;
        top: 50%;
        left: -7.5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #000000;
        article {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #ffffff;
        }
    }
    article:nth-child(3) {
        position: absolute;
        top: 80%;
        left: -7.5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #000000;
        article {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #ffffff;
        }
    }
    article:nth-child(4) {
        position: absolute;
        top: calc(100% - 15px);
        left: -7.5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #000000;
        article {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #ffffff;
        }
    }
`;
const EducationContent = styled.article`
    position: relative;
    width: calc(100% - 50px);
    max-width: 500px;
    height: 90%;
    background-color: #fefaf3;

    p:nth-child(1) {
        position: absolute;
        top: -25px;
        animation: ${textSlide} 1s ease;
    }
    p:nth-child(2) {
        position: absolute;
        top: calc(50% - 10px);

        animation: ${textSlide} 1s ease;
    }
    p:nth-child(3) {
        position: absolute;
        top: calc(80% - 12px);

        animation: ${textSlide} 1s ease;
    }
    p:nth-child(4) {
        position: absolute;
        top: calc(100% - 25px);

        animation: ${textSlide} 1s ease;
    }
`;

const AboutMe = forwardRef<HTMLDivElement, propsType>((props, ref) => {
    const [titleRef, inView] = useInView();
    const [contentRef, contentInView] = useInView();
    const { isWidthSmall, isWidthLarge } = props;
    const [about, setAbout] = useState<boolean>(false);
    const [educationContentAppear, setEducationContentAppear] =
        useState<animationNumber>({
            first: false,
            second: false,
            third: false,
            fourth: false,
        });

    useEffect(() => {
        if (about) {
            setTimeout(() => {
                setEducationContentAppear({
                    ...educationContentAppear,
                    first: true,
                });
            }, 1000);
            setTimeout(() => {
                setEducationContentAppear({
                    ...educationContentAppear,
                    first: true,
                    second: true,
                });
            }, 1300);
            setTimeout(() => {
                setEducationContentAppear({
                    ...educationContentAppear,
                    first: true,
                    second: true,
                    third: true,
                });
            }, 1600);
            setTimeout(() => {
                setEducationContentAppear({
                    first: true,
                    second: true,
                    third: true,
                    fourth: true,
                });
            }, 1900);
        }
    }, [about]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <Section
            ref={ref}
            isWidthLarge={isWidthLarge}
            isWidthSmall={isWidthSmall}
            isView={inView}
            isContentView={contentInView}
        >
            <div>
                <h1 ref={titleRef}>About Me</h1>
            </div>
            {!about ? (
                <div ref={contentRef}>
                    <div />
                    <div />
                    <div />
                    <div>
                        <p onClick={() => setAbout(!about)}>
                            안녕하세요. 스스로 공부하고 학습하며 개발자를 꿈꾸는
                            민수환입니다. React와 Typescript를 기반으로 Frontend
                            개발을 공부하고 있습니다. 최대한 다양한 기술을 익혀
                            상황에 맞는 기술을 적용하여 사용자 친화적인 서비스를
                            만드는 것을 목표로 하고있습니다.
                        </p>
                    </div>
                </div>
            ) : (
                <Education
                    onClick={() => {
                        setAbout(!about);
                        setEducationContentAppear({
                            first: false,
                            second: false,
                            third: false,
                            fourth: false,
                        });
                    }}
                >
                    <Bar>
                        <article>
                            <article />
                        </article>

                        <article>
                            <article />
                        </article>
                        <article>
                            <article />
                        </article>
                        <article>
                            <article />
                        </article>
                    </Bar>
                    <EducationContent>
                        {educationContentAppear.first && (
                            <p>`14.03 단국대학교 기계공학과 입학</p>
                        )}
                        {educationContentAppear.second && (
                            <p>`21.02 단국대학교 기계공학과 졸업</p>
                        )}
                        {educationContentAppear.third && (
                            <p>
                                `22.05 스파르타 코딩클럽 웹개발 종합반, 웹개발
                                플러스 수강
                            </p>
                        )}
                        {educationContentAppear.fourth && (
                            <p>
                                `22.06 스파르타 코딩클럽 리액트 기초반, 리액트
                                심화반 수강
                            </p>
                        )}
                    </EducationContent>
                </Education>
            )}
        </Section>
    );
});
export default AboutMe;
