<template>
    <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
            <router-link to="/">
                <a class="p-2 link-secondary">Home</a>
            </router-link>

            <router-link to="/languajesView">
                <a class="p-2 link-secondary">Lenguajes</a>
            </router-link>

            <router-link to="/projectsView">
                <a class="p-2 link-secondary">Projectos</a>
            </router-link>

            <router-link to="/trendsView">
                <a class="p-2 link-secondary">Tendencias</a>
            </router-link>

            <router-link to="/aboutMe">
                <a class="p-2 link-secondary">Sobre mi</a>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>