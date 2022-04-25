<template>
    <v-main>
        <h1>{{title}}</h1>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
    
            <v-text-field
                v-model="password"
                :counter="10"
                :rules="passwordRules"
                label="Password"
                required
            ></v-text-field>

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="loginRequest"
                >
                Login
            </v-btn>
        </v-form>
            <v-alert type="error" v-if="isAlert">
                Login failed.  Please try again.
            </v-alert>
    </v-main>
</template>

<script>
import { useLoginStore } from '@/stores/loginStore';
import { mapState, mapWritableState } from 'pinia';


    export default {
        name: 'LoginComponent',
        data(){
            return{
            store: undefined,
            isAlert : false,
            valid: true,
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length <= 10) || 'Password must be less than 10 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            
}
        },
        
        computed: {
            //Initial 
            ...mapState(useLoginStore,['title',]),
            ...mapWritableState(useLoginStore,['email', 'password']),
            //Getters
            
            //Actions
            ...mapState(useLoginStore,['loginRequest'])
        },
        
        
        methods: {
            
        
        validate () {
            this.$refs.form.submit()
            },
            // reset () {
            // this.$refs.form.reset()
            // },
            // resetValidation () {
            // this.$refs.form.resetValidation()
        },

        
        mounted () {
            const router = this.$router;
            this.store = useLoginStore();
            useLoginStore().$onAction(({name, after})=>{
                if (name == "loginSuccess"){
                    after(()=>{
                        router.push({path: '/game'}); 
                    })
                } else {
                    this.isAlert = true;
                }
            })
        },
        }
    
</script>

<style lang="scss" scoped>

</style>

