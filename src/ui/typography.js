import { css } from "styled-components"

const fontFamily= 'Poppins'

const title={
    hero:css`
    font-family: ${fontFamily};
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -1.68px;
    margin-bottom: 18px;
    `
    ,
    h3: css`
    font-family: ${fontFamily};
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 18px;
    `
}

const body={
    b2: css`
    font-family: ${fontFamily};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.336%;
    `,
    b3: css`
    font-family: ${fontFamily};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    `
}

export const textStyles={
    title,
    body
}