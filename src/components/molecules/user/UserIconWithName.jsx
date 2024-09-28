import styled from "styled-components";

export const UserIconWithName = (props) => {
        const { image, name} = props;
        return (
                <SContainer>
                        <SImg height={160} width={160} src={image} alt={name}  />
                        <SName>{name}</SName>
                </SContainer>
        );
};

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

// prop-typesを使ってchildrenを検証する
import PropTypes from 'prop-types';
UserIconWithName.propTypes = {
        image: PropTypes.node,
        name: PropTypes.node,
};

