// ${props => props.fontSize={[ 4, 5 ]} && css`
//   line-height: 1.15
// `}

const textFonts = css`
  ${props => props.light && css`
    @font-face {
      font-family: 'GT-Eesti-Pro-Display-Light';
      src: url('/static/fonts/GT-Eesti-Pro-Display-Light.woff');
      src: local('GT-Eesti-Pro-Display-Light'),
           url('/static/fonts/GT-Eesti-Pro-Display-Light.woff') format('woff');
    }
    font-family: 'GT-Eesti-Pro-Display-Light';
  `}

  ${props => props.medium && css`
    @font-face {
      font-family: 'GT-Eesti-Pro-Text-Medium';
      src: url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff');
      src: local('GT-Eesti-Pro-Text-Medium'),
           url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff') format('woff');
    }
    font-family: 'GT-Eesti-Pro-Text-Medium';
  `}

  ${props => props.bold && css`
    @font-face {
      font-family: 'GT-Eesti-Pro-Text-Bold';
      src: url('/static/fonts/GT-Eesti-Pro-Text-Bold.woff');
      src: local('GT-Eesti-Pro-Text-Bold'),
           url('/static/fonts/GT-Eesti-Pro-Text-Bold.woff') format('woff');
    }
    font-family: 'GT-Eesti-Pro-Text-Bold';
  `}

`;

// line-height: ${theme.headers.lineHeight};

const Texty = hoc('p').extend`
  ${textFonts}
  color: ${props => props.active ? theme.colors.brand : theme.colors.text};
`;

export { Texty }












// const Button({size = 'small', color = 'blue', children, ...props}) => (
//   <button {...props}>
//     {children}
//   </button>
// );

// const Header = props => (
//   <header>
//     <Heading>styled-system</Heading>
//     <Text>
//       Design system utilities for styled-components
//     </Text>
//   </header>
// )
//
// export default Header

// const Link = ({ className, children }) => (
// 	<a className={className}>
// 		{children}
// 	</a>
// )

// line-height: ${theme.headers.lineHeight};
// color: ${props => props.active ? theme.colors.brand : theme.colors.text};
// line-height: 1.05;

// const Display = ({
//   light,
//   medium,
//   ...props
// }) => (
//   <Headline light color={theme.colors.brand} fontSize={[ 6, 7 ]} >{ props.children }</Headline>
// )

// vars
// const Display = (props) => <Headline mediumWeight textColor fontSize={[ 6, 7 ]} mb={2}>{props.children}</Headline>

// const Display = ({ mediumWeight, textColor, children }) => (
//   <Headline fontSize={[ 6, 7 ]} mb={2}>
//     {children}
//   </Headline>
// )

// color: ${props => props.active ? theme.colors.brand : theme.colors.text};
// font-family: ${props => props.medium ? theme.fontFamilies.displayMedium : theme.fontFamilies.displayLight};

// HOC fucked attempt
// const Root = Component => {
//   const DisplayComponent = styled(Component)`
//     color: ${textColor};
//     font-family: ${mediumWeight}
//   `
//
//   return DisplayComponent
// }

const DisplayRoot = hoc('h1').extend`
  color: ${props => props.active ? theme.colors.brand : theme.colors.text};
`;

// const DisplayAlt = styled(Display)`
//   color: ${theme.colors.text};
//   font-family: ${theme.fontFamilies.displayMedium};
// `;

// const DisplayAlt = ({ medium, children }) => (
//   <Headline medium color={theme.colors.brand} fontSize={[ 6, 7 ]} mb={2}>
//     { children}
//   </Headline>
// )

// const Display = props => <Headline fontSize={[ 6, 7 ]}>{ props.children }</Headline>
// const Display = Headline.extend`
// ` => <Headline fontSize={[ 6, 7 ]}>{ props.children }</Headline>

// const Display = hoc('h1').extend`
//   color: ${props => props.activeColor ? theme.colors.brand : theme.colors.text};
//   font-family: ${props => props.lightWeight ? theme.fontFamilies.displayLight : theme.fontFamilies.displayMedium};
// `;