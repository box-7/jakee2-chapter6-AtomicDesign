import styled from 'styled-components';

import { BaseButton } from './BaseButton';

export const SecondaryButton = (props) => {
        const { children, onClick } = props;
        return <SButton onClick={onClick}>{children}</SButton>
};

// BaseButtonを呼び出して、スタイルを当てる
const SButton = styled(BaseButton)`
        background-color: #11999e;
`;

// prop-typesを使ってchildrenを検証する
import PropTypes from 'prop-types';
SecondaryButton.propTypes = {
        children: PropTypes.node
};


