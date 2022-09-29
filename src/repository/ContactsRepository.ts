import axios from 'axios';

class Contacts{

   async findByEmail(email: string){
      try{
         const client = await axios.get(
            `${process.env.BASE_URL}/v3/objects/contacts/${email}?idProperty=email`, {
               headers: {
                  Authorization: `Bearer ${process.env.PRIVATE_APP_TOKEN}`,
                  'Content-Type': 'application/json'
               }
         });

         const response = client.data;
         return response;
         
      }catch(e){
         throw new Error('No user with this email was found.');
      }
   }

}

export default new Contacts();