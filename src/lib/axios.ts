import axios from "axios";

import { NativeModules } from 'react-native';

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];
console.log(scriptHostname)
export const api = axios.create({
  baseURL: scriptHostname
})