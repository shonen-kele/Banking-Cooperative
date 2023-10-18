<script setup>
    import { computed } from 'vue';
    import {useSidebarStore} from '@/stores/sidebar'
    const router = useRouter()
    const useSidebar = useSidebarStore()
    const colorMode = useColorMode()
    const user = useSupabaseUser()
    const client = useSupabaseClient()

    const isDark = computed({
        get(){
            return colorMode.value === 'dark'
        },
        set(){
            colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
        }
    })

    const dropdownItems = [
        [
           {
            label:'Profile',
            click: () => {
                router.push('/profile')
            }
           },{
            label:'Settings'
           } 
        ],[
            {
                label:'Sign OUt',
                click: () => {
                    client.auth.signOut()
                }
            }
        ]
    ]
</script>

<template>
    <div>
        <UContainer>
            <header>
                <UButton
                    @click='() =>{
                        useSidebar.toggleSidebar()
                    }'
                >Menu</UButton>
                <div>Banking Business Coop</div>
                <div>
                    <div id='authetication-buttons' v-if='!user.value'>
                        <UButton
                            @click='router.push({path:"/sign-in"})'
                        >Sign in</UButton>
                        <UButton
                            @click='router.push({path:"/sign-up"})'                    
                        >Sign up</UButton>
                    </div>
                    <UDropdown v-else :items='dropdownItems'>
                        <UButton label='Options'></UButton>
                    </UDropdown>
                    <UButton
                        @click='isDark = !isDark'
                    >Theme: {{ colorMode.value }}</UButton>
                </div>
                
            </header>
        </UContainer>
    </div>
</template>

<style>
    header {
        display: flex;
        justify-content: space-between;
    }
</style>