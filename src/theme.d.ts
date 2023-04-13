import { Theme, ThemeOptions, Breakpoints } from '@mui/material/styles';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xxs: true;
  }
  // The value of `type Breakpoint` will be `"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"`.
}
