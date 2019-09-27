import styled from 'styled-components';
import { Responsive } from 'semantic-ui-react';
import { tabletOnly, computerOnly } from './constants';

export const flexBoxMixin = (direction, justify, align, wrap) => {
    return `display: flex;
            flex-direction: ${direction || 'row'};
            justify-content: ${justify || 'flex-start'};
            align-items: ${align || 'flex-start'};
            flex-wrap: ${wrap || 'wrap'}`;
};

export const flexBoxMixinMobile = (direction, justify, align, wrap) => {
    return `
            @media (max-width: 767px){
                display: flex;
                flex-direction: ${direction || 'row'};
                justify-content: ${justify || 'flex-start'};
                align-items: ${align || 'flex-start'};
                flex-wrap: ${wrap || 'wrap'};
            }`;
};

export const flexBoxMixinTablet = (direction, justify, align, wrap) => {
    return `
            @media (min-width: 767px) and (max-width: 991px){
                display: flex;
                flex-direction: ${direction || 'row'};
                justify-content: ${justify || 'flex-start'};
                align-items: ${align || 'flex-start'};
                flex-wrap: ${wrap || 'wrap'};
            }`;
};

export const flexBoxMixinComputer = (direction, justify, align, wrap) => {
    return `
            @media (min-width: 991px){
                display: flex;
                flex-direction: ${direction || 'row'};
                justify-content: ${justify || 'flex-start'};
                align-items: ${align || 'flex-start'};
                flex-wrap: ${wrap || 'wrap'};
            }`;
};

export const Column = styled.div.attrs(props => ({
    justify: props.justify || 'flex-start',
    align: props.align || 'flex-start',
    padding: props.padding || 0,
}))`
    padding: ${props => props.padding};
    ${props => flexBoxMixin('column', props.justify, props.align)};
`;

export const Row = styled.div.attrs(props => ({
    justify: props.justify || 'flex-start',
    align: props.align || 'flex-start',
    padding: props.padding || 0,
}))`
    padding: ${props => props.padding};
    ${props => flexBoxMixin('row', props.justify, props.align)}
`;

export const FlexBox = styled.div.attrs(props => ({
    direction: props.direction || 'row',
    justify: props.justify || 'flex-start',
    align: props.align || 'flex-start',
}))`
    display: flex;
    flex-direction: ${props => props.direction}
    justify-content: ${props => props.justify}
    align-items: ${props => props.align}
`;

//
//WIP: Make a container div that is responsive and flexy and resuable
//
//For now the flexBoxMixin will suffice
//
export const ResponsiveFlex = styled(Responsive).attrs(props => ({
    direction: props.direction,
    justify: props.justify,
    align: props.align,
    wrap: props.warp,
}))`
    ${props =>
        flexBoxMixin(props.direction, props.justify, props.align, props.wrap)}
    margin-top: 55px;

    ${computerOnly} {
        background-color: red;
    }

    ${tabletOnly} {
        background-color: blue;
    }
`;
