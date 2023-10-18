<script setup>
    const supabase = useSupabaseClient()
    const email = ref()
    const password = ref()
    const emailErrorMessage = ref()
    const passwordErrorMessage = ref()
    const successMessage = ref()
    
    async function signUp(){
        try {
            const {error, data} = await supabase.auth.signUp({
                email: email.value,
                password: password.value,
            })
            if(error) throw error
            passwordErrorMessage.value = null
            emailErrorMessage.value = null
            successMessage.value = 'You have succesfully signed up'
        } catch (error) {
            if (error.message.includes('email')||error.message.includes('Email')){
                emailErrorMessage.value = error.message
            }
            if(error.message.includes('password') || error.message.includes('Password')){
                passwordErrorMessage.value = error.message
            }
        }
    }
        
        
</script>

<template>
    <div>
        <UForm @submit='signUp'>
            <UFormGroup label='Email' name='email' :error='emailErrorMessage'>
                <UInput v-model='email'/>
            </UFormGroup>

            <UFormGroup label='Password' name='password' :error='passwordErrorMessage'>
                <UInput v-model='password'/>
            </UFormGroup>

            <UButton type='submit'>
                Sign Up
            </UButton>
        </UForm>
    </div>
</template>