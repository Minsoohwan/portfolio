import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMediaQuery } from 'react-responsive';
import Main from './component/Main';
import AboutMe from './component/AboutMe';
import { props, scroll } from './type/type';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';

const openSlideAni = keyframes`
    to{
        transform: translateY(-100%);
    }
    from{
        transform: translateY(0);
    }
`;
const closeSlideAni = keyframes`
    to{
        transform: translateY(0);
    }
    from{
        transform: translateY(-100%);
    }
`;

const OutLine = styled.div`
    position: relative;
    font-family: 'TITLEG';
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
const TopNavBar = styled.header`
    position: fixed;
    top: 0;
    height: ${(props: props) => (props.isWidthLarge ? '112px' : '100px')};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props: props) =>
        props.isWidthSmall ? 'center' : 'space-between'};
    gap: ${(props: props) => (props.isWidthSmall ? '30%' : '0')};
    width: 100%;
    background-color: ${(props: props) =>
        props.scrollPosition ? 'white' : 'black'};
    color: ${(props: props) => (props.scrollPosition ? 'black' : 'white')};
    z-index: 5;
    transition: 0.2s ease;
    font-weight: bold;
    div:nth-child(1) {
        font-family: 'TitleFont';
        font-size: ${(props: props) => (props.isWidthLarge ? '30px' : '25px')};
        white-space: pre-line;
        padding: 20px;
        text-align: center;
        transition: 0.2s ease;
        cursor: pointer;
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: row;
        padding: 20px;
        gap: 20px;
        transition: 0.2s ease;
    }
    p {
        display: ${(props: props) =>
            props.isWidthSmall ? 'inline-block' : 'none'};
        font-size: ${(props: props) => (props.isWidthLarge ? '22px' : '17px')};
        cursor: pointer;

        &:hover {
            scale: 1.1;
            transition: 0.6s ease;
        }
        &:hover:after {
            transform: scaleX(1);
        }
        &:after {
            display: block;
            transform-origin: 0% 50%;
            content: '';
            border-bottom: ${(props: props) =>
                props.scrollPosition
                    ? '3px solid black'
                    : '3px solid #ffffff;'};
            transform: scaleX(0);
            transition: 0.6s ease;
        }
    }
`;
const NavSlide = styled.div`
    position: fixed;
    top: ${(props: props) => (props.isWidthLarge ? '112px' : '100px')};
    width: 100%;
    color: black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    z-index: 3;
    animation: ${(props: props) => (props.slide ? closeSlideAni : openSlideAni)}
        0.7s ease;

    p {
        font-size: 22px;
        cursor: pointer;

        &:hover {
            scale: 1.1;
            transition: 0.6s ease;
        }
        &:hover:after {
            transform: scaleX(1);
        }
        &:after {
            display: block;
            transform-origin: 0% 50%;
            content: '';
            border-bottom: ${(props: props) =>
                props.scrollPosition
                    ? '3px solid black'
                    : '3px solid #000000;'};
            transform: scaleX(0);
            transition: 0.6s ease;
        }
    }
`;
function App() {
    const isWidthLarge = useMediaQuery({ minWidth: '1250px' });
    const isWidthSmall = useMediaQuery({ minWidth: '700px' });
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState<scroll>({
        Top: false,
        AboutMe: false,
        Skill: false,
        Project: false,
    });
    const [slide, setSlide] = useState<boolean>(false);
    const [changeAni, setChangeAni] = useState<boolean>(false);
    const onHomeClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const onAboutMeClick = () => {
        aboutMeRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    };
    const onProjectClick = () => {
        projectRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    };
    const onContactClick = () => {
        contactRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    };
    const onSkillsClick = () => {
        skillsRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    };
    const handleScroll = () => {
        if (window.scrollY >= 20) {
            setScroll({ ...scroll, Top: true });
        } else {
            setScroll({ ...scroll, Top: false });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    useEffect(() => {
        if (changeAni) {
            setSlide(true);
        } else {
            setTimeout(() => {
                setSlide(false);
            }, 700);
        }
    }, [changeAni]);
    return (
        <OutLine>
            <TopNavBar
                scrollPosition={scroll.Top}
                isWidthLarge={isWidthLarge}
                isWidthSmall={isWidthSmall}
            >
                <div onClick={onHomeClick}>{"SooHwan's\nPage"}</div>
                <div>
                    <p onClick={onAboutMeClick}>About me</p>
                    <p onClick={onSkillsClick}>Skills</p>
                    <p onClick={onProjectClick}>Project</p>
                    <p onClick={onContactClick}>Contact</p>
                    {!isWidthSmall && (
                        <GiHamburgerMenu
                            size={30}
                            cursor="pointer"
                            onClick={() => {
                                setChangeAni(!changeAni);
                            }}
                        />
                    )}
                </div>
            </TopNavBar>
            {!isWidthSmall && slide && (
                <NavSlide
                    isWidthLarge={isWidthLarge}
                    scrollPosition={scroll.Top}
                    slide={changeAni}
                    onClick={() => {
                        setChangeAni(!changeAni);
                    }}
                >
                    <p onClick={onAboutMeClick}>About me</p>
                    <p onClick={onSkillsClick}>Skills</p>
                    <p onClick={onProjectClick}>Project</p>
                    <p onClick={onContactClick}>Contact</p>
                </NavSlide>
            )}
            <Main isWidthLarge={isWidthLarge} isWidthSmall={isWidthSmall} />
            <AboutMe
                ref={aboutMeRef}
                isWidthLarge={isWidthLarge}
                isWidthSmall={isWidthSmall}
            />
            <Skills
                ref={skillsRef}
                isWidthLarge={isWidthLarge}
                isWidthSmall={isWidthSmall}
            />
            <Project
                ref={projectRef}
                isWidthLarge={isWidthLarge}
                isWidthSmall={isWidthSmall}
            />
            <Contact
                ref={contactRef}
                isWidthLarge={isWidthLarge}
                isWidthSmall={isWidthSmall}
            />
        </OutLine>
    );
}

export default App;
