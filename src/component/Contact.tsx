import React, { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { props, propsType } from '../type/type';
import { appear } from './AboutMe';

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
    background-color: #000000;
    transition: 0.7s ease;
    overflow: auto;
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        //align-items: center;
        white-space: pre-line;
        font-size: 30px;
        animation: ${(props: props) => props.isView && appear} 2s ease;
        word-break: break-all;
        p {
            width: fit-content;
            font-size: ${(props: props) =>
                props.isWidthLarge
                    ? '40px'
                    : props.isWidthSmall
                    ? '35px'
                    : '20px'};
        }
        a {
            text-decoration: none;
        }
    }
`;

const Contact = forwardRef<HTMLDivElement, propsType>((props, ref) => {
    const [titleRef, inView] = useInView();
    const { isWidthSmall, isWidthLarge } = props;
    return (
        <Section
            ref={ref}
            isWidthLarge={isWidthLarge}
            isWidthSmall={isWidthSmall}
            isView={inView}
        >
            <div ref={titleRef}>
                <h1>Contact</h1>
            </div>
            <div>
                <p>
                    Email :
                    <a href="mailto:minsoohwan2@gmail.com">
                        minsoohwan2@gmail.com
                    </a>
                </p>
                <p>Call : 010-4812-5419</p>
                <p>
                    Github :
                    <a href="https://github.com/minsoohwan">
                        https://github.com/minsoohwan
                    </a>
                </p>
            </div>
        </Section>
    );
});
export default Contact;
