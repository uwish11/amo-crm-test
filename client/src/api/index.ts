import axios from "axios";
export default async function createEntity<T1,T2>(entityUrl: string, data : T2) : Promise<T1> {
  try {
    const response = await axios.post<T1>(
      entityUrl,
      data,
      {
        baseURL: "http://localhost:3001/api",
      });
    return response.data
  } catch (e) {
    throw e;
  }
}
