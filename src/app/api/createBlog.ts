/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server'

export async function createDoc(blog: unknown) {

  const response = await fetch(`https://prod-09.uksouth.logic.azure.com:443/workflows/a1e64c78a8e14271aab3fe3702030830/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=mIHvFcIvX5hRk3Ljml2PJBy0oJOTWtEPEm88MOY4d60`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blog),
  });

  const result = await response.json();
  return result;
}
