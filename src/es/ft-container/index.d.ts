import React from 'react';
import { ConfigConsumerProps } from '../config-provider';
import enUS from './locale/en_US';
export interface FtContainerState {
}
export interface FtContainerProps {
    bg: React.ReactNode;
    con: React.ReactNode;
    style?: React.CSSProperties;
    prefixCls?: string;
    locale?: typeof enUS;
}
export default class FtContainer extends React.Component<FtContainerProps, FtContainerState> {
    renderContainer: ({ getPrefixCls }: ConfigConsumerProps) => JSX.Element;
    getDefaultLocale: () => {
        lang: {
            tonow: string;
        };
    };
    render(): JSX.Element;
}
