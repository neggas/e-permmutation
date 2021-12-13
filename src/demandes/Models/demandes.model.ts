import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document,Schema as MongooseSchema} from "mongoose"

@Schema()
export class Demande{

    @Prop({required:true})
    Date_Dmde:Date;

    @Prop({required:true})
    Annee_Scolaire_Dmnde:string;

    @Prop({required:true})
    Dren_Origine_Dmde:string;

    @Prop({required:true})
    Dren_Destination_Dmde:string;

    @Prop({required:true})
    Insp_Destination_Dmde:string;

    @Prop({required:true})
    Insp_Origin_Dmde:string;
}

export type DemandeDocument = Demande & Document;
export const DemandeSchema = SchemaFactory.createForClass(Demande);