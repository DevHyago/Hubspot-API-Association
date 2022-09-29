import { Request, Response } from 'express';
import addEmailClientService from '../services/deal/AddEmailClientService';

class DealsController{

   async addEmailClient(req: Request, res: Response){
      const dealId = req.body.object.objectId;
      const email_do_cliente =  req.body.object.properties.email_do_cliente;
      const result = await addEmailClientService.execute({dealId, email_do_cliente});
      return res.json(result);
   }

}

export default new DealsController();