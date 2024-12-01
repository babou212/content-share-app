/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server'

export async function updateDoc(blog: unknown) {

  const response = await fetch(`https://prod-01.uksouth.logic.azure.com:443/workflows/28f2470efd70447a884520a892a3acc3/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=LM17h8xeTR3bpdO3SqIePOBcUkuBCxeELFwDC7Z5QsI`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blog),
  });

  const result = await response.json();
  return result;
}
