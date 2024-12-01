/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server'

export async function deleteDoc(id: string) {

  await fetch(`https://prod-00.uksouth.logic.azure.com/workflows/3761cda09334477e97e4428a34073831/triggers/When_a_HTTP_request_is_received/paths/invoke/blog/${id}?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=SJ5nk6GHFFccvC6YFCbkZLjZS_FkS3SRvZpsLHVntuI`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
