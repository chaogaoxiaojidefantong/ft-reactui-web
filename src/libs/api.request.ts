import config from "../config/config";
import HttpRequest from "./axios";
export const baseUrl:string = process.env.NODE_ENV === 'development' ? config.dev : config.pro;
export const axios=new HttpRequest(baseUrl);