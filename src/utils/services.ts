import axios, { AxiosResponse } from "axios";

const instance = axios.create({
//   baseURL: "https://common-server-ldx7.onrender.com/api/portfolio",
  baseURL: "http://localhost:5002/api/countries",
});

export const getAll = async (page:number
 
): Promise<AxiosResponse<any>> => {
  try {
    const response = await instance.get<any>(
      `/all?page=${page}`
    );

      
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