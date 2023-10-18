import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useSidebarStore = defineStore('sidebar',()=>{
    const isOpened = ref(false)
    const toggleSidebar = () => isOpened.value = !isOpened.value
    
    return {isOpened,toggleSidebar}
})