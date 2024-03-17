import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AccountModel {
  @Field()
  number: string; 
}