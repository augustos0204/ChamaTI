import React from 'react';

import { ContainerSugestao, Img, Label, Option } from './styles';

import img1 from '../../images/11.png';
import img2 from '../../images/12.png';
import img3 from '../../images/13.png';
import img4 from '../../images/14.png';

const items = [
    {
        key: String(Math.random()),
        img: img1,
        label: 'Impressora',
    },

    {
        key: String(Math.random()),
        img: img2,
        label: 'Notebooks',
    },

    {
        key: String(Math.random()),
        img: img3,
        label: 'Desktops',
    },

    {
        key: String(Math.random()),
        img: img4,
        label: 'Celulares',
    },

    {
        key: String(Math.random()),
        img: img4,
        label: 'Celulares',
    },

    {
        key: String(Math.random()),
        img: img4,
        label: 'Celulares',
    },


]

export default function Sugestoes() {
    return (

        <ContainerSugestao>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.img}/>
                    <Label>{item.label}</Label>
                </Option>

            ))}
        </ContainerSugestao>
    );
}