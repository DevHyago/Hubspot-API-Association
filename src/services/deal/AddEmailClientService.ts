import searchContactService from '../../repository/ContactsRepository';
import dealsRepository from '../../repository/DealsRepository';

type DataRequest = {
   dealId: string;
   email_do_cliente: string;
}

class AddEmailClientService{

   async execute({dealId, email_do_cliente}: DataRequest){

      const contact = await searchContactService.findByEmail(email_do_cliente);

      const associationData = {
         objectId: dealId,
         toObjectType: 'contacts',
         toObjectId: contact.id,
         associationBody: [
            {
                "associationCategory": "HUBSPOT_DEFINED",
                "associationTypeId": 3
            }
        ]
      }

      const responseAssociation = await dealsRepository.createAssociation(associationData);

      return responseAssociation;
   }
}

export default new AddEmailClientService();