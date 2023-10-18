<script setup>
    import {useSidebarStore} from '@/stores/sidebar'
    const useSidebar = useSidebarStore()

    //Items for accordian navigation in sidebar
    const items = [{
        label: 'Banking',
        slot:'banking-navigation'
    },{
        label: 'Borrowing',
        slot:'borrowing-navigation'
    },{
        label:'Investing',
        slot:'investing-navigation'
    },{
        label:'Insurance',
        slot:'insurance-navigation'
    },{
        label:'Wellbeing',
        slot:'wellbeing-navigation'
    },{
        label:'Help',
        slot:'help-navigation'
    }]
    
</script>

<template>
    <div>
        <USlideover 
            v-model='useSidebar.isOpened'
            side='left'
            :overlay='false'
        >
            <UButton
            v-if='useSidebar.isOpened'
            @click='()=>{
                useSidebar.toggleSidebar()
                console.log("clicked")
                }'
            >Close Menu</UButton>
            <UAccordion 
                :items='items' 
                v-if='useSidebar.isOpened'
                color='primary'
                variant='soft'
            >
                <template #banking-navigation>
                    <ul>
                        <li><NuxtLink to='/current-accounts'>Current accounts</NuxtLink></li>
                        <li><NuxtLink to='/savings-accounts'>Savings accounts</NuxtLink></li>
                        <li><NuxtLink to='/international-services'>International services</NuxtLink></li>
                    </ul>
                </template>
                <template #borrowing-navigation>
                    <ul>
                        <li><NuxtLink to='/credit-cards'>Credit cards</NuxtLink></li>
                        <li><NuxtLink to='/loans'>Loans</NuxtLink></li>
                        <li><NuxtLink to='/mortgages'>Mortgages</NuxtLink></li>
                    </ul>  
                </template>
                <template #investing-navigation>
                    <ul>
                        <li><NuxtLink to='/investing'>Investing</NuxtLink></li>
                        <li><NuxtLink to='/advice-options'>Advice options</NuxtLink></li>
                        <li><NuxtLink to='/visualise-retirement'>Visualise your retirement</NuxtLink></li>
                        <li><NuxtLink to='/improve-knowledge'>Improve your knowledge</NuxtLink></li>
                    </ul>  
                </template>
                <template #insurance-navigation>
                    <ul>
                        <li><NuxtLink to='/insurance'>Insurance</NuxtLink></li>
                        <li><NuxtLink to='/life'>Life</NuxtLink></li>
                        <li><NuxtLink to='/claims'>Claims</NuxtLink></li>
                    </ul> 
                </template>
                <template #wellbeing-navigation>
                    <ul>
                        <li><NuxtLink to='/financial-fitness'>Financial fitness</NuxtLink></li>
                        <li><NuxtLink to='/new-beginnings'>New beginnings</NuxtLink></li>
                        <li><NuxtLink to='/life-events'>Life events</NuxtLink></li>
                    </ul> 
                </template>
                <template #help-navigation>
                    <ul>
                        <li><NuxtLink to='/manage-account'>Managing your account</NuxtLink></li>
                        <li><NuxtLink to='/fraud-security'>Fraud and security</NuxtLink></li>
                        <li><NuxtLink to='/digital-banking'>Digital banking</NuxtLink></li>
                    </ul>
                </template>
            </UAccordion>
        </USlideover>
    </div>
</template>
