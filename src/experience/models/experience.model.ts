import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => ID)
  id: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate: Date | null; 

  @Field(() => [String])
  achievements: string[];

  @Field()
  profileId: string;
}
