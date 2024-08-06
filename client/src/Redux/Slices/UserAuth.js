import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosinstance from "../../helper/ServerConnection";

const initialState={
    // getting all items from localStorage//DB
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    data: (localStorage.getItem('data') === 'undefined') ? {} : JSON.parse(localStorage.getItem('data'))  //.parse -> convert object to json
};

//sending dispatched value to server
export const createAccount = createAsyncThunk('/auth/signup',async(data)=>{
try{
 const res = axiosinstance.post('user/register',data); // sending data to specified server url
 toast.promise(res,{
    loading:"wait! creating your account",
    success:(data)=>{ return data?.data?.message},
    error:(data)=>{ return data?.data?.message}    
 })
 console.log(res)
 return (await res).data;

}
catch(error){
toast.error('Somthing went wrong!');
}
})

export const login = createAsyncThunk('/auth/login',async(data)=>{
    try{
     const res = axiosinstance.post('user/login',data); // sending data to specified server url
     toast.promise(res,{
        loading:"wait! authentication on progress...",
        success:(data)=>{ return data?.data?.message},
        error:(data)=>{ return data?.data?.message} 
     })
     console.log(res)
     return (await res).data;
    
    }
    catch(err){
      toast.error("login failed")
      return isRejectedWithValue(err?.message);
    }
    })


 export const logout = createAsyncThunk('/auth/logout',async()=>{
        try{
         const res= axiosinstance.post('user/logout'); 
         toast.promise(res,{
            loading:"wait! logout in progress...",
            success:(data)=>{ return data?.data?.message},
            error: "Failed to logout",
         })
         console.log(res?.data?.message)
         return (await res).data;
        }
        catch(err){           
        toast.error("Failed to logout")
       
        }
        })


 export const updateUser = createAsyncThunk('/user/editprofile',async(data)=>{
            try{
             const res = axiosinstance.put(`user/update/${data[0]}`, data[1]); 
             toast.promise(res,{
                loading:"wait! profile update in progress...",
                success:(data)=>{ return data?.data?.message},
                error:"Failed to update profile"
             }) 
             console.log(res?.data?.message)
             return (await res).data;
            }
            catch(error){     
            toast.error(error?.message)
            }
            })

 export const getUserProfile = createAsyncThunk('/user/profile',async()=>{
                try{
                 const res = await axiosinstance.post('user/me');
                 toast.promise(res,{
                  loading:"wait! profile is loading...",
                  success:(data)=>{ return data?.data?.message},
                  error:"Failed to get profile"
               }) 
               console.log(res?.data?.message) 
                 return (await res).data;
                }
                catch(e){    
                toast.error(e?.response?.data?.message)
                }
                }) ;
                
  export const changePassword = createAsyncThunk('/user/changepassword',async(userPassword)=>{
   try {
     const res = axiosinstance.post('/user/change-password',userPassword);
     toast.promise(res,{
      loading:"wait!  loading...",
      success:(data)=>{ return data?.data?.message},
      error: 'Failed to change password'
   })
   console.log(res?.data?.message)
   return (await res).data
      
   } catch (error) {
      toast.error(error?.response?.data?.message);
   }
  });

  export const forgetPassword = createAsyncThunk('/auth/forgetPassword',async(email)=>{
   try {
     const res = axiosinstance.post('/user/forget',email);
     toast.promise(res,{
      loading:"wait! loading...",
      success:(data)=>{ return data?.data?.message},
      error: 'Failed to send verification link'
   })
   console.log(res?.data?.message)
   return (await res).data
      
   } catch (error) {
      toast.error(error?.response?.data?.message);
   }
  });

  export const resetPassword = createAsyncThunk('/user/reset',async(data)=>{
   try {
     const res = axiosinstance.post(`/user/reset/${data.resetToken}`,{password: data.password});
     toast.promise(res,{
      loading: "wait! Resetting...",
      success:(data)=>{ return data?.data?.message},
      error: 'Failed to reset password'
   })
   return (await res).data
      
   } catch (error) {
      toast.error(error?.response?.data?.message);
   }
  });

  
   

//create slice
const AuthSlice = createSlice({
    name:'auth', //slice name
    initialState,
    reducers: {},
    extraReducers: (builder) => { // use to responds to an action of anotherSlice
         builder
        .addCase(login.fulfilled,(state,action) => {
          localStorage.setItem("data",JSON.stringify(action?.payload?.data));
          localStorage.setItem("isLoggedIn",true);
          state.isLoggedIn = true;
          state.data = action?.payload?.data;
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.isLoggedIn = false;
            state.data = {};
        })
        .addCase(getUserProfile.fulfilled,(state,action) => {         
            localStorage.setItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn",true); 
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
          })
    }
});

 export default AuthSlice.reducer; // export paticular value