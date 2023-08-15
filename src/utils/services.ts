import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://common-server-ldx7.onrender.com/api/countries",
});

export const getAll = async (
  page: number,
  filterRegion: string,
  query: string | null
): Promise<AxiosResponse<any>> => {
    try {
      
    const response = query
      ? await instance.get<any>(
          `/all?page=${page}&searchQuery=${query}&region=${filterRegion}`
        )
      : await instance.get<any>(`/all?page=${page}&region=${filterRegion}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getCountryDetails = async (id:string): Promise<AxiosResponse<any>> => {
    try {
        const response = await instance.get<any>(`/all${id}`);

        return response;
    } catch (error) {
         return error.response;
    }
}