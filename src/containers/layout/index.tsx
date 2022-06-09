import React from 'react';

import { PageWrapper } from './styles';

type LayoutProps = { children: JSX.Element };

const Layout = ({ children }: LayoutProps) => <PageWrapper>{children}</PageWrapper>;

export default Layout;
