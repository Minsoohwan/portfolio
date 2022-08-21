import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';
import { animationNumber, props, propsType } from '../type/type';
import { appear, textSlide } from './AboutMe';

const arrowAni = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-5px);
    }
    50%{
        opacity: 100;
    }
    100%{
        opacity: 0;
        transform: translateY(5px);
    }
`;
const Section = styled.section`
    position: relative;
    top: ${(props: props) => (props.isWidthLarge ? '112px' : '100px')};
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    width: 100%;
    height: ${(props: props) =>
        props.isWidthLarge ? 'calc(100vh - 112px)' : 'calc(100vh - 100px)'};
    background-color: black;
    div:nth-child(1) {
        transform: rotateX(30deg) rotateY(-30deg);
        width: ${(props: props) => (props.isWidthSmall ? '666px' : '198px')};
        height: ${(props: props) => (props.isWidthSmall ? '250px' : '190px')};
        position: relative;
        top: 40px;
        h1 {
            font-size: ${(props: props) =>
                props.isWidthSmall ? '60px' : '30px'};
            margin: 10px 0;
            transform-origin: left center;
            text-shadow: 1px -1px 0 #787878, -1px -3px 1px #808080,
                -2px -4px 1px #888888, -3px -5px 1px #909090,
                -4px -6px 1px #989898, -5px -7px 1px #a0a0a0,
                -6px -8px 1px #a8a8a8, -7px -9px 1px #b0b0b0,
                -8px -10px 1px #b8b8b8, -9px -11px 1px #c0c0c0,
                -10px -12px 1px #c8c8c8, -11px -13px 1px #d0d0d0,
                -12px -14px 1px #d8d8d8, -13px -15px 1px #e0e0e0,
                -14px -16px 1px #e8e8e8, -15px -17px 1px #ffffff;
            animation: ${textSlide} 1s ease;
        }
    }
    div:nth-child(2) {
        width: ${(props: props) => (props.isWidthSmall ? '240px' : '200px')};
        height: ${(props: props) => (props.isWidthSmall ? '260px' : '216px')};
        margin: 80px auto auto auto;
        background-color: #ffffff;
        background-image: url('/img/민수환_profile.png');
        background-size: ${(props: props) =>
            props.isWidthSmall ? '200px' : '160px'};
        background-position: center;
        border-radius: 50%;
        animation: ${appear} 1s ease;
    }
    div:nth-child(3) {
        position: absolute;
        bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        animation: ${appear} 1s ease;
        article {
            animation: ${arrowAni} 1s ease-in-out infinite;
        }
    }
`;

const Main = (props: propsType) => {
    const { isWidthSmall, isWidthLarge } = props;
    const [Intro, setIntro] = useState<animationNumber>({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
    });

    useEffect(() => {
        setIntro({
            ...Intro,
            first: true,
        });
        setTimeout(() => {
            setIntro({
                ...Intro,
                first: true,
                second: true,
            });
        }, 1000);
        setTimeout(() => {
            setIntro({
                ...Intro,
                first: true,
                second: true,
                third: true,
            });
        }, 2000);
        setTimeout(() => {
            setIntro({
                ...Intro,
                first: true,
                second: true,
                third: true,
                fourth: true,
            });
        }, 3000);
        setTimeout(() => {
            setIntro({
                ...Intro,
                first: true,
                second: true,
                third: true,
                fourth: true,
                fifth: true,
            });
        }, 4000);
        setTimeout(() => {
            setIntro({
                first: true,
                second: true,
                third: true,
                fourth: true,
                fifth: true,
                sixth: true,
            });
        }, 5000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <Section isWidthLarge={isWidthLarge} isWidthSmall={isWidthSmall}>
            {isWidthSmall ? (
                <>
                    <div>
                        {Intro.first && <h1>안녕하세요.</h1>}
                        {Intro.second && <h1>Frontend 개발자를 꿈꾸는</h1>}
                        {Intro.third && <h1>민수환입니다.</h1>}
                    </div>
                    {Intro.fourth && <div />}
                    {Intro.fifth && (
                        <div>
                            <p>스크롤해서 저를 더 알아보세요!</p>
                            <article>
                                <FaArrowDown />
                            </article>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div>
                        {Intro.first && <h1>안녕하세요.</h1>}
                        {Intro.second && <h1>Frontend</h1>}
                        {Intro.third && <h1>개발자를 꿈꾸는</h1>}
                        {Intro.fourth && <h1>민수환입니다.</h1>}
                    </div>
                    {Intro.fifth && <div />}
                    {Intro.sixth && (
                        <div>
                            <p>스크롤해서 저를 더 알아보세요!</p>
                            <article>
                                <FaArrowDown />
                            </article>
                        </div>
                    )}
                </>
            )}
        </Section>
    );
};

export default Main;
