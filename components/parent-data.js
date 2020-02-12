Vue.component('parent-data', {
    template: `
        <div>
            <h2>Acceso a datos padre</h2> 
            <p>{{ $parent.appName }}</p>
        </div>
    `
});