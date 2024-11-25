/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server'

export async function deleteDoc(id: string) {

  await fetch(`https://content-app.azurewebsites.net/api/delete-by-id/triggers/When_a_HTTP_request_is_received/invoke/blog/${id}?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=XGwz0wRZDCogjgDPhUc47WJngk0PDjQOKPO4GHO7Uok`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
