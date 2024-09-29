import React, { memo, useContext} from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
        console.log("UserIconWithName");
        // const { image, name } = props;
        const { src, name } = props;

        // useContextで、UserContextのuserInfoを取得
        const { userInfo } = useContext(UserContext);
        const isAdmin = userInfo ? userInfo.isAdmin : false;
        return (
                <SContainer>
                        <SImg height={160} width={160} src={src} alt={name}  />
                        <SName>{name}</SName>
                        {isAdmin && <SEdit>編集</SEdit>}
                </SContainer>
        );
});

const SContainer = styled.div`
        text-align: center;
        background-color: pink;
`
const SImg = styled.img`
        border-radius: 50%;
`;

const SName = styled.p`
        border-radius: 50%;
        font-weight: bold;
        margin: 0;
        color: #40514e;
`;

const SEdit = styled.span`
        text-decoration: underline;
        color: #aaa;
        cursor: pointer;
`;



// prop-typesを使ってchildrenを検証する
import PropTypes from 'prop-types';
UserIconWithName.propTypes = {
        image: PropTypes.node,
        name: PropTypes.node,
        isAdmin: PropTypes.node,
};

