import { css } from 'styled-components';
import {
    LobsterRegular
} from '../assets/fonts/';

export const LobsterFontFace = css`
    @font-face {
        font-family: 'lobster';
        font-weight: normal;
        font-style: normal;
        src: url('${LobsterRegular}');
        src: url('${LobsterRegular}') format('truetype');
    }
`;