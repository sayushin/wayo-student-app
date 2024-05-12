const filemakerGet = async (token) => {
    const url = `${process.env.NEXT_PUBLIC_FILEMAKERDB_URL}/layouts/studentTOP/records`;
    const response = await fetch(url,{
         method: 'GET',
         headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
         }
    });

         const responseText = JSON.parse(await response.text());
         console.log(responseText)
         return responseText;

}

export default filemakerGet