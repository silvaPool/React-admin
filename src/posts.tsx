import { Datagrid, Edit, EditButton, List, ReferenceField, ReferenceInput, SimpleForm, TextField, TextInput } from "react-admin";

export const PostList = () => {

    return (
        <List>
            <Datagrid rowClick="edit">
            <TextField source="id" />
                {/* <ReferenceField source="userId" reference="users" /> */}
                <ReferenceField source="userId" reference="users" link="show" />
                <TextField source="title" />
                {/* <TextField source="body" /> */}
                <EditButton />
            </Datagrid>
        </List>
    )
};
export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
)