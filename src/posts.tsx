import { Datagrid, EditButton, List, ReferenceField, TextField } from "react-admin";

export const PostList = () => (
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