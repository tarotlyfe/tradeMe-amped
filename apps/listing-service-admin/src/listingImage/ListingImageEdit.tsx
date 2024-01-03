import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ListingTitle } from "../listing/ListingTitle";

export const ListingImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Alt" source="altText" />
        <ReferenceArrayInput
          source="listing"
          reference="Listing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ListingTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Order" source="order" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
