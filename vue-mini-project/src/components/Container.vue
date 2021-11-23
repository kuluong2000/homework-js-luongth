<template>
    <div class="container">
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="tabs"></slot>
        </main>
        <footer class="footer">
            <slot></slot>
        </footer>
    </div>
</template>
