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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CommentUpdateManyWithoutProfilesInput } from "./CommentUpdateManyWithoutProfilesInput";
import { Type } from "class-transformer";
import { ListingUpdateManyWithoutProfilesInput } from "./ListingUpdateManyWithoutProfilesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ProfileUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avatarUrl?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutProfilesInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutProfilesInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutProfilesInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutProfilesInput;

  @ApiProperty({
    required: false,
    type: () => ListingUpdateManyWithoutProfilesInput,
  })
  @ValidateNested()
  @Type(() => ListingUpdateManyWithoutProfilesInput)
  @IsOptional()
  @Field(() => ListingUpdateManyWithoutProfilesInput, {
    nullable: true,
  })
  listings?: ListingUpdateManyWithoutProfilesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { ProfileUpdateInput as ProfileUpdateInput };