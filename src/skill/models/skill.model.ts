import { Field, ObjectType, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  level: number | null; 

  @Field()
  profileId: string;
}
