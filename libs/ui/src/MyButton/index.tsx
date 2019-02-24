import React from 'react';
// import { Button } from 'antd';
import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
// import { ButtonProps } from 'antd/lib/button';
import styled from 'styled-components';

// const MyButton = styled((props: ButtonProps) => <Button {...props as any} />)`
//   margin: 12px;
// `;
const MyButton = styled(Button as React.FunctionComponent<ButtonProps>)``;
export default MyButton;
