import React, { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { props, propsType } from '../type/type';

const Section = styled.section`
    position: relative;
    top: ${(props: props) => (props.isWidthLarge ? '112px' : '100px')};
    bottom: 0;
    display: flex;
    flex-direction: column;
    //align-items: center;
    color: #ffffff;
    width: 100%;
    height: ${(props: props) =>
        props.isWidthLarge ? 'calc(100vh - 112px)' : 'calc(100vh - 100px)'};
    background-color: #fbae2f;
    transition: 0.7s ease;
    overflow: auto;
    div:nth-child(1) {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fbae2f;
        z-index: 2;
        h1 {
            font-size: ${(props: props) =>
                props.isWidthLarge ? '50px' : '40px'};
            margin: 0;
        }
    }
    div:nth-child(2) {
        position: absolute;
        top: 85px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 60%;
        max-height: 70%;
        height: ${(props: props) => (props.isView ? '80%' : '5%')};
        border-radius: 20px;
        border: 5px solid white;
        transition: 1.2s ease;
        overflow: auto;
        flex-wrap: wrap;
        padding: 20px;
        column-gap: 50px;
        row-gap: ${(props: props) => (props.isWidthSmall ? '20px' : '0')};
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;
const SkillsLogo = styled.img`
    width: ${(props: props) => (props.isWidthSmall ? '230px' : '140px')};
    height: ${(props: props) => (props.isWidthSmall ? '112px' : '70px')};
    background-size: cover;
    border-radius: 50%;
    transition: 0.7s ease;
    &:hover {
        scale: 1.2;
    }
`;

const Skills = forwardRef<HTMLDivElement, propsType>((props, ref) => {
    const { isWidthSmall, isWidthLarge } = props;
    const [box, inView] = useInView();

    return (
        <Section
            ref={ref}
            isWidthLarge={isWidthLarge}
            isWidthSmall={isWidthSmall}
            isView={inView}
        >
            <div>
                <h1>Skills</h1>
            </div>
            <div ref={box}>
                <SkillsLogo isWidthSmall={isWidthSmall} src="/img/React.png" />
                <SkillsLogo
                    isWidthSmall={isWidthSmall}
                    src="/img/typescript.png"
                />
                <SkillsLogo
                    isWidthSmall={isWidthSmall}
                    src="/img/reactquery.png"
                />
                <SkillsLogo isWidthSmall={isWidthSmall} src="/img/recoil.png" />
                <SkillsLogo isWidthSmall={isWidthSmall} src="/img/redux.png" />
                <SkillsLogo isWidthSmall={isWidthSmall} src="/img/github.png" />
                <SkillsLogo
                    isWidthSmall={isWidthSmall}
                    src="/img/githubaction.png"
                />
                <SkillsLogo
                    isWidthSmall={isWidthSmall}
                    src="/img/amazon-s3.png"
                />
            </div>
        </Section>
    );
});
export default Skills;
