import axios from 'axios';

type AssociationData = {
   objectId: string;
   toObjectType: string;
   toObjectId: string;
   associationBody: any;
}

class DealsRepository{

   async createAssociation({objectId, toObjectType, toObjectId, associationBody}: AssociationData){
      try{
         const association = await axios.put(`${process.env.BASE_URL}/v4/objects/deals/${objectId}/associations/${toObjectType}/${toObjectId}`,
            associationBody
         ,{
            headers: {
               Authorization: `Bearer ${process.env.PRIVATE_APP_TOKEN}`,
               'Content-Type': 'application/json'
            }
         });
         return association.data;
      }catch(e){
         throw new Error(`No deal found with ID: ${objectId}`);
      }
   }

}

export default new DealsRepository();