import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ProfileTitle } from "../profile/ProfileTitle";
import { ListingTitle } from "../listing/ListingTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Profile" label="Author">
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <ReferenceInput source="listing.id" reference="Listing" label="Listing">
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
