import styled from 'styled-components';

import { BaseButton } from './BaseButton';

export const PrimaryButton = (props) => {
        const { children } = props;
        return <SButton>{children}</SButton>
};

// BaseButtonを呼び出して、スタイルを当てる
const SButton = styled(BaseButton)`
        background-color: #48514e;
`;

// prop-typesを使ってchildrenを検証する
import PropTypes from 'prop-types';
PrimaryButton.propTypes = {
        children: PropTypes.node
 };


