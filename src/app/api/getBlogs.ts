/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server'

export async function getAllDocs() {

  const response = await fetch(`https://content-app.azurewebsites.net:443/api/get-all-docs/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=dOxrYCyv-tsHHpiZ50DV6y0mVzgGTXMzrAfXrAcguUI`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
}
