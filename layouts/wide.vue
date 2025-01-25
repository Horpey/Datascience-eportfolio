<template>
  <div>
    <section class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <AppNavbar class="py-4" />
    </section>
    <div>
      <div class="bg-green-500 py-4 mb-10">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 class="text-white text-2xl font-bold">
            Deciphering Big Data - E-Portfolio
          </h1>
        </div>
      </div>
      <section class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <main class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8 z-30">
          <div class="lg:col-span-2">
            <AppSidebar />
          </div>
          <div class="lg:col-span-8">
            <slot />
          </div>
        </main>
        <AppFooter class="mt-10" />
      </section>
    </div>
  </div>
</template>
