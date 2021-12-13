import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agent,AgentDocument } from './Models/agents.model';

@Injectable()
export class AgentsService {
    constructor(@InjectModel(Agent.name) private readonly AgentModel : Model<AgentDocument>){}

    async registerAgent(payload){
        
        const {Dren_Origine_Dmde,Design_Cat_Dmde,Dren_Destination_Dmde,terms,...agent} = payload;
        const doc = {...agent}
        const _agent = new this.AgentModel(doc);
      
        return await _agent.save();
    }
}
