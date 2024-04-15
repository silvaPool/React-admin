import { Datagrid, EditButton, List, ReferenceField, TextField } from "react-admin";

export const PostList = () => (
    <List>
        {/* <Datagrid rowClick="edit"> */}
        <Datagrid>
        <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
           
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            <EditButton />
        </Datagrid>
    </List>
)