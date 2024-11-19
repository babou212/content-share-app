/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server'

export async function createDoc(blog: unknown) {

  const response = await fetch(`https://content-app.azurewebsites.net:443/api/create-new-doc/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=l8g4wYIRqMxU9XYDnmmYIemptSInPDzm33DyKfgCbmA`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blog),
  });

  const result = await response.json();
  console.log(result);
  return result;
}
