<template>
  <div>
    <MainHeader/>
    <NuxtLayout name='default'>
      <NuxtPage/>
    </NuxtLayout>
    <Sidebar/>
  </div>
</template>

<style>
  :root {
    --main-colour-1: #815e5b ;
    --main-colour-2: #685155;
    --main-colour-3: #7a6f9b;
    --main-colour-4: #8b85c1;
    --main-colour-5: #d4cdf4;
  }

  .dark-mode body{
    background-color: #685155;
  }
  
</style>