import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserApi, deleteUserApi, fetchUserByIdApi, fetchUsersApi, updateUserApi } from "./userActions";



  

  export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {

    const data = await fetchUsersApi();
    return data;
  });
  
  export const fetchUsersById = createAsyncThunk('users/fetchUsersById', async (id) => {
    
    console.log("dadadadadad",id)
    const data = await fetchUserByIdApi(id);
    return data;
  });
  

  export const createUser = createAsyncThunk(
    'users/createUser',
    async (user) => {
      const data = await createUserApi(user);
      return data;
    }
  );
  
 
  export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (user) => {
        console.log(user)
      const data = await updateUserApi(user);
      return data;
    }
  );
  

  export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (userId) => {
      await deleteUserApi(userId);
      return userId;
    }
  );

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading:false,
        users:[],
        error:false,
        message:null,
        user:{}
     },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending,(state)=>{
             state.loading=true;
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading=false
            state.users=action.payload.users;
        }),
        builder.addCase(fetchUsers.rejected,(state)=>{
           state.loading=false;
           state.users=null
           state.error=true
        }),
        builder.addCase(createUser.pending,(state)=>{
             state.loading=true;
        }),
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading=false
            state.message=action.payload.message;
        }),
        builder.addCase(createUser.rejected,(state)=>{
           state.loading=false;
           state.users=null
           state.error=true
        }),
        builder.addCase(updateUser.pending,(state)=>{
             state.loading=true;
        }),
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading=false
            state.message=action.payload.message;
        }),
        builder.addCase(updateUser.rejected,(state)=>{
           state.loading=false;
           state.user=null
           state.error=true
        }),
        builder.addCase(fetchUsersById.pending,(state)=>{
             state.loading=true;
        }),
        builder.addCase(fetchUsersById.fulfilled, (state, action) => {
            state.loading=false
            state.user=action.payload.user;
        }),
        builder.addCase(fetchUsersById.rejected,(state)=>{
           state.loading=false;
           state.user=null
           state.error=true
        })
        builder.addCase(deleteUser.pending,(state)=>{
             state.loading=true;
        }),
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading=false
            state.message=action.payload.message;
            const userId = action.payload;
            state.users=state.users.filter((user) => user._id !== userId);
        }),
        builder.addCase(deleteUser.rejected,(state)=>{
           state.loading=false;
           state.user=null
           state.error=true
        })
          
      
    },
  });

export default usersSlice.reducer;
