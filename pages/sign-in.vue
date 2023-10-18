<script setup>
    const supabase = useSupabaseClient()
    const email = ref()
    const password = ref()
    const emailErrorMessage = ref()
    const passwordErrorMessage = ref()
    const router = useRouter()
    async function signIn(){
        try {
            const {error} = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
            })
            if(error) throw error
            router.push('/profile')
        } catch (error) {
            if(error.message.includes('email')||error.message.includes('Email')){
                emailErrorMessage.value = error.message
            }
            if(error.message.includes('password')||error.message.includes('Password')){
                passwordErrorMessage.value = error.message
            }
        }
    }
</script>

<template>
    <div>
        <UForm @submit='signIn'>
            <UFormGroup label="Email" name="email" :error='emailErrorMessage'>
                <UInput v-model='email'/>
            </UFormGroup>

            <UFormGroup label='Password' name='password' :error='passwordErrorMessage'>
                <UInput v-model='password'/>
            </UFormGroup>

            <UButton type='submit'>Sign in</UButton>
        </UForm>
    </div>
</template>