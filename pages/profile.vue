<script setup>
    const user = useSupabaseUser()
</script>

<template>
    <div>
        {{ user.email }}
    </div>
</template>