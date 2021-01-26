import 'react-redux';

import { IRootState } from '.';


declare module 'react-redux' {
  export interface DefaultRootState extends IRootState {}
}