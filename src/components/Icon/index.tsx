/**
 * Icon组件，图标，fonticon
 */
// import { ReactPropTypes } from 'react';
import './index.less';

type IconPropTypes = {
    style?: any;
    type: string;
    size?: number;
};

const Icon = (props: IconPropTypes) => {
    const { type, size = 20, style = {}, ...otherProps } = props;
    const styles = { width: size, height: size, ...style };
    return (
        <i className={`${type}_icon`} style={{ ...styles }} {...otherProps} />
    );
};

export default Icon;
