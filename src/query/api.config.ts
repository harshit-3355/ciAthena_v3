import axios, { type AxiosInstance } from 'axios';

type apiLinksType = Record<string, string>;

export const apiLinks: apiLinksType = {
  sampleLink: import.meta.env.VITE_SAMPLE_LINK,
};

export const axiosPrivate: AxiosInstance = axios.create();
