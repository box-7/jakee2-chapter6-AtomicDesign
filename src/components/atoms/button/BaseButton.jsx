import  styled from "styled-components";

 // outline: none;: フォーカス時の枠線を消す
export const BaseButton = styled.button`
        color: #fff;
        padding: 6px 24px;
        border: none;
        border-radius: 9999px;
        ontline: none;
        &:hover {
                cursor: pointer;
                opacity: 0.8;
        }
`;