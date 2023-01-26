import React, {useRef} from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    height : .5em;
    background: #ECECEC;
    visibility: ${props => props.hidden ? 'hidden' : 'visible'};
    margin-top : 5%;
`;

const Filler = styled.div`
    display : inline-block;
    height: .5em;
    width : ${props => props.percent}%;
    background: #959595;
`;

const Circle = styled.div`
    width : .5em;
    height : .5em;
    background : black;
    border-radius : 50%;
`;

const numbers = [0,10,20,30,40,50,60,70,80,90,100];

const circles = numbers.map((number) => {
    return <Circle key={number} />
});

export default function ProgressBar({hidden, percent}) {
    const circle = useRef(null);
    return(
        <Container hidden ={hidden}>
            <circles />
            <Filler percent={percent} ref = {circle}/>
        </Container>

    );
}