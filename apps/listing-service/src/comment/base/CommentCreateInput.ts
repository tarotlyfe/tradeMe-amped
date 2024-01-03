/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfileWhereUniqueInput } from "../../profile/base/ProfileWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ListingWhereUniqueInput } from "../../listing/base/ListingWhereUniqueInput";

@InputType()
class CommentCreateInput {
  @ApiProperty({
    required: false,
    type: () => ProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => ProfileWhereUniqueInput, {
    nullable: true,
  })
  author?: ProfileWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => ListingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ListingWhereUniqueInput)
  @Field(() => ListingWhereUniqueInput)
  listing!: ListingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  text!: string;
}

export { CommentCreateInput as CommentCreateInput };