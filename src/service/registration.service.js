import { postRequest } from "@/lib/AxiosService";

export async function serviceRegistrationPage(params) {
    return await postRequest('registration', params);// blog/data
}