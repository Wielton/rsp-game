import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';

//   This is the syntax for creating your store || name the store something


// export const useCounterStore = defineStore('counter', {
//     state : () => {
//         return{

//         }
//     },
//     actions: {

//     },
//     getters: {

//     }
// })
    // getters: {
    //     firstInitial: state => {
    //         return state.username.charAt(0);
    //     },
    //     // create two getters for the response
    //     quoteHttpCode : state =>{
    //         if (state.kanyeResponse){
    //             return state.kanyeResponse.status;
    //         }
    //         return undefined;
    //     },
    //     quoteText : state =>{
    //         if (state.kanyeResponse){
    //             return state.kanyeResponse.data.quote;
    //         }
    //         return undefined;
            
    //     }
    // }
export const useLoginStore = defineStore('login',{
    state : ()=>{
        return {
            title: 'RPS',
            isLoggedIn : false,
            email: undefined,
            password: 'Password',
            userToken: ''
        }
    },
    actions: {
        loginRequest() {
            
            axios.request({
                url: "https://reqres.in/api/login",
                method: "POST",
                headers : {
                    'Content-Type' : 'application/json'
                    },
                data : {
                    "email": this.email,
                    "password": this.password
                    }
            }).then((response)=>{
                console.log(response.data.token);
                this.userToken = response.data.token;
                console.log(this.userToken);
                cookies.set('sessionToken', this.userToken);
                this.loginSuccess();

            }).catch((error)=>{
                console.log(error);
                
            })
            
            
            },
            loginSuccess(){

            }
            ,
            logout(){
                cookies.remove('sessionToken');
            }
        },

        getters: {
            
}


})