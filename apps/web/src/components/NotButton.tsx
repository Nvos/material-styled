import React from 'react';
import { Button as AntdButton, Card } from 'antd';
import { NativeButtonProps, AnchorButtonProps } from 'antd/lib/button/button';
import { ButtonProps } from 'antd/lib/button';
import { Button as MatButton } from '@material-ui/core';
import styled, { css } from 'styled-components';
import {} from 'styled-components/cssprop';
// https://github.com/sw-yx/react-typescript-cheatsheet
type ButtonType<P> = P extends NativeButtonProps
  ? NativeButtonProps
  : AnchorButtonProps;

// function asFC<P, C extends React.ComponentType<P> | React.Component<P>>(
//   Component: C,
// ) {
//   return (Component as unknown) as React.FunctionComponent<
//     GetComponentProps<C>
//   >;
// }

type JSXElementConstructor<P> =
  | ((props: P) => React.ReactElement | null)
  | (new (props: P) => React.Component<P, any>);

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

function asFC2<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
>(Component: C) {
  type Props = React.ComponentProps<typeof Component>;
  return Component as React.FC<Props>;
}

type AntdType = React.ComponentType<NativeButtonProps>;

type Test1 = React.FC<React.ComponentProps<typeof AntdButton>>;
type Test2 = React.FC<React.ComponentProps<AntdType>>;
const btn = asFC2(AntdButton);

const NotButton = styled(asFC2((AntdButton as unknown) as Test2))`
  border: 4px solid rebeccapurple;
`;

const WrappedMat = styled(asFC2(MatButton))`
  border: 4px solid purple;
`;

const style = css`
  border: solid 2px red;
  color: red;
`;

const StyledCard = styled(Card)``;

function Test() {
  if (Math.random()) {
    const [cnt, setCnt] = React.useState(0);
  } else {
    const [cnt, setCnt] = React.useState(1);
  }

  if (Math.random() === 0) {
    React.useEffect(() => {
      console.log('1122dasddasda');
    });
  }

  return (
    <div>
      <Card>
        dadas
        <StyledCard>Wow!</StyledCard>
        <WrappedMat>hoho</WrappedMat>
        <NotButton>dasdas</NotButton>
        <MatButton css={style}>Wtf</MatButton>
        <AntdButton css={style}>testt</AntdButton>
        <button type={'submit'} css={style}>
          WOW!
        </button>
      </Card>
    </div>
  );
}
export default Test;
