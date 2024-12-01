/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server'

export async function getAllDocs() {

  const response = await fetch(`https://prod-23.uksouth.logic.azure.com:443/workflows/4d19719a5d644014b35e5cf158af99a3/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=ncIhqecFc5zsmqKErUBhAK0ip0WaWJe-bWWS5Thn3aE`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
}
