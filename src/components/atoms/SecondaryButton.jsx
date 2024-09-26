import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const SecondaryButton = (props) => {
        const { children } = props;
        return <SButton>{children}</SButton>
};

const SButton = styled(BaseButton)`
        background-color: #11999e;
`;

// prop-typesを使ってchildrenを検証する
SecondaryButton.propTypes = {
        children: PropTypes.node
};


