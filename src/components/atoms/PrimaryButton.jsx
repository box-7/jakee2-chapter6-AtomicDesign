import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';
export const PrimaryButton = (props) => {
        const { children } = props;
        return <SButton>{children}</SButton>
};

const SButton = styled(BaseButton)`
        background-color: #48514e;
`;

// prop-typesを使ってchildrenを検証する
PrimaryButton.propTypes = {
        children: PropTypes.node
 };


